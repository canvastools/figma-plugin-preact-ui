import { bem, typedForwardRef } from "../../utils"

import { useEffect, useRef, useState } from "preact/hooks"

import type { TooltipProps } from "./Tooltip.types"
import "./Tooltip.scss"

import {
  OverlayPositioner,
  TooltipContainer,
  useTooltipContext,
} from "../../index"

/* --- */

const STANDALONE_SHOW_DELAY = 1200
const STANDALONE_HIDE_DELAY = 480

const TooltipComponent = (
  {
    className,
    triggerRef,
    anchorRef,
    width,
    height,
    placement = "bottom",
    placementFallback = ["top"],
    paddingX = 0,
    paddingY = 8,
    edgePadding = 8,
    children,
    onOpen,
    onClose,
    ...rest
  }: TooltipProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Tooltip", undefined, undefined)

  const [open, setOpen] = useState(false)
  const hoverTimerRef = useRef<number | null>(null)
  const hideTimerRef = useRef<number | null>(null)
  const idRef = useRef<symbol | null>(null)
  const visibleRef = useRef(false)
  const context = useTooltipContext()

  if (idRef.current === null) {
    idRef.current = Symbol("Tooltip")
  }

  const openTooltip = () => {
    setOpen(true)
    visibleRef.current = true
  }

  const closeTooltip = () => {
    setOpen(false)
    visibleRef.current = false
  }

  useEffect(() => {
    if (open) {
      onOpen?.()
    } else {
      onClose?.()
    }
  }, [open, onOpen, onClose])

  useEffect(() => {
    const targetRef = triggerRef ?? anchorRef
    if (!targetRef?.current) return

    const el = targetRef.current

    const clearHoverTimer = () => {
      if (hoverTimerRef.current != null) {
        clearTimeout(hoverTimerRef.current)
        hoverTimerRef.current = null
      }
    }

    const clearHideTimer = () => {
      if (hideTimerRef.current != null) {
        clearTimeout(hideTimerRef.current)
        hideTimerRef.current = null
      }
    }

    const handleEnter = () => {
      clearHoverTimer()
      clearHideTimer()

      const id = idRef.current as symbol

      // Register this tooltip with the shared context so that it can
      // coordinate behaviour across multiple triggers (e.g. instant
      // switching within the hide window).
      context?.setActiveTooltip?.({
        id,
        close: () => {
          clearHoverTimer()
          clearHideTimer()
          closeTooltip()
        },
      })

      // If this tooltip is already open, just cancel any pending hide.
      if (open) {
        context?.cancelPendingHide?.(id)
        return
      }

      const delay = context?.registerHoverStart
        ? context.registerHoverStart()
        : STANDALONE_SHOW_DELAY

      if (delay === 0) {
        openTooltip()
        context?.notifyVisible?.()
        return
      }

      hoverTimerRef.current = window.setTimeout(() => {
        hoverTimerRef.current = null
        openTooltip()
        context?.notifyVisible?.()
      }, delay)
    }

    const handleLeave = () => {
      clearHoverTimer()

      if (context) {
        // When a context is present, let it manage the hide delay and
        // cross-trigger coordination, but only if this tooltip was
        // actually visible. If the user left before it became visible,
        // we don't start a hide window, so the next hover will use the
        // full SHOW_DELAY again.
        if (visibleRef.current) {
          context.notifyHoverEnd?.()
        }
        return
      }

      clearHideTimer()
      hideTimerRef.current = window.setTimeout(() => {
        hideTimerRef.current = null
        closeTooltip()
      }, STANDALONE_HIDE_DELAY)
    }

    el.addEventListener("mouseenter", handleEnter)
    el.addEventListener("mouseleave", handleLeave)

    return () => {
      el.removeEventListener("mouseenter", handleEnter)
      el.removeEventListener("mouseleave", handleLeave)
      clearHoverTimer()
      clearHideTimer()
    }
  }, [triggerRef, anchorRef, context, open])

  const resolvedAnchorRef = (anchorRef ??
    triggerRef) as preact.RefObject<HTMLElement> | null

  return (
    <OverlayPositioner
      anchorRef={resolvedAnchorRef as preact.RefObject<HTMLElement>}
      open={open}
      placement={placement}
      placementFallback={placementFallback}
      paddingX={paddingX}
      paddingY={paddingY}
      edgePadding={edgePadding}
      trigger="hover"
      arrow={true}
      onClose={() => setOpen(false)}
    >
      <div
        className={[_className, "no-drag", className].join(" ").trim()}
        ref={ref}
        {...rest}
      >
        <TooltipContainer width={width} height={height}>
          {children}
        </TooltipContainer>
      </div>
    </OverlayPositioner>
  )
}

export const Tooltip = typedForwardRef<TooltipProps, HTMLDivElement>(
  TooltipComponent
)
