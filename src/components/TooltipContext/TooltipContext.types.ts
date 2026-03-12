export interface TooltipContextValue {
  registerHoverStart: (ref: preact.RefObject<HTMLElement>, setOpen: (open: boolean) => void) => void
  registerHoverEnd: (ref: preact.RefObject<HTMLElement>, setOpen: (open: boolean) => void) => void
}

export interface TooltipContextProps {
  children: preact.ComponentChildren
}
