import { PopoverHeaderProps } from '../PopoverHeader/PopoverHeader.types';
import { PopoverContextProps } from '../PopoverContext/PopoverContext.types';
import { PopoverContainerProps } from '../PopoverContainer/PopoverContainer.types';
import { OverlayPositionerProps } from '../OverlayPositioner/OverlayPositioner.types';
type PopoverContextPropsPick = Pick<PopoverContextProps, 'triggerRef' | 'anchorRef'>;
type PopoverContainerPropsPick = Pick<PopoverContainerProps, 'width' | 'height' | 'showArrow' | 'constrainHeight' | 'tabIndex'>;
type OverlayPositionerPropsPick = Pick<OverlayPositionerProps, 'defaultOpen' | 'open' | 'placement' | 'placementFallback' | 'draggable' | 'offsetX' | 'offsetY' | 'offsetEdge' | 'autoReposition' | 'onOpen' | 'onClose'>;
type PopoverHeaderPropsPick = Pick<PopoverHeaderProps, 'children'>;
export interface PopoverProps extends PopoverContextPropsPick, OverlayPositionerPropsPick, PopoverContainerPropsPick {
    id?: string;
    className?: string;
    children: preact.ComponentChildren;
    popoverHeaderProps?: PopoverHeaderPropsPick;
}
export {};
