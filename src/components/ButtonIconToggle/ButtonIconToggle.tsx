import { useState, useEffect } from 'preact/hooks'

import { typedForwardRef } from '../../utils'

import type { ButtonIconToggleProps } from './ButtonIconToggle.types'

import { ButtonIcon } from '../../index'

/* --- */

const ButtonIconToggleComponent = (
  { selected: controlledSelected, defaultSelected = false, onSelectedChange, ...rest }: ButtonIconToggleProps,
  ref: preact.Ref<HTMLButtonElement>,
) => {
  const [internalSelected, setInternalSelected] = useState(defaultSelected)

  const isSelected = controlledSelected !== undefined ? controlledSelected : internalSelected

  const handleClick = (e: { event: MouseEvent }) => {
    const newSelected = !isSelected

    if (controlledSelected === undefined) {
      setInternalSelected(newSelected)
    }
    e.event.stopPropagation()
    onSelectedChange?.({ event: e.event, selected: newSelected })
  }

  useEffect(() => {
    if (controlledSelected !== undefined) {
      setInternalSelected(controlledSelected)
    }
  }, [controlledSelected])

  return <ButtonIcon ref={ref} {...rest} selected={isSelected} onClick={handleClick} />
}

export const ButtonIconToggle = typedForwardRef<ButtonIconToggleProps, HTMLButtonElement>(ButtonIconToggleComponent)
