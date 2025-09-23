export interface PopoverProps {
  className?: string
  open?: boolean
  anchor?: HTMLElement | null
  position?: "auto" | "left" | "right"
  width?: number
  height?: number
  offsetX?: number
  offsetY?: number
  children: preact.ComponentChildren
  onClose?: () => void
  onOpen?: () => void
}
