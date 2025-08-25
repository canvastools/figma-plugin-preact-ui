import { bem, typedForwardRef } from "../../utils"

import type { ButtonProps } from "./Button.types"
import "./Button.scss"

import { Text } from "../Text/Text"

/* --- */

const ButtonComponent = (
  {
    className,
    context = "neutral",
    size = "medium",
    fullWidth,
    disabled,
    prefix,
    suffix,
    children,
    ...rest
  }: ButtonProps,
  ref: preact.Ref<HTMLButtonElement>
) => {
  const _className = bem("Button", undefined, {
    context,
    size,
    fullWidth,
    disabled,
    prefix: Boolean(prefix),
    suffix: Boolean(suffix),
  })

  return (
    <button
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
      disabled={disabled}
    >
      <Text variant="body" size="medium" context="inherit">
        <div className="Button__content">
          {prefix && <div className="Button__prefix">{prefix}</div>}
          {children && <div className="Button__children">{children}</div>}
          {suffix && <div className="Button__suffix">{suffix}</div>}
        </div>
      </Text>
    </button>
  )
}

export const Button = typedForwardRef<ButtonProps, HTMLButtonElement>(
  ButtonComponent
)
