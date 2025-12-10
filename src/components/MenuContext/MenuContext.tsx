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

      if (key === "Escape") {
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

    const handleClick = (event: MouseEvent) => {
      event.preventDefault()
      setOpen?.(!open)
    }

    triggerEl.addEventListener("click", handleClick)

    return () => {
      triggerEl.removeEventListener("click", handleClick)
    }
  }, [triggerRef, open, setOpen])

  useEffect(() => {
    if (!open) {
      setFocusedItemId(null)
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
