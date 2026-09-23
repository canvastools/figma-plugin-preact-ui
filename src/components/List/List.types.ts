import type { ListContextProps, ListItemData } from '../ListContext/ListContext.types'
import type { ListItemProps } from '../ListItem/ListItem.types'

export type ListItemPropsPick = Pick<
  ListItemProps,
  | 'className'
  | 'variant'
  | 'draggable'
  | 'onDragStart'
  | 'onDragEnd'
  | 'acceptsChildren'
  | 'placeholder'
  | 'selectable'
  | 'selectionScope'
  | 'onSelect'
  | 'hoverable'
  | 'collapsed'
  | 'collapsable'
  | 'collapseIconIntent'
  | 'onCollapsedChange'
  /**
   * A row is a tab stop when it is selectable, draggable or collapsable, and
   * `tabIndex` is the way past that: a row that is none of the three, and yet
   * holds a control somebody has to be able to reach, has to be focusable to
   * hand that focus on.
   */
  | 'tabIndex'
>

type ListContextPropsPick = Pick<
  ListContextProps,
  | 'selectedItemIds'
  | 'selectionMode'
  | 'deselectOnClickOutside'
  | 'canDrop'
  | 'onItemsChange'
  | 'onSelectionChange'
  | 'onKeyDown'
>

export interface ListProps extends ListContextPropsPick {
  id?: string
  className?: string
  items: ListItemData[]
  listItemProps: ListItemPropsPick | ((item: ListItemData) => ListItemPropsPick)
  renderItem?: (item: ListItemData) => preact.ComponentChildren
}
