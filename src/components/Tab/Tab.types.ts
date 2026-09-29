export interface TabProps {
  id: string
  className?: string
  variant?: 'default' | 'single'
  disabled?: boolean
  prefix?: preact.ComponentChildren
  suffix?: preact.ComponentChildren
  tooltip?: preact.ComponentChildren
  children: preact.ComponentChildren
  tabIndex?: number
  onClick?: (args: { event: MouseEvent; id: string }) => void
}
