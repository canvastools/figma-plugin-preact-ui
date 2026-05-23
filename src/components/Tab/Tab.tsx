import { bem, typedForwardRef } from '../../utils'

import { Fragment } from 'preact'
import { toChildArray, cloneElement } from 'preact'
import { useRef } from 'preact/hooks'

import type { VNode } from 'preact'

import { useTabContext, Text, Icon, Tooltip } from '../../index'

import type { TabProps } from './Tab.types'
import './Tab.scss'

/* --- */

const TabComponent = (
  { id, className, variant = 'default', prefix, suffix, children, tooltip, onClick, ...rest }: TabProps,
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

  type ContentProps = { fake?: boolean; selected: boolean }

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

  const Content = ({ fake = false, selected = false }: ContentProps) => (
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
        tabIndex={id === activeId ? 0 : -1}
        {...rest}
        onClick={handleClick}
      >
        <div className="Tab__container Tab__container_fake">
          <Content fake selected={id === activeId} />
        </div>
        <div className="Tab__container Tab__container_real">
          <Content selected={id === activeId} />
        </div>
      </button>
      {tooltip && <Tooltip anchorRef={buttonRef}>{tooltip}</Tooltip>}
    </Fragment>
  )
}

export const Tab = typedForwardRef<TabProps, HTMLButtonElement>(TabComponent)
