import { Fragment } from "preact"
import { bem, typedForwardRef, override, uuid } from "../../utils"
import { useState, useEffect, useRef } from "preact/hooks"

import type { MenuItemActionProps } from "./MenuItemAction.types"
import "./MenuItemAction.scss"

import { Text, useMenuContext } from "../../index"
import type { MenuContextValue } from "../../index"

/* --- */

const hoverIntentProps = {
  intent: "brand",
  intentModifiers: "default",
}

const noopRegisterItem: MenuContextValue["registerItem"] = () => () => {}
const noopClearFocusedItem: MenuContextValue["clearFocusedItem"] = () => {}
const noopSetHoveredItem: MenuContextValue["setHoveredItem"] = () => {}
const noopFocusItem: MenuContextValue["focusItem"] = () => {}

const MenuItemActionComponent = (
  {
    className,
    id,
    intentModifier = "default",
    disabled = false,
    focused = false,
    prefix,
    suffix,
    children,
    paddingLikeOption = false,
    onClick,
    ...rest
  }: MenuItemActionProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  let menuContext: MenuContextValue | null = null
  try {
    menuContext = useMenuContext()
  } catch {
    menuContext = null
  }

  const { registerItem, clearFocusedItem, setHoveredItem, focusItem } =
    menuContext || {
      registerItem: noopRegisterItem,
      clearFocusedItem: noopClearFocusedItem,
      setHoveredItem: noopSetHoveredItem,
      focusItem: noopFocusItem,
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

  const [isHovered, setIsHovered] = useState(false)
  const isActive = isHovered || focused
  const _className = bem("MenuItemAction", undefined, {
    intentModifier,
    disabled,
    focused,
    prefix: Boolean(prefix),
    suffix: Boolean(suffix),
    paddingLikeOption,
  })

  const handleClick = (event: MouseEvent) => {
    if (disabled) {
      event.preventDefault()
      return
    }
    event.stopPropagation()
    onClick?.({ event, id: internalId })
    if (internalId) {
      focusItem(internalId)
    }
  }

  const handleMouseEnter = () => {
    if (disabled) return
    clearFocusedItem()
    if (internalId) {
      setHoveredItem(internalId)
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
                    ? intentModifier === "danger"
                      ? "danger"
                      : "brand"
                    : "neutral-inverted-fixed"
                }
                intentModifier={!isActive ? intentModifier : "default"}
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
