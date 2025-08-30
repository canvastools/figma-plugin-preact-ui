import { bem, typedForwardRef } from "../../utils"

import type { AvatarProps } from "./Avatar.types"
import "./Avatar.scss"

import { Text } from "../Text/Text"

/* --- */

const AvatarComponent = (
  {
    className,
    size = "medium",
    shape = "circle",
    imageSrc,
    fillBg,
    fillText,
    children,
    ...rest
  }: AvatarProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Avatar", undefined, {
    size,
    shape,
    image: Boolean(imageSrc),
  })

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
      style={{
        backgroundColor: fillBg,
      }}
    >
      {imageSrc && (
        <img className="Avatar__image" src={imageSrc} alt="Avatar" />
      )}
      {children && (
        <Text
          variant="body"
          size={size === "small" ? "small" : "large"}
          strong
          intent="neutral-inverted"
          intentModifiers="default"
          fill={fillText}
        >
          <div className="Avatar__children">{children}</div>
        </Text>
      )}
    </div>
  )
}

export const Avatar = typedForwardRef<AvatarProps, HTMLDivElement>(
  AvatarComponent
)
