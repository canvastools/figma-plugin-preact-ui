import { bem, typedForwardRef } from "../../utils"
import { useScrollContext } from "../ScrollContext/ScrollContext"
import { useEffect, useRef } from "preact/hooks"

import type { ScrollContainerProps } from "./ScrollContainer.types"
import "./ScrollContainer.scss"

/* --- */

const ScrollContainerComponent = (
  { className, children, ...rest }: ScrollContainerProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const { onScroll, positionY } = useScrollContext()
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = rootRef.current
    if (!el || typeof positionY !== "number") return
    try {
      if (el.scrollTop !== positionY) el.scrollTop = positionY
    } catch {
      // ignore DOM write issues
    }
  }, [positionY])

  const _className = bem("ScrollContainer", undefined, undefined)

  useEffect(() => {
    const el = rootRef.current
    if (el) onScroll({ target: el } as unknown as Event)
  }, [])

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={(node) => {
        rootRef.current = node
        if (typeof ref === "function") ref(node as HTMLDivElement)
        else if (ref) (ref as preact.RefObject<HTMLDivElement>).current = node
      }}
      onScroll={(e) => onScroll(e as unknown as Event)}
      {...rest}
    >
      {children}
    </div>
  )
}

export const ScrollContainer = typedForwardRef<
  ScrollContainerProps,
  HTMLDivElement
>(ScrollContainerComponent)
