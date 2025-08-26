export interface TabProps {
  className?: string
  value: string
  variant?: "default" | "single"
  prefix?: preact.ComponentChildren
  suffix?: preact.ComponentChildren
  children: preact.ComponentChildren
  onClick?: (args: { event: MouseEvent; value: string }) => void
}
