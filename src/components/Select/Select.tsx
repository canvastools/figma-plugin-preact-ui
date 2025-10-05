import { bem, typedForwardRef } from "../../utils"
import { useEffect, useRef, useState } from "preact/hooks"

import type { SelectProps } from "./Select.types"
import "./Select.scss"
import { OverlayPositioner } from "../OverlayPositioner/OverlayPositioner"
import { MenuContainer } from "../MenuContainer/MenuContainer"
import { MenuItemOption } from "../MenuItemOption/MenuItemOption"
import { Icon } from "../../index"
import { glyphs } from "../../index"

/* --- */

const SelectComponent = (
  {
    className,
    options,
    placeholder,
    defaultValue,
    value,
    grouped = "none",
    error = false,
    disabled = false,
    prefix,
    menuWidth = "auto",
    onBlur,
    onFocus,
    onChange,
    ...rest
  }: SelectProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [internalValue, setInternalValue] = useState<string | undefined>(
    value !== undefined ? value : defaultValue
  )
  const hasContent = Boolean((value ?? internalValue ?? "").length)

  const items = options ?? []

  const triggerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const _className = bem("Select", undefined, {
    filled: hasContent,
    grouped: Boolean(grouped),
    groupedPosition: grouped,
    prefix: Boolean(prefix),
    error,
    disabled,
    focused: isFocused,
  })

  const selectedValue = value !== undefined ? value : internalValue
  const selectedOption = items.find((o) => o.value === selectedValue)

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value)
    }
  }, [value])

  // Close on outside click when focused/open (safety in addition to OverlayPositioner outside handling)
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: MouseEvent) => {
      const target = e.target as Node | null
      const t = triggerRef.current
      const m = menuRef.current
      if (!target || !t) return
      const insideTrigger = t.contains(target)
      const insideMenu = m ? m.contains(target) : false
      if (!insideTrigger && !insideMenu) setIsOpen(false)
    }

    window.addEventListener("mousedown", handler, true)

    return () => window.removeEventListener("mousedown", handler, true)
  }, [isOpen])

  const handleFocusIn = () => {
    if (disabled) return
    setIsFocused(true)
    onFocus?.()
  }

  const handleFocusOut = (e: FocusEvent) => {
    if (disabled) return
    const next = e.relatedTarget as Node | null
    const t = triggerRef.current
    const m = menuRef.current
    const leavingBoth =
      !!next && !t?.contains(next) && !(m?.contains(next) ?? false)
    if (!next || leavingBoth) {
      setIsFocused(false)
      setIsOpen(false)
      onBlur?.()
    }
  }

  const handleClickTrigger = () => {
    if (disabled) return
    setIsOpen((v) => !v)
  }

  const commitChange = (event: MouseEvent, nextValue: string) => {
    if (value === undefined) setInternalValue(nextValue)
    onChange?.({ event, value: nextValue })
    setIsOpen(false)
  }

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={(el) => {
        triggerRef.current = el as HTMLDivElement
        if (typeof ref === "function") ref(el as unknown as HTMLDivElement)
        else if (ref && typeof ref === "object")
          ref.current = el as HTMLDivElement
      }}
      tabIndex={disabled ? -1 : 0}
      onFocus={
        handleFocusIn as unknown as preact.JSX.FocusEventHandler<HTMLDivElement>
      }
      onBlur={
        handleFocusOut as unknown as preact.JSX.FocusEventHandler<HTMLDivElement>
      }
      onClick={
        handleClickTrigger as unknown as preact.JSX.MouseEventHandler<HTMLDivElement>
      }
      {...rest}
    >
      {prefix && <div className="Select__prefix">{prefix}</div>}
      <div className={"Select__content"}>
        {hasContent ? selectedOption?.label : placeholder}
      </div>
      <div className="Select__suffix">
        <Icon
          glyph={glyphs.chevronDown}
          size={16}
          intent="neutral"
          interactive
          disabled={disabled}
        />
      </div>

      <OverlayPositioner
        anchorRef={triggerRef as unknown as preact.RefObject<HTMLElement>}
        placement="over"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div
          ref={menuRef as unknown as preact.Ref<HTMLDivElement>}
          tabIndex={-1}
          onBlur={(e) => {
            if (disabled) return

            const next = (e.relatedTarget as Node | null) || null
            const t = triggerRef.current
            const m = menuRef.current
            const leavingBoth =
              !!next && !t?.contains(next) && !(m?.contains(next) ?? false)
            if (!next || leavingBoth) {
              setIsFocused(false)
              setIsOpen(false)
              onBlur?.()
            }
          }}
        >
          <MenuContainer width={menuWidth}>
            {items.map((opt) => (
              <MenuItemOption
                key={opt.value}
                selected={opt.value === selectedValue}
                onChange={({ event }) => commitChange(event, opt.value)}
              >
                {opt.label}
              </MenuItemOption>
            ))}
          </MenuContainer>
        </div>
      </OverlayPositioner>
    </div>
  )
}

export const Select = typedForwardRef<SelectProps, HTMLDivElement>(
  SelectComponent
)
