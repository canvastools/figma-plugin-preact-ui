import type { Ref, RefObject } from 'preact'

/* --- */

// Shared DOM/drag helpers for List, ListContainer and ListItem.

export const DRAG_ZONE_CLASSES = [
  'ListItem_drag-over',
  'ListItem_drag-above',
  'ListItem_drag-below',
  'ListItem_drag-inside',
  'ListItem_drag-self',
  'ListItem_drag-between-selected',
] as const

type DraggingIdsWindow = { __puiDraggingIds?: string[] }

export const getDraggingIds = (): string[] | null => {
  const ids = (window as DraggingIdsWindow).__puiDraggingIds
  return Array.isArray(ids) ? ids : null
}

export const setDraggingIds = (ids: string[]) => {
  ;(window as DraggingIdsWindow).__puiDraggingIds = ids
}

export const clearDraggingIds = () => {
  try {
    delete (window as DraggingIdsWindow).__puiDraggingIds
  } catch {
    // Ignore delete errors
  }
}

// Resolve dragged item ids on drop: global ids first, then the JSON payload,
// then the plain-text single id as a last resort.
export const resolveDraggedIds = (dataTransfer: DataTransfer | null): string[] | null => {
  let itemIds: string[] | null = getDraggingIds()
  const json = dataTransfer?.getData('application/json')
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
    const itemId = dataTransfer?.getData('text/plain')
    if (itemId) itemIds = [itemId]
  }
  return itemIds
}

// During dragover the JSON payload is not readable, so only the global ids and
// the plain-text id are available.
export const getDragOverIds = (dataTransfer: DataTransfer | null): string[] => {
  const globalIds = getDraggingIds()
  if (globalIds) return globalIds
  const plain = dataTransfer?.getData('text/plain')
  return plain ? [plain] : []
}

export const clearDropItself = () => {
  document.querySelectorAll<HTMLElement>('.ListItem_drop-itself').forEach((el) => {
    el.classList.remove('ListItem_drop-itself')
  })
}

// Marks dragged withDescendants items when drop target is inside their own branch.
export const syncDropItself = (dropTarget: HTMLElement | null) => {
  clearDropItself()
  if (!dropTarget) return
  const draggedIds = getDraggingIds()
  if (!draggedIds || draggedIds.length === 0) return

  for (const id of draggedIds) {
    let draggedEl: HTMLElement | null
    try {
      draggedEl = document.querySelector(`[data-item-id="${CSS.escape(id)}"]`)
    } catch {
      draggedEl = document.querySelector(`[data-item-id="${id}"]`)
    }
    if (!draggedEl) continue
    if (!draggedEl.classList.contains('ListItem_selection-scope-descendants')) continue
    if (draggedEl === dropTarget || draggedEl.contains(dropTarget)) {
      draggedEl.classList.add('ListItem_drop-itself')
    }
  }
}

// At any time there should be at most one drop-parent in the entire tree.
export const setDropParentElement = (
  desiredDropParent: HTMLElement | null,
  dropParentRef: { current: HTMLElement | null },
) => {
  if (
    dropParentRef.current !== desiredDropParent ||
    (desiredDropParent && !desiredDropParent.classList.contains('ListItem_drop-parent'))
  ) {
    document.querySelectorAll<HTMLElement>('.ListItem_drop-parent').forEach((el) => {
      el.classList.remove('ListItem_drop-parent')
    })
    if (desiredDropParent) desiredDropParent.classList.add('ListItem_drop-parent')
    dropParentRef.current = desiredDropParent
  }
  syncDropItself(desiredDropParent)
}

export const getChildListItems = (container: Element): HTMLElement[] =>
  Array.from(container.children).filter((el) => el.classList.contains('ListItem')) as HTMLElement[]

export const mergeRefs =
  <T>(...refs: (Ref<T> | null | undefined)[]) =>
  (node: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return
      if (typeof ref === 'function') ref(node)
      else (ref as RefObject<T>).current = node
    })
  }
