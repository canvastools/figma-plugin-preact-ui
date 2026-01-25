import { Glyph } from "../../index"

import type { IconPropsPick } from "../Icon/Icon.types"

export interface SegmentedControlItemData {
  value: string
  label: string
  icon?: IconPropsPick
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
