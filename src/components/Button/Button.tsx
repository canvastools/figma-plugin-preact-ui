import { typedForwardRef } from "../../utils/typedForwardRef"

import type { ButtonProps } from "./Button.types"
import "./Button.scss"

/* Component */

const _Button = (
  { children, ...rest }: ButtonProps,
  ref: preact.Ref<HTMLButtonElement>
) => {
  return (
    <button ref={ref} className="Button" {...rest}>
      {children}
    </button>
  )
}

export const Button = typedForwardRef<ButtonProps, HTMLButtonElement>(_Button)
