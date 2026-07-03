import { bem, typedForwardRef } from '../../utils'

import { Fragment } from 'preact'
import { toChildArray, cloneElement } from 'preact'
import { useRef } from 'preact/hooks'

import type { VNode } from 'preact'

import { useTabContext } from '../TabContext/TabContext'
import { Text } from '../Text/Text'
import { Icon } from '../Icon/Icon'
import { Tooltip } from '../Tooltip/Tooltip'

import type { TabProps } from './Tab.types'
import './Tab.scss'

/* --- */

const TabComponent = (
  { id, className, variant = 'default', prefix, suffix, children, tooltip, tabIndex, onClick, ...rest }: TabProps,
  ref: preact.Ref<HTMLButtonElement>,
) => {
  const wrapChildrenInText = typeof children === 'string' || typeof children === 'number'

  const { activeId, onTabChange, registerTab } = useTabContext()

  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const setRef = (el: HTMLButtonElement | null) => {
    buttonRef.current = el
    registerTab(id, el)

    if (typeof ref === 'function') {
      ref(el)
    } else if (ref) {
      const r = ref as preact.RefObject<HTMLButtonElement>
      r.current = el
    }
  }

  const _className = bem('Tab', undefined, {
    variant,
    selected: id === activeId,
    prefix: Boolean(prefix),
    suffix: Boolean(suffix),
    tooltip: Boolean(tooltip),
    customChildren: !wrapChildrenInText,
  })

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation()
    onTabChange(id)
    onClick?.({ event, id })
  }

  const renderAdditionalContent = (content: preact.ComponentChildren, selected: boolean) => {
    return toChildArray(content).map((contentChild) => {
      if (typeof contentChild === 'object' && contentChild !== null) {
        const maybeVNode = contentChild as VNode
        if (maybeVNode.type === Icon) {
          return cloneElement(maybeVNode, {
            intentModifier: selected ? 'default' : 'secondary',
          })
        }
      }
      return contentChild
    })
  }

  // Plain render function, not a nested component: a component type created
  // inside render would be new on every render and force Preact to remount
  // the whole subtree each time.
  const renderContent = ({ fake = false, selected = false }: { fake?: boolean; selected: boolean }) => (
    <div className="Tab__content">
      {prefix && <div className="Tab__prefix">{prefix && renderAdditionalContent(prefix, selected)}</div>}
      {children != null && children !== false && children !== true && (
        <div className="Tab__children">
          {wrapChildrenInText ? (
            <Text
              variant="body"
              size="medium"
              strong={fake || id === activeId}
              intent="neutral"
              intentModifier={selected ? 'default' : 'secondary'}
            >
              {children}
            </Text>
          ) : (
            children
          )}
        </div>
      )}
      {suffix && <div className="Tab__suffix">{suffix && renderAdditionalContent(suffix, selected)}</div>}
    </div>
  )

  return (
    <Fragment>
      <button
        id={id}
        className={[_className, className].join(' ').trim()}
        data-pui-interactive="true"
        ref={setRef}
        {...rest}
        tabIndex={tabIndex ?? (id === activeId ? 0 : -1)}
        onClick={handleClick}
      >
        <div className="Tab__container Tab__container_fake">{renderContent({ fake: true, selected: id === activeId })}</div>
        <div className="Tab__container Tab__container_real">{renderContent({ selected: id === activeId })}</div>
      </button>
      {tooltip && <Tooltip anchorRef={buttonRef}>{tooltip}</Tooltip>}
    </Fragment>
  )
}

export const Tab = typedForwardRef<TabProps, HTMLButtonElement>(TabComponent)
