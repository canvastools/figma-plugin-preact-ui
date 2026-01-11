export type Color = {
  r: number
  g: number
  b: number
  a: number
}

export type ColorPickerType = "rgba" | "hex" | "hexAlpha"

export interface ColorPickerProps {
  className?: string
  defaultType?: ColorPickerType
  type?: ColorPickerType
  types?: ColorPickerType[]
  value?: Color | null
  defaultValue?: Color
  showControls?: boolean
  width?: number
  fullWidth?: boolean
  onTypeChange?: (args: { type: ColorPickerType }) => void
  onValueChange?: (args: { rgba: Color; hex: string; opacity: number }) => void
}
