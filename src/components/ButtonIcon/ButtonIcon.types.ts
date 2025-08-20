export interface ButtonIconProps {
  className?: string
  variant?: "default" | "ghost"
  selected?: boolean
  disabled?: boolean
  children?: preact.ComponentChildren
  onClick?: () => void
}
