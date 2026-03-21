import { IconPropsPick } from '../Icon/Icon.types';
export interface ButtonIconProps {
    id?: string;
    className?: string;
    intent?: 'neutral';
    intentModifier?: 'default' | 'secondary';
    ghost?: boolean;
    size?: 'medium' | 'large';
    grouped?: 'first' | 'last' | 'middle';
    translucent?: boolean;
    disabled?: boolean;
    selected?: boolean;
    tooltip?: preact.ComponentChildren;
    children?: preact.ComponentChildren;
    icon?: IconPropsPick;
    onClick?: (args: {
        event: MouseEvent;
    }) => void;
}
