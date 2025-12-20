import { Fragment, cloneElement, toChildArray } from "preact"
import { useRef } from "preact/hooks"
import type { VNode } from "preact"

import { bem, typedForwardRef } from "../../utils"

import type { ButtonIconProps } from "./ButtonIcon.types"
import "./ButtonIcon.scss"

import { Icon, Tooltip } from "../../index"

/* --- */

const ButtonIconComponent = (
  {
    className,
    intent = "neutral",
    intentModifiers = "default",
    ghost = false,
    size = "medium",
    grouped = "none",
    translucent = false,
    disabled = false,
    selected = false,
    icon,
    children,
    tooltip,
    onClick,
    ...rest
  }: ButtonIconProps,
  ref: preact.Ref<HTMLButtonElement>
) => {
  const _className = bem("ButtonIcon", undefined, {
    intent: `${intent}-${intentModifiers}`,
    ghost,
    size,
    grouped: Boolean(grouped),
    groupedPosition: grouped,
    translucent,
    disabled,
    selected,
  })

  const handleClick = (event: MouseEvent) => {
    if (disabled) {
      event.preventDefault()
      return
    }
    event.stopPropagation()
    onClick?.({ event })
  }

  const handleKeyDown = (
    event: preact.JSX.TargetedKeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.key === "Escape" || event.key === "Esc") {
      event.currentTarget.blur()
    }
  }

  const itemRef = useRef<HTMLButtonElement>(null)

  return (
    <Fragment>
      <button
        className={[_className, "no-drag", className].join(" ").trim()}
        ref={(el) => {
          if (typeof ref === "function") {
            ref(el)
          } else if (ref) {
            // eslint-disable-next-line
            ;(ref as preact.RefObject<HTMLButtonElement>).current = el
          }
          itemRef.current = el
        }}
        disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...rest}
      >
        {(children || icon) && (
          <div className="ButtonIcon__children">
            {icon && (
              <Icon
                glyph={icon.glyph}
                intent={intent}
                intentModifiers={intentModifiers}
                variant={icon.variant}
                size={icon.size}
                interactive
                selected={selected}
                disabled={disabled}
              />
            )}

            {children &&
              !icon &&
              toChildArray(children).map((child) => {
                if (typeof child === "object" && child !== null) {
                  const maybeVNode = child as VNode
                  if (maybeVNode.type === Icon) {
                    return cloneElement(maybeVNode, {
                      disabled,
                      interactive: true,
                      selected,
                    })
                  }
                }
                return child
              })}
          </div>
        )}
      </button>
      {tooltip && <Tooltip triggerRef={itemRef}>{tooltip}</Tooltip>}
    </Fragment>
  )
}

export const ButtonIcon = typedForwardRef<ButtonIconProps, HTMLButtonElement>(
  ButtonIconComponent
)
