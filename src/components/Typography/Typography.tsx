import { bem, typedForwardRef } from "../../utils"

import type { TypographyProps } from "./Typography.types"
import "./Typography.scss"

/* --- */

const TypographyComponent = (
  {
    className,
    variant = "body",
    size = "medium",
    strong = false,
    children,
    ...rest
  }: TypographyProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Typography", undefined, { variant, size, strong })

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

export const Typography = typedForwardRef<TypographyProps, HTMLDivElement>(
  TypographyComponent
)
