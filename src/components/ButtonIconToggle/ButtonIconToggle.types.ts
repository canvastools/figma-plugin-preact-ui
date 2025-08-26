import type { ButtonIconProps } from "../ButtonIcon/ButtonIcon.types"

export interface ButtonIconToggleProps extends ButtonIconProps {
  defaultSelected?: boolean
  selected?: boolean
  onChange?: (args: { event: MouseEvent; selected: boolean }) => void
}
