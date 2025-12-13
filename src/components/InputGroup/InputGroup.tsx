import { bem, typedForwardRef } from "../../utils"

import type { InputGroupProps } from "./InputGroup.types"
import "./InputGroup.scss"

/* --- */

const InputGroupComponent = (
  { className, children, ...rest }: InputGroupProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("InputGroup", undefined, undefined)

  return (
    <div
      className={[_className, "no-drag", className].join(" ").trim()}
      {...rest}
    >
      {children}
    </div>
  )
}

export const InputGroup = typedForwardRef<InputGroupProps, HTMLDivElement>(
  InputGroupComponent
)
