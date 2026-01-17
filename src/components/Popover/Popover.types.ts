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
  "width" | "height" | "arrow"
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
  header?: preact.ComponentChildren | string
}
