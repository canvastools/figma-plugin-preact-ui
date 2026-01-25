import { bem, typedForwardRef } from "../../utils"

import { useEffect, useState } from "preact/hooks"

import {
  OverlayPositioner,
  TooltipContainer,
  useTooltipContext,
} from "../../index"

import type { TooltipProps } from "./Tooltip.types"
import "./Tooltip.scss"

/* --- */

const TooltipComponent = (
  {
    className,
    triggerRef,
    anchorRef,
    width,
    height,
    showArrow = true,
    placement = "bottom",
    placementFallback = ["top", "left", "right"],
    offsetX = 0,
    offsetY = 8,
    offsetEdge = 16,
    onOpen,
    onClose,
    children,
    ...rest
  }: TooltipProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const context = useTooltipContext()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      onOpen?.()
    } else {
      onClose?.()
    }
  }, [open, onOpen, onClose])

  useEffect(() => {
    const targetRef = triggerRef ?? anchorRef
    if (!targetRef?.current || !context) return

    const el = targetRef.current

    const handleEnter = () => {
      context.registerHoverStart(
        targetRef as preact.RefObject<HTMLElement>,
        setOpen
      )
    }

    const handleLeave = () => {
      context.registerHoverEnd(
        targetRef as preact.RefObject<HTMLElement>,
        setOpen
      )
    }

    el.addEventListener("mouseenter", handleEnter)
    el.addEventListener("mouseleave", handleLeave)

    return () => {
      el.removeEventListener("mouseenter", handleEnter)
      el.removeEventListener("mouseleave", handleLeave)
    }
  }, [triggerRef, anchorRef, context])

  const _className = bem("Tooltip", undefined, undefined)

  const resolvedAnchorRef = (anchorRef ??
    triggerRef) as preact.RefObject<HTMLElement> | null

  return (
    <OverlayPositioner
      anchorRef={resolvedAnchorRef as preact.RefObject<HTMLElement>}
      open={open}
      placement={placement}
      placementFallback={placementFallback}
      offsetX={offsetX}
      offsetY={offsetY}
      offsetEdge={offsetEdge}
      trigger="hover"
      onClose={() => setOpen(false)}
    >
      <div
        className={[_className, className].join(" ").trim()}
        data-pui-interactive="true"
        ref={ref}
        {...rest}
      >
        <TooltipContainer width={width} height={height} showArrow={showArrow}>
          {children}
        </TooltipContainer>
      </div>
    </OverlayPositioner>
  )
}

export const Tooltip = typedForwardRef<TooltipProps, HTMLDivElement>(
  TooltipComponent
)
