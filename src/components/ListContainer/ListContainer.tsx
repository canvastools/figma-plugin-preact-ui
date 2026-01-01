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
  const unregisterRootRef = useRef<(() => void) | null>(null)
  const hoverStateRef = useRef<{
    el: HTMLElement | null
    pos: "above" | "below" | "inside" | "self" | null
  }>({ el: null, pos: null })

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

  // Register/unregister this container as a root element for outside-click detection
  useEffect(() => {
    const el = rootRef.current
    if (!registerRootElement || !el) return
    const unregister = registerRootElement(el)
    unregisterRootRef.current = unregister
    return () => {
      unregisterRootRef.current?.()
      unregisterRootRef.current = null
    }
  }, [registerRootElement])

  // Clear all drag-related classes for this container subtree
  const clearDragClasses = () => {
    const el = rootRef.current
    if (!el) return
    const items = el.querySelectorAll<HTMLElement>(".ListItem")
    items.forEach((item) => {
      item.classList.remove(
        "ListItem_drag-over",
        "ListItem_drag-above",
        "ListItem_drag-below",
        "ListItem_drag-inside",
        "ListItem_drag-self",
        "ListItem_drop-parent"
      )
    })
    hoverStateRef.current = { el: null, pos: null }
    endZoneDropParentRef.current = null
  }

  // Listen for global reset / dragend to clean up visual state
  useEffect(() => {
    const handleReset = () => {
      clearDragClasses()
    }
    document.addEventListener("resetDragStates", handleReset)
    document.addEventListener("dragend", handleReset)
    return () => {
      document.removeEventListener("resetDragStates", handleReset)
      document.removeEventListener("dragend", handleReset)
    }
  }, [])

  // When the pointer leaves this container while dragging (e.g. very fast
  // vertical movement across multiple containers), ensure we clear any
  // drag-above/drag-below/drag-inside markers that were set here.
  const handleContainerDragLeave = (e: DragEvent) => {
    const current = e.currentTarget as HTMLElement
    const related = e.relatedTarget as HTMLElement | null
    // Ignore internal transitions (leaving a child but still inside this container)
    if (related && current.contains(related)) return
    clearDragClasses()
  }

  const handleDragOver = (e: DragEvent) => {
    const container = e.currentTarget as HTMLElement
    // Only handle drag zones if this container can accept drops at all
    e.preventDefault()
    e.dataTransfer!.dropEffect = "move"

    const children = Array.from(container.children).filter((el) =>
      (el as HTMLElement).classList.contains("ListItem")
    ) as HTMLElement[]

    const y = e.clientY

    // If we are over a nested container, ensure that its parent item and any
    // of its same-level siblings do not keep stale drag-* markers from a
    // higher-level container's computation.
    const parentItemForContainer = container.closest(
      ".ListItem"
    ) as HTMLElement | null
    if (parentItemForContainer) {
      // Clear drag-* on the parent item itself
      parentItemForContainer.classList.remove(
        "ListItem_drag-over",
        "ListItem_drag-above",
        "ListItem_drag-below",
        "ListItem_drag-inside",
        "ListItem_drag-self"
      )

      // Also clear drag-* on all items at the same container level as the
      // parent, so that when we move the pointer into a child container, no
      // sibling still shows a stale drag-above/below.
      const parentLevelContainer =
        parentItemForContainer.parentElement?.closest(
          ".ListContainer"
        ) as HTMLElement | null
      if (parentLevelContainer) {
        const parentLevelItems = Array.from(
          parentLevelContainer.children
        ).filter((el) =>
          (el as HTMLElement).classList.contains("ListItem")
        ) as HTMLElement[]
        parentLevelItems.forEach((item) => {
          item.classList.remove(
            "ListItem_drag-over",
            "ListItem_drag-above",
            "ListItem_drag-below",
            "ListItem_drag-inside",
            "ListItem_drag-self"
          )
        })
      }
    }

    // Determine which items are currently being dragged (for self-hover)
    let draggedIds: string[] = []
    const globalIds = (window as { __puiDraggingIds?: string[] })
      .__puiDraggingIds
    if (Array.isArray(globalIds)) {
      draggedIds = globalIds
    } else {
      const plain = e.dataTransfer?.getData("text/plain")
      if (plain) draggedIds = [plain]
    }

    // First pass: check if pointer is over any of the dragged items. If so,
    // treat this as "self" hover and avoid showing zones on siblings.
    let selfChild: HTMLElement | null = null
    let selfDist = Infinity
    const verticalMargin = 16

    for (const child of children) {
      const id = child.getAttribute("data-item-id") || ""
      if (!draggedIds.includes(id)) continue

      const content = child.querySelector(
        ".ListItem__content"
      ) as HTMLElement | null
      if (!content) continue
      const rect = content.getBoundingClientRect()

      // For self-hover, we bind strictly to its own rect, without
      // any additional downward tolerance. As soon as the cursor moves into the area
      // of the next element, self stops triggering, and zones begin
      // to count the second pass for neighbors.
      if (y < rect.top || y > rect.bottom) {
        continue
      }

      const centerY = rect.top + rect.height / 2
      const dist = Math.abs(y - centerY)
      if (dist < selfDist) {
        selfDist = dist
        selfChild = child
      }
    }

    if (selfChild) {
      // We fully handle the zones for this pointer position at this container
      // level; prevent bubbling to ancestor containers.
      e.stopPropagation()
      const prev = hoverStateRef.current

      // Compute relative position within the self row to derive above/below/inside
      const selfContent = selfChild.querySelector(
        ".ListItem__content"
      ) as HTMLElement | null
      if (!selfContent) {
        // Fallback: just mark drag-self without zones
        const hasOver = selfChild.classList.contains("ListItem_drag-over")
        const hasSelf = selfChild.classList.contains("ListItem_drag-self")
        // If the DOM is already in the desired state, do nothing
        if (
          hasOver &&
          hasSelf &&
          prev.el === selfChild &&
          prev.pos === "self"
        ) {
          return
        }
        if (prev.el && prev.el !== selfChild) {
          prev.el.classList.remove(
            "ListItem_drag-over",
            "ListItem_drag-above",
            "ListItem_drag-below",
            "ListItem_drag-inside",
            "ListItem_drag-self"
          )
        }
        selfChild.classList.remove(
          "ListItem_drag-above",
          "ListItem_drag-below",
          "ListItem_drag-inside",
          "ListItem_drag-self"
        )
        selfChild.classList.add("ListItem_drag-over", "ListItem_drag-self")
        hoverStateRef.current = { el: selfChild, pos: "self" }
        return
      }
      const rect = selfContent.getBoundingClientRect()
      const localY = y - rect.top
      const height = rect.height
      const band = 8
      const topStart = 0
      const topEnd = band
      const bottomStart = Math.max(0, height - band)
      const bottomEnd = height + 1

      let selfPos: "above" | "below" | "inside" = "inside"
      const inTop = localY >= topStart && localY <= topEnd
      const inBottom = localY >= bottomStart && localY <= bottomEnd

      if (inTop) selfPos = "above"
      else if (inBottom) selfPos = "below"

      const wantOver = true
      const wantSelf = true
      const wantAbove = selfPos === "above"
      const wantBelow = selfPos === "below"

      const hasOver = selfChild.classList.contains("ListItem_drag-over")
      const hasSelf = selfChild.classList.contains("ListItem_drag-self")
      const hasAbove = selfChild.classList.contains("ListItem_drag-above")
      const hasBelow = selfChild.classList.contains("ListItem_drag-below")
      const hasInside = selfChild.classList.contains("ListItem_drag-inside")

      // If the DOM already reflects the desired state and the cache matches, do not touch the classes
      if (
        prev.el === selfChild &&
        prev.pos === "self" &&
        hasOver === wantOver &&
        hasSelf === wantSelf &&
        hasAbove === wantAbove &&
        hasBelow === wantBelow &&
        hasInside === false
      ) {
        return
      }

      // Clear previous hover state
      if (prev.el && prev.el !== selfChild) {
        prev.el.classList.remove(
          "ListItem_drag-over",
          "ListItem_drag-above",
          "ListItem_drag-below",
          "ListItem_drag-inside",
          "ListItem_drag-self"
        )
      } else if (prev.el === selfChild) {
        prev.el.classList.remove(
          "ListItem_drag-above",
          "ListItem_drag-below",
          "ListItem_drag-inside",
          "ListItem_drag-self"
        )
      }

      selfChild.classList.add("ListItem_drag-over", "ListItem_drag-self")
      if (selfPos === "above") {
        selfChild.classList.add("ListItem_drag-above")
      } else if (selfPos === "below") {
        selfChild.classList.add("ListItem_drag-below")
      } else {
        // inside: no extra zone marker; visual "self" is enough
      }
      hoverStateRef.current = { el: selfChild, pos: "self" }

      // Update drop-parent highlight in self-hover:
      // - For "inside" highlight the item itself (if it accepts children).
      // - For "above"/"below":
      //   - if this container has a parent ListItem, highlight that parent;
      //   - otherwise (root-level container) highlight the self item.
      const acceptsAttrSelf = selfChild.getAttribute("data-accepts-children")
      const acceptsChildrenSelf = acceptsAttrSelf !== "false"
      const containerParentItemSelf = container.closest(
        ".ListItem"
      ) as HTMLElement | null
      let desiredDropParentSelf: HTMLElement | null
      if (selfPos === "inside" && acceptsChildrenSelf) {
        desiredDropParentSelf = selfChild
      } else if (containerParentItemSelf) {
        desiredDropParentSelf = containerParentItemSelf
      } else {
        desiredDropParentSelf = selfChild
      }

      if (
        endZoneDropParentRef.current !== desiredDropParentSelf ||
        (desiredDropParentSelf &&
          !desiredDropParentSelf.classList.contains("ListItem_drop-parent"))
      ) {
        const allDropParents = document.querySelectorAll<HTMLElement>(
          ".ListItem_drop-parent"
        )
        allDropParents.forEach((el) => {
          el.classList.remove("ListItem_drop-parent")
        })
        if (desiredDropParentSelf) {
          desiredDropParentSelf.classList.add("ListItem_drop-parent")
        }
        endZoneDropParentRef.current = desiredDropParentSelf
      }
      return
    }

    // Second pass: determine which child (if any) is the best drop target
    let bestChild: HTMLElement | null = null
    let bestPos: "above" | "below" | "inside" | "self" | null = null
    let bestDist = Infinity

    for (const child of children) {
      const id = child.getAttribute("data-item-id") || ""
      if (draggedIds.includes(id)) {
        // Skip dragged items themselves for zone computation; they are handled
        // in the self-hover branch above.
        continue
      }

      const content = child.querySelector(
        ".ListItem__content"
      ) as HTMLElement | null
      if (!content) continue
      const rect = content.getBoundingClientRect()

      // For drop zones, similarly allow some slack below the row but not
      // above; coordinates above the row should be handled by the previous
      // level (e.g. the parent item or container).
      if (y < rect.top || y > rect.bottom + verticalMargin) {
        continue
      }

      const localY = y - rect.top
      const height = rect.height
      const band = 8
      const topStart = 0
      const topEnd = band
      const bottomStart = Math.max(0, height - band)
      const bottomEnd = height + 1 // small tolerance below to avoid gaps

      let pos: "above" | "below" | "inside"
      const inTop = localY >= topStart && localY <= topEnd
      const inBottom = localY >= bottomStart && localY <= bottomEnd

      const acceptsAttr = child.getAttribute("data-accepts-children")
      const acceptsChildren = acceptsAttr !== "false"
      const hasChildren = child.classList.contains("ListItem_has-children")
      const isCollapsed = child.classList.contains("ListItem_collapsed")

      if (inTop) pos = "above"
      else if (inBottom) pos = "below"
      else {
        if (acceptsChildren) pos = "inside"
        else pos = localY < height / 2 ? "above" : "below"
      }

      // Match previous semantics: bottom band becomes "inside" only when this
      // item has children, is expanded, and can accept children.
      if (pos === "below" && hasChildren && !isCollapsed && acceptsChildren) {
        pos = "inside"
      }

      // Score by distance to the center of the chosen band to avoid jitter
      const centerY =
        pos === "above"
          ? rect.top
          : pos === "below"
          ? rect.bottom
          : rect.top + height / 2
      const dist = Math.abs(y - centerY)

      if (dist < bestDist) {
        bestDist = dist
        bestChild = child
        bestPos = pos
      }
    }

    if (!bestChild || !bestPos) {
      const prev = hoverStateRef.current
      if (prev.el) {
        prev.el.classList.remove(
          "ListItem_drag-over",
          "ListItem_drag-above",
          "ListItem_drag-below",
          "ListItem_drag-inside",
          "ListItem_drag-self"
        )
        hoverStateRef.current = { el: null, pos: null }
      }
      // No candidate at this level; allow event to bubble so an ancestor
      // container (e.g. the parent's container) can provide zones instead.
      return
    }

    const prev = hoverStateRef.current

    // Determine desired visual zone for this child
    const acceptsAttr = bestChild.getAttribute("data-accepts-children")
    const acceptsChildren = acceptsAttr !== "false"
    const visualZone: "above" | "below" | "inside" =
      bestPos === "inside" && !acceptsChildren
        ? "below"
        : (bestPos as "above" | "below" | "inside")

    const wantOver = true
    const wantAbove = visualZone === "above"
    const wantBelow = visualZone === "below"
    const wantInside = visualZone === "inside"

    const hasOver = bestChild.classList.contains("ListItem_drag-over")
    const hasAbove = bestChild.classList.contains("ListItem_drag-above")
    const hasBelow = bestChild.classList.contains("ListItem_drag-below")
    const hasInside = bestChild.classList.contains("ListItem_drag-inside")

    // If the DOM already matches the desired state and the cache matches, we keep classes.
    if (
      prev.el === bestChild &&
      prev.pos === bestPos &&
      hasOver === wantOver &&
      hasAbove === wantAbove &&
      hasBelow === wantBelow &&
      hasInside === wantInside
    ) {
      // We'll update drop-parent if necessary, but we won't touch zone classes.
      const containerParentItem = container.closest(
        ".ListItem"
      ) as HTMLElement | null
      const desiredDropParent =
        bestPos === "inside" ? bestChild : containerParentItem || null

      if (endZoneDropParentRef.current !== desiredDropParent) {
        const allDropParents = document.querySelectorAll<HTMLElement>(
          ".ListItem_drop-parent"
        )
        allDropParents.forEach((el) => {
          el.classList.remove("ListItem_drop-parent")
        })
        if (desiredDropParent) {
          desiredDropParent.classList.add("ListItem_drop-parent")
        }
        endZoneDropParentRef.current = desiredDropParent
      }

      hoverStateRef.current = { el: bestChild, pos: bestPos }
      e.stopPropagation()
      return
    }

    // Clear previous hover state
    if (prev.el && prev.el !== bestChild) {
      prev.el.classList.remove(
        "ListItem_drag-over",
        "ListItem_drag-above",
        "ListItem_drag-below",
        "ListItem_drag-inside",
        "ListItem_drag-self"
      )
    } else if (prev.el === bestChild) {
      prev.el.classList.remove(
        "ListItem_drag-above",
        "ListItem_drag-below",
        "ListItem_drag-inside",
        "ListItem_drag-self"
      )
    }

    // Apply new hover state
    bestChild.classList.add("ListItem_drag-over")
    if (visualZone === "above") {
      bestChild.classList.add("ListItem_drag-above")
    } else if (visualZone === "below") {
      bestChild.classList.add("ListItem_drag-below")
    } else if (visualZone === "inside") {
      bestChild.classList.add("ListItem_drag-inside")
    }

    // Update drop-parent highlight.
    // - For "inside" always highlight the actual item under the pointer.
    // - For "above"/"below":
    //   - if this container has a parent ListItem, highlight that parent
    //     (we're reordering within its children);
    //   - otherwise (root-level container) highlight the target item itself.
    const containerParentItem = container.closest(
      ".ListItem"
    ) as HTMLElement | null
    let desiredDropParent: HTMLElement | null
    if (bestPos === "inside") {
      desiredDropParent = bestChild
    } else if (containerParentItem) {
      desiredDropParent = containerParentItem
    } else {
      desiredDropParent = bestChild
    }

    if (
      endZoneDropParentRef.current !== desiredDropParent ||
      (desiredDropParent &&
        !desiredDropParent.classList.contains("ListItem_drop-parent"))
    ) {
      // At any time there should be at most one drop-parent in the entire
      // tree. Clear all existing ones globally, then set the new one.
      const allDropParents = document.querySelectorAll<HTMLElement>(
        ".ListItem_drop-parent"
      )
      allDropParents.forEach((el) => {
        el.classList.remove("ListItem_drop-parent")
      })
      if (desiredDropParent) {
        desiredDropParent.classList.add("ListItem_drop-parent")
      }
      endZoneDropParentRef.current = desiredDropParent
    }

    hoverStateRef.current = { el: bestChild, pos: bestPos }

    // We have determined a concrete drop target at this container level;
    // prevent bubbling to ancestor containers to avoid conflicting zones.
    e.stopPropagation()
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

      // Compute target path from hovered child id via context id->path map
      let targetPath: number[] = []
      for (let i = 0; i < childElements.length; i++) {
        const child = childElements[i]
        if (child.classList.contains("ListItem_drag-over")) {
          const childId = child.getAttribute("data-item-id") || ""
          // Dropping onto self (or any of the dragged items) should not change
          // the tree, but we still want visual zones while hovering. Treat this
          // as a no-op drop.
          if (childId && itemIds.includes(childId)) {
            const resetDragStatesEvent = new CustomEvent("resetDragStates")
            document.dispatchEvent(resetDragStatesEvent)
            return
          }
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

      // Now that we've derived dragPosition, targetIndex and targetPath from
      // the current DOM classes, broadcast a reset so individual ListItems and
      // containers can clear their visual drag state.
      const resetDragStatesEvent = new CustomEvent("resetDragStates")
      document.dispatchEvent(resetDragStatesEvent)

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
    // Clear any per-item drag zones for this branch so that the synthetic
    // end-dropzone fully owns the drop target and no trailing
    // ListItem_drag-*/drop-parent markers remain active on ancestor levels.
    const endZoneEl = e.currentTarget as HTMLElement
    const containerEl = endZoneEl.parentElement as HTMLElement | null
    let parentItemEl: HTMLElement | null = null
    if (containerEl) {
      // Walk up through all ancestor containers in this branch and clear
      // drag-* state on each level's direct ListItem children.
      let levelContainer: HTMLElement | null = containerEl
      while (levelContainer) {
        const levelItems = Array.from(levelContainer.children).filter((el) =>
          (el as HTMLElement).classList.contains("ListItem")
        ) as HTMLElement[]
        levelItems.forEach((item) => {
          item.classList.remove(
            "ListItem_drag-over",
            "ListItem_drag-above",
            "ListItem_drag-below",
            "ListItem_drag-inside",
            "ListItem_drag-self"
          )
        })
        const levelParentItem = levelContainer.closest(
          ".ListItem"
        ) as HTMLElement | null
        if (!parentItemEl && levelParentItem) {
          parentItemEl = levelParentItem
        }
        levelContainer =
          levelParentItem?.parentElement?.closest(".ListContainer") ?? null
      }

      // Reset hover state for this container so ListContainer.handleDrop
      // doesn't see a stale drag-over item.
      hoverStateRef.current = { el: null, pos: null }
    }

    // Highlight the related parent ListItem (if any). Ensure only a single
    // drop-parent exists globally at any time.
    const desiredEl = parentItemEl || containerEl?.closest(".ListItem") || null
    if (endZoneDropParentRef.current !== desiredEl) {
      const allDropParents = document.querySelectorAll<HTMLElement>(
        ".ListItem_drop-parent"
      )
      allDropParents.forEach((el) => {
        el.classList.remove("ListItem_drop-parent")
      })
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
        // Keep ListContext root elements in sync with the current DOM node
        if (unregisterRootRef.current) {
          unregisterRootRef.current()
          unregisterRootRef.current = null
        }
        if (node && registerRootElement) {
          unregisterRootRef.current = registerRootElement(node)
        }
        if (typeof ref === "function") ref(node as HTMLDivElement)
        else if (ref) (ref as preact.RefObject<HTMLDivElement>).current = node
      }}
      {...rest}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleContainerDragLeave}
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
