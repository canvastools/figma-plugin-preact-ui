export interface PopoverContextValue {
    triggerRef?: preact.RefObject<HTMLElement | null>;
    anchorRef?: preact.RefObject<HTMLElement | null>;
    open?: boolean;
    setOpen?: (open: boolean) => void;
}
export interface PopoverContextProps {
    triggerRef?: preact.RefObject<HTMLElement | null>;
    anchorRef?: preact.RefObject<HTMLElement | null>;
    open?: boolean;
    setOpen?: (open: boolean) => void;
    children: preact.ComponentChildren;
}
