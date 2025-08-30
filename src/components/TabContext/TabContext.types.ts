export interface TabContextValue {
  value: string
  onChange: (value: string) => void
  setValue: (value: string) => void
}

export interface TabContextProps {
  defaultValue?: string
  value?: string
  children: preact.ComponentChildren
  onChange?: (args: { value: string }) => void
}
