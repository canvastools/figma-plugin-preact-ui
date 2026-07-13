import type { Meta, StoryObj } from '@storybook/preact-vite'

import { useState } from 'preact/hooks'

import { ListContext, ListItem, Stack, Text } from '../../index'
import type { ListItemData } from '../../index'

import { ListContainer } from './ListContainer'

const meta: Meta<typeof ListContainer> = {
  title: 'Components/ListContainer',
  component: ListContainer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "A wrapper component that manages list items. Used inside <a href='/docs/components-listcontext--docs'>`<ListContext/>`</a>.",
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
    children: {
      control: { disable: true },
      description: '<strong>*</strong>',
      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
    },

  },
}

export default meta

type Story = StoryObj<typeof ListContainer>

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
    className: 'sb-container',
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
    <ListContainer {...args}>
      {items.map((item) => (
        <ListItem 
          key={item.id}
          id={item.id}
          nestingLevel={level}
          items={item.items ? renderItems(item.items, level + 1) : undefined}
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
  onItemsChange={(args) => setItems(args.items)}
  onSelectionChange={(args) => setSelectedItemIds(args.selectedItemIds)}
>
  {renderItems(items, 0)}
</ListContext>
        `,
      },
    },
  },
  render: (args) => {
    const [items, setItems] = useState(itemsSample)
    const [, setSelectedItemIds] = useState<string[]>([])

    const renderItems = (items: ListItemData[], level: number) => {
      return (
        <ListContainer {...args}>
          {items.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              nestingLevel={level}
              items={item.items ? renderItems(item.items, level + 1) : undefined}
            >
              <Stack direction="row" y="center">
                <Stack direction="row" y="center">
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
          items={items}
          selectionMode="multi"
          onItemsChange={(args) => {
            setItems(args.items)
          }}
          onSelectionChange={(args) => {
            setSelectedItemIds(args.selectedItemIds)
          }}
        >
          {renderItems(items, 0)}
        </ListContext>
      </div>
    )
  },
}
