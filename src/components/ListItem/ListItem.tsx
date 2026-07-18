import {
  bem,
  typedForwardRef,
  mergeRefs,
  DRAG_ZONE_CLASSES,
  clearDropItself,
  setDropParentElement,
  resolveDraggedIds,
  setDraggingIds,
  clearDraggingIds,
  getChildListItems,
} from '../../utils'
import { useState, useEffect, useRef } from 'preact/hooks'

import type { ListItemProps } from './ListItem.types'
import './ListItem.scss'

import { useListContext } from '../ListContext/ListContext'
import { Icon } from '../Icon/Icon'
import {
  chevronRight as chevronRightGlyph,
  chevronDown as chevronDownGlyph,
  dragHandle as dragHandleGlyph,
} from '../Icon/glyphs'

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
    collapseIconIntent = 'tertiary',
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
    getItemMeta,
    getBranchIds,
    dragImage,
    reorderItems,
    getPathForId,
    onKeyDown: contextOnKeyDown,
  } = useListContext()
  const [isDragging, setIsDragging] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isLastInBranch, setIsLastInBranch] = useState(false)
  const [isSelectionStart, setIsSelectionStart] = useState(false)
  const [isSelectionEnd, setIsSelectionEnd] = useState(false)
  const [isSelectionAfterNested, setIsSelectionAfterNested] = useState(false)
  const [isSelectionAfterNestedSecondary, setIsSelectionAfterNestedSecondary] = useState(false)
  const [isSelectionBeforeSibling, setIsSelectionBeforeSibling] = useState(false)
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

  const isSelected = selectedItemIds.has(id)
  const isSelectionOrigin = selectionScope === 'individual' ? isSelected : Boolean(selectionOriginIds?.has(id))
  const hasChildren = Boolean(items)

  useEffect(() => {
    const el = selfRef.current
    if (!el) return
    const container = el.parentElement
    if (!container) return

    // Last item on the last-child chain that closes the branch, if selected.
    const getBranchEndSelectedItem = (itemEl: HTMLElement): HTMLElement | null => {
      const itemsContainer = itemEl.querySelector(':scope > .ListItem__items > .ListContainer')
      if (!itemsContainer) return null
      const children = getChildListItems(itemsContainer)
      if (children.length === 0) return null
      const last = children[children.length - 1]
      const lastId = last.getAttribute('data-item-id')
      if (lastId && selectedItemIds.has(lastId)) return last
      if (last.classList.contains('ListItem_collapsed')) return null
      return getBranchEndSelectedItem(last)
    }

    // True when the last visible item in this branch (last-child chain) is selected.
    const branchEndsWithSelection = (itemEl: HTMLElement): boolean => Boolean(getBranchEndSelectedItem(itemEl))

    // Expanded selected origin with children → secondary fill under it.
    const branchEndsWithSecondarySelection = (itemEl: HTMLElement): boolean => {
      const end = getBranchEndSelectedItem(itemEl)
      if (!end) return false
      return (
        end.classList.contains('ListItem_selection-origin') &&
        end.classList.contains('ListItem_has-children') &&
        !end.classList.contains('ListItem_collapsed')
      )
    }

    // True when this selected item is on the last-child chain of an unselected
    // ancestor whose next sibling is selected — e.g. 1-2 in [1 > 1-2 selected][2 selected]
    const isBeforeSelectedSibling = (itemEl: HTMLElement): boolean => {
      let current: HTMLElement | null = itemEl
      while (current) {
        const listContainer = current.parentElement
        if (!listContainer?.classList.contains('ListContainer')) return false
        const siblings = getChildListItems(listContainer)
        if (siblings[siblings.length - 1] !== current) return false

        const parentItem = listContainer.parentElement?.parentElement as HTMLElement | null
        if (!parentItem?.classList.contains('ListItem')) return false

        const parentId = parentItem.getAttribute('data-item-id')
        const parentSelected = Boolean(parentId && selectedItemIds.has(parentId))
        if (parentSelected) return false

        const parentNext = parentItem.nextElementSibling as HTMLElement | null
        const parentNextId = parentNext?.classList.contains('ListItem') ? parentNext.getAttribute('data-item-id') : null
        if (parentNextId && selectedItemIds.has(parentNextId)) return true

        current = parentItem
      }
      return false
    }

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

      if (!selectedItemIds.has(id)) {
        setIsSelectionStart(false)
        setIsSelectionEnd(false)
        setIsSelectionAfterNested(false)
        setIsSelectionAfterNestedSecondary(false)
        setIsSelectionBeforeSibling(false)
        return
      }
      const prev = el.previousElementSibling as HTMLElement | null
      const next = el.nextElementSibling as HTMLElement | null
      const prevIsListItem = Boolean(prev?.classList.contains('ListItem'))
      const prevId = prevIsListItem ? prev!.getAttribute('data-item-id') : null
      const nextId = next?.classList.contains('ListItem') ? next.getAttribute('data-item-id') : null
      const prevSelected = Boolean(prevId && selectedItemIds.has(prevId))

      if (selectionScope === 'individual') {
        // Contiguous selection in document order (crosses nesting), e.g. 1 → 1-1 → 1-2
        let root: HTMLElement | null = el.closest('.ListContainer')
        while (root) {
          const outer = root.parentElement?.closest('.ListContainer') as HTMLElement | null
          if (!outer) break
          root = outer
        }
        const allItems = root
          ? (Array.from(root.querySelectorAll('.ListItem')) as HTMLElement[]).filter((item) => item.offsetParent !== null)
          : []
        const index = allItems.indexOf(el)
        const prevVisible = index > 0 ? allItems[index - 1] : null
        const nextVisible = index >= 0 && index < allItems.length - 1 ? allItems[index + 1] : null
        const prevVisibleId = prevVisible?.getAttribute('data-item-id')
        const nextVisibleId = nextVisible?.getAttribute('data-item-id')
        setIsSelectionStart(!prevVisibleId || !selectedItemIds.has(prevVisibleId))
        setIsSelectionEnd(!nextVisibleId || !selectedItemIds.has(nextVisibleId))
      } else {
        // withDescendants: range edges among siblings at the same level
        setIsSelectionStart(!prevId || !prevSelected)
        setIsSelectionEnd(!nextId || !selectedItemIds.has(nextId))
      }

      // Selected item right after an unselected expanded parent whose branch ends selected
      // e.g. [1 > 1-2 selected] then [2 selected]
      const afterNested =
        prevIsListItem && !prevSelected && !prev!.classList.contains('ListItem_collapsed') && branchEndsWithSelection(prev!)
      setIsSelectionAfterNested(afterNested)
      // Secondary when that nested end is an expanded origin with children (e.g. 1-2 > 1-2-1)
      setIsSelectionAfterNestedSecondary(afterNested && branchEndsWithSecondarySelection(prev!))
      setIsSelectionBeforeSibling(isBeforeSelectedSibling(el))
    }

    check()
    const observer = new MutationObserver(check)
    // subtree/class: collapse toggles on nested items can flip after-nested secondary
    observer.observe(container, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [id, selectedItemIds, selectionScope])

  useEffect(() => {
    // register meta for range selection filtering and multi-drag filtering
    const unregister = registerItem?.(id, {
      selectable,
      selectionScope,
      draggable,
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
  }, [id, registerItem, selectable, selectionScope, draggable])

  const _className = bem('ListItem', undefined, {
    'selection-scope-descendants': selectionScope === 'withDescendants',
    variant,
    nested: nestingLevel > 0,
    draggable: draggable,
    selectable: selectable,
    selected: isSelected,
    'selection-origin': isSelectionOrigin,
    'selection-start': isSelectionStart,
    'selection-end': isSelectionEnd,
    'selection-after-nested': isSelectionAfterNested,
    'selection-after-nested-secondary': isSelectionAfterNestedSecondary,
    'selection-before-sibling': isSelectionBeforeSibling,
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
    const nextSelection = toggleSelect(id, { range, additive })
    onSelect?.({ event: e, selected: nextSelection.has(id) })
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
    // Only draggable items participate in a multi-move, mirroring mouse multi-drag.
    const candidateIds = isMulti
      ? Array.from(selectedItemIds).filter((sid) => sid === id || getItemMeta?.(sid)?.draggable !== false)
      : [id]

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
    const itemEls = containerEl ? getChildListItems(containerEl) : []
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
          ? getChildListItems(prevSiblingChildrenContainer).length
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
          const nextSelection = toggleSelect(id, { range, additive })
          onSelect?.({
            event: e,
            selected: nextSelection.has(id),
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
              event: e,
              collapsed: nextCollapsed,
            })
          } else {
            setInternalCollapsed(nextCollapsed)
            onCollapsedChange?.({
              event: e,
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
      let ids: string[]
      if (isMultiDrag) {
        // Only draggable items participate in a multi-drag. Selected descendants
        // of a dragged item travel with it regardless of their own draggable
        // flag (the branch moves as a whole), so keep them selected.
        const selected = Array.from(selectedItemIds)
        const draggableIds = selected.filter((sid) => sid === id || getItemMeta?.(sid)?.draggable !== false)
        const keep = new Set(draggableIds)
        draggableIds.forEach((sid) => {
          getBranchIds?.(sid).forEach((bid) => {
            if (selectedItemIds.has(bid)) keep.add(bid)
          })
        })
        ids = Array.from(keep)
        // Deselect items that don't participate in the drag.
        if (selectionMode !== undefined && ids.length !== selected.length) {
          setSelection(ids)
        }
      } else {
        ids = [id]
        // If not multi, set exact selection to this id only (with its
        // descendants for selectionScope="withDescendants", matching click).
        // Only mutate selection for selectable items – otherwise dragging an
        // unselectable item would visually select it.
        if (selectable && selectionMode !== undefined) {
          setSelection(selectionScope === 'withDescendants' ? getBranchIds?.(id) ?? [id] : [id])
        }
      }
      const payload = { ids }
      try {
        e.dataTransfer?.setData('application/json', JSON.stringify(payload))
      } catch {
        // Ignore setData errors
      }
      e.dataTransfer?.setData('text/plain', ids[0])
      setDraggingIds(ids)
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
      clearDraggingIds()
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
        getChildListItems(levelContainer).forEach((item) => {
          item.classList.remove(...DRAG_ZONE_CLASSES)
        })
        const levelParentItem = levelContainer.closest('.ListItem') as HTMLElement | null
        if (!parentItemEl && levelParentItem) {
          parentItemEl = levelParentItem
        }
        levelContainer = levelParentItem?.parentElement?.closest('.ListContainer') ?? null
      }
    }

    const desiredEl = parentItemEl || containerEl?.closest('.ListItem') || null
    setDropParentElement(desiredEl, endZoneDropParentRef)
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
    clearDropItself()
    const itemIds = resolveDraggedIds(e.dataTransfer)

    if (itemIds && itemIds.length) {
      const resetDragStatesEvent = new CustomEvent('resetDragStates')
      document.dispatchEvent(resetDragStatesEvent)

      const containerEl = selfRef.current?.closest('.ListContainer') as HTMLElement | null
      const childCount = containerEl ? getChildListItems(containerEl).length : 0
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
    clearDropItself()
  }

  return (
    <div
      id={id}
      className={[_className, className].join(' ').trim()}
      ref={mergeRefs(selfRef, ref)}
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
                variant="downscaled"
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
              <Icon glyph={dragHandleGlyph} intent="neutral" intentModifier="tertiary" size={16} />
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
