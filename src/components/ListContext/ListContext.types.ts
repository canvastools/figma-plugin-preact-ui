export interface ListItemData {
  id: string
  selected?: boolean
  items?: ListItemData[]
}

/** Where moved rows land. */
export interface ListDropTarget {
  /** The item they go into; `null` is the top level. */
  parentId: string | null
  /** Their position among the parent's children once the moved rows are taken out. */
  index: number
}

export interface ListItemMeta {
  selectable?: boolean
  selectionScope?: 'individual' | 'withDescendants'
  draggable?: boolean
  acceptsChildren?: boolean
  placeholder?: boolean
}

export interface ListNodeInfo {
  parentId: string | null
  index: number
}

/** What one row shows while a drag is over the list. Derived by the drag controller, rendered by ListItem. */
export interface ListItemDragState {
  dragging?: boolean
  over?: boolean
  zone?: 'above' | 'below' | 'inside'
  self?: boolean
  betweenSelected?: boolean
  dropParent?: boolean
  dropItself?: boolean
  endZone?: boolean
}

/** @internal One drag session per ListContext; ListContainer and ListItem only forward events to it. */
export interface ListDragController {
  start: (args: { event: DragEvent; sourceId: string; itemIds: string[] }) => void
  end: () => void
  handleDragOver: (event: DragEvent) => void
  handleDrop: (event: DragEvent) => void
  handleDragLeave: (event: DragEvent) => void
  getItemState: (id: string) => ListItemDragState | undefined
  subscribe: (id: string, listener: () => void) => () => void
}

export interface ListContextValue {
  items: ListItemData[]
  selectedItemIds: Set<string>
  selectionOriginIds?: Set<string>
  deselectOnClickOutside?: boolean
  setSelection: (itemIds: string[]) => void
  /** Returns the resulting selection after the toggle. */
  toggleSelect: (itemId: string, options?: { range?: boolean; additive?: boolean }) => Set<string>
  registerItem?: (id: string, meta: ListItemMeta) => () => void
  getItemMeta?: (id: string) => ListItemMeta | undefined
  getNodeInfo: (id: string) => ListNodeInfo | undefined
  getChildIds: (parentId: string | null) => string[]
  getBranchIds?: (id: string) => string[]
  /** Checks `canDrop` first; returns whether the tree changed. */
  moveItems: (itemIds: string[], target: ListDropTarget) => boolean
  drag: ListDragController
  selectionMode?: 'single' | 'multi'
  registerRootElement?: (el: HTMLElement | null) => () => void
  onKeyDown?: (args: { event: KeyboardEvent; itemId: string }) => void
}

export interface ListContextProps {
  items?: ListItemData[]
  selectedItemIds?: string[]
  selectionMode?: 'single' | 'multi'
  deselectOnClickOutside?: boolean
  onItemsChange?: (args: { items: ListItemData[]; move?: { ids: string[] } & ListDropTarget }) => void
  /**
   * Whether the dragged rows may land at `parentId`/`index`. Asked on dragover, so a refused place shows no
   * indicator; answered once per place per drag. `draggedIds` are the moved rows themselves, in tree order —
   * selected descendants travel inside them and are not listed.
   */
  canDrop?: (args: { draggedIds: string[] } & ListDropTarget) => boolean
  onSelectionChange?: (args: { selectedItemIds: string[] }) => void
  onKeyDown?: (args: { event: KeyboardEvent; itemId: string }) => void
  children: preact.ComponentChildren
}
