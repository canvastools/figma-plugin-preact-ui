import { bem, typedForwardRef } from "../../utils"

import { useEffect, useRef, useState } from "preact/hooks"

import {
  OverlayPositionerPlacement,
  OverlayPositioner,
  PopoverContainer,
  PopoverHeader,
  PopoverContext,
  usePopoverContext,
} from "../../index"

import type { PopoverProps } from "./Popover.types"
import "./Popover.scss"

/* --- */

type PopoverBodyProps = {
  headerChildren: preact.ComponentChildren | string
  draggable: boolean
  width?: number
  height?: number
  placement: OverlayPositionerPlacement
  placementFallback: OverlayPositionerPlacement[]
  offsetX: number
  offsetY: number
  offsetEdge: number
  showArrow: boolean
  children: preact.ComponentChildren
  onOpen?: () => void
  onClose?: () => void
}

const PopoverBody = ({
  headerChildren,
  draggable,
  width,
  height,
  placement,
  placementFallback,
  offsetX,
  offsetY,
  offsetEdge,
  showArrow,
  children,
  onClose,
}: PopoverBodyProps) => {
  const context = usePopoverContext()
  if (!context) return null

  const { triggerRef, anchorRef, open, setOpen } = context
  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleClose = () => {
    setOpen?.(false)
    triggerRef?.current?.focus()
    onClose?.()
  }

  useEffect(() => {
    if (!open) return
    containerRef.current?.focus()
  }, [open])

  return (
    <OverlayPositioner
      anchorRef={anchorRef as preact.RefObject<HTMLElement>}
      open={open}
      draggable={draggable}
      placement={placement}
      placementFallback={placementFallback ?? []}
      offsetX={offsetX}
      offsetY={offsetY}
      offsetEdge={offsetEdge}
      onClose={handleClose}
      closeOnClickOutside={true}
    >
      <PopoverContainer
        ref={containerRef}
        width={width}
        height={height}
        showArrow={showArrow}
      >
        <PopoverHeader onClose={handleClose}>{headerChildren}</PopoverHeader>
        {children}
      </PopoverContainer>
    </OverlayPositioner>
  )
}

const PopoverComponent = (
  {
    className,
    triggerRef,
    anchorRef,
    defaultOpen = false,
    open,
    headerChildren,
    draggable = true,
    width,
    height,
    placement = "bottom-left",
    placementFallback = ["bottom-right", "top-left", "top-right"],
    offsetX = 0,
    offsetY = 8,
    offsetEdge = 16,
    showArrow = false,
    children,
    onOpen,
    onClose,
    ...rest
  }: PopoverProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("Popover", undefined, undefined)

  const [internalOpen, setInternalOpen] = useState<boolean>(open ?? defaultOpen)

  // Keep internal state in sync with controlled `open` prop (if provided)
  useEffect(() => {
    setInternalOpen(open ?? defaultOpen)
  }, [open, defaultOpen])

  // Fire onOpen / onClose exactly once per open/close cycle
  const wasOpenRef = useRef(false)
  useEffect(() => {
    if (internalOpen && !wasOpenRef.current) {
      wasOpenRef.current = true
      onOpen?.()
    } else if (!internalOpen && wasOpenRef.current) {
      wasOpenRef.current = false
      onClose?.()
    }
  }, [internalOpen, onOpen, onClose])

  return (
    <PopoverContext
      triggerRef={triggerRef}
      anchorRef={anchorRef}
      open={internalOpen}
      setOpen={setInternalOpen}
    >
      {internalOpen && (
        <div
          className={[_className, className].join(" ").trim()}
          ref={ref}
          {...rest}
        >
          <PopoverBody
            headerChildren={headerChildren}
            draggable={draggable}
            width={width}
            height={height}
            placement={placement}
            placementFallback={placementFallback}
            offsetX={offsetX}
            offsetY={offsetY}
            offsetEdge={offsetEdge}
            showArrow={showArrow}
            onClose={onClose}
          >
            {children}
          </PopoverBody>
        </div>
      )}
    </PopoverContext>
  )
}

export const Popover = typedForwardRef<PopoverProps, HTMLDivElement>(
  PopoverComponent
)
