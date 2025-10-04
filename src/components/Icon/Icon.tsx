import { bem, typedForwardRef } from "../../utils"

import type { IconProps } from "./Icon.types"
import { glyphs } from "./glyphs"
import "./Icon.scss"

/* --- */

const IconComponent = (
  {
    className,
    glyph,
    intent = "neutral",
    intentModifiers = "default",
    disabled = false,
    interactive = false,
    selected = false,
    fill,
    variant = "default",
    size = 24,
    children,
    ...rest
  }: IconProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Icon", undefined, {
    glyph,
    ...(!fill && {
      intent: `${intent}-${intentModifiers}`,
      disabled,
      interactive,
      selected,
    }),
    fill,
    variant,
    size: size.toString(),
  })

  let content: preact.ComponentChildren

  if (children) {
    content = children
  } else if (glyph && glyphs[glyph]) {
    content = glyphs[glyph]({ variant, size })
  } else {
    throw new Error(`Icon component error: No valid glyph or children provided`)
  }

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
      style={{
        ...(fill && { color: fill }),
      }}
    >
      {content}
    </div>
  )
}

export const Icon = typedForwardRef<IconProps, HTMLDivElement>(IconComponent)
