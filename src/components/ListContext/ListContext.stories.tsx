import type { Meta, StoryObj } from '@storybook/preact-vite'
import { fn } from 'storybook/test'

import { useState } from 'preact/hooks'

import { ListContainer, ListItem, Text, Stack, Spacing } from '../../index'

import { ListContext } from './ListContext'
import type { ListItemData } from './ListContext.types'

const meta: Meta<typeof ListContext> = {
  title: 'Components/ListContext',
  component: ListContext,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A context provider that manages a list state.',
      },
    },
  },
  argTypes: {
    items: {
      control: { disable: true },
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
    selectedItemIds: {
      control: { disable: true },
      table: {
        type: {
          summary: 'string[]',
        },
      },
    },
    selectionMode: {
      control: { type: 'radio' },
      options: [undefined, 'single', 'multi'],
    },
    deselectOnClickOutside: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    onItemsChange: {
      description: '`move` is present when the change is a move (drag and drop or keyboard).',
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args: {
  items: ListItemData[]
  move?: {
    ids: string[] // the moved rows, in tree order
    parentId: string | null // null is the top level
    index: number // among the parent's children once the moved rows are out
  }
}
          `,
        },
      },
    },
    onSelectionChange: {
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args: {
  selectedItemIds: string[]
}
          `,
        },
      },
    },
    canDrop: {
      description:
        'Whether the dragged rows may land at `parentId`/`index`. Asked while dragging, so a refused place shows no drop indicator, and again for keyboard moves. Answered once per place per drag; keep it pure and cheap.',
      table: {
        type: {
          summary: '(args) => boolean',
          detail: `
args: {
  draggedIds: string[] // the moved rows; selected descendants travel inside them
  parentId: string | null // null is the top level
  index: number // among the parent's children once the moved rows are out
}
          `,
        },
      },
    },
    onKeyDown: {
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args: {
  event: KeyboardEvent
  itemId: string
}
          `,
        },
      },
    },
    children: {
      control: { disable: true },
      description: '<strong>*</strong>',
      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
    },
    // @ts-expect-error docs-only argTypes row, not a real prop
    useListContext: {
      control: { disable: true },
      table: {
        type: {
          summary: `Hook`,
          detail: `
{
  items: ListItemData[]
  selectedItemIds: string[] // Set
  selectionOriginIds: string[] // Set
  deselectOnClickOutside: boolean
  setSelection: (itemIds: string[]) => void
  toggleSelect: (
    itemId: string
    options: {
      range: boolean;
      additive: boolean
    }
  ) => Set<string> // resulting selection
  registerItem: (
    id: string,
    meta: {
      selectable: boolean;
      selectionScope: "individual" | "withDescendants";
      draggable: boolean;
      acceptsChildren: boolean
    }
  ) => () => void
  getItemMeta: (id: string) => meta | undefined
  getNodeInfo: (id: string) => { parentId: string | null; index: number } | undefined
  getChildIds: (parentId: string | null) => string[]
  getBranchIds: (id: string) => string[] // item + selectable descendants
  moveItems: (
    itemIds: string[],
    target: { parentId: string | null; index: number }
  ) => boolean // checks canDrop; true when the tree changed
  drag: ListDragController // internal: the drag session ListContainer and ListItem forward to
  selectionMode: "none" | "single" | "multi"
  registerRootElement?: (el: HTMLElement | null) => () => void
  onKeyDown?: (args: { event: KeyboardEvent; itemId: string }) => void
}
        `,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof ListContext>

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
  // tags: ["!autodocs"],
  args: {
    selectionMode: undefined,
    deselectOnClickOutside: false,
    onItemsChange: fn(),
    onSelectionChange: fn(),
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
    items: [
      {
        id: "Frame 0-0",
        items: [
          { id: "Frame 0-0-0" },
          { id: "Frame 0-0-1" },
        ],
      },
      {
        id: "Frame 0-1",
        items: [
          { id: "Frame 0-1-0" },
        ],
      },
    ],
  },
  { id: "Frame 1" },
  {
    id: "Frame 2",
    items: [
      {
        id: "Frame 2-0",
        items: [
          { id: "Frame 2-0-0" },
          { id: "Frame 2-0-1" },
          { id: "Frame 2-0-2" },
        ],
      },
    ],
  },
])

const renderItems = (
  items,
  level
) => {
  return (
    <ListContainer>
      {items.map((item) => (
        <ListItem 
          key={item.id}
          id={item.id}
          nestingLevel={level}
          selectable={true}
          draggable={true}
          acceptsChildren={true}
          hoverable={true}
          items={item.items && item.items.length ? renderItems(item.items, level + 1) : undefined}
        >
          <Text>{item.id}</Text>
        </ListItem>
      ))}
    </ListContainer>
  )
}

<ListContext
  items={items}
  selectedItemIds={selectedItemIds}
  onItemsChange={(args) => {setItems(args.items)}}
  onSelectionChange={(args) => {setSelectedItemIds(args.selectedItemIds)}}
  {...args}
>
  {renderItems(items, 0)}
</ListContext>        
        `,
      },
    },
  },
  render: (args) => {
    const [items, setItems] = useState(itemsSample)
    const [selectedItemIds, setSelectedItemIds] = useState<string[]>([])

    const renderItems = (items: ListItemData[], level: number) => {
      return (
        <ListContainer>
          {items.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              nestingLevel={level}
              selectable={true}
              draggable={true}
              acceptsChildren={true}
              hoverable={true}
              items={item.items && item.items.length ? renderItems(item.items, level + 1) : undefined}
            >
              <Stack direction="row" y="center">
                <Stack direction="row" y="center">
                  {/* @ts-expect-error - Storybook types hack */}
                  {args.variant === 'layer' && <Spacing direction="row" size={100} />}
                  <Text wrap={false}>{item.id}</Text>
                </Stack>
                <Text intentModifier="secondary" wrap={false}>
                  &nbsp;(Level {level})
                </Text>
              </Stack>
            </ListItem>
          ))}
        </ListContainer>
      )
    }

    return (
      <div className="sb-column sb-width-full">
        <ListContext
          {...args}
          items={items}
          selectedItemIds={selectedItemIds}
          onItemsChange={(args) => setItems(args.items)}
          onSelectionChange={(args) => setSelectedItemIds(args.selectedItemIds)}
        >
          {renderItems(items, 0)}
        </ListContext>
      </div>
    )
  },
}
