import { typedForwardRef } from "../../utils"

import { useState, useEffect } from "preact/hooks"
import { cloneElement, toChildArray } from "preact"
import type { VNode } from "preact"

import type { ButtonIconToggleProps } from "./ButtonIconToggle.types"
import "./ButtonIconToggle.scss"

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
      ghost={ghost}
      icon={icon && { ...icon, selected: isSelected }}
      disabled={disabled}
      {...rest}
      onClick={handleClick}
    >
      {!icon &&
        toChildArray(children).map((child) => {
          if (typeof child === "object" && child !== null) {
            const maybeVNode = child as VNode
            if (maybeVNode.type === Icon) {
              return cloneElement(maybeVNode, {
                ...maybeVNode.props,
                selected: isSelected,
              })
            }
          }
          return child
        })}
    </ButtonIcon>
  )
}

export const ButtonIconToggle = typedForwardRef<
  ButtonIconToggleProps,
  HTMLButtonElement
>(ButtonIconToggleComponent)
