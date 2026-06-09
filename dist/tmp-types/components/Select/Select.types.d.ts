import type { MenuContainerPropsPick } from '../../index';
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
    error?: boolean;
    disabled?: boolean;
    tabIndex?: number;
    prefix?: preact.ComponentChildren;
    tooltip?: preact.ComponentChildren;
    onBlur?: () => void;
    onFocus?: () => void;
    onValueChange?: (args: {
        event: MouseEvent;
        value: string;
    }) => void;
    menuContainerProps?: MenuContainerPropsPick;
}
