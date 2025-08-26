export interface BadgeProps {
  className?: string
  context?:
    | "neutral"
    | "neutral-secondary"
    | "neutral-brand"
    | "neutral-danger"
    | "neutral-warning"
    | "neutral-success"
    | "neutral-inverted"
    | "brand"
    | "danger"
    | "warning"
    | "success"
  prefix?: preact.ComponentChildren
  suffix?: preact.ComponentChildren
  children?: preact.ComponentChildren
}
