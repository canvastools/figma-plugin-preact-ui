import { Fragment, cloneElement } from "preact"
import { bem, typedForwardRef, uuid } from "../../utils"
import { useState, useEffect, useRef } from "preact/hooks"

import { Text, useMenuContext } from "../../index"
import type { MenuContextValue } from "../../index"

import type { MenuItemActionProps } from "./MenuItemAction.types"
import "./MenuItemAction.scss"

/* --- */

const hoverIntentProps = {
  intent: "brand",
  intentModifiers: "default",
}

const noopRegisterItem: MenuContextValue["registerItem"] = () => () => {}
const noopClearFocus: MenuContextValue["clearFocus"] = () => {}
const noopSetHoveredItem: MenuContextValue["setHoveredItem"] = () => {}
const noopSetFocusedItem: MenuContextValue["setFocusedItem"] = () => {}

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
      setFocusedItem(internalId)
    }
  }

  const handleMouseEnter = () => {
    if (disabled) return
    clearFocus()
    if (internalId) {
      setHoveredItem(internalId)
    }
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    if (disabled) return
    setIsHovered(false)
  }

  const override = (
    node: preact.ComponentChildren,
    props: Record<string, unknown>
  ): preact.ComponentChildren => {
    if (Array.isArray(node)) {
      return node.map((n) => override(n, props))
    }

    if (
      node &&
      typeof node === "object" &&
      "type" in node &&
      typeof node.type !== "string"
    ) {
      const vnode = node as preact.VNode
      const originalProps = vnode.props || {}

      const overrideProps: Record<string, unknown> = { ...props }

      return cloneElement(vnode, overrideProps, originalProps.children)
    }

    return node
  }

  return (
    <Fragment>
      <div
        id={id}
        className={[_className, className].join(" ").trim()}
        data-pui-interactive="true"
        tabIndex={-1}
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
