import type { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { useState } from "preact/hooks"

import { ListContainer, ListItem, Text, Stack, Spacing } from "../../index"

import { ListContext } from "./ListContext"
import type { ListItemData } from "./ListContext.types"

const meta: Meta<typeof ListContext> = {
  title: "Components/ListContext",
  component: ListContext,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A context provider that manages a list state.",
      },
    },
  },
  argTypes: {
    items: {
      control: { disable: true },
      table: {
        type: {
          summary: "ListItemData[]",
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
          summary: "string[]",
        },
      },
    },
    selectionMode: {
      control: { type: "radio" },
      options: [undefined, "single", "multi"],
    },
    deselectOnClickOutside: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    onItemsChange: {
      table: {
        type: {
          summary: "(args) => void",
          detail: `
args: {
  items: ListItemData[]
}
          `,
        },
      },
    },
    onSelectionChange: {
      table: {
        type: {
          summary: "(args) => void",
          detail: `
args: {
  selectedItems: string[]
}
          `,
        },
      },
    },
    children: {
      control: { disable: true },
      description: "<strong>*</strong>",
      table: {
        type: {
          summary: "preact.ComponentChildren",
        },
      },
    },
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
  ) => void
  registerItemMeta: (
    id: string,
    meta: { 
      selectable: boolean;
      selectionScope: "item" | "withDescendants"
    }
  ) => () => void
  getPathForId: (id: string) => number[] | null
  registerItemPath: (id: string, path: number[]) => () => void
  reorderItems: (
    itemIds: string[],
    targetIndex: number,
    targetParentPath?: number[]
  ) => void
  selectionMode: "none" | "single" | "multi"
  registerRootElement?: (el: HTMLElement | null) => () => void
  dragImage: HTMLDivElement | null
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
    id: "Frame 0",
    items: [
      {
        id: "Frame 0-0",
        items: [{ id: "Frame 0-0-0" }, { id: "Frame 0-0-1" }],
      },
      {
        id: "Frame 0-1",
        items: [{ id: "Frame 0-1-0" }],
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
      defaultViewport: "large",
    },
    docs: {
      source: {
        code: `
const [selectedItems, setSelectedItems] = useState([])
const [items, setItems] = useState([
  {
    id: "Frame 0",
    items: [
      {
        id: "Frame 0-0",
        items: [{ id: "Frame 0-0-0" }, { id: "Frame 0-0-1" }],
      },
      {
        id: "Frame 0-1",
        items: [{ id: "Frame 0-1-0" }],
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
  selectedItemIds={selectedItems}
  onItemsChange={(args) => setItems(args.items)}
  onSelectionChange={(args) => setSelectedItems(args.selectedItems)}
>
  {renderItems(items, 0)}
</ListContext>        
        `,
      },
    },
  },
  render: (args) => {
    const [items, setItems] = useState(itemsSample)
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    const renderItems = (items: ListItemData[], level: number) => {
      return (
        <ListContainer {...args}>
          {items.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              nestingLevel={level}
              selectable={true}
              draggable={true}
              acceptsChildren={true}
              hoverable={true}
              items={
                item.items ? renderItems(item.items, level + 1) : undefined
              }
            >
              <Stack direction="row" y="center" fullWidth>
                <Stack direction="row" y="center">
                  {/* @ts-expect-error - Storybook types hack */}
                  {args.variant === "layer" && (
                    <Spacing direction="row" size={100} />
                  )}
                  <Text wrap={false}>{item.id}</Text>
                </Stack>
                <Text intentModifier="secondary" wrap={false}>
                   (Level {level})
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
          selectedItemIds={selectedItems}
          selectionMode="multi"
          onItemsChange={(args) => {
            setItems(args.items)
          }}
          onSelectionChange={(args) => {
            setSelectedItems(args.selectedItems)
          }}
        >
          {renderItems(items, 0)}
        </ListContext>
      </div>
    )
  },
}
