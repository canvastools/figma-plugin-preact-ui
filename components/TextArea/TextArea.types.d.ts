export interface TextAreaProps {
    id?: string;
    className?: string;
    variant?: 'default' | 'list';
    label?: string;
    placeholder?: string;
    defaultValue?: string;
    value?: string;
    error?: boolean;
    disabled?: boolean;
    tooltip?: preact.ComponentChildren;
    minLength?: number;
    maxLength?: number;
    maxWidth?: number | string;
    minHeight?: number | string;
    maxHeight?: number | string;
    resize?: 'y';
    autoFocus?: boolean;
    selectOnFocus?: boolean;
    onValueChange?: (args: {
        event: Event;
        value: string;
    }) => void;
    onBlur?: (args: {
        event: FocusEvent;
        value: string;
    }) => void;
    onFocus?: (args: {
        event: FocusEvent;
        value: string;
    }) => void;
    onKeyDown?: (args: {
        event: KeyboardEvent;
        value: string;
    }) => void;
}
