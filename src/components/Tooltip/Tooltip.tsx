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
  const context = useTooltipContext()

  if (idRef.current === null) {
    idRef.current = Symbol("Tooltip")
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
          setOpen(false)
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
        setOpen(true)
        context?.notifyVisible?.()
        return
      }

      hoverTimerRef.current = window.setTimeout(() => {
        hoverTimerRef.current = null
        setOpen(true)
        context?.notifyVisible?.()
      }, delay)
    }

    const handleLeave = () => {
      clearHoverTimer()

      if (context) {
        // When a context is present, let it manage the 440 ms hide
        // delay and cross-trigger coordination.
        context.notifyHoverEnd?.()
        return
      }

      clearHideTimer()
      hideTimerRef.current = window.setTimeout(() => {
        hideTimerRef.current = null
        setOpen(false)
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
