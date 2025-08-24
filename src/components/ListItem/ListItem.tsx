import { bem, typedForwardRef } from "../../utils"
import { useListContext } from "../ListContext/ListContext"
import { useState, useEffect } from "preact/hooks"

import type { ListItemProps } from "./ListItem.types"
import "./ListItem.scss"

/* --- */

const ListItemComponent = (
  {
    className,
    id,
    isNested,
    nestingLevel = 0,
    draggable,
    onDragStart,
    onDragEnd,
    selectable,
    onSelect,
    subItems,
    children,
    ...rest
  }: ListItemProps,
  ref: preact.Ref<HTMLDivElement>
) => {
  const { selectedItems, setSelection } = useListContext()
  const [isDragOver, setIsDragOver] = useState(false)
  const [dragPosition, setDragPosition] = useState<"above" | "below" | null>(
    null
  )

  const isSelected = selectedItems.has(id)

  useEffect(() => {
    const handleGlobalDragEnd = () => {
      setIsDragOver(false)
      setDragPosition(null)
    }

    const handleResetDragStates = () => {
      setIsDragOver(false)
      setDragPosition(null)
    }

    document.addEventListener("dragend", handleGlobalDragEnd)
    document.addEventListener("resetDragStates", handleResetDragStates)

    return () => {
      document.removeEventListener("dragend", handleGlobalDragEnd)
      document.removeEventListener("resetDragStates", handleResetDragStates)
    }
  }, [])

  const _className = bem("ListItem", undefined, {
    nested: isNested,
    draggable: Boolean(draggable),
    selectable: Boolean(selectable),
    selected: isSelected,
    "drag-over": isDragOver,
    "drag-above": dragPosition === "above",
    "drag-below": dragPosition === "below",
  })

  const handleClick = () => {
    if (selectable) {
      setSelection([id], !isSelected)
      onSelect?.(!isSelected)
    }
  }

  const handleDragOver = (e: DragEvent) => {
    if (draggable) {
      e.preventDefault()
      e.dataTransfer!.dropEffect = "move"

      const target = e.currentTarget as HTMLElement
      const rect = target.getBoundingClientRect()
      const dropY = e.clientY - rect.top
      const threshold = rect.height / 2

      setIsDragOver(true)
      setDragPosition(dropY < threshold ? "above" : "below")
    }
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
    setDragPosition(null)
  }

  const handleDragHandleDragStart = (e: DragEvent) => {
    if (draggable) {
      e.dataTransfer?.setData("text/plain", id)
      onDragStart?.()
    }
  }

  const handleDragHandleDragEnd = () => {
    if (draggable) {
      setIsDragOver(false)
      setDragPosition(null)
      onDragEnd?.()
    }
  }

  return (
    <div
      className={[_className, className].join(" ").trim()}
      ref={ref}
      key={id}
      {...rest}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      data-nesting-level={nestingLevel}
      style={{
        paddingLeft: `px calc(var(--pui-space-200) * ${nestingLevel});`,
      }}
    >
      <div className="ListItem__content">
        {draggable && (
          <div
            className="ListItem__drag-handle"
            draggable={true}
            onDragStart={handleDragHandleDragStart}
            onDragEnd={handleDragHandleDragEnd}
          >
            ⋮⋮
          </div>
        )}
        {selectable && (
          <div className="ListItem__selection-indicator">
            {isSelected ? "☑" : "☐"}
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
