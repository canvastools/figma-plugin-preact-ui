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
  variant?: "heading" | "body"
  size?: "small" | "medium" | "large"
  strong?: boolean
  align?: "left" | "center" | "right"
  disabled?: boolean
  selected?: boolean
  colorText?: string
  wrap?: boolean
  truncate?: boolean
  widthFull?: boolean
  children: preact.ComponentChildren
}
