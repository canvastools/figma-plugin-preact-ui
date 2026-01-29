import { createContext } from "preact"
import {
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "preact/hooks"
import type {
  ListContextValue,
  ListContextProps,
  ListItemData,
} from "./ListContext.types"

/* --- */

const RawListContext = createContext<ListContextValue | undefined>(undefined)

const useListContext = () => {
  const context = useContext(RawListContext)
  if (!context) throw new Error("ListContext not found")
  return context
}

const ListContext = (props: ListContextProps) => {
  const {
    items: controlledItems,
    selectedItemIds: controlledSelectedItemIds = [],
    selectionMode,
    deselectOnClickOutside = false,
    onItemsChange,
    onSelectionChange,
    children,
  } = props

  const hasControlledItems = controlledItems !== undefined

  const [internalItems, setInternalItems] = useState<ListItemData[]>(
    controlledItems ?? []
  )
  const [internalSelectedItems, setInternalSelectedItems] = useState<
    Set<string>
  >(new Set(controlledSelectedItemIds))
  const [selectionOriginIds, setSelectionOriginIds] = useState<Set<string>>(
    new Set()
  )
  const itemMetaRef = useRef<
    Map<
      string,
      {
        selectable?: boolean
        selectionScope?: "individual" | "withDescendants"
      }
    >
  >(new Map())
  const idToPathRef = useRef<Map<string, number[]>>(new Map())

  // Determine if we're in controlled state for each aspect
  const isItemsControlled = hasControlledItems && onItemsChange !== undefined
  const isSelectionControlled = onSelectionChange !== undefined

  // Use controlled values when available, otherwise use internal state.
  // For reading (selection/range/descendants), always prefer the latest items
  // passed via props when provided.
  const currentItems: ListItemData[] = hasControlledItems
    ? (controlledItems as ListItemData[])
    : internalItems
  const currentSelectedItems = useMemo(
    () =>
      isSelectionControlled
        ? new Set(controlledSelectedItemIds)
        : internalSelectedItems,
    [isSelectionControlled, controlledSelectedItemIds, internalSelectedItems]
  )

  // Track anchor for range-selection and the root elements for outside-click detection
  const lastSelectedAnchorRef = useRef<string | null>(null)
  const rootElementsRef = useRef<Set<HTMLElement>>(new Set())

  const flattenItemsDepthFirst = useCallback(
    (items: ListItemData[]): string[] => {
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
    },
    []
  )

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
    [currentItems]
  )

  // Replace selection with exactly these ids (uncontrolled or via callback)
  const setSelection = useCallback(
    (itemIds: string[]) => {
      const next = new Set(itemIds)
      if (!isSelectionControlled) setInternalSelectedItems(next)
      onSelectionChange?.({ selectedItemIds: Array.from(next) })
    },
    [isSelectionControlled, onSelectionChange]
  )

  const toggleSelect = useCallback(
    (itemId: string, options?: { range?: boolean; additive?: boolean }) => {
      if (selectionMode === undefined) return

      const meta = itemMetaRef.current.get(itemId)
      const isWithDescendants = meta?.selectionScope === "withDescendants"
      const areSetsEqual = (a: Set<string>, b: Set<string>) => {
        if (a.size !== b.size) return false
        for (const v of a) {
          if (!b.has(v)) return false
        }
        return true
      }

      const additive = Boolean(options?.additive)
      const range = Boolean(options?.range)

      if (selectionMode === "single") {
        let next: Set<string>
        if (isWithDescendants) {
          const branchIds = [itemId, ...collectDescendantsForId(itemId)]
          const allSelected =
            branchIds.length > 0 &&
            branchIds.every((id) => currentSelectedItems.has(id))
          next = allSelected ? new Set<string>() : new Set<string>(branchIds)
        } else {
          const already = currentSelectedItems.has(itemId)
          next = new Set<string>()
          if (!already) next.add(itemId)
        }
        if (areSetsEqual(next, currentSelectedItems)) {
          lastSelectedAnchorRef.current = itemId
          return
        }
        if (!isSelectionControlled) setInternalSelectedItems(next)
        onSelectionChange?.({ selectedItemIds: Array.from(next) })
        lastSelectedAnchorRef.current = itemId
        return
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
        if (start === -1 || end === -1) return
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
            if (meta?.selectionScope === "withDescendants") {
              // If an unselectable item has selectionScope=withDescendants,
              // skip it and all of its descendants from the range.
              skipSet.add(id)
            }
            return
          }
          if (isDescendantOfSkipped(id)) return

          // When selectionScope="withDescendants", include the full branch:
          // the item itself plus all of its descendants.
          if (meta?.selectionScope === "withDescendants") {
            const branchIds = [id, ...collectDescendantsForId(id)]
            branchIds.forEach((branchId) => next.add(branchId))
          } else {
            next.add(id)
          }
        })
        if (areSetsEqual(next, currentSelectedItems)) {
          lastSelectedAnchorRef.current = itemId
          return
        }
        if (!isSelectionControlled) setInternalSelectedItems(next)
        onSelectionChange?.({ selectedItemIds: Array.from(next) })
        lastSelectedAnchorRef.current = itemId
        return
      }

      if (additive) {
        const next = new Set(currentSelectedItems)
        if (isWithDescendants) {
          const branchIds = [itemId, ...collectDescendantsForId(itemId)]
          const branchSelected =
            branchIds.length > 0 && branchIds.every((id) => next.has(id))
          if (branchSelected) {
            branchIds.forEach((id) => next.delete(id))
          } else {
            branchIds.forEach((id) => next.add(id))
          }
        } else {
          if (next.has(itemId)) next.delete(itemId)
          else next.add(itemId)
        }
        if (areSetsEqual(next, currentSelectedItems)) {
          lastSelectedAnchorRef.current = itemId
          return
        }
        if (!isSelectionControlled) setInternalSelectedItems(next)
        onSelectionChange?.({ selectedItemIds: Array.from(next) })
        lastSelectedAnchorRef.current = itemId
        return
      }

      // default click acts like single anchor in multi-mode with toggle behaviour:
      // - if only this item (or its full branch) is selected, clicking it again deselects
      // - otherwise, replace selection with just this item (or its branch)
      let next: Set<string>
      if (isWithDescendants) {
        const branchIds = [itemId, ...collectDescendantsForId(itemId)]
        const branchSet = new Set<string>(branchIds)
        const isExactlyBranchSelected =
          branchSet.size === currentSelectedItems.size &&
          branchIds.every((id) => currentSelectedItems.has(id))
        next = isExactlyBranchSelected ? new Set<string>() : branchSet
      } else {
        const isSingleItemSelected =
          currentSelectedItems.size === 1 && currentSelectedItems.has(itemId)
        next = isSingleItemSelected
          ? new Set<string>()
          : new Set<string>([itemId])
      }
      if (areSetsEqual(next, currentSelectedItems)) {
        lastSelectedAnchorRef.current = itemId
        return
      }
      if (!isSelectionControlled) setInternalSelectedItems(next)
      onSelectionChange?.({ selectedItemIds: Array.from(next) })
      lastSelectedAnchorRef.current = itemId
    },
    [
      selectionMode,
      currentSelectedItems,
      isSelectionControlled,
      onSelectionChange,
      currentItems,
      flattenItemsDepthFirst,
      collectDescendantsForId,
    ]
  )

  const reorderItems = useCallback(
    (itemIds: string[], targetIndex: number, targetParentPath?: number[]) => {
      if (itemIds.length === 0) return

      // Create a deep copy of the current items
      const newItems = JSON.parse(JSON.stringify(currentItems))

      // Build a map of id -> path from the current (pre-removal) tree
      const idToPath = (() => {
        const map = new Map<string, number[]>()
        const walk = (nodes: ListItemData[], path: number[]) => {
          nodes.forEach((n, idx) => {
            const p = [...path, idx]
            map.set(n.id, p)
            if (n.items && n.items.length) walk(n.items, p)
          })
        }
        walk(currentItems, [])
        return map
      })()

      // Guard: prevent dropping an ancestor into its own descendant container
      if (targetParentPath && targetParentPath.length > 0) {
        for (const id of itemIds) {
          const draggedPath = idToPath.get(id)
          if (draggedPath) {
            const isAncestor =
              targetParentPath.length >= draggedPath.length &&
              draggedPath.every((v, i) => targetParentPath[i] === v)
            if (isAncestor) {
              // Ignore drop to avoid cycles
              return
            }
          }
        }
      }

      // Helper function to find and remove items from any level
      const findAndRemoveItems = (
        items: ListItemData[],
        ids: string[]
      ): ListItemData[] => {
        const removedItems: ListItemData[] = []

        // Remove from current level
        for (let i = items.length - 1; i >= 0; i--) {
          if (ids.includes(items[i].id)) {
            removedItems.unshift(items.splice(i, 1)[0])
          }
        }

        // Remove from children recursively
        items.forEach((item) => {
          if (item.items) {
            const childRemoved = findAndRemoveItems(item.items, ids)
            removedItems.push(...childRemoved)
          }
        })

        return removedItems
      }

      // Helper function to insert items at a specific path
      const insertItemsAtPath = (
        items: ListItemData[],
        path: number[],
        targetIndex: number,
        itemsToInsert: ListItemData[]
      ) => {
        if (path.length === 0) {
          // Insert at root level
          const clamped = Math.max(0, Math.min(targetIndex, items.length))
          items.splice(clamped, 0, ...itemsToInsert)
          return
        }

        // Navigate to the target container
        const firstIdx = Math.max(
          0,
          Math.min(path[0], Math.max(0, items.length - 1))
        )
        let current: ListItemData | undefined = items[firstIdx]

        // If path is [x], insert into the children of the item at index x
        if (path.length === 1) {
          if (!current) return
          if (!current.items) current.items = []
          const clamped = Math.max(
            0,
            Math.min(targetIndex, current.items.length)
          )
          current.items.splice(clamped, 0, ...itemsToInsert)
          return
        }

        // For deeper paths, navigate to the nested container, clamping indices
        for (let i = 1; i < path.length; i++) {
          if (!current) return
          if (!current.items) current.items = []
          const idx = Math.max(
            0,
            Math.min(path[i], Math.max(0, current.items.length - 1))
          )
          current = current.items[idx]
        }
        if (!current) return
        if (!current.items) current.items = []
        const clamped = Math.max(0, Math.min(targetIndex, current.items.length))
        current.items.splice(clamped, 0, ...itemsToInsert)
      }

      // Find and remove the dragged items from anywhere in the tree
      const removedItems = findAndRemoveItems(newItems, itemIds)

      if (removedItems.length === 0) return

      // Adjust target index for moves within the same container
      const normalizedTargetPath =
        targetParentPath && targetParentPath.length ? targetParentPath : []
      let removedBeforeCount = 0
      itemIds.forEach((id) => {
        const path = idToPath.get(id)
        if (!path || path.length === 0) return
        const parentPath = path.slice(0, path.length - 1)
        const indexInParent = path[path.length - 1]
        const sameContainer =
          parentPath.length === normalizedTargetPath.length &&
          parentPath.every((v, i) => v === normalizedTargetPath[i])
        if (sameContainer && indexInParent < targetIndex) removedBeforeCount++
      })
      const adjustedTargetIndex = Math.max(0, targetIndex - removedBeforeCount)

      // Adjust target path (for INSIDE drops) when the target item index shifts
      // due to removing dragged items from the same container (parent path)
      const adjustedTargetPath = [...normalizedTargetPath]
      if (adjustedTargetPath.length > 0) {
        const parentOfTargetItemPath = adjustedTargetPath.slice(
          0,
          adjustedTargetPath.length - 1
        )
        const originalTargetItemIndex =
          adjustedTargetPath[adjustedTargetPath.length - 1]
        let removedBeforeAtLevel = 0
        itemIds.forEach((id) => {
          const p = idToPath.get(id)
          if (!p || p.length === 0) return
          const pParent = p.slice(0, p.length - 1)
          const pIndex = p[p.length - 1]
          const sameContainer =
            pParent.length === parentOfTargetItemPath.length &&
            pParent.every((v, i) => v === parentOfTargetItemPath[i])
          if (sameContainer && pIndex < originalTargetItemIndex) {
            removedBeforeAtLevel++
          }
        })
        adjustedTargetPath[adjustedTargetPath.length - 1] = Math.max(
          0,
          originalTargetItemIndex - removedBeforeAtLevel
        )
      }

      // Insert the items at the target location
      insertItemsAtPath(
        newItems,
        adjustedTargetPath,
        adjustedTargetIndex,
        removedItems
      )

      // Update state
      if (!isItemsControlled) {
        setInternalItems(newItems)
      }
      onItemsChange?.({ items: newItems })
    },
    [currentItems, onItemsChange, isItemsControlled]
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
    document.addEventListener("pointerdown", handlePointerDown)
    return () => document.removeEventListener("pointerdown", handlePointerDown)
  }, [
    selectionMode,
    deselectOnClickOutside,
    currentSelectedItems,
    isSelectionControlled,
    onSelectionChange,
  ])

  const dragImageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Fake drag image
    const ghost = document.createElement("div")
    ghost.style.width = "20px"
    ghost.style.height = "20px"
    ghost.style.opacity = "0"
    ghost.style.position = "absolute"
    ghost.style.top = "-1000px"
    ghost.style.pointerEvents = "none"

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

  const registerItem = useCallback(
    (
      id: string,
      meta: {
        selectable?: boolean
        selectionScope?: "individual" | "withDescendants"
      }
    ) => {
      itemMetaRef.current.set(id, meta)
      return () => {
        itemMetaRef.current.delete(id)
      }
    },
    []
  )

  const getPathForId = useCallback((id: string) => {
    return idToPathRef.current.get(id) || null
  }, [])

  const registerItemPath = useCallback((id: string, path: number[]) => {
    idToPathRef.current.set(id, path)
    return () => {
      idToPathRef.current.delete(id)
    }
  }, [])

  // Rebuild id -> path map whenever the items tree changes
  useEffect(() => {
    const map = new Map<string, number[]>()
    const walk = (nodes: ListItemData[], path: number[]) => {
      nodes.forEach((n, idx) => {
        const p = [...path, idx]
        map.set(n.id, p)
        if (n.items && n.items.length) walk(n.items, p)
      })
    }
    walk(currentItems, [])
    idToPathRef.current = map
  }, [currentItems])

  useEffect(() => {
    if (isSelectionControlled) {
      const next = new Set(controlledSelectedItemIds)
      setInternalSelectedItems(next)
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
      const branchIds = [id, ...collectDescendantsForId(id)]
      const full =
        branchIds.length > 0 &&
        branchIds.every((nodeId) => selected.has(nodeId))
      branchFullySelected.set(id, full)
      return full
    }

    const origins = new Set<string>()

    // 1) All selected "individual"-scope entries are simple origins.
    itemMetaRef.current.forEach((meta, id) => {
      if (meta.selectionScope === "individual" && selected.has(id)) {
        origins.add(id)
      }
    })

    // 2) Additionally, compute origins for withDescendants branches as before.
    itemMetaRef.current.forEach((meta, id) => {
      if (meta.selectionScope !== "withDescendants") return
      if (!selected.has(id)) return
      if (!isBranchFullySelected(id)) return

      // Skip if any ancestor is also a fully-selected withDescendants branch
      let cur = parentOf.get(id) ?? null
      while (cur) {
        const parentMeta = itemMetaRef.current.get(cur)
        if (
          parentMeta?.selectionScope === "withDescendants" &&
          selected.has(cur) &&
          isBranchFullySelected(cur)
        ) {
          return
        }
        cur = parentOf.get(cur) ?? null
      }

      origins.add(id)
    })

    setSelectionOriginIds(origins)
  }, [currentItems, currentSelectedItems])

  const contextValue: ListContextValue = {
    items: currentItems,
    selectedItemIds: currentSelectedItems,
    selectionOriginIds,
    deselectOnClickOutside,
    setSelection,
    toggleSelect,
    reorderItems,
    selectionMode,
    registerRootElement,
    registerItem,
    getPathForId,
    registerItemPath,
    dragImage: dragImageRef.current,
  }

  return (
    <RawListContext.Provider value={contextValue}>
      {children}
    </RawListContext.Provider>
  )
}

export { ListContext, useListContext }
