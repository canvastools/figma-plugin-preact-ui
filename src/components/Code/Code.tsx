import { useEffect, useState } from "preact/hooks"
import { bem, typedForwardRef } from "../../utils"

import type { CodeProps } from "./Code.types"
import "./Code.scss"

/* --- */

const CodeComponent = (
  { className, variant = "inline", children, ...rest }: CodeProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Code", undefined, { variant })

  return (
    <div
      className={[_className, "no-drag", className].join(" ").trim()}
      {...rest}
    >
      {children}
    </div>
  )
}

export const Code = typedForwardRef<CodeProps, HTMLDivElement>(CodeComponent)
