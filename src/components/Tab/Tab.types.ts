export interface TabProps {
  className?: string
  value: string
  variant?: "default" | "single"
  children: preact.ComponentChildren
  onClick?: (value: string) => void
}
