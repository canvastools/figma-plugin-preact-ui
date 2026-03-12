import { createContext } from 'preact'
import { useCallback, useContext, useMemo, useRef } from 'preact/hooks'

import type { TooltipContextProps, TooltipContextValue } from './TooltipContext.types'

/* --- */

const RawTooltipContext = createContext<TooltipContextValue | undefined>(undefined)

const SHOW_DELAY = 1200
const HIDE_DELAY = 480

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
  }>({
    ref: null,
    setOpen: null,
  })

  const showTimeoutRef = useRef<number | null>(null)

  const hideTimeoutRef = useRef<number | null>(null)

  const registerHoverStart: TooltipContextValue['registerHoverStart'] = (ref, setOpen) => {
    const now = Date.now()
    const lastLeave = lastTriggerLeaveTimeRef.current

    if (
      lastLeave != null &&
      now - lastLeave < HIDE_DELAY &&
      leavingTooltipRef.current.ref &&
      leavingTooltipRef.current.setOpen
    ) {
      if (hideTimeoutRef.current != null) {
        clearTimeout(hideTimeoutRef.current)
        hideTimeoutRef.current = null
      }

      const leaving = leavingTooltipRef.current

      if (leaving.ref === ref) {
        leaving.setOpen?.(true)
        visibleTooltipRef.current = {
          ref,
          setOpen: leaving.setOpen ?? null,
        }
      } else {
        leaving.setOpen?.(false)

        setOpen(true)
        visibleTooltipRef.current = {
          ref,
          setOpen,
        }
      }

      leavingTooltipRef.current = {
        ref: null,
        setOpen: null,
      }

      if (showTimeoutRef.current != null) {
        clearTimeout(showTimeoutRef.current)
        showTimeoutRef.current = null
      }

      return
    }

    if (showTimeoutRef.current != null) {
      clearTimeout(showTimeoutRef.current)
    }

    showTimeoutRef.current = window.setTimeout(() => {
      showTimeoutRef.current = null
      setOpen(true)
      visibleTooltipRef.current = {
        ref,
        setOpen,
      }
    }, SHOW_DELAY)
  }

  const registerHoverEnd: TooltipContextValue['registerHoverEnd'] = (ref, setOpen) => {
    if (showTimeoutRef.current != null) {
      clearTimeout(showTimeoutRef.current)
      showTimeoutRef.current = null
    }

    if (!visibleTooltipRef.current.ref || visibleTooltipRef.current.ref !== ref) {
      return
    }

    lastTriggerLeaveTimeRef.current = Date.now()

    leavingTooltipRef.current = {
      ref,
      setOpen,
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
        visibleTooltipRef.current = {
          ref: null,
          setOpen: null,
        }
      }

      leavingTooltipRef.current = {
        ref: null,
        setOpen: null,
      }
    }, HIDE_DELAY)
  }

  const contextValue: TooltipContextValue = useMemo(
    () => ({
      registerHoverStart,
      registerHoverEnd,
    }),
    [registerHoverStart, registerHoverEnd],
  )

  return <RawTooltipContext.Provider value={contextValue}>{children}</RawTooltipContext.Provider>
}

export { TooltipContext, useTooltipContext }
