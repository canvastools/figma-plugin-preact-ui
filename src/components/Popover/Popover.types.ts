import { OverlayPlacement } from "../../index"

export interface PopoverProps {
  className?: string
  triggerRef?: preact.RefObject<HTMLElement | null>
  anchorRef?: preact.RefObject<HTMLElement | null>
  defaultOpen?: boolean
  open?: boolean
  header: preact.ComponentChildren | string
  draggable?: boolean
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
