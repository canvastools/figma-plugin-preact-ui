export interface AvatarProps {
  id?: string
  className?: string
  variant?: "circle" | "square"
  size?: "small" | "medium" | "large"
  src?: string | undefined | null
  backgroundColor?: string
  textColor?: string
  children: preact.ComponentChildren
}
