import { bem, typedForwardRef } from "../../utils"
import { createPortal } from "preact/compat"
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "preact/hooks"

import type { OverlayPositionerProps } from "./OverlayPositioner.types"

type Coords = { top: number; left: number }

const computeOver = (
  vw: number,
  vh: number,
  rect: DOMRect | null,
  w: number,
  h: number,
  offsetX: number,
  offsetY: number,
  edgePadding: number
): Coords => {
  let left = rect ? rect.left + offsetX : 0
  let top = rect ? rect.top + offsetY : 0

  if (w <= vw)
    left = Math.max(edgePadding, Math.min(vw - w - edgePadding, left))
  else left = Math.max(0, Math.min(vw - w, left))

  if (h <= vh) top = Math.max(edgePadding, Math.min(vh - h - edgePadding, top))
  else top = edgePadding

  return { top, left }
}

const computeX = (
  vw: number,
  vh: number,
  rect: DOMRect | null,
  w: number,
  h: number,
  offsetX: number,
  offsetY: number,
  edgePadding: number
): Coords => {
  const spaceLeft = rect ? rect.left : 0
  const spaceRight = rect ? vw - (rect as DOMRect).right : vw
  const side = spaceRight >= spaceLeft ? "right" : "left"

  let left = 0
  if (rect)
    left = side === "right" ? rect.right + offsetX : rect.left - w - offsetX
  left = Math.max(edgePadding, Math.min(vw - w - edgePadding, left))

  let top = 0
  if (rect && vh - rect.top >= h) top = rect.top + offsetY
  else top = vh - h - edgePadding

  top = Math.max(edgePadding, Math.min(vh - h - edgePadding, top))
  return { top, left }
}

const computeY = (
  vw: number,
  vh: number,
  rect: DOMRect | null,
  w: number,
  h: number,
  offsetX: number,
  offsetY: number,
  edgePadding: number
): Coords => {
  const spaceTop = rect ? rect.top : vh
  const spaceBottom = rect ? vh - (rect as DOMRect).bottom : vh
  const side = spaceBottom >= spaceTop ? "bottom" : "top"

  let top = 0
  if (rect)
    top =
      side === "bottom"
        ? (rect as DOMRect).bottom + offsetY
        : rect.top - h - offsetY

  if (h <= vh) top = Math.max(edgePadding, Math.min(vh - h - edgePadding, top))
  else top = edgePadding

  let left = rect ? rect.left + offsetX : 0
  if (w <= vw)
    left = Math.max(edgePadding, Math.min(vw - w - edgePadding, left))
  else left = Math.max(0, Math.min(vw - w, left))

  return { top, left }
}

const OverlayPositionerComponent = ({
  className,
  anchorRef,
  placement = "x",
  offsetX = 8,
  offsetY = 8,
  edgePadding = 8,
  open,
  defaultOpen = false,
  closeOnOutsideClick = true,
  onOpen,
  onClose,
  children,
}: OverlayPositionerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [coords, setCoords] = useState<Coords>({ top: 0, left: 0 })
  const [internalOpen, setInternalOpen] = useState<boolean>(defaultOpen)
  const isControlled = typeof open === "boolean"
  const isOpen = isControlled ? (open as boolean) : internalOpen

  const recompute = useMemo(
    () => () => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      const anchorEl = anchorRef.current as HTMLElement | null
      if (!anchorEl) return
      const rect = anchorEl.getBoundingClientRect()
      const calc =
        placement === "over"
          ? computeOver
          : placement === "x"
          ? computeX
          : computeY
      const measured = containerRef.current?.getBoundingClientRect()
      const w = Math.round(measured?.width || 0)
      const h = Math.round(measured?.height || 0)
      setCoords(calc(vw, vh, rect, w, h, offsetX, offsetY, edgePadding))
    },
    [anchorRef, placement, offsetX, offsetY, edgePadding]
  )

  useLayoutEffect(() => {
    if (isOpen) recompute()
  }, [isOpen, recompute])

  useEffect(() => {
    if (!isOpen) return

    const onWin = () => recompute()
    window.addEventListener("resize", onWin)
    window.addEventListener("scroll", onWin, true)

    return () => {
      window.removeEventListener("resize", onWin)
      window.removeEventListener("scroll", onWin, true)
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

    const toggle = (e: MouseEvent) => {
      e.preventDefault()
      setInternalOpen((v) => !v)
    }

    const anchorEl = anchorRef.current as HTMLElement | null
    if (!anchorEl) return
    anchorEl.addEventListener("click", toggle)

    return () => anchorEl.removeEventListener("click", toggle)
  }, [isControlled, anchorRef])

  const style: preact.JSX.CSSProperties = {
    position: "fixed",
    top: `${coords.top}px`,
    left: `${coords.left}px`,
  }

  const _className = bem("OverlayPositioner", undefined, undefined)

  if (!isOpen) return null

  const content = (
    <div
      className={[_className, className].join(" ").trim()}
      ref={containerRef}
      style={style}
    >
      {children}
    </div>
  )

  return createPortal(content, document.body)
}

export const OverlayPositioner = typedForwardRef<
  OverlayPositionerProps,
  HTMLDivElement
>(OverlayPositionerComponent)
