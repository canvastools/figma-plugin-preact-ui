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
    checked = false,
    mixed = false,
    disabled = false,
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

  return (
    <div className={[_className, className].join(" ").trim()} {...rest}>
      <div className="Checkbox__input">
        <input
          type="checkbox"
          ref={ref}
          checked={isChecked}
          disabled={disabled}
          onChange={() => {
            setIsChecked(!isChecked)
            onChange?.(!isChecked)
          }}
        />
        {isChecked && !mixed && <Icon glyph="check" size={16} />}
        {isChecked && mixed && <Icon glyph="mixed" size={16} />}
      </div>
      <Text variant="body" size="medium">
        {label}
      </Text>
    </div>
  )
}

export const Checkbox = typedForwardRef<CheckboxProps, HTMLInputElement>(
  CheckboxComponent
)
