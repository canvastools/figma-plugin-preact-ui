import {
  MenuItemActionProps,
  MenuItemOptionProps,
  MenuDividerProps,
  OverlayPlacement,
} from "../../index"

export type MenuItemData =
  | ({ type: "action"; closeOnClick?: boolean } & Omit<
      MenuItemActionProps,
      "focused"
    >)
  | ({ type: "option"; closeOnClick?: boolean } & Omit<
      MenuItemOptionProps,
      "focused"
    >)
  | ({ type: "divider" } & MenuDividerProps)

export interface MenuProps {
  triggerRef?: preact.RefObject<HTMLElement | null>
  anchorRef?: preact.RefObject<HTMLElement | null>
  items: MenuItemData[]
  open: boolean | undefined
  width?: number | "auto"
  placement?: OverlayPlacement
  placementFallback?: false | OverlayPlacement[]
  paddingX?: number
  paddingY?: number
  edgePadding?: number
  onOpen?: () => void
  onClose?: () => void
}
