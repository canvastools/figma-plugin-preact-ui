export type SwitchValue = boolean;
export interface SwitchProps {
    id?: string;
    className?: string;
    checked?: SwitchValue;
    defaultChecked?: SwitchValue;
    disabled?: boolean;
    onCheckedChange?: (args: {
        event: Event;
        checked: SwitchValue;
    }) => void;
}
