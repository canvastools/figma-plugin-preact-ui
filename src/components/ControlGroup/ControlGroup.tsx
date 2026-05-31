import { cloneElement, isValidElement, toChildArray } from 'preact'
import type { VNode } from 'preact'

import { bem, typedForwardRef } from '../../utils'

import type { ControlGroupProps } from './ControlGroup.types'
import './ControlGroup.scss'

/* --- */

const ControlGroupComponent = (
  { id, className, groupFocus = false, fullWidth = false, disabled = false, children, tabIndex, ...rest }: ControlGroupProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const childrenArray = toChildArray(children).filter(isValidElement) as VNode[]

  const _className = bem('ControlGroup', undefined, {
    groupFocus: Boolean(groupFocus),
    fullWidth: Boolean(fullWidth),
    disabled: Boolean(disabled),
  })

  return (
    <div id={id} className={[_className, className].join(' ').trim()} data-pui-interactive="true" ref={ref} tabIndex={tabIndex} {...rest}>
      {childrenArray.map((child, index) =>
        cloneElement(child, {
          ...child.props,
          grouped: index === 0 ? 'first' : index === childrenArray.length - 1 ? 'last' : 'middle',
        }),
      )}
    </div>
  )
}

export const ControlGroup = typedForwardRef<ControlGroupProps, HTMLDivElement>(ControlGroupComponent)
