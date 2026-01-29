import type { ListContextProps, ListItemProps, ListItemData } from "../../index"

type ListItemPropsPick = Pick<
  ListItemProps,
  | "variant"
  | "draggable"
  | "onDragStart"
  | "onDragEnd"
  | "acceptsChildren"
  | "selectable"
  | "selectionScope"
  | "onSelect"
  | "hoverable"
  | "collapsed"
  | "collapsable"
  | "onCollapsedChange"
>

type ListContextPropsPick = Pick<
  ListContextProps,
  | "selectedItemIds"
  | "selectionMode"
  | "deselectOnClickOutside"
  | "onItemsChange"
  | "onSelectionChange"
>

export interface ListProps extends ListContextPropsPick {
  className?: string
  items: ListItemData[]
  listItemProps: ListItemPropsPick
  renderItem?: (item: ListItemData) => preact.ComponentChildren
}
