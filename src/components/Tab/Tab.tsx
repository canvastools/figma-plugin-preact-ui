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
    suffix: Boolean(suffix),
  })

  return (
    <button
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
      onClick={() => {
        onChange?.(value)
        onClick?.(value)
      }}
    >
      <Text variant="body" size="medium" strong={value === activeValue}>
        <div className="Tab__content">
          {children && <div className="Tab__children">{children}</div>}
          {suffix && <div className="Tab__suffix">{suffix}</div>}
        </div>
      </Text>
    </button>
  )
}

export const Tab = typedForwardRef<TabProps, HTMLButtonElement>(TabComponent)
