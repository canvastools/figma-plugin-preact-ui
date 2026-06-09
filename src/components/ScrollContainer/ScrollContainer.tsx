import { useCallback, useEffect, useRef, useState } from 'preact/hooks'

import { bem, typedForwardRef } from '../../utils'

import type { ScrollContainerProps } from './ScrollContainer.types'
import './ScrollContainer.scss'

import { useScrollContextOptional } from '../../index'

/* --- */

/** Vertical inset of the thumb from the track edges (top and bottom). */
const TRACK_THUMB_INSET = 12

const ScrollContainerComponent = (
  { id, className, children, ...rest }: ScrollContainerProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const scrollContext = useScrollContextOptional()

  const [localPositionY, setLocalPositionY] = useState<number | undefined>(undefined)
  const [localIsAtTop, setLocalIsAtTop] = useState<boolean>(true)
  const [localIsAtBottom, setLocalIsAtBottom] = useState<boolean>(false)

  const positionY = scrollContext && typeof scrollContext.positionY === 'number' ? scrollContext.positionY : localPositionY
  const isAtTop = scrollContext ? scrollContext.isAtTop : localIsAtTop
  const isAtBottom = scrollContext ? scrollContext.isAtBottom : localIsAtBottom
  const registerScrollRoot =
    scrollContext?.registerScrollRoot ??
    (() => {
      // no-op when no scroll context is present
    })

  const rootRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  const [thumbState, setThumbState] = useState({ top: 0, height: 24 })
  const [isDragging, setIsDragging] = useState(false)
  const [hasScrollable, setHasScrollable] = useState(false)

  const dragOffsetRef = useRef<number>(0)
  const isDraggingRef = useRef<boolean>(false)
  const prevUserSelectRef = useRef<string>('')
  const rafIdRef = useRef<number | null>(null)
  const stickToBottomRef = useRef<boolean>(false)
  const dragWindowListenersRef = useRef<{ move: (e: MouseEvent) => void; up: () => void } | null>(null)

  // positionY controlled scroll sync (declared after scheduleRecomputeThumb to satisfy lints)

  const _className = bem('ScrollContainer', undefined, undefined)

  const recomputeThumb = useCallback(() => {
    const el = contentRef.current
    const track = trackRef.current
    if (!el || !track) return

    const maxScrollTop = Math.max(0, el.scrollHeight - el.clientHeight)
    const hasScrollable = maxScrollTop > 0
    const visibleRatio = hasScrollable ? el.clientHeight / el.scrollHeight : 1
    const trackLength = track.clientHeight - TRACK_THUMB_INSET * 2
    const thumbHeight = Math.max(24, Math.round(trackLength * visibleRatio))
    const available = trackLength - thumbHeight
    const top = hasScrollable ? Math.round((available * el.scrollTop) / maxScrollTop) : 0

    setThumbState({ top, height: thumbHeight })
    setHasScrollable(hasScrollable)
  }, [])

  const scheduleRecomputeThumb = useCallback(() => {
    if (rafIdRef.current != null) return
    rafIdRef.current = requestAnimationFrame(() => {
      rafIdRef.current = null
      recomputeThumb()
    })
  }, [recomputeThumb])

  // positionY controlled scroll sync (declared after scheduleRecomputeThumb to satisfy lints)
  useEffect(() => {
    const el = contentRef.current
    if (!el || typeof positionY !== 'number') return
    try {
      const maxScrollTop = Math.max(0, el.scrollHeight - el.clientHeight)
      const clamped = Math.max(0, Math.min(positionY, maxScrollTop))
      if (el.scrollTop !== clamped) el.scrollTop = clamped
      // Let the native scroll event drive updates; schedule geometry recompute
      // and avoid extra onScroll calls during controlled updates
      scheduleRecomputeThumb()
    } catch {
      // ignore DOM write issues
    }
  }, [positionY, scheduleRecomputeThumb])

  useEffect(() => {
    scheduleRecomputeThumb()
  }, [isAtTop, isAtBottom, scheduleRecomputeThumb])

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const handler = () => {
      if (stickToBottomRef.current) {
        const maxScrollTop = Math.max(0, el.scrollHeight - el.clientHeight)
        el.scrollTop = maxScrollTop
      }
      recomputeThumb()
    }
    const resizeObs = new ResizeObserver(handler)
    resizeObs.observe(el)
    if (trackRef.current) resizeObs.observe(trackRef.current)

    return () => resizeObs.disconnect()
  }, [recomputeThumb])

  useEffect(() => {
    recomputeThumb()
    const rafId = requestAnimationFrame(() => recomputeThumb())
    return () => cancelAnimationFrame(rafId)
  }, [recomputeThumb])

  // Observe DOM mutations and keep pinned to bottom if needed
  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const mo = new MutationObserver(() => {
      if (stickToBottomRef.current) {
        const maxScrollTop = Math.max(0, el.scrollHeight - el.clientHeight)
        el.scrollTop = maxScrollTop
      }
      scheduleRecomputeThumb()
    })
    mo.observe(el, { childList: true, subtree: true, characterData: true })
    return () => mo.disconnect()
  }, [scheduleRecomputeThumb])

  useEffect(() => {
    const onWinResize = () => {
      requestAnimationFrame(() => recomputeThumb())
    }
    window.addEventListener('resize', onWinResize)
    return () => window.removeEventListener('resize', onWinResize)
  }, [recomputeThumb])

  const handleScroll = (e: Event) => {
    if (scrollContext) {
      scrollContext.onScroll(e)
    } else {
      const target =
        ((e as { currentTarget?: EventTarget | null }).currentTarget as HTMLElement | null) || (e.target as HTMLElement)

      if (target) {
        const maxScrollTop = target.scrollHeight - target.clientHeight
        const hasScrollable = maxScrollTop > 0
        let atTop = false
        let atBottom = false
        let newPositionY: number

        if (!hasScrollable) {
          newPositionY = 0
        } else {
          atTop = target.scrollTop <= 0
          atBottom = target.scrollTop >= maxScrollTop
          newPositionY = atTop ? 0 : atBottom ? maxScrollTop : target.scrollTop
        }

        setLocalIsAtTop(hasScrollable ? atTop : true)
        setLocalIsAtBottom(hasScrollable ? atBottom : true)
        setLocalPositionY(newPositionY)
      }
    }
    const el = contentRef.current
    if (el) {
      const maxScrollTop = Math.max(0, el.scrollHeight - el.clientHeight)
      stickToBottomRef.current = maxScrollTop > 0 && Math.abs(maxScrollTop - el.scrollTop) <= 1
    }
    scheduleRecomputeThumb()
  }

  const handleThumbMouseDown = (e: MouseEvent) => {
    if (e.button !== 0) return

    const track = trackRef.current
    if (!track) return

    e.preventDefault()
    setIsDragging(true)
    isDraggingRef.current = true

    recomputeThumb()

    const startY = (e as MouseEvent).clientY
    dragOffsetRef.current = startY - (track.getBoundingClientRect().top + TRACK_THUMB_INSET + thumbState.top)

    prevUserSelectRef.current = document.body.style.userSelect
    document.body.style.userSelect = 'none'

    const onMove = (ev: MouseEvent) => handleThumbMouseMove(ev)
    const onUp = () => handleThumbMouseUp()
    dragWindowListenersRef.current = { move: onMove, up: onUp }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  const handleThumbMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current) return

    const el = contentRef.current
    const track = trackRef.current

    if (!el || !track) return

    const maxScrollTop = Math.max(0, el.scrollHeight - el.clientHeight)

    if (maxScrollTop <= 0) return

    const trackRect = track.getBoundingClientRect()
    const y = (e as MouseEvent).clientY - trackRect.top - TRACK_THUMB_INSET - dragOffsetRef.current
    const trackLength = track.clientHeight - TRACK_THUMB_INSET * 2
    const thumbHeight = thumbState.height
    const available = trackLength - thumbHeight
    if (available <= 0) return
    e.preventDefault()
    const clamped = Math.max(0, Math.min(available, y))
    const scrollTop = Math.round((clamped * maxScrollTop) / available)
    if (el.scrollTop !== scrollTop) {
      el.scrollTop = scrollTop
      // Scroll event will trigger handleScroll; just schedule geometry update
      scheduleRecomputeThumb()
    }
  }

  const handleThumbMouseUp = () => {
    const d = dragWindowListenersRef.current
    if (d) {
      window.removeEventListener('mousemove', d.move)
      window.removeEventListener('mouseup', d.up)
      dragWindowListenersRef.current = null
    }
    setIsDragging(false)
    isDraggingRef.current = false
    document.body.style.userSelect = prevUserSelectRef.current
  }

  useEffect(() => {
    return () => {
      const d = dragWindowListenersRef.current
      if (d) {
        window.removeEventListener('mousemove', d.move)
        window.removeEventListener('mouseup', d.up)
        dragWindowListenersRef.current = null
      }
      isDraggingRef.current = false
      document.body.style.userSelect = prevUserSelectRef.current
    }
  }, [])

  const _classNameTrack = bem('ScrollContainer', 'track', {
    noScroll: !hasScrollable,
    dragging: isDragging,
  })

  return (
    <div
      id={id}
      className={[_className, className].join(' ').trim()}
      ref={(node) => {
        rootRef.current = node
        if (typeof ref === 'function') ref(node as HTMLDivElement)
        else if (ref) (ref as preact.RefObject<HTMLDivElement>).current = node
      }}
      {...rest}
    >
      <div
        className="ScrollContainer__content"
        ref={(node) => {
          contentRef.current = node
          registerScrollRoot(node)
        }}
        onScroll={(e) => handleScroll(e as Event)}
      >
        {children}
      </div>
      <div className={_classNameTrack} ref={trackRef} data-pui-interactive="true">
        <div
          className="ScrollContainer__thumb"
          style={{
            height: `${thumbState.height}px`,
            top: `${TRACK_THUMB_INSET}px`,
            transform: `translateY(${thumbState.top}px)`,
          }}
          data-pui-interactive="true"
          onMouseDown={(e) => handleThumbMouseDown(e as MouseEvent)}
        />
      </div>
    </div>
  )
}

export const ScrollContainer = typedForwardRef<ScrollContainerProps, HTMLDivElement>(ScrollContainerComponent)
