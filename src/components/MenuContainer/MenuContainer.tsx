import { useContext } from "preact/hooks"

import { bem, typedForwardRef } from "../../utils"

import type { MenuContainerProps } from "./MenuContainer.types"
import "./MenuContainer.scss"
import { RawMenuContext } from "../MenuContext/MenuContext"

/* --- */

const MenuContainerComponent = (
  { className, width, height, children, ...rest }: MenuContainerProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const context = useContext(RawMenuContext)
  const keyboardInteraction = context?.keyboardInteraction ?? false

  const _className = bem("MenuContainer", undefined, {
    "keyboard-interaction": keyboardInteraction,
  })

  return (
    <div
      className={[_className, "no-drag", className].join(" ").trim()}
      ref={ref}
      style={{
        width,
        height,
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
