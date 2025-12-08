import { Fragment } from "preact"
import { bem, typedForwardRef } from "../../utils"
import { useState } from "preact/hooks"

import { override } from "../../utils"

import type { MenuItemActionProps } from "./MenuItemAction.types"
import "./MenuItemAction.scss"

import { Icon, Text, chevronRight as chevronRightGlyph } from "../../index"

/* --- */

const hoverIntentProps = {
  intent: "brand",
  intentModifiers: "default",
}

const MenuItemActionComponent = (
  {
    className,
    intentModifiers = "default",
    disabled = false,
    focused = false,
    prefix,
    suffix,
    children,
    optionLikePadding = false,
    hasNested,
    onClick,
    ...rest
  }: MenuItemActionProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const [isHovered, setIsHovered] = useState(false)
  const isActive = isHovered || focused
  const _className = bem("MenuItemAction", undefined, {
    intentModifiers,
    disabled,
    focused,
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
    <Fragment>
      <div
        className={[_className, className, "no-drag"].join(" ").trim()}
        ref={ref}
        {...rest}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="MenuItemAction__content">
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
            <div className="MenuItemAction__children">
              <Text
                variant="body"
                size="medium"
                intent={
                  isActive
                    ? intentModifiers === "danger"
                      ? "danger"
                      : "brand"
                    : "neutral-inverted-fixed"
                }
                intentModifiers={!isActive ? intentModifiers : "default"}
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
          {suffix && !hasNested && (
            <div className="MenuItemAction__suffix">
              {isActive
                ? override(suffix, {
                    ...hoverIntentProps,
                  })
                : suffix}
            </div>
          )}
          {hasNested && (
            <div className="MenuItemAction__suffix">
              <Icon
                glyph={chevronRightGlyph}
                size={16}
                intent="neutral-inverted-fixed"
                interactive
              />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export const MenuItemAction = typedForwardRef<
  MenuItemActionProps,
  HTMLDivElement
>(MenuItemActionComponent)
