import { Ref } from 'preact';
export declare const DRAG_ZONE_CLASSES: readonly ["ListItem_drag-over", "ListItem_drag-above", "ListItem_drag-below", "ListItem_drag-inside", "ListItem_drag-self", "ListItem_drag-between-selected"];
export declare const getDraggingIds: () => string[] | null;
export declare const setDraggingIds: (ids: string[]) => void;
export declare const clearDraggingIds: () => void;
export declare const resolveDraggedIds: (dataTransfer: DataTransfer | null) => string[] | null;
export declare const getDragOverIds: (dataTransfer: DataTransfer | null) => string[];
export declare const clearDropItself: () => void;
export declare const syncDropItself: (dropTarget: HTMLElement | null) => void;
export declare const setDropParentElement: (desiredDropParent: HTMLElement | null, dropParentRef: {
    current: HTMLElement | null;
}) => void;
export declare const getChildListItems: (container: Element) => HTMLElement[];
export declare const mergeRefs: <T>(...refs: (Ref<T> | null | undefined)[]) => (node: T | null) => void;
