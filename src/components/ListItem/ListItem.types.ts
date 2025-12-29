export interface ListItemProps {
  className?: string
  id: string
  isNested?: boolean
  nestingLevel?: number
  draggable?: boolean
  dragHandle?: "default" | "container"
  onDragStart?: (args: { event: DragEvent }) => void
  onDragEnd?: (args: { event: DragEvent }) => void
  acceptsChildren?: boolean
  selectable?: boolean
  selectionScope?: "item" | "withDescendants"
  onSelect?: (args: { event: MouseEvent; selected: boolean }) => void
  hoverable?: boolean
  collapsed?: boolean
  showCollapseControl?: boolean
  onCollapsedChange?: (args: { event: MouseEvent; collapsed: boolean }) => void
  subItems?: preact.ComponentChildren
  children?: preact.ComponentChildren
  reducedPaddingRight?: boolean
}
