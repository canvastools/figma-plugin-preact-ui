import { bem, typedForwardRef } from "../../utils"

import type { SectionProps } from "./Section.types"
import "./Section.scss"

/* --- */

const SectionComponent = (
  { className, children, ...rest }: SectionProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Section", undefined, undefined)

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
