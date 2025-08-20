import { bem, typedForwardRef } from "../../utils"

import type { BadgeProps } from "./Badge.types"
import "./Badge.scss"

import { Text } from "../Text/Text"

/* --- */

const BadgeComponent = (
  { className, variant = "default", prefix, children, ...rest }: BadgeProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Badge", undefined, {
    variant,
    prefix: Boolean(prefix),
  })

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
    >
      <Text variant="body" size="medium">
        <div className="Badge__content">
          {prefix && <div className="Badge__prefix">{prefix}</div>}
          {children && <div className="Badge__children">{children}</div>}
        </div>
      </Text>
    </div>
  )
}

export const Badge = typedForwardRef<BadgeProps, HTMLDivElement>(BadgeComponent)
