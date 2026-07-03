import { Fragment, cloneElement, toChildArray } from 'preact'
import { useRef } from 'preact/hooks'
import type { VNode } from 'preact'

import { bem, typedForwardRef } from '../../utils'

import { Icon } from '../Icon/Icon'
import { Tooltip } from '../Tooltip/Tooltip'

import type { ButtonIconProps } from './ButtonIcon.types'
import './ButtonIcon.scss'

/* --- */

const ButtonIconComponent = (
  {
    id,
    className,
    intent = 'neutral',
    intentModifier = 'default',
    ghost = false,
    size = 'medium',
    grouped,
    translucent = false,
    disabled = false,
    selected = false,
    tooltip,
    children,
    icon,
    tabIndex,
    onClick,
    ...rest
  }: ButtonIconProps,
  ref: preact.Ref<HTMLButtonElement>,
) => {
  const _className = bem('ButtonIcon', undefined, {
    intent: `${intent}-${intentModifier}`,
    ghost,
    size,
    grouped: Boolean(grouped),
    groupedPosition: grouped ?? undefined,
    translucent,
    disabled,
    selected,
    tooltip: Boolean(tooltip),
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
        {(children || icon) && (
          <div className="ButtonIcon__children">
            {icon && (
              <Icon
                glyph={icon.glyph}
                intent={intent}
                intentModifier={intentModifier}
                variant={icon.variant}
                size={icon.size}
                selected={selected}
                disabled={disabled}
              />
            )}

            {children &&
              !icon &&
              toChildArray(children).map((child) => {
                if (typeof child === 'object' && child !== null) {
                  const maybeVNode = child as VNode
                  if (maybeVNode.type === Icon) {
                    return cloneElement(maybeVNode, {
                      disabled,
                      selected,
                    })
                  }
                }
                return child
              })}
          </div>
        )}
      </button>
      {tooltip && <Tooltip anchorRef={itemRef}>{tooltip}</Tooltip>}
    </Fragment>
  )
}

export const ButtonIcon = typedForwardRef<ButtonIconProps, HTMLButtonElement>(ButtonIconComponent)
