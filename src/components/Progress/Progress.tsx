import { bem, typedForwardRef } from '../../utils'

import { useState, useEffect, useLayoutEffect, useRef } from 'preact/hooks'

import type { ProgressProps } from './Progress.types'
import './Progress.scss'

/* --- */

/**
 * How long one step of a `determinate` bar takes.
 *
 * Shorter than the time between the steps of the work it usually describes, so a
 * step has finished before the next one starts from where it ended — a step cut
 * short would make the next one jump forward to its start.
 */
export const PROGRESS_STEP_MS = 300

const ProgressComponent = (
  { id, className, variant = 'indeterminate', delay = 0, value = 0, ...rest }: ProgressProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsVisible(true)
    }, delay)
    return () => clearTimeout(timeoutId)
  }, [delay])

  const scale = Math.min(Math.max(value, 0), 100) / 100

  const barRef = useRef<HTMLDivElement>(null)
  const shownScale = useRef<number | null>(null)
  const step = useRef<Animation | null>(null)

  /**
   * Each step is animated from the value before it, by hand, rather than by a CSS
   * transition.
   *
   * A transition starts from the value the main thread last computed, and while
   * that thread is busy it falls behind what the compositor has already drawn —
   * measured: a bar on screen at 16.6% restarted from 0% when the next value
   * arrived. An animation given its first keyframe cannot go backwards. The
   * inline `transform` holds the value itself, so a bar with no animation (no
   * `animate` in the DOM, the first value) simply stands there.
   */
  useLayoutEffect(() => {
    const bar = barRef.current
    const from = shownScale.current

    shownScale.current = bar ? scale : null

    if (!bar || from === null || from === scale || typeof bar.animate !== 'function') {
      return
    }

    step.current?.cancel()
    step.current = bar.animate([{ transform: `scaleX(${from})` }, { transform: `scaleX(${scale})` }], {
      duration: PROGRESS_STEP_MS,
      easing: 'ease-out',
    })
  }, [scale, variant])

  useEffect(() => () => step.current?.cancel(), [])

  const _className = bem('Progress', undefined, { variant, visible: isVisible })

  return (
    <div id={id} className={[_className, className].join(' ').trim()} data-pui-interactive="true" ref={ref} {...rest}>
      {variant === 'determinate' && <div ref={barRef} className="Progress__bar" style={{ transform: `scaleX(${scale})` }} />}
    </div>
  )
}

export const Progress = typedForwardRef<ProgressProps, HTMLDivElement>(ProgressComponent)
