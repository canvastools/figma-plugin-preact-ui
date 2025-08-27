export interface InputProps {
  className?: string
  placeholder?: string
  defaultValue?: string
  value?: string
  error?: boolean
  disabled?: boolean
  prefix?: preact.ComponentChildren
  suffix?: preact.ComponentChildren
  onChange?: (args: { event: MouseEvent; value: string }) => void
  onBlur?: (args: { event: MouseEvent; value: string }) => void
  onFocus?: (args: { event: MouseEvent; value: string }) => void
}
