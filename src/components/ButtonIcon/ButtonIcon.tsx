import { bem, typedForwardRef } from "../../utils"

import type { ButtonIconProps } from "./ButtonIcon.types"
import "./ButtonIcon.scss"

import { Icon } from "../../index"

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
    icon,
    children,
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
  })

  const handleClick = (event: MouseEvent) => {
    if (disabled) {
      event.preventDefault()
      return
    }
    event.stopPropagation()
    onClick?.({ event })
  }

  return (
    <button
      className={[_className, "no-drag", className].join(" ").trim()}
      ref={ref}
      {...rest}
      disabled={disabled}
      onClick={handleClick}
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
              selected={icon.selected}
            />
          )}

          {children}
        </div>
      )}
    </button>
  )
}

export const ButtonIcon = typedForwardRef<ButtonIconProps, HTMLButtonElement>(
  ButtonIconComponent
)
