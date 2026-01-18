import { bem, typedForwardRef } from "../../utils"

import { cloneElement } from "preact"
import { useEffect, useRef, useState } from "preact/hooks"

import {
  MenuContext,
  useMenuContext,
  MenuContainer,
  MenuItemAction,
  MenuItemOption,
  MenuDivider,
  OverlayPositioner,
} from "../../index"
import type {
  MenuItemActionProps,
  MenuItemOptionProps,
  OverlayPositionerPlacement,
} from "../../index"

import type { MenuProps, MenuItemData } from "./Menu.types"
import "./Menu.scss"

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
  onOpen?: () => void
  onClose?: () => void
}

const MenuBody = ({
  items,
  width,
  height,
  placement,
  placementFallback,
  offsetX,
  offsetY,
  offsetEdge,
  onOpen,
  onClose,
}: MenuBodyProps) => {
  const context = useMenuContext()
  if (!context) return null

  const { triggerRef, anchorRef, open, focusedItem, setOpen } = context

  const hasFiredOpenRef = useRef(false)

  // Ensure onOpen is called exactly once per open cycle
  useEffect(() => {
    if (open && !hasFiredOpenRef.current) {
      hasFiredOpenRef.current = true
      onOpen?.()
    } else if (!open && hasFiredOpenRef.current) {
      hasFiredOpenRef.current = false
    }
  }, [open, onOpen])

  const handleClose = () => {
    setOpen(false)
    onClose?.()
  }

  // Close on Escape and call onClose once
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event
      if (key === "Escape" || key === "Esc") {
        event.preventDefault()
        setOpen(false)
        onClose?.()
        triggerRef?.current?.focus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [open, setOpen, onClose, triggerRef])

  const renderItem = (item: MenuItemData, index: number) => {
    if (item.type === "action") {
      const { type, ...rest } = item

      const handleItemClick: MenuItemActionProps["onClick"] = (args) => {
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
          focused={item.id ? focusedItem === item.id : false}
        />
      )
    }

    if (item.type === "option") {
      const { type, ...rest } = item

      const handleItemChange: MenuItemOptionProps["onSelectedChange"] = (
        args
      ) => {
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
          focused={item.id ? focusedItem === item.id : false}
        />
      )
    }

    if (item.type === "custom") {
      const { type, ...rest } = item

      const handleItemClick: MenuItemActionProps["onClick"] = (args) => {
        item.onClick?.(args)
        if (item.closeOnClick) {
          handleClose()
        }
      }

      if (item.children && typeof item.children !== "string") {
        return cloneElement(item.children as preact.VNode, {
          key: item.id ?? index,
          id: item.id,
          disabled: item.disabled,
          focused: item.id ? focusedItem === item.id : false,
          onClick: handleItemClick,
        })
      }

      return null
    }

    if (item.type === "divider") {
      const { type, ...rest } = item
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
    className,
    items,
    triggerRef,
    anchorRef,
    width,
    height,
    open,
    defaultOpen = false,
    placement = "bottom-left",
    placementFallback = ["bottom-right", "top-left", "top-right"],
    offsetX = 0,
    offsetY = 4,
    offsetEdge = 16,
    onOpen,
    onClose,
    ...rest
  }: MenuProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Menu", undefined, undefined)

  const [internalOpen, setInternalOpen] = useState<boolean>(open ?? defaultOpen)

  useEffect(() => {
    setInternalOpen(open ?? defaultOpen)
  }, [open])

  return (
    <MenuContext
      triggerRef={triggerRef}
      anchorRef={anchorRef}
      open={internalOpen}
      setOpen={setInternalOpen}
    >
      {internalOpen && (
        <div
          className={[_className, className].join(" ").trim()}
          ref={ref}
          {...rest}
        >
          <MenuBody
            items={items}
            width={width}
            height={height}
            placement={placement}
            placementFallback={placementFallback}
            offsetX={offsetX}
            offsetY={offsetY}
            offsetEdge={offsetEdge}
            onOpen={onOpen}
            onClose={onClose}
          />
        </div>
      )}
    </MenuContext>
  )
}

export const Menu = typedForwardRef<MenuProps, HTMLDivElement>(MenuComponent)
