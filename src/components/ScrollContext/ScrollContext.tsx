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
  spyThreshold = 0,
  onSpyTargetChange,
  children,
}: ScrollContextProps) => {
  const [internalPositionY, setInternalPositionY] =
    useState<number>(defaultPositionY)
  const [isAtTop, setIsAtTop] = useState<boolean>(defaultPositionY === 0)
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false)

  const [spyActiveId, setSpyActiveId] = useState<string | null>(null)

  const lastKnownMaxScrollTopRef = useRef<number | null>(null)

  const spyThresholdRef = useRef<number>(spyThreshold)
  const spyRootRef = useRef<HTMLElement | null>(null)
  const spyTargetsRef = useRef<{ id: string; element: HTMLElement | null }[]>(
    []
  )
  const spyRafIdRef = useRef<number | null>(null)

  const currentPositionY =
    controlledPositionY !== undefined ? controlledPositionY : internalPositionY

  const evaluateSpyActiveId = () => {
    const root = spyRootRef.current
    if (!root) return

    const targets = spyTargetsRef.current
    if (!targets.length) {
      if (spyActiveId !== null) {
        setSpyActiveId(null)
        onSpyTargetChange?.({ id: null })
      }
      return
    }

    const rootRect = root.getBoundingClientRect()
    const threshold = spyThresholdRef.current ?? 0

    let bestId: string | null = null
    let bestDistance = -Infinity

    for (const { id, element } of targets) {
      if (!element) continue
      const rect = element.getBoundingClientRect()
      const distance = rect.top - rootRect.top - threshold
      if (distance <= 0 && distance > bestDistance) {
        bestDistance = distance
        bestId = id
      }
    }

    if (bestId !== spyActiveId) {
      setSpyActiveId(bestId)
      onSpyTargetChange?.({ id: bestId ?? null })
    }
  }

  const scheduleSpyUpdate = () => {
    if (spyRafIdRef.current != null) return
    spyRafIdRef.current = requestAnimationFrame(() => {
      spyRafIdRef.current = null
      try {
        evaluateSpyActiveId()
      } catch {
        // ignore DOM read issues
      }
    })
  }

  const registerScrollRoot = (ref: HTMLElement | null) => {
    spyRootRef.current = ref
    // Whenever the root changes, recompute active target.
    if (ref) {
      scheduleSpyUpdate()
    }
  }

  const registerSpyTarget = (id: string, ref: HTMLElement | null) => {
    const registry = spyTargetsRef.current
    const existingIndex = registry.findIndex((entry) => entry.id === id)

    // Unregister when element becomes null (unmount)
    if (!ref) {
      if (existingIndex !== -1) {
        registry.splice(existingIndex, 1)
        scheduleSpyUpdate()
      }
      return
    }

    if (existingIndex === -1) {
      registry.push({ id, element: ref })
    } else {
      registry[existingIndex].element = ref
    }

    scheduleSpyUpdate()
  }

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

    // Schedule scroll spy update after scroll position changes.
    if (spyTargetsRef.current.length && spyRootRef.current) {
      scheduleSpyUpdate()
    }
  }

  const updatePositionY = (positionY: number) => {
    setInternalPositionY(positionY)
    const max = lastKnownMaxScrollTopRef.current
    const hasScrollable = typeof max === "number" && max > 0
    setIsAtTop(hasScrollable ? positionY === 0 : true)
    setIsAtBottom(hasScrollable ? positionY >= (max as number) : true)
  }

  const resetPositionY = () => {
    updatePositionY(0)
  }

  useEffect(() => {
    if (controlledPositionY !== undefined) {
      updatePositionY(controlledPositionY)
    }
  }, [controlledPositionY])

  useEffect(() => {
    spyThresholdRef.current = spyThreshold
    scheduleSpyUpdate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spyThreshold])

  const contextValue: ScrollContextValue = {
    positionY: currentPositionY,
    isAtTop,
    isAtBottom,
    onScroll: handleScroll,
    setPositionY: updatePositionY,
    resetPositionY,
    spyActiveId,
    registerSpyTarget,
    registerScrollRoot,
  }

  return (
    <RawScrollContext.Provider value={contextValue}>
      {children}
    </RawScrollContext.Provider>
  )
}

export { ScrollContext, useScrollContext }
