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

  const [focusedItemId, setFocusedItemState] = useState<string | null>(null)
  const [lastHoveredItemId, setLastHoveredItemId] = useState<string | null>(
    null
  )
  const [keyboardInteraction, setKeyboardInteraction] = useState(false)
  const [hoverFrozen, setHoverFrozen] = useState(false)
  const [lastInteractionItemId, setLastInteractionItemId] = useState<
    string | null
  >(null)

  const registerItem = useCallback((meta: MenuItemMetadata) => {
    itemsRef.current.push(meta)
    return () => {
      itemsRef.current = itemsRef.current.filter((item) => item.id !== meta.id)
    }
  }, [])

  const getEnabledItemsInDomOrder = useCallback((): MenuItemMetadata[] => {
    const enabledWithRef = itemsRef.current.filter(
      (item) => !item.disabled && item.ref.current
    )
    return enabledWithRef.slice().sort((a, b) => {
      const aNode = a.ref.current
      const bNode = b.ref.current
      if (!aNode || !bNode || aNode === bNode) return 0
      const pos = aNode.compareDocumentPosition(bNode)
      if (pos & Node.DOCUMENT_POSITION_FOLLOWING) return -1
      if (pos & Node.DOCUMENT_POSITION_PRECEDING) return 1
      return 0
    })
  }, [])

  const focusItem = useCallback(
    (id?: string) => {
      const enabledItems = getEnabledItemsInDomOrder()
      if (!enabledItems.length) return

      const targetId = id ?? enabledItems[0]?.id
      const item = enabledItems.find((entry) => entry.id === targetId)
      if (item && item.ref.current) {
        item.ref.current.focus({ preventScroll: true })
        setFocusedItemState(targetId ?? null)
        setLastInteractionItemId(targetId ?? null)
      }
    },
    [getEnabledItemsInDomOrder]
  )

  const clearFocus = useCallback(() => {
    // While hover is frozen after a keyboard activation, ignore attempts
    // to clear the focused item from hover events so that focus remains
    // on the last keyboard-activated item.
    if (hoverFrozen) return
    setFocusedItemState(null)
  }, [hoverFrozen])

  const setHoveredItem = useCallback(
    (id: string | null) => {
      // When hover is frozen (right after a keyboard activation), ignore
      // hover updates until the user actually moves the mouse again.
      if (hoverFrozen) return

      setLastHoveredItemId(id)
      // Any mouse hover indicates the user is back in hover navigation mode,
      // so we clear the keyboard interaction styling flag.
      if (id !== null) {
        setKeyboardInteraction(false)
      }
    },
    [hoverFrozen]
  )

  const moveFocus = useCallback(
    (direction: "next" | "prev") => {
      const enabledItems = getEnabledItemsInDomOrder()
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
        target.ref.current.focus({ preventScroll: true })
        setFocusedItemState(target.id)
        setLastInteractionItemId(target.id)
      }
    },
    [focusedItemId, getEnabledItemsInDomOrder]
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
      // Explicitly mark this as a non-keyboard open so we don't auto-focus on open
      lastOpenViaKeyboardRef.current = false
      setOpen?.(!open)
    }

    triggerEl.addEventListener("mousedown", handleMouseDown)

    return () => {
      triggerEl.removeEventListener("mousedown", handleMouseDown)
    }
  }, [triggerRef, open, setOpen])

  useEffect(() => {
    if (!open) {
      setFocusedItemState(null)
      setLastHoveredItemId(null)
      setKeyboardInteraction(false)
      setHoverFrozen(false)
      setLastInteractionItemId(null)
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

    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, shiftKey, metaKey, ctrlKey, altKey } = event
      const target = event.target as HTMLElement | null

      if (metaKey || ctrlKey || altKey) return

      // Activate the currently active menu item with Enter / Space.
      if (key === "Enter" || key === " ") {
        // When the menu is open, ignore activation keys coming from inputs
        // or editable elements to avoid breaking text fields.
        if (
          target &&
          (target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.isContentEditable)
        ) {
          return
        }

        event.preventDefault()
        event.stopPropagation()

        const enabledItems = getEnabledItemsInDomOrder()
        if (!enabledItems.length) return

        let activeItem: MenuItemMetadata | undefined

        // When we're still in hover-navigation mode (no keyboardInteraction),
        // prefer the last hovered item as the active target.
        if (!keyboardInteraction && lastHoveredItemId) {
          activeItem = enabledItems.find(
            (item) => item.id === lastHoveredItemId
          )
        }

        // Otherwise, or if there's no valid hovered item, fall back to the
        // currently focused item when in keyboard-navigation mode.
        if (!activeItem && focusedItemId) {
          activeItem = enabledItems.find((item) => item.id === focusedItemId)
        }

        // As a final fallback (no hovered or focused item), use the first
        // enabled item so activation never appears to do nothing.
        if (!activeItem) {
          activeItem = enabledItems[0]
        }

        if (activeItem?.ref.current) {
          // Trigger the item's action
          activeItem.ref.current.click()

          // Align logical focus and navigation anchor with the activated item
          activeItem.ref.current.focus({ preventScroll: true })
          setFocusedItemState(activeItem.id)
          setLastInteractionItemId(activeItem.id)
          setKeyboardInteraction(true)

          // After a keyboard activation, freeze hover so that any pointer that
          // happens to be resting over the menu doesn't immediately steal the
          // visual focus back until the user actually moves the mouse again.
          setHoverFrozen(true)
        }
        return
      }

      // Global Tab navigation within an open menu
      if (key === "Tab") {
        event.preventDefault()
        event.stopPropagation()
        const direction = shiftKey ? "prev" : "next"
        moveFocus(direction)
        // Tab-driven navigation is also considered keyboard interaction mode
        setKeyboardInteraction(true)
        return
      }

      // Once the menu is open (regardless of how it was opened), handle keyboard
      // navigation with ArrowUp/ArrowDown.
      if (key === "ArrowDown" || key === "ArrowUp") {
        // Don't steal arrow keys from text fields or editable areas
        if (
          target &&
          (target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.isContentEditable)
        ) {
          return
        }
        event.preventDefault()
        event.stopPropagation()

        const enabledItems = getEnabledItemsInDomOrder()
        if (!enabledItems.length) return

        const total = enabledItems.length

        // If no item is currently focused (e.g. menu was opened via mouse or
        // focus was cleared by hover) we need to determine the *starting*
        // keyboard focus.
        if (!focusedItemId) {
          // 1) Fresh from pure hover (no keyboardInteraction yet) – apply the
          //    one-time "skip hovered" rule so the first ArrowUp/Down moves off
          //    the hovered item.
          if (!keyboardInteraction && lastHoveredItemId) {
            const hoveredIndex = enabledItems.findIndex(
              (item) => item.id === lastHoveredItemId
            )

            if (hoveredIndex !== -1) {
              const nextIndex =
                key === "ArrowDown"
                  ? (hoveredIndex + 1) % total
                  : (hoveredIndex - 1 + total) % total

              const nextItem = enabledItems[nextIndex]
              if (nextItem?.ref.current) {
                nextItem.ref.current.focus({ preventScroll: true })
                setFocusedItemState(nextItem.id)
                setLastInteractionItemId(nextItem.id)
                // Keyboard navigation has now taken over from hover.
                setKeyboardInteraction(true)
              }
              return
            }
          }

          // 2) We have a remembered interaction anchor (e.g. after a mouse
          //    click or keyboard activation) but focusedItemId was cleared
          //    by a hover event – continue from the last interacted item.
          if (lastInteractionItemId) {
            const anchorIndex = enabledItems.findIndex(
              (item) => item.id === lastInteractionItemId
            )
            if (anchorIndex !== -1) {
              const nextIndex =
                key === "ArrowDown"
                  ? (anchorIndex + 1) % total
                  : (anchorIndex - 1 + total) % total

              const nextItem = enabledItems[nextIndex]
              if (nextItem?.ref.current) {
                nextItem.ref.current.focus({ preventScroll: true })
                setFocusedItemState(nextItem.id)
                setLastInteractionItemId(nextItem.id)
                setKeyboardInteraction(true)
              }
              return
            }
          }

          // 3) Fallback – no usable hovered or interaction anchor; start at
          //    the first enabled item.
          focusItem(undefined)
          setKeyboardInteraction(true)
          return
        }

        // Normal sequential navigation starting from the currently focused item.
        const currentIndex = enabledItems.findIndex(
          (item) => item.id === focusedItemId
        )
        const safeIndex = currentIndex === -1 ? 0 : currentIndex
        const nextIndex =
          key === "ArrowDown"
            ? (safeIndex + 1) % total
            : (safeIndex - 1 + total) % total

        const nextItem = enabledItems[nextIndex]
        if (nextItem?.ref.current) {
          nextItem.ref.current.focus({ preventScroll: true })
          setFocusedItemState(nextItem.id)
          setLastInteractionItemId(nextItem.id)
          setKeyboardInteraction(true)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown, true)
    return () => {
      window.removeEventListener("keydown", handleKeyDown, true)
    }
  }, [
    open,
    moveFocus,
    focusItem,
    focusedItemId,
    lastHoveredItemId,
    keyboardInteraction,
    lastInteractionItemId,
  ])

  // Resume hover handling only after the user actually moves the mouse again
  // following a keyboard activation.
  useEffect(() => {
    if (!open) return

    const handlePointerMove = () => {
      if (hoverFrozen) {
        setHoverFrozen(false)
      }
    }

    window.addEventListener("pointermove", handlePointerMove)
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
    }
  }, [open, hoverFrozen])

  useEffect(() => {
    if (!open) return

    const TYPEAHEAD_TIMEOUT = 500

    const handleTypeahead = (event: KeyboardEvent) => {
      const { key, metaKey, ctrlKey, altKey } = event

      if (metaKey || ctrlKey || altKey) return
      // Space is reserved as an activation key for the focused item,
      // so we explicitly exclude it from typeahead.
      if (key === " ") return
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

      const enabledItems = getEnabledItemsInDomOrder()
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
        target.ref.current.focus({ preventScroll: true })
        setFocusedItemState(target.id)
        setLastInteractionItemId(target.id)
      }
    }

    window.addEventListener("keydown", handleTypeahead)
    return () => {
      window.removeEventListener("keydown", handleTypeahead)
    }
  }, [open])

  const setFocusedItem = useCallback((id: string | null) => {
    setFocusedItemState(id)
  }, [])

  const contextValue: MenuContextValue = {
    triggerRef: triggerRef as MenuContextValue["triggerRef"],
    anchorRef: resolvedAnchorRef,
    open: open !== undefined ? open : false,
    setOpen: setOpen !== undefined ? setOpen : () => {},
    registerItem,
    focusedItemId,
    setFocusedItem,
    clearFocus,
    setHoveredItem,
    keyboardInteraction,
  }

  return (
    <RawMenuContext.Provider value={contextValue}>
      {children}
    </RawMenuContext.Provider>
  )
}

export { MenuContext, useMenuContext, RawMenuContext }
