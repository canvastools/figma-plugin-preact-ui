import { Fragment, cloneElement } from "preact"
import { useEffect, useMemo, useRef, useState } from "preact/hooks"

import { bem, typedForwardRef } from "../../utils"

import type { SelectProps, SelectItemData } from "./Select.types"
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
  Tooltip,
} from "../../index"

/* --- */

const SelectComponent = (
  {
    className,
    items,
    placeholder,
    defaultValue,
    value,
    grouped,
    error = false,
    disabled = false,
    prefix,
    menuContainerProps,
    tooltip,
    onBlur,
    onFocus,
    onValueChange,
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
    const opts = items ?? []
    if (
      Array.isArray(opts) &&
      opts.length > 0 &&
      Array.isArray((opts as unknown[])[0])
    ) {
      return opts as SelectItemData[][]
    }
    return [opts as SelectItemData[]]
  }, [items])

  const flatOptions = useMemo(
    () =>
      groups.reduce<SelectItemData[]>(
        (acc, group) => acc.concat(group),
        [] as SelectItemData[]
      ),
    [groups]
  )

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
    groupedPosition: grouped ?? undefined,
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
        className={[_className, className].join(" ").trim()}
        data-pui-interactive="true"
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
            ? flatOptions.find((opt) => opt.value === internalValue)?.label
            : placeholder}
        </div>

        <div className="Select__suffix">
          <Icon
            glyph={chevronDownGlyph}
            size={16}
            intent="neutral"
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
          menuContainerProps={menuContainerProps}
          groups={groups}
          selectedValue={internalValue}
          onChange={({ event, value }) => {
            if (value !== undefined) {
              setInternalValue(value)
            }
            onValueChange?.({ event, value })
            setIsOpen(false)
          }}
        />
      </MenuContext>

      {tooltip && (
        <Tooltip anchorRef={triggerRef as preact.RefObject<HTMLElement>}>
          {tooltip}
        </Tooltip>
      )}
    </Fragment>
  )
}

type SelectMenuProps = {
  menuContainerProps: SelectProps["menuContainerProps"]
  groups: SelectItemData[][]
  selectedValue?: string
  onChange?: (args: { event: MouseEvent; value: string }) => void
}

const SelectMenu = ({
  menuContainerProps,
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
      offsetEdge={16}
      open={context.open}
      onClose={() => context.setOpen(false)}
    >
      <MenuContainer {...menuContainerProps}>
        {groups.map((group, groupIndex) => (
          <Fragment key={`group-${groupIndex}`}>
            {groupIndex > 0 ? <MenuDivider variant="inset" /> : null}
            {group.map((opt) => {
              flatCursor += 1

              if (opt.children && typeof opt.children !== "string") {
                return cloneElement(opt.children as preact.VNode, {
                  key: `${groupIndex}-${opt.value}`,
                  id: opt.value,
                  label: opt.label,
                  value: opt.value,
                  disabled: opt.disabled,
                  focused: context.focusedItemId === opt.value,
                  selected: opt.value === selectedValue,
                  onChange: ({ event }) =>
                    onChange?.({ event, value: opt.value }),
                })
              }

              return (
                <MenuItemOption
                  disabled={opt.disabled}
                  key={`${groupIndex}-${opt.value}`}
                  id={opt.value}
                  focused={context.focusedItemId === opt.value}
                  selected={opt.value === selectedValue}
                  onSelectedChange={({ event }) =>
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
