export interface ColorSwatchProps {
  className?: string
  size?: "small" | "medium" | "large"
  hex?: string
  imageSrc?: string
  borderColor?: string
  interactive?: boolean
  selected?: boolean
  selection?: "default" | "rainbow"
  title?: string
  children?: preact.ComponentChildren
  onClick?: (args: {
    event: MouseEvent
    hex: string | undefined
    imageSrc: string | undefined
  }) => void
}
