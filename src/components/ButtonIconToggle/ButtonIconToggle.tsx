import { bem, typedForwardRef } from "../../utils"
import { useState, useEffect } from "preact/hooks"

import type { ButtonIconToggleProps } from "./ButtonIconToggle.types"
import "./ButtonIconToggle.scss"

import { ButtonIcon } from "../ButtonIcon/ButtonIcon"

/* --- */

const ButtonIconToggleComponent = (
  {
    className,
    context = "neutral",
    defaultSelected,
    selected: controlledSelected,
    disabled,
    children,
    onChange,
    ...rest
  }: ButtonIconToggleProps,
  ref: preact.Ref<HTMLButtonElement>
) => {
  const [internalSelected, setInternalSelected] = useState(defaultSelected)

  const isSelected =
    controlledSelected !== undefined ? controlledSelected : internalSelected

  const handleClick = (e: { event: MouseEvent }) => {
    if (!disabled) {
      const newSelected = !isSelected

      if (controlledSelected === undefined) {
        setInternalSelected(newSelected)
      }
      e.event.stopPropagation()
      onChange?.({ event: e.event, selected: newSelected })
    }
  }

  useEffect(() => {
    if (controlledSelected !== undefined) {
      setInternalSelected(controlledSelected)
    }
  }, [controlledSelected])

  return (
    <ButtonIcon
      className={[isSelected ? "ButtonIcon_selected" : "", className]
        .join(" ")
        .trim()}
      ref={ref}
      context={context}
      disabled={disabled}
      {...rest}
      onClick={handleClick}
    >
      {children}
    </ButtonIcon>
  )
}

export const ButtonIconToggle = typedForwardRef<
  ButtonIconToggleProps,
  HTMLButtonElement
>(ButtonIconToggleComponent)
