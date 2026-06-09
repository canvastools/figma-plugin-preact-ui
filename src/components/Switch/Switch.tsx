import { bem, typedForwardRef } from '../../utils'

import { useState, useEffect } from 'preact/hooks'

import type { SwitchProps } from './Switch.types'
import './Switch.scss'

/* --- */

const SwitchComponent = (
  { id, className, checked, defaultChecked = false, disabled = false, tabIndex, onCheckedChange, ...rest }: SwitchProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const isControlled = checked !== undefined
  const [isChecked, setIsChecked] = useState<boolean>(isControlled ? Boolean(checked) : Boolean(defaultChecked))

  useEffect(() => {
    if (isControlled) {
      setIsChecked(Boolean(checked))
    }
  }, [isControlled, checked])

  const _className = bem('Switch', undefined, {
    checked: isChecked,
    disabled,
  })

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
      event: event as Event,
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
    <div id={id} className={[_className, className].join(' ').trim()} data-pui-interactive="true" {...rest} ref={ref}>
      <div className="Switch__input">
        <input
          className="Switch__input-native"
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          {...(tabIndex !== undefined ? { tabIndex } : {})}
          onClick={handleInputClick}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <div className="Switch__control" />
      </div>
    </div>
  )
}

export const Switch = typedForwardRef<SwitchProps, HTMLDivElement>(SwitchComponent)
