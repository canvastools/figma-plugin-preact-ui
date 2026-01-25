export interface ListItemProps {
  className?: string
  id: string
  nestingLevel: number
  variant?: "default" | "layer"
  draggable?: boolean
  onDragStart?: (args: { event: DragEvent }) => void
  onDragEnd?: (args: { event: DragEvent }) => void
  acceptsChildren?: boolean
  selectable?: boolean
  selectionScope?: "individual" | "withDescendants"
  onSelect?: (args: { event: MouseEvent; selected: boolean }) => void
  hoverable?: boolean
  collapsed?: boolean
  collapsable?: boolean
  onCollapsedChange?: (args: { event: MouseEvent; collapsed: boolean }) => void
  items?: preact.ComponentChildren
  children?: preact.ComponentChildren
}
