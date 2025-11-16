import { bem, typedForwardRef } from "../../utils"
import { createPortal } from "preact/compat"
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "preact/hooks"
import "./OverlayPositioner.scss"

import type { OverlayPositionerProps } from "./OverlayPositioner.types"

type Coords = { top: number; left: number }
type ArrowSide = "top" | "bottom" | "left" | "right"
type ArrowData = { left: number; top: number; side: ArrowSide }

const computePlacement = (
  vw: number,
  vh: number,
  rect: DOMRect,
  w: number,
  h: number,
  placement: string,
  placementFallback: false | string[] | undefined,
  paddingX: number,
  paddingY: number,
  edgePadding: number,
  arrowSize: number
): { coords: Coords; arrow: ArrowData; placement: string } => {
  const candidates: string[] = [placement]
  if (placementFallback && Array.isArray(placementFallback)) {
    for (const p of placementFallback) candidates.push(p)
  }

  const fits = (left: number, top: number) => {
    return (
      left >= edgePadding &&
      top >= edgePadding &&
      left + w <= vw - edgePadding &&
      top + h <= vh - edgePadding
    )
  }

  const clamp = (val: number, min: number, max: number) =>
    Math.max(min, Math.min(max, Math.round(val)))

  const computeFor = (p: string): { coords: Coords; arrow: ArrowData } => {
    switch (p) {
      case "over": {
        const left = Math.max(
          edgePadding,
          Math.min(vw - w - edgePadding, Math.round(rect.left + paddingX))
        )
        const top = Math.max(
          edgePadding,
          Math.min(vh - h - edgePadding, Math.round(rect.top + paddingY))
        )
        return {
          coords: { left, top },
          arrow: { left: 0, top: 0, side: "top" },
        }
      }
      case "top": {
        const left = Math.max(
          edgePadding,
          Math.min(
            vw - w - edgePadding,
            Math.round(rect.left + rect.width / 2 - w / 2 + paddingX)
          )
        )
        const top = rect.top - h - paddingY
        const arrowLeft = clamp(
          rect.left + rect.width / 2 - left,
          arrowSize,
          w - arrowSize
        )
        return {
          coords: { left, top },
          arrow: { left: arrowLeft, top: h, side: "top" },
        }
      }
      case "top-left": {
        const left = Math.max(
          edgePadding,
          Math.min(vw - w - edgePadding, Math.round(rect.left + paddingX))
        )
        const top = rect.top - h - paddingY
        const arrowLeft = clamp(
          rect.left - left + rect.width / 2,
          arrowSize,
          w - arrowSize
        )
        return {
          coords: { left, top },
          arrow: { left: arrowLeft, top: h, side: "top" },
        }
      }
      case "top-right": {
        const left = Math.max(
          edgePadding,
          Math.min(vw - w - edgePadding, Math.round(rect.right - w - paddingX))
        )
        const top = rect.top - h - paddingY
        const arrowLeft = clamp(
          rect.left - left + rect.width / 2,
          arrowSize,
          w - arrowSize
        )
        return {
          coords: { left, top },
          arrow: { left: arrowLeft, top: h, side: "top" },
        }
      }
      case "bottom": {
        const left = Math.max(
          edgePadding,
          Math.min(
            vw - w - edgePadding,
            Math.round(rect.left + rect.width / 2 - w / 2 + paddingX)
          )
        )
        const top = rect.bottom + paddingY
        const arrowLeft = clamp(
          rect.left - left + rect.width / 2,
          arrowSize,
          w - arrowSize
        )
        return {
          coords: { left, top },
          arrow: { left: arrowLeft, top: 0, side: "bottom" },
        }
      }
      case "bottom-left": {
        const left = Math.max(
          edgePadding,
          Math.min(vw - w - edgePadding, Math.round(rect.left + paddingX))
        )
        const top = rect.bottom + paddingY
        const arrowLeft = clamp(
          rect.left - left + rect.width / 2,
          arrowSize,
          w - arrowSize
        )
        return {
          coords: { left, top },
          arrow: { left: arrowLeft, top: 0, side: "bottom" },
        }
      }
      case "bottom-right": {
        const left = Math.max(
          edgePadding,
          Math.min(vw - w - edgePadding, Math.round(rect.right - w - paddingX))
        )
        const top = rect.bottom + paddingY
        const arrowLeft = clamp(
          rect.left - left + rect.width / 2,
          arrowSize,
          w - arrowSize
        )
        return {
          coords: { left, top },
          arrow: { left: arrowLeft, top: 0, side: "bottom" },
        }
      }
      case "left": {
        const left = rect.left - w - paddingX
        const top = Math.max(
          edgePadding,
          Math.min(
            vh - h - edgePadding,
            Math.round(rect.top + rect.height / 2 - h / 2 + paddingY)
          )
        )
        const arrowTop = clamp(
          rect.top - top + rect.height / 2,
          arrowSize,
          h - arrowSize
        )
        return {
          coords: { left, top },
          arrow: { left: w, top: arrowTop, side: "left" },
        }
      }
      case "left-top": {
        const left = rect.left - w - paddingX
        const top = Math.max(
          edgePadding,
          Math.min(vh - h - edgePadding, Math.round(rect.top + paddingY))
        )
        const arrowTop = clamp(
          rect.top - top + rect.height / 2,
          arrowSize,
          h - arrowSize
        )
        return {
          coords: { left, top },
          arrow: { left: w, top: arrowTop, side: "left" },
        }
      }
      case "left-bottom": {
        const left = rect.left - w - paddingX
        const top = Math.max(
          edgePadding,
          Math.min(vh - h - edgePadding, Math.round(rect.bottom - h - paddingY))
        )
        const arrowTop = clamp(
          rect.top - top + rect.height / 2,
          arrowSize,
          h - arrowSize
        )
        return {
          coords: { left, top },
          arrow: { left: w, top: arrowTop, side: "left" },
        }
      }
      case "right": {
        const left = rect.right + paddingX
        const top = Math.max(
          edgePadding,
          Math.min(
            vh - h - edgePadding,
            Math.round(rect.top + rect.height / 2 - h / 2 + paddingY)
          )
        )
        const arrowTop = clamp(
          rect.top - top + rect.height / 2,
          arrowSize,
          h - arrowSize
        )
        return {
          coords: { left, top },
          arrow: { left: 0, top: arrowTop, side: "right" },
        }
      }
      case "right-top": {
        const left = rect.right + paddingX
        const top = Math.max(
          edgePadding,
          Math.min(vh - h - edgePadding, Math.round(rect.top + paddingY))
        )
        const arrowTop = clamp(
          rect.top - top + rect.height / 2,
          arrowSize / 2,
          h - arrowSize
        )
        return {
          coords: { left, top },
          arrow: { left: 0, top: arrowTop, side: "right" },
        }
      }
      case "right-bottom": {
        const left = rect.right + paddingX
        const top = Math.max(
          edgePadding,
          Math.min(vh - h - edgePadding, Math.round(rect.bottom - h - paddingY))
        )
        const arrowTop = clamp(
          rect.top - top + rect.height / 2,
          arrowSize,
          h - arrowSize
        )
        return {
          coords: { left, top },
          arrow: { left: 0, top: arrowTop, side: "right" },
        }
      }
      default: {
        const left = Math.max(
          edgePadding,
          Math.min(
            vw - w - edgePadding,
            Math.round(rect.left + rect.width / 2 - w / 2)
          )
        )
        const top = rect.bottom + paddingY
        const arrowLeft = clamp(
          rect.left - left + rect.width / 2,
          arrowSize,
          w - arrowSize
        )
        return {
          coords: { left, top },
          arrow: { left: arrowLeft, top: h, side: "bottom" },
        }
      }
    }
  }

  for (const p of candidates) {
    const c = computeFor(p)
    if (!placementFallback || fits(c.coords.left, c.coords.top)) {
      const left = Math.max(
        edgePadding,
        Math.min(vw - w - edgePadding, Math.round(c.coords.left))
      )
      const top = Math.max(
        edgePadding,
        Math.min(vh - h - edgePadding, Math.round(c.coords.top))
      )
      return { coords: { left, top }, arrow: c.arrow, placement: p }
    }
  }

  const first = computeFor(candidates[0])
  return {
    coords: {
      left: Math.max(
        edgePadding,
        Math.min(vw - w - edgePadding, Math.round(first.coords.left))
      ),
      top: Math.max(
        edgePadding,
        Math.min(vh - h - edgePadding, Math.round(first.coords.top))
      ),
    },
    arrow: first.arrow,
    placement: candidates[0],
  }
}

