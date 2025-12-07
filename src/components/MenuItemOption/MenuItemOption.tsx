import { bem, typedForwardRef } from "../../utils"
import { useState, useEffect } from "preact/hooks"

import { override } from "../../utils"

import type { MenuItemOptionProps } from "./MenuItemOption.types"
import "./MenuItemOption.scss"

import { Text } from "../../index"
import { Icon } from "../../index"
import { check as checkGlyph } from "../../index"

/* --- */

const hoverIntentProps = {
  intent: "brand",
  intentModifiers: "default",
}

const MenuItemOptionComponent = (
  {
    className,
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
    }
  }

  useEffect(() => {
    if (controlledSelected !== undefined) {
      setInternalSelected(controlledSelected)
    }
  }, [controlledSelected])

  const handleMouseEnter = () => {
    if (disabled) return
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    if (disabled) return
    setIsHovered(false)
  }

  return (
    <div
      className={[_className, className, "no-drag"].join(" ").trim()}
      ref={ref}
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
