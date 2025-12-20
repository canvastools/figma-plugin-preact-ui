import { useState, useEffect } from "preact/hooks"
import { cloneElement, toChildArray } from "preact"
import type { VNode } from "preact"

import { typedForwardRef } from "../../utils"

import type { ButtonIconToggleProps } from "./ButtonIconToggle.types"

import { ButtonIcon, Icon } from "../../index"

/* --- */

const ButtonIconToggleComponent = (
  {
    className,
    intent = "neutral",
    intentModifiers = "default",
    ghost = false,
    disabled = false,
    icon,
    children,
    defaultSelected = false,
    selected: controlledSelected,
    tooltip,
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
      className={[isSelected ? "ButtonIcon_selected" : "", "no-drag", className]
        .join(" ")
        .trim()}
      ref={ref}
      intent={intent}
      intentModifiers={intentModifiers}
      selected={isSelected}
      ghost={ghost}
      icon={icon && icon}
      disabled={disabled}
      tooltip={tooltip}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </ButtonIcon>
  )
}

export const ButtonIconToggle = typedForwardRef<
  ButtonIconToggleProps,
  HTMLButtonElement
>(ButtonIconToggleComponent)
