import { bem, typedForwardRef } from '../../utils'

import type { SectionProps } from './Section.types'
import './Section.scss'

/* --- */

const SectionComponent = (
  { id, className, children, padding, variant = 'default', ...rest }: SectionProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const _className = bem('Section', undefined, {
    ...(padding && padding.top !== undefined && { paddingTop: String(padding.top) }),
    ...(padding && padding.right !== undefined && { paddingRight: String(padding.right) }),
    ...(padding &&
      padding.bottom !== undefined && {
        paddingBottom: String(padding.bottom),
      }),
    ...(padding && padding.left !== undefined && { paddingLeft: String(padding.left) }),
    variant,
  })

  return (
    <div id={id} className={[_className, className].join(' ').trim()} ref={ref} {...rest}>
      <div className="Section__content">{children}</div>
    </div>
  )
}

export const Section = typedForwardRef<SectionProps, HTMLDivElement>(SectionComponent)
