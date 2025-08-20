export interface TabProps {
  className?: string
  value: string
  variant?: "default" | "single"
  suffix?: preact.VNode
  children: preact.ComponentChildren
  onClick?: (value: string) => void
}
