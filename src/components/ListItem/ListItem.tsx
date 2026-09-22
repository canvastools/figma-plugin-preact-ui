import { bem, typedForwardRef, mergeRefs, getChildListItems } from '../../utils'
import { useState, useEffect, useLayoutEffect, useRef } from 'preact/hooks'

import type { ListItemProps } from './ListItem.types'
import type { ListDropTarget } from '../ListContext/ListContext.types'
import './ListItem.scss'

import { useListContext, useListItemDragState } from '../ListContext/ListContext'
import { Icon } from '../Icon/Icon'
import {
  chevronRight as chevronRightGlyph,
  chevronDown as chevronDownGlyph,
  dragHandle as dragHandleGlyph,
} from '../Icon/glyphs'

/* --- */

// Classes the drag controller toggles. A mutation that only flips these says
// nothing about selection edges, so the observer below ignores it.
const DRAG_STATE_CLASS = /(^|\s)ListItem(_drag-[\w-]+|_drop-parent|_drop-itself|_dragging|__end-dropzone-active)(?=\s|$)/g

const withoutDragClasses = (value: string | null) =>
  (value ?? '').replace(DRAG_STATE_CLASS, ' ').split(/\s+/).filter(Boolean).sort().join(' ')

const isDragOnlyMutation = (mutation: MutationRecord) =>
  mutation.type === 'attributes' &&
  withoutDragClasses(mutation.oldValue) === withoutDragClasses((mutation.target as Element).getAttribute('class'))

