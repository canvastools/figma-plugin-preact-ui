import { bem, typedForwardRef } from '../../utils'

import type { CodeProps } from './Code.types'
import './Code.scss'

/* --- */

const CodeComponent = (
  { id, className, variant = 'inline', children, ...rest }: CodeProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const _className = bem('Code', undefined, { variant })

  return (
    <div id={id} className={[_className, className].join(' ').trim()} ref={ref} {...rest}>
      {children}
    </div>
  )
}

export const Code = typedForwardRef<CodeProps, HTMLDivElement>(CodeComponent)
