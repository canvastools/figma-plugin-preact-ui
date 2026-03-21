export type Color = {
    r: number;
    g: number;
    b: number;
    a: number;
};
export type ColorPickerType = 'rgba' | 'hex' | 'hexAlpha';
export interface ColorPickerProps {
    id?: string;
    className?: string;
    defaultType?: ColorPickerType;
    type?: ColorPickerType;
    types?: ColorPickerType[];
    color?: Color | null;
    defaultColor?: Color;
    showControls?: boolean;
    width?: number;
    fullWidth?: boolean;
    onTypeChange?: (args: {
        type: ColorPickerType;
    }) => void;
    onColorChange?: (args: {
        color: Color;
        hex: string;
        opacity: number;
    }) => void;
}
