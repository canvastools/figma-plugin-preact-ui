import type { ButtonIconProps } from "../ButtonIcon/ButtonIcon.types"

export interface ButtonIconToggleProps extends ButtonIconProps {
  defaultSelected?: boolean
  selected?: boolean
  onChange?: (selected: boolean) => void
}
