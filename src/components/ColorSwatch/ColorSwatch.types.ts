export interface ColorSwatchProps {
  className?: string
  size?: "small" | "medium" | "large"
  hex?: string
  imageSrc?: string
  interactive?: boolean
  selected?: boolean
  selection?: "default" | "rainbow"
  tooltip?: preact.ComponentChildren
  children?: preact.ComponentChildren
  onClick?: (args: {
    event: MouseEvent
    hex: string | undefined
    imageSrc: string | undefined
  }) => void
}
