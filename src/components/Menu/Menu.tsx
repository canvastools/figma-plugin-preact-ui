import { bem, typedForwardRef } from '../../utils'

import { cloneElement } from 'preact'
import { useState } from 'preact/hooks'

import { MenuContext, useMenuContext } from '../MenuContext/MenuContext'
import { MenuContainer } from '../MenuContainer/MenuContainer'
import { MenuItemAction } from '../MenuItemAction/MenuItemAction'
import { MenuItemOption } from '../MenuItemOption/MenuItemOption'
import { MenuItemGroup } from '../MenuItemGroup/MenuItemGroup'
import { MenuDivider } from '../MenuDivider/MenuDivider'
import { OverlayPositioner } from '../OverlayPositioner/OverlayPositioner'
import type { MenuItemActionProps } from '../MenuItemAction/MenuItemAction.types'
import type { MenuItemOptionProps } from '../MenuItemOption/MenuItemOption.types'
import type { OverlayPositionerPlacement } from '../OverlayPositioner/OverlayPositioner.types'

import type { MenuProps, MenuItemData } from './Menu.types'
import './Menu.scss'

/* --- */

type MenuBodyProps = {
  items: MenuItemData[]
  width?: number
  height?: number
  placement: OverlayPositionerPlacement
  placementFallback: OverlayPositionerPlacement[]
  offsetX: number
  offsetY: number
  offsetEdge: number
}

const MenuBody = ({ items, width, height, placement, placementFallback, offsetX, offsetY, offsetEdge }: MenuBodyProps) => {
  const { anchorRef, open, focusedItemId, setOpen } = useMenuContext()

  // All open/close notifications (onOpen/onClose) are fired by the Menu
  // component itself when the open state changes, so closing here only needs
  // to request the state change. Escape is handled globally by MenuContext.
  const handleClose = () => {
    setOpen(false)
  }

  const renderItem = (item: MenuItemData, index: number) => {
    if (item.type === 'group') {
      const { type: _groupKind, ...rest } = item
      void _groupKind
      return <MenuItemGroup key={index} {...rest} />
    }

    if (item.type === 'action') {
      const { type: _actionKind, ...rest } = item
      void _actionKind

      const handleItemClick: MenuItemActionProps['onClick'] = (args) => {
        item.onClick?.(args)
        if (item.closeOnClick) {
          handleClose()
        }
      }

      return (
        <MenuItemAction
          key={item.id ?? index}
          {...rest}
          id={item.id}
          onClick={handleItemClick}
          focused={item.id ? focusedItemId === item.id : false}
        />
      )
    }

    if (item.type === 'option') {
      const { type: _optionKind, ...rest } = item
      void _optionKind

      const handleItemChange: MenuItemOptionProps['onSelectedChange'] = (args) => {
        item.onSelectedChange?.(args)
        if (item.closeOnClick) {
          handleClose()
        }
      }

      return (
        <MenuItemOption
          key={item.id ?? index}
          {...rest}
          id={item.id}
          onSelectedChange={handleItemChange}
          focused={item.id ? focusedItemId === item.id : false}
        />
      )
    }

    if (item.type === 'custom') {
      const handleItemClick: MenuItemActionProps['onClick'] = (args) => {
        item.onClick?.(args)
        if (item.closeOnClick) {
          handleClose()
        }
      }

      if (item.children && typeof item.children !== 'string') {
        return cloneElement(item.children as preact.VNode, {
          key: item.id ?? index,
          id: item.id,
          disabled: item.disabled,
          focused: item.id ? focusedItemId === item.id : false,
          onClick: handleItemClick,
        })
      }

      return null
    }

    if (item.type === 'divider') {
      const { type: _dividerKind, ...rest } = item
      void _dividerKind
      return <MenuDivider key={index} {...rest} />
    }

    return null
  }

  return (
    <OverlayPositioner
      anchorRef={anchorRef as preact.RefObject<HTMLElement>}
      open={open}
      placement={placement}
      placementFallback={placementFallback ?? []}
      offsetX={offsetX}
      offsetY={offsetY}
      offsetEdge={offsetEdge}
      onClose={handleClose}
      closeOnClickOutside={true}
    >
      <MenuContainer width={width} height={height}>
        {items.map((item, index) => renderItem(item, index))}
      </MenuContainer>
    </OverlayPositioner>
  )
}

const MenuComponent = (
  {
    id,
    className,
    items,
    triggerRef,
    anchorRef,
    width,
    height,
    open,
    defaultOpen = false,
    placement = 'bottom-left',
    placementFallback = ['bottom-right', 'top-left', 'top-right'],
    offsetX = 0,
    offsetY = 4,
    offsetEdge = 16,
    onOpen,
    onClose,
    ...rest
  }: MenuProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const _className = bem('Menu', undefined, undefined)

  // Controlled/uncontrolled open state:
  // - `open` provided → fully controlled, internal state is ignored; every
  //   interaction that wants to change it only fires onOpen/onClose and the
  //   parent decides.
  // - otherwise `defaultOpen` seeds internal state.
  const isControlled = open !== undefined
  const [internalOpen, setInternalOpen] = useState<boolean>(defaultOpen)
  const isOpen = isControlled ? (open as boolean) : internalOpen

  const handleOpenChange = (next: boolean) => {
    if (next === isOpen) return
    if (!isControlled) setInternalOpen(next)
    if (next) onOpen?.()
    else onClose?.()
  }

  return (
    <MenuContext triggerRef={triggerRef} anchorRef={anchorRef} open={isOpen} setOpen={handleOpenChange}>
      {isOpen && (
        <div id={id} className={[_className, className].join(' ').trim()} ref={ref} {...rest}>
          <MenuBody
            items={items}
            width={width}
            height={height}
            placement={placement}
            placementFallback={placementFallback}
            offsetX={offsetX}
            offsetY={offsetY}
            offsetEdge={offsetEdge}
          />
        </div>
      )}
    </MenuContext>
  )
}

export const Menu = typedForwardRef<MenuProps, HTMLDivElement>(MenuComponent)
