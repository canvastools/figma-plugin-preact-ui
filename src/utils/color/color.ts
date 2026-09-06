import type { Color } from '../../components/ColorPicker/ColorPicker.types'

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

/** Converts a single 0–1 channel value to a two-character hex string. */
const componentToHex = (c: number) => {
  const hex = clamp(Math.round(c * 255), 0, 255).toString(16)
  return hex.length === 1 ? '0' + hex : hex
}

const normalizeHex = (hex: string): string | undefined => {
  const clean = hex.startsWith('#') ? hex.slice(1) : hex
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) return undefined
  return clean.toUpperCase()
}

/** Converts a `Color` (r, g, b in 0–1) to a 6-digit hex string. */
export const colorToHex = (color: Pick<Color, 'r' | 'g' | 'b'>): string => {
  return `#${componentToHex(color.r)}${componentToHex(color.g)}${componentToHex(color.b)}`
}

/** Converts a 6-digit hex string to a `Color` with r, g, b in 0–1. */
export const hexToColor = (hex: string, alpha: number = 1): Color | undefined => {
  const clean = normalizeHex(hex)
  if (!clean) return undefined
  const r = parseInt(clean.slice(0, 2), 16) / 255
  const g = parseInt(clean.slice(2, 4), 16) / 255
  const b = parseInt(clean.slice(4, 6), 16) / 255
  return { r, g, b, a: alpha }
}

export { clamp }

/** Converts a `Color` (r, g, b, a all in 0–1) to an 8-digit hex string (#RRGGBBAA). */
export const colorToHexAlpha = (color: Color): string => {
  const base = colorToHex(color)
  const a = clamp(Math.round(color.a * 255), 0, 255)
  const aHex = a.toString(16).padStart(2, '0').toUpperCase()
  return `${base}${aHex}`
}

/** Converts a 6- or 8-digit hex string to a `Color` with all channels in 0–1. */
export const hexAlphaToColor = (hex: string): Color | undefined => {
  const clean = hex.startsWith('#') ? hex.slice(1) : hex
  if (/^[0-9a-fA-F]{8}$/.test(clean)) {
    const r = parseInt(clean.slice(0, 2), 16) / 255
    const g = parseInt(clean.slice(2, 4), 16) / 255
    const b = parseInt(clean.slice(4, 6), 16) / 255
    const a = parseInt(clean.slice(6, 8), 16) / 255
    return { r, g, b, a }
  }
  if (/^[0-9a-fA-F]{6}$/.test(clean)) {
    const r = parseInt(clean.slice(0, 2), 16) / 255
    const g = parseInt(clean.slice(2, 4), 16) / 255
    const b = parseInt(clean.slice(4, 6), 16) / 255
    return { r, g, b, a: 1 }
  }
  return undefined
}

/** Rounds a 0–1 alpha value to two decimal places. */
export const roundAlpha = (a: number): number => {
  return Math.round(a * 100) / 100
}

/** RGBA with r, g, b in 0–255, a in 0–1. */
export type Rgba = { r: number; g: number; b: number; a: number }

/** Converts a `Color` (0–1) to RGBA (r, g, b in 0–255, a in 0–1). */
export const colorToRgba = (color: Color): Rgba => {
  return {
    r: clamp(Math.round(color.r * 255), 0, 255),
    g: clamp(Math.round(color.g * 255), 0, 255),
    b: clamp(Math.round(color.b * 255), 0, 255),
    a: clamp(color.a, 0, 1),
  }
}

/** Converts RGBA (r, g, b in 0–255, a in 0–1) to a `Color` (0–1). */
export const rgbaToColor = (rgba: Rgba): Color => {
  return {
    r: clamp(rgba.r, 0, 255) / 255,
    g: clamp(rgba.g, 0, 255) / 255,
    b: clamp(rgba.b, 0, 255) / 255,
    a: clamp(rgba.a, 0, 1),
  }
}

/** HSB with h in 0–360 degrees, s and b (brightness) in 0–1, a in 0–1. */
export type Hsb = { h: number; s: number; b: number; a: number }

/**
 * Converts a `Color` (0–1) to HSB — the model Figma's own color UI is built on,
 * and the one to reach for when a color has to be shifted rather than replaced:
 * hue, saturation and brightness move independently, which they do not in RGB.
 *
 * A gray has no hue to speak of, so it comes back as `h: 0`.
 */
export const colorToHsb = (color: Color): Hsb => {
  const { r, g, b } = color

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const delta = max - min

  let h = 0
  if (delta !== 0) {
    if (max === r) h = (60 * ((g - b) / delta) + 360) % 360
    else if (max === g) h = 60 * ((b - r) / delta + 2)
    else h = 60 * ((r - g) / delta + 4)
  }

  return {
    h,
    s: max === 0 ? 0 : delta / max,
    b: max,
    a: clamp(color.a, 0, 1),
  }
}

/** Converts HSB (h in 0–360, s and b in 0–1) to a `Color` (0–1). */
export const hsbToColor = (hsb: Hsb): Color => {
  const h = ((hsb.h % 360) + 360) % 360
  const s = clamp(hsb.s, 0, 1)
  const v = clamp(hsb.b, 0, 1)
  const a = clamp(hsb.a, 0, 1)

  if (s === 0) return { r: v, g: v, b: v, a }

  const c = v * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = v - c

  const [r, g, b] =
    h < 60
      ? [c, x, 0]
      : h < 120
      ? [x, c, 0]
      : h < 180
      ? [0, c, x]
      : h < 240
      ? [0, x, c]
      : h < 300
      ? [x, 0, c]
      : [c, 0, x]

  return { r: r + m, g: g + m, b: b + m, a }
}
