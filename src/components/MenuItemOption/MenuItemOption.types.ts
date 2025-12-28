export interface MenuItemOptionProps {
  id?: string
  className?: string
  defaultSelected?: boolean
  selected?: boolean
  disabled?: boolean
  focused?: boolean
  prefix?: preact.ComponentChildren
  suffix?: preact.ComponentChildren
  children: preact.ComponentChildren
  onChange?: (args: { event: MouseEvent; selected: boolean }) => void
}
