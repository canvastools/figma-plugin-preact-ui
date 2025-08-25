import { bem, typedForwardRef } from "../../utils"

import type { TextProps } from "./Text.types"
import "./Text.scss"

/* --- */

const TextComponent = (
  {
    className,
    context = "inherit",
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
    context,
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
    >
      {children}
    </div>
  )
}

export const Text = typedForwardRef<TextProps, HTMLDivElement>(TextComponent)
