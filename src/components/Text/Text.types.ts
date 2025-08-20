export interface TextProps {
  className?: string
  variant?: "heading" | "body"
  size?: "small" | "medium" | "large"
  strong?: boolean
  align?: "left" | "center" | "right"
  children: preact.ComponentChildren
}
