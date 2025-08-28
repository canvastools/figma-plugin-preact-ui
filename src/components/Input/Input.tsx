import { useEffect, useRef, useState } from "preact/hooks"

import { bem, typedForwardRef } from "../../utils"

import type { InputProps } from "./Input.types"
import "./Input.scss"

/* --- */

const InputComponent = (
  {
    className,
    placeholder,
    value,
    defaultValue,
    ghost,
    error,
    disabled,
    prefix,
    suffix,
    focusOnDoubleClick,
    onChange,
    onBlur,
    onFocus,
    ...rest
  }: InputProps,
  ref: preact.Ref<HTMLInputElement>
) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasContent, setHasContent] = useState<boolean>(
    Boolean(value ?? defaultValue ?? "")
  )

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (value !== undefined) {
      setHasContent(value.length > 0)
    }
  }, [value])

  const _className = bem("Input", undefined, {
    filled: hasContent,
    disabled,
    ghost,
    prefix: Boolean(prefix),
    suffix: Boolean(suffix),
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

  const handleClick = (
    event: preact.JSX.TargetedMouseEvent<HTMLInputElement>
  ) => {
    if (!focusOnDoubleClick) {
      event.stopPropagation()
    }
  }

  const handleDoubleClick = (
    event: preact.JSX.TargetedMouseEvent<HTMLInputElement>
  ) => {
    if (focusOnDoubleClick) {
      inputRef.current?.focus()
    }
  }

  return (
    <div className={[_className, className].join(" ").trim()} {...rest}>
      {prefix && <div className="Input__prefix">{prefix}</div>}
      <input
        className="Input__input-native"
        ref={(el) => {
          inputRef.current = el
          if (typeof ref === "function") ref(el)
          else if (ref) (ref as any).current = el
        }}
        type="text"
        disabled={disabled}
        placeholder={placeholder}
        value={value !== undefined ? value : undefined}
        defaultValue={value === undefined ? defaultValue : undefined}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
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

export const Input = typedForwardRef<InputProps, HTMLInputElement>(
  InputComponent
)
