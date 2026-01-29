import type { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { useState } from "preact/hooks"

import { VariantStory } from "./stories/Variant.story"
import { ContentStory } from "./stories/Content.story"

import {
  ListContext,
  ListContainer,
  Stack,
  Text,
  Spacing,
  type ListItemData,
} from "../../index"

import { ListItem } from "./ListItem"

const meta: Meta<typeof ListItem> = {
  title: "Components/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A component for creating a list item. Used inside <a href='/docs/components-listcontainer--docs'>`<ListContainer/>`</a>.",
      },
    },
  },
  argTypes: {
    id: {
      control: { type: "text" },
      description: "<strong>*</strong>",
    },
    className: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "layer"],
      defaultValue: { summary: "default" },
    },
    nestingLevel: {
      control: { type: "number" },
      defaultValue: { summary: 0 },
      description: "<strong>*</strong>",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    draggable: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    onDragStart: {
      table: {
        type: {
          summary: "(args) => void",
          detail: `
{
  event: DragEvent
}
          `,
        },
      },
    },
    onDragEnd: {
      table: {
        type: {
          summary: "(args) => void",
          detail: `
{
  event: DragEvent
}
          `,
        },
      },
    },
    acceptsChildren: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    selectable: {
      control: { type: "boolean" },
      description:
        "`data-pui-interactive='true'` attribute can be applied to elements inside the list item to stop propagation of click events.",
      defaultValue: { summary: false },
    },
    selectionScope: {
      control: { type: "radio" },
      options: ["individual", "withDescendants"],
      defaultValue: { summary: "individual" },
      description:
        "Defines how the item can be selected. If set to `item`, the item can be selected individually. If set to `withDescendants`, the item and all its descendants can be selected at once.",
    },
    onSelect: {
      table: {
        type: {
          summary: "(args) => void",
          detail: `
{
  event: MouseEvent
  selected: boolean
}
          `,
        },
      },
    },
    hoverable: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    collapsed: {
      control: { disable: true },
      description: "Value for controlled state.",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    collapsable: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    onCollapsedChange: {
      table: {
        type: {
          summary: "(args) => void",
          detail: `
{
  event: MouseEvent
  collapsed: boolean
}
          `,
        },
      },
    },
    items: {
      control: { disable: true },
      description:
        "Nested items. It takes only one level of nesting. Items must be wrapped in `<ListContainer/>`.",
      table: {
        type: {
          summary: "preact.ComponentChildren",
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
  },
}

export default meta

type Story = StoryObj<typeof ListItem>

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
  tags: ["!autodocs"],
  args: {
    id: "",
    className: "",
    nestingLevel: 0,
    variant: "default",
    draggable: true,
    acceptsChildren: true,
    selectable: true,
    selectionScope: "individual",
    hoverable: true,
    collapsable: false,
    onDragStart: fn(),
    onDragEnd: fn(),
    onSelect: fn(),
    onCollapsedChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
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
          selectionScope="individual"
          hoverable={true}
          items={item.items ? renderItems(item.items, level + 1) : undefined}
          {...args}
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
    const [selectedItemIds, setSelectedItemIds] = useState<string[]>([])

    const renderItems = (items: ListItemData[], level: number) => {
      return (
        <ListContainer>
          {items.map((item) => (
            <ListItem
              {...args}
              key={item.id}
              id={item.id}
              nestingLevel={level}
              items={
                item.items ? renderItems(item.items, level + 1) : undefined
              }
            >
              <Stack direction="row" y="center" fullWidth>
                <Stack direction="row" y="center">
                  {/* @ts-expect-error - Storybook types hack */}
                  {args.variant === "layer" && (
                    <Spacing direction="row" size={200} />
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
          items={items}
          selectedItemIds={selectedItemIds}
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

export const Variant = VariantStory
export const Content = ContentStory
