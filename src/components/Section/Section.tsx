import { bem, typedForwardRef } from "../../utils"

import type { SectionProps } from "./Secton.types"
import "./Section.scss"

/* --- */

const SectionComponent = (
  { className, variant = "default", children, ...rest }: SectionProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Section", undefined, {
    variant,
  })

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
    >
      {children && <div className="Section__children">{children}</div>}
    </div>
  )
}

export const Section = typedForwardRef<SectionProps, HTMLDivElement>(
  SectionComponent
)
