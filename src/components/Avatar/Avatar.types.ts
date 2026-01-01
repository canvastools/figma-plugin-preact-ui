export interface AvatarProps {
  className?: string
  variant?: "circle" | "square"
  size?: "small" | "medium" | "large"
  src?: string | undefined | null
  colorBackground?: string
  colorText?: string
  children: preact.ComponentChildren
}
