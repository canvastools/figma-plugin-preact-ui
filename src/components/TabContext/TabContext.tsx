import { createContext } from "preact"
import { useContext } from "preact/hooks"

import type { TabContextValue } from "./TabContext.types"

/* --- */

const RawTabContext = createContext<TabContextValue | undefined>(undefined)

const useTabContext = () => {
  const context = useContext(RawTabContext)
  if (!context) throw new Error("TabContext not found")
  return context
}

const TabContext = ({
  value,
  onChange,
  children,
}: TabContextValue & { children: preact.ComponentChildren }) => {
  return (
    <RawTabContext.Provider value={{ value, onChange }}>
      {children}
    </RawTabContext.Provider>
  )
}

export { TabContext, useTabContext }
