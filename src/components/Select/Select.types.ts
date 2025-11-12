export interface SelectOption {
  label: string
  value: string
}

export interface SelectProps {
  className?: string
  options?: SelectOption[] | SelectOption[][]
  placeholder?: string
  defaultValue?: string
  value?: string
  grouped?: "none" | "left" | "right" | "both"
  error?: boolean
  disabled?: boolean
  prefix?: preact.ComponentChildren
  menuWidth?: number | "auto"
  onBlur?: () => void
  onFocus?: () => void
  onChange?: (args: { event: MouseEvent; value: string }) => void
}
