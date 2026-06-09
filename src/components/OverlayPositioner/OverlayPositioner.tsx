import { createPortal } from 'preact/compat'

import { bem, typedForwardRef } from '../../utils'

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'preact/hooks'

import type { OverlayPositionerProps, OverlayPositionerPlacement } from './OverlayPositioner.types'
import './OverlayPositioner.scss'

type Coords = { top: number; left: number }
type ArrowSide = 'top' | 'bottom' | 'left' | 'right'
type ArrowData = { left: number; top: number; side: ArrowSide }

const computePlacement = (
  vw: number,
  vh: number,
  rect: DOMRect,
  w: number,
  h: number,
  placement: OverlayPositionerPlacement,
  placementFallback: OverlayPositionerPlacement[] | undefined,
  offsetX: number,
  offsetY: number,
  offsetEdge: number,
  arrowSize: number,
): { coords: Coords; arrow: ArrowData; placement: string } => {
  const candidates: string[] = [placement]
  if (placementFallback && Array.isArray(placementFallback)) {
    for (const p of placementFallback) candidates.push(p)
  }

  const fits = (left: number, top: number) => {
    return left >= offsetEdge && top >= offsetEdge && left + w <= vw - offsetEdge && top + h <= vh - offsetEdge
  }

  const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, Math.round(val)))

  const computeFor = (p: string): { coords: Coords; arrow: ArrowData } => {
    switch (p) {
      case 'over': {
        const left = Math.max(offsetEdge, Math.min(vw - w - offsetEdge, Math.round(rect.left + offsetX)))
        const top = Math.max(offsetEdge, Math.min(vh - h - offsetEdge, Math.round(rect.top + offsetY)))
        return {
          coords: { left, top },
          arrow: { left: 0, top: 0, side: 'top' },
        }
      }
      case 'top': {
        const left = Math.max(
          offsetEdge,
          Math.min(vw - w - offsetEdge, Math.round(rect.left + rect.width / 2 - w / 2 + offsetX)),
        )
        const top = rect.top - h - offsetY
        const arrowLeft = clamp(rect.left + rect.width / 2 - left, arrowSize, w - arrowSize)
        return {
          coords: { left, top },
          arrow: { left: arrowLeft, top: h, side: 'top' },
        }
      }
      case 'top-left': {
        const left = Math.max(offsetEdge, Math.min(vw - w - offsetEdge, Math.round(rect.left + offsetX)))
        const top = rect.top - h - offsetY
        const arrowLeft = clamp(rect.left - left + rect.width / 2, arrowSize, w - arrowSize)
        return {
          coords: { left, top },
          arrow: { left: arrowLeft, top: h, side: 'top' },
        }
      }
      case 'top-right': {
        const left = Math.max(offsetEdge, Math.min(vw - w - offsetEdge, Math.round(rect.right - w - offsetX)))
        const top = rect.top - h - offsetY
        const arrowLeft = clamp(rect.left - left + rect.width / 2, arrowSize, w - arrowSize)
        return {
          coords: { left, top },
          arrow: { left: arrowLeft, top: h, side: 'top' },
        }
      }
      case 'bottom': {
        const left = Math.max(
          offsetEdge,
          Math.min(vw - w - offsetEdge, Math.round(rect.left + rect.width / 2 - w / 2 + offsetX)),
        )
        const top = rect.bottom + offsetY
        const arrowLeft = clamp(rect.left - left + rect.width / 2, arrowSize, w - arrowSize)
        return {
          coords: { left, top },
          arrow: { left: arrowLeft, top: 0, side: 'bottom' },
        }
      }
      case 'bottom-left': {
        const left = Math.max(offsetEdge, Math.min(vw - w - offsetEdge, Math.round(rect.left + offsetX)))
        const top = rect.bottom + offsetY
        const arrowLeft = clamp(rect.left - left + rect.width / 2, arrowSize, w - arrowSize)
        return {
          coords: { left, top },
          arrow: { left: arrowLeft, top: 0, side: 'bottom' },
        }
      }
      case 'bottom-right': {
        const left = Math.max(offsetEdge, Math.min(vw - w - offsetEdge, Math.round(rect.right - w - offsetX)))
        const top = rect.bottom + offsetY
        const arrowLeft = clamp(rect.left - left + rect.width / 2, arrowSize, w - arrowSize)
        return {
          coords: { left, top },
          arrow: { left: arrowLeft, top: 0, side: 'bottom' },
        }
      }
      case 'left': {
        const left = rect.left - w - offsetX
        const top = Math.max(
          offsetEdge,
          Math.min(vh - h - offsetEdge, Math.round(rect.top + rect.height / 2 - h / 2 + offsetY)),
        )
        const arrowTop = clamp(rect.top - top + rect.height / 2, arrowSize, h - arrowSize)
        return {
          coords: { left, top },
          arrow: { left: w, top: arrowTop, side: 'left' },
        }
      }
      case 'left-top': {
        const left = rect.left - w - offsetX
        const top = Math.max(offsetEdge, Math.min(vh - h - offsetEdge, Math.round(rect.top + offsetY)))
        const arrowTop = clamp(rect.top - top + rect.height / 2, arrowSize, h - arrowSize)
        return {
          coords: { left, top },
          arrow: { left: w, top: arrowTop, side: 'left' },
        }
      }
      case 'left-bottom': {
        const left = rect.left - w - offsetX
        const top = Math.max(offsetEdge, Math.min(vh - h - offsetEdge, Math.round(rect.bottom - h - offsetY)))
        const arrowTop = clamp(rect.top - top + rect.height / 2, arrowSize, h - arrowSize)
        return {
          coords: { left, top },
          arrow: { left: w, top: arrowTop, side: 'left' },
        }
      }
      case 'right': {
        const left = rect.right + offsetX
        const top = Math.max(
          offsetEdge,
          Math.min(vh - h - offsetEdge, Math.round(rect.top + rect.height / 2 - h / 2 + offsetY)),
        )
        const arrowTop = clamp(rect.top - top + rect.height / 2, arrowSize, h - arrowSize)
        return {
          coords: { left, top },
          arrow: { left: 0, top: arrowTop, side: 'right' },
        }
      }
      case 'right-top': {
        const left = rect.right + offsetX
        const top = Math.max(offsetEdge, Math.min(vh - h - offsetEdge, Math.round(rect.top + offsetY)))
        const arrowTop = clamp(rect.top - top + rect.height / 2, arrowSize / 2, h - arrowSize)
        return {
          coords: { left, top },
          arrow: { left: 0, top: arrowTop, side: 'right' },
        }
      }
      case 'right-bottom': {
        const left = rect.right + offsetX
        const top = Math.max(offsetEdge, Math.min(vh - h - offsetEdge, Math.round(rect.bottom - h - offsetY)))
        const arrowTop = clamp(rect.top - top + rect.height / 2, arrowSize, h - arrowSize)
        return {
          coords: { left, top },
          arrow: { left: 0, top: arrowTop, side: 'right' },
        }
      }
      default: {
        const left = Math.max(offsetEdge, Math.min(vw - w - offsetEdge, Math.round(rect.left + rect.width / 2 - w / 2)))
        const top = rect.bottom + offsetY
        const arrowLeft = clamp(rect.left - left + rect.width / 2, arrowSize, w - arrowSize)
        return {
          coords: { left, top },
          arrow: { left: arrowLeft, top: h, side: 'bottom' },
        }
      }
    }
  }

  for (const p of candidates) {
    const c = computeFor(p)
    if (!placementFallback || fits(c.coords.left, c.coords.top)) {
      const left = Math.max(offsetEdge, Math.min(vw - w - offsetEdge, Math.round(c.coords.left)))
      const top = Math.max(offsetEdge, Math.min(vh - h - offsetEdge, Math.round(c.coords.top)))
      return { coords: { left, top }, arrow: c.arrow, placement: p }
    }
  }

  const first = computeFor(candidates[0])
  return {
    coords: {
      left: Math.max(offsetEdge, Math.min(vw - w - offsetEdge, Math.round(first.coords.left))),
      top: Math.max(offsetEdge, Math.min(vh - h - offsetEdge, Math.round(first.coords.top))),
    },
    arrow: first.arrow,
    placement: candidates[0],
  }
}

