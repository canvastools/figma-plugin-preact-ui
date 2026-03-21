import { bem, typedForwardRef } from '../../utils'

import { useState, useEffect } from 'preact/hooks'

import type { FogProps } from './Fog.types'
import './Fog.scss'

/* --- */

const FogComponent = ({ id, className, delay = 0, children, ...rest }: FogProps, ref: preact.Ref<HTMLDivElement>) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsVisible(true)
    }, delay)
    return () => clearTimeout(timeoutId)
  }, [delay])

  const _className = bem('Fog', undefined, { visible: isVisible })

  return (
    <div id={id} className={[_className, className].join(' ').trim()} ref={ref} {...rest}>
      <div
        className="Fog__overlay"
        onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
        }}
      />
      {children && <div className="Fog__children">{children}</div>}
    </div>
  )
}

export const Fog = typedForwardRef<FogProps, HTMLDivElement>(FogComponent)
