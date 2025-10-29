export interface ColorSwatchProps {
  className?: string
  size?: "small" | "medium" | "large"
  hex?: string
  imageSrc?: string
  wheel?: boolean
  hoverable?: boolean
  selected?: boolean
  title?: string
  onClick?: (args: {
    event: MouseEvent
    hex: string | undefined
    imageSrc: string | undefined
  }) => void
}
