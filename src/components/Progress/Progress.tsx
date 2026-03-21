import { bem, typedForwardRef } from '../../utils'

import { useState, useEffect } from 'preact/hooks'

import type { ProgressProps } from './Progress.types'
import './Progress.scss'

/* --- */

const ProgressComponent = (
  { id, className, variant = 'indeterminate', delay = 0, value = 0, ...rest }: ProgressProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsVisible(true)
    }, delay)
    return () => clearTimeout(timeoutId)
  }, [delay])

  const _className = bem('Progress', undefined, { variant, visible: isVisible })

  return (
    <div id={id} className={[_className, className].join(' ').trim()} data-pui-interactive="true" ref={ref} {...rest}>
      {variant === 'determinate' && <div className="Progress__bar" style={{ width: `${value}%` }} />}
    </div>
  )
}

export const Progress = typedForwardRef<ProgressProps, HTMLDivElement>(ProgressComponent)
