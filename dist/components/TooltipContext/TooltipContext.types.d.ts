export interface TooltipContextValue {
    registerHoverStart: (ref: preact.RefObject<HTMLElement>, setOpen: (open: boolean) => void) => void;
    registerHoverEnd: (ref: preact.RefObject<HTMLElement>, setOpen: (open: boolean) => void) => void;
    /** On pointerdown: cancel pending show, hide an open tooltip immediately, then run the same leave-phase timing as hover-end (fast switch to another trigger still works). */
    registerPointerDown: (ref: preact.RefObject<HTMLElement>, setOpen: (open: boolean) => void) => void;
}
export interface TooltipContextProps {
    children: preact.ComponentChildren;
}
