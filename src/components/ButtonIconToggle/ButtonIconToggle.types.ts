import type { ButtonIconProps } from "../../index"

export interface ButtonIconToggleProps extends ButtonIconProps {
  selected?: boolean
  selectedDefault?: boolean
  onSelectedChange?: (args: { event: MouseEvent; selected: boolean }) => void
}
