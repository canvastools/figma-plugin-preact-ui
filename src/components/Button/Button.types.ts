export interface ButtonProps {
  className?: string
  variant?:
    | "primary"
    | "secondary"
    | "destructive"
    | "destructive-secondary"
    | "success"
    | "link"
    | "link-destructive"
    | "ghost"
  size?: "default" | "large"
  disabled?: boolean
  fullWidth?: boolean
  prefix?: preact.VNode
  suffix?: preact.VNode
  children?: preact.ComponentChildren
  onClick?: () => void
}
