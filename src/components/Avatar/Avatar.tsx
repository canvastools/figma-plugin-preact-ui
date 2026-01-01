import { bem, typedForwardRef } from "../../utils"

import type { AvatarProps } from "./Avatar.types"
import "./Avatar.scss"

import { Text } from "../../index"

/* --- */

const AvatarComponent = (
  {
    className,
    variant = "circle",
    size = "medium",
    src,
    colorBackground,
    colorText,
    children,
    ...rest
  }: AvatarProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Avatar", undefined, {
    variant,
    size,
    image: Boolean(src),
  })

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
      style={{
        backgroundColor: colorBackground,
      }}
    >
      {src && <img className="Avatar__image" src={src} alt="Avatar" />}

      <div className="Avatar__children">
        {typeof children === "string" ? (
          <Text
            variant="body"
            size={size === "small" ? "small" : "large"}
            strong
            intent="neutral-inverted"
            intentModifiers="default"
            fill={colorText}
            fullWidth
            noWrap
            align="center"
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </div>
    </div>
  )
}

export const Avatar = typedForwardRef<AvatarProps, HTMLDivElement>(
  AvatarComponent
)
