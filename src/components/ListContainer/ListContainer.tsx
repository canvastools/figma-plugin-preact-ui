import { bem, typedForwardRef, mergeRefs } from '../../utils'
import { useListContext } from '../ListContext/ListContext'
import { useEffect, useRef } from 'preact/hooks'

import type { ListContainerProps } from './ListContainer.types'
import './ListContainer.scss'

/* --- */

const ListContainerComponent = (
  { id, className, children, ...rest }: ListContainerProps & { nestingLevel?: number },
  ref: preact.Ref<HTMLDivElement>,
) => {
  const { registerRootElement, drag } = useListContext()
  const rootRef = useRef<HTMLDivElement | null>(null)

  // Ensure every container exposes its nesting level via CSS var --level (root=0)
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const parentItemEl = el.closest('.ListItem') as HTMLElement | null
    const parentLevelAttr = parentItemEl?.getAttribute('data-nesting-level')
    const parentLevel = parentLevelAttr ? parseInt(parentLevelAttr, 10) : 0
    const level = parentItemEl ? parentLevel + 1 : 0
    try {
      el.style.setProperty('--level', String(level))
    } catch {
      // ignore style errors
    }
  }, [])

  // Register/unregister this container as a root element for outside-click detection
  useEffect(() => {
    const el = rootRef.current
    if (!registerRootElement || !el) return
    return registerRootElement(el)
  }, [registerRootElement])

  const _className = bem('ListContainer', undefined, undefined)

  return (
    <div
      id={id}
      className={[_className, className].join(' ').trim()}
      data-pui-interactive="true"
      ref={mergeRefs(rootRef, ref)}
      {...rest}
      // Every level forwards to the list's one drag controller, which stops the event
      onDragOver={drag.handleDragOver}
      onDrop={drag.handleDrop}
      onDragLeave={drag.handleDragLeave}
    >
      {children}
    </div>
  )
}

export const ListContainer = typedForwardRef<ListContainerProps, HTMLDivElement>(ListContainerComponent)
