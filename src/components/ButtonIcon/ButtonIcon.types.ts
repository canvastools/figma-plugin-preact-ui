export interface ButtonIconProps {
  className?: string
  context?: "neutral" | "neutral-ghost"
  selected?: boolean
  disabled?: boolean
  children?: preact.ComponentChildren
  onClick?: () => void
}
