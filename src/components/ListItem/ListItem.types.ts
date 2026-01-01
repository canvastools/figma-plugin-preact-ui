export interface ListItemProps {
  className?: string
  id: string
  variant?: "default" | "layer"
  nestingLevel?: number
  draggable?: boolean
  onDragStart?: (args: { event: DragEvent }) => void
  onDragEnd?: (args: { event: DragEvent }) => void
  acceptsChildren?: boolean
  selectable?: boolean
  selectionScope?: "item" | "withDescendants"
  onSelect?: (args: { event: MouseEvent; selected: boolean }) => void
  hoverable?: boolean
  collapsed?: boolean
  collapsable?: boolean
  onCollapsedChange?: (args: { event: MouseEvent; collapsed: boolean }) => void
  reducedPaddingRight?: boolean
  nestedItems?: preact.ComponentChildren
  children?: preact.ComponentChildren
}
