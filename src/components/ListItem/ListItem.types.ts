export interface ListItemProps {
  className?: string
  variant?: "default" | "layer"
  id: string
  isNested?: boolean
  nestingLevel?: number
  draggable?: boolean
  acceptsChildren?: boolean
  selectionScope?: "item" | "withDescendants"
  onDragStart?: () => void
  onDragEnd?: () => void
  selectable?: boolean
  hoverable?: boolean
  onSelect?: (selected: boolean) => void
  subItems?: preact.ComponentChildren
  children?: preact.ComponentChildren
}
