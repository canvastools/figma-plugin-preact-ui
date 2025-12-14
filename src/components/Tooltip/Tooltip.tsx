import { bem, typedForwardRef } from "../../utils"

import { useEffect, useRef, useState } from "preact/hooks"

import type { TooltipProps } from "./Tooltip.types"

import {
  OverlayPositioner,
  TooltipContainer,
  useTooltipContext,
} from "../../index"

/* --- */

const STANDALONE_VISIBILITY_DELAY = 1000

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
  const context = useTooltipContext()

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

    const handleEnter = () => {
      clearHoverTimer()

      const delay = context?.registerHoverStart
        ? context.registerHoverStart()
        : STANDALONE_VISIBILITY_DELAY

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
      setOpen(false)
      context?.notifyHoverEnd?.()
    }

    el.addEventListener("mouseenter", handleEnter)
    el.addEventListener("mouseleave", handleLeave)

    return () => {
      el.removeEventListener("mouseenter", handleEnter)
      el.removeEventListener("mouseleave", handleLeave)
      clearHoverTimer()
    }
  }, [triggerRef, anchorRef, context])

  const resolvedAnchorRef = (anchorRef ??
    triggerRef) as preact.RefObject<HTMLElement> | null

  return (
    <div
      className={[_className, "no-drag", className].join(" ").trim()}
      ref={ref}
      {...rest}
    >
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
        <TooltipContainer width={width} height={height}>
          {children}
        </TooltipContainer>
      </OverlayPositioner>
    </div>
  )
}

export const Tooltip = typedForwardRef<TooltipProps, HTMLDivElement>(
  TooltipComponent
)
