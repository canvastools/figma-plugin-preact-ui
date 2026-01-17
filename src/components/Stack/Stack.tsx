import { bem, typedForwardRef } from "../../utils"

import type { StackProps } from "./Stack.types"
import "./Stack.scss"

/* --- */

const StackComponent = (
  {
    id,
    className,
    direction = "column",
    spacing,
    x = "start",
    y = "start",
    fullHeight = false,
    fullWidth = false,
    children,
    ...rest
  }: StackProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Stack", undefined, {
    direction,
    spacing: String(spacing),
    x,
    y,
    fullHeight,
    fullWidth,
  })

  return (
    <div
      id={id}
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
}

export const Stack = typedForwardRef<StackProps, HTMLDivElement>(StackComponent)
