import { spacing } from '../../themes'

export interface StackProps {
  id?: string
  className?: string
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  spacing?: keyof typeof spacing.variables
  x?: 'start' | 'center' | 'end'
  y?: 'start' | 'center' | 'end'
  fullHeight?: boolean
  fullWidth?: boolean
  children?: preact.ComponentChildren
}
