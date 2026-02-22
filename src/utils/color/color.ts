import type { Color } from "../../components/ColorPicker/ColorPicker.types"

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

/** Converts a single 0–1 channel value to a two-character hex string. */
const componentToHex = (c: number) => {
  const hex = clamp(Math.round(c * 255), 0, 255).toString(16)
  return hex.length === 1 ? "0" + hex : hex
}

const normalizeHex = (hex: string): string | null => {
  const clean = hex.startsWith("#") ? hex.slice(1) : hex
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) return null
  return clean.toUpperCase()
}

/** Converts a `Color` (r, g, b in 0–1) to a 6-digit hex string. */
export const colorToHex = (color: Pick<Color, "r" | "g" | "b">): string => {
  return `#${componentToHex(color.r)}${componentToHex(color.g)}${componentToHex(
    color.b
  )}`
}

/** Converts a 6-digit hex string to a `Color` with r, g, b in 0–1. */
export const hexToColor = (hex: string, alpha: number = 1): Color | null => {
  const clean = normalizeHex(hex)
  if (!clean) return null
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
  const aHex = a.toString(16).padStart(2, "0").toUpperCase()
  return `${base}${aHex}`
}

/** Converts a 6- or 8-digit hex string to a `Color` with all channels in 0–1. */
export const hexAlphaToColor = (hex: string): Color | null => {
  const clean = hex.startsWith("#") ? hex.slice(1) : hex
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
  return null
}

/** Rounds a 0–1 alpha value to two decimal places. */
export const roundAlpha = (a: number): number => {
  return Math.round(a * 100) / 100
}
