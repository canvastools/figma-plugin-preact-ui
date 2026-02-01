import { bem, typedForwardRef } from "../../utils"

import { Text } from "../../index"

import type { AvatarProps } from "./Avatar.types"
import "./Avatar.scss"

/* --- */

const AvatarComponent = (
  {
    id,
    className,
    variant = "circle",
    size = "medium",
    src,
    backgroundColor,
    textColor,
    children,
    ...rest
  }: AvatarProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Avatar", undefined, {
    variant,
    size,
    src: Boolean(src),
  })

  return (
    <div
      id={id}
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
      style={{
        backgroundColor,
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
            intentModifier="default"
            textColor={textColor}
            fullWidth
            wrap={false}
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
