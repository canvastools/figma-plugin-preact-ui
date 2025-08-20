import { bem, typedForwardRef } from "../../utils"

import type { ButtonIconProps } from "./ButtonIcon.types"
import "./ButtonIcon.scss"

import { Text } from "../Text/Text"

/* --- */

const ButtonIconComponent = (
  {
    className,
    variant = "secondary",
    selected = false,
    disabled = false,
    children,
    ...rest
  }: ButtonIconProps,
  ref: preact.Ref<HTMLButtonElement>
) => {
  const _className = bem("ButtonIcon", undefined, {
    variant,
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
        <div className="ButtonIcon__children">
          <Text variant="body" size="medium">
            {children}
          </Text>
        </div>
      )}
    </button>
  )
}

export const ButtonIcon = typedForwardRef<ButtonIconProps, HTMLButtonElement>(
  ButtonIconComponent
)
