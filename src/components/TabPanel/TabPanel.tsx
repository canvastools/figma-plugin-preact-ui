import { Fragment } from "preact"

import { bem, typedForwardRef } from "../../utils"

import type { TabPanelProps } from "./TabPanel.types"
import "./TabPanel.scss"

import { useTabContext } from "../../index"

/* --- */

const TabPanelComponent = (
  { className, tabId, fullHeight = false, children, ...rest }: TabPanelProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const { activeId } = useTabContext()

  if (tabId !== activeId) return <Fragment />

  const _className = bem("TabPanel", undefined, {
    selected: tabId === activeId,
    fullHeight,
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
