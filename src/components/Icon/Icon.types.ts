import { glyphs } from "./glyphs"

export interface GlyphProps {
  variant: IconProps["variant"]
  size: number
}

export interface IconProps {
  className?: string
  glyph?: keyof typeof glyphs
  context?:
    | "inherit"
    | "neutral"
    | "neutral-secondary"
    | "neutral-brand"
    | "neutral-danger"
    | "neutral-warning"
    | "neutral-success"
    | "neutral-inverted"
    | "brand"
    | "danger"
    | "warning"
    | "success"
  variant?: "default" | "scaled"
  size?: 16 | 24
  children?: preact.ComponentChildren
}
