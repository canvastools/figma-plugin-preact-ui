import { MenuContextProps } from '../MenuContext/MenuContext.types'
import { MenuContainerProps } from '../MenuContainer/MenuContainer.types'
import { MenuItemActionProps } from '../MenuItemAction/MenuItemAction.types'
import { MenuItemOptionProps } from '../MenuItemOption/MenuItemOption.types'
import { MenuItemGroupProps } from '../MenuItemGroup/MenuItemGroup.types'
import { MenuDividerProps } from '../MenuDivider/MenuDivider.types'
import { OverlayPositionerProps } from '../OverlayPositioner/OverlayPositioner.types'

export type MenuItemData =
  | ({ type: 'group' } & Pick<MenuItemGroupProps, 'className' | 'children' | 'paddingLikeOption'>)
  | ({ type: 'action'; closeOnClick?: boolean } & Pick<
      MenuItemActionProps,
      'id' | 'className' | 'intentModifier' | 'disabled' | 'prefix' | 'suffix' | 'children' | 'paddingLikeOption' | 'onClick'
    >)
  | ({ type: 'option'; closeOnClick?: boolean } & Pick<
      MenuItemOptionProps,
      'id' | 'className' | 'defaultSelected' | 'selected' | 'disabled' | 'prefix' | 'suffix' | 'children' | 'onSelectedChange'
    >)
  | {
      type: 'custom'
      id?: string
      disabled?: boolean
      children?: preact.ComponentChildren
      onClick?: (args: { event: MouseEvent; id: string }) => void
      closeOnClick?: boolean
    }
  | ({ type: 'divider' } & Pick<MenuDividerProps, 'id' | 'className' | 'variant'>)

type MenuContextPropsPick = Pick<MenuContextProps, 'triggerRef' | 'anchorRef'>

type MenuContainerPropsPick = Pick<MenuContainerProps, 'width' | 'height'>

type OverlayPositionerPropsPick = Pick<
  OverlayPositionerProps,
  'open' | 'defaultOpen' | 'placement' | 'placementFallback' | 'offsetX' | 'offsetY' | 'offsetEdge' | 'onOpen' | 'onClose'
>

export interface MenuProps extends MenuContextPropsPick, MenuContainerPropsPick, OverlayPositionerPropsPick {
  id?: string
  className?: string
  items: MenuItemData[]
}
