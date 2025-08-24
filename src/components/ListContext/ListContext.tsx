import { createContext } from "preact"
import {
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
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

const ListContext = ({
  items: controlledItems = [],
  selectedItems: controlledSelectedItems = [],
  selectionMode = "multi",
  onItemsChange,
  onSelectionChange,
  children,
}: ListContextProps) => {
  const [internalItems, setInternalItems] =
    useState<ListItemData[]>(controlledItems)
  const [internalSelectedItems, setInternalSelectedItems] = useState<
    Set<string>
  >(new Set(controlledSelectedItems))

  // Determine if we're in controlled mode for each aspect
  const isItemsControlled = onItemsChange !== undefined
  const isSelectionControlled = onSelectionChange !== undefined

  // Use controlled values when available, otherwise use internal state
  const currentItems = isItemsControlled ? controlledItems : internalItems
  const currentSelectedItems = isSelectionControlled
    ? new Set(controlledSelectedItems)
    : internalSelectedItems

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
      onSelectionChange?.(Array.from(newSelectedItems))
    },
    [
      currentSelectedItems,
      controlledSelectedItems,
      onSelectionChange,
      isSelectionControlled,
    ]
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

  const toggleSelect = useCallback(
    (itemId: string, options?: { range?: boolean; additive?: boolean }) => {
      if (selectionMode === "none") return

      const additive = Boolean(options?.additive)
      const range = Boolean(options?.range)

      if (selectionMode === "single") {
        const already = currentSelectedItems.has(itemId)
        const next = new Set<string>()
        if (!already) next.add(itemId)
        if (!isSelectionControlled) setInternalSelectedItems(next)
        onSelectionChange?.(Array.from(next))
        lastSelectedAnchorRef.current = itemId
        return
      }

      // multi
      if (range) {
        const order = flattenItemsDepthFirst(currentItems)
        const anchor = lastSelectedAnchorRef.current || itemId
        const start = order.indexOf(anchor)
        const end = order.indexOf(itemId)
        if (start === -1 || end === -1) return
        const [lo, hi] = start <= end ? [start, end] : [end, start]
        const toSelect = order.slice(lo, hi + 1)
        const next = new Set<string>(toSelect)
        if (!isSelectionControlled) setInternalSelectedItems(next)
        onSelectionChange?.(Array.from(next))
        lastSelectedAnchorRef.current = itemId
        return
      }

      if (additive) {
        const next = new Set(currentSelectedItems)
        if (next.has(itemId)) next.delete(itemId)
        else next.add(itemId)
        if (!isSelectionControlled) setInternalSelectedItems(next)
        onSelectionChange?.(Array.from(next))
        lastSelectedAnchorRef.current = itemId
        return
      }

      // default click acts like single anchor in multi-mode
      const next = new Set<string>([itemId])
      if (!isSelectionControlled) setInternalSelectedItems(next)
      onSelectionChange?.(Array.from(next))
      lastSelectedAnchorRef.current = itemId
    },
    [
      selectionMode,
      currentSelectedItems,
      isSelectionControlled,
      onSelectionChange,
      currentItems,
      flattenItemsDepthFirst,
    ]
  )

  const selectAll = useCallback(() => {
    const allItemIds: string[] = []
    const collectIds = (items: ListItemData[]) => {
      items.forEach((item) => {
        allItemIds.push(item.id)
        if (item.children) {
          collectIds(item.children)
        }
      })
    }
    collectIds(currentItems)
    setSelection(allItemIds, true)
  }, [currentItems, setSelection])

  const deselectAll = useCallback(() => {
    const allItemIds: string[] = []
    const collectIds = (items: ListItemData[]) => {
      items.forEach((item) => {
        allItemIds.push(item.id)
        if (item.children) {
          collectIds(item.children)
        }
      })
    }
    collectIds(currentItems)
    setSelection(allItemIds, false)
  }, [currentItems, setSelection])

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

      // Insert the items at the target location
      insertItemsAtPath(
        newItems,
        normalizedTargetPath,
        adjustedTargetIndex,
        removedItems
      )

      // Update state
      if (!isItemsControlled) {
        setInternalItems(newItems)
      }
      onItemsChange?.(newItems)
    },
    [currentItems, onItemsChange, isItemsControlled]
  )

  // Outside-click to clear selection in single/multi modes
  useEffect(() => {
    if (selectionMode === "none") return
    const handlePointerDown = (e: Event) => {
      const target = e.target as Node | null
      if (!target) return
      for (const root of rootElementsRef.current) {
        if (root.contains(target)) return
      }
      if (currentSelectedItems.size > 0) {
        const next = new Set<string>()
        if (!isSelectionControlled) setInternalSelectedItems(next)
        onSelectionChange?.(Array.from(next))
      }
    }
    document.addEventListener("pointerdown", handlePointerDown)
    return () => document.removeEventListener("pointerdown", handlePointerDown)
  }, [
    selectionMode,
    currentSelectedItems,
    isSelectionControlled,
    onSelectionChange,
  ])

  const registerRootElement = useCallback((el: HTMLElement | null) => {
    if (!el) return () => {}
    rootElementsRef.current.add(el)
    return () => {
      rootElementsRef.current.delete(el)
    }
  }, [])

  useEffect(() => {
    if (isItemsControlled) {
      setInternalItems(controlledItems)
    }
  }, [controlledItems, isItemsControlled])

  useEffect(() => {
    if (isSelectionControlled) {
      setInternalSelectedItems(new Set(controlledSelectedItems))
    }
  }, [controlledSelectedItems, isSelectionControlled])

  const contextValue: ListContextValue = {
    items: currentItems,
    selectedItems: currentSelectedItems,
    setSelection,
    toggleSelect,
    selectAll,
    deselectAll,
    reorderItems,
    selectionMode,
    registerRootElement,
  }

  return (
    <RawListContext.Provider value={contextValue}>
      {children}
    </RawListContext.Provider>
  )
}

export { ListContext, useListContext }
