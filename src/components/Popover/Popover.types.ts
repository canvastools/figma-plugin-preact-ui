import {
  PopoverContextProps,
  PopoverContainerProps,
  OverlayPositionerProps,
} from "../../index"

type PopoverContextPropsPick = Pick<
  PopoverContextProps,
  "triggerRef" | "anchorRef"
>

type PopoverContainerPropsPick = Pick<
  PopoverContainerProps,
  "width" | "height" | "showArrow"
>

type OverlayPositionerPropsPick = Pick<
  OverlayPositionerProps,
  | "defaultOpen"
  | "open"
  | "placement"
  | "placementFallback"
  | "draggable"
  | "offsetX"
  | "offsetY"
  | "offsetEdge"
  | "onOpen"
  | "onClose"
>

export interface PopoverProps
  extends PopoverContextPropsPick,
    OverlayPositionerPropsPick,
    PopoverContainerPropsPick {
  className?: string
  children: preact.ComponentChildren
  headerChildren?: preact.ComponentChildren | string
}
