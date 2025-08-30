export interface ButtonIconProps {
  className?: string
  intent?: "neutral"
  intentModifiers?: "default"
  ghost?: boolean
  size?: "medium" | "large"
  grouped?: "none" | "left" | "right" | "both"
  translucent?: boolean
  disabled?: boolean
  children?: preact.ComponentChildren
  onClick?: (args: { event: MouseEvent }) => void
}
