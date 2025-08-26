export interface ListItemData {
  id: string
  selected?: boolean
  children?: ListItemData[]
}

export interface ListContextValue {
  items: ListItemData[]
  selectedItems: Set<string>
  setSelection: (itemIds: string[], selected: boolean) => void
  setExactSelection: (itemIds: string[]) => void
  toggleSelect: (
    itemId: string,
    options?: { range?: boolean; additive?: boolean }
  ) => void
  registerItemMeta?: (
    id: string,
    meta: { selectable?: boolean; selectionScope?: "item" | "withDescendants" }
  ) => () => void
  getPathForId?: (id: string) => number[] | null
  registerItemPath?: (id: string, path: number[]) => () => void
  selectAll: () => void
  deselectAll: () => void
  reorderItems: (
    itemIds: string[],
    targetIndex: number,
    targetParentPath?: number[]
  ) => void
  selectionMode: "none" | "single" | "multi"
  registerRootElement?: (el: HTMLElement | null) => () => void
}

export interface ListContextProps {
  items?: ListItemData[]
  selectedItems?: string[]
  selectionMode?: "none" | "single" | "multi"
  onItemsChange?: (items: ListItemData[]) => void
  onSelectionChange?: (selectedItems: string[]) => void
  children: preact.ComponentChildren
}
