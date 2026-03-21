export interface InputProps {
  id?: string
  className?: string
  type?: 'text' | 'number'
  variant?: 'default' | 'list'
  label?: string
  placeholder?: string
  defaultValue?: string
  value?: string
  ghost?: boolean
  grouped?: 'first' | 'last' | 'middle'
  error?: boolean
  disabled?: boolean
  prefix?: preact.ComponentChildren
  suffix?: preact.ComponentChildren
  showSuffixOnHover?: boolean
  focusOnDoubleClick?: boolean
  tooltip?: preact.ComponentChildren
  minLength?: number
  maxLength?: number
  maxWidth?: number | string
  autoFocus?: boolean
  onValueChange?: (args: { event: Event; value: string }) => void
  onBlur?: (args: { event: FocusEvent; value: string }) => void
  onFocus?: (args: { event: FocusEvent; value: string }) => void
  onKeyDown?: (args: { event: KeyboardEvent; value: string }) => void
}
