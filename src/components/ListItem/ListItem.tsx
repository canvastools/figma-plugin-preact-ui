import { bem, typedForwardRef } from "../../utils"
import { useState, useEffect, useRef } from "preact/hooks"

import type { ListItemProps } from "./ListItem.types"
import "./ListItem.scss"

import { useListContext } from "../../index"
import { Icon } from "../../index"
import {
  chevronRight as chevronRightGlyph,
  chevronDown as chevronDownGlyph,
  dragHandle as dragHandleGlyph,
} from "../../index"

/* --- */

const ListItemComponent = (
  {
    className,
    id,
    variant = "default",
    nestingLevel = 0,
    draggable = false,
    acceptsChildren = false,
    selectionScope = "item",
    collapsed,
    collapsable = false,
    onCollapsedChange,
    onDragStart,
    onDragEnd,
    selectable = false,
    hoverable = false,
    onSelect,
    nestedItems,
    children,
    reducedPaddingRight = false,
    ...rest
  }: ListItemProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const {
    selectedItems,
    selectionOriginIds,
    toggleSelect,
    selectionMode,
    setExactSelection,
    registerItemMeta,
    dragImage,
  } = useListContext()
  const [isDragging, setIsDragging] = useState(false)
  const selfRef = useRef<HTMLDivElement | null>(null)

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
  const isSelectionOrigin =
    selectionScope === "item"
      ? isSelected
      : Boolean(selectionOriginIds?.has(id))
  const hasChildren = Boolean(nestedItems)

  useEffect(() => {
    // register meta for range selection filtering
    const unregister = registerItemMeta?.(id, {
      selectable,
      selectionScope,
    })
    const handleGlobalDragEnd = () => {
      setIsDragging(false)
    }

    const handleResetDragStates = () => {
      setIsDragging(false)
    }

    document.addEventListener("dragend", handleGlobalDragEnd)
    document.addEventListener("resetDragStates", handleResetDragStates)

    return () => {
      document.removeEventListener("dragend", handleGlobalDragEnd)
      document.removeEventListener("resetDragStates", handleResetDragStates)
      unregister?.()
    }
  }, [id, registerItemMeta, selectable, selectionScope])

  const _className = bem("ListItem", undefined, {
    "selection-scope-descendants": selectionScope === "withDescendants",
    variant,
    nested: nestingLevel > 0,
    draggable: draggable,
    selectable: selectable,
    selected: isSelected,
    "selection-origin": isSelectionOrigin,
    hoverable: hoverable,
    "has-children": hasChildren,
    collapsed: effectiveCollapsed,
    collapsable,
    dragging: isDragging,
    "reduced-padding-right": reducedPaddingRight,
  })

  const handleClick = (e: MouseEvent) => {
    if (!selectable || selectionMode === "none") return
    const range = e.shiftKey
    const additive = e.metaKey || e.ctrlKey
    toggleSelect(id, { range, additive })
    onSelect?.({ event: e, selected: !isSelected })
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
      } catch {
        // Ignore setData errors
      }
      e.dataTransfer?.setData("text/plain", ids[0])
      ;(window as { __puiDraggingIds?: string[] }).__puiDraggingIds = ids
      // Hide default drag preview
      try {
        e.dataTransfer?.setDragImage(dragImage as HTMLElement, 0, 0)
      } catch {
        // Ignore setDragImage errors
      }
      onDragStart?.({ event: e })
    }
  }

  const handleDragHandleDragEnd = (e: DragEvent) => {
    if (draggable) {
      setIsDragging(false)
      try {
        delete (window as { __puiDraggingIds?: string[] }).__puiDraggingIds
      } catch {
        // Ignore delete errors
      }
      onDragEnd?.({ event: e })
    }
  }

  return (
    <div
      className={[_className, "no-drag", className].join(" ").trim()}
      ref={(node) => {
        selfRef.current = node
        if (typeof ref === "function") ref(node as HTMLDivElement)
        else if (ref) (ref as preact.RefObject<HTMLDivElement>).current = node
      }}
      key={id}
      {...rest}
      data-nesting-level={nestingLevel}
      data-item-id={id}
      data-accepts-children={acceptsChildren ? "true" : "false"}
      style={`--level: ${nestingLevel}`}
    >
      <div
        className="ListItem__content"
        onClick={handleClick}
        draggable={draggable}
        onDragStart={draggable ? handleDragHandleDragStart : undefined}
        onDragEnd={draggable ? handleDragHandleDragEnd : undefined}
      >
        <div className="ListItem__content-inner">
          {collapsable && (
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
                intent="neutral"
                intentModifiers="secondary"
                glyph={
                  effectiveCollapsed ? chevronRightGlyph : chevronDownGlyph
                }
                size={16}
              />
            </div>
          )}

          {draggable && (
            <div
              className="ListItem__drag-handle"
              draggable={true}
              onDragStart={handleDragHandleDragStart}
              onDragEnd={handleDragHandleDragEnd}
            >
              <Icon
                glyph={dragHandleGlyph}
                fill="var(--pui-color-neutral-icon-tertiary)"
                size={16}
              />
            </div>
          )}

          {children && <div className="ListItem__children">{children}</div>}
        </div>
      </div>

      {nestedItems && (
        <div className="ListItem__nested-items">{nestedItems}</div>
      )}
    </div>
  )
}

export const ListItem = typedForwardRef<ListItemProps, HTMLDivElement>(
  ListItemComponent
)
