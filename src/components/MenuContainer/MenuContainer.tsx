import { bem, typedForwardRef } from "../../utils"

import type { MenuContainerProps } from "./MenuContainer.types"
import "./MenuContainer.scss"

/* --- */

const MenuContainerComponent = (
  {
    className,
    width = "auto",
    height = "auto",
    children,
    ...rest
  }: MenuContainerProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("MenuContainer", undefined, undefined)

  return (
    <div
      className={[_className, className, "no-drag"].join(" ").trim()}
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

export const MenuContainer = typedForwardRef<
  MenuContainerProps,
  HTMLDivElement
>(MenuContainerComponent)
