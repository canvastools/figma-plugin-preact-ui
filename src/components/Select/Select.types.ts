import type { MenuContainerProps } from "../../index"

export interface SelectItemData {
  label: string
  value: string
  disabled?: boolean
  children?: preact.ComponentChildren
}

type MenuContainerPropsPick = Pick<MenuContainerProps, "width">

export interface SelectProps {
  className?: string
  items?: SelectItemData[] | SelectItemData[][]
  placeholder?: string
  defaultValue?: string
  value?: string
  grouped?: "first" | "last" | "middle"
  error?: boolean
  disabled?: boolean
  prefix?: preact.ComponentChildren
  tooltip?: preact.ComponentChildren
  onBlur?: () => void
  onFocus?: () => void
  onValueChange?: (args: { event: MouseEvent; value: string }) => void
  menuContainerProps?: MenuContainerPropsPick
}
