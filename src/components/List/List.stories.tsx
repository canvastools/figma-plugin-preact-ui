import { Meta, StoryObj } from '@storybook/preact-vite'

import { useState } from 'preact/hooks'

import { Text } from '../../index'
import type { ListDropTarget } from '../../index'

import { List } from './List'
import type { ListItemData } from '../../index'

const meta: Meta = {
  title: 'Components/List',
  component: List,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A facade component that provides a simplified API for lists.',
      },
    },
  },
  argTypes: {
    id: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    className: {
      control: { type: 'text' },
    },
    items: {
      control: { disable: true },
      description: `<strong>*</strong>Array of items to render in the list.`,
      table: {
        type: {
          summary: 'ListItemData[]',
          detail: `
{
  id: string // required
  selected: boolean
  items: ListItemData[]
}
          `,
        },
      },
    },
    listItemProps: {
      control: { disable: true },
      description: `<strong>*</strong>`,
      table: {
        type: {
          summary: 'Pick<ListItemProps> | ((item: ListItemData) => Pick<ListItemProps>)',
          detail: `
{
  className: string
  variant: "default" | "layer"
  draggable: boolean
  onDragStart: (args: { event: DragEvent }) => void
  onDragEnd: (args: { event: DragEvent }) => void
  acceptsChildren: boolean
  selectable: boolean
  selectionScope: "individual" | "withDescendants"
  onSelect: (args: { event: MouseEvent; selected: boolean }) => void
  hoverable: boolean
  collapsed: boolean
  collapsable: boolean
  collapseIconIntent: "tertiary" | "component-secondary" | "slot-secondary"
  onCollapsedChange: (args: { event: MouseEvent; collapsed: boolean }) => void
}`,
        },
      },
    },
    renderItem: {
      control: { disable: true },
      description: 'Function to render the item.',
      table: {
        type: {
          summary: '(item: ListItemData) => preact.ComponentChildren',
        },
      },
    },
    '...ListContextProps': {
      control: { disable: true },
      table: {
        type: {
          summary: 'Pick<ListContextProps>',
          detail: `
{
  selectedItemIds: string[]
  selectionMode: "single" | "multi"
  deselectOnClickOutside: boolean
  onItemsChange: (args: {
    items: ListItemData[]
    move?: { ids: string[]; parentId: string | null; index: number }
  }) => void
  canDrop: (args: { draggedIds: string[]; parentId: string | null; index: number }) => boolean
  onSelectionChange: (args: { selectedItemIds: string[] }) => void
  onKeyDown: (args: { event: KeyboardEvent; itemId: string }) => void
}
`,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof List>

const itemsSample = [
  {
    id: 'Frame 0',
    items: [
      {
        id: 'Frame 0-0',
        items: [{ id: 'Frame 0-0-0' }, { id: 'Frame 0-0-1' }],
      },
      {
        id: 'Frame 0-1',
        items: [{ id: 'Frame 0-1-0' }],
      },
    ],
  },
  { id: 'Frame 1' },
  {
    id: 'Frame 2',
    items: [
      {
        id: 'Frame 2-0',
        items: [{ id: 'Frame 2-0-0' }, { id: 'Frame 2-0-1' }, { id: 'Frame 2-0-2' }],
      },
    ],
  },
] as ListItemData[]

export const Demo: Story = {
  args: {
    id: undefined,
    className: '',
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `

const [selectedItemIds, setSelectedItemIds] = useState([])
const [items, setItems] = useState([
  {
    id: "Frame 0",
    children: [
      {
        id: "Frame 0-0",
        children: [
          { id: "Frame 0-0-0" },
          { id: "Frame 0-0-1" },
        ],
      },
      {
        id: "Frame 0-1",
        children: [
          { id: "Frame 0-1-0" },
        ],
      },
    ],
  },
  { id: "Frame 1" },
  {
    id: "Frame 2",
    children: [
      {
        id: "Frame 2-0",
        children: [
          { id: "Frame 2-0-0" },
          { id: "Frame 2-0-1" },
          { id: "Frame 2-0-2" },
        ],
      },
    ],
  },
])

 <List
  items={items}
  listItemProps={{
    draggable: true,
    selectable: true,
    hoverable: true,
    acceptsChildren: true,
    collapsable: true,
  }}
  renderItem={(item) => <Text>{item.id}</Text>}
  selectedItemIds={selectedItemIds}
  selectionMode="multi"
  onItemsChange={(args) => setItems(args.items)}
  onSelectionChange={(args) => setSelectedItemIds(args.selectedItemIds)}
  {...args}
/>
`,
      },
    },
  },
  render: (args) => {
    const [items, setItems] = useState(itemsSample)
    const [selectedItemIds, setSelectedItemIds] = useState<string[]>([])

    return (
      <div className="sb-column sb-width-full sb-gap-16">
        <List
          {...args}
          items={items}
          listItemProps={{
            variant: 'default',
            draggable: true,
            selectable: true,
            hoverable: true,
            acceptsChildren: true,
            collapsable: true,
          }}
          renderItem={(item) => <Text>{item.id}</Text>}
          selectedItemIds={selectedItemIds}
          selectionMode="multi"
          deselectOnClickOutside={true}
          onItemsChange={(args) => setItems(args.items)}
          onSelectionChange={(args) => setSelectedItemIds(args.selectedItemIds)}
        />
      </div>
    )
  },
}

/* Drop rules */

const dropRulesSample = [
  {
    id: 'group:Columns',
    items: [
      { id: 'prop:Size', items: [{ id: 'value:Size:S' }, { id: 'value:Size:M' }, { id: 'value:Size:L' }] },
      { id: 'mode:Theme' },
    ],
  },
  {
    id: 'group:Rows',
    items: [{ id: 'prop:State', items: [{ id: 'value:State:Default' }, { id: 'value:State:Hover' }] }],
  },
  {
    id: 'group:Tables',
    items: [{ id: 'mode:Density' }],
  },
] as ListItemData[]

const kindOf = (id: string) => id.slice(0, id.indexOf(':'))

const labelOf = (id: string) => id.slice(id.lastIndexOf(':') + 1)

// Groups stay at the top level and nothing else goes there; a property is
// only in Columns or Rows; a mode is in any group; a value stays in its own property
const dropRulesCanDrop = ({ draggedIds, parentId }: { draggedIds: string[] } & ListDropTarget) =>
  draggedIds.every((id) => {
    if (parentId === null) return false
    const kind = kindOf(id)
    if (kind === 'value') return parentId === `prop:${id.split(':')[1]}`
    if (kind === 'prop') return parentId === 'group:Columns' || parentId === 'group:Rows'
    if (kind === 'mode') return kindOf(parentId) === 'group'
    return false
  })

export const DropRules: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'A `canDrop` rule is asked while dragging: a place it refuses shows no drop indicator, and the same rule applies to Alt+arrow keyboard moves.',
      },
      source: {
        code: `
<List
  items={items}
  listItemProps={(item) => ({
    draggable: !item.id.startsWith('group:'),
    acceptsChildren: item.id.startsWith('group:') || item.id.startsWith('prop:'),
    collapsable: item.id.startsWith('prop:'),
    hoverable: true,
  })}
  renderItem={(item) => <Text>{item.id}</Text>}
  canDrop={({ draggedIds, parentId }) =>
    draggedIds.every((id) => {
      if (parentId === null) return false
      if (id.startsWith('value:')) return parentId === \`prop:\${id.split(':')[1]}\`
      if (id.startsWith('prop:')) return parentId === 'group:Columns' || parentId === 'group:Rows'
      if (id.startsWith('mode:')) return parentId.startsWith('group:')
      return false
    })
  }
  onItemsChange={(args) => setItems(args.items)}
/>
`,
      },
    },
  },
  render: (args) => {
    const [items, setItems] = useState(dropRulesSample)
    const [lastMove, setLastMove] = useState<string>('—')

    return (
      <div className="sb-column sb-width-full sb-gap-16">
        <List
          {...args}
          items={items}
          listItemProps={(item) => {
            const kind = kindOf(item.id)
            return {
              draggable: kind !== 'group',
              acceptsChildren: kind === 'group' || kind === 'prop',
              collapsable: kind === 'prop',
              hoverable: kind !== 'group',
            }
          }}
          renderItem={(item) => (
            <Text strong={kindOf(item.id) === 'group'} intentModifier={kindOf(item.id) === 'value' ? 'secondary' : undefined}>
              {labelOf(item.id)}
            </Text>
          )}
          canDrop={dropRulesCanDrop}
          onItemsChange={({ items: next, move }) => {
            setItems(next)
            if (move) setLastMove(`${move.ids.join(', ')} → ${move.parentId ?? 'top level'} @ ${move.index}`)
          }}
        />
        <Text intentModifier="secondary">Last move: {lastMove}</Text>
      </div>
    )
  },
}
