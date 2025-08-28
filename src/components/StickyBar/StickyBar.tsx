import { bem, typedForwardRef } from "../../utils"

import type { StickyBarProps } from "./StickyBar.types"
import "./StickyBar.scss"

/* --- */

const StickyBarComponent = (
  { className, position = "top", children, ...rest }: StickyBarProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("StickyBar", undefined, {
    position,
  })

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
    >
      {children && <div className="StickyBar__children">{children}</div>}
    </div>
  )
}

export const StickyBar = typedForwardRef<StickyBarProps, HTMLDivElement>(
  StickyBarComponent
)
