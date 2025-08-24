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
    variant = "default",
    id,
    isNested,
    nestingLevel = 0,
    draggable,
    acceptsChildren,
    selectionScope = "item",
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
  } = useListContext()
  const [isDragOver, setIsDragOver] = useState(false)
  const [dragPosition, setDragPosition] = useState<
    "above" | "below" | "inside" | "self" | null
  >(null)
  const selfRef = useRef<HTMLDivElement | null>(null)

  const isSelected = selectedItems.has(id)

  useEffect(() => {
    const handleGlobalDragEnd = () => {
      setIsDragOver(false)
      setDragPosition(null)
    }

    const handleResetDragStates = () => {
      setIsDragOver(false)
      setDragPosition(null)
      // Clear drop-parent classes on self and immediate parent
      const DROP_PARENT_CLASS = "ListItem_drop-parent"
      const el = selfRef.current
      if (el) {
        el.classList.remove(DROP_PARENT_CLASS)
        const parentItem = el
          .closest(".ListContainer")
          ?.closest(".ListItem") as HTMLElement | null
        if (parentItem) parentItem.classList.remove(DROP_PARENT_CLASS)
      }
    }

    document.addEventListener("dragend", handleGlobalDragEnd)
    document.addEventListener("resetDragStates", handleResetDragStates)

    return () => {
      document.removeEventListener("dragend", handleGlobalDragEnd)
      document.removeEventListener("resetDragStates", handleResetDragStates)
    }
  }, [])

  const _className = bem("ListItem", undefined, {
    variant,
    "selection-scope-descendants": selectionScope === "withDescendants",
    nested: isNested,
    draggable: Boolean(draggable),
    selectable: Boolean(selectable),
    selected: isSelected,
    hoverable: Boolean(hoverable),
    "drag-over": isDragOver,
    "drag-above": dragPosition === "above",
    "drag-below": dragPosition === "below",
    "drag-inside": dragPosition === "inside",
    "drag-self": dragPosition === "self",
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
    onSelect?.(!isSelected)
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
      if (variant === "layer") {
        rect = target.getBoundingClientRect()
      } else {
        rect = content?.getBoundingClientRect()
      }
      if (!rect) return
      if (variant !== "layer") {
        // Only apply zones when hovering over the content block, not full item height
        if (e.clientY < rect.top || e.clientY > rect.bottom) {
          setIsDragOver(false)
          setDragPosition(null)
          return
        }
      }

      const dropY = e.clientY - rect.top
      const topZone = rect.height * 0.25
      const bottomZone = rect.height * 0.75

      setIsDragOver(true)
      let nextPos: "inside" | "above" | "below" = "below"
      if (acceptsChildren && dropY >= topZone && dropY <= bottomZone) {
        nextPos = "inside"
      } else {
        nextPos = dropY < topZone ? "above" : "below"
      }
      // If hovering bottom zone and this item currently has children, treat as inside
      // so the hovered item is indicated as the drop parent visually.
      if (nextPos === "below" && subItems) {
        nextPos = "inside"
      }
      setDragPosition(nextPos)

      // Toggle drop-parent class on the immediate parent item
      const DROP_PARENT_CLASS = "ListItem_drop-parent"
      const selfEl = e.currentTarget as HTMLElement
      const containerEl = selfEl.closest(".ListContainer")
      const parentItem = containerEl?.closest(".ListItem") as HTMLElement | null
      if (nextPos === "inside") {
        selfEl.classList.add(DROP_PARENT_CLASS)
        if (parentItem) parentItem.classList.remove(DROP_PARENT_CLASS)
      } else {
        if (parentItem) parentItem.classList.add(DROP_PARENT_CLASS)
        selfEl.classList.remove(DROP_PARENT_CLASS)
      }
    }
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
    setDragPosition(null)
    // Remove drop-parent class from self and immediate parent
    const DROP_PARENT_CLASS = "ListItem_drop-parent"
    const selfEl = selfRef.current
    if (selfEl) selfEl.classList.remove(DROP_PARENT_CLASS)
    const parentItem = selfEl
      ? (selfEl
          .closest(".ListContainer")
          ?.closest(".ListItem") as HTMLElement | null)
      : null
    if (parentItem) parentItem.classList.remove(DROP_PARENT_CLASS)
  }

  const handleDragHandleDragStart = (e: DragEvent) => {
    if (draggable) {
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
        e.dataTransfer?.setDragImage(new Image(), 0, 0)
      } catch {}
      onDragStart?.()
    }
  }

  const handleDragHandleDragEnd = () => {
    if (draggable) {
      setIsDragOver(false)
      setDragPosition(null)
      try {
        delete (window as any).__puiDraggingIds
      } catch {}
      // Remove drop-parent class from self and parent
      const DROP_PARENT_CLASS = "ListItem_drop-parent"
      const selfEl = selfRef.current
      if (selfEl) selfEl.classList.remove(DROP_PARENT_CLASS)
      const parentItem = selfEl
        ? (selfEl
            .closest(".ListContainer")
            ?.closest(".ListItem") as HTMLElement | null)
        : null
      if (parentItem) parentItem.classList.remove(DROP_PARENT_CLASS)
      onDragEnd?.()
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
      draggable={Boolean(draggable && variant === "layer")}
      onDragStart={
        variant === "layer" && draggable
          ? (handleDragHandleDragStart as any)
          : undefined
      }
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      data-nesting-level={nestingLevel}
      data-item-id={id}
      style={`--level: ${nestingLevel}`}
    >
      <div className="ListItem__content" onClick={handleClick}>
        {draggable && variant !== "layer" && (
          <div
            className="ListItem__drag-handle"
            draggable={true}
            onDragStart={handleDragHandleDragStart}
            onDragEnd={handleDragHandleDragEnd}
            style={{
              left: `calc(var(--pui-space-400) * ${nestingLevel})`,
            }}
          >
            <Icon glyph="dragHandle" size={16} />
          </div>
        )}
        {children && (
          <div
            className="ListItem__children"
            style={{
              paddingLeft: `calc(var(--pui-space-400) * ${nestingLevel})`,
            }}
          >
            {children}
          </div>
        )}
      </div>

      {subItems && <div className="ListItem__sub-items">{subItems}</div>}
    </div>
  )
}

export const ListItem = typedForwardRef<ListItemProps, HTMLDivElement>(
  ListItemComponent
)
