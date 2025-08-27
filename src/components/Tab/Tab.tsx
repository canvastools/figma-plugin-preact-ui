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

  const Content = () => (
    <div className="Tab__content">
      {prefix && <div className="Tab__prefix">{prefix}</div>}
      {children && <div className="Tab__children">{children}</div>}
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
        <Text variant="body" size="medium" strong={true} context="inherit">
          <Content />
        </Text>
      </div>
      <div className="Tab__container Tab__container_real">
        <Text
          variant="body"
          size="medium"
          strong={value === activeValue}
          context="inherit"
        >
          <Content />
        </Text>
      </div>
    </button>
  )
}

export const Tab = typedForwardRef<TabProps, HTMLButtonElement>(TabComponent)
