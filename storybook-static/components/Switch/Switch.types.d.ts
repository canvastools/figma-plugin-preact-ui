export type SwitchValue = boolean;
export interface SwitchProps {
    id?: string;
    className?: string;
    checked?: SwitchValue;
    defaultChecked?: SwitchValue;
    disabled?: boolean;
    tabIndex?: number;
    onCheckedChange?: (args: {
        event: Event;
        checked: SwitchValue;
    }) => void;
}
