import { bem, typedForwardRef } from "../../utils"

import type { TooltipContainerProps } from "./TooltipContainer.types"
import "./TooltipContainer.scss"

import { Text } from "../Text/Text"

/* --- */

const TooltipContainerComponent = (
  {
    className,
    width,
    height,
    showArrow,
    children,
    ...rest
  }: TooltipContainerProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("TooltipContainer", undefined, {
    arrow: showArrow,
  })

  return (
    <div
      className={[_className, className].join(" ").trim()}
      data-pui-interactive="true"
      ref={ref}
      style={{
        width,
        height,
      }}
      {...rest}
    >
      {showArrow && <div className="TooltipContainer__arrow" />}
      <Text intent="neutral-inverted-fixed">{children}</Text>
    </div>
  )
}

export const TooltipContainer = typedForwardRef<
  TooltipContainerProps,
  HTMLDivElement
>(TooltipContainerComponent)
