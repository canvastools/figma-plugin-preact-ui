export interface InputProps {
  className?: string
  type?: "text" | "number"
  placeholder?: string
  defaultValue?: string
  value?: string
  ghost?: boolean
  grouped?: "none" | "left" | "right" | "both"
  error?: boolean
  disabled?: boolean
  prefix?: preact.ComponentChildren
  suffix?: preact.ComponentChildren
  suffixOnHover?: boolean
  focusOnDoubleClick?: boolean
  onChange?: (args: { event: MouseEvent; value: string }) => void
  onBlur?: (args: { event: MouseEvent; value: string }) => void
  onFocus?: (args: { event: MouseEvent; value: string }) => void
  onKeyDown?: (args: { event: KeyboardEvent; value: string }) => void
}
