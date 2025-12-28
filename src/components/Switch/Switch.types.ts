export type SwitchValue = boolean

export interface SwitchProps {
  className?: string
  checked?: SwitchValue
  defaultChecked?: SwitchValue
  disabled?: boolean
  onChange?: (args: { event: MouseEvent; checked: SwitchValue }) => void
}
