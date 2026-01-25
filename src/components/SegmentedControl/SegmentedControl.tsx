import { bem, typedForwardRef } from "../../utils"

import { Fragment } from "preact"
import { useEffect, useMemo, useRef, useState } from "preact/hooks"

import type { SegmentedControlProps } from "./SegmentedControl.types"
import "./SegmentedControl.scss"

import { Tooltip, Text, Icon, type Glyph } from "../../index"

/* --- */

const SegmentedControlComponent = (
  {
    className,
    items = [],
    value,
    defaultValue,
    disabled = false,
    fullWidth = false,
    onValueChange,
    ...rest
  }: SegmentedControlProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(
    defaultValue
  )

  const isControlled = value !== undefined
  const selectedValue = isControlled ? (value as string) : internalValue

  useEffect(() => {
    if (isControlled) {
      setInternalValue(value)
    }
  }, [isControlled, value])

  const _className = bem("SegmentedControl", undefined, {
    fullWidth,
  })

  const itemRefs = useRef<Array<HTMLButtonElement | null>>([])
  itemRefs.current = items.map((_, i) => itemRefs.current[i] || null)

  const tooltipAnchorRefs = useRef<
    Array<preact.RefObject<HTMLButtonElement | null>>
  >([])
  tooltipAnchorRefs.current = items.map(
    (_, i) =>
      tooltipAnchorRefs.current[i] ||
      ({ current: null } as preact.RefObject<HTMLButtonElement | null>)
  )

  const lastTabDirectionRef = useRef<"forward" | "backward" | null>(null)

  const selectedIndex = useMemo(
    () => items.findIndex((item) => item.value === selectedValue),
    [items, selectedValue]
  )

  const focusItem = (index: number) => {
    const clamped = Math.max(0, Math.min(items.length - 1, index))
    const el = itemRefs.current[clamped]
    if (el) el.focus()
  }

  const commitChange = (
    event: MouseEvent | KeyboardEvent,
    newValue: string
  ) => {
    if (!isControlled) setInternalValue(newValue)
    onValueChange?.({ event, value: newValue })
  }

  // Track last Tab / Shift+Tab direction globally so that when focus enters
  // this control from the *next* element via Shift+Tab we can correct focus
  // to land on the last segment instead of the first/selected one.
  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return
      lastTabDirectionRef.current = event.shiftKey ? "backward" : "forward"
    }

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) return

      const index = itemRefs.current.findIndex((el) => el === target)
      if (index === -1) return

      const direction = lastTabDirectionRef.current
      if (!direction) return

      const targetIndex = direction === "backward" ? items.length - 1 : 0
      if (targetIndex < 0) return

      const nextEl = itemRefs.current[targetIndex]
      if (nextEl && nextEl !== target) {
        nextEl.focus()
      }

      // Reset after we've handled this focus event
      lastTabDirectionRef.current = null
    }

    window.addEventListener("keydown", handleGlobalKeyDown)
    window.addEventListener("focusin", handleFocusIn)

    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown)
      window.removeEventListener("focusin", handleFocusIn)
    }
  }, [items.length])

  const handleKeyDown = (
    e: preact.JSX.TargetedKeyboardEvent<HTMLDivElement>
  ) => {
    if (disabled) return

    const event = e as KeyboardEvent
    const key = event.key
    const isArrowKey =
      key === "ArrowLeft" ||
      key === "ArrowRight" ||
      key === "ArrowUp" ||
      key === "ArrowDown"

    const isTabKey = key === "Tab"

    // Arrow keys / Tab: move focus only, do not change selection
    if (isArrowKey || isTabKey) {
      const target = event.target as HTMLElement | null
      const rawIndex = target
        ? itemRefs.current.findIndex((el) => el === target)
        : -1

      const currentIndex =
        rawIndex >= 0 ? rawIndex : selectedIndex >= 0 ? selectedIndex : 0

      // Tab: move within the control, but allow focus to leave
      // once we reach the ends (no wrapping). We clear lastTabDirectionRef here
      // because focus changes within the control are handled locally.
      if (isTabKey) {
        lastTabDirectionRef.current = null

        const lastIndex = items.length - 1

        // If we're on the last item and pressing Tab (forwards),
        // or on the first item and pressing Shift+Tab (backwards),
        // allow the browser to move focus out of the control.
        if (
          (!event.shiftKey && currentIndex === lastIndex) ||
          (event.shiftKey && currentIndex === 0)
        ) {
          return
        }

        event.stopPropagation()
        event.preventDefault()

        const dir = event.shiftKey ? -1 : 1
        const nextIndex = currentIndex + dir
        focusItem(nextIndex)
        return
      }

      // Arrow keys: always stay within the control and wrap around
      event.stopPropagation()
      event.preventDefault()

      const dir = key === "ArrowRight" || key === "ArrowDown" ? 1 : -1
      const nextIndex = (currentIndex + dir + items.length) % items.length
      focusItem(nextIndex)
      return
    }

    // Enter / Space: select the currently focused item
    if (key === "Enter" || key === " " || key === "Spacebar") {
      event.stopPropagation()
      event.preventDefault()

      const target = event.target as HTMLElement | null
      const currentIndex = target
        ? itemRefs.current.findIndex((el) => el === target)
        : -1

      const activeIndex =
        currentIndex >= 0
          ? currentIndex
          : selectedIndex >= 0
          ? selectedIndex
          : -1

      if (activeIndex >= 0) {
        const option = items[activeIndex]
        if (option) {
          commitChange(event, option.value)
        }
      }
      return
    }

    // Esc: remove focus from the currently focused element
    if (key === "Escape" || key === "Esc") {
      event.stopPropagation()
      event.preventDefault()

      const target = event.target as HTMLElement | null
      if (target && typeof target.blur === "function") {
        target.blur()
      }
    }
  }

  return (
    <div
      className={[_className, className].join(" ").trim()}
      data-pui-interactive="true"
      ref={ref}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {items.map((item, idx) => {
        const isActive = item.value === selectedValue
        const anchorRef = tooltipAnchorRefs.current[idx]

        const itemClassName = bem("SegmentedControl", "item", {
          selected: isActive,
          disabled,
          icon: Boolean(item.icon),
        })

        return (
          <Fragment key={item.value}>
            <button
              className={itemClassName}
              key={item.value}
              ref={(el) => {
                itemRefs.current[idx] = el
                anchorRef.current = el
              }}
              tabIndex={isActive ? 0 : -1}
              onClick={(e) => commitChange(e as MouseEvent, item.value)}
              disabled={disabled}
            >
              {item.icon && (
                <Icon
                  glyph={
                    typeof item.icon.glyph === "function"
                      ? (item.icon.glyph as Glyph)
                      : undefined
                  }
                  intent="neutral"
                  intentModifier={isActive ? "default" : "secondary"}
                  variant={item.icon.variant}
                  size={item.icon.size}
                  disabled={disabled}
                >
                  {typeof item.icon.glyph !== "function"
                    ? item.icon.glyph
                    : undefined}
                </Icon>
              )}

              {!item.icon && (
                <Text
                  intent="neutral"
                  intentModifier={isActive ? "default" : "secondary"}
                  disabled={disabled}
                >
                  {item.label}
                </Text>
              )}
            </button>
            {item.icon && (
              <Tooltip anchorRef={anchorRef as preact.RefObject<HTMLElement>}>
                {item.label}
              </Tooltip>
            )}
          </Fragment>
        )
      })}
    </div>
  )
}

export const SegmentedControl = typedForwardRef<
  SegmentedControlProps,
  HTMLDivElement
>(SegmentedControlComponent)
