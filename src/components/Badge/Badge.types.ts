export interface BadgeProps {
  className?: string
  variant?:
    | "default"
    | "brand"
    | "brand-secondary"
    | "danger"
    | "danger-secondary"
    | "warning"
    | "warning-secondary"
    | "success"
    | "success-secondary"
    | "disabled"
    | "disabled-secondary"
    | "count"
  prefix?: preact.VNode
  children?: preact.ComponentChildren
}
