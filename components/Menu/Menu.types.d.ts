import { MenuContextProps, MenuContainerProps, MenuItemActionProps, MenuItemOptionProps, MenuItemGroupProps, MenuDividerProps, OverlayPositionerProps } from '../../index';
export type MenuItemData = ({
    type: 'group';
} & Pick<MenuItemGroupProps, 'className' | 'children' | 'paddingLikeOption'>) | ({
    type: 'action';
    closeOnClick?: boolean;
} & Pick<MenuItemActionProps, 'id' | 'intentModifier' | 'disabled' | 'prefix' | 'suffix' | 'children' | 'paddingLikeOption' | 'onClick'>) | ({
    type: 'option';
    closeOnClick?: boolean;
} & Pick<MenuItemOptionProps, 'id' | 'defaultSelected' | 'selected' | 'disabled' | 'prefix' | 'suffix' | 'children' | 'onSelectedChange'>) | {
    type: 'custom';
    id?: string;
    disabled?: boolean;
    children?: preact.ComponentChildren;
    onClick?: (args: {
        event: MouseEvent;
        id: string;
    }) => void;
    closeOnClick?: boolean;
} | ({
    type: 'divider';
} & Pick<MenuDividerProps, 'className' | 'variant'>);
type MenuContextPropsPick = Pick<MenuContextProps, 'triggerRef' | 'anchorRef'>;
type MenuContainerPropsPick = Pick<MenuContainerProps, 'width' | 'height'>;
type OverlayPositionerPropsPick = Pick<OverlayPositionerProps, 'open' | 'defaultOpen' | 'placement' | 'placementFallback' | 'offsetX' | 'offsetY' | 'offsetEdge' | 'onOpen' | 'onClose'>;
export interface MenuProps extends MenuContextPropsPick, MenuContainerPropsPick, OverlayPositionerPropsPick {
    id?: string;
    className?: string;
    items: MenuItemData[];
}
export {};
