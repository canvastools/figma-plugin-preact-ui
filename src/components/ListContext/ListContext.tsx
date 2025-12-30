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
    selectedItems: controlledSelectedItems = [],
    selectionMode = "single",
    deselectOnOutsideClick = true,
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
  >(new Set(controlledSelectedItems))
  const itemMetaRef = useRef<
    Map<
      string,
      { selectable?: boolean; selectionScope?: "item" | "withDescendants" }
    >
  >(new Map())
  const idToPathRef = useRef<Map<string, number[]>>(new Map())

  // Determine if we're in controlled mode for each aspect
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
        ? new Set(controlledSelectedItems)
        : internalSelectedItems,
    [isSelectionControlled, controlledSelectedItems, internalSelectedItems]
  )

  // Track anchor for range-selection and the root elements for outside-click detection
  const lastSelectedAnchorRef = useRef<string | null>(null)
  const rootElementsRef = useRef<Set<HTMLElement>>(new Set())

  const setSelection = useCallback(
    (itemIds: string[], selected: boolean) => {
      const newSelectedItems = new Set(currentSelectedItems)

      itemIds.forEach((id) => {
        if (selected) {
          newSelectedItems.add(id)
        } else {
          newSelectedItems.delete(id)
        }
      })

      if (!isSelectionControlled) {
        setInternalSelectedItems(newSelectedItems)
      }
      onSelectionChange?.({ selectedItems: Array.from(newSelectedItems) })
    },
    [currentSelectedItems, onSelectionChange, isSelectionControlled]
  )

  // Replace selection with exactly these ids (uncontrolled or via callback)
  const setExactSelection = useCallback(
    (itemIds: string[]) => {
      const next = new Set(itemIds)
      if (!isSelectionControlled) setInternalSelectedItems(next)
      onSelectionChange?.({ selectedItems: Array.from(next) })
    },
    [isSelectionControlled, onSelectionChange]
  )

  const flattenItemsDepthFirst = useCallback(
    (items: ListItemData[]): string[] => {
      const result: string[] = []
      const walk = (nodes: ListItemData[]) => {
        nodes.forEach((n) => {
          result.push(n.id)
          if (n.children && n.children.length) {
            walk(n.children)
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
                addAll(c.children)
              }
            }
            addAll(n.children)
            return true
          }
          if (n.children && walk(n.children)) return true
        }
        return false
      }
      walk(currentItems)
      return ids
    },
    [currentItems]
  )

  const toggleSelect = useCallback(
    (itemId: string, options?: { range?: boolean; additive?: boolean }) => {
      if (selectionMode === "none") return

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
        onSelectionChange?.({ selectedItems: Array.from(next) })
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
            if (n.children) buildParents(n.children, n.id)
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
        onSelectionChange?.({ selectedItems: Array.from(next) })
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
        onSelectionChange?.({ selectedItems: Array.from(next) })
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
      onSelectionChange?.({ selectedItems: Array.from(next) })
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
            if (n.children && n.children.length) walk(n.children, p)
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
          if (item.children) {
            const childRemoved = findAndRemoveItems(item.children, ids)
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
          if (!current.children) current.children = []
          const clamped = Math.max(
            0,
            Math.min(targetIndex, current.children.length)
          )
          current.children.splice(clamped, 0, ...itemsToInsert)
          return
        }

        // For deeper paths, navigate to the nested container, clamping indices
        for (let i = 1; i < path.length; i++) {
          if (!current) return
          if (!current.children) current.children = []
          const idx = Math.max(
            0,
            Math.min(path[i], Math.max(0, current.children.length - 1))
          )
          current = current.children[idx]
        }
        if (!current) return
        if (!current.children) current.children = []
        const clamped = Math.max(
          0,
          Math.min(targetIndex, current.children.length)
        )
        current.children.splice(clamped, 0, ...itemsToInsert)
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
    if (selectionMode === "none" || !deselectOnOutsideClick) return
    const handlePointerDown = (e: Event) => {
      const target = e.target as Node | null
      if (!target) return
      for (const root of rootElementsRef.current) {
        if (root.contains(target)) return
      }
      if (currentSelectedItems.size > 0) {
        const next = new Set<string>()
        if (!isSelectionControlled) setInternalSelectedItems(next)
        onSelectionChange?.({ selectedItems: Array.from(next) })
      }
    }
    document.addEventListener("pointerdown", handlePointerDown)
    return () => document.removeEventListener("pointerdown", handlePointerDown)
  }, [
    selectionMode,
    deselectOnOutsideClick,
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

  const registerItemMeta = useCallback(
    (
      id: string,
      meta: {
        selectable?: boolean
        selectionScope?: "item" | "withDescendants"
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
        if (n.children && n.children.length) walk(n.children, p)
      })
    }
    walk(currentItems, [])
    idToPathRef.current = map
  }, [currentItems])

  useEffect(() => {
    if (isSelectionControlled) {
      setInternalSelectedItems(new Set(controlledSelectedItems))
    }
  }, [controlledSelectedItems, isSelectionControlled])

  const contextValue: ListContextValue = {
    items: currentItems,
    selectedItems: currentSelectedItems,
    deselectOnOutsideClick,
    setSelection,
    setExactSelection,
    toggleSelect,
    reorderItems,
    selectionMode,
    registerRootElement,
    registerItemMeta,
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
