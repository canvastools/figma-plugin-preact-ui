import type { ButtonIconProps } from "../../index"

export interface ButtonIconToggleProps extends ButtonIconProps {
  defaultSelected?: boolean
  onChange?: (args: { event: MouseEvent; selected: boolean }) => void
}
