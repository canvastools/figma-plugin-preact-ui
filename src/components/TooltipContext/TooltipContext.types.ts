export interface TooltipContextValue {
  lastTriggerLeaveTime: number | null
  lastVisibleTime: number | null
  registerHoverStart: () => number
  notifyVisible: () => void
  notifyHoverEnd: () => void
}

export interface TooltipContextProps {
  children: preact.ComponentChildren
}
