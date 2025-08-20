import { glyphs } from "./glyphs"

export interface GlyphProps {
  variant: "default" | "small"
  size: number
}

export interface IconProps {
  className?: string
  glyph?: keyof typeof glyphs
  variant?: "default" | "small"
  size?: 16 | 24
  color?: string
  children?: preact.VNode
}
