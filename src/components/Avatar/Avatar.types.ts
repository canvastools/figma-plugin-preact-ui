export interface AvatarProps {
  className?: string
  variant?: "circle" | "square"
  size?: "small" | "medium" | "large"
  src?: string | undefined | null
  fillBackground?: string
  fillText?: string
  children: preact.ComponentChildren
}
