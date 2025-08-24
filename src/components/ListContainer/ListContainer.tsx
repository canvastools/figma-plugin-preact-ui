import { bem, typedForwardRef } from "../../utils"
import { useListContext } from "../ListContext/ListContext"

import type { ListContainerProps } from "./ListContainer.types"
import "./ListContainer.scss"

/* --- */

const ListContainerComponent = (
  {
    className,
    children,
    nestingLevel = 0,
    parentPath = [],
    ...rest
  }: ListContainerProps & { nestingLevel?: number; parentPath?: number[] },
  ref: preact.Ref<HTMLDivElement>
) => {
  const { reorderItems } = useListContext()

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    e.dataTransfer!.dropEffect = "move"
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    const itemId = e.dataTransfer?.getData("text/plain")

    if (itemId) {
      const targetElement = e.currentTarget as HTMLElement
      const childElements = Array.from(targetElement.children) as HTMLElement[]

      let targetIndex = childElements.length
      let dragPosition: "above" | "below" = "below"

      for (let i = 0; i < childElements.length; i++) {
        const child = childElements[i]
        if (child.classList.contains("ListItem_drag-over")) {
          if (child.classList.contains("ListItem_drag-above")) {
            dragPosition = "above"
            targetIndex = i
          } else if (child.classList.contains("ListItem_drag-below")) {
            dragPosition = "below"
            targetIndex = i + 1
          }
          break
        }
      }

      const resetDragStatesEvent = new CustomEvent("resetDragStates")
      document.dispatchEvent(resetDragStatesEvent)

      reorderItems(
        [itemId],
        targetIndex,
        parentPath.length > 0 ? parentPath : undefined
      )
    }
  }

  const _className = bem("ListContainer", undefined, undefined)

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      {...rest}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      data-nesting-level={nestingLevel}
      data-parent-path={parentPath.join(",")}
    >
      {children}
    </div>
  )
}

export const ListContainer = typedForwardRef<
  ListContainerProps,
  HTMLDivElement
>(ListContainerComponent)
