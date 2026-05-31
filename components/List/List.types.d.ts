import { ListContextProps, ListItemProps, ListItemData } from '../../index';
export type ListItemPropsPick = Pick<ListItemProps, 'variant' | 'padding' | 'draggable' | 'onDragStart' | 'onDragEnd' | 'acceptsChildren' | 'selectable' | 'selectionScope' | 'onSelect' | 'hoverable' | 'collapsed' | 'collapsable' | 'onCollapsedChange'>;
type ListContextPropsPick = Pick<ListContextProps, 'selectedItemIds' | 'selectionMode' | 'deselectOnClickOutside' | 'onItemsChange' | 'onSelectionChange' | 'onKeyDown'>;
export interface ListProps extends ListContextPropsPick {
    id?: string;
    className?: string;
    items: ListItemData[];
    listItemProps: ListItemPropsPick | ((item: ListItemData) => ListItemPropsPick);
    renderItem?: (item: ListItemData) => preact.ComponentChildren;
    tabIndex?: number;
}
export {};
