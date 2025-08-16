export interface ButtonProps {
  className?: string
  variant?: "primary" | "secondary"
  size?: "default" | "large"
  disabled?: boolean
  fullWidth?: boolean
  children?: preact.ComponentChildren
  onClick?: () => void
}
