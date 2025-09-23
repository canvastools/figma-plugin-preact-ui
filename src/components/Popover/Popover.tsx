import { bem, typedForwardRef } from "../../utils"
import { createPortal } from "preact/compat"
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "preact/hooks"

import type { PopoverProps } from "./Popover.types"
import "./Popover.scss"

/* --- */

type Coords = { top: number; left: number }

const computePosition = (
  viewportWidth: number,
  viewportHeight: number,
  anchorRect: DOMRect | null,
  preferred: "auto" | "left" | "right",
  popoverWidth: number,
  popoverHeight: number,
  offsetX: number,
  offsetY: number
): Coords => {
  const rect = anchorRect
  const spaceLeft = rect ? rect.left : 0
  const spaceRight = rect ? viewportWidth - rect.right : viewportWidth

  // Determine horizontal side
  let side: "left" | "right"
  if (preferred === "left" || preferred === "right") {
    side = preferred
  } else {
    if (popoverWidth <= viewportWidth) {
      if (rect && spaceRight >= popoverWidth) side = "right"
      else if (rect && spaceLeft >= popoverWidth) side = "left"
      else side = spaceRight >= spaceLeft ? "right" : "left"
    } else {
      side = spaceRight >= spaceLeft ? "right" : "left"
    }
  }

  // Horizontal coordinate
  let left = 0
  if (rect) {
    left =
      side === "right"
        ? rect.right + offsetX
        : rect.left - popoverWidth - offsetX
  } else {
    left = 0
  }

  if (popoverWidth <= viewportWidth) {
    left = Math.max(0, Math.min(viewportWidth - popoverWidth, left))
  } else {
    left = side === "right" ? 0 : viewportWidth - popoverWidth
  }

  // Vertical coordinate
  const edgePadding = 8
  let top = 0
  if (popoverHeight > viewportHeight) {
    // If popover is taller than viewport, keep 8px from the top edge
    top = edgePadding
  } else if (rect && viewportHeight - rect.top >= popoverHeight) {
    // Enough space below top edge of trigger -> align top edges + offset
    top = rect.top + offsetY
  } else {
    // Snap to bottom of viewport, keep 8px gap
    top = viewportHeight - popoverHeight - edgePadding
  }
  if (popoverHeight <= viewportHeight) {
    const minTop = edgePadding
    const maxTop = viewportHeight - popoverHeight
    top = Math.max(minTop, Math.min(maxTop, top))
  }

  return { top, left }
}

const PopoverComponent = (
  {
    className,
    open,
    anchor,
    position = "auto",
    width = 200,
    height,
    offsetX = 8,
    offsetY = 0,
    children,
    onClose,
    onOpen,
    ...rest
  }: PopoverProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mergedRef = (node: HTMLDivElement | null) => {
    containerRef.current = node
    if (typeof ref === "function") ref(node)
    else if (ref) (ref as preact.RefObject<HTMLDivElement>).current = node
  }

  const isOpen = open !== undefined ? open : Boolean(anchor)

  const [measured, setMeasured] = useState({
    width: width,
    height: height ?? 0,
  })

  const [coords, setCoords] = useState<Coords>({ top: 0, left: 0 })

  const _className = bem("Popover", undefined, { position })

  // Measure popover size when open and when content changes
  useLayoutEffect(() => {
    if (!isOpen) return
    const el = containerRef.current

    if (!el) return

    const ro = new ResizeObserver(() => {
      const rect = el.getBoundingClientRect()
      setMeasured((prev) => ({
        width: prev.width,
        height: height ?? Math.round(rect.height),
      }))
    })

    ro.observe(el)

    // initial measure in case RO hasn't fired yet
    const rect = el.getBoundingClientRect()

    setMeasured((prev) => ({
      width: prev.width,
      height: height ?? Math.round(rect.height),
    }))

    return () => ro.disconnect()
  }, [isOpen, height])

  // Recompute position on open, resize, scroll, or measure change
  const recompute = useMemo(
    () => () => {
      if (!isOpen) return

      const vw = window.innerWidth
      const vh = window.innerHeight
      const rect = anchor ? anchor.getBoundingClientRect() : null
      const dims = {
        w: width,
        h: (height ?? measured.height) || 0,
      }

      const next = computePosition(
        vw,
        vh,
        rect,
        position,
        Math.round(dims.w),
        Math.round(dims.h),
        offsetX,
        offsetY
      )

      setCoords(next)
    },
    [isOpen, anchor, width, height, measured.height, position, offsetX, offsetY]
  )

  useLayoutEffect(() => {
    recompute()
  }, [recompute])

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

  // onOpen / onClose side effects
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

  // Outside click handler
  useEffect(() => {
    if (!isOpen) return

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as Node | null
      const el = containerRef.current

      if (!target || !el) return

      const insidePopover = el.contains(target)
      const insideAnchor = anchor ? anchor.contains(target as Node) : false

      if (!insidePopover && !insideAnchor) onClose?.()
    }

    window.addEventListener("mousedown", handleMouseDown, true)

    return () => window.removeEventListener("mousedown", handleMouseDown, true)
  }, [isOpen, anchor, onClose])

  if (!isOpen) return <></>

  const style: preact.JSX.CSSProperties = {
    position: "fixed",
    width,
    height,
    top: `${coords.top}px`,
    left: `${coords.left}px`,
  }

  const content = (
    <div
      className={[_className, className].join(" ").trim()}
      ref={mergedRef}
      {...rest}
      style={style}
    >
      {children}
    </div>
  )

  return createPortal(content, document.body)
}

export const Popover = typedForwardRef<PopoverProps, HTMLDivElement>(
  PopoverComponent
)
