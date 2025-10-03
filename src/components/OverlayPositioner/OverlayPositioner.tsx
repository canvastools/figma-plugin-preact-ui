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
): { coords: Coords; arrow: ArrowData } => {
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
      return { coords: { left, top }, arrow: c.arrow }
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
  const [internalOpen, setInternalOpen] = useState<boolean>(defaultOpen)
  const isControlled = typeof open === "boolean"
  const isOpen = isControlled ? (open as boolean) : internalOpen
  const rafRef = useRef<number | null>(null)

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
        placementFallback && Array.isArray(placementFallback)
          ? placementFallback
          : false,
        paddingX,
        paddingY,
        edgePadding,
        8
      )
      setCoords(result.coords)
      setArrowData(result.arrow)
      setIsReady(true)
    },
    [
      anchorRef,
      placement,
      paddingX,
      paddingY,
      edgePadding,
      Array.isArray(placementFallback)
        ? placementFallback.join(",")
        : String(placementFallback ?? "default"),
    ]
  )

  useLayoutEffect(() => {
    if (isOpen) {
      setIsReady(false)
      recompute()
    }
  }, [isOpen, recompute])

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
      } catch {}
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
      if (!insideOverlay && !insideAnchor) {
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
      const onEnterAnchor = () => setInternalOpen(true)
      const onLeaveAnchor = () => setInternalOpen(false)
      const onEnterOverlay = () => setInternalOpen(false)

      anchorEl.addEventListener("mouseenter", onEnterAnchor)
      anchorEl.addEventListener("mouseleave", onLeaveAnchor)

      const overlayEl = containerRef.current
      overlayEl?.addEventListener("mouseenter", onEnterOverlay)

      return () => {
        anchorEl.removeEventListener("mouseenter", onEnterAnchor)
        anchorEl.removeEventListener("mouseleave", onLeaveAnchor)
        overlayEl?.removeEventListener("mouseenter", onEnterOverlay)
      }
    }
  }, [isControlled, trigger, anchorRef])

  const style: preact.JSX.CSSProperties = {
    top: `${coords.top}px`,
    left: `${coords.left}px`,
    visibility: isReady ? "visible" : "hidden",
    pointerEvents: isReady ? undefined : "none",
  }

  const _className = bem("OverlayPositioner", undefined, {
    placement,
  })

  if (!isOpen) return null

  const arrowComponent = (() => {
    if (!arrow || !isReady || !arrowData) return null
    const styleArrow: preact.JSX.CSSProperties = {
      position: "absolute",
      left: `${arrowData.left}px`,
      top: `${arrowData.top}px`,
    }
    return <div className="OverlayPositioner__arrow" style={styleArrow}></div>
  })()

  const content = (
    <div
      className={[_className, className].join(" ").trim()}
      ref={containerRef}
      style={style}
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
