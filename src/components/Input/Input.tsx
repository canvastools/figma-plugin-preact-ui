import { Fragment } from "preact"
import { useEffect, useRef, useState, useImperativeHandle } from "preact/hooks"

import { bem, typedForwardRef } from "../../utils"

import { Tooltip } from "../../index"

import type { InputProps } from "./Input.types"
import "./Input.scss"

/* --- */

const InputComponent = (
  {
    className,
    placeholder,
    type = "text",
    value,
    defaultValue,
    ghost = false,
    grouped,
    error = false,
    disabled = false,
    prefix,
    suffix,
    showSuffixOnHover = false,
    focusOnDoubleClick = false,
    minLength = 0,
    maxLength,
    tooltip,
    autoFocus = false,
    onValueChange,
    onBlur,
    onFocus,
    onKeyDown,
    ...rest
  }: InputProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const isControlled = value !== undefined

  const [internalValue, setInternalValue] = useState<string>(
    () => defaultValue ?? ""
  )
  const [isFocused, setIsFocused] = useState(false)
  const [hasContent, setHasContent] = useState<boolean>(
    Boolean(value ?? internalValue ?? "")
  )

  const rootRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Expose the root wrapper element to consumers (stable anchor for tooltips)
  useImperativeHandle(ref, () => rootRef.current as HTMLDivElement, [])

  useEffect(() => {
    if (autoFocus) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 25)
    }
  }, [autoFocus])

  useEffect(() => {
    if (isControlled && value !== undefined) {
      setHasContent(value.length > 0)
    }
  }, [isControlled, value])

  const _className = bem("Input", undefined, {
    filled: hasContent,
    ghost,
    disabled,
    grouped: Boolean(grouped),
    groupedPosition: grouped ?? undefined,
    prefix: Boolean(prefix),
    suffix: Boolean(suffix),
    suffixOnHover: Boolean(showSuffixOnHover),
    focused: isFocused,
    error,
  })

  const handleChange = (
    event: preact.JSX.TargetedEvent<HTMLInputElement, Event>
  ) => {
    event.stopPropagation()
    const nextValue = event.currentTarget.value
    if (!isControlled) {
      setInternalValue(nextValue)
    }
    setHasContent(nextValue.length > 0)
    onValueChange?.({
      event: event as unknown as MouseEvent,
      value: nextValue,
    })
  }

  const handleBlur = (
    event: preact.JSX.TargetedFocusEvent<HTMLInputElement>
  ) => {
    event.stopPropagation()
    setIsFocused(false)
    setHasContent(event.currentTarget.value.length > 0)
    onBlur?.({
      event: event as unknown as MouseEvent,
      value: event.currentTarget.value,
    })
  }

  const handleFocus = (
    event: preact.JSX.TargetedFocusEvent<HTMLInputElement>
  ) => {
    event.stopPropagation()
    setIsFocused(true)
    onFocus?.({
      event: event as unknown as MouseEvent,
      value: event.currentTarget.value,
    })
  }

  const handleKeyDown = (
    event: preact.JSX.TargetedKeyboardEvent<HTMLInputElement>
  ) => {
    event.stopPropagation()
    onKeyDown?.({
      event: event as KeyboardEvent,
      value: event.currentTarget.value,
    })

    if (
      event.key === "Enter" ||
      event.key === "Escape" ||
      event.key === "Esc"
    ) {
      event.currentTarget.blur()
    }
  }

  const handleClick = (
    event: preact.JSX.TargetedMouseEvent<HTMLInputElement>
  ) => {
    if (!focusOnDoubleClick) {
      event.stopPropagation()
    }
  }

  const handleDoubleClick = () => {
    if (focusOnDoubleClick) {
      inputRef.current?.focus()
    }
  }

  return (
    <Fragment>
      <div
        className={[_className, className].join(" ").trim()}
        data-pui-interactive={focusOnDoubleClick ? "false" : "true"}
        ref={rootRef as preact.Ref<HTMLDivElement>}
        {...rest}
      >
        {prefix && <div className="Input__prefix">{prefix}</div>}
        <input
          className="Input__input-native"
          ref={(el) => {
            inputRef.current = el
          }}
          minLength={minLength}
          maxLength={maxLength}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          value={isControlled ? value : internalValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          onDblClick={handleDoubleClick}
          onMouseDown={(e) => {
            if (focusOnDoubleClick) {
              e.preventDefault()
            }
          }}
        />
        {suffix && <div className="Input__suffix">{suffix}</div>}
      </div>
      {tooltip && <Tooltip anchorRef={rootRef}>{tooltip}</Tooltip>}
    </Fragment>
  )
}

export const Input = typedForwardRef<InputProps, HTMLDivElement>(InputComponent)
