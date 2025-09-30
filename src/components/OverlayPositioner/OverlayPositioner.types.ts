export type OverlayPositionerPlacement = "x" | "y" | "over"

export interface OverlayPositionerProps {
  className?: string
  anchorRef: preact.RefObject<HTMLElement>
  open?: boolean
  defaultOpen?: boolean
  placement?: OverlayPositionerPlacement
  offsetX?: number
  offsetY?: number
  edgePadding?: number
  closeOnOutsideClick?: boolean
  onOpen?: () => void
  onClose?: () => void
  children: preact.ComponentChildren
}
