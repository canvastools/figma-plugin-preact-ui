import type { PopoverHeaderProps } from "../../index"

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

type PopoverHeaderPropsPick = Pick<PopoverHeaderProps, "children">

export interface PopoverProps
  extends PopoverContextPropsPick,
    OverlayPositionerPropsPick,
    PopoverContainerPropsPick {
  className?: string
  children: preact.ComponentChildren
  popoverHeaderProps?: PopoverHeaderPropsPick
}
