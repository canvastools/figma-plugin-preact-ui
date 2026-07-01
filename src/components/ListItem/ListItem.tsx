import { bem, typedForwardRef } from '../../utils'
import { useState, useEffect, useRef } from 'preact/hooks'

import type { ListItemProps } from './ListItem.types'
import './ListItem.scss'

import { useListContext } from '../../index'
import { Icon } from '../../index'
import { chevronRight as chevronRightGlyph, chevronDown as chevronDownGlyph, dragHandle as dragHandleGlyph } from '../../index'

/* --- */

const ListItemComponent = (
  {
    id,
    className,
    variant = 'default',
    nestingLevel = 0,
    padding,
    draggable = false,
    acceptsChildren = false,
    selectionScope = 'individual',
    collapsed,
    collapsable = false,
    collapseIconIntent = 'secondary',
    onCollapsedChange,
    onDragStart,
    onDragEnd,
    selectable = false,
    hoverable = false,
    onSelect,
    items,
    children,
    tabIndex,
    ...rest
  }: ListItemProps,
  ref: preact.Ref<HTMLDivElement>,
) => {
  const {
    selectedItemIds,
    selectionOriginIds,
    toggleSelect,
    selectionMode,
    setSelection,
    registerItem,
    dragImage,
    reorderItems,
    getPathForId,
    onKeyDown: contextOnKeyDown,
  } = useListContext()
  const [isDragging, setIsDragging] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isLastInBranch, setIsLastInBranch] = useState(false)
  const selfRef = useRef<HTMLDivElement | null>(null)
  const mouseDownTargetRef = useRef<HTMLElement | null>(null)
  const endZoneRef = useRef<HTMLDivElement | null>(null)
  const endZoneDropParentRef = useRef<HTMLElement | null>(null)

  // Collapsed (controlled/uncontrolled)
  const isCollapsedControlled = collapsed !== undefined
  const [internalCollapsed, setInternalCollapsed] = useState<boolean>(Boolean(collapsed))
  useEffect(() => {
    if (isCollapsedControlled) setInternalCollapsed(Boolean(collapsed))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsed])
  const effectiveCollapsed = isCollapsedControlled ? Boolean(collapsed) : internalCollapsed

  useEffect(() => {
    const el = selfRef.current
    if (!el) return
    const container = el.parentElement
    if (!container) return

    const check = () => {
      const siblings = container.children
      let last: Element | null = null
      for (let i = siblings.length - 1; i >= 0; i--) {
        if ((siblings[i] as HTMLElement).classList?.contains('ListItem')) {
          last = siblings[i]
          break
        }
      }
      setIsLastInBranch(last === el)
    }

    check()
    const observer = new MutationObserver(check)
    observer.observe(container, { childList: true })
    return () => observer.disconnect()
  }, [])

  const isSelected = selectedItemIds.has(id)
  const isSelectionOrigin = selectionScope === 'individual' ? isSelected : Boolean(selectionOriginIds?.has(id))
  const hasChildren = Boolean(items)

  useEffect(() => {
    // register meta for range selection filtering
    const unregister = registerItem?.(id, {
      selectable,
      selectionScope,
    })
    const handleGlobalDragEnd = () => {
      setIsDragging(false)
      document.documentElement.classList.remove('pui-dragging')
      endZoneRef.current?.classList.remove('ListItem__end-dropzone-active')
      endZoneDropParentRef.current = null
    }

    const handleResetDragStates = () => {
      setIsDragging(false)
      document.documentElement.classList.remove('pui-dragging')
      endZoneRef.current?.classList.remove('ListItem__end-dropzone-active')
      endZoneDropParentRef.current = null
    }

    document.addEventListener('dragend', handleGlobalDragEnd)
    document.addEventListener('resetDragStates', handleResetDragStates)

    return () => {
      document.removeEventListener('dragend', handleGlobalDragEnd)
      document.removeEventListener('resetDragStates', handleResetDragStates)
      unregister?.()
    }
  }, [id, registerItem, selectable, selectionScope])

  const _className = bem('ListItem', undefined, {
    'selection-scope-descendants': selectionScope === 'withDescendants',
    variant,
    nested: nestingLevel > 0,
    draggable: draggable,
    selectable: selectable,
    selected: isSelected,
    'selection-origin': isSelectionOrigin,
    focused: isFocused,
    hoverable: hoverable,
    'has-children': hasChildren,
    collapsed: effectiveCollapsed,
    collapsable,
    dragging: isDragging,
  })

  const isInteractiveTarget = (target: HTMLElement | null): boolean => {
    if (!target) return false

    let el: HTMLElement | null = target
    while (el && el !== selfRef.current) {
      const interactiveAttr = el.getAttribute('data-pui-interactive')
      if (interactiveAttr === 'true') {
        return true
      }
      if (interactiveAttr === 'false') {
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

  const moveFocus = (direction: 'prev' | 'next') => {
    const current = selfRef.current
    if (!current) return

    // Scope navigation to the outermost ListContainer ancestor so arrow keys
    // don't jump between sibling ListContexts on the same page.
    let root: HTMLElement | null = current.closest('.ListContainer') as HTMLElement | null
    while (root) {
      const outer = root.parentElement?.closest('.ListContainer') as HTMLElement | null
      if (!outer) break
      root = outer
    }
    if (!root) return

    const allItems = Array.from(root.querySelectorAll<HTMLElement>('.ListItem'))
    if (!allItems.length) return
    const visibleItems = allItems.filter((el) => {
      // Skip items that are not visible (collapsed or display:none)
      return el.offsetParent !== null
    })
    const index = visibleItems.indexOf(current as HTMLElement)
    if (index === -1) return

    // Wrap around at the ends so the focus cycles within the context.
    const lastIndex = visibleItems.length - 1
    const nextIndex = direction === 'prev' ? (index === 0 ? lastIndex : index - 1) : index === lastIndex ? 0 : index + 1
    const target = visibleItems[nextIndex]
    if (target && target !== current) {
      target.focus()
    }
  }

  // Keyboard reordering: move the focused item (or all selected siblings) in
  // the requested direction. Mirrors mouse drag-and-drop constraints:
  // - Requires `draggable` on the focused item.
  // - If `selectable=true`, multi-move applies: all selected siblings of the
  //   focused item (items sharing the same parent path) move together.
  // - If `selectable=false`, only the focused item moves (selection is ignored,
  //   mirroring the mouse drag behavior where non-selectable items don't
  //   participate in multi-drag).
  // - For nesting (`right`), the previous sibling must accept children.
  const moveItems = (direction: 'up' | 'down' | 'left' | 'right') => {
    const myPath = getPathForId?.(id)
    if (!myPath || myPath.length === 0) return
    const myParentPath = myPath.slice(0, -1)

    const isMulti = selectable && selectedItemIds.has(id) && selectedItemIds.size > 1
    const candidateIds = isMulti ? Array.from(selectedItemIds) : [id]

    const siblings: { id: string; index: number }[] = []
    for (const cid of candidateIds) {
      const cp = getPathForId?.(cid)
      if (!cp || cp.length === 0) continue
      const cParent = cp.slice(0, -1)
      if (cParent.length === myParentPath.length && cParent.every((v, i) => v === myParentPath[i])) {
        siblings.push({ id: cid, index: cp[cp.length - 1] })
      }
    }
    if (siblings.length === 0) return

    siblings.sort((a, b) => a.index - b.index)
    const siblingIds = siblings.map((s) => s.id)
    const firstIdx = siblings[0].index
    const lastIdx = siblings[siblings.length - 1].index

    const myEl = selfRef.current
    const containerEl = myEl?.parentElement
    const itemEls = containerEl
      ? (Array.from(containerEl.children).filter((el) => (el as HTMLElement).classList.contains('ListItem')) as HTMLElement[])
      : []
    const containerLength = itemEls.length

    // Refocus the originally focused item after the tree re-renders, so the
    // user can chain multiple keyboard moves without losing their anchor.
    const refocusAfterMove = () => {
      requestAnimationFrame(() => {
        const el = document.querySelector(`[data-item-id="${id}"]`)
        if (el instanceof HTMLElement) {
          el.focus({ preventScroll: false })
        }
      })
    }

    switch (direction) {
      case 'up': {
        if (firstIdx === 0) return
        const targetParentPath = myParentPath.length > 0 ? myParentPath : undefined
        reorderItems(siblingIds, firstIdx - 1, targetParentPath)
        refocusAfterMove()
        break
      }
      case 'down': {
        if (lastIdx >= containerLength - 1) return
        const targetParentPath = myParentPath.length > 0 ? myParentPath : undefined
        reorderItems(siblingIds, lastIdx + 2, targetParentPath)
        refocusAfterMove()
        break
      }
      case 'right': {
        if (firstIdx === 0) return
        const prevSiblingEl = itemEls[firstIdx - 1]
        if (!prevSiblingEl) return
        if (prevSiblingEl.getAttribute('data-accepts-children') === 'false') return
        const previousSiblingPath = [...myParentPath, firstIdx - 1]
        // Append to the end of the previous sibling's existing children.
        const prevSiblingChildrenContainer = prevSiblingEl.querySelector(':scope > .ListItem__items > .ListContainer')
        const prevSiblingChildrenCount = prevSiblingChildrenContainer
          ? Array.from(prevSiblingChildrenContainer.children).filter((el) => (el as HTMLElement).classList.contains('ListItem'))
              .length
          : 0
        reorderItems(siblingIds, prevSiblingChildrenCount, previousSiblingPath)
        refocusAfterMove()
        break
      }
      case 'left': {
        if (myParentPath.length === 0) return
        const grandparentPath = myParentPath.slice(0, -1)
        const parentIndexInGrandparent = myParentPath[myParentPath.length - 1]
        const targetParentPath = grandparentPath.length > 0 ? grandparentPath : undefined
        reorderItems(siblingIds, parentIndexInGrandparent + 1, targetParentPath)
        refocusAfterMove()
        break
      }
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isInteractiveTarget(e.target as HTMLElement | null)) return
    contextOnKeyDown?.({ event: e, itemId: id })
    switch (e.key) {
      case 'ArrowUp':
        if (e.altKey) {
          if (draggable) {
            e.preventDefault()
            e.stopPropagation()
            moveItems('up')
          }
          break
        }
        e.preventDefault()
        e.stopPropagation()
        moveFocus('prev')
        break
      case 'ArrowDown':
        if (e.altKey) {
          if (draggable) {
            e.preventDefault()
            e.stopPropagation()
            moveItems('down')
          }
          break
        }
        e.preventDefault()
        e.stopPropagation()
        moveFocus('next')
        break
      case 'ArrowLeft':
        if (e.altKey && draggable) {
          e.preventDefault()
          e.stopPropagation()
          moveItems('left')
        }
        break
      case 'ArrowRight':
        if (e.altKey && draggable) {
          e.preventDefault()
          e.stopPropagation()
          moveItems('right')
        }
        break
      case 'Enter':
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
      case ' ':
      case 'Spacebar': {
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
      document.documentElement.classList.add('pui-dragging')
      // Determine if this drag should be multi based on current selection BEFORE mutating it
      const isMultiDrag = selectable && selectedItemIds.has(id) && selectedItemIds.size > 1
      const ids = isMultiDrag ? Array.from(selectedItemIds) : [id]
      // If not multi, set exact selection to this id only.
      // Only mutate selection for selectable items – otherwise dragging an
      // unselectable item would visually select it.
      if (selectable && selectionMode !== undefined && !isMultiDrag) {
        setSelection([id])
      }
      const payload = { ids }
      try {
        e.dataTransfer?.setData('application/json', JSON.stringify(payload))
      } catch {
        // Ignore setData errors
      }
      e.dataTransfer?.setData('text/plain', ids[0])
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
      document.documentElement.classList.remove('pui-dragging')
      try {
        delete (window as { __puiDraggingIds?: string[] }).__puiDraggingIds
      } catch {
        // Ignore delete errors
      }
      onDragEnd?.({ event: e })
    }
  }

  const handleEndZoneDragOver = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move'
    }
    const endZoneTarget = e.currentTarget as HTMLElement
    endZoneTarget.classList.add('ListItem__end-dropzone-active')

    const containerEl = selfRef.current?.closest('.ListContainer') as HTMLElement | null
    let parentItemEl: HTMLElement | null = null
    if (containerEl) {
      let levelContainer: HTMLElement | null = containerEl
      while (levelContainer) {
        const levelItems = Array.from(levelContainer.children).filter((el) =>
          (el as HTMLElement).classList.contains('ListItem'),
        ) as HTMLElement[]
        levelItems.forEach((item) => {
          item.classList.remove(
            'ListItem_drag-over',
            'ListItem_drag-above',
            'ListItem_drag-below',
            'ListItem_drag-inside',
            'ListItem_drag-self',
          )
        })
        const levelParentItem = levelContainer.closest('.ListItem') as HTMLElement | null
        if (!parentItemEl && levelParentItem) {
          parentItemEl = levelParentItem
        }
        levelContainer = levelParentItem?.parentElement?.closest('.ListContainer') ?? null
      }
    }

    const desiredEl = parentItemEl || containerEl?.closest('.ListItem') || null
    if (endZoneDropParentRef.current !== desiredEl) {
      const allDropParents = document.querySelectorAll<HTMLElement>('.ListItem_drop-parent')
      allDropParents.forEach((el) => {
        el.classList.remove('ListItem_drop-parent')
      })
      if (desiredEl) desiredEl.classList.add('ListItem_drop-parent')
      endZoneDropParentRef.current = desiredEl
    }
  }

  const handleEndZoneDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const endZoneTarget = e.currentTarget as HTMLElement
    endZoneTarget.classList.remove('ListItem__end-dropzone-active')
    if (endZoneDropParentRef.current) {
      endZoneDropParentRef.current.classList.remove('ListItem_drop-parent')
      endZoneDropParentRef.current = null
    }
    let itemIds: string[] | null = null
    const globalIds = (window as { __puiDraggingIds?: string[] }).__puiDraggingIds
    if (Array.isArray(globalIds)) itemIds = globalIds
    const json = e.dataTransfer?.getData('application/json')
    if (json) {
      try {
        const parsed = JSON.parse(json)
        if (parsed && Array.isArray(parsed.ids)) itemIds = parsed.ids
      } catch {
        // Ignore JSON parse errors
      }
    }
    if (!itemIds) {
      const itemId = e.dataTransfer?.getData('text/plain')
      if (itemId) itemIds = [itemId]
    }

    if (itemIds && itemIds.length) {
      const resetDragStatesEvent = new CustomEvent('resetDragStates')
      document.dispatchEvent(resetDragStatesEvent)

      const containerEl = selfRef.current?.closest('.ListContainer') as HTMLElement | null
      const childCount = containerEl
        ? Array.from(containerEl.children).filter((el) => (el as HTMLElement).classList?.contains('ListItem')).length
        : 0
      const parentItemEl = containerEl?.closest('.ListItem') as HTMLElement | null
      const parentId = parentItemEl?.getAttribute('data-item-id') || null
      const parentPath = parentId ? getPathForId?.(parentId) || [] : []

      const targetPath = parentId ? parentPath : undefined
      const targetIndex = childCount

      reorderItems(itemIds, targetIndex, targetPath)
    }
  }

  const handleEndZoneDragLeave = (e: DragEvent) => {
    const endZoneTarget = e.currentTarget as HTMLElement
    endZoneTarget.classList.remove('ListItem__end-dropzone-active')
    if (endZoneDropParentRef.current) {
      endZoneDropParentRef.current.classList.remove('ListItem_drop-parent')
      endZoneDropParentRef.current = null
    }
  }

  return (
    <div
      id={id}
      className={[_className, className].join(' ').trim()}
      ref={(node) => {
        selfRef.current = node
        if (typeof ref === 'function') ref(node as HTMLDivElement)
        else if (ref) (ref as preact.RefObject<HTMLDivElement>).current = node
      }}
      key={id}
      {...rest}
      tabIndex={tabIndex ?? (selectable || draggable || collapsable ? 0 : undefined)}
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
      data-accepts-children={acceptsChildren ? 'true' : 'false'}
      style={[
        `--level: ${nestingLevel}`,
        padding?.top !== undefined ? `--li-pt: var(--pui-spacing-${padding.top})` : '',
        padding?.right !== undefined ? `--li-pr: var(--pui-spacing-${padding.right})` : '',
        padding?.bottom !== undefined ? `--li-pb: var(--pui-spacing-${padding.bottom})` : '',
        padding?.left !== undefined ? `--li-pl: var(--pui-spacing-${padding.left})` : '',
      ]
        .filter(Boolean)
        .join('; ')}
    >
      <div
        className="ListItem__content"
        onClick={handleClick}
        draggable={draggable}
        onMouseDown={
          draggable
            ? (e: MouseEvent) => {
                mouseDownTargetRef.current = e.target as HTMLElement
              }
            : undefined
        }
        onDragStart={
          draggable
            ? (e: DragEvent) => {
                if (isInteractiveTarget(mouseDownTargetRef.current)) {
                  e.preventDefault()
                  return
                }
                handleDragHandleDragStart(e)
              }
            : undefined
        }
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
                intentModifier={collapseIconIntent}
                glyph={effectiveCollapsed ? chevronRightGlyph : chevronDownGlyph}
                size={16}
                variant="default"
              />
            </div>
          )}

          {draggable && (
            <div
              className="ListItem__drag-handle"
              draggable={true}
              onDragStart={(e: DragEvent) => {
                e.stopPropagation()
                handleDragHandleDragStart(e)
              }}
              onDragEnd={handleDragHandleDragEnd}
            >
              <Icon glyph={dragHandleGlyph} iconColor="var(--pui-color-neutral-icon-tertiary)" size={16} />
            </div>
          )}

          {children && <div className="ListItem__children">{children}</div>}
        </div>
      </div>

      {items && <div className="ListItem__items">{items}</div>}

      {isLastInBranch && (
        <div
          ref={endZoneRef}
          className="ListItem__end-dropzone"
          onDragOver={handleEndZoneDragOver}
          onDrop={handleEndZoneDrop}
          onDragLeave={handleEndZoneDragLeave}
        />
      )}
    </div>
  )
}

export const ListItem = typedForwardRef<ListItemProps, HTMLDivElement>(ListItemComponent)
