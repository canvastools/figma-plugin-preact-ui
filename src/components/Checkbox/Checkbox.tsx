import { useEffect, useState } from "preact/hooks"
import { bem, typedForwardRef } from "../../utils"

import type { CheckboxProps } from "./Checkbox.types"
import "./Checkbox.scss"

import { Text } from "../../index"
import { Icon } from "../../index"

/* --- */

const CheckboxComponent = (
  {
    className,
    checked,
    defaultChecked = false,
    mixed = false,
    disabled = false,
    label,
    onChange,
    ...rest
  }: CheckboxProps,
  ref: preact.Ref<HTMLInputElement>
) => {
  const isControlled = checked !== undefined
  const [isChecked, setIsChecked] = useState<boolean>(
    isControlled ? Boolean(checked) : Boolean(defaultChecked)
  )

  useEffect(() => {
    if (isControlled) {
      setIsChecked(Boolean(checked))
    }
  }, [isControlled, checked])

  const _className = bem("Checkbox", undefined, {
    checked: isChecked,
    mixed,
    disabled,
    label: Boolean(label),
  })

  const handleClick = (event: MouseEvent) => {
    if (disabled) {
      event.preventDefault()
      return
    }
    event.stopPropagation()
    const nextChecked = !isChecked
    if (!isControlled) {
      setIsChecked(nextChecked)
    }
    onChange?.({ event, checked: nextChecked })
  }

  const handleChange = (
    event: preact.JSX.TargetedEvent<HTMLInputElement, Event>
  ) => {
    if (disabled) {
      event.preventDefault?.()
      return
    }
    const nextChecked = (event.currentTarget as HTMLInputElement).checked
    if (!isControlled) {
      setIsChecked(nextChecked)
    }
    onChange?.({
      event: event as unknown as MouseEvent,
      checked: nextChecked,
    })
  }

  const handleInputClick = (
    event: preact.JSX.TargetedMouseEvent<HTMLInputElement>
  ) => {
    event.stopPropagation()
  }

  return (
    <div className={[_className, className].join(" ").trim()} {...rest}>
      <div className="Checkbox__input">
        <input
          className="Checkbox__input-native"
          type="checkbox"
          ref={ref}
          checked={isChecked}
          disabled={disabled}
          onClick={handleInputClick}
          onChange={handleChange}
        />
        {isChecked && !mixed && (
          <div className="Checkbox__icon">
            <Icon
              glyph="check"
              intent="brand"
              intentModifiers="default"
              interactive
              size={16}
            />
          </div>
        )}
        {isChecked && mixed && (
          <div className="Checkbox__icon">
            <Icon
              glyph="mixed"
              intent="brand"
              intentModifiers="default"
              interactive
              size={16}
            />
          </div>
        )}
      </div>
      {label && (
        <div className="Checkbox__label" onClick={handleClick}>
          <Text disabled={disabled}>{label}</Text>
        </div>
      )}
    </div>
  )
}

export const Checkbox = typedForwardRef<CheckboxProps, HTMLInputElement>(
  CheckboxComponent
)
