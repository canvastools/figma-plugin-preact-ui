import { Fragment } from "preact"

import { bem, typedForwardRef } from "../../utils"

import type { TabPanelProps } from "./TabPanel.types"
import "./TabPanel.scss"

import { useTabContext } from "../TabContext/TabContext"

/* --- */

const TabPanelComponent = (
  { className, value, children, ...rest }: TabPanelProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const { value: activeValue } = useTabContext()

  if (value !== activeValue) return <Fragment />

  const _className = bem("TabPanel", undefined, {
    selected: value === activeValue,
  })

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
    >
      <div className="TabPanel__children">{children}</div>
    </div>
  )
}

export const TabPanel = typedForwardRef<TabPanelProps, HTMLDivElement>(
  TabPanelComponent
)
