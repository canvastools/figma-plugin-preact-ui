import { Fragment, cloneElement } from 'preact'
import { useEffect, useMemo, useRef, useState } from 'preact/hooks'

import { bem, typedForwardRef } from '../../utils'

import type { SelectProps, SelectOptionData } from './Select.types'
import './Select.scss'

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
} from '../../index'

/* --- */

const SelectComponent = (
  {
    id,
    className,
    options,
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
  ref: preact.Ref<HTMLDivElement>,
) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const [internalValue, setInternalValue] = useState<string | undefined>(value !== undefined ? value : defaultValue)

  const triggerRef = useRef<HTMLDivElement>(null)

  const hasContent = Boolean((value ?? internalValue ?? '').length)

  // Normalize options into groups: either a single group (flat list) or multiple groups
  const groups = useMemo(() => {
    const opts = options ?? []
    if (Array.isArray(opts) && opts.length > 0 && Array.isArray((opts as unknown[])[0])) {
      return opts as SelectOptionData[][]
    }
    return [opts as SelectOptionData[]]
  }, [options])

  const flatOptions = useMemo(
    () => groups.reduce<SelectOptionData[]>((acc, group) => acc.concat(group), [] as SelectOptionData[]),
    [groups],
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

  const handleKeyDown = (event: preact.JSX.TargetedKeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      event.currentTarget.blur()
    }
  }

  const _className = bem('Select', undefined, {
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

    if (typeof ref === 'function') {
      ref(el)
    } else {
      const r = ref as preact.RefObject<HTMLDivElement | null>
      r.current = el
    }
  }

  return (
    <Fragment>
      <div
        id={id}
        className={[_className, className].join(' ').trim()}
        data-pui-interactive="true"
        ref={attachTriggerRef}
        tabIndex={disabled ? -1 : 0}
        {...rest}
        onFocus={handleFocus as preact.JSX.FocusEventHandler<HTMLDivElement>}
        onBlur={handleBlur as preact.JSX.FocusEventHandler<HTMLDivElement>}
        onKeyDown={handleKeyDown}
      >
        {prefix && <div className="Select__prefix">{prefix}</div>}

        <div className={'Select__content'}>
          {hasContent ? flatOptions.find((opt) => opt.value === internalValue)?.label : placeholder}
        </div>

        <div className="Select__suffix">
          <Icon glyph={chevronDownGlyph} size={16} intent="neutral" disabled={disabled} />
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
          onSelectedChange={({ event, value }) => {
            if (value !== undefined) {
              setInternalValue(value)
            }
            onValueChange?.({ event, value })
            setIsOpen(false)
            // Return focus to the trigger when the selection was made via the
            // keyboard. MenuContext activates items by calling `ref.current.click()`
            // on Enter/Space (synthetic MouseEvent with `detail === 0`), and right
            // after the click it re-focuses the item itself. Defer to the next
            // frame so our focus call lands *after* that and after the menu has
            // unmounted from the closed state.
            if (event && (event as MouseEvent).detail === 0) {
              requestAnimationFrame(() => {
                triggerRef.current?.focus()
              })
            }
          }}
        />
      </MenuContext>

      {tooltip && <Tooltip anchorRef={triggerRef as preact.RefObject<HTMLElement>}>{tooltip}</Tooltip>}
    </Fragment>
  )
}

type SelectMenuProps = {
  menuContainerProps: SelectProps['menuContainerProps']
  groups: SelectOptionData[][]
  selectedValue?: string
  onSelectedChange?: (args: { event: MouseEvent; value: string }) => void
}

const SelectMenu = ({ menuContainerProps, groups, selectedValue, onSelectedChange }: SelectMenuProps) => {
  const context = useMenuContext()

  return (
    <OverlayPositioner
      anchorRef={context.anchorRef as preact.RefObject<HTMLElement>}
      placement="over"
      offsetEdge={16}
      open={context.open}
      closeOnClickOutside={true}
      onClose={() => context.setOpen(false)}
    >
      <MenuContainer {...menuContainerProps}>
        {groups.map((group, groupIndex) => (
          <Fragment key={`group-${groupIndex}`}>
            {groupIndex > 0 ? <MenuDivider variant="inset" /> : null}
            {group.map((opt) => {
              if (opt.children && typeof opt.children !== 'string') {
                return cloneElement(opt.children as preact.VNode, {
                  key: `${groupIndex}-${opt.value}`,
                  id: opt.value,
                  label: opt.label,
                  value: opt.value,
                  disabled: opt.disabled,
                  focused: context.focusedItemId === opt.value,
                  selected: opt.value === selectedValue,
                  onSelectedChange: ({ event }) => onSelectedChange?.({ event, value: opt.value }),
                })
              }

              return (
                <MenuItemOption
                  disabled={opt.disabled}
                  key={`${groupIndex}-${opt.value}`}
                  id={opt.value}
                  focused={context.focusedItemId === opt.value}
                  selected={opt.value === selectedValue}
                  onSelectedChange={({ event }) => onSelectedChange?.({ event, value: opt.value })}
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

export const Select = typedForwardRef<SelectProps, HTMLDivElement>(SelectComponent)