const OverlayPositionerComponent = ({
  className,
  anchorRef,
  placement = "bottom",
  placementFallback,
  paddingX = 0,
  paddingY = 0,
  edgePadding = 0,
  trigger = "click",
  visibilityDelay = 0,
  draggable = false,
  open,
  defaultOpen = false,
  closeOnOutsideClick = true,
  arrow = false,
  onOpen,
  onClose,

  children,
}: OverlayPositionerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [coords, setCoords] = useState<Coords>({ top: 0, left: 0 })
  const [isReady, setIsReady] = useState<boolean>(false)
  const [arrowData, setArrowData] = useState<ArrowData | null>(null)
  const [manualPos, setManualPos] = useState<Coords | null>(null)
  const [internalOpen, setInternalOpen] = useState<boolean>(defaultOpen)
  const isControlled = typeof open === "boolean"
  const isOpen = isControlled ? (open as boolean) : internalOpen
  const [appliedPlacement, setAppliedPlacement] = useState<string>(placement)
  const rafRef = useRef<number | null>(null)
  const hoverTimerRef = useRef<number | null>(null)

  const resolvedPlacementFallback = useMemo<false | string[] | undefined>(
    () =>
      placementFallback && Array.isArray(placementFallback)
        ? placementFallback
        : false,
    [placementFallback]
  )

  const recompute = useMemo(
    () => () => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      const anchorEl = anchorRef.current as HTMLElement | null
      if (!anchorEl) return
      const rect = anchorEl.getBoundingClientRect()
      const measured = containerRef.current?.getBoundingClientRect()
      const w = Math.round(measured?.width || 0)
      const h = Math.round(measured?.height || 0)
      if (!w || !h) {
        if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null
          recompute()
        })
        return
      }

      // Compute coords and arrow using placement + fallback rules
      const result = computePlacement(
        vw,
        vh,
        rect,
        w,
        h,
        placement,
        resolvedPlacementFallback,
        paddingX,
        paddingY,
        edgePadding,
        8
      )
      setCoords(result.coords)
      setArrowData(result.arrow)
      setAppliedPlacement(result.placement)
      setIsReady(true)
    },
    [
      anchorRef,
      placement,
      paddingX,
      paddingY,
      edgePadding,
      resolvedPlacementFallback,
    ]
  )

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
    window.addEventListener("resize", onWin)
    window.addEventListener("scroll", onWin, true)

    // Recompute when overlay content resizes (fonts, images, dynamic content)
    const el = containerRef.current
    let ro: ResizeObserver | null = null
    if (el) {
      try {
        ro = new ResizeObserver(() => recompute())
        ro.observe(el)
      } catch {
        // ResizeObserver not supported; skip observing overlay size
      }
    }

    return () => {
      window.removeEventListener("resize", onWin)
      window.removeEventListener("scroll", onWin, true)
      if (ro) ro.disconnect()
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [isOpen, recompute])

  const wasOpenRef = useRef<boolean>(false)
  useEffect(() => {
    if (isOpen && !wasOpenRef.current) {
      wasOpenRef.current = true
      onOpen?.()
    } else if (!isOpen && wasOpenRef.current) {
      wasOpenRef.current = false
      onClose?.()
    }
  }, [isOpen, onOpen, onClose])

  useEffect(() => {
    if (!isOpen || !closeOnOutsideClick) return

    const handler = (e: MouseEvent) => {
      const target = e.target as Node | null
      const overlay = containerRef.current
      const anchorEl = anchorRef.current as HTMLElement | null
      if (!overlay || !target || !anchorEl) return
      const insideOverlay = overlay.contains(target)
      const insideAnchor = anchorEl.contains(target as Node)
      const insideAnyOverlay = (target as HTMLElement | null)?.closest
        ? Boolean((target as HTMLElement).closest(".OverlayPositioner"))
        : false
      if (!insideOverlay && !insideAnchor && !insideAnyOverlay) {
        if (isControlled) onClose?.()
        else setInternalOpen(false)
      }
    }

    window.addEventListener("mousedown", handler, true)

    return () => window.removeEventListener("mousedown", handler, true)
  }, [isOpen, closeOnOutsideClick, anchorRef, isControlled, onClose])

  useEffect(() => {
    if (isControlled) return

    const anchorEl = anchorRef.current as HTMLElement | null
    if (!anchorEl) return

    if (trigger === "click") {
      const onClick = (e: MouseEvent) => {
        e.preventDefault()
        setInternalOpen((v) => !v)
      }

      anchorEl.addEventListener("click", onClick)

      return () => anchorEl.removeEventListener("click", onClick)
    }

    if (trigger === "hover") {
      const clearHoverTimer = () => {
        if (hoverTimerRef.current != null) {
          clearTimeout(hoverTimerRef.current)
          hoverTimerRef.current = null
        }
      }
      const onEnterAnchor = () => {
        clearHoverTimer()
        const delay = Math.max(0, visibilityDelay)
        if (delay === 0) {
          setInternalOpen(true)
        } else {
          hoverTimerRef.current = window.setTimeout(() => {
            hoverTimerRef.current = null
            setInternalOpen(true)
          }, delay)
        }
      }
      const onLeaveAnchor = () => {
        // Hide immediately and cancel any pending show
        clearHoverTimer()
        setInternalOpen(false)
      }

      anchorEl.addEventListener("mouseenter", onEnterAnchor)
      anchorEl.addEventListener("mouseleave", onLeaveAnchor)

      return () => {
        anchorEl.removeEventListener("mouseenter", onEnterAnchor)
        anchorEl.removeEventListener("mouseleave", onLeaveAnchor)
        clearHoverTimer()
      }
    }
  }, [isControlled, trigger, anchorRef, visibilityDelay])

  const effectiveTop = (manualPos ? manualPos.top : coords.top) || 0
  const effectiveLeft = (manualPos ? manualPos.left : coords.left) || 0

  const style: preact.JSX.CSSProperties = {
    top: `${effectiveTop}px`,
    left: `${effectiveLeft}px`,
    visibility: isReady ? "visible" : "hidden",
    pointerEvents: isReady ? undefined : "none",
  }

  const _className = bem("OverlayPositioner", undefined, {
    placement: appliedPlacement,
  })

  if (!isOpen) return null

  const arrowComponent = (() => {
    if (appliedPlacement === "over") return null

    if (!arrow || !isReady || !arrowData) return null
    const styleArrow: preact.JSX.CSSProperties = {
      position: "absolute",
      left: `${arrowData.left}px`,
      top: `${arrowData.top}px`,
    }
    return <div className="OverlayPositioner__arrow" style={styleArrow}></div>
  })()

  const isInteractiveElement = (node: HTMLElement | null): boolean => {
    if (!node) return false
    const container = containerRef.current
    let el: HTMLElement | null = node
    const interactiveSelector = [
      "button",
      "input",
      "select",
      "textarea",
      "a[href]",
      "canvas",
      "video",
      "audio",
      ".no-drag",
    ].join(",")
    if (
      (node as HTMLElement).closest &&
      (node as HTMLElement).closest(interactiveSelector)
    ) {
      return true
    }
    // Walk up until container to detect tabbable ancestors
    while (el && container && el !== container) {
      const ti = el.getAttribute && el.getAttribute("tabindex")
      if (
        ti != null &&
        ti !== "" &&
        !Number.isNaN(Number(ti)) &&
        Number(ti) >= 0
      ) {
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
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
    }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)
  }

  const content = (
    <div
      className={[_className, className].join(" ").trim()}
      ref={containerRef}
      style={style}
      onMouseDown={(e) => handleMouseDown(e as unknown as MouseEvent)}
    >
      {arrowComponent}
      {children}
    </div>
  )

  return createPortal(content, document.body)
}

export const OverlayPositioner = typedForwardRef<
  OverlayPositionerProps,
  HTMLDivElement
>(OverlayPositionerComponent)
