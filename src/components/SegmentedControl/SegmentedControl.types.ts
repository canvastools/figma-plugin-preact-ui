import { Glyph } from "../../index"

export interface SegmentedControlItemData {
  value: string
  label: string
  glyph?: Glyph | preact.ComponentChildren
}

export interface SegmentedControlProps {
  className?: string
  items: SegmentedControlItemData[]
  value?: string
  defaultValue?: string
  disabled?: boolean
  fullWidth?: boolean
  onValueChange?: (args: {
    event: MouseEvent | KeyboardEvent
    value: string
  }) => void
}
