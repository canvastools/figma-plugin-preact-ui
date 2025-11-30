export interface MenuItemProps {
  className?: string
  disabled?: boolean
  prefix?: preact.ComponentChildren
  suffix?: preact.ComponentChildren
  children: preact.ComponentChildren
  hasNested?: boolean
  optionLikePadding?: boolean
  onClick?: (args: { event: MouseEvent }) => void
}
