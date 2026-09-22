export interface ListItemProps {
  id: string
  className?: string
  nestingLevel: number
  variant?: 'default' | 'layer'
  flushRight?: boolean
  draggable?: boolean
  onDragStart?: (args: { event: DragEvent }) => void
  onDragEnd?: (args: { event: DragEvent }) => void
  acceptsChildren?: boolean
  /**
   * Stands for its parent's empty body (e.g. "No items" in an empty group): hovering it drops into the parent
   * first, drawn as the parent's inside outline. Has no end drop zone, is skipped by arrow-key focus, and is
   * never draggable or selectable.
   */
  placeholder?: boolean
  selectable?: boolean
  selectionScope?: 'individual' | 'withDescendants'
  onSelect?: (args: { event: MouseEvent | KeyboardEvent; selected: boolean }) => void
  hoverable?: boolean
  collapsed?: boolean
  collapsable?: boolean
  onCollapsedChange?: (args: { event: MouseEvent | KeyboardEvent; collapsed: boolean }) => void
  collapseIconIntent?: 'tertiary' | 'component-secondary' | 'slot-secondary'
  items?: preact.ComponentChildren
  children?: preact.ComponentChildren
  tabIndex?: number
}