const OverlayPositionerComponent = (
  {
    id,
    className,
    anchorRef,
    placement = 'bottom',
    placementFallback,
    offsetX = 0,
    offsetY = 0,
    offsetEdge = 0,
    trigger = 'click',
    draggable = false,
    open,
    defaultOpen = false,
    closeOnClickOutside = true,
    autoReposition = false,
    onOpen,
    onClose,
    children,
  }: OverlayPositionerProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [coords, setCoords] = useState<Coords>({ top: 0, left: 0 })
  const [isReady, setIsReady] = useState<boolean>(false)
  const [arrowData, setArrowData] = useState<ArrowData | null>(null)
  const [manualPos, setManualPos] = useState<Coords | null>(null)
  const [internalOpen, setInternalOpen] = useState<boolean>(defaultOpen)
  const isControlled = typeof open === 'boolean'
  const isOpen = isControlled ? (open as boolean) : internalOpen
  const [appliedPlacement, setAppliedPlacement] = useState<string>(placement)
  const rafRef = useRef<number | null>(null)
  const isDraggingRef = useRef(false)

  const resolvedPlacementFallback = useMemo<OverlayPositionerPlacement[] | undefined>(
    () => (placementFallback && Array.isArray(placementFallback) ? placementFallback : undefined),
    [placementFallback],
  )

  const recompute = useCallback(() => {
    const vw = window.innerWidth
    const vh = window.innerHeight
    const anchorEl = anchorRef.current as HTMLElement | null
    if (!anchorEl) return
    const rect = anchorEl.getBoundingClientRect()
    const el = containerRef.current
    const measured = el?.getBoundingClientRect()
    const w = Math.round(measured?.width || 0)
    let h = Math.round(measured?.height || 0)
    if (!w || !h) {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        recompute()
      })
      return
    }

    // Detect clipped/scrollable overflow anywhere in the overlay tree.
    // When content is constrained (e.g. PopoverContainer with constrainHeight
    // wrapping a ScrollContainer that scrolls internally), the outer box stays
    // capped, so we add back the largest hidden amount to reconstruct the
    // natural content height. computePlacement then picks a position that
    // maximises the visible area.
    if (el) {
      const findOverflow = (node: HTMLElement, depth: number): number => {
        let max = node.scrollHeight - node.clientHeight
        if (max < 0) max = 0
        if (depth >= 6) return max
        for (let i = 0; i < node.children.length; i++) {
          const v = findOverflow(node.children[i] as HTMLElement, depth + 1)
          if (v > max) max = v
        }
        return max
      }
      const overflow = findOverflow(el, 0)
      if (overflow > 1) h += overflow
    }

    // Compute coords and arrow using placement + fallback rules
    const result = computePlacement(vw, vh, rect, w, h, placement, resolvedPlacementFallback, offsetX, offsetY, offsetEdge, 8)
    setCoords(result.coords)
    setArrowData(result.arrow)
    setAppliedPlacement(result.placement)
    setIsReady(true)
  }, [anchorRef, placement, offsetX, offsetY, offsetEdge, resolvedPlacementFallback])

  const reposition = useCallback(() => {
    setManualPos(null)
    recompute()
  }, [recompute])

  useLayoutEffect(() => {
    if (isOpen) {
      setIsReady(false)
      recompute()
    }
  }, [isOpen, recompute])

  // Reset manual drag position whenever overlay closes
  useEffect(() => {
    if (!isOpen) setManualPos(null)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const onWin = () => recompute()
    window.addEventListener('resize', onWin)
    window.addEventListener('scroll', onWin, true)

    // Coalesce reposition triggers into a single rAF so that a burst of
    // resize / mutation callbacks (which can cascade as available-height and
    // max-height settle) results in just one recompute per frame.
    let scheduled: number | null = null
    const scheduleReposition = () => {
      if (isDraggingRef.current) return
      if (scheduled != null) return
      scheduled = requestAnimationFrame(() => {
        scheduled = null
        if (!isDraggingRef.current) reposition()
      })
    }

    // Recompute when overlay content resizes (fonts, images, content shrinking
    // back below the cap) and when its subtree mutates (content toggled). The
    // MutationObserver is required because, once the overlay is capped by
    // max-height, growing content no longer changes the observed box size, so a
    // ResizeObserver alone would never fire.
    const el = containerRef.current
    let ro: ResizeObserver | null = null
    let mo: MutationObserver | null = null
    if (autoReposition && el) {
      try {
        ro = new ResizeObserver(scheduleReposition)
        ro.observe(el)
      } catch {
        // ResizeObserver not supported; skip observing overlay size
      }
      try {
        mo = new MutationObserver(scheduleReposition)
        mo.observe(el, { childList: true, subtree: true, characterData: true })
      } catch {
        // MutationObserver not supported; skip observing overlay mutations
      }
    }

    return () => {
      window.removeEventListener('resize', onWin)
      window.removeEventListener('scroll', onWin, true)
      if (ro) ro.disconnect()
      if (mo) mo.disconnect()
      if (scheduled != null) cancelAnimationFrame(scheduled)
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [isOpen, recompute, autoReposition, reposition])

  const wasOpenRef = useRef<boolean>(false)
  useEffect(() => {
    if (isOpen && !wasOpenRef.current) {
      wasOpenRef.current = true
      onOpen?.()
    } else if (!isOpen && wasOpenRef.current) {
      wasOpenRef.current = false
      if (isControlled) return
      onClose?.()
    }
  }, [isControlled, isOpen, onClose, onOpen])

  useEffect(() => {
    if (!isOpen || !closeOnClickOutside) return

    const handler = (e: MouseEvent) => {
      const target = e.target as Node | null
      const overlay = containerRef.current
      const anchorEl = anchorRef.current as HTMLElement | null
      if (!overlay || !target || !anchorEl) return

      // Manually blur focused text inputs when clicking anywhere outside of them,
      // even if the click is inside the overlay or on the anchor. This avoids
      // preventDefault() on draggable/popover triggers from keeping inputs focused.
      const activeEl = document.activeElement as HTMLElement | null
      if (activeEl && activeEl !== target) {
        const clickedInsideActive = activeEl.contains(target) || activeEl === (target as HTMLElement)
        const isTextLikeInput = activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable

        if (!clickedInsideActive && isTextLikeInput) {
          activeEl.blur()
        }
      }

      const insideOverlay = overlay.contains(target)
      const insideAnchor = anchorEl.contains(target as Node)

      if (insideOverlay || insideAnchor) return

      if ((target as HTMLElement).closest?.('[data-overlay-keep-open]')) return

      // If the click landed inside another OverlayPositioner, only stay open
      // when that overlay is a descendant (its anchor lives inside our
      // container).  Clicks inside an ancestor overlay that contains our
      // anchor should still close us.
      const clickedOverlay = (target as HTMLElement)?.closest ? (target as HTMLElement).closest('.OverlayPositioner') : null
      if (clickedOverlay && !clickedOverlay.contains(anchorEl)) return

      if (isControlled) onClose?.()
      else setInternalOpen(false)
    }

    window.addEventListener('mousedown', handler, true)

    return () => window.removeEventListener('mousedown', handler, true)
  }, [isOpen, closeOnClickOutside, anchorRef, isControlled, onClose])

  useEffect(() => {
    if (isControlled) return

    const anchorEl = anchorRef.current as HTMLElement | null
    if (!anchorEl) return

    if (trigger === 'click') {
      const onClick = (e: MouseEvent) => {
        e.preventDefault()
        setInternalOpen((v) => !v)
      }

      anchorEl.addEventListener('click', onClick)

      return () => anchorEl.removeEventListener('click', onClick)
    }

    if (trigger === 'hover') {
      const onEnterAnchor = () => {
        setInternalOpen(true)
      }
      const onLeaveAnchor = () => {
        setInternalOpen(false)
      }

      anchorEl.addEventListener('mouseenter', onEnterAnchor)
      anchorEl.addEventListener('mouseleave', onLeaveAnchor)

      return () => {
        anchorEl.removeEventListener('mouseenter', onEnterAnchor)
        anchorEl.removeEventListener('mouseleave', onLeaveAnchor)
      }
    }
  }, [isControlled, trigger, anchorRef])

  const effectiveTop = (manualPos ? manualPos.top : coords.top) || 0
  const effectiveLeft = (manualPos ? manualPos.left : coords.left) || 0

  type OverlayPositionerStyle = preact.JSX.CSSProperties & {
    '--overlay-arrow-left'?: string
    '--overlay-arrow-top'?: string
    '--overlay-available-height'?: string
  }

  const style: OverlayPositionerStyle = {
    top: `${effectiveTop}px`,
    left: `${effectiveLeft}px`,
    visibility: isReady ? 'visible' : 'hidden',
    pointerEvents: isReady ? undefined : 'none',
  }

  // Expose computed arrow coordinates via CSS variables so that
  // popover / tooltip containers can position their arrow elements
  // relative to the overlay content without needing direct access
  // to layout calculations.
  if (arrowData) {
    style['--overlay-arrow-left'] = `${arrowData.left}px`
    style['--overlay-arrow-top'] = `${arrowData.top}px`
  }

  const availableHeight =
    typeof window !== 'undefined' ? Math.max(window.innerHeight - effectiveTop - offsetEdge, 100) : undefined
  if (availableHeight != null) {
    style['--overlay-available-height'] = `${availableHeight}px`
  }

  const _className = bem('OverlayPositioner', undefined, {
    placement: appliedPlacement,
  })

  if (!isOpen) return null

  const isInteractiveElement = (node: HTMLElement | null): boolean => {
    if (!node) return false
    const container = containerRef.current
    let el: HTMLElement | null = node
    const interactiveSelector = [
      'button',
      'input',
      'select',
      'textarea',
      'a[href]',
      'canvas',
      'video',
      'audio',
      "[data-pui-interactive='true']",
    ].join(',')
    if ((node as HTMLElement).closest && (node as HTMLElement).closest(interactiveSelector)) {
      return true
    }
    // Walk up until container to detect tabbable ancestors
    while (el && container && el !== container) {
      const ti = el.getAttribute && el.getAttribute('tabindex')
      if (ti != null && ti !== '' && !Number.isNaN(Number(ti)) && Number(ti) >= 0) {
        return true
      }
      el = el.parentElement
    }
    return false
  }

  const handleMouseDown = (e: MouseEvent) => {
    if (!draggable) return
    if (e.button !== 0) return
    const target = e.target as HTMLElement | null
    if (isInteractiveElement(target)) return
    e.preventDefault()
    isDraggingRef.current = true
    const startLeft = manualPos ? manualPos.left : coords.left
    const startTop = manualPos ? manualPos.top : coords.top
    const startMouseX = e.clientX
    const startMouseY = e.clientY
    const onMove = (ev: MouseEvent) => {
      const dx = ev.clientX - startMouseX
      const dy = ev.clientY - startMouseY
      setManualPos({ left: startLeft + dx, top: startTop + dy })
    }
    const onUp = () => {
      isDraggingRef.current = false
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  const content = (
    <div
      id={id}
      className={[_className, className].join(' ').trim()}
      ref={(node) => {
        containerRef.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) (ref as preact.RefObject<HTMLDivElement | null>).current = node
      }}
      style={style}
      data-arrow-side={arrowData?.side}
      onMouseDown={(e) => handleMouseDown(e as unknown as MouseEvent)}
    >
      {children}
    </div>
  )

  return createPortal(content, document.body)
}

export const OverlayPositioner = typedForwardRef<OverlayPositionerProps, HTMLDivElement>(OverlayPositionerComponent)
