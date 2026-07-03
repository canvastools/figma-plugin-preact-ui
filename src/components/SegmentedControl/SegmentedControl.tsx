import { bem, typedForwardRef } from '../../utils'

import { Fragment } from 'preact'
import { useEffect, useMemo, useRef, useState } from 'preact/hooks'

import type { SegmentedControlProps } from './SegmentedControl.types'
import './SegmentedControl.scss'

import { Tooltip } from '../Tooltip/Tooltip'
import { Text } from '../Text/Text'
import { Icon } from '../Icon/Icon'
import type { Glyph } from '../Icon/Icon.types'

/* --- */

const SegmentedControlComponent = (
  {
    id,
    className,
    options = [],
    value,
    defaultValue,
    disabled = false,
    fullWidth = false,
    onValueChange,
    tabIndex,
    ...rest
  }: SegmentedControlProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue)

  const isControlled = value !== undefined
  const selectedOption = isControlled ? (value as string) : internalValue

  useEffect(() => {
    if (isControlled) {
      setInternalValue(value)
    }
  }, [isControlled, value])

  const _className = bem('SegmentedControl', undefined, {
    fullWidth,
  })

  const itemRefs = useRef<Array<HTMLButtonElement | null>>([])
  itemRefs.current = options.map((_, i) => itemRefs.current[i] || null)

  const tooltipAnchorRefs = useRef<Array<preact.RefObject<HTMLButtonElement | null>>>([])
  tooltipAnchorRefs.current = options.map(
    (_, i) => tooltipAnchorRefs.current[i] || ({ current: null } as preact.RefObject<HTMLButtonElement | null>),
  )

  const lastTabDirectionRef = useRef<'forward' | 'backward' | null>(null)

  const selectedIndex = useMemo(() => options.findIndex((option) => option.value === selectedOption), [options, selectedOption])

  const focusItem = (index: number) => {
    const clamped = Math.max(0, Math.min(options.length - 1, index))
    const el = itemRefs.current[clamped]
    if (el) el.focus()
  }

  const commitChange = (event: MouseEvent | KeyboardEvent, newOption: string) => {
    if (!isControlled) setInternalValue(newOption)
    onValueChange?.({ event, value: newOption })
  }

  // Track last Tab / Shift+Tab direction globally so that when focus enters
  // this control from the *next* element via Shift+Tab we can correct focus
  // to land on the last segment instead of the first/selected one.
  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      lastTabDirectionRef.current = event.shiftKey ? 'backward' : 'forward'
    }

    // A pointer press means the upcoming focusin is mouse-driven, so the last
    // remembered Tab direction is stale and must not redirect focus.
    const handleGlobalPointerDown = () => {
      lastTabDirectionRef.current = null
    }

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) return

      const index = itemRefs.current.findIndex((el) => el === target)
      if (index === -1) return

      const direction = lastTabDirectionRef.current
      if (!direction) return

      const targetIndex = direction === 'backward' ? options.length - 1 : 0
      if (targetIndex < 0) return

      const nextEl = itemRefs.current[targetIndex]
      if (nextEl && nextEl !== target) {
        nextEl.focus()
      }

      // Reset after we've handled this focus event
      lastTabDirectionRef.current = null
    }

    window.addEventListener('keydown', handleGlobalKeyDown)
    window.addEventListener('pointerdown', handleGlobalPointerDown, true)
    window.addEventListener('focusin', handleFocusIn)

    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown)
      window.removeEventListener('pointerdown', handleGlobalPointerDown, true)
      window.removeEventListener('focusin', handleFocusIn)
    }
  }, [options.length])

  const handleKeyDown = (e: preact.JSX.TargetedKeyboardEvent<HTMLDivElement>) => {
    if (disabled) return

    const event = e as KeyboardEvent
    const key = event.key
    const isArrowKey = key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowUp' || key === 'ArrowDown'

    const isTabKey = key === 'Tab'

    // Arrow keys / Tab: move focus only, do not change selection
    if (isArrowKey || isTabKey) {
      const target = event.target as HTMLElement | null
      const rawIndex = target ? itemRefs.current.findIndex((el) => el === target) : -1

      const currentIndex = rawIndex >= 0 ? rawIndex : selectedIndex >= 0 ? selectedIndex : 0

      // Tab: move within the control, but allow focus to leave
      // once we reach the ends (no wrapping). We clear lastTabDirectionRef here
      // because focus changes within the control are handled locally.
      if (isTabKey) {
        lastTabDirectionRef.current = null

        const lastIndex = options.length - 1

        // If we're on the last item and pressing Tab (forwards),
        // or on the first item and pressing Shift+Tab (backwards),
        // allow the browser to move focus out of the control.
        if ((!event.shiftKey && currentIndex === lastIndex) || (event.shiftKey && currentIndex === 0)) {
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

      const dir = key === 'ArrowRight' || key === 'ArrowDown' ? 1 : -1
      const nextIndex = (currentIndex + dir + options.length) % options.length
      focusItem(nextIndex)
      return
    }

    // Enter / Space: select the currently focused item
    if (key === 'Enter' || key === ' ' || key === 'Spacebar') {
      event.stopPropagation()
      event.preventDefault()

      const target = event.target as HTMLElement | null
      const currentIndex = target ? itemRefs.current.findIndex((el) => el === target) : -1

      const activeIndex = currentIndex >= 0 ? currentIndex : selectedIndex >= 0 ? selectedIndex : -1

      if (activeIndex >= 0) {
        const option = options[activeIndex]
        if (option) {
          commitChange(event, option.value)
        }
      }
      return
    }

    // Esc: remove focus from the currently focused element
    if (key === 'Escape' || key === 'Esc') {
      event.stopPropagation()
      event.preventDefault()

      const target = event.target as HTMLElement | null
      if (target && typeof target.blur === 'function') {
        target.blur()
      }
    }
  }

  return (
    <div
      id={id}
      className={[_className, className].join(' ').trim()}
      data-pui-interactive="true"
      ref={ref}
      {...rest}
      onKeyDown={handleKeyDown}
    >
      {options.map((option, idx) => {
        const isActive = option.value === selectedOption
        const anchorRef = tooltipAnchorRefs.current[idx]

        const itemClassName = bem('SegmentedControl', 'item', {
          selected: isActive,
          disabled,
          icon: Boolean(option.icon),
        })

        return (
          <Fragment key={option.value}>
            <button
              className={itemClassName}
              key={option.value}
              ref={(el) => {
                itemRefs.current[idx] = el
                anchorRef.current = el
              }}
              tabIndex={tabIndex !== undefined ? (isActive ? tabIndex : -1) : isActive ? 0 : -1}
              onClick={(e) => commitChange(e as MouseEvent, option.value)}
              disabled={disabled}
            >
              {option.icon && (
                <Icon
                  glyph={typeof option.icon.glyph === 'function' ? (option.icon.glyph as Glyph) : undefined}
                  intent="neutral"
                  intentModifier={isActive ? 'default' : 'secondary'}
                  variant={option.icon.variant}
                  size={option.icon.size}
                  disabled={disabled}
                >
                  {typeof option.icon.glyph !== 'function' ? option.icon.glyph : undefined}
                </Icon>
              )}

              {!option.icon && (
                <Text intent="neutral" intentModifier={isActive ? 'default' : 'secondary'} disabled={disabled}>
                  {option.label}
                </Text>
              )}
            </button>
            {option.icon && <Tooltip anchorRef={anchorRef as preact.RefObject<HTMLElement>}>{option.label}</Tooltip>}
          </Fragment>
        )
      })}
    </div>
  )
}

export const SegmentedControl = typedForwardRef<SegmentedControlProps, HTMLDivElement>(SegmentedControlComponent)
