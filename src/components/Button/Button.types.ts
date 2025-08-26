export interface ButtonProps {
  className?: string
  context?:
    | "neutral"
    | "neutral-ghost"
    | "neutral-brand"
    | "neutral-brand-ghost"
    | "neutral-danger"
    | "neutral-danger-ghost"
    | "neutral-inverted"
    | "brand"
    | "danger"
    | "success"
  size?: "medium" | "large"
  disabled?: boolean
  fullWidth?: boolean
  prefix?: preact.ComponentChildren
  suffix?: preact.ComponentChildren
  children?: preact.ComponentChildren
  onClick?: (args: { event: MouseEvent }) => void
}
