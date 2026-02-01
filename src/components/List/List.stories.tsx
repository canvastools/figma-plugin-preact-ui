import { Meta, StoryObj } from "@storybook/preact"

import { useState } from "preact/hooks"

import { Text } from "../../index"

import { List } from "./List"
import type { ListItemData } from "../../index"

const meta: Meta = {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A facade component that provides a simplified API for lists.",
      },
    },
  },
  argTypes: {
    id: {
      control: { type: "text" },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    className: {
      control: { type: "text" },
    },
    items: {
      control: { disable: true },
      description: `<strong>*</strong>Array of items to render in the list.`,
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
    listItemProps: {
      control: { disable: true },
      table: {
        type: {
          summary:
            "Pick<ListItemProps> | ((item: ListItemData) => Pick<ListItemProps>)",
          detail: `
{
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
  onCollapsedChange: (args: { event: MouseEvent; collapsed: boolean }) => void
}`,
        },
      },
    },
    renderItem: {
      control: { disable: true },
      description: "Function to render the item.",
      table: {
        type: {
          summary: "(item: ListItemData) => preact.ComponentChildren",
        },
      },
    },
    "...ListContextProps": {
      control: { disable: true },
      table: {
        type: {
          summary: "Pick<ListContextProps>",
          detail: `
{
  selectedItemIds: string[]
  selectionMode: "single" | "multi"
  deselectOnClickOutside: boolean
  onItemsChange: (args: { items: ListItemData[] }) => void
  onSelectionChange: (args: { selectedItemIds: string[] }) => void
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
  args: {
    id: undefined,
    className: "",
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
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
            variant: "default",
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
