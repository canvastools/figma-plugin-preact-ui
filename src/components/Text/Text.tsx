import { bem, typedForwardRef } from "../../utils"

import type { TextProps } from "./Text.types"
import "./Text.scss"

/* --- */

const TextComponent = (
  {
    className,
    intent = "neutral",
    intentModifiers = "default",
    disabled = false,
    interactive = false,
    selected = false,
    fill,
    variant = "body",
    size = "medium",
    strong = false,
    align = "left",
    fullWidth = false,
    noWrap = false,
    truncate = false,
    children,
    ...rest
  }: TextProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Text", undefined, {
    ...(!fill && {
      intent: `${intent}-${intentModifiers}`,
      disabled,
      interactive,
      selected,
    }),
    variant,
    size,
    strong,
    align,
    fullWidth,
    noWrap,
    truncated: Boolean(truncate),
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
