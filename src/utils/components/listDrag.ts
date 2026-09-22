import type {
  ListDragController,
  ListDropTarget,
  ListItemDragState,
  ListItemMeta,
} from '../../components/ListContext/ListContext.types'
import { isWithinListBranch, toListDropTarget, toListMoveRoots } from './list'
import type { ListTreeIndex } from './list'

/* --- */

// One drag session per ListContext. Every decision about a drop — which zone
// the pointer is in, whether the consumer allows it, what each row shows — is
// made here, so what the list draws and what a drop does cannot disagree.

type Zone = 'above' | 'below' | 'inside'

interface Session {
  // Everything that travels, including selected descendants: those rows count as "self"
  itemIds: string[]
  // The rows that actually change place (see toListMoveRoots)
  roots: string[]
  sourceId: string
  target: ListDropTarget | null
  answers: Map<string, boolean>
}

interface Resolution {
  target: ListDropTarget | null
  states: Map<string, ListItemDragState>
}

interface ListDragDeps {
  getTree: () => ListTreeIndex
  getItemMeta: (id: string) => ListItemMeta | undefined
  // The consumer's rule plus the tree's own (a branch cannot go inside itself)
  canMove: (roots: string[], target: ListDropTarget) => boolean
  applyMove: (roots: string[], target: ListDropTarget) => boolean
  getDragImage: () => HTMLElement | null
  isOwnNode: (node: Node) => boolean
}

// Height of the top/bottom band of a row that means "above"/"below"
const EDGE_BAND = 8

const STATE_KEYS: (keyof ListItemDragState)[] = [
  'dragging',
  'over',
  'zone',
  'self',
  'betweenSelected',
  'dropParent',
  'dropItself',
  'endZone',
]

const isSameState = (a?: ListItemDragState, b?: ListItemDragState) =>
  STATE_KEYS.every((key) => (a?.[key] || undefined) === (b?.[key] || undefined))

const merge = (states: Map<string, ListItemDragState>, id: string, patch: ListItemDragState) => {
  states.set(id, { ...states.get(id), ...patch })
}

