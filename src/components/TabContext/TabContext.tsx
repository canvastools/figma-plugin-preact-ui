import { createContext } from 'preact'
import { useContext, useState, useEffect, useRef } from 'preact/hooks'

import type { TabContextValue, TabContextProps } from './TabContext.types'

/* --- */

const RawTabContext = createContext<TabContextValue | undefined>(undefined)

const useTabContext = () => {
  const context = useContext(RawTabContext)
  if (!context) throw new Error('TabContext not found')
  return context
}

const TabContext = ({ defaultActiveId = '', activeId: controlledActiveId, onTabChange, children }: TabContextProps) => {
  const [internalActiveId, setInternalActiveId] = useState(defaultActiveId)

  const currentId = controlledActiveId !== undefined ? controlledActiveId : internalActiveId

  const handleChange = (newId: string) => {
    if (controlledActiveId === undefined) {
      setInternalActiveId(newId)
    }
    onTabChange?.({ id: newId })
  }

  useEffect(() => {
    if (controlledActiveId !== undefined) {
      setInternalActiveId(controlledActiveId)
    }
  }, [controlledActiveId])

  const tabRegistryRef = useRef<{ id: string; ref: HTMLButtonElement | null }[]>([])
  const lastTabDirectionRef = useRef<'forward' | 'backward' | null>(null)

  const registerTab = (id: string, ref: HTMLButtonElement | null) => {
    const registry = tabRegistryRef.current
    const existingIndex = registry.findIndex((tab) => tab.id === id)

    // Unregister when ref becomes null (unmount)
    if (!ref) {
      if (existingIndex !== -1) {
        registry.splice(existingIndex, 1)
      }
      return
    }

    if (existingIndex === -1) {
      registry.push({ id, ref })
    } else {
      registry[existingIndex].ref = ref
    }
  }

  const setFocusedTab = (id?: string) => {
    const registry = tabRegistryRef.current
    if (!registry.length) return

    const targetId = id ?? registry[0]?.id
    if (!targetId) return

    const target = registry.find((tab) => tab.id === targetId) ?? registry[0]
    if (target?.ref) {
      target.ref.focus()
    }
  }

  const moveFocus = (direction: 'next' | 'prev') => {
    const registry = tabRegistryRef.current
    if (!registry.length) return

    const activeElement = document.activeElement as HTMLElement | null

    let currentIndex = activeElement ? registry.findIndex((tab) => tab.ref === activeElement) : -1
    if (currentIndex === -1) currentIndex = 0

    const dir = direction === 'next' ? 1 : -1
    const nextIndex = (currentIndex + dir + registry.length) % registry.length

    const next = registry[nextIndex]
    if (next?.ref) {
      next.ref.focus()
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key
    const isArrowKey = key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowUp' || key === 'ArrowDown' || key === 'Tab'

    if (isArrowKey) {
      const activeElement = document.activeElement as HTMLElement | null
      const registry = tabRegistryRef.current
      const isTabFocused = activeElement ? registry.some((tab) => tab.ref === activeElement) : false
      if (!isTabFocused) return

      const activeIndex = activeElement ? registry.findIndex((tab) => tab.ref === activeElement) : -1

      // Special handling for Tab / Shift+Tab so focus can leave the tab list
      if (key === 'Tab') {
        const lastIndex = registry.length - 1

        // If we're on the last tab and pressing Tab (forwards),
        // or on the first tab and pressing Shift+Tab (backwards),
        // allow the browser to move focus out of the tab list.
        if ((!event.shiftKey && activeIndex === lastIndex) || (event.shiftKey && activeIndex === 0)) {
          return
        }

        event.stopPropagation()
        event.preventDefault()

        // We are handling Tab movement inside the tab list manually, so
        // clear the lastTabDirectionRef to avoid any external correction
        // when focus stays within this group.
        lastTabDirectionRef.current = null

        const dir = event.shiftKey ? -1 : 1
        const nextIndex = activeIndex + dir
        const next = registry[nextIndex]
        if (next?.ref) {
          next.ref.focus()
        }
        return
      }

      // Arrow keys: always stay within the tab list and wrap around
      event.stopPropagation()
      event.preventDefault()

      const direction = key === 'ArrowRight' || key === 'ArrowDown' ? 'next' : 'prev'

      moveFocus(direction)
      return
    }

    if (key === 'Escape' || key === 'Esc') {
      const activeElement = document.activeElement as HTMLElement | null
      const registry = tabRegistryRef.current
      const isTabFocused = activeElement ? registry.some((tab) => tab.ref === activeElement) : false
      if (!isTabFocused) return

      if (activeElement && typeof activeElement.blur === 'function') {
        activeElement.blur()
      }
    }
  }

  const contextValue: TabContextValue = {
    activeId: currentId,
    onTabChange: handleChange,
    setActiveTab: setInternalActiveId,
    registerTab,
    setFocusedTab,
  }

  const handleKeyDownRef = useRef(handleKeyDown)
  handleKeyDownRef.current = handleKeyDown

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      handleKeyDownRef.current(event)
    }

    window.addEventListener('keydown', listener)
    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [])

  // Track last Tab / Shift+Tab direction globally and when focus enters the
  // tab list (onto any tab), snap it to the first/last tab based on the
  // direction – similar to SegmentedControl behavior.
  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      lastTabDirectionRef.current = event.shiftKey ? 'backward' : 'forward'
    }

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) return

      const registry = tabRegistryRef.current
      const index = registry.findIndex((tab) => tab.ref === target)
      if (index === -1) return

      const direction = lastTabDirectionRef.current
      if (!direction) return

      const targetIndex = direction === 'backward' ? registry.length - 1 : 0
      if (targetIndex < 0) return

      const next = registry[targetIndex]
      if (next?.ref && next.ref !== target) {
        next.ref.focus()
      }

      lastTabDirectionRef.current = null
    }

    window.addEventListener('keydown', handleGlobalKeyDown)
    window.addEventListener('focusin', handleFocusIn)

    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown)
      window.removeEventListener('focusin', handleFocusIn)
    }
  }, [])

  return <RawTabContext.Provider value={contextValue}>{children}</RawTabContext.Provider>
}

export { TabContext, useTabContext }
