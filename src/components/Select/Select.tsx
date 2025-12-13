import { Fragment } from "preact"
import { bem, typedForwardRef } from "../../utils"
import { useEffect, useMemo, useRef, useState } from "preact/hooks"

import type { SelectProps, SelectOption } from "./Select.types"
import "./Select.scss"

import {
  MenuContext,
  useMenuContext,
  MenuContainer,
  MenuItemOption,
  MenuDivider,
  OverlayPositioner,
  Icon,
  chevronDown as chevronDownGlyph,
} from "../../index"

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

  const triggerRef = useRef<HTMLDivElement>(null)

  const hasContent = Boolean((value ?? internalValue ?? "").length)

  // Normalize options into groups: either a single group (flat list) or multiple groups
  const groups = useMemo(() => {
    const opts = options ?? []
    if (
      Array.isArray(opts) &&
      opts.length > 0 &&
      Array.isArray((opts as unknown[])[0])
    ) {
      return opts as SelectOption[][]
    }
    return [opts as SelectOption[]]
  }, [options])

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value)
    }
  }, [value])

  const handleFocus = () => {
    if (disabled) return
    setIsFocused(true)
    onFocus?.()
  }

  const handleBlur = () => {
    if (disabled) return
    setIsFocused(false)
    onBlur?.()
  }

  const handleKeyDown = (
    event: preact.JSX.TargetedKeyboardEvent<HTMLDivElement>
  ) => {
    if (event.key === "Escape" || event.key === "Esc") {
      event.currentTarget.blur()
    }
  }

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

  const attachTriggerRef = (el: HTMLDivElement | null) => {
    triggerRef.current = el

    if (!ref) return

    if (typeof ref === "function") {
      ref(el)
    } else {
      ;(ref as preact.RefObject<HTMLDivElement | null>).current = el
    }
  }

  return (
    <Fragment>
      <div
        className={[_className, "no-drag", className].join(" ").trim()}
        ref={attachTriggerRef}
        tabIndex={disabled ? -1 : 0}
        onFocus={handleFocus as preact.JSX.FocusEventHandler<HTMLDivElement>}
        onBlur={handleBlur as preact.JSX.FocusEventHandler<HTMLDivElement>}
        onKeyDown={handleKeyDown}
        {...rest}
      >
        {prefix && <div className="Select__prefix">{prefix}</div>}

        <div className={"Select__content"}>
          {hasContent
            ? groups
                .reduce<SelectOption[]>((acc, group) => acc.concat(group), [])
                .find((opt) => opt.value === internalValue)?.label
            : placeholder}
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
      </div>

      <MenuContext
        triggerRef={triggerRef}
        open={isOpen}
        setOpen={(next) => {
          if (disabled) return
          setIsOpen(next)
        }}
      >
        <SelectMenu
          menuWidth={menuWidth}
          groups={groups}
          selectedValue={internalValue}
          onChange={({ event, value }) => {
            if (value !== undefined) {
              setInternalValue(value)
            }
            onChange?.({ event, value })
            setIsOpen(false)
          }}
        />
      </MenuContext>
    </Fragment>
  )
}

type SelectMenuProps = {
  menuWidth: number | "auto"
  groups: SelectOption[][]
  selectedValue?: string
  onChange?: (args: { event: MouseEvent; value: string }) => void
}

const SelectMenu = ({
  menuWidth,
  groups,
  selectedValue,
  onChange,
}: SelectMenuProps) => {
  const context = useMenuContext()
  if (!context) return null

  let flatCursor = -1

  return (
    <OverlayPositioner
      anchorRef={context.anchorRef as preact.RefObject<HTMLElement>}
      placement="over"
      edgePadding={16}
      open={context.open}
      onClose={() => context.setOpen(false)}
    >
      <MenuContainer width={menuWidth}>
        {groups.map((group, groupIndex) => (
          <Fragment key={`group-${groupIndex}`}>
            {groupIndex > 0 ? <MenuDivider variant="inset" /> : null}
            {group.map((opt) => {
              flatCursor += 1
              return (
                <MenuItemOption
                  disabled={opt.disabled}
                  key={`${groupIndex}-${opt.value}`}
                  id={opt.value}
                  focused={context.focusedItemId === opt.value}
                  selected={opt.value === selectedValue}
                  onChange={({ event }) =>
                    onChange?.({ event, value: opt.value })
                  }
                >
                  {opt.label}
                </MenuItemOption>
              )
            })}
          </Fragment>
        ))}
      </MenuContainer>
    </OverlayPositioner>
  )
}

export const Select = typedForwardRef<SelectProps, HTMLDivElement>(
  SelectComponent
)
