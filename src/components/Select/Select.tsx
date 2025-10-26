import { bem, typedForwardRef } from "../../utils"
import { useCallback, useEffect, useRef, useState } from "preact/hooks"
import { Fragment } from "preact"

import type { SelectProps, SelectOption } from "./Select.types"
import "./Select.scss"
import { OverlayPositioner } from "../OverlayPositioner/OverlayPositioner"
import { MenuContainer } from "../MenuContainer/MenuContainer"
import { MenuItemOption } from "../MenuItemOption/MenuItemOption"
import { MenuDivider } from "../MenuDivider/MenuDivider"
import { Icon } from "../../index"
import { chevronDown as chevronDownGlyph } from "../../index"

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

  // Normalize options into groups: either a single group (flat list) or multiple groups
  const groups = (() => {
    const opts = options ?? []
    if (
      Array.isArray(opts) &&
      opts.length > 0 &&
      Array.isArray((opts as any)[0])
    ) {
      return opts as SelectOption[][]
    }
    return [opts as SelectOption[]]
  })()

  const triggerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const focusTrigger = useCallback(() => {
    const t = triggerRef.current
    if (t) t.focus()
  }, [])

  const openMenu = () => {
    if (disabled) return
    setIsOpen(true)
    setIsFocused(false)
    // Move focus to the menu after it renders
    requestAnimationFrame(() => {
      const m = menuRef.current
      if (m) m.focus()
    })
  }

  const closeMenu = useCallback(() => {
    setIsOpen(false)
    // Restore focus to the trigger to match expected behavior
    requestAnimationFrame(() => {
      focusTrigger()
      setIsFocused(true)
    })
  }, [focusTrigger])

  const _className = bem("Select", undefined, {
    filled: hasContent,
    grouped: Boolean(grouped),
    groupedPosition: grouped,
    prefix: Boolean(prefix),
    error,
    disabled,
    focused: isFocused,
    open: isOpen,
  })

  const selectedValue = value !== undefined ? value : internalValue
  const selectedOption = (() => {
    for (let gi = 0; gi < groups.length; gi++) {
      const group = groups[gi]
      for (let oi = 0; oi < group.length; oi++) {
        const opt = group[oi]
        if (opt.value === selectedValue) return opt
      }
    }
    return undefined
  })()

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
      if (!insideTrigger && !insideMenu) closeMenu()
    }

    window.addEventListener("mousedown", handler, true)

    return () => window.removeEventListener("mousedown", handler, true)
  }, [isOpen, closeMenu])

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
    setIsOpen((v) => {
      const next = !v
      if (next) {
        setIsFocused(false)
        requestAnimationFrame(() => menuRef.current?.focus())
      } else {
        requestAnimationFrame(() => {
          focusTrigger()
          setIsFocused(true)
        })
      }
      return next
    })
  }

  const handleKeyDownTrigger: preact.JSX.KeyboardEventHandler<
    HTMLDivElement
  > = (e) => {
    if (disabled) return
    const key = e.key
    if (key === "Enter" || key === " " || key === "Spacebar") {
      e.preventDefault()
      if (!isOpen) openMenu()
    }
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
        if (typeof ref === "function") ref(el as HTMLDivElement)
        else if (ref && typeof ref === "object")
          ref.current = el as HTMLDivElement
      }}
      tabIndex={disabled ? -1 : 0}
      onFocus={handleFocusIn as preact.JSX.FocusEventHandler<HTMLDivElement>}
      onBlur={handleFocusOut as preact.JSX.FocusEventHandler<HTMLDivElement>}
      onClick={
        handleClickTrigger as preact.JSX.MouseEventHandler<HTMLDivElement>
      }
      onKeyDown={handleKeyDownTrigger}
      {...rest}
    >
      {prefix && <div className="Select__prefix">{prefix}</div>}
      <div className={"Select__content"}>
        {hasContent ? selectedOption?.label : placeholder}
      </div>
      <div className="Select__suffix">
        <Icon
          glyph={chevronDownGlyph}
          size={16}
          intent="neutral"
          interactive
          disabled={disabled}
        />
      </div>

      <OverlayPositioner
        anchorRef={triggerRef as preact.RefObject<HTMLElement>}
        placement="over"
        edgePadding={16}
        open={isOpen}
        onClose={closeMenu}
      >
        <div
          ref={menuRef as preact.Ref<HTMLDivElement>}
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
              closeMenu()
              onBlur?.()
            }
          }}
        >
          <MenuContainer width={menuWidth}>
            {groups.map((group, groupIndex) => (
              <Fragment key={`group-${groupIndex}`}>
                {groupIndex > 0 ? <MenuDivider variant="inset" /> : null}
                {group.map((opt) => (
                  <MenuItemOption
                    key={`${groupIndex}-${opt.value}`}
                    selected={opt.value === selectedValue}
                    onChange={({ event }) => commitChange(event, opt.value)}
                  >
                    {opt.label}
                  </MenuItemOption>
                ))}
              </Fragment>
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
