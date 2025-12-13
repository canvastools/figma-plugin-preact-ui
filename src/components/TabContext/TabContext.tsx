import { createContext } from "preact"
import { useContext, useState, useEffect, useRef } from "preact/hooks"
import type { TabContextValue, TabContextProps } from "./TabContext.types"

/* --- */

const RawTabContext = createContext<TabContextValue | undefined>(undefined)

const useTabContext = () => {
  const context = useContext(RawTabContext)
  if (!context) throw new Error("TabContext not found")
  return context
}

const TabContext = ({
  defaultValue = "",
  value: controlledValue,
  onChange,
  children,
}: TabContextProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue)

  const currentValue =
    controlledValue !== undefined ? controlledValue : internalValue

  const handleChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue)
    }
    onChange?.({ value: newValue })
  }

  useEffect(() => {
    if (controlledValue !== undefined) {
      setInternalValue(controlledValue)
    }
  }, [controlledValue])

  const tabRegistryRef = useRef<
    { value: string; ref: HTMLButtonElement | null }[]
  >([])
  const lastTabDirectionRef = useRef<"forward" | "backward" | null>(null)

  const registerTab = (value: string, ref: HTMLButtonElement | null) => {
    const registry = tabRegistryRef.current
    const existingIndex = registry.findIndex((tab) => tab.value === value)

    // Unregister when ref becomes null (unmount)
    if (!ref) {
      if (existingIndex !== -1) {
        registry.splice(existingIndex, 1)
      }
      return
    }

    if (existingIndex === -1) {
      registry.push({ value, ref })
    } else {
      registry[existingIndex].ref = ref
    }
  }

  const focusTab = (id?: string) => {
    const registry = tabRegistryRef.current
    if (!registry.length) return

    const targetValue = id ?? registry[0]?.value
    if (!targetValue) return

    const target =
      registry.find((tab) => tab.value === targetValue) ?? registry[0]
    if (target?.ref) {
      target.ref.focus()
    }
  }

  const moveFocus = (direction: "next" | "prev") => {
    const registry = tabRegistryRef.current
    if (!registry.length) return

    const activeElement = document.activeElement as HTMLElement | null

    let currentIndex = activeElement
      ? registry.findIndex((tab) => tab.ref === activeElement)
      : -1
    if (currentIndex === -1) currentIndex = 0

    const dir = direction === "next" ? 1 : -1
    const nextIndex = (currentIndex + dir + registry.length) % registry.length

    const next = registry[nextIndex]
    if (next?.ref) {
      next.ref.focus()
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key
    const isArrowKey =
      key === "ArrowLeft" ||
      key === "ArrowRight" ||
      key === "ArrowUp" ||
      key === "ArrowDown" ||
      key === "Tab"

    if (isArrowKey) {
      const activeElement = document.activeElement as HTMLElement | null
      const registry = tabRegistryRef.current
      const isTabFocused = activeElement
        ? registry.some((tab) => tab.ref === activeElement)
        : false
      if (!isTabFocused) return

      const activeIndex = activeElement
        ? registry.findIndex((tab) => tab.ref === activeElement)
        : -1

      // Special handling for Tab / Shift+Tab so focus can leave the tab list
      if (key === "Tab") {
        const lastIndex = registry.length - 1

        // If we're on the last tab and pressing Tab (forwards),
        // or on the first tab and pressing Shift+Tab (backwards),
        // allow the browser to move focus out of the tab list.
        if (
          (!event.shiftKey && activeIndex === lastIndex) ||
          (event.shiftKey && activeIndex === 0)
        ) {
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

      const direction =
        key === "ArrowRight" || key === "ArrowDown" ? "next" : "prev"

      moveFocus(direction)
      return
    }

    if (key === "Escape" || key === "Esc") {
      const activeElement = document.activeElement as HTMLElement | null
      const registry = tabRegistryRef.current
      const isTabFocused = activeElement
        ? registry.some((tab) => tab.ref === activeElement)
        : false
      if (!isTabFocused) return

      if (activeElement && typeof activeElement.blur === "function") {
        activeElement.blur()
      }
    }
  }

  const contextValue: TabContextValue = {
    value: currentValue,
    onChange: handleChange,
    setValue: setInternalValue,
    registerTab,
    focusTab,
  }

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      handleKeyDown(event)
    }

    window.addEventListener("keydown", listener)
    return () => {
      window.removeEventListener("keydown", listener)
    }
  }, [])

  // Track last Tab / Shift+Tab direction globally and when focus enters the
  // tab list (onto any tab), snap it to the first/last tab based on the
  // direction – similar to SegmentedControl behavior.
  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return
      lastTabDirectionRef.current = event.shiftKey ? "backward" : "forward"
    }

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) return

      const registry = tabRegistryRef.current
      const index = registry.findIndex((tab) => tab.ref === target)
      if (index === -1) return

      const direction = lastTabDirectionRef.current
      if (!direction) return

      const targetIndex = direction === "backward" ? registry.length - 1 : 0
      if (targetIndex < 0) return

      const next = registry[targetIndex]
      if (next?.ref && next.ref !== target) {
        next.ref.focus()
      }

      lastTabDirectionRef.current = null
    }

    window.addEventListener("keydown", handleGlobalKeyDown)
    window.addEventListener("focusin", handleFocusIn)

    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown)
      window.removeEventListener("focusin", handleFocusIn)
    }
  }, [])

  return (
    <RawTabContext.Provider value={contextValue}>
      {children}
    </RawTabContext.Provider>
  )
}

export { TabContext, useTabContext }
