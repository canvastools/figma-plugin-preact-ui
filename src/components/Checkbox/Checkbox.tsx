import { useState } from "preact/hooks"
import { bem, typedForwardRef } from "../../utils"

import type { CheckboxProps } from "./Checkbox.types"
import "./Checkbox.scss"

import { Text } from "../Text/Text"
import { Icon } from "../Icon/Icon"

/* --- */

const CheckboxComponent = (
  {
    className,
    checked,
    mixed,
    disabled,
    label,
    onChange,
    ...rest
  }: CheckboxProps,
  ref: preact.Ref<HTMLInputElement>
) => {
  const [isChecked, setIsChecked] = useState(checked)

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
    onChange?.({ event, checked: !isChecked })
  }

  const handleChange = (
    event: preact.JSX.TargetedEvent<HTMLInputElement, Event>
  ) => {
    if (disabled) {
      event.preventDefault?.()
      return
    }
    event.stopPropagation()
    onChange?.({ event: event as unknown as MouseEvent, checked: !isChecked })
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
          onChange={handleChange}
        />
        {isChecked && !mixed && <Icon glyph="check" size={16} />}
        {isChecked && mixed && <Icon glyph="mixed" size={16} />}
      </div>
      {label && (
        <Text variant="body" size="medium" context="inherit">
          <div className="Checkbox__label" onClick={handleClick}>
            {label}
          </div>
        </Text>
      )}
    </div>
  )
}

export const Checkbox = typedForwardRef<CheckboxProps, HTMLInputElement>(
  CheckboxComponent
)
