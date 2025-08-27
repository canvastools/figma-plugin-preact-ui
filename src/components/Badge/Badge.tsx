import { bem, typedForwardRef } from "../../utils"

import type { BadgeProps } from "./Badge.types"
import "./Badge.scss"

import { Text } from "../Text/Text"

/* --- */

const BadgeComponent = (
  {
    className,
    context = "neutral",
    contextModifiers = "default",
    prefix,
    suffix,
    children,
    ...rest
  }: BadgeProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Badge", undefined, {
    context: `${context}-${contextModifiers}`,
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
              context={context}
              contextModifiers={contextModifiers}
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
