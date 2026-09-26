import { createContext } from 'preact'

import { useContext, useEffect, useMemo } from 'preact/hooks'

import { useRefElement } from '../../utils'

import type { PopoverContextProps, PopoverContextValue } from './PopoverContext.types'

/* --- */

const RawPopoverContext = createContext<PopoverContextValue | undefined>(undefined)

const usePopoverContext = () => {
  const context = useContext(RawPopoverContext)
  if (!context) throw new Error('PopoverContext not found')
  return context
}
const PopoverContext = ({ triggerRef, anchorRef, open, setOpen, children }: PopoverContextProps) => {
  const resolvedAnchorRef = (anchorRef ?? triggerRef) as PopoverContextValue['anchorRef']

  // Resolve the trigger element through state so listeners are attached even
  // when the trigger mounts after this provider (e.g. conditional rendering).
  const triggerEl = useRefElement(triggerRef as preact.RefObject<HTMLElement | null> | undefined)

  const contextValue: PopoverContextValue = useMemo(
    () => ({
      triggerRef: triggerRef as PopoverContextValue['triggerRef'],
      anchorRef: resolvedAnchorRef,
      open: open !== undefined ? open : false,
      setOpen: setOpen,
    }),
    [triggerRef, resolvedAnchorRef, open, setOpen],
  )

  useEffect(() => {
    if (!triggerEl) return

    const handleMouseDown = (event: MouseEvent) => {
      event.preventDefault()
      setOpen?.(!open)
    }

    const handleEnter = (event: KeyboardEvent) => {
      const { key } = event

      if (key === 'Enter' || key === ' ') {
        if (open) return
        event.preventDefault()
        setOpen?.(true)
        return
      }
    }

    triggerEl.addEventListener('mousedown', handleMouseDown)
    triggerEl.addEventListener('keydown', handleEnter)

    return () => {
      triggerEl.removeEventListener('mousedown', handleMouseDown)
      triggerEl.removeEventListener('keydown', handleEnter)
    }
  }, [triggerEl, open, setOpen])

  // Global Escape handling while popover is open
  useEffect(() => {
    if (!open) return

    const handleEscape = (event: KeyboardEvent) => {
      const { key } = event
      if (key !== 'Escape' && key !== 'Esc') return
      // An overlay of its own — a select's menu opened from inside — closes itself first
      const target = event.target instanceof Element ? event.target : null
      const overlay = target?.closest('.OverlayPositioner')
      if (overlay && !overlay.querySelector('.PopoverContainer')) return
      event.preventDefault()
      setOpen?.(false)
      triggerRef?.current?.focus()
    }

    // In the capture phase, so the popover takes Esc before anything under it
    // hears it — and whatever does hear it sees `defaultPrevented` and leaves it.
    window.addEventListener('keydown', handleEscape, true)
    return () => {
      window.removeEventListener('keydown', handleEscape, true)
    }
  }, [open, setOpen, triggerRef])

  return <RawPopoverContext.Provider value={contextValue}>{children}</RawPopoverContext.Provider>
}

export { PopoverContext, usePopoverContext }
