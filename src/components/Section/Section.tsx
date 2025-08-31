import { bem, typedForwardRef } from "../../utils"

import type { SectionProps } from "./Section.types"
import "./Section.scss"

/* --- */

const SectionComponent = (
  { className, children, padding, ...rest }: SectionProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Section", undefined, {
    ...(padding && padding.top && { paddingTop: String(padding.top) }),
    ...(padding && padding.right && { paddingRight: String(padding.right) }),
    ...(padding && padding.bottom && { paddingBottom: String(padding.bottom) }),
    ...(padding && padding.left && { paddingLeft: String(padding.left) }),
  })

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
}

export const Section = typedForwardRef<SectionProps, HTMLDivElement>(
  SectionComponent
)
