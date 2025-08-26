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

  const handleClick = () => {
    onChange(value)
    onClick?.(value)
  }

  return (
    <button
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
      onClick={handleClick}
    >
      <Text
        variant="body"
        size="medium"
        strong={value === activeValue}
        context="inherit"
      >
        <div className="Tab__content">
          {prefix && <div className="Tab__prefix">{prefix}</div>}
          {children && <div className="Tab__children">{children}</div>}
          {suffix && <div className="Tab__suffix">{suffix}</div>}
        </div>
      </Text>
    </button>
  )
}

export const Tab = typedForwardRef<TabProps, HTMLButtonElement>(TabComponent)
