export interface BadgeProps {
  id?: string
  className?: string
  intent?:
    | "neutral"
    | "neutral-inverted"
    | "brand"
    | "danger"
    | "warning"
    | "success"
  intentModifier?:
    | "default"
    | "secondary"
    | "brand"
    | "danger"
    | "warning"
    | "success"
  prefix?: preact.ComponentChildren
  suffix?: preact.ComponentChildren
  children: preact.ComponentChildren
}
