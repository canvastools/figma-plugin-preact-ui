import { createContext } from "preact"

import { useContext, useEffect } from "preact/hooks"

import type {
  PopoverContextProps,
  PopoverContextValue,
} from "./PopoverContext.types"

/* --- */

const RawPopoverContext = createContext<PopoverContextValue | undefined>(
  undefined
)

const usePopoverContext = () => {
  const context = useContext(RawPopoverContext)
  if (!context) throw new Error("PopoverContext not found")
  return context
}
const PopoverContext = ({
  triggerRef,
  anchorRef,
  open,
  setOpen,
  children,
}: PopoverContextProps) => {
  const resolvedAnchorRef = (anchorRef ??
    triggerRef) as PopoverContextValue["anchorRef"]

  const contextValue: PopoverContextValue = {
    triggerRef: triggerRef as PopoverContextValue["triggerRef"],
    anchorRef: resolvedAnchorRef,
    open: open !== undefined ? open : false,
    setOpen: setOpen,
  }

  useEffect(() => {
    if (!triggerRef?.current) return
    const triggerEl = triggerRef.current

    const handleMouseDown = (event: MouseEvent) => {
      event.preventDefault()
      setOpen?.(!open)
    }

    const handleEnter = (event: KeyboardEvent) => {
      const { key } = event

      if (key === "Enter" || key === " ") {
        if (open) return
        event.preventDefault()
        setOpen?.(true)
        return
      }
    }

    triggerEl.addEventListener("mousedown", handleMouseDown)
    triggerEl.addEventListener("keydown", handleEnter)

    return () => {
      triggerEl.removeEventListener("mousedown", handleMouseDown)
      triggerEl.removeEventListener("keydown", handleEnter)
    }
  }, [triggerRef, open, setOpen])

  // Global Escape handling while popover is open
  useEffect(() => {
    if (!open) return

    const handleEscape = (event: KeyboardEvent) => {
      const { key } = event
      if (key !== "Escape" && key !== "Esc") return
      event.preventDefault()
      setOpen?.(false)
      triggerRef?.current?.focus()
    }

    window.addEventListener("keydown", handleEscape)
    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [open, setOpen, triggerRef])

  return (
    <RawPopoverContext.Provider value={contextValue}>
      {children}
    </RawPopoverContext.Provider>
  )
}

export { PopoverContext, usePopoverContext }
