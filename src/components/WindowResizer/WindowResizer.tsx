import { bem, typedForwardRef } from "../../utils"
import { useEffect } from "preact/hooks"

import type { WindowResizerProps } from "./WindowResizer.types"
import "./WindowResizer.scss"

/* --- */

const WindowResizerComponent = (
  {
    className,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    onResize,
    ...rest
  }: WindowResizerProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const _className = bem("WindowResizer", undefined, undefined)

  useEffect(() => {
    const resizer = document.getElementById("WindowResizer")

    if (!resizer) return

    let startX: number
    let startY: number
    let startWidth: number
    let startHeight: number

    let animationFrame: number | null = null
    let pendingWidth = 0
    let pendingHeight = 0

    const sendResize = () => {
      onResize?.({ width: pendingWidth, height: pendingHeight })
      animationFrame = null
    }

    const onMouseMove = (e: MouseEvent) => {
      const newWidth = Math.min(
        Math.max(startWidth + e.clientX - startX, minWidth),
        maxWidth
      )

      const newHeight = Math.min(
        Math.max(startHeight + e.clientY - startY, minHeight),
        maxHeight
      )

      pendingWidth = newWidth
      pendingHeight = newHeight

      if (animationFrame === null) {
        animationFrame = requestAnimationFrame(sendResize)
      }
    }

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseup", onMouseUp)

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

      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseup", onMouseUp)
    }

    resizer.addEventListener("mousedown", onMouseDown)

    return () => {
      resizer.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseup", onMouseUp)
    }
  }, [minWidth, minHeight, maxWidth, maxHeight, onResize])

  return (
    <div
      id="WindowResizer"
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
    />
  )
}

export const WindowResizer = typedForwardRef<
  WindowResizerProps,
  HTMLDivElement
>(WindowResizerComponent)
