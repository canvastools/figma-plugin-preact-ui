import { bem, typedForwardRef } from '../../utils'

import type { TabListProps } from './TabList.types'
import './TabList.scss'

/* --- */

const TabListComponent = (
  { id, className, variant = 'default', children, ...rest }: TabListProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const _className = bem('TabList', undefined, {
    variant,
  })

  return (
    <div id={id} className={[_className, className].join(' ').trim()} ref={ref} {...rest}>
      {children && <div className="TabList__children">{children}</div>}
    </div>
  )
}

export const TabList = typedForwardRef<TabListProps, HTMLDivElement>(TabListComponent)
