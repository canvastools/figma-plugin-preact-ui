export interface ListItemData {
    id: string;
    selected?: boolean;
    items?: ListItemData[];
}
export interface ListContextValue {
    items: ListItemData[];
    selectedItemIds: Set<string>;
    selectionOriginIds?: Set<string>;
    deselectOnClickOutside?: boolean;
    setSelection: (itemIds: string[]) => void;
    /** Returns the resulting selection after the toggle. */
    toggleSelect: (itemId: string, options?: {
        range?: boolean;
        additive?: boolean;
    }) => Set<string>;
    registerItem?: (id: string, meta: {
        selectable?: boolean;
        selectionScope?: 'individual' | 'withDescendants';
        draggable?: boolean;
    }) => () => void;
    getPathForId?: (id: string) => number[] | null;
    getItemMeta?: (id: string) => {
        selectable?: boolean;
        selectionScope?: 'individual' | 'withDescendants';
        draggable?: boolean;
    } | undefined;
    /** The item plus all of its descendants, excluding entries with selectable=false. */
    getBranchIds?: (id: string) => string[];
    reorderItems: (itemIds: string[], targetIndex: number, targetParentPath?: number[]) => void;
    selectionMode?: 'single' | 'multi';
    registerRootElement?: (el: HTMLElement | null) => () => void;
    dragImage?: HTMLDivElement | null;
    onKeyDown?: (args: {
        event: KeyboardEvent;
        itemId: string;
    }) => void;
}
export interface ListContextProps {
    items?: ListItemData[];
    selectedItemIds?: string[];
    selectionMode?: 'single' | 'multi';
    deselectOnClickOutside?: boolean;
    onItemsChange?: (args: {
        items: ListItemData[];
    }) => void;
    onSelectionChange?: (args: {
        selectedItemIds: string[];
    }) => void;
    onKeyDown?: (args: {
        event: KeyboardEvent;
        itemId: string;
    }) => void;
    children: preact.ComponentChildren;
}
