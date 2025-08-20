export interface AvatarProps {
  className?: string
  imageSrc?: string
  children?: preact.ComponentChildren
  fill?: string
  size?: "small" | "default" | "large"
  shape?: "circle" | "square"
}
