import { bem, typedForwardRef } from "../../utils"

import type { ButtonProps } from "./Button.types"
import "./Button.scss"

import { Text } from "../Text/Text"

/* --- */

const ButtonComponent = (
  {
    className,
    variant = "primary",
    size = "default",
    fullWidth = false,
    disabled = false,
    children,
    ...rest
  }: ButtonProps,
  ref: preact.Ref<HTMLButtonElement>
) => {
  const _className = bem("Button", undefined, {
    variant,
    size,
    fullWidth,
    disabled,
  })

  return (
    <button
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
      disabled={disabled}
    >
      <Text variant="body" size="medium">
        {children}
      </Text>
    </button>
  )
}

export const Button = typedForwardRef<ButtonProps, HTMLButtonElement>(
  ButtonComponent
)
