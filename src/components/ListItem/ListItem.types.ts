export interface ListItemProps {
  id: string
  className?: string
  nestingLevel: number
  variant?: 'default' | 'layer'
  draggable?: boolean
  onDragStart?: (args: { event: DragEvent }) => void
  onDragEnd?: (args: { event: DragEvent }) => void
  acceptsChildren?: boolean
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
