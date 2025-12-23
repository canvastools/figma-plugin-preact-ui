import { createContext } from "preact"
import {
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "preact/hooks"

import type {
  TooltipContextProps,
  TooltipContextValue,
} from "./TooltipContext.types"

/* --- */

const RawTooltipContext = createContext<TooltipContextValue | undefined>(
  undefined
)

const SHOW_DELAY = 1200
const HIDE_DELAY = 480

const useTooltipContext = () => {
  const context = useContext(RawTooltipContext)
  return context
}

const TooltipContext = ({ children }: TooltipContextProps) => {
  const [lastTriggerLeaveTime, setLastTriggerLeaveTime] = useState<
    number | null
  >(null)
  const [lastVisibleTime, setLastVisibleTime] = useState<number | null>(null)

  // Mirror of `lastTriggerLeaveTime` that updates synchronously so that
  // `registerHoverStart` can see the latest value even when it runs in
  // the same event loop tick as `notifyHoverEnd`.
  const lastTriggerLeaveTimeRef = useRef<number | null>(null)

  // The tooltip that is currently being interacted with (latest hover).
  const activeTooltipRef = useRef<{
    id: symbol | null
    close: (() => void) | null
  }>({
    id: null,
    close: null,
  })

  // The tooltip that most recently started a hide cycle when its trigger
  // was left. This is used to coordinate behaviour between different
  // triggers during the 440 ms hide window.
  const leavingTooltipRef = useRef<{
    id: symbol | null
    close: (() => void) | null
  }>({
    id: null,
    close: null,
  })

  // Tracks a pending hide timeout so that it can be cancelled or invoked
  // early when moving between different triggers.
  const hideTimeoutRef = useRef<number | null>(null)

  const setActiveTooltip: TooltipContextValue["setActiveTooltip"] = useCallback(
    (config) => {
      activeTooltipRef.current = {
        id: config.id,
        close: config.close,
      }
    },
    []
  )

  const cancelPendingHide: TooltipContextValue["cancelPendingHide"] =
    useCallback((id) => {
      if (hideTimeoutRef.current == null) return
      if (leavingTooltipRef.current.id !== id) return

      clearTimeout(hideTimeoutRef.current)
      hideTimeoutRef.current = null
      leavingTooltipRef.current = {
        id: null,
        close: null,
      }
    }, [])

  const registerHoverStart = useCallback(() => {
    const now = Date.now()
    const lastLeave = lastTriggerLeaveTimeRef.current

    // If we're within the hide delay window after a trigger was left,
    // adjust the behaviour:
    // - Moving to a *different* trigger: hide the previous tooltip
    //   immediately and show the new one instantly (no delay).
    // - Re-entering the *same* trigger: keep the tooltip visible and
    //   cancel any pending hide.
    if (
      lastLeave != null &&
      now - lastLeave < HIDE_DELAY &&
      leavingTooltipRef.current.id
    ) {
      const isSameTooltip =
        leavingTooltipRef.current.id === activeTooltipRef.current.id

      // Cancel any scheduled hide.
      if (hideTimeoutRef.current != null) {
        clearTimeout(hideTimeoutRef.current)
        hideTimeoutRef.current = null
      }

      if (!isSameTooltip) {
        // Moving between different triggers inside the hide window:
        // hide the previous tooltip immediately and show the new one
        // without delay.
        leavingTooltipRef.current.close?.()
      }

      // Reset leaving tooltip tracking once handled.
      leavingTooltipRef.current = {
        id: null,
        close: null,
      }

      return 0
    }

    // Default behaviour: first hover after the hide window uses the
    // standard show delay.
    return SHOW_DELAY
  }, [lastTriggerLeaveTime])

  const notifyVisible = useCallback(() => {
    setLastVisibleTime(Date.now())
  }, [])

  const notifyHoverEnd = useCallback(() => {
    const now = Date.now()
    setLastTriggerLeaveTime(now)
    lastTriggerLeaveTimeRef.current = now

    // Start a hide timer for the tooltip that has just been left.
    if (!activeTooltipRef.current.id || !activeTooltipRef.current.close) {
      return
    }

    leavingTooltipRef.current = {
      id: activeTooltipRef.current.id,
      close: activeTooltipRef.current.close,
    }

    if (hideTimeoutRef.current != null) {
      clearTimeout(hideTimeoutRef.current)
    }

    hideTimeoutRef.current = window.setTimeout(() => {
      hideTimeoutRef.current = null
      leavingTooltipRef.current.close?.()
      leavingTooltipRef.current = {
        id: null,
        close: null,
      }
    }, HIDE_DELAY)
  }, [])

  const contextValue: TooltipContextValue = useMemo(
    () => ({
      lastTriggerLeaveTime,
      lastVisibleTime,
      registerHoverStart,
      notifyVisible,
      notifyHoverEnd,
      setActiveTooltip,
      cancelPendingHide,
    }),
    [
      lastTriggerLeaveTime,
      lastVisibleTime,
      registerHoverStart,
      notifyVisible,
      notifyHoverEnd,
      setActiveTooltip,
      cancelPendingHide,
    ]
  )

  return (
    <RawTooltipContext.Provider value={contextValue}>
      {children}
    </RawTooltipContext.Provider>
  )
}

export { TooltipContext, useTooltipContext }