const ListItemComponent = (
  {
    id,
    className,
    variant = 'default',
    flushRight = false,
    nestingLevel = 0,
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
    getNodeInfo,
    getChildIds,
    moveItems,
    drag,
    onKeyDown: contextOnKeyDown,
  } = useListContext()
  const dragState = useListItemDragState(id)
  const [isFocused, setIsFocused] = useState(false)
  const [isLastInBranch, setIsLastInBranch] = useState(false)
  const [isSelectionStart, setIsSelectionStart] = useState(false)
  const [isSelectionEnd, setIsSelectionEnd] = useState(false)
  const [isSelectionAfterNested, setIsSelectionAfterNested] = useState(false)
  const [isSelectionAfterNestedSecondary, setIsSelectionAfterNestedSecondary] = useState(false)
  const [isSelectionBeforeSibling, setIsSelectionBeforeSibling] = useState(false)
  const selfRef = useRef<HTMLDivElement | null>(null)
  const mouseDownTargetRef = useRef<HTMLElement | null>(null)

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

  useLayoutEffect(() => {
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
    const observer = new MutationObserver((mutations) => {
      if (mutations.every(isDragOnlyMutation)) return
      check()
    })
    // subtree/class: collapse toggles on nested items can flip after-nested secondary
    observer.observe(container, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class'],
      attributeOldValue: true,
    })
    return () => observer.disconnect()
  }, [id, selectedItemIds, selectionScope])

  useEffect(() => {
    // register meta for range selection filtering, multi-drag filtering and drop rules
    return registerItem?.(id, {
      selectable,
      selectionScope,
      draggable,
      acceptsChildren,
    })
  }, [id, registerItem, selectable, selectionScope, draggable, acceptsChildren])

  const _className = bem('ListItem', undefined, {
    'selection-scope-descendants': selectionScope === 'withDescendants',
    variant,
    'flush-right': flushRight,
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
    'drag-over': dragState.over,
    'drag-above': dragState.zone === 'above',
    'drag-below': dragState.zone === 'below',
    'drag-inside': dragState.zone === 'inside',
    'drag-self': dragState.self,
    'drag-between-selected': dragState.betweenSelected,
    'drop-parent': dragState.dropParent,
    'drop-itself': dragState.dropItself,
    dragging: dragState.dragging,
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
  //   focused item (items sharing the same parent) move together.
  // - If `selectable=false`, only the focused item moves (selection is ignored,
  //   mirroring the mouse drag behavior where non-selectable items don't
  //   participate in multi-drag).
  // - For nesting (`right`), the previous sibling must accept children.
  // - Every move is asked of `canDrop`, exactly like a drop.
  const moveByKeyboard = (direction: 'up' | 'down' | 'left' | 'right') => {
    const node = getNodeInfo(id)
    if (!node) return

    const isMulti = selectable && selectedItemIds.has(id) && selectedItemIds.size > 1
    // Only draggable items participate in a multi-move, mirroring mouse multi-drag.
    const candidateIds = isMulti
      ? Array.from(selectedItemIds).filter((sid) => sid === id || getItemMeta?.(sid)?.draggable !== false)
      : [id]

    const siblings: { id: string; index: number }[] = []
    for (const cid of candidateIds) {
      const candidate = getNodeInfo(cid)
      if (candidate && candidate.parentId === node.parentId) {
        siblings.push({ id: cid, index: candidate.index })
      }
    }
    if (siblings.length === 0) return

    siblings.sort((a, b) => a.index - b.index)
    const siblingIds = siblings.map((s) => s.id)
    const firstIdx = siblings[0].index
    const lastIdx = siblings[siblings.length - 1].index
    const containerIds = getChildIds(node.parentId)

    let target: ListDropTarget
    switch (direction) {
      case 'up': {
        if (firstIdx === 0) return
        target = { parentId: node.parentId, index: firstIdx - 1 }
        break
      }
      case 'down': {
        if (lastIdx >= containerIds.length - 1) return
        // After the row that follows the last moved one, counted once the moved rows are out
        target = { parentId: node.parentId, index: lastIdx + 2 - siblings.length }
        break
      }
      case 'right': {
        if (firstIdx === 0) return
        const prevSiblingId = containerIds[firstIdx - 1]
        if (!prevSiblingId || !getItemMeta?.(prevSiblingId)?.acceptsChildren) return
        // Append to the end of the previous sibling's existing children.
        target = { parentId: prevSiblingId, index: getChildIds(prevSiblingId).length }
        break
      }
      case 'left': {
        if (node.parentId === null) return
        const parent = getNodeInfo(node.parentId)
        if (!parent) return
        target = { parentId: parent.parentId, index: parent.index + 1 }
        break
      }
    }

    if (!moveItems(siblingIds, target)) return

    // Refocus the originally focused item after the tree re-renders, so the
    // user can chain multiple keyboard moves without losing their anchor.
    requestAnimationFrame(() => {
      const el = document.querySelector(`[data-item-id="${id}"]`)
      if (el instanceof HTMLElement) {
        el.focus({ preventScroll: false })
      }
    })
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
            moveByKeyboard('up')
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
            moveByKeyboard('down')
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
          moveByKeyboard('left')
        }
        break
      case 'ArrowRight':
        if (e.altKey && draggable) {
          e.preventDefault()
          e.stopPropagation()
          moveByKeyboard('right')
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
    if (!draggable) return
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
        setSelection(selectionScope === 'withDescendants' ? (getBranchIds?.(id) ?? [id]) : [id])
      }
    }
    drag.start({ event: e, sourceId: id, itemIds: ids })
    onDragStart?.({ event: e })
  }

  const handleDragHandleDragEnd = (e: DragEvent) => {
    if (!draggable) return
    drag.end()
    onDragEnd?.({ event: e })
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
      style={`--level: ${nestingLevel}`}
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

      {/* Hit target and indicator only: the drag controller reads it off the event target */}
      {isLastInBranch && (
        <div
          className={dragState.endZone ? 'ListItem__end-dropzone ListItem__end-dropzone-active' : 'ListItem__end-dropzone'}
        />
      )}
    </div>
  )
}

export const ListItem = typedForwardRef<ListItemProps, HTMLDivElement>(ListItemComponent)
