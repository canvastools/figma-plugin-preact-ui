export interface ButtonIconProps {
  className?: string
  context?: "neutral"
  contextModifiers?: "default"
  ghost?: boolean
  translucent?: boolean
  disabled?: boolean
  children?: preact.ComponentChildren
  onClick?: (args: { event: MouseEvent }) => void
}
