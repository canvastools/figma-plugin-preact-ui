import { bem, typedForwardRef } from "../../utils"

import type { PopoverContainerProps } from "./PopoverContainer.types"
import "./PopoverContainer.scss"

/* --- */

const PopoverContainerComponent = (
  {
    id,
    className,
    width,
    height,
    showArrow,
    children,
    ...rest
  }: PopoverContainerProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("PopoverContainer", undefined, {
    arrow: showArrow,
  })

  return (
    <div
      id={id}
      className={[_className, className].join(" ").trim()}
      ref={ref}
      style={{
        width,
        height,
      }}
      tabIndex={-1}
      {...rest}
    >
      {showArrow && <div className="PopoverContainer__arrow" />}
      {children}
    </div>
  )
}

export const PopoverContainer = typedForwardRef<
  PopoverContainerProps,
  HTMLDivElement
>(PopoverContainerComponent)
