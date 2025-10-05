import { bem, typedForwardRef } from "../../utils"

import type { PopoverProps } from "./Popover.types"
import "./Popover.scss"

/* --- */

const PopoverComponent = (
  {
    className,
    width = "auto",
    height = "auto",
    children,
    ...rest
  }: PopoverProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Popover", undefined, undefined)

  return (
    <div
      className={[_className, className].join(" ").trim()}
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

export const Popover = typedForwardRef<PopoverProps, HTMLDivElement>(
  PopoverComponent
)
