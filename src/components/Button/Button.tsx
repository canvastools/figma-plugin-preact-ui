import { bem, typedForwardRef } from "../../utils"

import type { ButtonProps } from "./Button.types"
import "./Button.scss"

import { Text } from "../Text/Text"

/* --- */

const ButtonComponent = (
  {
    className,
    context = "neutral",
    contextModifiers = "default",
    ghost,
    size = "medium",
    fullWidth,
    disabled,
    prefix,
    suffix,
    children,
    onClick,
    ...rest
  }: ButtonProps,
  ref: preact.Ref<HTMLButtonElement>
) => {
  const _className = bem("Button", undefined, {
    context: `${context}-${contextModifiers}`,
    ghost: Boolean(ghost),
    size,
    fullWidth,
    disabled,
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
              context={context}
              contextModifiers={contextModifiers}
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
