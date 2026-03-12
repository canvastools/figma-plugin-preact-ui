export interface ButtonProps {
  id?: string
  className?: string
  intent?: 'neutral' | 'neutral-inverted' | 'brand' | 'danger' | 'success'
  intentModifier?: 'default' | 'secondary' | 'brand' | 'danger' | 'success'
  ghost?: boolean
  size?: 'medium' | 'large'
  grouped?: 'first' | 'last' | 'middle'
  disabled?: boolean
  fullWidth?: boolean
  tooltip?: preact.ComponentChildren
  prefix?: preact.ComponentChildren
  suffix?: preact.ComponentChildren
  children: preact.ComponentChildren
  onClick?: (args: { event: MouseEvent }) => void
}
