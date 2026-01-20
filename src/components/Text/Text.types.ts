export interface TextProps {
  className?: string
  id?: string
  intent?:
    | "neutral"
    | "neutral-inverted"
    | "neutral-inverted-fixed"
    | "brand"
    | "danger"
    | "warning"
    | "success"
  intentModifier?:
    | "default"
    | "secondary"
    | "brand"
    | "danger"
    | "warning"
    | "success"
  variant?: "heading" | "body"
  size?: "small" | "medium" | "large"
  strong?: boolean
  align?: "left" | "center" | "right"
  disabled?: boolean
  selected?: boolean
  textColor?: string
  wrap?: boolean
  truncate?: boolean
  fullWidth?: boolean
  children: preact.ComponentChildren
}
