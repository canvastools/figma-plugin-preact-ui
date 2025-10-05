export interface AvatarProps {
  className?: string
  size?: "small" | "medium" | "large"
  shape?: "circle" | "square"
  imageSrc?: string | undefined | null
  fillBg?: string
  fillText?: string
  children?: preact.ComponentChildren
}
