import { bem, typedForwardRef } from "../../utils"

import { useState, useEffect } from "preact/hooks"

import type { ProgressProps } from "./Progress.types"
import "./Progress.scss"

import { Spinner } from "../Spinner/Spinner"

/* --- */

const ProgressComponent = (
  {
    className,
    variant = "indeterminate",
    delay = 0,
    value = 0,
    ...rest
  }: ProgressProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, delay)
  }, [delay])

  const _className = bem("Progress", undefined, { variant, visible: isVisible })

  return (
    <div
      className={[_className, className].join(" ").trim()}
      data-pui-interactive="true"
      ref={ref}
      {...rest}
    >
      {variant === "determinate" && (
        <div className="Progress__bar" style={{ width: `${value}%` }} />
      )}
    </div>
  )
}

export const Progress = typedForwardRef<ProgressProps, HTMLDivElement>(
  ProgressComponent
)
