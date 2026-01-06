export interface GlyphProps {
  variant: IconProps["variant"]
  size: number
}

export type Glyph = (props: GlyphProps) => preact.VNode

export interface IconProps {
  className?: string
  glyph?: Glyph
  intent?:
    | "neutral"
    | "neutral-inverted"
    | "neutral-inverted-fixed"
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
  variant?: "default" | "scaled"
  size?: 16 | 24
  disabled?: boolean
  selected?: boolean
  colorIcon?: string
  children?: preact.ComponentChildren
}
