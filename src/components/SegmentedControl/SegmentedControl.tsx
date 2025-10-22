import { bem, typedForwardRef } from "../../utils"
import { useEffect, useMemo, useRef, useState } from "preact/hooks"

import type { SegmentedControlProps } from "./SegmentedControl.types"
import "./SegmentedControl.scss"

import type { Glyph } from "../Icon/Icon.types"
import { OverlayPositioner } from "../../index"
import { Tooltip } from "../../index"
import { Text } from "../../index"
import { Icon } from "../../index"

/* --- */

const SegmentedControlComponent = (
  {
    className,
    options,
    value,
    defaultValue,
    disabled = false,
    fullWidth = false,
    onChange,
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
  itemRefs.current = options.map((_, i) => itemRefs.current[i] || null)

  const selectedIndex = useMemo(
    () => options.findIndex((opt) => opt.value === selectedValue),
    [options, selectedValue]
  )

  const focusItem = (index: number) => {
    const clamped = Math.max(0, Math.min(options.length - 1, index))
    const el = itemRefs.current[clamped]
    if (el) el.focus()
  }

  const commitChange = (
    event: MouseEvent | KeyboardEvent,
    newValue: string
  ) => {
    if (!isControlled) setInternalValue(newValue)
    onChange?.({ event, value: newValue })
  }

  const handleKeyDown = (
    e: preact.JSX.TargetedKeyboardEvent<HTMLDivElement>
  ) => {
    const event = e as KeyboardEvent
    const key = event.key
    if (key !== "ArrowLeft" && key !== "ArrowRight") return
    event.stopPropagation()
    event.preventDefault()

    const dir = key === "ArrowRight" ? 1 : -1
    const start = selectedIndex >= 0 ? selectedIndex : 0
    const nextIndex = (start + dir + options.length) % options.length
    const next = options[nextIndex]

    if (next) {
      commitChange(event as KeyboardEvent, next.value)
      focusItem(nextIndex)
    }
  }

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {options.map((option, idx) => {
        const isActive = option.value === selectedValue
        const anchorRef = {
          current: null as HTMLButtonElement | null,
        }

        const itemClassName = bem("SegmentedControl", "item", {
          selected: isActive,
          disabled,
        })

        return (
          <button
            className={itemClassName}
            key={option.value}
            ref={(el) => {
              itemRefs.current[idx] = el
              ;(anchorRef as { current: HTMLButtonElement | null }).current = el
            }}
            tabIndex={isActive ? 0 : -1}
            onClick={(e) => commitChange(e as MouseEvent, option.value)}
            disabled={disabled}
          >
            {option.icon && (
              <Icon
                glyph={
                  typeof option.icon === "function"
                    ? (option.icon as Glyph)
                    : undefined
                }
                intent="neutral"
                intentModifiers={isActive ? "default" : "secondary"}
                variant="default"
                size={24}
                interactive={true}
                disabled={disabled}
              >
                {typeof option.icon !== "function" ? option.icon : undefined}
              </Icon>
            )}
            {option.icon && (
              <OverlayPositioner
                anchorRef={anchorRef as preact.RefObject<HTMLElement>}
                placement="bottom"
                trigger="hover"
                paddingY={8}
                visibilityDelay={1000}
                arrow={true}
              >
                <Tooltip>
                  <Text intent="neutral-inverted-fixed">{option.title}</Text>
                </Tooltip>
              </OverlayPositioner>
            )}

            {!option.icon && (
              <Text
                intent="neutral"
                intentModifiers={isActive ? "default" : "secondary"}
                interactive
                disabled={disabled}
              >
                {option.title}
              </Text>
            )}
          </button>
        )
      })}
    </div>
  )
}

export const SegmentedControl = typedForwardRef<
  SegmentedControlProps,
  HTMLDivElement
>(SegmentedControlComponent)
