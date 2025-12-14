import { createContext } from "preact"
import { useCallback, useContext, useMemo, useState } from "preact/hooks"

import type {
  TooltipContextProps,
  TooltipContextValue,
} from "./TooltipContext.types"

/* --- */

const RawTooltipContext = createContext<TooltipContextValue | undefined>(
  undefined
)

const useTooltipContext = () => {
  const context = useContext(RawTooltipContext)
  return context
}

const TooltipContext = ({ children }: TooltipContextProps) => {
  const [lastTriggerLeaveTime, setLastTriggerLeaveTime] = useState<
    number | null
  >(null)
  const [lastVisibleTime, setLastVisibleTime] = useState<number | null>(null)

  const registerHoverStart = useCallback(() => {
    const now = Date.now()
    if (lastTriggerLeaveTime != null && now - lastTriggerLeaveTime < 500) {
      return 0
    }
    return 1000
  }, [lastTriggerLeaveTime])

  const notifyVisible = useCallback(() => {
    setLastVisibleTime(Date.now())
  }, [])

  const notifyHoverEnd = useCallback(() => {
    setLastTriggerLeaveTime(Date.now())
  }, [])

  const contextValue: TooltipContextValue = useMemo(
    () => ({
      lastTriggerLeaveTime,
      lastVisibleTime,
      registerHoverStart,
      notifyVisible,
      notifyHoverEnd,
    }),
    [
      lastTriggerLeaveTime,
      lastVisibleTime,
      registerHoverStart,
      notifyVisible,
      notifyHoverEnd,
    ]
  )

  return (
    <RawTooltipContext.Provider value={contextValue}>
      {children}
    </RawTooltipContext.Provider>
  )
}

export { TooltipContext, useTooltipContext }
