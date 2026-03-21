import { spacing } from '../../themes'

export interface SpacingProps {
  id?: string
  className?: string
  direction?: 'row' | 'column'
  size: keyof typeof spacing.variables
}
