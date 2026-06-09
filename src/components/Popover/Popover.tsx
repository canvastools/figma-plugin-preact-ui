import { bem, typedForwardRef } from '../../utils'

import { useEffect, useRef, useState } from 'preact/hooks'

import {
  OverlayPositionerPlacement,
  OverlayPositioner,
  PopoverContainer,
  PopoverHeader,
  PopoverContext,
  usePopoverContext,
} from '../../index'

import type { PopoverProps } from './Popover.types'
import './Popover.scss'

/* --- */

type PopoverBodyProps = {
  popoverHeaderProps: PopoverProps['popoverHeaderProps']
  draggable: boolean
  width?: number
  height?: number
  constrainHeight?: boolean
  placement: OverlayPositionerPlacement
  placementFallback: OverlayPositionerPlacement[]
  offsetX: number
  offsetY: number
  offsetEdge: number
  showArrow: boolean
  tabIndex?: number
  autoReposition?: boolean
  children: preact.ComponentChildren
}

const PopoverBody = ({
  popoverHeaderProps,
  draggable,
  width,
  height,
  constrainHeight = false,
  placement,
  placementFallback,
  offsetX,
  offsetY,
  offsetEdge,
  showArrow,
  tabIndex,
  autoReposition = false,
  children,
}: PopoverBodyProps) => {
  const { triggerRef, anchorRef, open, setOpen } = usePopoverContext()
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
      placementFallback={placementFallback ?? []}
      offsetX={offsetX}
      offsetY={offsetY}
      offsetEdge={offsetEdge}
      autoReposition={autoReposition}
      onClose={handleClose}
      closeOnClickOutside={true}
    >
      <PopoverContainer
        ref={containerRef}
        width={width}
        height={height}
        showArrow={showArrow}
        constrainHeight={constrainHeight}
        tabIndex={tabIndex}
      >
        <PopoverHeader onClose={handleClose}>{popoverHeaderProps?.children}</PopoverHeader>
        {children}
      </PopoverContainer>
    </OverlayPositioner>
  )
}

const PopoverComponent = (
  {
    id,
    className,
    triggerRef,
    anchorRef,
    defaultOpen = false,
    open,
    popoverHeaderProps,
    draggable = true,
    width,
    height,
    constrainHeight = false,
    placement = 'bottom-left',
    placementFallback = ['bottom-right', 'top-left', 'top-right'],
    offsetX = 0,
    offsetY = 8,
    offsetEdge = 16,
    showArrow = false,
    tabIndex,
    autoReposition = false,
    children,
    onOpen,
    onClose,
    ...rest
  }: PopoverProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const _className = bem('Popover', undefined, undefined)

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
    <PopoverContext triggerRef={triggerRef} anchorRef={anchorRef} open={internalOpen} setOpen={setInternalOpen}>
      {internalOpen && (
        <div id={id} className={[_className, className].join(' ').trim()} ref={ref} {...rest}>
          <PopoverBody
            popoverHeaderProps={popoverHeaderProps}
            draggable={draggable}
            width={width}
            height={height}
            constrainHeight={constrainHeight}
            placement={placement}
            placementFallback={placementFallback}
            offsetX={offsetX}
            offsetY={offsetY}
            offsetEdge={offsetEdge}
            showArrow={showArrow}
            tabIndex={tabIndex}
            autoReposition={autoReposition}
          >
            {children}
          </PopoverBody>
        </div>
      )}
    </PopoverContext>
  )
}

export const Popover = typedForwardRef<PopoverProps, HTMLDivElement>(PopoverComponent)
