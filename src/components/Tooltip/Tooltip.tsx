import { bem, typedForwardRef } from "../../utils"

import type { TooltipProps } from "./Tooltip.types"
import "./Tooltip.scss"

/* --- */

const TooltipComponent = (
  {
    className,
    width = "auto",
    height = "auto",
    children,
    ...rest
  }: TooltipProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Tooltip", undefined, undefined)

  return (
    <div
      className={[_className, "no-drag", className].join(" ").trim()}
      ref={ref}
      style={{
        width: width === "auto" ? undefined : (width as number),
        height: height === "auto" ? undefined : (height as number),
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export const Tooltip = typedForwardRef<TooltipProps, HTMLDivElement>(
  TooltipComponent
)
