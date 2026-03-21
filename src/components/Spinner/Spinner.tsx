import { bem, typedForwardRef } from '../../utils'

import type { SpinnerProps } from './Spinner.types'
import './Spinner.scss'

/* --- */

const SpinnerComponent = ({ id, className, size = 'medium', ...rest }: SpinnerProps, ref: preact.Ref<HTMLDivElement>) => {
  const _className = bem('Spinner', undefined, { size })

  return (
    <div id={id} className={[_className, className].join(' ').trim()} ref={ref} {...rest}>
      <div className="Spinner__spinner"></div>
    </div>
  )
}

export const Spinner = typedForwardRef<SpinnerProps, HTMLDivElement>(SpinnerComponent)
