export interface MenuItemProps {
  className?: string
  disabled?: boolean
  prefix?: preact.ComponentChildren
  suffix?: preact.ComponentChildren
  children: preact.ComponentChildren
  reducedPaddingRight?: boolean
  onClick?: (args: { event: MouseEvent }) => void
}
