import {
  MenuContextProps,
  MenuContainerProps,
  MenuItemActionProps,
  MenuItemOptionProps,
  MenuDividerProps,
  OverlayPositionerProps,
} from "../../index"

export type MenuItemData =
  | ({ type: "action"; closeOnClick?: boolean } & Pick<
      MenuItemActionProps,
      | "id"
      | "className"
      | "intentModifier"
      | "disabled"
      | "prefix"
      | "suffix"
      | "children"
      | "paddingLikeOption"
      | "onClick"
    >)
  | ({ type: "option"; closeOnClick?: boolean } & Pick<
      MenuItemOptionProps,
      | "id"
      | "className"
      | "defaultSelected"
      | "selected"
      | "disabled"
      | "prefix"
      | "suffix"
      | "children"
      | "onSelectedChange"
    >)
  | ({ type: "divider" } & Pick<MenuDividerProps, "className" | "variant">)

type MenuContextPropsPick = Pick<MenuContextProps, "triggerRef" | "anchorRef">

type MenuContainerPropsPick = Pick<MenuContainerProps, "width" | "height">

type OverlayPositionerPropsPick = Pick<
  OverlayPositionerProps,
  | "open"
  | "defaultOpen"
  | "placement"
  | "placementFallback"
  | "offsetX"
  | "offsetY"
  | "offsetEdge"
  | "onOpen"
  | "onClose"
>

export interface MenuProps
  extends MenuContextPropsPick,
    MenuContainerPropsPick,
    OverlayPositionerPropsPick {
  className?: string
  items: MenuItemData[]
}
