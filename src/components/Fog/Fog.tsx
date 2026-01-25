import { bem, typedForwardRef } from "../../utils"

import { useState, useEffect } from "preact/hooks"

import type { FogProps } from "./Fog.types"
import "./Fog.scss"

/* --- */

const FogComponent = (
  { className, delay = 0, children, ...rest }: FogProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, delay)
  }, [delay])

  const _className = bem("Fog", undefined, { visible: isVisible })

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
      onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
    >
      <div className="Fog__overlay"></div>
      {children && <div className="Fog__children">{children}</div>}
    </div>
  )
}

export const Fog = typedForwardRef<FogProps, HTMLDivElement>(FogComponent)
