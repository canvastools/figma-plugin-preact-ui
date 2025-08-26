import { bem, typedForwardRef } from "../../utils"

import type { TabListProps } from "./TabList.types"
import "./TabList.scss"

/* --- */

const TabListComponent = (
  { className, children, ...rest }: TabListProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("TabList", undefined, undefined)

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
    >
      <div className="TabList__overflow-left" />
      {children && <div className="TabList__children">{children}</div>}
      <div className="TabList__overflow-right" />
    </div>
  )
}

export const TabList = typedForwardRef<TabListProps, HTMLDivElement>(
  TabListComponent
)
