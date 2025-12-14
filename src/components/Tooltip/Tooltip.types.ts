import { OverlayPlacement } from "../../index"

export interface TooltipProps {
  className?: string
  triggerRef?: preact.RefObject<HTMLElement | null>
  anchorRef?: preact.RefObject<HTMLElement | null>
  width?: number | "auto"
  height?: number | "auto"
  placement?: OverlayPlacement
  placementFallback?: false | OverlayPlacement[]
  paddingX?: number
  paddingY?: number
  edgePadding?: number
  children: preact.ComponentChildren
  onOpen?: () => void
  onClose?: () => void
}
