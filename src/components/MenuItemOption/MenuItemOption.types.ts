export interface MenuItemOptionProps {
  className?: string
  defaultSelected?: boolean
  selected?: boolean
  disabled?: boolean
  reducedPaddingRight?: boolean
  suffix?: preact.ComponentChildren
  children: preact.ComponentChildren
  onChange?: (args: { event: MouseEvent; selected: boolean }) => void
}
