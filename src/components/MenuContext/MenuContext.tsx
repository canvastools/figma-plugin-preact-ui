import { createContext } from "preact"
import {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "preact/hooks"
import type {
  MenuContextValue,
  MenuContextProps,
  MenuItemMetadata,
} from "./MenuContext.types"

/* --- */

const RawMenuContext = createContext<MenuContextValue | undefined>(undefined)

const useMenuContext = () => {
  const context = useContext(RawMenuContext)
  if (!context) throw new Error("MenuContext not found")
  return context
}

const MenuContext = ({
  triggerRef,
  anchorRef,
  open,
  setOpen,
  children,
}: MenuContextProps) => {
  const itemsRef = useRef<MenuItemMetadata[]>([])
  const lastOpenViaKeyboardRef = useRef(false)
  const typeaheadRef = useRef<{ query: string; lastTime: number }>({
    query: "",
    lastTime: 0,
  })

  const [focusedItemId, setFocusedItemId] = useState<string | null>(null)

  const registerItem = useCallback((meta: MenuItemMetadata) => {
    itemsRef.current.push(meta)
    return () => {
      itemsRef.current = itemsRef.current.filter((item) => item.id !== meta.id)
    }
  }, [])

  const focusItem = useCallback((id?: string) => {
    const enabledItems = itemsRef.current.filter((item) => !item.disabled)
    if (!enabledItems.length) return

    const targetId = id ?? enabledItems[0]?.id
    const item = enabledItems.find((entry) => entry.id === targetId)
    if (item && item.ref.current) {
      item.ref.current.focus()
      setFocusedItemId(targetId ?? null)
    }
  }, [])

  const clearFocusedItem = useCallback(() => {
    setFocusedItemId(null)
  }, [])

  const moveFocus = useCallback(
    (direction: "next" | "prev") => {
      const enabledItems = itemsRef.current.filter((item) => !item.disabled)
      if (!enabledItems.length) return

      const currentIndex = enabledItems.findIndex(
        (item) => item.id === focusedItemId
      )

      let nextIndex: number
      if (currentIndex === -1) {
        nextIndex = direction === "next" ? 0 : enabledItems.length - 1
      } else if (direction === "next") {
        nextIndex = (currentIndex + 1) % enabledItems.length
      } else {
        nextIndex =
          (currentIndex - 1 + enabledItems.length) % enabledItems.length
      }

      const target = enabledItems[nextIndex]
      if (target?.ref.current) {
        target.ref.current.focus()
        setFocusedItemId(target.id)
      }
    },
    [focusedItemId]
  )

  useEffect(() => {
    if (!triggerRef?.current) return
    const triggerEl = triggerRef.current

    const handleKeys = (event: KeyboardEvent) => {
      const { key } = event

      if (key === "Escape" || key === "Esc") {
        if (!open) return
        event.preventDefault()
        setOpen?.(false)
        triggerEl.focus()
        return
      }

      if (key === "Enter" || key === " ") {
        event.preventDefault()
        if (!open) {
          lastOpenViaKeyboardRef.current = true
          setOpen?.(true)
        } else {
          const enabledItems = itemsRef.current.filter((item) => !item.disabled)
          if (!enabledItems.length) return

          const current =
            enabledItems.find((item) => item.id === focusedItemId) ??
            enabledItems[0]

          current.ref.current?.click()
        }
        return
      }

      if (key === "ArrowDown") {
        event.preventDefault()
        if (!open) {
          lastOpenViaKeyboardRef.current = true
          setOpen?.(true)
        } else {
          moveFocus("next")
        }
        return
      }

      if (key === "ArrowUp" && open) {
        event.preventDefault()
        moveFocus("prev")
      }
    }

    triggerEl.addEventListener("keydown", handleKeys)

    return () => {
      triggerEl.removeEventListener("keydown", handleKeys)
    }
  }, [triggerRef, open, setOpen, focusedItemId, moveFocus])

  useEffect(() => {
    if (!triggerRef?.current) return
    const triggerEl = triggerRef.current

    const handleMouseDown = (event: MouseEvent) => {
      event.preventDefault()
      setOpen?.(!open)
    }

    triggerEl.addEventListener("mousedown", handleMouseDown)

    return () => {
      triggerEl.removeEventListener("mousedown", handleMouseDown)
    }
  }, [triggerRef, open, setOpen])

  useEffect(() => {
    if (!open) {
      setFocusedItemId(null)
      typeaheadRef.current = { query: "", lastTime: 0 }
      return
    }

    if (!lastOpenViaKeyboardRef.current) return
    lastOpenViaKeyboardRef.current = false

    requestAnimationFrame(() => {
      focusItem(undefined)
    })
  }, [open])

  const resolvedAnchorRef = (anchorRef ??
    triggerRef) as MenuContextValue["anchorRef"]

  useEffect(() => {
    if (!open) return

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return
      event.preventDefault()
      const direction = event.shiftKey ? "prev" : "next"
      moveFocus(direction)
    }

    window.addEventListener("keydown", handleTab)
    return () => {
      window.removeEventListener("keydown", handleTab)
    }
  }, [open, moveFocus])

  useEffect(() => {
    if (!open) return

    const TYPEAHEAD_TIMEOUT = 500

    const handleTypeahead = (event: KeyboardEvent) => {
      const { key, metaKey, ctrlKey, altKey } = event

      if (metaKey || ctrlKey || altKey) return
      if (key.length !== 1) return

      const char = key.toLowerCase()
      // Limit to printable characters (basic A-Z/0-9 and common symbols)
      if (!/^[\w !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]$/.test(char)) return

      event.preventDefault()

      const now = Date.now()
      let { query, lastTime } = typeaheadRef.current
      if (now - lastTime > TYPEAHEAD_TIMEOUT) {
        query = ""
      }
      query += char
      typeaheadRef.current = { query, lastTime: now }

      const enabledItems = itemsRef.current.filter((item) => !item.disabled)
      if (!enabledItems.length) return

      const normalizedQuery = query.toLowerCase()

      const getText = (item: MenuItemMetadata): string => {
        const el = item.ref.current
        if (!el) return ""
        return (el.textContent || el.innerText || "").trim().toLowerCase()
      }

      // First try prefix match
      let target =
        enabledItems.find((item) =>
          getText(item).startsWith(normalizedQuery)
        ) ||
        // Fallback to "contains" match
        enabledItems.find((item) => getText(item).includes(normalizedQuery))

      if (target?.ref.current) {
        target.ref.current.focus()
        setFocusedItemId(target.id)
      }
    }

    window.addEventListener("keydown", handleTypeahead)
    return () => {
      window.removeEventListener("keydown", handleTypeahead)
    }
  }, [open])

  const contextValue: MenuContextValue = {
    // id: idRef.current,
    triggerRef: triggerRef as MenuContextValue["triggerRef"],
    anchorRef: resolvedAnchorRef,
    open: open !== undefined ? open : false,
    setOpen: setOpen !== undefined ? setOpen : () => {},
    registerItem,
    focusedItemId,
    focusItem,
    clearFocusedItem,
    // nested: nested,
    // isOpen: isOpen,
    // open: open,
    // close: close,
    // toggle: toggle,
  }

  return (
    <RawMenuContext.Provider value={contextValue}>
      {children}
    </RawMenuContext.Provider>
  )
}

export { MenuContext, useMenuContext }
