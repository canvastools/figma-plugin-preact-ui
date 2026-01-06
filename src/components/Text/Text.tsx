import { bem, typedForwardRef } from "../../utils"

import type { TextProps } from "./Text.types"
import "./Text.scss"

/* --- */

const TextComponent = (
  {
    className,
    intent = "neutral",
    intentModifiers = "default",
    variant = "body",
    size = "medium",
    strong = false,
    align = "left",
    disabled = false,
    selected = false,
    wrap = true,
    colorText,
    truncate = false,
    widthFull = false,
    children,
    ...rest
  }: TextProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Text", undefined, {
    ...(!colorText && {
      intent: `${intent}-${intentModifiers}`,
      disabled,
      selected,
    }),
    variant,
    size,
    strong,
    align,
    widthFull,
    wrap,
    truncate,
  })

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
      style={{
        ...(colorText && { color: colorText }),
      }}
    >
      {children}
    </div>
  )
}

export const Text = typedForwardRef<TextProps, HTMLDivElement>(TextComponent)
