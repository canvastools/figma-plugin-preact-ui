export interface BadgeProps {
  className?: string
  intent?:
    | "neutral"
    | "neutral-inverted"
    | "brand"
    | "danger"
    | "warning"
    | "success"
  intentModifiers?:
    | "default"
    | "secondary"
    | "brand"
    | "danger"
    | "warning"
    | "success"
  prefix?: preact.ComponentChildren
  suffix?: preact.ComponentChildren
  children?: preact.ComponentChildren
}
