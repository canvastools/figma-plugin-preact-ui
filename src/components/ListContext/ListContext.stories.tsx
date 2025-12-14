import type { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { useState } from "preact/hooks"

import { ListContext } from "./ListContext"
import type { ListItemData } from "./ListContext.types"

import { ListContainer } from "../../index"
import { ListItem } from "../../index"
import { Text } from "../../index"
import { Stack } from "../../index"

const meta: Meta<typeof ListContext> = {
  title: "Experimental/ListContext ⚠️",
  component: ListContext,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "<div class='experimental'>Experimental! API may change in future versions.</div> A wrapper component that manages a list state.",
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
      control: { type: "radio" },
      options: ["none", "single", "multi"],
      defaultValue: { summary: "single" },
    },
    onItemsChange: {
      action: "itemsChange",
      description:
        "Callback when the item order or structure is changed. Returns an array of items.",
      table: {
        type: {
          summary: "(args: { items: ListItemData[] }) => void",
        },
      },
    },
    onSelectionChange: {
      action: "selectionChange",
      description:
        "Callback when the selection is changed. Returns an array of selected items IDs.",
      table: {
        type: {
          summary: "(args: { selectedItems: string[] }) => void",
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
    useListContext: {
      table: {
        type: {
          summary: `Hook`,
        },
      },
      description: `Use this hook inside a child component to access the context. <br/>
        <pre>
        interface ListContextValue {
          items: ListItemData[]
          selectedItems: Set<string>
          setSelection: (itemIds: string[], selected: boolean) => void
          setExactSelection: (itemIds: string[]) => void
          toggleSelect: (
            itemId: string,
            options?: { range?: boolean; additive?: boolean }
          ) => void
          registerItemMeta?: (
            id: string,
            meta: { selectable?: boolean; selectionScope?: "item" | "withDescendants" }
          ) => () => void
          getPathForId?: (id: string) => number[] | null
          registerItemPath?: (id: string, path: number[]) => () => void
          reorderItems: (
            itemIds: string[],
            targetIndex: number,
            targetParentPath?: number[]
          ) => void
          selectionMode: "none" | "single" | "multi"
          registerRootElement?: (el: HTMLElement | null) => () => void
          dragImage?: HTMLDivElement | null
        }
        </pre>
        `,
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
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    const [items, setItems] = useState(sampleItems)
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    return (
      <div className="sb-column sb-gap-16">
        <ListContext
          items={items}
          selectedItems={selectedItems}
          // @ts-expect-error: Storybook types hack
          selectionMode={args.selectionMode}
          onItemsChange={(change) => {
            setItems(change.items)
            //@ts-expect-error: Storybook types hack
            args.onItemsChange?.(change)
          }}
          onSelectionChange={(change) => {
            setSelectedItems(change.selectedItems)
            //@ts-expect-error: Storybook types hack
            args.onSelectionChange?.(change)
          }}
        >
          <ListContainer>
            {items.map((item) => (
              <ListItem id={item.id} draggable={true} selectable={true}>
                <Text>{item.id}</Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const NoSelection: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "No ability to select items.",
      },
    },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const [items, setItems] = useState(sampleItems)
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    const renderSubItems = (children, level: number) => {
      if (!children || children.length === 0) return null

      return (
        <ListContainer>
          {children.map((child) => (
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
                  ? renderSubItems(child.children, level + 1)
                  : undefined
              }
            >
              <Stack direction="row" spacing={200}>
                <Text>{child.id}</Text>
                <Text intentModifiers="secondary">(Level {level})</Text>
              </Stack>
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
          onItemsChange={(change) => {
            setItems(change.items)
          }}
          onSelectionChange={(change) => {
            setSelectedItems(change.selectedItems)
          }}
        >
          <ListContainer>
            {items.map((item) => (
              <ListItem
                key={item.id}
                id={item.id}
                draggable={true}
                selectable={true}
                acceptsChildren={true}
                hoverable={true}
                subItems={
                  item.children ? renderSubItems(item.children, 1) : undefined
                }
              >
                <Stack direction="row" spacing={200}>
                  <Text>{item.id}</Text>
                  <Text intentModifiers="secondary">(Level 0)</Text>
                </Stack>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const SingleSelection: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Single selection mode.",
      },
    },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const [items, setItems] = useState(sampleItems)
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    const renderSubItems = (children, level: number) => {
      if (!children || children.length === 0) return null

      return (
        <ListContainer>
          {children.map((child) => (
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
                  ? renderSubItems(child.children, level + 1)
                  : undefined
              }
            >
              <Stack direction="row" spacing={200}>
                <Text>{child.id}</Text>
                <Text intentModifiers="secondary">(Level {level})</Text>
              </Stack>
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
          onItemsChange={(change) => {
            setItems(change.items)
          }}
          onSelectionChange={(change) => {
            setSelectedItems(change.selectedItems)
          }}
        >
          <ListContainer>
            {items.map((item) => (
              <ListItem
                key={item.id}
                id={item.id}
                draggable={true}
                selectable={true}
                acceptsChildren={true}
                hoverable={true}
                subItems={
                  item.children ? renderSubItems(item.children, 1) : undefined
                }
              >
                <Stack direction="row" spacing={200}>
                  <Text>{item.id}</Text>
                  <Text intentModifiers="secondary">(Level 0)</Text>
                </Stack>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const MultiSelection: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Multi selection mode using Shift key or Ctrl/CMD key.",
      },
    },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const [items, setItems] = useState(sampleItems)
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    const renderSubItems = (children, level: number) => {
      if (!children || children.length === 0) return null

      return (
        <ListContainer>
          {children.map((child) => (
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
                  ? renderSubItems(child.children, level + 1)
                  : undefined
              }
            >
              <Stack direction="row" spacing={200}>
                <Text>{child.id}</Text>
                <Text intentModifiers="secondary">(Level {level})</Text>
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
          selectedItems={selectedItems}
          selectionMode="multi"
          onItemsChange={(change) => {
            setItems(change.items)
          }}
          onSelectionChange={(change) => {
            setSelectedItems(change.selectedItems)
          }}
        >
          <ListContainer>
            {items.map((item) => (
              <ListItem
                key={item.id}
                id={item.id}
                draggable={true}
                selectable={true}
                acceptsChildren={true}
                nestingLevel={0}
                hoverable={true}
                subItems={
                  item.children ? renderSubItems(item.children, 1) : undefined
                }
              >
                <Stack direction="row" spacing={200}>
                  <Text>{item.id}</Text>
                  <Text intentModifiers="secondary">(Level 0)</Text>
                </Stack>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}
