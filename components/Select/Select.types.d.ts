import { MenuContainerPropsPick } from '../MenuContainer/MenuContainer.types';
export interface SelectOptionData {
    label: string;
    value: string;
    disabled?: boolean;
    children?: preact.ComponentChildren;
}
export interface SelectProps {
    id?: string;
    className?: string;
    options?: SelectOptionData[] | SelectOptionData[][];
    placeholder?: string;
    defaultValue?: string;
    value?: string;
    grouped?: 'first' | 'last' | 'middle';
    ghost?: boolean;
    error?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    tabIndex?: number;
    prefix?: preact.ComponentChildren;
    tooltip?: preact.ComponentChildren;
    onBlur?: (args: {
        event: FocusEvent;
        value?: string;
    }) => void;
    onFocus?: (args: {
        event: FocusEvent;
        value?: string;
    }) => void;
    onValueChange?: (args: {
        event: MouseEvent;
        value: string;
    }) => void;
    menuContainerProps?: MenuContainerPropsPick;
}
