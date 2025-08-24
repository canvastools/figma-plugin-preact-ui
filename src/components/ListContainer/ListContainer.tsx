import { bem, typedForwardRef } from "../../utils"
import { useListContext } from "../ListContext/ListContext"
import { useEffect, useRef } from "preact/hooks"

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
  const { reorderItems, registerRootElement } = useListContext()
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => registerRootElement?.(rootRef.current), [registerRootElement])

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    e.dataTransfer!.dropEffect = "move"
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    let itemIds: string[] | null = null
    const json = e.dataTransfer?.getData("application/json")
    if (json) {
      try {
        const parsed = JSON.parse(json)
        if (parsed && Array.isArray(parsed.ids)) {
          itemIds = parsed.ids
        }
      } catch {}
    }
    if (!itemIds) {
      const itemId = e.dataTransfer?.getData("text/plain")
      if (itemId) itemIds = [itemId]
    }

    if (itemIds && itemIds.length) {
      const targetElement = e.currentTarget as HTMLElement
      const childElements = Array.from(targetElement.children) as HTMLElement[]

      let targetIndex = childElements.length
      let dragPosition: "above" | "below" | "inside" = "below"

      for (let i = 0; i < childElements.length; i++) {
        const child = childElements[i]
        if (child.classList.contains("ListItem_drag-over")) {
          if (child.classList.contains("ListItem_drag-above")) {
            dragPosition = "above"
            targetIndex = i
          } else if (child.classList.contains("ListItem_drag-below")) {
            dragPosition = "below"
            targetIndex = i + 1
          } else if (child.classList.contains("ListItem_drag-inside")) {
            dragPosition = "inside"
            targetIndex = 0
          }
          break
        }
      }

      const resetDragStatesEvent = new CustomEvent("resetDragStates")
      document.dispatchEvent(resetDragStatesEvent)

      // If inside, we want to insert into the children of the target item (the one currently marked)
      let targetPath = parentPath
      if (dragPosition === "inside") {
        // Find the first child with inside state to compute its path index
        for (let i = 0; i < childElements.length; i++) {
          const child = childElements[i]
          if (child.classList.contains("ListItem_drag-inside")) {
            targetPath = [...parentPath, i]
            targetIndex = 0
            break
          }
        }
      }

      reorderItems(
        itemIds,
        targetIndex,
        targetPath.length ? targetPath : undefined
      )
    }
  }

  const _className = bem("ListContainer", undefined, undefined)

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={(node) => {
        rootRef.current = node
        if (typeof ref === "function") ref(node as any)
        else if (ref) (ref as any).current = node
      }}
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
