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
    selectionScope = "individual",
    collapsed,
    collapsable = false,
    onCollapsedChange,
    onDragStart,
    onDragEnd,
    selectable = false,
    hoverable = false,
    onSelect,
    items,
    children,
    ...rest
  }: ListItemProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const {
    selectedItemIds,
    selectionOriginIds,
    toggleSelect,
    selectionMode,
    setSelection,
    registerItem,
    dragImage,
  } = useListContext()
  const [isDragging, setIsDragging] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
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

  const isSelected = selectedItemIds.has(id)
  const isSelectionOrigin =
    selectionScope === "individual"
      ? isSelected
      : Boolean(selectionOriginIds?.has(id))
  const hasChildren = Boolean(items)

  useEffect(() => {
    // register meta for range selection filtering
    const unregister = registerItem?.(id, {
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
  }, [id, registerItem, selectable, selectionScope])

  const _className = bem("ListItem", undefined, {
    "selection-scope-descendants": selectionScope === "withDescendants",
    variant,
    nested: nestingLevel > 0,
    draggable: draggable,
    selectable: selectable,
    selected: isSelected,
    "selection-origin": isSelectionOrigin,
    focused: isFocused,
    hoverable: hoverable,
    "has-children": hasChildren,
    collapsed: effectiveCollapsed,
    collapsable,
    dragging: isDragging,
  })

  const isInteractiveTarget = (target: HTMLElement | null): boolean => {
    if (!target) return false

    let el: HTMLElement | null = target
    while (el && el !== selfRef.current) {
      const interactiveAttr = el.getAttribute("data-pui-interactive")
      if (interactiveAttr === "true") {
        return true
      }
      if (interactiveAttr === "false") {
        return false
      }

      el = el.parentElement
    }

    return false
  }

  const handleClick = (e: MouseEvent) => {
    // Ignore multi-clicks (second click of a double-click, etc.) so that
    // double-click can be used by nested controls (e.g. Input focusOnDoubleClick)
    // without toggling selection twice.
    if (e.detail > 1) return

    if (isInteractiveTarget(e.target as HTMLElement | null)) return
    if (!selectable || selectionMode === undefined) return
    const range = e.shiftKey
    const additive = e.metaKey || e.ctrlKey
    toggleSelect(id, { range, additive })
    onSelect?.({ event: e, selected: !isSelected })
  }

  const moveFocus = (direction: "prev" | "next") => {
    const allItems = Array.from(
      document.querySelectorAll<HTMLElement>(".ListItem")
    )
    if (!allItems.length) return
    const current = selfRef.current
    const visibleItems = allItems.filter((el) => {
      // Skip items that are not visible (collapsed or display:none)
      return el.offsetParent !== null
    })
    const index = visibleItems.indexOf(current as HTMLElement)
    if (index === -1) return
    const nextIndex =
      direction === "prev"
        ? Math.max(0, index - 1)
        : Math.min(visibleItems.length - 1, index + 1)
    const target = visibleItems[nextIndex]
    if (target && target !== current) {
      target.focus()
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isInteractiveTarget(e.target as HTMLElement | null)) return
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault()
        e.stopPropagation()
        moveFocus("prev")
        break
      case "ArrowDown":
        e.preventDefault()
        e.stopPropagation()
        moveFocus("next")
        break
      case "Enter":
        // Keyboard "click" – toggle selection like a mouse click
        if (selectable && selectionMode !== undefined) {
          e.preventDefault()
          e.stopPropagation()
          const range = e.shiftKey
          const additive = e.metaKey || e.ctrlKey
          toggleSelect(id, { range, additive })
          onSelect?.({
            event: e as unknown as MouseEvent,
            selected: !isSelected,
          })
        }
        break
      case " ":
      case "Spacebar": {
        // Toggle collapse for collapsable items on Space
        if (collapsable) {
          e.preventDefault()
          e.stopPropagation()
          const nextCollapsed = !effectiveCollapsed
          if (isCollapsedControlled) {
            onCollapsedChange?.({
              // Cast to MouseEvent for compatibility with callback type
              event: e as unknown as MouseEvent,
              collapsed: nextCollapsed,
            })
          } else {
            setInternalCollapsed(nextCollapsed)
            onCollapsedChange?.({
              event: e as unknown as MouseEvent,
              collapsed: nextCollapsed,
            })
          }
        }
        break
      }
      default:
        break
    }
  }

  const handleDragHandleDragStart = (e: DragEvent) => {
    if (draggable) {
      setIsDragging(true)
      // Determine if this drag should be multi based on current selection BEFORE mutating it
      const isMultiDrag = selectedItemIds.has(id) && selectedItemIds.size > 1
      const ids = isMultiDrag ? Array.from(selectedItemIds) : [id]
      // If not multi, set exact selection to this id only
      if (selectionMode !== undefined && !isMultiDrag) {
        setSelection([id])
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
      className={[_className, className].join(" ").trim()}
      ref={(node) => {
        selfRef.current = node
        if (typeof ref === "function") ref(node as HTMLDivElement)
        else if (ref) (ref as preact.RefObject<HTMLDivElement>).current = node
      }}
      key={id}
      {...rest}
      tabIndex={0}
      onFocus={(e) => {
        if (e.currentTarget === e.target) {
          setIsFocused(true)
        }
      }}
      onBlur={(e) => {
        if (e.currentTarget === e.target) {
          setIsFocused(false)
        }
      }}
      onKeyDown={handleKeyDown}
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
              data-pui-interactive="true"
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
                intentModifier="secondary"
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
              data-pui-interactive="true"
              draggable={true}
              onDragStart={handleDragHandleDragStart}
              onDragEnd={handleDragHandleDragEnd}
            >
              <Icon
                glyph={dragHandleGlyph}
                iconColor="var(--pui-color-neutral-icon-tertiary)"
                size={16}
              />
            </div>
          )}

          {children && <div className="ListItem__children">{children}</div>}
        </div>
      </div>

      {items && <div className="ListItem__items">{items}</div>}
    </div>
  )
}

export const ListItem = typedForwardRef<ListItemProps, HTMLDivElement>(
  ListItemComponent
)
