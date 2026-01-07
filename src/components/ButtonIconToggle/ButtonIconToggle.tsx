import { useState, useEffect } from "preact/hooks"
import { cloneElement, toChildArray } from "preact"
import type { VNode } from "preact"

import { typedForwardRef } from "../../utils"

import type { ButtonIconToggleProps } from "./ButtonIconToggle.types"

import { ButtonIcon, Icon } from "../../index"

/* --- */

const ButtonIconToggleComponent = (
  {
    selected: controlledSelected,
    selectedDefault = false,
    onSelectedChange,
    ...rest
  }: ButtonIconToggleProps,
  ref: preact.Ref<HTMLButtonElement>
) => {
  const [internalSelected, setInternalSelected] = useState(selectedDefault)

  const isSelected =
    controlledSelected !== undefined ? controlledSelected : internalSelected

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

  return (
    <ButtonIcon
      ref={ref}
      selected={isSelected}
      onClick={handleClick}
      {...rest}
    />
  )
}

export const ButtonIconToggle = typedForwardRef<
  ButtonIconToggleProps,
  HTMLButtonElement
>(ButtonIconToggleComponent)
