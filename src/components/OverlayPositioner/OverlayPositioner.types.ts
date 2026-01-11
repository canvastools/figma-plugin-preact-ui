export type OverlayPositionerPlacement =
  | "over"
  | "top"
  | "top-left"
  | "top-right"
  | "bottom"
  | "bottom-left"
  | "bottom-right"
  | "left"
  | "left-top"
  | "left-bottom"
  | "right"
  | "right-top"
  | "right-bottom"

export interface OverlayPositionerProps {
  className?: string
  anchorRef: preact.RefObject<HTMLElement>
  open?: boolean
  defaultOpen?: boolean
  placement?: OverlayPositionerPlacement
  placementFallback?: OverlayPositionerPlacement[] | undefined
  trigger?: "click" | "hover"
  draggable?: boolean
  offsetX?: number
  offsetY?: number
  offsetEdge?: number
  closeOnClickOutside?: boolean
  onOpen?: () => void
  onClose?: () => void
  children: preact.ComponentChildren
}
