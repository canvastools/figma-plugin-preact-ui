import { Fragment } from 'preact'
import { useEffect, useRef, useState, useImperativeHandle } from 'preact/hooks'

import { bem, typedForwardRef } from '../../utils'

import { Tooltip } from '../Tooltip/Tooltip'
import { Text } from '../Text/Text'

import type { InputProps } from './Input.types'
import './Input.scss'

/* --- */

const InputComponent = (
  {
    id,
    className,
    variant = 'default',
    label,
    placeholder,
    type = 'text',
    value,
    defaultValue,
    ghost = false,
    selected = false,
    grouped,
    error = false,
    disabled = false,
    prefix,
    suffix,
    showSuffixOnHover = false,
    focusOnDoubleClick = false,
    focusOnPrefix = false,
    minLength = 0,
    maxLength,
    tooltip,
    autoFocus = false,
    selectOnFocus = false,
    maxWidth,
    onValueChange,
    onBlur,
    onFocus,
    onKeyDown,
    tabIndex,
    ...rest
  }: InputProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const isControlled = value !== undefined

  const [internalValue, setInternalValue] = useState<string>(() => defaultValue ?? '')
  const [isFocused, setIsFocused] = useState(false)
  const [isKeyboardEditing, setIsKeyboardEditing] = useState(false)
  const [isWrapperFocused, setIsWrapperFocused] = useState(false)
  const [hasContent, setHasContent] = useState<boolean>(Boolean(value ?? internalValue ?? ''))
  const [isEditing, setIsEditing] = useState(false)

  const rootRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperLastInteractionWasMouse = useRef(false)

  // Expose the root wrapper element to consumers (stable anchor for tooltips)
  useImperativeHandle(ref, () => rootRef.current as HTMLDivElement, [])

  useEffect(() => {
    if (!autoFocus) return
    const timeoutId = window.setTimeout(() => {
      inputRef.current?.focus()
    }, 25)
    return () => clearTimeout(timeoutId)
  }, [autoFocus])

  useEffect(() => {
    if (isControlled && value !== undefined) {
      setHasContent(value.length > 0)
    }
  }, [isControlled, value])

  const _className = bem('Input', undefined, {
    filled: hasContent,
    ghost,
    disabled,
    variant,
    label: Boolean(label),
    grouped: Boolean(grouped),
    groupedPosition: grouped ?? undefined,
    prefix: Boolean(prefix),
    suffix: Boolean(suffix),
    suffixOnHover: Boolean(showSuffixOnHover),
    focused: isFocused,
    selected,
    // For double-click mode, apply keyboardFocus only when the wrapper
    // itself is focused via keyboard (Tab), not mouse.
    keyboardFocus: focusOnDoubleClick && isWrapperFocused && isKeyboardEditing,
    editing: isEditing,
    doubleClick: focusOnDoubleClick,
    error,
  })

  const _displayClassName = bem('Input__display', undefined, {
    placeholder: Boolean(placeholder && !hasContent),
  })

  const handleInput = (event: preact.JSX.TargetedEvent<HTMLInputElement, Event>) => {
    event.stopPropagation()
    const nextValue = event.currentTarget.value
    if (!isControlled) {
      setInternalValue(nextValue)
    }
    setHasContent(nextValue.length > 0)
    onValueChange?.({
      event: event as Event,
      value: nextValue,
    })
  }

  const handleBlur = (event: preact.JSX.TargetedFocusEvent<HTMLInputElement>) => {
    event.stopPropagation()
    setIsFocused(false)
    setHasContent(event.currentTarget.value.length > 0)
    onBlur?.({
      event: event as FocusEvent,
      value: event.currentTarget.value,
    })

    if (focusOnDoubleClick && rootRef.current && isEditing) {
      setTimeout(() => {
        rootRef.current?.focus()
      }, 0)
    }
  }

  const handleRootFocus = (event: preact.JSX.TargetedFocusEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      setIsWrapperFocused(true)
      setIsKeyboardEditing(!wrapperLastInteractionWasMouse.current)
    }
  }

  const handleRootBlur = (event: preact.JSX.TargetedFocusEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      setIsWrapperFocused(false)
      setIsKeyboardEditing(false)
    }
  }

  const handleFocus = (event: preact.JSX.TargetedFocusEvent<HTMLInputElement>) => {
    event.stopPropagation()
    setIsFocused(true)
    if (selectOnFocus) {
      // setTimeout to survive the trailing mouseup that would otherwise collapse the selection on click
      const el = event.currentTarget
      setTimeout(() => el.select(), 0)
    }
    onFocus?.({
      event: event as FocusEvent,
      value: event.currentTarget.value,
    })
  }

  const handleKeyDown = (event: preact.JSX.TargetedKeyboardEvent<HTMLInputElement>) => {
    event.stopPropagation()
    onKeyDown?.({
      event: event as KeyboardEvent,
      value: event.currentTarget.value,
    })

    if (event.key === 'Enter' || event.key === 'Escape' || event.key === 'Esc') {
      event.currentTarget.blur()
    }
  }

  const handleClick = (event: preact.JSX.TargetedMouseEvent<HTMLInputElement>) => {
    event.stopPropagation()
  }

  const handleRootMouseDown = () => {
    // Any pointer press on the wrapper marks this as a mouse-driven interaction.
    wrapperLastInteractionWasMouse.current = true
  }

  const handleRootKeyDown = (event: preact.JSX.TargetedKeyboardEvent<HTMLDivElement>) => {
    if (!focusOnDoubleClick) return
    if (event.target !== event.currentTarget) return
    if (event.key === ' ' || event.key === 'Spacebar' || event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
      wrapperLastInteractionWasMouse.current = false
      setIsEditing(true)
    }
  }

  const startEditingFromMouse = () => {
    wrapperLastInteractionWasMouse.current = true
    if (isEditing) {
      setTimeout(() => inputRef.current?.focus(), 0)
    } else {
      setIsEditing(true)
    }
  }

  const handleDoubleClickDisplay = () => {
    if (!focusOnDoubleClick) return
    startEditingFromMouse()
  }

  const handlePrefixMouseDown = (event: preact.JSX.TargetedMouseEvent<HTMLDivElement>) => {
    if (disabled) return
    event.preventDefault()
    inputRef.current?.focus()
  }

  const handlePrefixDoubleClick = (event: preact.JSX.TargetedMouseEvent<HTMLDivElement>) => {
    if (disabled) return
    event.preventDefault()
    event.stopPropagation()
    startEditingFromMouse()
  }

  const handlePrefixBlockDoubleClick = (event: preact.JSX.TargetedMouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  useEffect(() => {
    if (focusOnDoubleClick && isEditing) {
      setTimeout(() => {
        inputRef.current?.focus()
        inputRef.current?.select?.()
      }, 0)
    }
  }, [focusOnDoubleClick, isEditing])

  const showEditableInput = !focusOnDoubleClick || isEditing
  const displayedValue = isControlled ? value ?? '' : internalValue

  return (
    <Fragment>
      <div
        id={id}
        className={[_className, className].join(' ').trim()}
        data-pui-interactive={showEditableInput ? 'true' : 'false'}
        ref={rootRef as preact.Ref<HTMLDivElement>}
        {...rest}
      >
        {label && (
          <Text className="Input__label" intentModifier="secondary" size={variant === 'list' ? 'medium' : 'small'} truncate>
            {label}
          </Text>
        )}
        <div
          className="Input__container"
          onKeyDown={handleRootKeyDown}
          onMouseDown={handleRootMouseDown}
          onFocus={handleRootFocus}
          onBlur={handleRootBlur}
          onDblClick={handleDoubleClickDisplay}
          tabIndex={focusOnDoubleClick ? tabIndex ?? 0 : undefined}
          style={{
            maxWidth: variant === 'default' ? undefined : typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
            flexShrink: maxWidth ? 0 : undefined,
          }}
        >
          {prefix && (
            <div
              className="Input__prefix"
              onMouseDownCapture={focusOnPrefix && !focusOnDoubleClick ? handlePrefixMouseDown : undefined}
              onDblClickCapture={
                focusOnPrefix && focusOnDoubleClick
                  ? handlePrefixDoubleClick
                  : !focusOnPrefix && focusOnDoubleClick
                  ? handlePrefixBlockDoubleClick
                  : undefined
              }
            >
              {prefix}
            </div>
          )}
          {showEditableInput ? (
            <input
              className="Input__input-native"
              ref={(el) => {
                inputRef.current = el
              }}
              minLength={minLength}
              maxLength={maxLength}
              type={type}
              disabled={disabled}
              {...(tabIndex !== undefined && !focusOnDoubleClick ? { tabIndex } : {})}
              placeholder={placeholder}
              value={isControlled ? value : internalValue}
              // onInput fires per keystroke in plain Preact; onChange would
              // only work through preact/compat's global vnode patch.
              onInput={handleInput}
              onClick={handleClick}
              onBlur={(event) => {
                handleBlur(event)
                if (focusOnDoubleClick) {
                  setIsEditing(false)
                  setIsKeyboardEditing(false)
                }
              }}
              onFocus={handleFocus}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <div className={_displayClassName}>{displayedValue || placeholder}</div>
          )}
          {suffix && <div className="Input__suffix">{suffix}</div>}
        </div>
      </div>
      {tooltip && <Tooltip anchorRef={rootRef}>{tooltip}</Tooltip>}
    </Fragment>
  )
}

export const Input = typedForwardRef<InputProps, HTMLDivElement>(InputComponent)
