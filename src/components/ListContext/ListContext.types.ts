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
  /** Nothing dragged can go into this row or beside it — decided once, as the drag starts */
  refused?: boolean
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
  /**
   * The row a keyboard move was made from, until the focus goes somewhere else on
   * purpose. A move into another parent remounts the row — a keyed child moves
   * only within its own container — and a controlled list draws it there only
   * once its items come back, so the new row takes the focus as it appears.
   */
  focusAfterMoveRef?: { current: string | null }
  /**
   * A row's own check of its selection edges, run by the list's one observer:
   * every row when rows come or go, only the selected ones when a class the
   * check reads changes. Returns the unsubscribe.
   */
  registerLayoutCheck?: (check: ListLayoutCheck) => () => void
  onKeyDown?: (args: { event: KeyboardEvent; itemId: string }) => void
}

/** @internal What a row asks the list's observer to run, and whether it is selected right now. */
export interface ListLayoutCheck {
  run: () => void
  isSelected: () => boolean
}

/** What a list can be asked to do from outside it. */
export interface ListHandle {
  /**
   * Focuses a row — or, for `null` or an id not on screen, the first row that can
   * take the focus. Answers whether anything was focused.
   */
  focusItem: (itemId: string | null) => boolean
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
  /** Filled with a `ListHandle` for as long as the list is mounted */
  handleRef?: preact.Ref<ListHandle>
  children: preact.ComponentChildren
}
