export interface TabProps {
  className?: string
  id: string
  variant?: "default" | "single"
  prefix?: preact.ComponentChildren
  suffix?: preact.ComponentChildren
  children: preact.ComponentChildren
  onClick?: (args: { event: MouseEvent; id: string }) => void
}
