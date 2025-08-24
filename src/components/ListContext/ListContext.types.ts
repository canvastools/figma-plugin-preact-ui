export interface ListItemData {
  id: string
  selected?: boolean
  children?: ListItemData[]
}

export interface ListContextValue {
  items: ListItemData[]
  selectedItems: Set<string>
  setSelection: (itemIds: string[], selected: boolean) => void
  selectAll: () => void
  deselectAll: () => void
  reorderItems: (
    itemIds: string[],
    targetIndex: number,
    targetParentPath?: number[]
  ) => void
}

export interface ListContextProps {
  items?: ListItemData[]
  selectedItems?: string[]
  onItemsChange?: (items: ListItemData[]) => void
  onSelectionChange?: (selectedItems: string[]) => void
  children: preact.ComponentChildren
}
