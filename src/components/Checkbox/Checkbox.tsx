import { useEffect, useState } from 'preact/hooks'

import { bem, typedForwardRef } from '../../utils'

import { Text, Icon, check as checkGlyph, mixed as mixedGlyph } from '../../index'

import type { CheckboxProps } from './Checkbox.types'
import './Checkbox.scss'

/* --- */

const CheckboxComponent = (
  {
    id,
    className,
    intent = 'neutral',
    intentModifier = 'default',
    checked,
    defaultChecked = false,
    mixed = false,
    disabled = false,
    label,
    onCheckedChange,
    ...rest
  }: CheckboxProps,
  ref: preact.Ref<HTMLInputElement>,
) => {
  const isControlled = checked !== undefined
  const [isChecked, setIsChecked] = useState<boolean>(isControlled ? Boolean(checked) : Boolean(defaultChecked))

  useEffect(() => {
    if (isControlled) {
      setIsChecked(Boolean(checked))
    }
  }, [isControlled, checked])

  const _className = bem('Checkbox', undefined, {
    intent: `${intent}-${intentModifier}`,
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
    onCheckedChange?.({ event, checked: nextChecked })
  }

  const handleChange = (event: preact.JSX.TargetedEvent<HTMLInputElement, Event>) => {
    if (disabled) {
      event.preventDefault?.()
      return
    }
    const nextChecked = (event.currentTarget as HTMLInputElement).checked
    if (!isControlled) {
      setIsChecked(nextChecked)
    }
    onCheckedChange?.({
      event: event as unknown as MouseEvent,
      checked: nextChecked,
    })
  }

  const handleInputClick = (event: preact.JSX.TargetedMouseEvent<HTMLInputElement>) => {
    event.stopPropagation()
  }

  const handleKeyDown = (event: preact.JSX.TargetedKeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      event.currentTarget.blur()
    }
  }

  return (
    <div id={id} className={[_className, className].join(' ').trim()} data-pui-interactive="true" {...rest}>
      <div className="Checkbox__input">
        <input
          className="Checkbox__input-native"
          type="checkbox"
          ref={ref}
          checked={isChecked}
          disabled={disabled}
          onClick={handleInputClick}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {isChecked && !mixed && (
          <div className="Checkbox__icon">
            <Icon glyph={checkGlyph} intent={intent} intentModifier={intentModifier} size={16} />
          </div>
        )}
        {isChecked && mixed && (
          <div className="Checkbox__icon">
            <Icon glyph={mixedGlyph} intent={intent} intentModifier={intentModifier} size={16} />
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

export const Checkbox = typedForwardRef<CheckboxProps, HTMLInputElement>(CheckboxComponent)
