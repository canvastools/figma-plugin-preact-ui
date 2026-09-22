import type { Ref, RefObject } from 'preact'
import type { ListDropTarget, ListItemData, ListNodeInfo } from '../../components/ListContext/ListContext.types'

/* --- */

// Shared tree and DOM helpers for List, ListContext, ListContainer and ListItem.

export interface ListTreeIndex {
  nodes: Map<string, ListNodeInfo & { order: number }>
  children: Map<string | null, string[]>
}

// Items trees are plain JSON-safe data (see ListItemData), but structuredClone
// is cheaper and keeps richer values intact if the type ever grows.
export const cloneListItems = (items: ListItemData[]): ListItemData[] =>
  typeof structuredClone === 'function' ? structuredClone(items) : JSON.parse(JSON.stringify(items))

// Where every item sits, rebuilt once per items tree. `order` is the depth-first position.
export const indexListTree = (items: ListItemData[]): ListTreeIndex => {
  const nodes: ListTreeIndex['nodes'] = new Map()
  const children: ListTreeIndex['children'] = new Map()
  let order = 0

  const walk = (list: ListItemData[], parentId: string | null) => {
    children.set(
      parentId,
      list.map((node) => node.id),
    )
    list.forEach((node, index) => {
      nodes.set(node.id, { parentId, index, order: order++ })
      if (node.items && node.items.length) walk(node.items, node.id)
    })
  }

  walk(items, null)
  return { nodes, children }
}

// True when `id` is `ancestorId` itself or sits anywhere below it.
export const isWithinListBranch = (tree: ListTreeIndex, id: string | null, ancestorId: string): boolean => {
  let current = id
  while (current !== null) {
    if (current === ancestorId) return true
    current = tree.nodes.get(current)?.parentId ?? null
  }
  return false
}

// The rows that actually move: an id whose ancestor also moves travels inside
// it, and ids no longer in the tree are ignored. Returned in tree order.
export const toListMoveRoots = (tree: ListTreeIndex, ids: string[]): string[] => {
  const moving = new Set(ids)
  const roots = Array.from(moving).filter((id) => {
    if (!tree.nodes.has(id)) return false
    let parent = tree.nodes.get(id)?.parentId ?? null
    while (parent !== null) {
      if (moving.has(parent)) return false
      parent = tree.nodes.get(parent)?.parentId ?? null
    }
    return true
  })
  return roots.sort((a, b) => (tree.nodes.get(a)?.order ?? 0) - (tree.nodes.get(b)?.order ?? 0))
}

// "Before the child now at rawIndex" expressed as an index once the moved rows are out.
export const toListDropTarget = (
  tree: ListTreeIndex,
  roots: string[],
  parentId: string | null,
  rawIndex: number,
): ListDropTarget => {
  const movedBefore = roots.filter((id) => {
    const node = tree.nodes.get(id)
    return node !== undefined && node.parentId === parentId && node.index < rawIndex
  }).length
  return { parentId, index: rawIndex - movedBefore }
}

const findListItem = (items: ListItemData[], id: string): ListItemData | undefined => {
  for (const item of items) {
    if (item.id === id) return item
    const found = item.items ? findListItem(item.items, id) : undefined
    if (found) return found
  }
  return undefined
}

// A new tree with `roots` moved to `target`, or null when there is nothing to
// move or the target is gone (e.g. it was inside a moved branch).
export const moveInListTree = (items: ListItemData[], roots: string[], target: ListDropTarget): ListItemData[] | null => {
  const next = cloneListItems(items)
  const moving = new Set(roots)
  const taken = new Map<string, ListItemData>()

  const take = (list: ListItemData[]) => {
    for (let i = list.length - 1; i >= 0; i--) {
      const item = list[i]
      if (moving.has(item.id)) {
        taken.set(item.id, item)
        list.splice(i, 1)
      } else if (item.items) {
        take(item.items)
      }
    }
  }
  take(next)
  if (taken.size === 0) return null

  let siblings = next
  if (target.parentId !== null) {
    const parent = findListItem(next, target.parentId)
    if (!parent) return null
    if (!parent.items) parent.items = []
    siblings = parent.items
  }

  const at = Math.max(0, Math.min(target.index, siblings.length))
  siblings.splice(at, 0, ...roots.map((id) => taken.get(id)).filter((item): item is ListItemData => Boolean(item)))
  return next
}

// Same ids in the same places; used to skip reporting a move that changed nothing.
export const isSameListTree = (a: ListItemData[], b: ListItemData[]): boolean =>
  a.length === b.length && a.every((item, i) => item.id === b[i].id && isSameListTree(item.items ?? [], b[i].items ?? []))

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
