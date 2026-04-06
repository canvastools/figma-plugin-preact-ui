import type { Color } from '../ColorPicker/ColorPicker.types';
export type GradientPaint = {
    type: 'gradient-linear' | 'gradient-radial' | 'gradient-angular';
    gradientHandlePositions: [Vector, Vector, Vector];
    gradientStops: ColorStop[];
};
export type ColorStop = {
    color: Color;
    position: number;
};
export type Vector = {
    x: number;
    y: number;
};
export interface ColorSwatchProps {
    id?: string;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    fill?: Color | GradientPaint;
    disabled?: boolean;
    selected?: boolean;
    selection?: 'default' | 'rainbow';
    tooltip?: preact.ComponentChildren;
    children?: preact.ComponentChildren;
    onClick?: (args: {
        event: MouseEvent;
        fill: Color | GradientPaint | undefined;
    }) => void;
}
