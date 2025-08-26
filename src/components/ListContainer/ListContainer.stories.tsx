import type { Meta, StoryObj } from "@storybook/preact"

import { useState } from "preact/hooks"

import { ListContext } from "../ListContext/ListContext"
import { ListContainer } from "./ListContainer"
import { ListItem } from "../ListItem/ListItem"
import type { ListItemData } from "../ListContext/ListContext.types"

import { Text } from "../Text/Text"

const meta: Meta<typeof ListContainer> = {
  title: "Components/ListContainer",
  component: ListContainer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A container component for &lt;ListItem&gt; components. Every level of nesting must be wrapped in a &lt;ListContainer&gt; component.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    children: {
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
      control: { disable: true },
      description: "Usually &lt;ListItem/&gt; components.",
    },
  },
}

export default meta
type Story = StoryObj<typeof ListContainer>

const sampleItems = [
  {
    id: "One",
    children: [
      {
        id: "One-1",
        children: [{ id: "One-1-a" }, { id: "One-1-b" }],
      },
      {
        id: "One-2",
        children: [{ id: "One-2-a" }],
      },
    ],
  },
  { id: "Two" },
  {
    id: "Three",
    children: [
      {
        id: "Three-1",
        children: [
          { id: "Three-1-a" },
          { id: "Three-1-b" },
          { id: "Three-1-c" },
        ],
      },
    ],
  },
] as ListItemData[]

export const Demo: Story = {
  args: {
    className: "",
  },
  render: (args) => {
    const [items, setItems] = useState(sampleItems)
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    return (
      <div className="sb-column sb-gap-16">
        <ListContext
          items={items}
          selectedItems={selectedItems}
          selectionMode="multi"
          onItemsChange={(change) => {
            setItems(change.items)
          }}
          onSelectionChange={(change) => {
            setSelectedItems(change.selectedItems)
          }}
        >
          <ListContainer {...args}>
            {items.map((item) => {
              console.log(item)
              return (
                <ListItem id={item.id} draggable={true} selectable={true}>
                  <Text variant="body" context="neutral">
                    {item.id}
                  </Text>
                </ListItem>
              )
            })}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}
