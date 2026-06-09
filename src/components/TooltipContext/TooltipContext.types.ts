export const TOOLTIP_DEFAULT_SHOW_DELAY = 1200
export const TOOLTIP_DEFAULT_HIDE_DELAY = 480

export type TooltipTrigger = 'hover' | 'click'

export type TooltipTimingOptions = {
  showDelay?: number
  hideDelay?: number
}

export interface TooltipContextValue {
  registerHoverStart: (
    ref: preact.RefObject<HTMLElement>,
    setOpen: (open: boolean) => void,
    options?: TooltipTimingOptions,
  ) => void
  registerHoverEnd: (
    ref: preact.RefObject<HTMLElement>,
    setOpen: (open: boolean) => void,
    options?: TooltipTimingOptions,
  ) => void
  registerPointerDown: (
    ref: preact.RefObject<HTMLElement>,
    setOpen: (open: boolean) => void,
    options?: TooltipTimingOptions,
  ) => void
  registerClick: (
    ref: preact.RefObject<HTMLElement>,
    setOpen: (open: boolean) => void,
    options?: TooltipTimingOptions,
  ) => void
}

export interface TooltipContextProps {
  children: preact.ComponentChildren
}
