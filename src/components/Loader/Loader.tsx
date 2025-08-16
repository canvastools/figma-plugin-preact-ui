import { bem, typedForwardRef } from "../../utils"

import type { LoaderProps } from "./Loader.types"
import "./Loader.scss"

/* --- */

const LoaderComponent = (
  { className, ...rest }: LoaderProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Loader", undefined, undefined)

  return (
    <div className={[_className, className].join(" ").trim()} {...rest}>
      <div className="Loader__spinner"></div>
    </div>
  )
}

export const Loader = typedForwardRef<LoaderProps, HTMLDivElement>(
  LoaderComponent
)
