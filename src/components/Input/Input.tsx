import { useEffect, useRef, useState, useImperativeHandle } from "preact/hooks"

import { bem, typedForwardRef } from "../../utils"

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
    grouped = "none",
    error = false,
    disabled = false,
    prefix,
    suffix,
    suffixOnHover = false,
    focusOnDoubleClick = false,
    onChange,
    onBlur,
    onFocus,
    onKeyDown,
    ...rest
  }: InputProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasContent, setHasContent] = useState<boolean>(
    Boolean(value ?? defaultValue ?? "")
  )

  const rootRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Expose the root wrapper element to consumers (stable anchor for tooltips)
  useImperativeHandle(ref, () => rootRef.current as HTMLDivElement, [])

  useEffect(() => {
    if (value !== undefined) {
      setHasContent(value.length > 0)
    }
  }, [value])

  const _className = bem("Input", undefined, {
    filled: hasContent,
    disabled,
    ghost,
    grouped: Boolean(grouped),
    groupedPosition: grouped,
    prefix: Boolean(prefix),
    suffix: Boolean(suffix),
    suffixOnHover: Boolean(suffixOnHover),
    focused: isFocused,
    error,
  })

  const handleChange = (
    event: preact.JSX.TargetedEvent<HTMLInputElement, Event>
  ) => {
    event.stopPropagation()
    setHasContent(event.currentTarget.value.length > 0)
    onChange?.({
      event: event as unknown as MouseEvent,
      value: event.currentTarget.value,
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
    <div
      className={[_className, "no-drag", className].join(" ").trim()}
      ref={rootRef as preact.Ref<HTMLDivElement>}
      {...rest}
    >
      {prefix && <div className="Input__prefix">{prefix}</div>}
      <input
        className="Input__input-native"
        ref={(el) => {
          inputRef.current = el
        }}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value !== undefined ? value : undefined}
        defaultValue={value === undefined ? defaultValue : undefined}
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
  )
}

export const Input = typedForwardRef<InputProps, HTMLDivElement>(InputComponent)
