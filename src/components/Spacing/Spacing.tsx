import { bem, typedForwardRef } from '../../utils'

import type { SpacingProps } from './Spacing.types'
import './Spacing.scss'

/* --- */

const SpacingComponent = (
  { id, className, size, direction = 'column', ...rest }: SpacingProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const _className = bem('Spacing', undefined, {
    size: String(size),
    direction,
  })

  return <div id={id} className={[_className, className].join(' ').trim()} ref={ref} {...rest} />
}

export const Spacing = typedForwardRef<SpacingProps, HTMLDivElement>(SpacingComponent)
