import { bem, typedForwardRef } from "../../utils"

import type { PopoverContainerProps } from "./PopoverContainer.types"
import "./PopoverContainer.scss"

/* --- */

const PopoverContainerComponent = (
  {
    className,
    width = "auto",
    height = "auto",
    children,
    ...rest
  }: PopoverContainerProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("PopoverContainer", undefined, undefined)

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      style={{
        width: width === "auto" ? undefined : (width as number),
        height: height === "auto" ? undefined : (height as number),
      }}
      tabIndex={-1}
      {...rest}
    >
      {children}
    </div>
  )
}

export const PopoverContainer = typedForwardRef<
  PopoverContainerProps,
  HTMLDivElement
>(PopoverContainerComponent)
