import type { InputDragContainerProps } from './InputDragContainer.types'
import './InputDragContainer.scss'

/* --- */

/**
 * Wraps an `Input` prefix / suffix so its value can be scrubbed by dragging the
 * icon horizontally. Takes the props returned by `useNumericInput().getDragProps()`.
 */
export const InputDragContainer = ({ className, drag, children }: InputDragContainerProps) => (
  <span className={['InputDragContainer', className].join(' ').trim()} {...drag}>
    {children}
  </span>
)
