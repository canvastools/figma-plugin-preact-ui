import { bem } from "../../utils"

import type { DividerProps } from "./Divider.types"
import "./Divider.scss"

/* --- */

const DividerComponent = ({
  className,
  variant = "full",
  ...rest
}: DividerProps) => {
  const _className = bem("Divider", undefined, {
    variant,
  })

  return (
    <div className={[_className, className].join(" ").trim()} {...rest}>
      <div className="Divider__line"></div>
    </div>
  )
}

export const Divider = DividerComponent
