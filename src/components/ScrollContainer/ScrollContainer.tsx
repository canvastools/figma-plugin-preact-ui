import { useCallback, useEffect, useRef, useState } from 'preact/hooks'

import { bem, typedForwardRef } from '../../utils'

import type { ScrollContainerProps } from './ScrollContainer.types'
import './ScrollContainer.scss'

import { useScrollContext } from '../../index'

/* --- */

const ScrollContainerComponent = (
  { id, className, children, ...rest }: ScrollContainerProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  let scrollContext: ReturnType<typeof useScrollContext> | undefined
  try {
    scrollContext = useScrollContext()
  } catch {
    scrollContext = undefined
  }

  const [localPositionY, setLocalPositionY] = useState<number | undefined>(undefined)
  const [localIsAtTop, setLocalIsAtTop] = useState<boolean>(true)
  const [localIsAtBottom, setLocalIsAtBottom] = useState<boolean>(false)

  const positionY = scrollContext && typeof scrollContext.positionY === 'number' ? scrollContext.positionY : localPositionY
  const isAtTop = scrollContext ? scrollContext.isAtTop : localIsAtTop
  const isAtBottom = scrollContext ? scrollContext.isAtBottom : localIsAtBottom
  const registerScrollRoot =
    scrollContext?.registerScrollRoot ??
    ((_: HTMLElement | null) => {
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

  // positionY controlled scroll sync (declared after scheduleRecomputeThumb to satisfy lints)

  const _className = bem('ScrollContainer', undefined, undefined)

  const recomputeThumb = useCallback(() => {
    const el = contentRef.current
    const track = trackRef.current
    if (!el || !track) return

    const maxScrollTop = Math.max(0, el.scrollHeight - el.clientHeight)
    const hasScrollable = maxScrollTop > 0
    const visibleRatio = hasScrollable ? el.clientHeight / el.scrollHeight : 1
    const trackLength = track.clientHeight - 8
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

    e.preventDefault()
    setIsDragging(true)
    isDraggingRef.current = true

    recomputeThumb()

    const startY = (e as MouseEvent).clientY
    dragOffsetRef.current = startY - (trackRef.current!.getBoundingClientRect().top + thumbState.top + 2)

    prevUserSelectRef.current = document.body.style.userSelect
    document.body.style.userSelect = 'none'

    window.addEventListener('mousemove', handleThumbMouseMove)
    window.addEventListener('mouseup', handleThumbMouseUp)
  }

  const handleThumbMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current) return

    const el = contentRef.current
    const track = trackRef.current

    if (!el || !track) return

    const maxScrollTop = Math.max(0, el.scrollHeight - el.clientHeight)

    if (maxScrollTop <= 0) return

    const trackRect = track.getBoundingClientRect()
    const y = (e as MouseEvent).clientY - trackRect.top - 2 - dragOffsetRef.current
    const trackLength = track.clientHeight - 4
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
    setIsDragging(false)
    isDraggingRef.current = false
    document.body.style.userSelect = prevUserSelectRef.current
    window.removeEventListener('mousemove', handleThumbMouseMove)
    window.removeEventListener('mouseup', handleThumbMouseUp)
  }

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
      <div className={_classNameTrack} ref={trackRef}>
        <div
          className="ScrollContainer__thumb"
          style={{
            height: `${thumbState.height}px`,
            transform: `translateY(${thumbState.top}px)`,
          }}
          onMouseDown={(e) => handleThumbMouseDown(e as MouseEvent)}
        />
      </div>
    </div>
  )
}

export const ScrollContainer = typedForwardRef<ScrollContainerProps, HTMLDivElement>(ScrollContainerComponent)
