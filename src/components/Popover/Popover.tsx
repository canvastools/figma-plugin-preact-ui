import { bem, typedForwardRef } from '../../utils'

import { useEffect, useRef, useState } from 'preact/hooks'

import { OverlayPositioner } from '../OverlayPositioner/OverlayPositioner'
import { PopoverContainer } from '../PopoverContainer/PopoverContainer'
import { PopoverHeader } from '../PopoverHeader/PopoverHeader'
import { PopoverContext, usePopoverContext } from '../PopoverContext/PopoverContext'
import type { OverlayPositionerPlacement } from '../OverlayPositioner/OverlayPositioner.types'

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
      constrainHeight={constrainHeight}
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

  // Controlled/uncontrolled open state:
  // - `open` provided → fully controlled, internal state is ignored; every
  //   interaction that wants to change it only fires onOpen/onClose and the
  //   parent decides.
  // - otherwise `defaultOpen` seeds internal state.
  const isControlled = open !== undefined
  const [internalOpen, setInternalOpen] = useState<boolean>(defaultOpen)
  const isOpen = isControlled ? (open as boolean) : internalOpen

  const handleOpenChange = (next: boolean) => {
    if (next === isOpen) return
    if (!isControlled) setInternalOpen(next)
    if (next) onOpen?.()
    else onClose?.()
  }

  return (
    <PopoverContext triggerRef={triggerRef} anchorRef={anchorRef} open={isOpen} setOpen={handleOpenChange}>
      {isOpen && (
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
