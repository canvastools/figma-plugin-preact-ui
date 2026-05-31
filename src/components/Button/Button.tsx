import { bem, typedForwardRef } from '../../utils'

import { Fragment } from 'preact'
import { useRef } from 'preact/hooks'

import { Text, Tooltip } from '../../index'

import type { ButtonProps } from './Button.types'
import './Button.scss'

/* --- */

const ButtonComponent = (
  {
    id,
    className,
    intent = 'neutral',
    intentModifier = 'default',
    ghost = false,
    size = 'medium',
    grouped,
    disabled = false,
    fullWidth = false,
    prefix,
    suffix,
    children,
    tooltip,
    tabIndex,
    onClick,
    ...rest
  }: ButtonProps,
  ref: preact.Ref<HTMLButtonElement>,
) => {
  const wrapChildrenInText = typeof children === 'string' || typeof children === 'number'

  const _className = bem('Button', undefined, {
    intent: `${intent}-${intentModifier}`,
    ghost,
    size,
    grouped: Boolean(grouped),
    groupedPosition: grouped ?? undefined,
    disabled,
    fullWidth,
    prefix: Boolean(prefix),
    suffix: Boolean(suffix),
    tooltip: Boolean(tooltip),
    customChildren: !wrapChildrenInText,
  })

  const handleClick = (event: MouseEvent) => {
    if (disabled) {
      event.preventDefault()
      return
    }
    event.stopPropagation()
    onClick?.({ event })
  }

  const handleKeyDown = (event: preact.JSX.TargetedKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      event.currentTarget.blur()
    }
  }

  const itemRef = useRef<HTMLButtonElement>(null)

  return (
    <Fragment>
      <button
        id={id}
        className={[_className, className].join(' ').trim()}
        data-pui-interactive="true"
        ref={(el) => {
          if (typeof ref === 'function') {
            ref(el)
          } else if (ref) {
            // eslint-disable-next-line
            ;(ref as preact.RefObject<HTMLButtonElement>).current = el
          }
          itemRef.current = el
        }}
        disabled={disabled}
        {...(tabIndex !== undefined ? { tabIndex } : {})}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...rest}
      >
        <div className="Button__content">
          {prefix && <div className="Button__prefix">{prefix}</div>}
          {children != null && children !== false && children !== true && (
            <div className="Button__children">
              {wrapChildrenInText ? (
                <Text variant="body" size="medium" intent={intent} intentModifier={intentModifier} disabled={disabled} truncate>
                  {children}
                </Text>
              ) : (
                children
              )}
            </div>
          )}
          {suffix && <div className="Button__suffix">{suffix}</div>}
        </div>
      </button>
      {tooltip && <Tooltip anchorRef={itemRef}>{tooltip}</Tooltip>}
    </Fragment>
  )
}

export const Button = typedForwardRef<ButtonProps, HTMLButtonElement>(ButtonComponent)
