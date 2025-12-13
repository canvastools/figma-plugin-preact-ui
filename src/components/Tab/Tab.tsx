import { bem, typedForwardRef } from "../../utils"

import { useRef } from "preact/hooks"

import type { TabProps } from "./Tab.types"
import "./Tab.scss"

import { useTabContext } from "../../index"

import { Text } from "../../index"

/* --- */

const TabComponent = (
  {
    className,
    value,
    variant = "default",
    prefix,
    suffix,
    children,
    onClick,
    ...rest
  }: TabProps,
  ref: preact.Ref<HTMLButtonElement>
) => {
  const { value: activeValue, onChange, registerTab } = useTabContext()

  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const setRef = (el: HTMLButtonElement | null) => {
    buttonRef.current = el
    registerTab(value, el)

    if (typeof ref === "function") {
      ref(el)
    } else if (ref) {
      ;(ref as preact.RefObject<HTMLButtonElement>).current = el
    }
  }

  const _className = bem("Tab", undefined, {
    variant,
    selected: value === activeValue,
    prefix: Boolean(prefix),
    suffix: Boolean(suffix),
  })

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation()
    onChange(value)
    onClick?.({ event, value })
  }

  type ContentProps = { fake?: boolean; selected: boolean }

  const Content = ({ fake = false, selected = false }: ContentProps) => (
    <div className="Tab__content">
      {prefix && <div className="Tab__prefix">{prefix}</div>}
      {children && (
        <div className="Tab__children">
          <Text
            variant="body"
            size="medium"
            strong={fake || value === activeValue}
            intent="neutral"
            intentModifiers={selected ? "default" : "secondary"}
            interactive
          >
            {children}
          </Text>
        </div>
      )}
      {suffix && <div className="Tab__suffix">{suffix}</div>}
    </div>
  )

  return (
    <button
      className={[_className, "no-drag", className].join(" ").trim()}
      ref={setRef}
      tabIndex={value === activeValue ? 0 : -1}
      onClick={handleClick}
      {...rest}
    >
      <div className="Tab__container Tab__container_fake">
        <Content fake selected={value === activeValue} />
      </div>
      <div className="Tab__container Tab__container_real">
        <Content selected={value === activeValue} />
      </div>
    </button>
  )
}

export const Tab = typedForwardRef<TabProps, HTMLButtonElement>(TabComponent)
