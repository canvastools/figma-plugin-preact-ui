export interface ListItemProps {
  className?: string
  id: string
  isNested?: boolean
  nestingLevel?: number
  draggable?: boolean
  dragHandle?: "default" | "container"
  onDragStart?: () => void
  onDragEnd?: () => void
  acceptsChildren?: boolean
  selectable?: boolean
  selectionScope?: "item" | "withDescendants"
  onSelect?: (selected: boolean) => void
  hoverable?: boolean
  collapsed?: boolean
  showCollapseControl?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  subItems?: preact.ComponentChildren
  children?: preact.ComponentChildren
}
