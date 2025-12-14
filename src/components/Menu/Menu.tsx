import { bem, typedForwardRef } from "../../utils"

import { useEffect, useRef, useState } from "preact/hooks"

import type { MenuProps, MenuItemData } from "./Menu.types"

import {
  MenuContext,
  useMenuContext,
  MenuContainer,
  MenuItemAction,
  type MenuItemActionProps,
  MenuItemOption,
  type MenuItemOptionProps,
  MenuDivider,
  OverlayPositioner,
  type OverlayPlacement,
} from "../../index"

/* --- */

type MenuBodyProps = {
  items: MenuItemData[]
  width: number | "auto"
  placement: OverlayPlacement
  placementFallback: false | OverlayPlacement[]
  paddingX: number
  paddingY: number
  edgePadding: number
  onOpen?: () => void
  onClose?: () => void
}

const MenuBody = ({
  items,
  width,
  placement,
  placementFallback,
  paddingX,
  paddingY,
  edgePadding,
  onOpen,
  onClose,
}: MenuBodyProps) => {
  const context = useMenuContext()
  if (!context) return null

  const { triggerRef, anchorRef, open, focusedItemId, setOpen } = context

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
          focused={item.id ? focusedItemId === item.id : false}
        />
      )
    }

    if (item.type === "option") {
      const { type, ...rest } = item

      const handleItemChange: MenuItemOptionProps["onChange"] = (args) => {
        item.onChange?.(args)
        if (item.closeOnClick) {
          handleClose()
        }
      }

      return (
        <MenuItemOption
          key={item.id ?? index}
          {...rest}
          id={item.id}
          onChange={handleItemChange}
          focused={item.id ? focusedItemId === item.id : false}
        />
      )
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
      placementFallback={placementFallback}
      paddingX={paddingX}
      paddingY={paddingY}
      edgePadding={edgePadding}
      onClose={handleClose}
      closeOnOutsideClick={true}
    >
      <MenuContainer width={width}>
        {items.map((item, index) => renderItem(item, index))}
      </MenuContainer>
    </OverlayPositioner>
  )
}

const MenuComponent = (
  {
    className,
    triggerRef,
    anchorRef,
    items,
    defaultOpen = false,
    open,
    width = "auto",
    placement = "bottom-left",
    placementFallback = false,
    paddingX = 0,
    paddingY = 4,
    edgePadding = 16,
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
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
    >
      <MenuContext
        triggerRef={triggerRef}
        anchorRef={anchorRef}
        open={internalOpen}
        setOpen={setInternalOpen}
      >
        <MenuBody
          items={items}
          width={width}
          placement={placement}
          placementFallback={placementFallback}
          paddingX={paddingX}
          paddingY={paddingY}
          edgePadding={edgePadding}
          onOpen={onOpen}
          onClose={onClose}
        />
      </MenuContext>
    </div>
  )
}

export const Menu = typedForwardRef<MenuProps, HTMLDivElement>(MenuComponent)
