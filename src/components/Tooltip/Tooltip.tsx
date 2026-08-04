import { bem, typedForwardRef, useRefElement } from '../../utils'

import { useEffect, useMemo, useRef, useState } from 'preact/hooks'

import { OverlayPositioner } from '../OverlayPositioner/OverlayPositioner'
import { TooltipContainer } from '../TooltipContainer/TooltipContainer'
import { useTooltipContext } from '../TooltipContext/TooltipContext'
import type { TooltipTimingOptions } from '../TooltipContext/TooltipContext.types'

import type { TooltipProps } from './Tooltip.types'
import './Tooltip.scss'

/* --- */

const TooltipComponent = (
  {
    id,
    className,
    anchorRef,
    width,
    maxWidth,
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
  const warnedRef = useRef(false)

  const timingOptions = useMemo<TooltipTimingOptions>(
    () => ({
      showDelay,
      hideDelay,
    }),
    [showDelay, hideDelay],
  )

  const handleDismiss = () => {
    context?.registerHoverEnd(anchorRef as preact.RefObject<HTMLElement>, setOpen, timingOptions)
  }

  useEffect(() => {
    if (open && !wasOpenRef.current) {
      wasOpenRef.current = true
      onOpen?.()
    } else if (!open && wasOpenRef.current) {
      wasOpenRef.current = false
      onClose?.()
    }
  }, [open, onOpen, onClose])

  // Resolve the anchor element through state so listeners are attached even
  // when the anchor mounts after this tooltip (e.g. conditional rendering).
  const anchorEl = useRefElement(anchorRef as preact.RefObject<HTMLElement | null> | undefined)

  useEffect(() => {
    if (!anchorEl) return

    // TooltipContext is required: it owns all show/hide timing and guarantees
    // a single visible tooltip at a time. Without it tooltips never open.
    if (!context) {
      if (!warnedRef.current) {
        warnedRef.current = true
        console.warn(
          '[figma-plugin-preact-ui] Tooltip requires a <TooltipContext> provider. ' +
            'Wrap your app (or plugin root) in <TooltipContext> — tooltips will not be shown otherwise.',
        )
      }
      return
    }

    const el = anchorEl
    const resolvedRef = anchorRef as preact.RefObject<HTMLElement>

    if (trigger === 'click') {
      const handleClick = (e: MouseEvent) => {
        e.preventDefault()
        context.registerClick(resolvedRef, setOpen, timingOptions)
      }

      el.addEventListener('click', handleClick)

      return () => {
        el.removeEventListener('click', handleClick)
      }
    }

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
  }, [anchorEl, anchorRef, context, timingOptions, trigger])

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
        <TooltipContainer width={width} maxWidth={maxWidth} height={height} showArrow={showArrow}>
          {children}
        </TooltipContainer>
      </div>
    </OverlayPositioner>
  )
}

export const Tooltip = typedForwardRef<TooltipProps, HTMLDivElement>(TooltipComponent)
