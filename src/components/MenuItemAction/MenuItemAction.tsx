import { Fragment } from "preact"
import { bem, typedForwardRef, override, uuid } from "../../utils"
import { useState, useEffect, useRef } from "preact/hooks"

import type { MenuItemActionProps } from "./MenuItemAction.types"
import "./MenuItemAction.scss"

import { Text, useMenuContext } from "../../index"

/* --- */

const hoverIntentProps = {
  intent: "brand",
  intentModifiers: "default",
}

const MenuItemActionComponent = (
  {
    className,
    id,
    intentModifiers = "default",
    disabled = false,
    focused = false,
    prefix,
    suffix,
    children,
    optionLikePadding = false,
    onClick,
    ...rest
  }: MenuItemActionProps,
  ref: preact.Ref<HTMLDivElement>
) => {
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

  const [isHovered, setIsHovered] = useState(false)
  const isActive = isHovered || focused
  const _className = bem("MenuItemAction", undefined, {
    intentModifiers,
    disabled,
    focused,
    prefix: Boolean(prefix),
    suffix: Boolean(suffix),
    optionLikePadding,
  })

  const handleClick = (event: MouseEvent) => {
    if (disabled) {
      event.preventDefault()
      return
    }
    event.stopPropagation()
    onClick?.({ event })
    if (id) {
      focusItem(id)
    }
  }

  const handleMouseEnter = () => {
    if (disabled) return
    clearFocusedItem()
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
    <Fragment>
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
          {suffix && (
            <div className="MenuItemAction__suffix">
              {isActive
                ? override(suffix, {
                    ...hoverIntentProps,
                  })
                : suffix}
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
