import { bem, typedForwardRef } from "../../utils"

import { useState, useEffect } from "preact/hooks"

import type { FogProps } from "./Fog.types"
import "./Fog.scss"

import { Spinner } from "../Spinner/Spinner"

/* --- */

const FogComponent = (
  { className, timeout = 0, spinner = true, ...rest }: FogProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, timeout)
  }, [timeout])

  const _className = bem("Fog", undefined, { spinner, visible: isVisible })

  return (
    <div
      className={[_className, "no-drag", className].join(" ").trim()}
      ref={ref}
      {...rest}
      onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
    >
      <div className="Fog__overlay"></div>
      {spinner && <Spinner />}
    </div>
  )
}

export const Fog = typedForwardRef<FogProps, HTMLDivElement>(FogComponent)
