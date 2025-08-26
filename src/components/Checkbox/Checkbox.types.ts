export type CheckboxValue = boolean

export interface CheckboxProps {
  className?: string
  checked?: CheckboxValue
  mixed?: boolean
  disabled?: boolean
  label?: string
  onChange?: (args: { event: MouseEvent; checked: CheckboxValue }) => void
}
