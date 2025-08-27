import { useEffect, useState } from "preact/hooks"

import { bem, typedForwardRef } from "../../utils"

import type { InputProps } from "./Input.types"
import "./Input.scss"

import { Text } from "../Text/Text"

/* --- */

const InputComponent = (
  {
    className,
    placeholder,
    value,
    defaultValue,
    error,
    disabled,
    prefix,
    suffix,
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

  useEffect(() => {
    if (value !== undefined) {
      setHasContent(value.length > 0)
    }
  }, [value])

  const _className = bem("Input", undefined, {
    filled: hasContent,
    disabled,
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
    event.stopPropagation()
  }

  return (
    <div className={[_className, className].join(" ").trim()} {...rest}>
      {prefix && <div className="Input__prefix">{prefix}</div>}
      <input
        className="Input__input-native"
        ref={ref}
        type="text"
        disabled={disabled}
        placeholder={placeholder}
        value={value !== undefined ? value : undefined}
        defaultValue={value === undefined ? defaultValue : undefined}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onClick={handleClick}
      />
      {suffix && <div className="Input__suffix">{suffix}</div>}
    </div>
  )
}

export const Input = typedForwardRef<InputProps, HTMLInputElement>(
  InputComponent
)
