import type { OverlayPositionerProps, TooltipContainerProps } from "../../index"

type TooltipContainerPropsPick = Pick<
  TooltipContainerProps,
  "width" | "height" | "showArrow"
>

type OverlayPositionerPropsPick = Pick<
  OverlayPositionerProps,
  | "anchorRef"
  | "placement"
  | "placementFallback"
  | "offsetX"
  | "offsetY"
  | "offsetEdge"
  | "onOpen"
  | "onClose"
>

export interface TooltipProps
  extends OverlayPositionerPropsPick,
    TooltipContainerPropsPick {
  className?: string
  triggerRef?: preact.RefObject<HTMLElement | null>
  children: preact.ComponentChildren
}
