import { useState, useEffect, useRef } from "preact/hooks"

import { bem, typedForwardRef, override, uuid } from "../../utils"

import type { MenuItemOptionProps } from "./MenuItemOption.types"
import "./MenuItemOption.scss"

import { Text, Icon, check as checkGlyph, useMenuContext } from "../../index"

/* --- */

const hoverIntentProps = {
  intent: "brand",
  intentModifiers: "default",
}

const MenuItemOptionComponent = (
  {
    className,
    id,
    defaultSelected = false,
    selected: controlledSelected,
    focused = false,
    disabled = false,
    suffix,
    children,
    onChange,
    ...rest
  }: MenuItemOptionProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const [internalSelected, setInternalSelected] = useState(defaultSelected)

  const { registerItem, clearFocusedItem, setHoveredItem, focusItem } =
    useMenuContext()

  const itemRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const unregister = registerItem({
      id: id ?? uuid(),
      ref: itemRef as preact.RefObject<HTMLElement>,
      disabled,
    })

    return unregister
  }, [disabled, id])

  const isSelected =
    controlledSelected !== undefined ? controlledSelected : internalSelected

  const [isHovered, setIsHovered] = useState(false)
  const isActive = isHovered || focused
  const _className = bem("MenuItemOption", undefined, {
    disabled,
    focused,
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
      onChange?.({ event, selected: newSelected })

      if (id) {
        focusItem(id)
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
    clearFocusedItem()
    if (id) {
      setHoveredItem(id)
    }
    setIsHovered(true)
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
    >
      <div className="MenuItemOption__content">
        <div className="MenuItemOption__selection">
          {isSelected && (
            <Icon
              glyph={checkGlyph}
              size={16}
              intent={isActive ? "brand" : "neutral-inverted-fixed"}
              disabled={disabled}
              interactive={true}
            />
          )}
        </div>
        <div className="MenuItemOption__content-container">
          {children && (
            <div className="MenuItemOption__children">
              <Text
                variant="body"
                size="medium"
                intent={isActive ? "brand" : "neutral-inverted-fixed"}
                disabled={disabled}
                interactive
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
