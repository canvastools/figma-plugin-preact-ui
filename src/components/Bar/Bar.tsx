import { bem, typedForwardRef } from '../../utils'

import type { BarProps } from './Bar.types'
import './Bar.scss'

/* --- */

const BarComponent = (
  { id, className, showDividerTop = false, showDividerBottom = false, children, ...rest }: BarProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const _className = bem('Bar', undefined, {
    dividerTop: showDividerTop,
    dividerBottom: showDividerBottom,
  })

  return (
    <div id={id} className={[_className, className].join(' ').trim()} ref={ref} {...rest}>
      {children}
    </div>
  )
}

export const Bar = typedForwardRef<BarProps, HTMLDivElement>(BarComponent)
