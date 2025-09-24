import { bem, typedForwardRef } from "../../utils"

import type { TabProps } from "./Tab.types"
import "./Tab.scss"

import { useTabContext } from "../TabContext/TabContext"

import { Text } from "../Text/Text"

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
  const { value: activeValue, onChange } = useTabContext()

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
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
      onClick={handleClick}
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
