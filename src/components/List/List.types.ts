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
  | 'selectable'
  | 'selectionScope'
  | 'onSelect'
  | 'hoverable'
  | 'collapsed'
  | 'collapsable'
  | 'collapseIconIntent'
  | 'onCollapsedChange'
>

type ListContextPropsPick = Pick<
  ListContextProps,
  'selectedItemIds' | 'selectionMode' | 'deselectOnClickOutside' | 'onItemsChange' | 'onSelectionChange' | 'onKeyDown'
>

export interface ListProps extends ListContextPropsPick {
  id?: string
  className?: string
  items: ListItemData[]
  listItemProps: ListItemPropsPick | ((item: ListItemData) => ListItemPropsPick)
  renderItem?: (item: ListItemData) => preact.ComponentChildren
}
