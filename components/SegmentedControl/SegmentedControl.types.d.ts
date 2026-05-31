import { IconPropsPick } from '../Icon/Icon.types';
export interface SegmentedControlOptionData {
    value: string;
    label: string;
    icon?: IconPropsPick;
}
export interface SegmentedControlProps {
    id?: string;
    className?: string;
    options: SegmentedControlOptionData[];
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    tabIndex?: number;
    onValueChange?: (args: {
        event: MouseEvent | KeyboardEvent;
        value: string;
    }) => void;
}
