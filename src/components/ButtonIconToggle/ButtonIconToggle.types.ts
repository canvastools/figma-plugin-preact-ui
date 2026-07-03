import type { ButtonIconProps } from '../ButtonIcon/ButtonIcon.types'

export interface ButtonIconToggleProps extends ButtonIconProps {
  selected?: boolean
  defaultSelected?: boolean
  onSelectedChange?: (args: { event: MouseEvent; selected: boolean }) => void
}
