import type { PopoverHeaderProps } from '../PopoverHeader/PopoverHeader.types'
import type { PopoverContextProps } from '../PopoverContext/PopoverContext.types'
import type { PopoverContainerProps } from '../PopoverContainer/PopoverContainer.types'
import type { OverlayPositionerProps } from '../OverlayPositioner/OverlayPositioner.types'

type PopoverContextPropsPick = Pick<PopoverContextProps, 'triggerRef' | 'anchorRef'>

type PopoverContainerPropsPick = Pick<PopoverContainerProps, 'width' | 'height' | 'showArrow' | 'constrainHeight' | 'tabIndex'>

type OverlayPositionerPropsPick = Pick<
  OverlayPositionerProps,
  | 'defaultOpen'
  | 'open'
  | 'placement'
  | 'placementFallback'
  | 'draggable'
  | 'offsetX'
  | 'offsetY'
  | 'offsetEdge'
  | 'autoReposition'
  | 'onOpen'
  | 'onClose'
>

type PopoverHeaderPropsPick = Pick<PopoverHeaderProps, 'children'>

export interface PopoverProps extends PopoverContextPropsPick, OverlayPositionerPropsPick, PopoverContainerPropsPick {
  id?: string
  className?: string
  children: preact.ComponentChildren
  popoverHeaderProps?: PopoverHeaderPropsPick
}
