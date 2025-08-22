import { bem, typedForwardRef } from "../../utils"

import type { ButtonIconProps } from "./ButtonIcon.types"
import "./ButtonIcon.scss"

import { Text } from "../Text/Text"

/* --- */

const ButtonIconComponent = (
  {
    className,
    context = "neutral",
    selected = false,
    disabled = false,
    children,
    ...rest
  }: ButtonIconProps,
  ref: preact.Ref<HTMLButtonElement>
) => {
  const _className = bem("ButtonIcon", undefined, {
    context,
    selected,
    disabled,
  })

  return (
    <button
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
      disabled={disabled}
    >
      {children && (
        <Text variant="body" size="medium" context="inherit">
          {children && <div className="ButtonIcon__children">{children}</div>}
        </Text>
      )}
    </button>
  )
}

export const ButtonIcon = typedForwardRef<ButtonIconProps, HTMLButtonElement>(
  ButtonIconComponent
)
