import { bem, typedForwardRef } from '../../utils'

import type { DividerProps } from './Divider.types'
import './Divider.scss'

/* --- */

const DividerComponent = ({ id, className, variant = 'full', ...rest }: DividerProps, ref: preact.Ref<HTMLDivElement>) => {
  const _className = bem('Divider', undefined, {
    variant,
  })

  return (
    <div id={id} className={[_className, className].join(' ').trim()} ref={ref} {...rest}>
      <div className="Divider__line"></div>
    </div>
  )
}

export const Divider = typedForwardRef<DividerProps, HTMLDivElement>(DividerComponent)
