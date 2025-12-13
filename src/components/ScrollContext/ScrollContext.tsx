import { createContext } from "preact"
import { useContext, useState, useEffect, useRef } from "preact/hooks"

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
    const target =
      ((event as { currentTarget?: EventTarget | null })
        .currentTarget as HTMLElement | null) || (event.target as HTMLElement)

    if (!target) return

    const maxScrollTop = target.scrollHeight - target.clientHeight
    lastKnownMaxScrollTopRef.current = maxScrollTop
    const hasScrollable = maxScrollTop > 0
    let atTop = false
    let atBottom = false
    let newPositionY: number

    if (!hasScrollable) {
      newPositionY = 0
    } else {
      atTop = target.scrollTop <= 0
      atBottom = target.scrollTop >= maxScrollTop
      newPositionY = atTop ? 0 : atBottom ? maxScrollTop : target.scrollTop
    }

    setIsAtTop(hasScrollable ? atTop : true)
    setIsAtBottom(hasScrollable ? atBottom : true)

    if (controlledPositionY === undefined) {
      setInternalPositionY(newPositionY)
    }

    onScroll?.({ positionY: newPositionY })
  }

  const updatePositionY = (positionY: number) => {
    setInternalPositionY(positionY)
    const max = lastKnownMaxScrollTopRef.current
    const hasScrollable = typeof max === "number" && max > 0
    setIsAtTop(hasScrollable ? positionY === 0 : true)
    setIsAtBottom(hasScrollable ? positionY >= (max as number) : true)
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
