import { bem, typedForwardRef } from "../../utils"

import type { BarProps } from "./Bar.types"
import "./Bar.scss"

/* --- */

const BarComponent = (
  {
    className,
    showDividerTop = false,
    showDividerBottom = false,
    children,
    ...rest
  }: BarProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Bar", undefined, {
    showDividerTop,
    showDividerBottom,
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
