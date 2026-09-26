import { spacing } from '../../themes'

/**
 * Everything a `div` takes besides what the stack decides itself — `onKeyDown`,
 * `data-*`, `role` — since every other prop is spread onto the element already.
 */
type StackElementProps = Omit<
  preact.JSX.HTMLAttributes<HTMLDivElement>,
  'id' | 'className' | 'class' | 'children' | 'ref' | 'spacing'
>

export interface StackProps extends StackElementProps {
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
