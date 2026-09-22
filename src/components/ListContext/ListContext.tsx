import { createContext } from 'preact'
import { useContext, useState, useEffect, useLayoutEffect, useCallback, useRef, useMemo } from 'preact/hooks'
import {
  createListDragController,
  indexListTree,
  isSameListTree,
  isWithinListBranch,
  moveInListTree,
  toListMoveRoots,
} from '../../utils'
import type {
  ListContextValue,
  ListContextProps,
  ListDragController,
  ListDropTarget,
  ListItemData,
  ListItemDragState,
  ListItemMeta,
} from './ListContext.types'

/* --- */

const RawListContext = createContext<ListContextValue | undefined>(undefined)

// Stable default so that omitting `selectedItemIds` doesn't produce a new
// array identity on every render (that would re-trigger sync effects forever).
const EMPTY_SELECTED_IDS: string[] = []

const areSetsEqual = (a: Set<string>, b: Set<string>) => {
  if (a.size !== b.size) return false
  for (const v of a) {
    if (!b.has(v)) return false
  }
  return true
}

const useListContext = () => {
  const context = useContext(RawListContext)
  if (!context) throw new Error('ListContext not found')
  return context
}

const NO_DRAG_STATE: ListItemDragState = {}

// A row's own slice of the drag state: only rows whose indicators change re-render.
const useListItemDragState = (id: string): ListItemDragState => {
  const { drag } = useListContext()
  const [state, setState] = useState(() => drag.getItemState(id))

  useLayoutEffect(() => {
    setState(drag.getItemState(id))
    return drag.subscribe(id, () => setState(drag.getItemState(id)))
  }, [drag, id])

  return state ?? NO_DRAG_STATE
}

