export interface MenuItemMetadata {
  id: string
  ref: preact.RefObject<HTMLElement>
  disabled?: boolean
}

export interface MenuContextValue {
  triggerRef?: preact.RefObject<HTMLElement> | null
  anchorRef?: preact.RefObject<HTMLElement> | null
  open?: boolean
  setOpen: (open: boolean) => void
  registerItem: (meta: MenuItemMetadata) => () => void
  focusedItemId: string | null
  focusItem: (id?: string) => void
  clearFocusedItem: () => void
}

export interface MenuContextProps {
  triggerRef?: preact.RefObject<HTMLElement | null>
  anchorRef?: preact.RefObject<HTMLElement | null>
  open?: boolean
  setOpen?: (open: boolean) => void
  children: preact.ComponentChildren
}
