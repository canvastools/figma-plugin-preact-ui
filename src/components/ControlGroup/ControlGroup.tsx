import { cloneElement } from "preact"

import { bem, typedForwardRef } from "../../utils"

import type { ControlGroupProps } from "./ControlGroup.types"
import "./ControlGroup.scss"

/* --- */

const ControlGroupComponent = (
  { className, groupFocus = false, children, ...rest }: ControlGroupProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const childrenArray = Array.isArray(children) ? children : []

  const _className = bem("ControlGroup", undefined, {
    groupFocus: Boolean(groupFocus),
  })

  return (
    <div
      className={[_className, "no-drag", className].join(" ").trim()}
      ref={ref}
      {...rest}
    >
      {childrenArray.map((child, index) =>
        cloneElement(child, {
          ...child.props,
          grouped:
            index === 0
              ? "first"
              : index === childrenArray.length - 1
              ? "last"
              : "middle",
        })
      )}
    </div>
  )
}

export const ControlGroup = typedForwardRef<ControlGroupProps, HTMLDivElement>(
  ControlGroupComponent
)
