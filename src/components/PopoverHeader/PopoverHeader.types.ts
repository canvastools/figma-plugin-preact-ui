export interface PopoverHeaderProps {
  id?: string
  className?: string
  children: preact.ComponentChildren
  tabIndex?: number
  onClose?: () => void
}
