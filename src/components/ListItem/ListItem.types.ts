export interface ListItemProps {
  className?: string
  id: string
  isNested?: boolean
  nestingLevel?: number
  draggable?: boolean
  acceptsChildren?: boolean
  onDragStart?: () => void
  onDragEnd?: () => void
  selectable?: boolean
  onSelect?: (selected: boolean) => void
  subItems?: preact.ComponentChildren
  children?: preact.ComponentChildren
}
