import { bem, typedForwardRef } from "../../utils"
import { useState } from "preact/hooks"

import { override } from "../../utils"

import type { MenuItemProps } from "./MenuItem.types"
import "./MenuItem.scss"

import { Text } from "../../index"

/* --- */

const hoverIntentProps = {
  intent: "brand",
  intentModifiers: "default",
}

const MenuItemComponent = (
  {
    className,
    intentModifiers = "default",
    disabled = false,
    prefix,
    suffix,
    children,
    optionLikePadding = false,
    hasNested = false,
    onClick,
    ...rest
  }: MenuItemProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const [isHovered, setIsHovered] = useState(false)
  const _className = bem("MenuItem", undefined, {
    intentModifiers,
    disabled,
    prefix: Boolean(prefix),
    suffix: Boolean(suffix),
    hasNested,
    optionLikePadding,
  })

  const handleClick = (event: MouseEvent) => {
    if (disabled) {
      event.preventDefault()
      return
    }
    event.stopPropagation()
    onClick?.({ event })
  }

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
      <div className="MenuItem__content">
        {prefix && (
          <div className="MenuItem__prefix">
            {isHovered
              ? override(prefix, {
                  ...hoverIntentProps,
                })
              : prefix}
          </div>
        )}
        {children && (
          <div className="MenuItem__children">
            <Text
              variant="body"
              size="medium"
              intent={
                isHovered
                  ? intentModifiers === "danger"
                    ? "danger"
                    : "brand"
                  : "neutral-inverted-fixed"
              }
              intentModifiers={!isHovered ? intentModifiers : "default"}
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
          <div className="MenuItem__suffix">
            {isHovered
              ? override(suffix, {
                  ...hoverIntentProps,
                })
              : suffix}
          </div>
        )}
      </div>
    </div>
  )
}

export const MenuItem = typedForwardRef<MenuItemProps, HTMLDivElement>(
  MenuItemComponent
)
