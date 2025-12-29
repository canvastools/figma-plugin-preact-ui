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
    timeout = 0,
    value = 0,
    ...rest
  }: ProgressProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, timeout)
  }, [timeout])

  const _className = bem("Progress", undefined, { variant })

  return (
    <div
      className={[_className, "no-drag", className].join(" ").trim()}
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
