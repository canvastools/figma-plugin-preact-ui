import type { PopoverContextProps, PopoverContextValue } from './PopoverContext.types';
declare const usePopoverContext: () => PopoverContextValue;
declare const PopoverContext: ({ triggerRef, anchorRef, open, setOpen, children }: PopoverContextProps) => import("preact").JSX.Element;
export { PopoverContext, usePopoverContext };
