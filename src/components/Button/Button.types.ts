export interface ButtonProps {
  className?: string
  context?: "neutral" | "neutral-inverted" | "brand" | "danger" | "success"
  contextModifiers?:
    | "default"
    | "secondary"
    | "brand"
    | "danger"
    | "warning"
    | "success"
  ghost?: boolean
  size?: "medium" | "large"
  disabled?: boolean
  fullWidth?: boolean
  prefix?: preact.ComponentChildren
  suffix?: preact.ComponentChildren
  children?: preact.ComponentChildren
  onClick?: (args: { event: MouseEvent }) => void
}
