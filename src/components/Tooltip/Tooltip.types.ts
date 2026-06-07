import type { OverlayPositionerProps, TooltipContainerProps, TooltipTimingOptions, TooltipTrigger } from '../../index'

type TooltipContainerPropsPick = Pick<TooltipContainerProps, 'width' | 'height' | 'showArrow'>

type OverlayPositionerPropsPick = Pick<
  OverlayPositionerProps,
  'anchorRef' | 'placement' | 'placementFallback' | 'offsetX' | 'offsetY' | 'offsetEdge' | 'onOpen' | 'onClose'
>

export interface TooltipProps extends OverlayPositionerPropsPick, TooltipContainerPropsPick, TooltipTimingOptions {
  id?: string
  className?: string
  trigger?: TooltipTrigger
  children: preact.ComponentChildren
}
