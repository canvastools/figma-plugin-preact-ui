import { bem, lockCursor, typedForwardRef } from '../../utils'
import { useEffect, useRef } from 'preact/hooks'

import type { WindowResizerProps } from './WindowResizer.types'
import './WindowResizer.scss'

/* --- */

const WindowResizerComponent = (
  { id, className, minWidth, minHeight, maxWidth, maxHeight, onResize, ...rest }: WindowResizerProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const _className = bem('WindowResizer', undefined, undefined)
  const rootRef = useRef<HTMLDivElement | null>(null)

  const setRef = (node: HTMLDivElement | null) => {
    rootRef.current = node
    if (typeof ref === 'function') {
      ref(node)
    } else if (ref) {
      const r = ref as preact.RefObject<HTMLDivElement | null>
      r.current = node
    }
  }

  useEffect(() => {
    const resizer = rootRef.current
    if (!resizer) return

    let startX: number
    let startY: number
    let startWidth: number
    let startHeight: number

    let animationFrame: number | null = null
    let pendingWidth = 0
    let pendingHeight = 0
    let unlockCursor: (() => void) | null = null

    const sendResize = () => {
      onResize?.({ width: pendingWidth, height: pendingHeight })
      animationFrame = null
    }

    const onMouseMove = (e: MouseEvent) => {
      const newWidth = Math.min(Math.max(startWidth + e.clientX - startX, minWidth), maxWidth)

      const newHeight = Math.min(Math.max(startHeight + e.clientY - startY, minHeight), maxHeight)

      pendingWidth = newWidth
      pendingHeight = newHeight

      if (animationFrame === null) {
        animationFrame = requestAnimationFrame(sendResize)
      }
    }

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)

      unlockCursor?.()
      unlockCursor = null

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame)
        animationFrame = null
      }
    }

    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault()

      startX = e.clientX
      startY = e.clientY

      startWidth = window.innerWidth
      startHeight = window.innerHeight

      // The CSS cursor belongs to this element only; keep it for the whole drag.
      unlockCursor = lockCursor('nwse-resize')

      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
    }

    resizer.addEventListener('mousedown', onMouseDown)

    return () => {
      resizer.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
      unlockCursor?.()
    }
  }, [minWidth, minHeight, maxWidth, maxHeight, onResize])

  return (
    <div
      id={id ?? 'WindowResizer'}
      className={[_className, className].join(' ').trim()}
      data-pui-interactive="true"
      data-overlay-keep-open="true"
      {...rest}
      ref={setRef}
    />
  )
}

export const WindowResizer = typedForwardRef<WindowResizerProps, HTMLDivElement>(WindowResizerComponent)
