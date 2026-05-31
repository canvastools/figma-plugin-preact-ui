export type TimePickerDate = Date | string | number | null;
export interface TimePickerProps {
    id?: string;
    className?: string;
    locale?: string;
    variant?: 'default' | 'list';
    label?: preact.ComponentChildren;
    maxWidth?: number | string;
    defaultDate?: TimePickerDate;
    date?: TimePickerDate;
    format?: string;
    hourPlaceholder?: string;
    minutePlaceholder?: string;
    maxTime?: string;
    minTime?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    grouped?: 'first' | 'last' | 'middle';
    tooltip?: preact.ComponentChildren;
    tabIndex?: number;
    onTimeChange?: (args: {
        date: TimePickerDate | undefined;
        time: string;
    }) => void;
    onBlur?: (args: {
        event: FocusEvent;
        date: TimePickerDate | undefined;
        time: string;
    }) => void;
    onFocus?: (args: {
        event: FocusEvent;
        date: TimePickerDate | undefined;
        time: string;
    }) => void;
    onKeyDown?: (args: {
        event: KeyboardEvent;
        date: TimePickerDate | undefined;
        time: string;
    }) => void;
}
