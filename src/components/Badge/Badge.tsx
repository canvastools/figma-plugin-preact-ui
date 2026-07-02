import { bem, typedForwardRef } from '../../utils'

import { Text } from '../../index'

import type { BadgeProps } from './Badge.types'
import './Badge.scss'

/* --- */

const BadgeComponent = (
  { id, className, intent = 'neutral', intentModifier = 'default', prefix, suffix, children, ...rest }: BadgeProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const _className = bem('Badge', undefined, {
    intent: `${intent}-${intentModifier}`,
    prefix: Boolean(prefix),
    suffix: Boolean(suffix),
  })

  return (
    <div id={id} className={[_className, className].join(' ').trim()} ref={ref} {...rest}>
      <div className="Badge__content">
        {prefix && <div className="Badge__prefix">{prefix}</div>}
        {children != null && children !== false && children !== true && (
          <div className="Badge__children">
            <Text variant="body" size="medium" intent={intent} intentModifier={intentModifier}>
              {children}
            </Text>
          </div>
        )}
        {suffix && <div className="Badge__suffix">{suffix}</div>}
      </div>
    </div>
  )
}

export const Badge = typedForwardRef<BadgeProps, HTMLDivElement>(BadgeComponent)
