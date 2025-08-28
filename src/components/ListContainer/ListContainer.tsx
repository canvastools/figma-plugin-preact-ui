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
    ...rest
  }: ListContainerProps & { nestingLevel?: number },
  ref: preact.Ref<HTMLDivElement>
) => {
  const { reorderItems, registerRootElement, items, getPathForId } =
    useListContext()
  const rootRef = useRef<HTMLDivElement | null>(null)
  // const idToPathLocal = useRef<Map<string, number[]>>(new Map())

  useEffect(() => registerRootElement?.(rootRef.current), [registerRootElement])

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    e.dataTransfer!.dropEffect = "move"
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    let itemIds: string[] | null = null
    const globalIds = (window as any).__puiDraggingIds as string[] | undefined
    if (Array.isArray(globalIds)) itemIds = globalIds
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
      let insideTargetIndex: number | null = null

      for (let i = 0; i < childElements.length; i++) {
        const child = childElements[i]
        if (child.classList.contains("ListItem_drag-over")) {
          const acceptsAttr = child.getAttribute("data-accepts-children")
          const acceptsChildren = acceptsAttr !== "false"
          if (child.classList.contains("ListItem_drag-above")) {
            dragPosition = "above"
            targetIndex = i
          } else if (child.classList.contains("ListItem_drag-below")) {
            // If target item has children and is NOT collapsed, interpret bottom zone as INSIDE at index 0
            const hasSubItems =
              child.querySelector(".ListItem__sub-items") !== null
            const isCollapsed = child.classList.contains("ListItem_collapsed")
            if (hasSubItems && !isCollapsed && acceptsChildren) {
              dragPosition = "inside"
              insideTargetIndex = i
              targetIndex = 0
            } else {
              dragPosition = "below"
              targetIndex = i + 1
            }
          } else if (child.classList.contains("ListItem_drag-inside")) {
            const acceptsAttr2 = child.getAttribute("data-accepts-children")
            const acceptsChildren2 = acceptsAttr2 !== "false"
            if (acceptsChildren2) {
              dragPosition = "inside"
              insideTargetIndex = i
              targetIndex = 0
            } else {
              // Fallback: treat inside as below when item cannot accept children
              dragPosition = "below"
              insideTargetIndex = null
              targetIndex = i + 1
            }
          }
          break
        }
      }

      const resetDragStatesEvent = new CustomEvent("resetDragStates")
      document.dispatchEvent(resetDragStatesEvent)

      // Compute target path from hovered child id via context id->path map
      let targetPath: number[] = []
      for (let i = 0; i < childElements.length; i++) {
        const child = childElements[i]
        if (child.classList.contains("ListItem_drag-over")) {
          const childId = child.getAttribute("data-item-id") || ""
          const childPath = childId ? getPathForId?.(childId) || [] : []
          if (dragPosition === "inside") {
            targetPath = childPath
            targetIndex = 0
          } else if (childPath.length) {
            const parentPath = childPath.slice(0, -1)
            const selfIndex = childPath[childPath.length - 1]
            targetPath = parentPath
            targetIndex = dragPosition === "above" ? selfIndex : selfIndex + 1
          }
          break
        }
      }

      // Ignore drop if attempting to drop onto self or into own descendants would create cycles (basic guard by same target container and computed no-op)
      if (dragPosition !== "inside") {
        for (let i = 0; i < childElements.length; i++) {
          const child = childElements[i]
          if (
            child.classList.contains("ListItem_drag-above") ||
            child.classList.contains("ListItem_drag-below")
          ) {
            const targetId = child.getAttribute("data-item-id")
            if (targetId && itemIds.includes(targetId)) return
            break
          }
        }
      }

      // Clamp index to container bounds to avoid out-of-range
      if (targetIndex < 0) targetIndex = 0
      if (targetIndex > childElements.length) targetIndex = childElements.length

      reorderItems(
        itemIds,
        targetIndex,
        targetPath.length ? targetPath : undefined
      )
    }
  }

  // Synthetic root-level end drop zone handlers
  const handleEndZoneDragOver = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    e.dataTransfer!.dropEffect = "move"
    ;(e.currentTarget as HTMLElement).classList.add(
      "ListContainer__end-dropzone-active"
    )
  }

  const handleEndZoneDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    ;(e.currentTarget as HTMLElement).classList.remove(
      "ListContainer__end-dropzone-active"
    )
    let itemIds: string[] | null = null
    const globalIds = (window as any).__puiDraggingIds as string[] | undefined
    if (Array.isArray(globalIds)) itemIds = globalIds
    const json = e.dataTransfer?.getData("application/json")
    if (json) {
      try {
        const parsed = JSON.parse(json)
        if (parsed && Array.isArray(parsed.ids)) itemIds = parsed.ids
      } catch {}
    }
    if (!itemIds) {
      const itemId = e.dataTransfer?.getData("text/plain")
      if (itemId) itemIds = [itemId]
    }

    if (itemIds && itemIds.length) {
      const resetDragStatesEvent = new CustomEvent("resetDragStates")
      document.dispatchEvent(resetDragStatesEvent)
      // Always insert at the end of root level
      const rootCount = Array.isArray(items) ? items.length : 0
      reorderItems(itemIds, rootCount, undefined)
    }
  }

  const handleEndZoneDragLeave = (e: DragEvent) => {
    ;(e.currentTarget as HTMLElement).classList.remove(
      "ListContainer__end-dropzone-active"
    )
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
    >
      {children}
      <div
        className="ListContainer__end-dropzone"
        onDragOver={handleEndZoneDragOver}
        onDrop={handleEndZoneDrop}
        onDragLeave={handleEndZoneDragLeave}
      />
    </div>
  )
}

export const ListContainer = typedForwardRef<
  ListContainerProps,
  HTMLDivElement
>(ListContainerComponent)
