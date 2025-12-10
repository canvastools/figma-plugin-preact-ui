export interface MenuItemActionProps {
  id?: string
  className?: string
  intentModifiers?: "default" | "danger"
  disabled?: boolean
  focused?: boolean
  prefix?: preact.ComponentChildren
  suffix?: preact.ComponentChildren
  children: preact.ComponentChildren
  optionLikePadding?: boolean
  onClick?: (args: { event: MouseEvent }) => void
}
