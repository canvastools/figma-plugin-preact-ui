import { bem, typedForwardRef } from "../../utils"

import type { TextProps } from "./Text.types"
import "./Text.scss"

/* --- */

const TextComponent = (
  {
    className,
    intent = "neutral",
    intentModifiers = "default",
    disabled,
    interactive,
    selected,
    fill,
    variant = "body",
    size = "medium",
    strong,
    align = "left",
    fullWidth,
    noWrap,
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
