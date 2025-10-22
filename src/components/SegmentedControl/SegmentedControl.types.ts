export interface SegmentedControlOption {
  value: string
  title: string
  icon?: preact.VNode
}

export interface SegmentedControlProps {
  className?: string
  options: SegmentedControlOption[]
  value?: string
  defaultValue?: string
  disabled?: boolean
  fullWidth?: boolean
  onChange?: (args: {
    event: MouseEvent | KeyboardEvent
    value: string
  }) => void
}
