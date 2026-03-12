export type CheckboxValue = boolean

export interface CheckboxProps {
  id?: string
  className?: string
  intent?: 'neutral' | 'brand'
  intentModifier?: 'default'
  checked?: CheckboxValue
  defaultChecked?: CheckboxValue
  mixed?: boolean
  disabled?: boolean
  label?: string
  onCheckedChange?: (args: { event: MouseEvent; checked: CheckboxValue }) => void
}
