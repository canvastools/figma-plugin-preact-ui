import { bem, typedForwardRef } from "../../utils"

import type { BadgeProps } from "./Badge.types"
import "./Badge.scss"

import { Text } from "../../index"

/* --- */

const BadgeComponent = (
  {
    className,
    intent = "neutral",
    intentModifier = "default",
    prefix,
    suffix,
    children,
    ...rest
  }: BadgeProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Badge", undefined, {
    intent: `${intent}-${intentModifier}`,
    prefix: Boolean(prefix),
    suffix: Boolean(suffix),
  })

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
    >
      <div className="Badge__content">
        {prefix && <div className="Badge__prefix">{prefix}</div>}
        {children && (
          <div className="Badge__children">
            <Text
              variant="body"
              size="medium"
              intent={intent}
              intentModifier={intentModifier}
            >
              {children}
            </Text>
          </div>
        )}
        {suffix && <div className="Badge__suffix">{suffix}</div>}
      </div>
    </div>
  )
}

export const Badge = typedForwardRef<BadgeProps, HTMLDivElement>(BadgeComponent)
