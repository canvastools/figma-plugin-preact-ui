import { bem, typedForwardRef } from "../../utils"

import type { TextProps } from "./Text.types"
import "./Text.scss"

/* --- */

const TextComponent = (
  {
    className,
    id,
    intent = "neutral",
    intentModifier = "default",
    variant = "body",
    size = "medium",
    strong = false,
    align = "left",
    disabled = false,
    selected = false,
    wrap = true,
    textColor,
    truncate = false,
    fullWidth = false,
    children,
    ...rest
  }: TextProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Text", undefined, {
    ...(!textColor && {
      intent: `${intent}-${intentModifier}`,
      disabled,
      selected,
    }),
    variant,
    size,
    strong,
    align,
    fullWidth,
    wrap,
    truncated: truncate,
  })

  return (
    <div
      className={[_className, className].join(" ").trim()}
      id={id}
      ref={ref}
      {...rest}
      style={{
        ...(textColor && { color: textColor }),
      }}
    >
      {children}
    </div>
  )
}

export const Text = typedForwardRef<TextProps, HTMLDivElement>(TextComponent)
