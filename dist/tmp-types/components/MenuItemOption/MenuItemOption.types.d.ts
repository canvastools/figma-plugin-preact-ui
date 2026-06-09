export interface MenuItemOptionProps {
    id?: string;
    className?: string;
    defaultSelected?: boolean;
    selected?: boolean;
    disabled?: boolean;
    focused?: boolean;
    prefix?: preact.ComponentChildren;
    suffix?: preact.ComponentChildren;
    children: preact.ComponentChildren;
    tabIndex?: number;
    onSelectedChange?: (args: {
        event: MouseEvent;
        id: string;
        selected: boolean;
    }) => void;
}
