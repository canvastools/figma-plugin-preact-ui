export interface InputProps {
  className?: string
  type?: "text" | "number"
  placeholder?: string
  defaultValue?: string
  value?: string
  ghost?: boolean
  grouped?: "none" | "first" | "last" | "middle"
  error?: boolean
  disabled?: boolean
  prefix?: preact.ComponentChildren
  suffix?: preact.ComponentChildren
  showSuffixOnHover?: boolean
  focusOnDoubleClick?: boolean
  tooltip?: preact.ComponentChildren
  minLength?: number
  maxLength?: number
  autoFocus?: boolean
  onValueChange?: (args: { event: MouseEvent; value: string }) => void
  onBlur?: (args: { event: MouseEvent; value: string }) => void
  onFocus?: (args: { event: MouseEvent; value: string }) => void
  onKeyDown?: (args: { event: KeyboardEvent; value: string }) => void
}
