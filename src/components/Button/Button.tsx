import { bem, typedForwardRef } from "../../utils"

import type { ButtonProps } from "./Button.types"
import "./Button.scss"

import { Text } from "../Text/Text"

/* --- */

const ButtonComponent = (
  {
    className,
    intent = "neutral",
    intentModifiers = "default",
    ghost,
    size = "medium",
    grouped = "none",
    disabled,
    fullWidth,
    prefix,
    suffix,
    children,
    onClick,
    ...rest
  }: ButtonProps,
  ref: preact.Ref<HTMLButtonElement>
) => {
  const _className = bem("Button", undefined, {
    intent: `${intent}-${intentModifiers}`,
    ghost: Boolean(ghost),
    size,
    grouped: Boolean(grouped),
    groupedPosition: grouped,
    disabled,
    fullWidth,
    prefix: Boolean(prefix),
    suffix: Boolean(suffix),
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
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
      disabled={disabled}
      onClick={handleClick}
    >
      <div className="Button__content">
        {prefix && <div className="Button__prefix">{prefix}</div>}
        {children && (
          <div className="Button__children">
            <Text
              variant="body"
              size="medium"
              intent={intent}
              intentModifiers={intentModifiers}
              disabled={disabled}
            >
              {children}
            </Text>
          </div>
        )}
        {suffix && <div className="Button__suffix">{suffix}</div>}
      </div>
    </button>
  )
}

export const Button = typedForwardRef<ButtonProps, HTMLButtonElement>(
  ButtonComponent
)
