export interface TypographyProps {
  className?: string
  variant?: "heading" | "body"
  size?: "small" | "medium" | "large"
  strong?: boolean
  children: preact.ComponentChildren
}
