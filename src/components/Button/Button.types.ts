export interface ButtonProps {
  className?: string
  variant?:
    | "default"
    | "ghost"
    | "brand"
    | "destructive"
    | "destructive-secondary"
    | "success"
    | "link"
    | "link-destructive"
  size?: "default" | "large"
  disabled?: boolean
  fullWidth?: boolean
  prefix?: preact.VNode
  suffix?: preact.VNode
  children?: preact.ComponentChildren
  onClick?: () => void
}
