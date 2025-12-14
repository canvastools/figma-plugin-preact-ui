import { bem, typedForwardRef } from "../../utils"

import type { TooltipContainerProps } from "./TooltipContainer.types"
import "./TooltipContainer.scss"

import { Text } from "../Text/Text"

/* --- */

const TooltipContainerComponent = (
  {
    className,
    width = "auto",
    height = "auto",
    children,
    ...rest
  }: TooltipContainerProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("TooltipContainer", undefined, undefined)

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
      <Text intent="neutral-inverted-fixed">{children}</Text>
    </div>
  )
}

export const TooltipContainer = typedForwardRef<
  TooltipContainerProps,
  HTMLDivElement
>(TooltipContainerComponent)
