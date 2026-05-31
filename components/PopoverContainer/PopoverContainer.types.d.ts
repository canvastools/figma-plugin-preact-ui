export interface PopoverContainerProps {
    id?: string;
    className?: string;
    width?: number;
    height?: number;
    showArrow?: boolean;
    constrainHeight?: boolean;
    tabIndex?: number;
    children: preact.ComponentChildren;
}
