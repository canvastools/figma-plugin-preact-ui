export interface MenuContainerProps {
    id?: string;
    className?: string;
    width?: number;
    height?: number;
    children: preact.ComponentChildren;
    tabIndex?: number;
}
export type MenuContainerPropsPick = Pick<MenuContainerProps, 'width'>;
