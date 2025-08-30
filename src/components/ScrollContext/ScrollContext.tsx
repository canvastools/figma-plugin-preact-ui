import { createContext } from "preact"
import { useContext, useState, useEffect } from "preact/hooks"
import { useRef } from "preact/hooks"

import type {
  ScrollContextValue,
  ScrollContextProps,
} from "./ScrollContext.types"

/* --- */

const RawScrollContext = createContext<ScrollContextValue | undefined>(
  undefined
)

const useScrollContext = () => {
  const context = useContext(RawScrollContext)
  if (!context) throw new Error("ScrollContext not found")
  return context
}

const ScrollContext = ({
  defaultPositionY = 0,
  positionY: controlledPositionY,
  onScroll,
  children,
}: ScrollContextProps) => {
  const [internalPositionY, setInternalPositionY] =
    useState<number>(defaultPositionY)
  const [isAtTop, setIsAtTop] = useState<boolean>(defaultPositionY === 0)
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false)
  const lastKnownMaxScrollTopRef = useRef<number | null>(null)

  const currentPositionY =
    controlledPositionY !== undefined ? controlledPositionY : internalPositionY

  const handleScroll = (event: Event) => {
    const target = event.target as HTMLElement
    if (!target) return

    const maxScrollTop = target.scrollHeight - target.clientHeight
    lastKnownMaxScrollTopRef.current = maxScrollTop
    const atTop = maxScrollTop <= 0 || target.scrollTop <= 0
    const atBottom = maxScrollTop > 0 && target.scrollTop >= maxScrollTop
    const newPositionY: number = atTop
      ? 0
      : atBottom
      ? maxScrollTop
      : target.scrollTop
    setIsAtTop(atTop)
    setIsAtBottom(atBottom)

    if (controlledPositionY === undefined) {
      setInternalPositionY(newPositionY)
    }

    onScroll?.({ positionY: newPositionY })
  }

  const updatePositionY = (positionY: number) => {
    setInternalPositionY(positionY)
    setIsAtTop(positionY === 0)
    const max = lastKnownMaxScrollTopRef.current
    if (typeof max === "number") {
      setIsAtBottom(positionY >= max && max > 0)
    }
  }

  useEffect(() => {
    if (controlledPositionY !== undefined) {
      updatePositionY(controlledPositionY)
    }
  }, [controlledPositionY])

  const contextValue: ScrollContextValue = {
    positionY: currentPositionY,
    isAtTop,
    isAtBottom,
    onScroll: handleScroll,
    setPositionY: updatePositionY,
  }

  return (
    <RawScrollContext.Provider value={contextValue}>
      {children}
    </RawScrollContext.Provider>
  )
}

export { ScrollContext, useScrollContext }
