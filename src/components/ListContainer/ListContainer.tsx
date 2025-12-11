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
  const { reorderItems, registerRootElement, getPathForId } = useListContext()
  const rootRef = useRef<HTMLDivElement | null>(null)
  const endZoneDropParentRef = useRef<HTMLElement | null>(null)

  // Ensure every container exposes its nesting level via CSS var --level (root=0)
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const parentItemEl = el.closest(".ListItem") as HTMLElement | null
    const parentLevelAttr = parentItemEl?.getAttribute("data-nesting-level")
    const parentLevel = parentLevelAttr ? parseInt(parentLevelAttr, 10) : 0
    const level = parentItemEl ? parentLevel + 1 : 0
    try {
      el.style.setProperty("--level", String(level))
    } catch {
      // ignore style errors
    }
  }, [rootRef])
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
    const globalIds = (window as { __puiDraggingIds?: string[] })
      .__puiDraggingIds
    if (Array.isArray(globalIds)) itemIds = globalIds
    const json = e.dataTransfer?.getData("application/json")
    if (json) {
      try {
        const parsed = JSON.parse(json)
        if (parsed && Array.isArray(parsed.ids)) {
          itemIds = parsed.ids
        }
      } catch {
        // Ignore JSON parse errors
      }
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
              targetIndex = 0
            } else {
              // Fallback: treat inside as below when item cannot accept children
              dragPosition = "below"
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
    const endZoneTarget = e.currentTarget as HTMLElement
    endZoneTarget.classList.add("ListContainer__end-dropzone-active")
    // Highlight the related parent ListItem (if any)
    const endZoneEl = e.currentTarget as HTMLElement
    const containerEl = endZoneEl.parentElement as HTMLElement | null
    const parentItemEl = containerEl?.closest(".ListItem") as HTMLElement | null
    const desiredEl = parentItemEl || null
    if (endZoneDropParentRef.current !== desiredEl) {
      if (endZoneDropParentRef.current) {
        endZoneDropParentRef.current.classList.remove("ListItem_drop-parent")
      }
      if (desiredEl) desiredEl.classList.add("ListItem_drop-parent")
      endZoneDropParentRef.current = desiredEl
    }
  }

  const handleEndZoneDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const endZoneTarget = e.currentTarget as HTMLElement
    endZoneTarget.classList.remove("ListContainer__end-dropzone-active")
    // Clear highlight on drop
    if (endZoneDropParentRef.current) {
      endZoneDropParentRef.current.classList.remove("ListItem_drop-parent")
      endZoneDropParentRef.current = null
    }
    let itemIds: string[] | null = null
    const globalIds = (window as { __puiDraggingIds?: string[] })
      .__puiDraggingIds
    if (Array.isArray(globalIds)) itemIds = globalIds
    const json = e.dataTransfer?.getData("application/json")
    if (json) {
      try {
        const parsed = JSON.parse(json)
        if (parsed && Array.isArray(parsed.ids)) itemIds = parsed.ids
      } catch {
        // Ignore JSON parse errors
      }
    }
    if (!itemIds) {
      const itemId = e.dataTransfer?.getData("text/plain")
      if (itemId) itemIds = [itemId]
    }

    if (itemIds && itemIds.length) {
      const resetDragStatesEvent = new CustomEvent("resetDragStates")
      document.dispatchEvent(resetDragStatesEvent)

      // Determine which level this end-dropzone belongs to
      const endZoneEl = e.currentTarget as HTMLElement
      const containerEl = endZoneEl.parentElement as HTMLElement | null
      // Count direct child items in this container to append at the end of this level
      const childCount = containerEl
        ? Array.from(containerEl.children).filter((el) =>
            (el as HTMLElement).classList?.contains("ListItem")
          ).length
        : 0
      // If this container is nested under a ListItem, append inside that item's children
      const parentItemEl = containerEl?.closest(
        ".ListItem"
      ) as HTMLElement | null
      const parentId = parentItemEl?.getAttribute("data-item-id") || null
      const parentPath = parentId ? getPathForId?.(parentId) || [] : []

      const targetPath = parentId ? parentPath : undefined
      const targetIndex = childCount

      reorderItems(itemIds, targetIndex, targetPath)
    }
  }

  const handleEndZoneDragLeave = (e: DragEvent) => {
    const endZoneTarget = e.currentTarget as HTMLElement
    endZoneTarget.classList.remove("ListContainer__end-dropzone-active")
    if (endZoneDropParentRef.current) {
      endZoneDropParentRef.current.classList.remove("ListItem_drop-parent")
      endZoneDropParentRef.current = null
    }
  }

  const _className = bem("ListContainer", undefined, undefined)

  return (
    <div
      className={[_className, "no-drag", className].join(" ").trim()}
      ref={(node) => {
        rootRef.current = node
        if (typeof ref === "function") ref(node as HTMLDivElement)
        else if (ref) (ref as preact.RefObject<HTMLDivElement>).current = node
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
