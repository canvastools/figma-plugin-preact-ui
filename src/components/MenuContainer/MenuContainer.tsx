import { useCallback, useContext, useEffect, useRef, useState } from 'preact/hooks'

import { bem, typedForwardRef } from '../../utils'

import { Icon, chevronUp, chevronDown } from '../../index'

import { RawMenuContext } from '../MenuContext/MenuContext'
import type { MenuContainerProps } from './MenuContainer.types'
import './MenuContainer.scss'

/* --- */

const SCROLL_SPEED = 6

const MenuContainerComponent = (
  { id, className, width, height, children, ...rest }: MenuContainerProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const context = useContext(RawMenuContext)
  const keyboardInteraction = context?.keyboardInteraction ?? false

  const scrollRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)

  const [canScrollUp, setCanScrollUp] = useState(false)
  const [canScrollDown, setCanScrollDown] = useState(false)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) {
      setCanScrollUp(false)
      setCanScrollDown(false)
      return
    }
    setCanScrollUp(el.scrollTop > 1)
    setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 1)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    updateScrollState()

    let ro: ResizeObserver | null = null
    try {
      ro = new ResizeObserver(updateScrollState)
      ro.observe(el)
    } catch {
      // ResizeObserver not supported
    }

    window.addEventListener('resize', updateScrollState)

    return () => {
      ro?.disconnect()
      window.removeEventListener('resize', updateScrollState)
    }
  }, [updateScrollState])

  const stopScrolling = useCallback(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [])

  const startScrolling = useCallback(
    (direction: 1 | -1) => {
      stopScrolling()
      const step = () => {
        const el = scrollRef.current
        if (!el) return
        el.scrollTop += SCROLL_SPEED * direction
        updateScrollState()
        const canContinue = direction > 0 ? el.scrollTop + el.clientHeight < el.scrollHeight - 1 : el.scrollTop > 1
        if (canContinue) {
          rafRef.current = requestAnimationFrame(step)
        } else {
          rafRef.current = null
        }
      }
      rafRef.current = requestAnimationFrame(step)
    },
    [stopScrolling, updateScrollState],
  )

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement | null
      if (!target || !el.contains(target)) return

      const scrollRect = el.getBoundingClientRect()
      const targetRect = target.getBoundingClientRect()

      const itemTopInContent = targetRect.top - scrollRect.top + el.scrollTop
      const targetScrollTop = itemTopInContent + targetRect.height / 2 - el.clientHeight / 2

      const maxScroll = el.scrollHeight - el.clientHeight
      el.scrollTop = Math.max(0, Math.min(maxScroll, targetScrollTop))
      updateScrollState()
    }

    el.addEventListener('focusin', handleFocusIn)
    return () => el.removeEventListener('focusin', handleFocusIn)
  }, [updateScrollState])

  useEffect(() => {
    return () => stopScrolling()
  }, [stopScrolling])

  const _className = bem('MenuContainer', undefined, {
    'keyboard-interaction': keyboardInteraction,
  })

  return (
    <div
      id={id}
      className={[_className, className].join(' ').trim()}
      data-pui-interactive="true"
      ref={ref}
      {...rest}
      style={{
        width,
        height,
      }}
    >
      <div className="MenuContainer__scroll-area" ref={scrollRef} onScroll={updateScrollState}>
        {children}
      </div>
      {canScrollUp && (
        <div
          className="MenuContainer__scroll-zone MenuContainer__scroll-zone_top"
          onMouseEnter={() => startScrolling(-1)}
          onMouseLeave={stopScrolling}
        >
          <div className="MenuContainer__scroll-zone-inner">
            <Icon glyph={chevronUp} intent="neutral-inverted-fixed" />
          </div>
        </div>
      )}
      {canScrollDown && (
        <div
          className="MenuContainer__scroll-zone MenuContainer__scroll-zone_bottom"
          onMouseEnter={() => startScrolling(1)}
          onMouseLeave={stopScrolling}
        >
          <div className="MenuContainer__scroll-zone-inner">
            <Icon glyph={chevronDown} intent="neutral-inverted-fixed" />
          </div>
        </div>
      )}
    </div>
  )
}

export const MenuContainer = typedForwardRef<MenuContainerProps, HTMLDivElement>(MenuContainerComponent)
