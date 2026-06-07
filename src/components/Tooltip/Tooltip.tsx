import { bem, typedForwardRef } from '../../utils'

import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks'

import { OverlayPositioner, TooltipContainer, useTooltipContext } from '../../index'
import {
  TOOLTIP_DEFAULT_HIDE_DELAY,
  TOOLTIP_DEFAULT_SHOW_DELAY,
  type TooltipTimingOptions,
} from '../TooltipContext/TooltipContext.types'

import type { TooltipProps } from './Tooltip.types'
import './Tooltip.scss'

/* --- */

const resolveShowDelay = (options?: TooltipTimingOptions) => options?.showDelay ?? TOOLTIP_DEFAULT_SHOW_DELAY

const resolveHideDelay = (options?: TooltipTimingOptions) => options?.hideDelay ?? TOOLTIP_DEFAULT_HIDE_DELAY

const TooltipComponent = (
  {
    id,
    className,
    anchorRef,
    width,
    height,
    showArrow = true,
    placement = 'bottom',
    placementFallback = ['top', 'left', 'right'],
    offsetX = 0,
    offsetY = 8,
    offsetEdge = 8,
    trigger = 'hover',
    showDelay,
    hideDelay,
    onOpen,
    onClose,
    children,
    ...rest
  }: TooltipProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const context = useTooltipContext()
  const [open, setOpen] = useState(false)
  const wasOpenRef = useRef(false)
  const openRef = useRef(false)
  const showTimeoutRef = useRef<number | null>(null)
  const hideTimeoutRef = useRef<number | null>(null)

  openRef.current = open

  const timingOptions = useMemo<TooltipTimingOptions>(
    () => ({
      showDelay,
      hideDelay,
    }),
    [showDelay, hideDelay],
  )

  const clearShowTimeout = useCallback(() => {
    if (showTimeoutRef.current != null) {
      clearTimeout(showTimeoutRef.current)
      showTimeoutRef.current = null
    }
  }, [])

  const clearHideTimeout = useCallback(() => {
    if (hideTimeoutRef.current != null) {
      clearTimeout(hideTimeoutRef.current)
      hideTimeoutRef.current = null
    }
  }, [])

  const scheduleLocalShow = useCallback(
    (setOpenState: (open: boolean) => void) => {
      const delay = resolveShowDelay(timingOptions)
      clearShowTimeout()

      if (delay === 0) {
        setOpenState(true)
        return
      }

      showTimeoutRef.current = window.setTimeout(() => {
        showTimeoutRef.current = null
        setOpenState(true)
      }, delay)
    },
    [clearShowTimeout, timingOptions],
  )

  const scheduleLocalHide = useCallback(
    (setOpenState: (open: boolean) => void) => {
      const delay = resolveHideDelay(timingOptions)
      clearHideTimeout()

      if (delay === 0) {
        setOpenState(false)
        return
      }

      hideTimeoutRef.current = window.setTimeout(() => {
        hideTimeoutRef.current = null
        setOpenState(false)
      }, delay)
    },
    [clearHideTimeout, timingOptions],
  )

  const handleDismiss = useCallback(() => {
    if (context) {
      context.registerHoverEnd(anchorRef as preact.RefObject<HTMLElement>, setOpen, timingOptions)
      return
    }

    clearShowTimeout()
    scheduleLocalHide(setOpen)
  }, [anchorRef, clearShowTimeout, context, scheduleLocalHide, timingOptions])

  useEffect(() => {
    if (open && !wasOpenRef.current) {
      wasOpenRef.current = true
      onOpen?.()
    } else if (!open && wasOpenRef.current) {
      wasOpenRef.current = false
      onClose?.()
    }
  }, [open, onOpen, onClose])

  useEffect(() => {
    const targetRef = anchorRef
    if (!targetRef?.current) return

    const el = targetRef.current
    const resolvedRef = targetRef as preact.RefObject<HTMLElement>

    if (trigger === 'click') {
      const handleClick = (e: MouseEvent) => {
        e.preventDefault()

        if (context) {
          context.registerClick(resolvedRef, setOpen, timingOptions)
          return
        }

        clearHideTimeout()
        clearShowTimeout()

        if (openRef.current) {
          scheduleLocalHide(setOpen)
          return
        }

        scheduleLocalShow(setOpen)
      }

      el.addEventListener('click', handleClick)

      return () => {
        el.removeEventListener('click', handleClick)
        clearShowTimeout()
        clearHideTimeout()
      }
    }

    if (!context) return

    const handleEnter = () => {
      context.registerHoverStart(resolvedRef, setOpen, timingOptions)
    }

    const handleLeave = () => {
      context.registerHoverEnd(resolvedRef, setOpen, timingOptions)
    }

    const handlePointerDown = () => {
      context.registerPointerDown(resolvedRef, setOpen, timingOptions)
    }

    el.addEventListener('mouseenter', handleEnter)
    el.addEventListener('mouseleave', handleLeave)
    el.addEventListener('pointerdown', handlePointerDown)

    return () => {
      el.removeEventListener('mouseenter', handleEnter)
      el.removeEventListener('mouseleave', handleLeave)
      el.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [
    anchorRef,
    clearHideTimeout,
    clearShowTimeout,
    context,
    scheduleLocalHide,
    scheduleLocalShow,
    timingOptions,
    trigger,
  ])

  const _className = bem('Tooltip', undefined, undefined)

  const resolvedAnchorRef = anchorRef as preact.RefObject<HTMLElement> | null

  return (
    <OverlayPositioner
      anchorRef={resolvedAnchorRef as preact.RefObject<HTMLElement>}
      open={open}
      placement={placement}
      placementFallback={placementFallback}
      offsetX={offsetX}
      offsetY={offsetY}
      offsetEdge={offsetEdge}
      closeOnClickOutside={trigger === 'click'}
      trigger="hover"
      onClose={trigger === 'click' ? handleDismiss : () => setOpen(false)}
    >
      <div id={id} className={[_className, className].join(' ').trim()} data-pui-interactive="true" {...rest} ref={ref}>
        <TooltipContainer width={width} height={height} showArrow={showArrow}>
          {children}
        </TooltipContainer>
      </div>
    </OverlayPositioner>
  )
}

export const Tooltip = typedForwardRef<TooltipProps, HTMLDivElement>(TooltipComponent)