const ListContext = (props: ListContextProps) => {
  const {
    items: controlledItems,
    selectedItemIds: controlledSelectedItemIds = EMPTY_SELECTED_IDS,
    selectionMode,
    deselectOnClickOutside = false,
    onItemsChange,
    canDrop,
    onSelectionChange,
    onKeyDown,
    children,
  } = props

  const hasControlledItems = controlledItems !== undefined

  const [internalItems, setInternalItems] = useState<ListItemData[]>(controlledItems ?? [])
  const [internalSelectedItems, setInternalSelectedItems] = useState<Set<string>>(new Set(controlledSelectedItemIds))
  const [selectionOriginIds, setSelectionOriginIds] = useState<Set<string>>(new Set())
  const itemMetaRef = useRef<Map<string, ListItemMeta>>(new Map())

  // Determine if we're in controlled state for each aspect
  const isItemsControlled = hasControlledItems && onItemsChange !== undefined
  const isSelectionControlled = onSelectionChange !== undefined

  // Use controlled values when available, otherwise use internal state.
  // For reading (selection/range/descendants), always prefer the latest items
  // passed via props when provided.
  const currentItems: ListItemData[] = hasControlledItems ? (controlledItems as ListItemData[]) : internalItems
  const currentSelectedItems = useMemo(
    () => (isSelectionControlled ? new Set(controlledSelectedItemIds) : internalSelectedItems),
    [isSelectionControlled, controlledSelectedItemIds, internalSelectedItems],
  )

  // Track anchor for range-selection and the root elements for outside-click detection
  const lastSelectedAnchorRef = useRef<string | null>(null)
  const rootElementsRef = useRef<Set<HTMLElement>>(new Set())

  const flattenItemsDepthFirst = useCallback((items: ListItemData[]): string[] => {
    const result: string[] = []
    const walk = (nodes: ListItemData[]) => {
      nodes.forEach((n) => {
        result.push(n.id)
        if (n.items && n.items.length) {
          walk(n.items)
        }
      })
    }
    walk(items)
    return result
  }, [])

  const collectDescendantsForId = useCallback(
    (rootId: string): string[] => {
      const ids: string[] = []
      const walk = (nodes: ListItemData[]): boolean => {
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i]
          if (n.id === rootId) {
            const addAll = (children?: ListItemData[]) => {
              if (!children) return
              for (let j = 0; j < children.length; j++) {
                const c = children[j]
                ids.push(c.id)
                addAll(c.items)
              }
            }
            addAll(n.items)
            return true
          }
          if (n.items && walk(n.items)) return true
        }
        return false
      }
      walk(currentItems)
      return ids
    },
    [currentItems],
  )

  // Full branch for selection purposes: the item plus all of its descendants,
  // excluding entries registered with selectable=false — unselectable items
  // never enter the selection regardless of how they were reached.
  const collectSelectableBranchIds = useCallback(
    (rootId: string): string[] =>
      [rootId, ...collectDescendantsForId(rootId)].filter((id) => itemMetaRef.current.get(id)?.selectable !== false),
    [collectDescendantsForId],
  )

  // Replace selection with exactly these ids (uncontrolled or via callback)
  const setSelection = useCallback(
    (itemIds: string[]) => {
      const next = new Set(itemIds)
      if (!isSelectionControlled) setInternalSelectedItems(next)
      onSelectionChange?.({ selectedItemIds: Array.from(next) })
    },
    [isSelectionControlled, onSelectionChange],
  )

  // Returns the resulting selection so callers (e.g. onSelect) can report the
  // actual state of the toggled item rather than guessing by inversion.
  const toggleSelect = useCallback(
    (itemId: string, options?: { range?: boolean; additive?: boolean }): Set<string> => {
      if (selectionMode === undefined) return currentSelectedItems

      const meta = itemMetaRef.current.get(itemId)
      if (meta?.selectable === false) return currentSelectedItems
      const isWithDescendants = meta?.selectionScope === 'withDescendants'

      const additive = Boolean(options?.additive)
      const range = Boolean(options?.range)

      const commit = (next: Set<string>): Set<string> => {
        lastSelectedAnchorRef.current = itemId
        if (areSetsEqual(next, currentSelectedItems)) return currentSelectedItems
        if (!isSelectionControlled) setInternalSelectedItems(next)
        onSelectionChange?.({ selectedItemIds: Array.from(next) })
        return next
      }

      if (selectionMode === 'single') {
        let next: Set<string>
        if (isWithDescendants) {
          const branchIds = collectSelectableBranchIds(itemId)
          const allSelected = branchIds.length > 0 && branchIds.every((id) => currentSelectedItems.has(id))
          next = allSelected ? new Set<string>() : new Set<string>(branchIds)
        } else {
          const already = currentSelectedItems.has(itemId)
          next = new Set<string>()
          if (!already) next.add(itemId)
        }
        return commit(next)
      }

      // multi
      if (range) {
        const order = flattenItemsDepthFirst(currentItems)
        let anchor = lastSelectedAnchorRef.current || itemId
        let start = order.indexOf(anchor)
        const end = order.indexOf(itemId)
        // If previous anchor no longer exists (e.g. after items tree change), fall back to current item
        if (start === -1) {
          anchor = itemId
          start = order.indexOf(anchor)
        }
        if (start === -1 || end === -1) return currentSelectedItems
        const [lo, hi] = start <= end ? [start, end] : [end, start]
        const rawRange = order.slice(lo, hi + 1)
        // Filter according to meta: skip unselectable; if selectionScope==withDescendants skip their descendants too
        const next = new Set<string>()
        const skipSet = new Set<string>()
        // Build a quick parent map to find descendants efficiently
        const parentOf = new Map<string, string | null>()
        const buildParents = (nodes: ListItemData[], parent: string | null) => {
          nodes.forEach((n) => {
            parentOf.set(n.id, parent)
            if (n.items) buildParents(n.items, n.id)
          })
        }
        buildParents(currentItems, null)
        const isDescendantOfSkipped = (id: string): boolean => {
          let cur: string | null | undefined = id
          while (cur) {
            if (skipSet.has(cur)) return true
            cur = parentOf.get(cur) || null
          }
          return false
        }
        rawRange.forEach((id) => {
          const meta = itemMetaRef.current.get(id)
          if (meta?.selectable === false) {
            if (meta?.selectionScope === 'withDescendants') {
              // If an unselectable item has selectionScope=withDescendants,
              // skip it and all of its descendants from the range.
              skipSet.add(id)
            }
            return
          }
          if (isDescendantOfSkipped(id)) return

          // When selectionScope="withDescendants", include the full branch:
          // the item itself plus all of its selectable descendants.
          if (meta?.selectionScope === 'withDescendants') {
            collectSelectableBranchIds(id).forEach((branchId) => next.add(branchId))
          } else {
            next.add(id)
          }
        })
        return commit(next)
      }

      if (additive) {
        const next = new Set(currentSelectedItems)
        if (isWithDescendants) {
          const branchIds = collectSelectableBranchIds(itemId)
          const branchSelected = branchIds.length > 0 && branchIds.every((id) => next.has(id))
          if (branchSelected) {
            branchIds.forEach((id) => next.delete(id))
          } else {
            branchIds.forEach((id) => next.add(id))
          }
        } else {
          if (next.has(itemId)) next.delete(itemId)
          else next.add(itemId)
        }
        return commit(next)
      }

      // default click acts like single anchor in multi-mode with toggle behaviour:
      // - if only this item (or its full branch) is selected, clicking it again deselects
      // - otherwise, replace selection with just this item (or its branch)
      let next: Set<string>
      if (isWithDescendants) {
        const branchIds = collectSelectableBranchIds(itemId)
        const branchSet = new Set<string>(branchIds)
        const isExactlyBranchSelected =
          branchSet.size === currentSelectedItems.size && branchIds.every((id) => currentSelectedItems.has(id))
        next = isExactlyBranchSelected ? new Set<string>() : branchSet
      } else {
        const isSingleItemSelected = currentSelectedItems.size === 1 && currentSelectedItems.has(itemId)
        next = isSingleItemSelected ? new Set<string>() : new Set<string>([itemId])
      }
      return commit(next)
    },
    [
      selectionMode,
      currentSelectedItems,
      isSelectionControlled,
      onSelectionChange,
      currentItems,
      flattenItemsDepthFirst,
      collectSelectableBranchIds,
    ],
  )

  const treeIndex = useMemo(() => indexListTree(currentItems), [currentItems])

  // The consumer's rule plus the one the tree itself imposes: a branch cannot
  // go inside itself.
  const canMove = useCallback(
    (roots: string[], target: ListDropTarget) => {
      if (roots.length === 0) return false
      const { parentId, index } = target
      if (parentId !== null) {
        if (!treeIndex.nodes.has(parentId)) return false
        if (roots.some((id) => isWithinListBranch(treeIndex, parentId, id))) return false
      }
      return canDrop ? canDrop({ draggedIds: roots, parentId, index }) : true
    },
    [treeIndex, canDrop],
  )

  // Unchecked: callers have asked canMove already. A move that leaves every
  // row where it was is not reported.
  const applyMove = useCallback(
    (roots: string[], target: ListDropTarget) => {
      const next = moveInListTree(currentItems, roots, target)
      if (!next || isSameListTree(next, currentItems)) return false

      if (!isItemsControlled) {
        setInternalItems(next)
      }
      onItemsChange?.({ items: next, move: { ids: roots, parentId: target.parentId, index: target.index } })
      return true
    },
    [currentItems, isItemsControlled, onItemsChange],
  )

  const moveItems = useCallback(
    (itemIds: string[], target: ListDropTarget) => {
      const roots = toListMoveRoots(treeIndex, itemIds)
      return canMove(roots, target) && applyMove(roots, target)
    },
    [treeIndex, canMove, applyMove],
  )

  // Outside-click to clear selection in single/multi modes
  useEffect(() => {
    if (selectionMode === undefined || !deselectOnClickOutside) return
    const handlePointerDown = (e: Event) => {
      const target = e.target as Node | null
      if (!target) return
      for (const root of rootElementsRef.current) {
        if (root.contains(target)) return
      }
      if (currentSelectedItems.size > 0) {
        const next = new Set<string>()
        if (!isSelectionControlled) setInternalSelectedItems(next)
        onSelectionChange?.({ selectedItemIds: Array.from(next) })
      }
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [selectionMode, deselectOnClickOutside, currentSelectedItems, isSelectionControlled, onSelectionChange])

  const dragImageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Fake drag image
    const ghost = document.createElement('div')
    ghost.style.width = '20px'
    ghost.style.height = '20px'
    ghost.style.opacity = '0'
    ghost.style.position = 'absolute'
    ghost.style.top = '-1000px'
    ghost.style.pointerEvents = 'none'

    document.body.appendChild(ghost)
    dragImageRef.current = ghost

    return () => {
      document.body.removeChild(ghost)
      dragImageRef.current = null
    }
  }, [])

  const registerRootElement = useCallback((el: HTMLElement | null) => {
    if (!el) return () => {}
    rootElementsRef.current.add(el)
    return () => {
      rootElementsRef.current.delete(el)
    }
  }, [])

  const registerItem = useCallback((id: string, meta: ListItemMeta) => {
    itemMetaRef.current.set(id, meta)
    return () => {
      itemMetaRef.current.delete(id)
    }
  }, [])

  const getItemMeta = useCallback((id: string) => {
    return itemMetaRef.current.get(id)
  }, [])

  const getNodeInfo = useCallback((id: string) => treeIndex.nodes.get(id), [treeIndex])

  const getChildIds = useCallback((parentId: string | null) => treeIndex.children.get(parentId) ?? [], [treeIndex])

  // The controller lives as long as the context and reads the latest tree and
  // rules through this ref, so its handlers never change identity.
  const latestRef = useRef({ treeIndex, canMove, applyMove })
  latestRef.current = { treeIndex, canMove, applyMove }

  const dragRef = useRef<ListDragController | null>(null)
  if (!dragRef.current) {
    dragRef.current = createListDragController({
      getTree: () => latestRef.current.treeIndex,
      getItemMeta: (id) => itemMetaRef.current.get(id),
      canMove: (roots, target) => latestRef.current.canMove(roots, target),
      applyMove: (roots, target) => latestRef.current.applyMove(roots, target),
      getDragImage: () => dragImageRef.current,
      isOwnNode: (node) => Array.from(rootElementsRef.current).some((root) => root.contains(node)),
    })
  }
  const drag = dragRef.current

  // The drag source may be gone by the time the drag ends (moved rows remount),
  // so its own dragend cannot be relied on to close the session.
  useEffect(() => {
    document.addEventListener('dragend', drag.end)
    return () => {
      document.removeEventListener('dragend', drag.end)
      drag.end()
    }
  }, [drag])

  useEffect(() => {
    if (isSelectionControlled) {
      // Bail out when the contents are equal: consumers often pass inline
      // arrays, and unconditionally creating a new Set here would re-render
      // (and re-run this effect) forever.
      setInternalSelectedItems((prev) => {
        const next = new Set(controlledSelectedItemIds)
        return areSetsEqual(prev, next) ? prev : next
      })
    }
  }, [controlledSelectedItemIds, isSelectionControlled])

  // Recompute selection origins based on the current selection and items tree.
  // - For items with selectionScope="individual", every selected item is an origin.
  // - For items with selectionScope="withDescendants", a branch origin is any
  //   item whose entire subtree is selected, and which does not have an
  //   ancestor that also meets this condition.
  useEffect(() => {
    const selected = currentSelectedItems
    if (selected.size === 0) {
      setSelectionOriginIds(new Set())
      return
    }

    // Build parent map for all items in the current tree
    const parentOf = new Map<string, string | null>()
    const buildParents = (nodes: ListItemData[], parentId: string | null) => {
      nodes.forEach((n) => {
        parentOf.set(n.id, parentId)
        if (n.items && n.items.length) {
          buildParents(n.items, n.id)
        }
      })
    }
    buildParents(currentItems, null)

    // Cache for branch-full-selected checks
    const branchFullySelected = new Map<string, boolean>()
    const isBranchFullySelected = (id: string): boolean => {
      if (branchFullySelected.has(id)) {
        return branchFullySelected.get(id) as boolean
      }
      const branchIds = collectSelectableBranchIds(id)
      const full = branchIds.length > 0 && branchIds.every((nodeId) => selected.has(nodeId))
      branchFullySelected.set(id, full)
      return full
    }

    const origins = new Set<string>()

    // 1) All selected "individual"-scope entries are simple origins.
    itemMetaRef.current.forEach((meta, id) => {
      if (meta.selectionScope === 'individual' && selected.has(id)) {
        origins.add(id)
      }
    })

    // 2) Additionally, compute origins for withDescendants branches as before.
    itemMetaRef.current.forEach((meta, id) => {
      if (meta.selectionScope !== 'withDescendants') return
      if (!selected.has(id)) return
      if (!isBranchFullySelected(id)) return

      // Skip if any ancestor is also a fully-selected withDescendants branch
      let cur = parentOf.get(id) ?? null
      while (cur) {
        const parentMeta = itemMetaRef.current.get(cur)
        if (parentMeta?.selectionScope === 'withDescendants' && selected.has(cur) && isBranchFullySelected(cur)) {
          return
        }
        cur = parentOf.get(cur) ?? null
      }

      origins.add(id)
    })

    setSelectionOriginIds(origins)
  }, [collectSelectableBranchIds, currentItems, currentSelectedItems])

  const contextValue: ListContextValue = useMemo(
    () => ({
      items: currentItems,
      selectedItemIds: currentSelectedItems,
      selectionOriginIds,
      deselectOnClickOutside,
      setSelection,
      toggleSelect,
      moveItems,
      drag,
      selectionMode,
      registerRootElement,
      registerItem,
      getItemMeta,
      getNodeInfo,
      getChildIds,
      getBranchIds: collectSelectableBranchIds,
      onKeyDown,
    }),
    [
      currentItems,
      currentSelectedItems,
      selectionOriginIds,
      deselectOnClickOutside,
      setSelection,
      toggleSelect,
      moveItems,
      drag,
      selectionMode,
      registerRootElement,
      registerItem,
      getItemMeta,
      getNodeInfo,
      getChildIds,
      collectSelectableBranchIds,
      onKeyDown,
    ],
  )

  return <RawListContext.Provider value={contextValue}>{children}</RawListContext.Provider>
}

export { ListContext, useListContext, useListItemDragState }
