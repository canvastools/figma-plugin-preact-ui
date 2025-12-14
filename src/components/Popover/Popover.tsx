import { bem, typedForwardRef } from "../../utils"

import { useEffect, useRef, useState } from "preact/hooks"

import type { PopoverProps } from "./Popover.types"

import {
  OverlayPlacement,
  OverlayPositioner,
  PopoverContainer,
  PopoverHeader,
  PopoverContext,
  usePopoverContext,
} from "../../index"

/* --- */

type PopoverBodyProps = {
  header: preact.ComponentChildren | string
  draggable: boolean
  width: number | "auto"
  height: number | "auto"
  placement: OverlayPlacement
  placementFallback: false | OverlayPlacement[]
  paddingX: number
  paddingY: number
  edgePadding: number
  children: preact.ComponentChildren
}

const PopoverBody = ({
  header,
  draggable,
  width,
  height,
  placement,
  placementFallback,
  paddingX,
  paddingY,
  edgePadding,
  children,
}: PopoverBodyProps) => {
  const context = usePopoverContext()
  if (!context) return null

  const { triggerRef, anchorRef, open, setOpen } = context
  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleClose = () => {
    setOpen?.(false)
    triggerRef?.current?.focus()
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
      placementFallback={placementFallback}
      paddingX={paddingX}
      paddingY={paddingY}
      edgePadding={edgePadding}
      onClose={handleClose}
      closeOnOutsideClick={true}
    >
      <PopoverContainer ref={containerRef} width={width} height={height}>
        <PopoverHeader onClose={handleClose}>{header}</PopoverHeader>
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
    header,
    draggable = true,
    width = "auto",
    height = "auto",
    placement = "bottom-left",
    placementFallback = ["bottom-right", "top-left", "top-right"],
    paddingX = 4,
    paddingY = 4,
    edgePadding = 16,
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
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
    >
      <PopoverContext
        triggerRef={triggerRef}
        anchorRef={anchorRef}
        open={internalOpen}
        setOpen={setInternalOpen}
      >
        <PopoverBody
          header={header}
          draggable={draggable}
          width={width}
          height={height}
          placement={placement}
          placementFallback={placementFallback}
          paddingX={paddingX}
          paddingY={paddingY}
          edgePadding={edgePadding}
        >
          {children}
        </PopoverBody>
      </PopoverContext>
    </div>
  )
}

export const Popover = typedForwardRef<PopoverProps, HTMLDivElement>(
  PopoverComponent
)
