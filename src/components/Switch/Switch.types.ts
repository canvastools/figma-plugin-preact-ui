export type SwitchValue = boolean

export interface SwitchProps {
  className?: string
  checked?: SwitchValue
  defaultChecked?: SwitchValue
  disabled?: boolean
  onCheckedChange?: (args: {
    event: MouseEvent | KeyboardEvent
    checked: SwitchValue
  }) => void
}
