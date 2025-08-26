export interface AvatarProps {
  className?: string
  size?: "small" | "medium" | "large"
  shape?: "circle" | "square"
  imageSrc?: string
  fillBg?: string
  fillText?: string
  children?: preact.ComponentChildren
}
