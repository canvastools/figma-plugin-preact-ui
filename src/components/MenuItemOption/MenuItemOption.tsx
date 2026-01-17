import { useState, useEffect, useRef } from "preact/hooks"

import { bem, typedForwardRef, override, uuid } from "../../utils"

import { Text, Icon, check as checkGlyph, useMenuContext } from "../../index"
import type { MenuContextValue } from "../../index"

import type { MenuItemOptionProps } from "./MenuItemOption.types"
import "./MenuItemOption.scss"

/* --- */

const hoverIntentProps = {
  intent: "brand",
  intentModifiers: "default",
}

const noopRegisterItem: MenuContextValue["registerItem"] = () => () => {}
const noopClearFocus: MenuContextValue["clearFocus"] = () => {}
const noopSetHoveredItem: MenuContextValue["setHoveredItem"] = () => {}
const noopSetFocusedItem: MenuContextValue["setFocusedItem"] = () => {}

const MenuItemOptionComponent = (
  {
    className,
    id,
    defaultSelected = false,
    selected: controlledSelected,
    focused = false,
    disabled = false,
    prefix,
    suffix,
    children,
    onSelectedChange,
    ...rest
  }: MenuItemOptionProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const [internalSelected, setInternalSelected] = useState(defaultSelected)

  let menuContext: MenuContextValue | null = null
  try {
    menuContext = useMenuContext()
  } catch {
    menuContext = null
  }

  const { registerItem, clearFocus, setHoveredItem, setFocusedItem } =
    menuContext || {
      registerItem: noopRegisterItem,
      clearFocus: noopClearFocus,
      setHoveredItem: noopSetHoveredItem,
      setFocusedItem: noopSetFocusedItem,
    }

  const itemRef = useRef<HTMLElement>(null)

  const internalId = id ?? uuid()

  useEffect(() => {
    const unregister = registerItem({
      id: internalId,
      ref: itemRef as preact.RefObject<HTMLElement>,
      disabled,
    })

    return unregister
  }, [disabled, internalId])

  const isSelected =
    controlledSelected !== undefined ? controlledSelected : internalSelected

  const [isHovered, setIsHovered] = useState(false)
  const isActive = isHovered || focused
  const _className = bem("MenuItemOption", undefined, {
    disabled,
    focused,
    prefix: Boolean(prefix),
    suffix: Boolean(suffix),
    selected: isSelected,
  })

  const handleClick = (event: MouseEvent) => {
    if (!disabled) {
      const newSelected = !isSelected

      if (controlledSelected === undefined) {
        setInternalSelected(newSelected)
      }
      event.stopPropagation()
      onSelectedChange?.({ event, id: internalId, selected: newSelected })

      if (internalId) {
        setFocusedItem(internalId)
      }
    }
  }

  useEffect(() => {
    if (controlledSelected !== undefined) {
      setInternalSelected(controlledSelected)
    }
  }, [controlledSelected])

  const handleMouseEnter = () => {
    if (disabled) return
    clearFocus()
    if (id) {
      setHoveredItem(id)
    }
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    if (disabled) return
    setIsHovered(false)
  }

  return (
    <div
      className={[_className, "no-drag", className].join(" ").trim()}
      ref={(el) => {
        if (typeof ref === "function") {
          ref(el)
        } else if (ref) {
          // eslint-disable-next-line
          ;(ref as preact.RefObject<HTMLDivElement>).current = el
        }
        itemRef.current = el
      }}
      {...rest}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="MenuItemOption__content">
        <div className="MenuItemOption__selection">
          {isSelected && (
            <Icon
              glyph={checkGlyph}
              size={16}
              intent={isActive ? "brand" : "neutral-inverted-fixed"}
              disabled={disabled}
            />
          )}
        </div>
        <div className="MenuItemOption__content-container">
          {prefix && (
            <div className="MenuItemAction__prefix">
              {isActive
                ? override(prefix, {
                    ...hoverIntentProps,
                  })
                : prefix}
            </div>
          )}
          {children && (
            <div className="MenuItemOption__children">
              <Text
                variant="body"
                size="medium"
                intent={isActive ? "brand" : "neutral-inverted-fixed"}
                disabled={disabled}
              >
                {isActive
                  ? override(children, {
                      ...hoverIntentProps,
                    })
                  : children}
              </Text>
            </div>
          )}
          {suffix && (
            <div className="MenuItemOption__suffix">
              {isActive
                ? override(suffix, {
                    ...hoverIntentProps,
                  })
                : suffix}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export const MenuItemOption = typedForwardRef<
  MenuItemOptionProps,
  HTMLDivElement
>(MenuItemOptionComponent)
