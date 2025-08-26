import { createContext } from "preact"
import { useContext, useState, useEffect } from "preact/hooks"
import type { TabContextValue, TabContextProps } from "./TabContext.types"

/* --- */

const RawTabContext = createContext<TabContextValue | undefined>(undefined)

const useTabContext = () => {
  const context = useContext(RawTabContext)
  if (!context) throw new Error("TabContext not found")
  return context
}

const TabContext = ({
  defaultValue = "",
  value: controlledValue,
  onChange,
  children,
}: TabContextProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue)

  const currentValue =
    controlledValue !== undefined ? controlledValue : internalValue

  const handleChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue)
    }
    onChange?.({ value: newValue })
  }

  useEffect(() => {
    if (controlledValue !== undefined) {
      setInternalValue(controlledValue)
    }
  }, [controlledValue])

  const contextValue: TabContextValue = {
    value: currentValue,
    onChange: handleChange,
    setValue: setInternalValue,
  }

  return (
    <RawTabContext.Provider value={contextValue}>
      {children}
    </RawTabContext.Provider>
  )
}

export { TabContext, useTabContext }
