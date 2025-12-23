export interface TooltipContextValue {
  lastTriggerLeaveTime: number | null
  lastVisibleTime: number | null
  registerHoverStart: () => number
  notifyVisible: () => void
  notifyHoverEnd: () => void
  setActiveTooltip?: (config: { id: symbol; close: () => void }) => void
  cancelPendingHide?: (id: symbol) => void
}

export interface TooltipContextProps {
  children: preact.ComponentChildren
}
