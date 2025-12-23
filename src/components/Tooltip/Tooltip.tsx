import { bem, typedForwardRef } from "../../utils"

import { useEffect, useState } from "preact/hooks"

import type { TooltipProps } from "./Tooltip.types"
import "./Tooltip.scss"

import {
  OverlayPositioner,
  TooltipContainer,
  useTooltipContext,
} from "../../index"

/* --- */

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
    if (!targetRef?.current) return

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
      paddingX={paddingX}
      paddingY={paddingY}
      edgePadding={edgePadding}
      closeOnOutsideClick={false}
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
