import { bem, typedForwardRef } from "../../utils"
import { useListContext } from "../ListContext/ListContext"
import { useState, useEffect, useRef } from "preact/hooks"

import type { ListItemProps } from "./ListItem.types"
import "./ListItem.scss"

import { Icon } from "../Icon/Icon"

/* --- */

const ListItemComponent = (
  {
    className,
    id,
    isNested,
    nestingLevel = 0,
    draggable,
    dragHandle = "default",
    acceptsChildren,
    selectionScope = "item",
    collapsed,
    showCollapseControl,
    onCollapsedChange,
    onDragStart,
    onDragEnd,
    selectable,
    hoverable,
    onSelect,
    subItems,
    children,
    ...rest
  }: ListItemProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const {
    selectedItems,
    toggleSelect,
    selectionMode,
    setExactSelection,
    items,
    registerItemMeta,
    dragImage,
  } = useListContext()
  const [isDragOver, setIsDragOver] = useState(false)
  const [dragPosition, setDragPosition] = useState<
    "above" | "below" | "inside" | "self" | null
  >(null)
  const [isDragging, setIsDragging] = useState(false)
  const selfRef = useRef<HTMLDivElement | null>(null)
  const dropParentRef = useRef<HTMLElement | null>(null)
  const rafIdRef = useRef<number | null>(null)
  const pendingClientYRef = useRef<number>(0)
  const lastRectRef = useRef<DOMRect | null>(null)
  const lastTargetElRef = useRef<HTMLElement | null>(null)

  // Collapsed (controlled/uncontrolled)
  const isCollapsedControlled = collapsed !== undefined
  const [internalCollapsed, setInternalCollapsed] = useState<boolean>(
    Boolean(collapsed)
  )
  useEffect(() => {
    if (isCollapsedControlled) setInternalCollapsed(Boolean(collapsed))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsed])
  const effectiveCollapsed = isCollapsedControlled
    ? Boolean(collapsed)
    : internalCollapsed

  const isSelected = selectedItems.has(id)
  const hasChildren = Boolean(subItems)

  useEffect(() => {
    // register meta for range selection filtering
    const unregister = registerItemMeta?.(id, {
      selectable,
      selectionScope,
    })
    const handleGlobalDragEnd = () => {
      setIsDragOver(false)
      setDragPosition(null)
      setIsDragging(false)
      // Clear drop-parent highlight
      if (dropParentRef.current) {
        dropParentRef.current.classList.remove("ListItem_drop-parent")
        dropParentRef.current = null
      }
      // cancel any scheduled frame
      if (rafIdRef.current != null) {
        cancelAnimationFrame(rafIdRef.current)
        rafIdRef.current = null
      }
      lastRectRef.current = null
      lastTargetElRef.current = null
    }

    const handleResetDragStates = () => {
      setIsDragOver(false)
      setDragPosition(null)
      setIsDragging(false)
      // Clear drop-parent highlight
      if (dropParentRef.current) {
        dropParentRef.current.classList.remove("ListItem_drop-parent")
        dropParentRef.current = null
      }
      if (rafIdRef.current != null) {
        cancelAnimationFrame(rafIdRef.current)
        rafIdRef.current = null
      }
      lastRectRef.current = null
      lastTargetElRef.current = null
    }

    document.addEventListener("dragend", handleGlobalDragEnd)
    document.addEventListener("resetDragStates", handleResetDragStates)

    return () => {
      document.removeEventListener("dragend", handleGlobalDragEnd)
      document.removeEventListener("resetDragStates", handleResetDragStates)
      unregister?.()
    }
  }, [])

  const _className = bem("ListItem", undefined, {
    dragHandle,
    "selection-scope-descendants": selectionScope === "withDescendants",
    nested: isNested,
    draggable: Boolean(draggable),
    selectable: Boolean(selectable),
    selected: isSelected,
    hoverable: Boolean(hoverable),
    "has-children": hasChildren,
    collapsed: Boolean(effectiveCollapsed),
    collapsable: showCollapseControl,
    "drag-over": isDragOver,
    "drag-above": dragPosition === "above",
    "drag-below": dragPosition === "below",
    "drag-inside": dragPosition === "inside",
    "drag-self": dragPosition === "self",
    dragging: isDragging,
  })

  const handleClick = (e: MouseEvent) => {
    if (!selectable || selectionMode === "none") return
    const range = e.shiftKey
    const additive = e.metaKey || e.ctrlKey
    if (selectionScope === "withDescendants") {
      // Expand to include descendants on selection toggle by delegating to ListContext helper
      // We encode desired scope in the id toggle: first toggle the root
      toggleSelect(id, { range, additive })
      // On multi-mode without range/additive, ListContext resets selection to [id];
      // descendants marking is handled for single mode only in context,
      // so here we force exact selection when needed in multi default click
      if (selectionMode !== "single" && !range && !additive) {
        // Build [id + descendants]
        const rootAndDesc = new Set<string>([id])
        collectDescendantsForLocal(id).forEach((d) => rootAndDesc.add(d))
        setExactSelection(Array.from(rootAndDesc))
      }
    } else {
      toggleSelect(id, { range, additive })
    }
    onSelect?.({ event: e, selected: !isSelected })
  }

  const collectDescendantsForLocal = (rootId: string): string[] => {
    const ids: string[] = []
    const walk = (nodes: any[]): boolean => {
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        if (n.id === rootId) {
          const addAll = (children?: any[]) => {
            if (!children) return
            for (let j = 0; j < children.length; j++) {
              const c = children[j]
              ids.push(c.id)
              addAll(c.children)
            }
          }
          addAll(n.children)
          return true
        }
        if (n.children && walk(n.children)) return true
      }
      return false
    }
    walk(items as any)
    return ids
  }

  const handleDragOver = (e: DragEvent) => {
    // Any item can be a drop target; show zones depending on acceptsChildren
    if (draggable || acceptsChildren) {
      e.preventDefault()
      e.stopPropagation()
      e.dataTransfer!.dropEffect = "move"

      // Ignore self-hover: if dragging this item (or multi-drag including this id), do not show styles
      let draggedIds: string[] = []
      // Prefer global cache set on dragstart to work around browsers that hide dataTransfer on dragover
      const globalIds = (window as any).__puiDraggingIds as string[] | undefined
      if (Array.isArray(globalIds)) draggedIds = globalIds
      const json = e.dataTransfer?.getData("application/json")
      if (json) {
        try {
          const parsed = JSON.parse(json)
          if (parsed && Array.isArray(parsed.ids)) draggedIds = parsed.ids
        } catch {}
      }
      if (draggedIds.length === 0) {
        const plain = e.dataTransfer?.getData("text/plain")
        if (plain) draggedIds = [plain]
      }
      if (draggedIds.includes(id)) {
        // Mark self-hover to allow style override but do not compute zones
        setIsDragOver(true)
        setDragPosition("self")
        return
      }

      const target = e.currentTarget as HTMLElement
      const content = target.querySelector(
        ".ListItem__content"
      ) as HTMLElement | null
      let rect: DOMRect | undefined
      rect = content?.getBoundingClientRect()
      if (!rect) return
      // Only apply zones when hovering over the content block, not full item height
      if (e.clientY < rect.top || e.clientY > rect.bottom) {
        setIsDragOver(false)
        setDragPosition(null)
        return
      }

      setIsDragOver(true)
      // store latest geometry and pointer; batch compute in rAF
      lastRectRef.current = rect
      lastTargetElRef.current = target
      pendingClientYRef.current = e.clientY

      if (rafIdRef.current == null) {
        rafIdRef.current = requestAnimationFrame(() => {
          rafIdRef.current = null
          const r = lastRectRef.current
          const t = lastTargetElRef.current
          if (!r || !t) return
          const dropY2 = pendingClientYRef.current - r.top
          const TOP_START = 0
          const TOP_END = 8
          const BOTTOM_START = Math.max(0, r.height - 8)
          const BOTTOM_END = Math.max(0, r.height - 0)

          let nextPos: "inside" | "above" | "below" = "below"
          const inTopBand = dropY2 >= TOP_START && dropY2 <= TOP_END
          const inBottomBand = dropY2 >= BOTTOM_START && dropY2 <= BOTTOM_END
          if (inTopBand) nextPos = "above"
          else if (inBottomBand) nextPos = "below"
          else if (acceptsChildren) nextPos = "inside"
          else nextPos = dropY2 < r.height / 2 ? "above" : "below"
          if (nextPos === "below" && hasChildren && !effectiveCollapsed)
            nextPos = "inside"
          if (nextPos !== dragPosition) setDragPosition(nextPos)

          const containerEl = t.closest(".ListContainer")
          const parentItem = containerEl?.closest(
            ".ListItem"
          ) as HTMLElement | null
          const desiredEl = nextPos === "inside" ? t : parentItem || null
          if (dropParentRef.current !== desiredEl) {
            if (dropParentRef.current) {
              dropParentRef.current.classList.remove("ListItem_drop-parent")
            }
            if (desiredEl) desiredEl.classList.add("ListItem_drop-parent")
            dropParentRef.current = desiredEl
          }
        })
      }
    }
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
    setDragPosition(null)
    // Clear stable drop-parent highlight
    if (dropParentRef.current) {
      dropParentRef.current.classList.remove("ListItem_drop-parent")
      dropParentRef.current = null
    }
    if (rafIdRef.current != null) {
      cancelAnimationFrame(rafIdRef.current)
      rafIdRef.current = null
    }
    lastRectRef.current = null
    lastTargetElRef.current = null
  }

  const handleDragHandleDragStart = (e: DragEvent) => {
    if (draggable) {
      setIsDragging(true)
      // Determine if this drag should be multi based on current selection BEFORE mutating it
      const isMultiDrag = selectedItems.has(id) && selectedItems.size > 1
      const ids = isMultiDrag ? Array.from(selectedItems) : [id]
      // If not multi, set exact selection to this id only
      if (selectionMode !== "none" && !isMultiDrag) {
        setExactSelection([id])
      }
      const payload = { ids }
      try {
        e.dataTransfer?.setData("application/json", JSON.stringify(payload))
      } catch {}
      e.dataTransfer?.setData("text/plain", ids[0])
      ;(window as any).__puiDraggingIds = ids
      // Hide default drag preview
      try {
        e.dataTransfer?.setDragImage(dragImage as HTMLElement, 0, 0)
      } catch {}
      onDragStart?.({ event: e })
    }
  }

  const handleDragHandleDragEnd = (e: DragEvent) => {
    if (draggable) {
      setIsDragOver(false)
      setDragPosition(null)
      setIsDragging(false)
      try {
        delete (window as any).__puiDraggingIds
      } catch {}
      // Remove drop-parent class from self and parent
      if (dropParentRef.current) {
        dropParentRef.current.classList.remove("ListItem_drop-parent")
        dropParentRef.current = null
      }
      onDragEnd?.({ event: e })
    }
  }

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={(node) => {
        selfRef.current = node
        if (typeof ref === "function") ref(node as any)
        else if (ref) (ref as any).current = node
      }}
      key={id}
      {...rest}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      data-nesting-level={nestingLevel}
      data-item-id={id}
      style={`--level: ${nestingLevel}`}
    >
      <div
        className="ListItem__content"
        onClick={handleClick}
        draggable={Boolean(draggable && dragHandle === "container")}
        onDragStart={
          dragHandle === "container" && draggable
            ? (handleDragHandleDragStart as any)
            : undefined
        }
        onDragEnd={
          dragHandle === "container" && draggable
            ? (handleDragHandleDragEnd as any)
            : undefined
        }
      >
        {showCollapseControl && (
          <div
            className="ListItem__collapse-toggle"
            onClick={(e) => {
              e.stopPropagation()
              if (isCollapsedControlled) {
                onCollapsedChange?.({
                  event: e,
                  collapsed: !effectiveCollapsed,
                })
              } else {
                setInternalCollapsed((v) => !v)
                onCollapsedChange?.({
                  event: e,
                  collapsed: !effectiveCollapsed,
                })
              }
            }}
          >
            <Icon
              glyph={effectiveCollapsed ? "chevronRight" : "chevronDown"}
              size={16}
            />
          </div>
        )}
        {draggable && dragHandle !== "container" && (
          <div
            className="ListItem__drag-handle"
            draggable={true}
            onDragStart={handleDragHandleDragStart}
            onDragEnd={handleDragHandleDragEnd}
          >
            <Icon glyph="dragHandle" size={16} />
          </div>
        )}
        {children && <div className="ListItem__children">{children}</div>}
      </div>

      {subItems && <div className="ListItem__sub-items">{subItems}</div>}
    </div>
  )
}

export const ListItem = typedForwardRef<ListItemProps, HTMLDivElement>(
  ListItemComponent
)
