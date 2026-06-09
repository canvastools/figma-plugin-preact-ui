import { createContext } from 'preact'
import { useCallback, useContext, useMemo, useRef } from 'preact/hooks'

import type { TooltipContextProps, TooltipContextValue, TooltipTimingOptions } from './TooltipContext.types'
import { TOOLTIP_DEFAULT_HIDE_DELAY, TOOLTIP_DEFAULT_SHOW_DELAY } from './TooltipContext.types'

/* --- */

const RawTooltipContext = createContext<TooltipContextValue | undefined>(undefined)

const resolveShowDelay = (options?: TooltipTimingOptions) => options?.showDelay ?? TOOLTIP_DEFAULT_SHOW_DELAY

const resolveHideDelay = (options?: TooltipTimingOptions) => options?.hideDelay ?? TOOLTIP_DEFAULT_HIDE_DELAY

const useTooltipContext = () => {
  const context = useContext(RawTooltipContext)
  return context
}

const TooltipContext = ({ children }: TooltipContextProps) => {
  const lastTriggerLeaveTimeRef = useRef<number | null>(null)

  const visibleTooltipRef = useRef<{
    ref: preact.RefObject<HTMLElement> | null
    setOpen: ((open: boolean) => void) | null
  }>({
    ref: null,
    setOpen: null,
  })

  const leavingTooltipRef = useRef<{
    ref: preact.RefObject<HTMLElement> | null
    setOpen: ((open: boolean) => void) | null
    hideDelay: number
  }>({
    ref: null,
    setOpen: null,
    hideDelay: TOOLTIP_DEFAULT_HIDE_DELAY,
  })

  const showTimeoutRef = useRef<number | null>(null)

  const hideTimeoutRef = useRef<number | null>(null)

  const setVisible = useCallback((ref: preact.RefObject<HTMLElement> | null, setOpen: ((open: boolean) => void) | null) => {
    visibleTooltipRef.current = { ref, setOpen }
  }, [])

  const clearVisible = useCallback(() => {
    visibleTooltipRef.current = { ref: null, setOpen: null }
  }, [])

  const scheduleHideDelayPhase: (
    ref: preact.RefObject<HTMLElement>,
    setOpen: (open: boolean) => void,
    hideDelay?: number,
  ) => void = useCallback((ref, setOpen, hideDelay = TOOLTIP_DEFAULT_HIDE_DELAY) => {
    lastTriggerLeaveTimeRef.current = Date.now()

    leavingTooltipRef.current = {
      ref,
      setOpen,
      hideDelay,
    }

    if (hideTimeoutRef.current != null) {
      clearTimeout(hideTimeoutRef.current)
    }

    hideTimeoutRef.current = window.setTimeout(() => {
      hideTimeoutRef.current = null

      const leaving = leavingTooltipRef.current
      if (!leaving.ref || !leaving.setOpen) return

      leaving.setOpen(false)

      if (visibleTooltipRef.current.ref && visibleTooltipRef.current.ref === leaving.ref) {
        clearVisible()
      }

      leavingTooltipRef.current = {
        ref: null,
        setOpen: null,
        hideDelay: TOOLTIP_DEFAULT_HIDE_DELAY,
      }
    }, hideDelay)
  }, [clearVisible])

  const cancelLeavingPhase = useCallback(() => {
    if (hideTimeoutRef.current != null) {
      clearTimeout(hideTimeoutRef.current)
      hideTimeoutRef.current = null
    }

    leavingTooltipRef.current = {
      ref: null,
      setOpen: null,
      hideDelay: TOOLTIP_DEFAULT_HIDE_DELAY,
    }
  }, [])

  const scheduleShow = useCallback(
    (ref: preact.RefObject<HTMLElement>, setOpen: (open: boolean) => void, showDelay: number) => {
      if (showTimeoutRef.current != null) {
        clearTimeout(showTimeoutRef.current)
      }

      const show = () => {
        setOpen(true)
        setVisible(ref, setOpen)
      }

      if (showDelay === 0) {
        show()
        return
      }

      showTimeoutRef.current = window.setTimeout(() => {
        showTimeoutRef.current = null
        show()
      }, showDelay)
    },
    [setVisible],
  )

  const registerHoverStart: TooltipContextValue['registerHoverStart'] = useCallback(
    (ref, setOpen, options) => {
      const showDelay = resolveShowDelay(options)
      const now = Date.now()
      const lastLeave = lastTriggerLeaveTimeRef.current
      const leavingHideDelay = leavingTooltipRef.current.hideDelay

      if (
        lastLeave != null &&
        now - lastLeave < leavingHideDelay &&
        leavingTooltipRef.current.ref &&
        leavingTooltipRef.current.setOpen
      ) {
        const leaving = leavingTooltipRef.current

        cancelLeavingPhase()

        if (leaving.ref === ref) {
          leaving.setOpen?.(true)
          setVisible(ref, leaving.setOpen ?? null)
        } else {
          leaving.setOpen?.(false)

          setOpen(true)
          setVisible(ref, setOpen)
        }

        if (showTimeoutRef.current != null) {
          clearTimeout(showTimeoutRef.current)
          showTimeoutRef.current = null
        }

        return
      }

      scheduleShow(ref, setOpen, showDelay)
    },
    [cancelLeavingPhase, scheduleShow, setVisible],
  )

  const registerPointerDown: TooltipContextValue['registerPointerDown'] = useCallback(
    (ref, setOpen, options) => {
      const hideDelay = resolveHideDelay(options)

      if (showTimeoutRef.current != null) {
        clearTimeout(showTimeoutRef.current)
        showTimeoutRef.current = null
      }

      const visible = visibleTooltipRef.current
      if (visible.ref && visible.setOpen) {
        visible.setOpen(false)
        clearVisible()
      }

      scheduleHideDelayPhase(ref, setOpen, hideDelay)
    },
    [clearVisible, scheduleHideDelayPhase],
  )

  const registerHoverEnd: TooltipContextValue['registerHoverEnd'] = useCallback(
    (ref, setOpen, options) => {
      const hideDelay = resolveHideDelay(options)

      if (showTimeoutRef.current != null) {
        clearTimeout(showTimeoutRef.current)
        showTimeoutRef.current = null
      }

      if (!visibleTooltipRef.current.ref || visibleTooltipRef.current.ref !== ref) {
        return
      }

      scheduleHideDelayPhase(ref, setOpen, hideDelay)
    },
    [scheduleHideDelayPhase],
  )

  const registerClick: TooltipContextValue['registerClick'] = useCallback(
    (ref, setOpen, options) => {
      const showDelay = resolveShowDelay(options)
      const hideDelay = resolveHideDelay(options)
      const now = Date.now()
      const lastLeave = lastTriggerLeaveTimeRef.current
      const leaving = leavingTooltipRef.current

      if (
        lastLeave != null &&
        now - lastLeave < leaving.hideDelay &&
        leaving.ref === ref &&
        leaving.setOpen &&
        hideTimeoutRef.current != null
      ) {
        cancelLeavingPhase()
        setOpen(true)
        setVisible(ref, setOpen)

        if (showTimeoutRef.current != null) {
          clearTimeout(showTimeoutRef.current)
          showTimeoutRef.current = null
        }

        return
      }

      if (showTimeoutRef.current != null) {
        clearTimeout(showTimeoutRef.current)
        showTimeoutRef.current = null
      }

      const visible = visibleTooltipRef.current

      if (visible.ref === ref && visible.setOpen) {
        scheduleHideDelayPhase(ref, setOpen, hideDelay)
        return
      }

      if (visible.ref && visible.setOpen && visible.ref !== ref) {
        visible.setOpen(false)
        clearVisible()
      }

      cancelLeavingPhase()
      scheduleShow(ref, setOpen, showDelay)
    },
    [cancelLeavingPhase, clearVisible, scheduleHideDelayPhase, scheduleShow, setVisible],
  )

  const contextValue: TooltipContextValue = useMemo(
    () => ({
      registerHoverStart,
      registerHoverEnd,
      registerPointerDown,
      registerClick,
    }),
    [registerHoverStart, registerHoverEnd, registerPointerDown, registerClick],
  )

  return <RawTooltipContext.Provider value={contextValue}>{children}</RawTooltipContext.Provider>
}

export { TooltipContext, useTooltipContext }
