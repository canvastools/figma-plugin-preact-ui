import { useContext } from "preact/hooks"

import { bem, typedForwardRef } from "../../utils"

import { RawMenuContext } from "../MenuContext/MenuContext"
import type { MenuContainerProps } from "./MenuContainer.types"
import "./MenuContainer.scss"

/* --- */

const MenuContainerComponent = (
  { id, className, width, height, children, ...rest }: MenuContainerProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const context = useContext(RawMenuContext)
  const keyboardInteraction = context?.keyboardInteraction ?? false

  const _className = bem("MenuContainer", undefined, {
    "keyboard-interaction": keyboardInteraction,
  })

  return (
    <div
      id={id}
      className={[_className, className].join(" ").trim()}
      data-pui-interactive="true"
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
