export type Color = {
  r: number
  g: number
  b: number
  a: number
}

export interface ColorPickerProps {
  className?: string
  defaultType?: "rgba" | "hex" | "hexAlpha"
  types?: ("rgba" | "hex" | "hexAlpha")[]
  value?: Color | null
  controls?: boolean
  width?: number | "auto"
  onChange?: (args: { rgba: Color; hex: string; opacity: number }) => void
}
