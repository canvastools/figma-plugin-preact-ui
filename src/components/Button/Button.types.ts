export interface ButtonProps {
  className?: string
  intent?: "neutral" | "neutral-inverted" | "brand" | "danger" | "success"
  intentModifiers?:
    | "default"
    | "secondary"
    | "brand"
    | "danger"
    | "warning"
    | "success"
  ghost?: boolean
  size?: "medium" | "large"
  grouped?: "none" | "left" | "right" | "both"
  disabled?: boolean
  fullWidth?: boolean
  prefix?: preact.ComponentChildren
  suffix?: preact.ComponentChildren
  children?: preact.ComponentChildren
  onClick?: (args: { event: MouseEvent }) => void
}
