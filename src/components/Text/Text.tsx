import { bem, typedForwardRef } from "../../utils"

import type { TextProps } from "./Text.types"
import "./Text.scss"

/* --- */

const TextComponent = (
  {
    className,
    context = "neutral",
    contextModifiers = "default",
    disabled,
    interactive,
    selected,
    fill,
    variant = "body",
    size = "medium",
    strong,
    align = "left",
    children,
    ...rest
  }: TextProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Text", undefined, {
    ...(!fill && {
      context: `${context}-${contextModifiers}`,
      disabled,
      interactive,
      selected,
    }),
    variant,
    size,
    strong,
    align,
  })

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
      style={{
        ...(fill && { color: fill }),
      }}
    >
      {children}
    </div>
  )
}

export const Text = typedForwardRef<TextProps, HTMLDivElement>(TextComponent)
