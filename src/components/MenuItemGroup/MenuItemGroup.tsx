import { bem, typedForwardRef } from '../../utils'

import { Text } from '../Text/Text'

import type { MenuItemGroupProps } from './MenuItemGroup.types'
import './MenuItemGroup.scss'

/* --- */

const MenuItemGroupComponent = (
  { className, children, paddingLikeOption = false, ...rest }: MenuItemGroupProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const _className = bem('MenuItemGroup', undefined, {
    paddingLikeOption,
  })

  return (
    <div className={[_className, className].join(' ').trim()} ref={ref} {...rest}>
      <div className="MenuItemGroup__content">
        <div className="MenuItemGroup__children">
          <Text variant="body" size="medium" intent="neutral-inverted-fixed" disabled>
            {children}
          </Text>
        </div>
      </div>
    </div>
  )
}

export const MenuItemGroup = typedForwardRef<MenuItemGroupProps, HTMLDivElement>(MenuItemGroupComponent)
