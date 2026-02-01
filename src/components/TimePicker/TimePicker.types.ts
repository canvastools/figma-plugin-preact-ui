export type TimePickerDate = Date | string | number | null

export interface TimePickerProps {
  id?: string
  className?: string
  locale?: string
  variant?: "default" | "list"
  label?: preact.ComponentChildren
  maxWidth?: number | string
  defaultDate?: TimePickerDate
  date?: TimePickerDate
  format?: string
  hourPlaceholder?: string
  minutePlaceholder?: string
  maxTime?: string
  minTime?: string
  disabled?: boolean
  autoFocus?: boolean
  grouped?: "first" | "last" | "middle"
  tooltip?: preact.ComponentChildren
  onTimeChange?: (args: {
    date: TimePickerDate | undefined
    time: string
  }) => void
}
