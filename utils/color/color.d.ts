import { Color } from '../../components/ColorPicker/ColorPicker.types';
declare const clamp: (value: number, min: number, max: number) => number;
/** Converts a `Color` (r, g, b in 0–1) to a 6-digit hex string. */
export declare const colorToHex: (color: Pick<Color, "r" | "g" | "b">) => string;
/** Converts a 6-digit hex string to a `Color` with r, g, b in 0–1. */
export declare const hexToColor: (hex: string, alpha?: number) => Color | undefined;
export { clamp };
/** Converts a `Color` (r, g, b, a all in 0–1) to an 8-digit hex string (#RRGGBBAA). */
export declare const colorToHexAlpha: (color: Color) => string;
/** Converts a 6- or 8-digit hex string to a `Color` with all channels in 0–1. */
export declare const hexAlphaToColor: (hex: string) => Color | undefined;
/** Rounds a 0–1 alpha value to two decimal places. */
export declare const roundAlpha: (a: number) => number;
/** RGBA with r, g, b in 0–255, a in 0–1. */
export type Rgba = {
    r: number;
    g: number;
    b: number;
    a: number;
};
/** Converts a `Color` (0–1) to RGBA (r, g, b in 0–255, a in 0–1). */
export declare const colorToRgba: (color: Color) => Rgba;
/** Converts RGBA (r, g, b in 0–255, a in 0–1) to a `Color` (0–1). */
export declare const rgbaToColor: (rgba: Rgba) => Color;
/** HSB with h in 0–360 degrees, s and b (brightness) in 0–1, a in 0–1. */
export type Hsb = {
    h: number;
    s: number;
    b: number;
    a: number;
};
/**
 * Converts a `Color` (0–1) to HSB — the model Figma's own color UI is built on,
 * and the one to reach for when a color has to be shifted rather than replaced:
 * hue, saturation and brightness move independently, which they do not in RGB.
 *
 * A gray has no hue to speak of, so it comes back as `h: 0`.
 */
export declare const colorToHsb: (color: Color) => Hsb;
/** Converts HSB (h in 0–360, s and b in 0–1) to a `Color` (0–1). */
export declare const hsbToColor: (hsb: Hsb) => Color;
