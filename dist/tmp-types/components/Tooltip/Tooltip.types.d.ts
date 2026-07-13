import type { OverlayPositionerProps } from '../OverlayPositioner/OverlayPositioner.types';
import type { TooltipContainerProps } from '../TooltipContainer/TooltipContainer.types';
import type { TooltipTimingOptions, TooltipTrigger } from '../TooltipContext/TooltipContext.types';
type TooltipContainerPropsPick = Pick<TooltipContainerProps, 'width' | 'height' | 'showArrow'>;
type OverlayPositionerPropsPick = Pick<OverlayPositionerProps, 'anchorRef' | 'placement' | 'placementFallback' | 'offsetX' | 'offsetY' | 'offsetEdge' | 'onOpen' | 'onClose'>;
export interface TooltipProps extends OverlayPositionerPropsPick, TooltipContainerPropsPick, TooltipTimingOptions {
    id?: string;
    className?: string;
    trigger?: TooltipTrigger;
    children: preact.ComponentChildren;
}
export {};
