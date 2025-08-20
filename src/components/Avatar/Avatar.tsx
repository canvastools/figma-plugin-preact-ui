import { bem, typedForwardRef } from "../../utils"

import type { AvatarProps } from "./Avatar.types"
import "./Avatar.scss"

import { Text } from "../Text/Text"

/* --- */

const AvatarComponent = (
  {
    className,
    imageSrc,
    children,
    fill,
    size = "default",
    shape = "circle",
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
      style={{ backgroundColor: fill }}
    >
      {imageSrc && (
        <img className="Avatar__image" src={imageSrc} alt="Avatar" />
      )}
      {children && (
        <div className="Avatar__children">
          <Text
            variant="body"
            size={size === "small" ? "small" : "large"}
            strong
          >
            {children}
          </Text>
        </div>
      )}
    </div>
  )
}

export const Avatar = typedForwardRef<AvatarProps, HTMLDivElement>(
  AvatarComponent
)
