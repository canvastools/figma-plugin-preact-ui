import { bem, typedForwardRef } from "../../utils"
import { useState, useEffect } from "preact/hooks"

import { override } from "../../utils"

import type { MenuItemOptionProps } from "./MenuItemOption.types"
import "./MenuItemOption.scss"

import { Text } from "../Text/Text"
import { Icon } from "../Icon/Icon"

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
  const _className = bem("MenuItemOption", undefined, {
    disabled,
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
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
      onClick={handleClick as any}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="MenuItemOption__content">
        <div className="MenuItemOption__selection">
          {isSelected && <Icon glyph="check" size={16} intent="brand" />}
        </div>
        <div className="MenuItemOption__content-container">
          {children && (
            <div className="MenuItemOption__children">
              <Text
                variant="body"
                size="medium"
                intent={isHovered ? "brand" : "neutral-inverted-fixed"}
                disabled={disabled}
                interactive
              >
                {isHovered
                  ? override(children, {
                      ...hoverIntentProps,
                    })
                  : children}
              </Text>
            </div>
          )}
          {suffix && (
            <div className="MenuItemOption__suffix">
              {isHovered
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
