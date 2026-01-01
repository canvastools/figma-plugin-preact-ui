export interface AvatarProps {
  className?: string
  variant?: "circle" | "square"
  size?: "small" | "medium" | "large"
  imageSrc?: string | undefined | null
  fillBackground?: string
  fillText?: string
  children?: preact.ComponentChildren
}
