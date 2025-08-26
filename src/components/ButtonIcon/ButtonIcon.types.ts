export interface ButtonIconProps {
  className?: string
  context?: "neutral" | "neutral-ghost"
  disabled?: boolean
  children?: preact.ComponentChildren
  onClick?: () => void
}
