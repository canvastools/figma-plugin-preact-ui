import type { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { useState } from "preact/hooks"

import { ListContext } from "./ListContext"
import { ListContainer } from "../ListContainer/ListContainer"
import { ListItem } from "../ListItem/ListItem"
import type { ListItemData } from "./ListContext.types"

import { Text } from "../Text/Text"

const meta: Meta<typeof ListContext> = {
  title: "Components/ListContext",
  component: ListContext,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A wrapper component that manages a list state.",
      },
    },
  },
  argTypes: {
    items: {
      table: {
        type: {
          summary: "ListItemData[]",
        },
      },
      control: { disable: true },
      description: `Array of items to manage.
      <pre>interface ListItemData {
  id: string
  selected?: boolean
  children?: ListItemData[]
}</pre>
      `,
    },
    selectedItems: {
      table: {
        type: {
          summary: "string[]",
        },
      },
      control: { disable: true },
      description: "Array of selected items IDs.",
    },
    selectionMode: {
      control: { type: "select" },
      options: ["none", "single", "multi"],
      defaultValue: { summary: "single" },
    },
    onItemsChange: {
      action: "itemsChange",
      description:
        "Callback function that is called when the item order or structure is changed. Returns an array of items.",
      table: {
        type: {
          summary: "([ListItemData[]]) => void",
        },
      },
    },
    onSelectionChange: {
      action: "selectionChange",
      description:
        "Callback function that is called when the selection is changed. Returns an array of selected items IDs.",
      table: {
        type: {
          summary: "([string[]]) => void",
        },
      },
    },
    children: {
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
      control: { disable: true },
      description: "Usually &lt;ListContainer/&gt;",
    },
  },
}

export default meta
type Story = StoryObj<typeof ListContext>

const sampleItems = [
  {
    id: "Frame 1",
    children: [
      {
        id: "Frame 11",
        children: [{ id: "Frame 111" }, { id: "Frame 112" }],
      },
      {
        id: "Frame 12",
        children: [{ id: "Frame 121" }],
      },
    ],
  },
  { id: "Frame 2" },
  {
    id: "Frame 3",
    children: [
      {
        id: "Frame 31",
        children: [
          { id: "Frame 311" },
          { id: "Frame 312" },
          { id: "Frame 313" },
        ],
      },
    ],
  },
] as ListItemData[]

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    selectionMode: "single",
    onItemsChange: fn(),
    onSelectionChange: fn(),
  },
  render: (args: any) => {
    const [items, setItems] = useState(sampleItems)
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    return (
      <div className="sb-column sb-gap-16">
        <ListContext
          items={items}
          selectedItems={selectedItems}
          selectionMode={args.selectionMode}
          onItemsChange={(items) => {
            setItems(items)
            args.onItemsChange?.(items)
          }}
          onSelectionChange={(selectedItems) => {
            setSelectedItems(selectedItems)
            args.onSelectionChange?.(selectedItems)
          }}
        >
          <ListContainer>
            {items.map((item) => (
              <ListItem id={item.id} draggable={true} selectable={true}>
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

export const NoSelection: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "No ability to select items.",
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
                {child.id}
              </Text>
              <Text context="neutral-secondary"> (Level {level})</Text>
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
          selectionMode="none"
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
                  {item.id}
                </Text>
                <Text context="neutral-secondary"> (Level 0)</Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const SingleSelection: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Single selection mode.",
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
                {child.id}
              </Text>
              <Text context="neutral-secondary"> (Level {level})</Text>
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
          selectionMode="single"
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
                  {item.id}
                </Text>
                <Text context="neutral-secondary"> (Level 0)</Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const MultiSelection: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Multi selection mode using Shift key or Ctrl/CMD key.",
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
                {child.id}
              </Text>
              <Text context="neutral-secondary"> (Level {level})</Text>
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
                  {item.id}
                </Text>
                <Text context="neutral-secondary"> (Level 0)</Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}
