import { bem, typedForwardRef } from '../../utils'

import type { MenuDividerProps } from './MenuDivider.types'
import './MenuDivider.scss'

/* --- */

const MenuDividerComponent = (
  { id, className, variant = 'full', ...rest }: MenuDividerProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const _className = bem('MenuDivider', undefined, {
    variant,
  })

  return (
    <div id={id} className={[_className, className].join(' ').trim()} ref={ref} {...rest}>
      <div className="MenuDivider__line"></div>
    </div>
  )
}

export const MenuDivider = typedForwardRef<MenuDividerProps, HTMLDivElement>(MenuDividerComponent)
