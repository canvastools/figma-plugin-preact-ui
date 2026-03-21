import { bem, typedForwardRef } from '../../utils'

import { Text, ButtonIcon, close as iconClose } from '../../index'

import type { PopoverHeaderProps } from './PopoverHeader.types'
import './PopoverHeader.scss'

/* --- */

const PopoverHeaderComponent = (
  { id, className, children, onClose, ...rest }: PopoverHeaderProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const _className = bem('PopoverHeader', undefined, undefined)

  return (
    <div id={id} className={[_className, className].join(' ').trim()} ref={ref} {...rest}>
      <div className="PopoverHeader__content">
        <Text strong fullWidth>
          {children}
        </Text>
        <ButtonIcon ghost icon={{ glyph: iconClose }} onClick={onClose ? () => onClose() : undefined} />
      </div>
    </div>
  )
}

export const PopoverHeader = typedForwardRef<PopoverHeaderProps, HTMLDivElement>(PopoverHeaderComponent)
