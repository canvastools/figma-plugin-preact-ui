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
          selectionMode="multi"
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
                <Text variant="body" context="neutral">
                  {item.id}
                </Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const SingleDraggable: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Allows to drag only one item at a time. Selection is disabled.",
      },
    },
  },
  render: () => {
    const [items, setItems] = useState(sampleItems)

    return (
      <div className="sb-column sb-gap-16">
        <ListContext
          items={items}
          onItemsChange={setItems}
          selectionMode="none"
        >
          <ListContainer>
            {items.map((item) => (
              <ListItem id={item.id} draggable={true}>
                <Text variant="body" context="neutral">
                  {item.id}
                </Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const SingleSelectable: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Allows to select only one item at a time. Dragging is disabled.",
      },
    },
  },
  render: () => {
    const [items, setItems] = useState(sampleItems)
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    return (
      <div className="sb-column sb-gap-16">
        <ListContext
          items={items}
          selectedItems={selectedItems}
          selectionMode="single"
          onSelectionChange={setSelectedItems}
        >
          <ListContainer>
            {items.map((item) => (
              <ListItem id={item.id} selectable={true}>
                <Text variant="body" context="neutral">
                  {item.id}
                </Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const MultiSelectabledAndDraggbale: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Allows to select and drag multiple items at a time. Use Shift or Ctrl/CMD key to select multiple items.",
      },
    },
  },
  render: () => {
    const [items, setItems] = useState(sampleItems)
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    return (
      <div className="sb-column sb-gap-16">
        <ListContext
          items={items}
          selectedItems={selectedItems}
          selectionMode="multi"
          onSelectionChange={setSelectedItems}
          onItemsChange={setItems}
        >
          <ListContainer>
            {items.map((item) => (
              <ListItem id={item.id} selectable={true} draggable={true}>
                <Text variant="body" context="neutral">
                  {item.id}
                </Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const SelectionScopeItem: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Selection allows to select each item individually.",
      },
    },
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
              selectable={child.id === "One-1" ? false : true}
              acceptsChildren={true}
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
              <Text variant="body" context="neutral">
                {child.id} (Level {level})
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
          selectionMode="multi"
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
                acceptsChildren={true}
                nestingLevel={0}
                subItems={
                  item.children
                    ? renderSubItems(item.children, 1, [index])
                    : undefined
                }
              >
                <Text variant="body" context="neutral">
                  {item.id} (Level 0)
                </Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const SelectionScopeWithDescendants: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Selection allows to select all descendants of the selected item at once.",
      },
    },
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
              selectable={child.id === "One-1" ? false : true}
              acceptsChildren={true}
              nestingLevel={level}
              selectionScope="withDescendants"
              subItems={
                child.children
                  ? renderSubItems(child.children, level + 1, [
                      ...parentPath,
                      index,
                    ])
                  : undefined
              }
            >
              <Text variant="body" context="neutral">
                {child.id} (Level {level})
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
          selectionMode="multi"
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
                acceptsChildren={true}
                nestingLevel={0}
                selectionScope="withDescendants"
                subItems={
                  item.children
                    ? renderSubItems(item.children, 1, [index])
                    : undefined
                }
              >
                <Text variant="body" context="neutral">
                  {item.id} (Level 0)
                </Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const Hoverable: Story = {
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
              acceptsChildren={true}
              nestingLevel={level}
              hoverable={true}
              subItems={
                child.children
                  ? renderSubItems(child.children, level + 1, [
                      ...parentPath,
                      index,
                    ])
                  : undefined
              }
            >
              <Text variant="body" context="neutral">
                {child.id} (Level {level})
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
          selectionMode="multi"
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
                acceptsChildren={true}
                nestingLevel={0}
                hoverable={true}
                subItems={
                  item.children
                    ? renderSubItems(item.children, 1, [index])
                    : undefined
                }
              >
                <Text variant="body" context="neutral">
                  {item.id} (Level 0)
                </Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const VariantLayer: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Reproduce a layer look and feel of the related Figma panel.",
      },
    },
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
              variant="layer"
              key={child.id}
              id={child.id}
              draggable={true}
              selectable={true}
              acceptsChildren={true}
              nestingLevel={level}
              hoverable={true}
              selectionScope="withDescendants"
              subItems={
                child.children
                  ? renderSubItems(child.children, level + 1, [
                      ...parentPath,
                      index,
                    ])
                  : undefined
              }
            >
              <Text variant="body" context="neutral">
                {child.id} (Level {level})
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
          selectionMode="multi"
          onItemsChange={setItems}
          onSelectionChange={setSelectedItems}
        >
          <ListContainer>
            {items.map((item, index) => (
              <ListItem
                variant="layer"
                key={item.id}
                id={item.id}
                draggable={true}
                selectable={true}
                acceptsChildren={true}
                nestingLevel={0}
                hoverable={true}
                selectionScope="withDescendants"
                subItems={
                  item.children
                    ? renderSubItems(item.children, 1, [index])
                    : undefined
                }
              >
                <Text variant="body" context="neutral">
                  {item.id} (Level 0)
                </Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}
