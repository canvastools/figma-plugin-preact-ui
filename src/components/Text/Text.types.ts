export interface TextProps {
  className?: string
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
  variant?: "heading" | "body"
  size?: "small" | "medium" | "large"
  strong?: boolean
  align?: "left" | "center" | "right"
  children: preact.ComponentChildren
}
