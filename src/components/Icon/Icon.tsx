import { bem, typedForwardRef } from "../../utils"

import type { IconProps } from "./Icon.types"
import "./Icon.scss"

/* --- */

const IconComponent = (
  {
    id,
    className,
    glyph,
    intent = "neutral",
    intentModifier = "default",
    variant = "default",
    size = 24,
    disabled = false,
    selected = false,
    iconColor,
    children,
    ...rest
  }: IconProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Icon", undefined, {
    // derived styles are driven by intent/variant/size; glyph is a render fn
    ...(!iconColor && {
      intent: `${intent}-${intentModifier}`,
      disabled,
      selected,
    }),
    iconColor,
    variant,
    size: size.toString(),
  })

  let content: preact.ComponentChildren

  if (children) {
    content = children
  } else if (glyph) {
    content = glyph({ variant, size })
  } else {
    throw new Error(`Icon component error: No valid glyph or children provided`)
  }

  return (
    <div
      id={id}
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
      style={{
        ...(iconColor && { color: iconColor }),
      }}
    >
      {content}
    </div>
  )
}

export const Icon = typedForwardRef<IconProps, HTMLDivElement>(IconComponent)
