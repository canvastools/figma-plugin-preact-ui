export type CheckboxValue = boolean

export interface CheckboxProps {
  className?: string
  intent?: "neutral" | "brand"
  intentModifiers?: "default"
  checked?: CheckboxValue
  defaultChecked?: CheckboxValue
  mixed?: boolean
  disabled?: boolean
  label?: string
  onChange?: (args: { event: MouseEvent; checked: CheckboxValue }) => void
}
