export type OverlayPlacement =
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
  placement?: OverlayPlacement
  placementFallback?: false | OverlayPlacement[]
  trigger?: "click" | "hover"
  visibilityDelay?: number
  paddingX?: number
  paddingY?: number
  edgePadding?: number
  closeOnOutsideClick?: boolean
  arrow?: boolean
  onOpen?: () => void
  onClose?: () => void
  children: preact.ComponentChildren
}
