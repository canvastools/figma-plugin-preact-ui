import type { Color } from "../ColorPicker/ColorPicker.types"

export interface ColorSwatchProps {
  className?: string
  size?: "small" | "medium" | "large"
  value?: Color
  disabled?: boolean
  selected?: boolean
  selection?: "default" | "rainbow"
  tooltip?: preact.ComponentChildren
  children?: preact.ComponentChildren
  onClick?: (args: { event: MouseEvent; value: Color | undefined }) => void
}
