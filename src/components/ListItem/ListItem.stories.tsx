import type { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { useState } from "preact/hooks"

import { ListItem } from "./ListItem"
import type { ListItemProps } from "./ListItem.types"
import type { ListItemData } from "../ListContext/ListContext.types"
import { ListContext } from "../ListContext/ListContext"
import { ListContainer } from "../ListContainer/ListContainer"

import { Text } from "../Text/Text"

const meta: Meta<typeof ListItem> = {
  title: "Components/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Always used within &lt;ListContext/&gt; and &lt;ListContainer/&gt;",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    id: {
      control: { type: "text" },
    },
    isNested: {
      control: { type: "boolean" },
    },
    draggable: {
      control: { type: "boolean" },
    },
    selectable: {
      control: { type: "boolean" },
    },
    subItems: {
      control: { type: "object" },
      description: "ListItemProps[]",
    },
    children: {
      control: { type: "text" },
    },
    onDragStart: {
      action: "dragStart",
    },
    onDragEnd: {
      action: "dragEnd",
    },
    onSelect: {
      action: "select",
    },
  },
}

export default meta
type Story = StoryObj<ListItemProps>

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
  tags: ["!autodocs"],
  args: {
    isNested: false,
    draggable: true,
    selectable: true,
    onDragStart: fn(),
    onDragEnd: fn(),
    onSelect: fn(),
  },
  render: (args) => {
    const [items, setItems] = useState(sampleItems)
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    return (
      <div className="sb-column sb-gap-16">
        <ListContext
          items={items}
          selectedItems={selectedItems}
          onItemsChange={setItems}
          onSelectionChange={setSelectedItems}
        >
          <ListContainer>
            {items.map((item) => (
              <ListItem
                id={item.id}
                draggable={args.draggable}
                selectable={args.selectable}
                onDragStart={args.onDragStart}
                onDragEnd={args.onDragEnd}
                onSelect={args.onSelect}
              >
                <Text variant="body">{item.id}</Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const DraggableOnly: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const [items, setItems] = useState(sampleItems)

    return (
      <div className="sb-column sb-gap-16">
        <ListContext items={items} onItemsChange={setItems}>
          <ListContainer>
            {items.map((item) => (
              <ListItem id={item.id} draggable={true}>
                <Text variant="body">Item {item.id} (Draggable only)</Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const SelectableOnly: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const [items, setItems] = useState(sampleItems)
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    return (
      <div className="sb-column sb-gap-16">
        <ListContext
          items={items}
          selectedItems={selectedItems}
          onSelectionChange={setSelectedItems}
        >
          <ListContainer>
            {items.map((item) => (
              <ListItem id={item.id} selectable={true}>
                <Text variant="body">Item {item.id} (Selectable only)</Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const NestedChildren: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const [items, setItems] = useState(sampleItems)
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    const renderSubItems = (
      children: any[],
      level: number,
      parentPath: number[] = []
    ) => {
      if (!children || children.length === 0) return null

      return (
        <ListContainer nestingLevel={level} parentPath={parentPath}>
          {children.map((child, index) => (
            <ListItem
              key={child.id}
              id={child.id}
              draggable={true}
              selectable={true}
              nestingLevel={level}
              subItems={
                child.children
                  ? renderSubItems(child.children, level + 1, [
                      ...parentPath,
                      index,
                    ])
                  : undefined
              }
            >
              <Text variant="body">
                {"  ".repeat(level)}📁 {child.id} (Level {level})
              </Text>
            </ListItem>
          ))}
        </ListContainer>
      )
    }

    return (
      <div className="sb-column sb-gap-16">
        <ListContext
          items={items}
          selectedItems={selectedItems}
          onItemsChange={setItems}
          onSelectionChange={setSelectedItems}
        >
          <ListContainer>
            {items.map((item, index) => (
              <ListItem
                key={item.id}
                id={item.id}
                draggable={true}
                selectable={true}
                nestingLevel={0}
                subItems={
                  item.children
                    ? renderSubItems(item.children, 1, [index])
                    : undefined
                }
              >
                <Text variant="body">📁 {item.id} (Level 0)</Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}
