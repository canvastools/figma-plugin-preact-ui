import { glyphs } from "./glyphs"

export interface GlyphProps {
  variant: IconProps["variant"]
  size: number
}

export interface IconProps {
  className?: string
  glyph?: keyof typeof glyphs
  intent?:
    | "neutral"
    | "neutral-inverted"
    | "brand"
    | "danger"
    | "warning"
    | "success"
  intentModifiers?:
    | "default"
    | "secondary"
    | "brand"
    | "danger"
    | "warning"
    | "success"
  disabled?: boolean
  interactive?: boolean
  selected?: boolean
  fill?: string
  variant?: "default" | "scaled"
  size?: 16 | 24
  children?: preact.ComponentChildren
}
