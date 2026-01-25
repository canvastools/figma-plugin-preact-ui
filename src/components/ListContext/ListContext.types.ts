export interface ListItemData {
  id: string
  selected?: boolean
  items?: ListItemData[]
}

export interface ListContextValue {
  items: ListItemData[]
  selectedItemIds: Set<string>
  selectionOriginIds?: Set<string>
  deselectOnClickOutside?: boolean
  setSelection: (itemIds: string[]) => void
  toggleSelect: (
    itemId: string,
    options?: { range?: boolean; additive?: boolean }
  ) => void
  registerItem?: (
    id: string,
    meta: {
      selectable?: boolean
      selectionScope?: "individual" | "withDescendants"
    }
  ) => () => void
  getPathForId?: (id: string) => number[] | null
  registerItemPath?: (id: string, path: number[]) => () => void
  reorderItems: (
    itemIds: string[],
    targetIndex: number,
    targetParentPath?: number[]
  ) => void
  selectionMode?: "single" | "multi"
  registerRootElement?: (el: HTMLElement | null) => () => void
  dragImage?: HTMLDivElement | null
}

export interface ListContextProps {
  items?: ListItemData[]
  selectedItemIds?: string[]
  selectionMode?: "single" | "multi"
  deselectOnClickOutside?: boolean
  onItemsChange?: (args: { items: ListItemData[] }) => void
  onSelectionChange?: (args: { selectedItems: string[] }) => void
  children: preact.ComponentChildren
}