export const createListDragController = (deps: ListDragDeps): ListDragController => {
  let session: Session | null = null
  let states = new Map<string, ListItemDragState>()
  const listeners = new Map<string, Set<() => void>>()

  // Swap in the next states and wake only the rows whose state changed
  const publish = (next: Map<string, ListItemDragState>) => {
    if (session) merge(next, session.sourceId, { dragging: true })

    const prev = states
    const changed: string[] = []
    next.forEach((state, id) => {
      const before = prev.get(id)
      if (isSameState(before, state)) next.set(id, before as ListItemDragState)
      else changed.push(id)
    })
    prev.forEach((_state, id) => {
      if (!next.has(id)) changed.push(id)
    })

    states = next
    changed.forEach((id) => listeners.get(id)?.forEach((listener) => listener()))
  }

  const isAllowed = (target: ListDropTarget): boolean => {
    if (!session) return false
    const key = JSON.stringify([target.parentId, target.index])
    let answer = session.answers.get(key)
    if (answer === undefined) {
      answer = deps.canMove(session.roots, target)
      session.answers.set(key, answer)
    }
    return answer
  }

  const isInsideMovedBranch = (tree: ListTreeIndex, parentId: string | null) =>
    parentId !== null && Boolean(session?.roots.some((root) => isWithinListBranch(tree, parentId, root)))

  // The row the drop lands in is highlighted, and a dragged withDescendants
  // row whose own branch holds that row is marked as dropping into itself.
  const markDropParent = (tree: ListTreeIndex, states: Map<string, ListItemDragState>, dropParentId: string | null) => {
    if (!session || dropParentId === null) return
    merge(states, dropParentId, { dropParent: true })
    session.itemIds.forEach((id) => {
      if (deps.getItemMeta(id)?.selectionScope !== 'withDescendants') return
      if (isWithinListBranch(tree, dropParentId, id)) merge(states, id, { dropItself: true })
    })
  }

  // Hide the line between two rows that are both being dragged: adjacent
  // siblings, or a parent and its first child.
  const isBetweenDragged = (tree: ListTreeIndex, rowId: string, zone: Zone): boolean => {
    if (!session || zone === 'inside') return false
    const node = tree.nodes.get(rowId)
    if (!node) return false
    const dragged = session.itemIds
    const siblings = tree.children.get(node.parentId) ?? []

    if (zone === 'above') {
      const prev = siblings[node.index - 1]
      if (prev !== undefined) return dragged.includes(prev)
      return node.parentId !== null && dragged.includes(node.parentId)
    }

    const next = siblings[node.index + 1]
    if (next !== undefined && dragged.includes(next)) return true
    const firstChild = tree.children.get(rowId)?.[0]
    return firstChild !== undefined && dragged.includes(firstChild)
  }

  const resolveRow = (tree: ListTreeIndex, row: HTMLElement, rowId: string, clientY: number): Resolution | null => {
    if (!session) return null
    const { roots, itemIds } = session
    const node = tree.nodes.get(rowId)
    const content = row.querySelector(':scope > .ListItem__content')
    if (!node || !content) return null

    const rect = content.getBoundingClientRect()
    const localY = clientY - rect.top
    const inTop = localY <= EDGE_BAND
    const inBottom = localY >= rect.height - EDGE_BAND
    const half: Zone = localY < rect.height / 2 ? 'above' : 'below'
    const acceptsChildren = Boolean(deps.getItemMeta(rowId)?.acceptsChildren)
    // An expanded branch: its bottom edge faces its first child, not its next sibling
    const isOpenBranch = row.classList.contains('ListItem_has-children') && !row.classList.contains('ListItem_collapsed')
    const states = new Map<string, ListItemDragState>()

    // Over a row that is itself being dragged: zones are drawn, the drop is a no-op
    if (itemIds.includes(rowId)) {
      const zone: Zone = inTop ? 'above' : inBottom && !isOpenBranch ? 'below' : 'inside'
      states.set(rowId, {
        over: true,
        self: true,
        zone: zone === 'inside' ? undefined : zone,
        betweenSelected: isBetweenDragged(tree, rowId, zone),
      })
      markDropParent(tree, states, zone === 'inside' && acceptsChildren ? rowId : (node.parentId ?? rowId))
      return { target: null, states }
    }

    let primary: Zone = inTop ? 'above' : inBottom ? 'below' : acceptsChildren ? 'inside' : half
    if (primary === 'below' && isOpenBranch && acceptsChildren) primary = 'inside'

    const targetFor = (zone: Zone): ListDropTarget =>
      zone === 'inside'
        ? { parentId: rowId, index: 0 }
        : toListDropTarget(tree, roots, node.parentId, zone === 'above' ? node.index : node.index + 1)

    const show = (zone: Zone, target: ListDropTarget | null): Resolution => {
      states.set(rowId, { over: true, zone })
      markDropParent(tree, states, zone === 'inside' ? rowId : (node.parentId ?? rowId))
      return { target, states }
    }

    // Into the dragged branch itself: drawn as it is (the styles mark it as an
    // error), never dropped
    if (isInsideMovedBranch(tree, targetFor(primary).parentId)) return show(primary, null)

    // A refused zone falls back to its neighbours on the same row, then to nothing
    const fallbacks: Zone[] = primary === 'inside' ? [half, half === 'above' ? 'below' : 'above'] : ['inside']
    for (const zone of [primary, ...fallbacks]) {
      if (zone === 'inside' && !acceptsChildren) continue
      if (zone === 'below' && zone !== primary && isOpenBranch) continue
      const target = targetFor(zone)
      if (isInsideMovedBranch(tree, target.parentId)) continue
      if (isAllowed(target)) return show(zone, target)
    }

    return { target: null, states }
  }

  // The strip under the last row of a level: append to that level
  const resolveEndZone = (tree: ListTreeIndex, ownerId: string): Resolution | null => {
    if (!session) return null
    const node = tree.nodes.get(ownerId)
    if (!node) return null

    const states = new Map<string, ListItemDragState>()
    const target = toListDropTarget(tree, session.roots, node.parentId, node.index + 1)
    const isOwnBranch = isInsideMovedBranch(tree, node.parentId)
    if (!isOwnBranch && !isAllowed(target)) return { target: null, states }

    states.set(ownerId, { endZone: true })
    markDropParent(tree, states, node.parentId)
    return { target: isOwnBranch ? null : target, states }
  }

  const start: ListDragController['start'] = ({ event, sourceId, itemIds }) => {
    session = {
      itemIds,
      roots: toListMoveRoots(deps.getTree(), itemIds),
      sourceId,
      target: null,
      answers: new Map(),
    }

    // Firefox does not start a drag without data
    try {
      event.dataTransfer?.setData('text/plain', sourceId)
    } catch {
      // Ignore setData errors
    }
    // Hide default drag preview
    const dragImage = deps.getDragImage()
    if (dragImage) {
      try {
        event.dataTransfer?.setDragImage(dragImage, 0, 0)
      } catch {
        // Ignore setDragImage errors
      }
    }

    document.documentElement.classList.add('pui-dragging')
    publish(new Map())
  }

  const end: ListDragController['end'] = () => {
    if (!session) return
    session = null
    document.documentElement.classList.remove('pui-dragging')
    publish(new Map())
  }

  // Every ListContainer level forwards here and the first to see the event
  // stops it, so the answer does not depend on which level caught it.
  const handleDragOver: ListDragController['handleDragOver'] = (event) => {
    // A drag this list did not start is left alone
    if (!session) return
    event.preventDefault()
    event.stopPropagation()
    if (event.dataTransfer) event.dataTransfer.dropEffect = 'move'

    const hit = event.target instanceof Element ? event.target : null
    const endZone = hit?.closest('.ListItem__end-dropzone') ?? null
    const owner = (endZone ? endZone.parentElement : hit?.closest('.ListItem__content')?.parentElement) ?? null
    const ownerId = owner?.getAttribute('data-item-id')
    const tree = deps.getTree()
    // Between rows: keep what is shown rather than flicker
    if (!owner || !ownerId || !tree.nodes.has(ownerId)) return

    const resolution = endZone ? resolveEndZone(tree, ownerId) : resolveRow(tree, owner, ownerId, event.clientY)
    if (!resolution) return
    session.target = resolution.target
    publish(resolution.states)
  }

  const handleDrop: ListDragController['handleDrop'] = (event) => {
    if (!session) return
    event.preventDefault()
    event.stopPropagation()
    const { roots, target } = session
    end()
    if (target) deps.applyMove(roots, target)
  }

  const handleDragLeave: ListDragController['handleDragLeave'] = (event) => {
    if (!session) return
    const next = event.relatedTarget as Node | null
    if (next && deps.isOwnNode(next)) return
    session.target = null
    publish(new Map())
  }

  const subscribe: ListDragController['subscribe'] = (id, listener) => {
    const set = listeners.get(id) ?? new Set()
    listeners.set(id, set)
    set.add(listener)
    return () => {
      set.delete(listener)
      if (set.size === 0) listeners.delete(id)
    }
  }

  return {
    start,
    end,
    handleDragOver,
    handleDrop,
    handleDragLeave,
    getItemState: (id) => states.get(id),
    subscribe,
  }
}
