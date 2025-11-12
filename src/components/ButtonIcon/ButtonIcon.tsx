import { bem, typedForwardRef } from "../../utils"

import type { ButtonIconProps } from "./ButtonIcon.types"
import "./ButtonIcon.scss"

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
      className={[_className, className, "no-drag"].join(" ").trim()}
      ref={ref}
      {...rest}
      disabled={disabled}
      onClick={handleClick}
    >
      {children && <div className="ButtonIcon__children">{children}</div>}
    </button>
  )
}

export const ButtonIcon = typedForwardRef<ButtonIconProps, HTMLButtonElement>(
  ButtonIconComponent
)
