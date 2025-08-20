export interface ButtonIconProps {
  className?: string
  variant?: "secondary" | "ghost"
  selected?: boolean
  disabled?: boolean
  children?: preact.ComponentChildren
  onClick?: () => void
}
