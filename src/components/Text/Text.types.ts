export interface TextProps {
  className?: string
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
  disabled?: boolean
  interactive?: boolean
  selected?: boolean
  fill?: string
  variant?: "heading" | "body"
  size?: "small" | "medium" | "large"
  strong?: boolean
  align?: "left" | "center" | "right"
  fullWidth?: boolean
  noWrap?: boolean
  truncate?: boolean
  children: preact.ComponentChildren
}
