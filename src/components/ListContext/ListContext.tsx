import { createContext } from "preact"
import { useContext, useState, useEffect, useCallback } from "preact/hooks"
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
          items.splice(targetIndex, 0, ...itemsToInsert)
          return
        }

        // Navigate to the target container
        let current = items[path[0]]

        // If path is [0], we want to insert into the children of the first root item
        if (path.length === 1) {
          if (!current.children) {
            current.children = []
          }
          current.children.splice(targetIndex, 0, ...itemsToInsert)
          return
        }

        // For deeper paths, navigate to the nested container
        for (let i = 1; i < path.length; i++) {
          if (!current.children) return
          current = current.children[path[i]]
        }

        if (current.children) {
          current.children.splice(targetIndex, 0, ...itemsToInsert)
        }
      }

      // Find and remove the dragged items from anywhere in the tree
      const removedItems = findAndRemoveItems(newItems, itemIds)

      if (removedItems.length === 0) return

      // Insert the items at the target location
      insertItemsAtPath(
        newItems,
        targetParentPath || [],
        targetIndex,
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
    selectAll,
    deselectAll,
    reorderItems,
  }

  return (
    <RawListContext.Provider value={contextValue}>
      {children}
    </RawListContext.Provider>
  )
}

export { ListContext, useListContext }
