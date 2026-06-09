import { spacing } from '../../themes'

export type ListItemPadding = keyof typeof spacing.variables

export interface ListItemProps {
  id: string
  className?: string
  nestingLevel: number
  variant?: 'default' | 'layer'
  padding?: {
    top?: ListItemPadding
    right?: ListItemPadding
    bottom?: ListItemPadding
    left?: ListItemPadding
  }
  draggable?: boolean
  onDragStart?: (args: { event: DragEvent }) => void
  onDragEnd?: (args: { event: DragEvent }) => void
  acceptsChildren?: boolean
  selectable?: boolean
  selectionScope?: 'individual' | 'withDescendants'
  onSelect?: (args: { event: MouseEvent; selected: boolean }) => void
  hoverable?: boolean
  collapsed?: boolean
  collapsable?: boolean
  onCollapsedChange?: (args: { event: MouseEvent; collapsed: boolean }) => void
  items?: preact.ComponentChildren
  children?: preact.ComponentChildren
  tabIndex?: number
}
