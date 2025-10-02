import { bem, typedForwardRef } from "../../utils"

import type { BarProps } from "./Bar.types"
import "./Bar.scss"

/* --- */

const BarComponent = (
  {
    className,
    borderTop = false,
    borderBottom = false,
    children,
    ...rest
  }: BarProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Bar", undefined, {
    borderTop,
    borderBottom,
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

export const Bar = typedForwardRef<BarProps, HTMLDivElement>(BarComponent)
