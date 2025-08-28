import type { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { useState } from "preact/hooks"

import { ListContext } from "../ListContext/ListContext"
import { ListContainer } from "../ListContainer/ListContainer"
import { ListItem } from "./ListItem"
import type { ListItemData } from "../ListContext/ListContext.types"

import { Text } from "../Text/Text"
import { Input } from "../Input/Input"
import { Checkbox } from "../Checkbox/Checkbox"
import { Icon } from "../Icon/Icon"
import { Button } from "../Button/Button"
import { ButtonIcon } from "../ButtonIcon/ButtonIcon"
import { ButtonIconToggle } from "../ButtonIconToggle/ButtonIconToggle"

const meta: Meta<typeof ListItem> = {
  title: "Components/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Always used within &lt;ListContext/&gt; and &lt;ListContainer/&gt;. It may contain any content.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    id: {
      control: { disable: true },
      description: "Unique identifier of the item.",
    },
    isNested: {
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { disable: true },
      description: "Indicates if the item is nested.",
    },
    nestingLevel: {
      table: {
        type: {
          summary: "number",
        },
      },
      control: { disable: true },
      defaultValue: { summary: "0" },
      description:
        "Nesting level of the item. Must be provided if the item is nested.",
    },
    draggable: {
      control: { type: "boolean" },
    },
    dragHandle: {
      control: { type: "radio" },
      options: ["default", "container"],
      defaultValue: { summary: "default" },
      description:
        "Defines how the item can be dragged. If set to `container`, the item can be dragged by the container itself. If set to `default`, the item can be dragged by the drag handle. Works only if the item is draggable.",
    },
    onDragStart: {
      action: "dragStart",
      description: "Callback function that is called when the item is dragged.",
      table: {
        type: {
          summary: "(args: { event: DragEvent }) => void",
        },
      },
    },
    onDragEnd: {
      action: "dragEnd",
      description: "Callback function that is called when the item is dragged.",
      table: {
        type: {
          summary: "(args: { event: DragEvent }) => void",
        },
      },
    },
    acceptsChildren: {
      control: { type: "boolean" },
      description: "Indicates if the item can have children.",
    },
    selectable: {
      control: { type: "boolean" },
      description: "Indicates if the item can be selected.",
    },
    selectionScope: {
      control: { type: "radio" },
      options: ["item", "withDescendants"],
      defaultValue: { summary: "item" },
      description:
        "Defines how the item can be selected. If set to `item`, the item can be selected individually. If set to `withDescendants`, the item and all its descendants can be selected at once.",
    },
    onSelect: {
      action: "select",
      description:
        "Callback function that is called when the item is selected.",
      table: {
        type: {
          summary: "(args: { event: MouseEvent; collapsed: boolean }) => void",
        },
      },
    },
    hoverable: {
      control: { type: "boolean" },
      description: "Indicates if the item can have hover state.",
    },
    collapsed: {
      table: {
        type: {
          summary: "number",
        },
      },
      control: { disable: true },
      description: "Value for controlled mode.",
    },
    showCollapseControl: {
      control: { type: "boolean" },
      description:
        "Indicates if the collapse control should be shown and can be used to collapse or expand the item.",
    },
    onCollapsedChange: {
      action: "collapsedChange",
      description:
        "Callback function that is called when the item is collapsed or expanded.",
      table: {
        type: {
          summary: "(args: { event: MouseEvent; collapsed: boolean }) => void",
        },
      },
    },
    subItems: {
      control: { disable: true },
      description: "&lt;ListContainer&gt; with &lt;ListItem&gt; components.",
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
    children: {
      control: { disable: true },
      description: "Any content of the item.",
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ListItem>

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
    className: "",
    draggable: true,
    dragHandle: "default",
    onDragStart: fn(),
    onDragEnd: fn(),
    acceptsChildren: true,
    selectable: true,
    selectionScope: "item",
    onSelect: fn(),
    hoverable: true,
    showCollapseControl: false,
    onCollapsedChange: fn(),
  },
  render: (args) => {
    const [items, setItems] = useState(sampleItems)
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    const renderSubItems = (children: any[], level: number) => {
      if (!children || children.length === 0) return null

      return (
        <ListContainer>
          {children.map((child) => (
            <ListItem
              {...args}
              key={child.id}
              id={child.id}
              nestingLevel={level}
              subItems={
                child.children
                  ? renderSubItems(child.children, level + 1)
                  : undefined
              }
            >
              <Text variant="body" context="neutral" contextModifiers="default">
                {child.id}
              </Text>
              {" "}
              <Text context="neutral" contextModifiers="secondary">
                (Level {level})
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
          onItemsChange={(change) => {
            setItems(change.items)
          }}
          onSelectionChange={(change) => {
            setSelectedItems(change.selectedItems)
          }}
        >
          <ListContainer>
            {items.map((item, index) => (
              <ListItem
                {...args}
                key={item.id}
                id={item.id}
                subItems={
                  item.children ? renderSubItems(item.children, 1) : undefined
                }
              >
                <Text
                  variant="body"
                  context="neutral"
                  contextModifiers="default"
                >
                  {item.id}
                </Text>
                {" "}
                <Text context="neutral" contextModifiers="secondary">
                  (Level 0)
                </Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const Draggable: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Some elements can be explicitly restricted from being draggable. However, if they are nested, they will still move along with their parent. It's recommended to apply selection restriction in combination with drag restriction and hover restriction for better UX.",
      },
    },
  },
  render: () => {
    const [items, setItems] = useState(sampleItems)
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    const renderSubItems = (children: any[], level: number) => {
      if (!children || children.length === 0) return null

      return (
        <ListContainer>
          {children.map((child) => (
            <ListItem
              key={child.id}
              id={child.id}
              nestingLevel={level}
              draggable={level > 1 ? false : true}
              acceptsChildren={true}
              selectable={level > 1 ? false : true}
              selectionScope="item"
              hoverable={level > 1 ? false : true}
              subItems={
                child.children
                  ? renderSubItems(child.children, level + 1)
                  : undefined
              }
            >
              <Text variant="body" context="neutral" contextModifiers="default">
                {child.id}
              </Text>
              {" "}
              <Text context="neutral" contextModifiers="secondary">
                 (Level {level}{" "}
                {level > 1
                  ? ", not draggable, not hoverable, not selectable"
                  : ""}
                )
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
          onItemsChange={(change) => {
            setItems(change.items)
          }}
          onSelectionChange={(change) => {
            setSelectedItems(change.selectedItems)
          }}
        >
          <ListContainer>
            {items.map((item, index) => (
              <ListItem
                key={item.id}
                id={item.id}
                draggable={true}
                acceptsChildren={true}
                selectable={true}
                selectionScope="item"
                hoverable={true}
                subItems={
                  item.children ? renderSubItems(item.children, 1) : undefined
                }
              >
                <Text
                  variant="body"
                  context="neutral"
                  contextModifiers="default"
                >
                  {item.id}
                </Text>
                {" "}
                <Text context="neutral" contextModifiers="secondary">
                  (Level 0)
                </Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const DragHandleContainer: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "By default, the dragHandle appears on hover to the left, but you can specify `container` to make the entire container draggable. It’s best not to mix different types of dragHandles within the same list.",
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
        <ListContainer>
          {children.map((child) => (
            <ListItem
              key={child.id}
              id={child.id}
              nestingLevel={level}
              draggable={true}
              dragHandle="container"
              acceptsChildren={true}
              selectable={true}
              selectionScope="item"
              hoverable={true}
              subItems={
                child.children
                  ? renderSubItems(child.children, level + 1)
                  : undefined
              }
            >
              <Text variant="body" context="neutral" contextModifiers="default">
                {child.id}
              </Text>
              {" "}
              <Text context="neutral" contextModifiers="secondary">
                (Level {level})
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
          onItemsChange={(change) => {
            setItems(change.items)
          }}
          onSelectionChange={(change) => {
            setSelectedItems(change.selectedItems)
          }}
        >
          <ListContainer>
            {items.map((item, index) => (
              <ListItem
                key={item.id}
                id={item.id}
                draggable={true}
                dragHandle="container"
                acceptsChildren={true}
                selectable={true}
                selectionScope="item"
                hoverable={true}
                subItems={
                  item.children ? renderSubItems(item.children, 1) : undefined
                }
              >
                <Text
                  variant="body"
                  context="neutral"
                  contextModifiers="default"
                >
                  {item.id}
                </Text>
                {" "}
                <Text context="neutral" contextModifiers="secondary">
                  (Level 0)
                </Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const AcceptsChildren: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Some elements can be explicitly restricted from accepting children.",
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
        <ListContainer>
          {children.map((child) => (
            <ListItem
              key={child.id}
              id={child.id}
              nestingLevel={level}
              draggable={true}
              acceptsChildren={level > 1 ? false : true}
              selectable={true}
              selectionScope="item"
              hoverable={true}
              subItems={
                child.children
                  ? renderSubItems(child.children, level + 1)
                  : undefined
              }
            >
              <Text variant="body" context="neutral" contextModifiers="default">
                {child.id}
              </Text>
              {" "}
              <Text context="neutral" contextModifiers="secondary">
                (Level {level} {level > 1 ? ", no children" : ""})
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
          onItemsChange={(change) => {
            setItems(change.items)
          }}
          onSelectionChange={(change) => {
            setSelectedItems(change.selectedItems)
          }}
        >
          <ListContainer>
            {items.map((item, index) => (
              <ListItem
                key={item.id}
                id={item.id}
                draggable={true}
                acceptsChildren={true}
                selectable={true}
                selectionScope="item"
                hoverable={true}
                subItems={
                  item.children ? renderSubItems(item.children, 1) : undefined
                }
              >
                <Text
                  variant="body"
                  context="neutral"
                  contextModifiers="default"
                >
                  {item.id}
                </Text>
                {" "}
                <Text context="neutral" contextModifiers="secondary">
                  (Level 0)
                </Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const Selectable: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Some elements can be restricted from being selectable. It's recommended to apply selection restriction in combination with drag restriction and hover restriction for better UX.",
      },
    },
  },
  render: () => {
    const [items, setItems] = useState(sampleItems)
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    const renderSubItems = (children: any[], level: number) => {
      if (!children || children.length === 0) return null

      return (
        <ListContainer>
          {children.map((child) => (
            <ListItem
              key={child.id}
              id={child.id}
              nestingLevel={level}
              draggable={level > 1 ? false : true}
              acceptsChildren={true}
              selectable={level > 1 ? false : true}
              selectionScope="item"
              hoverable={level > 1 ? false : true}
              subItems={
                child.children
                  ? renderSubItems(child.children, level + 1)
                  : undefined
              }
            >
              <Text variant="body" context="neutral" contextModifiers="default">
                {child.id}
              </Text>
              {" "}
              <Text context="neutral" contextModifiers="secondary">
                 (Level {level}{" "}
                {level > 1
                  ? ", not draggable, not hoverable, not selectable"
                  : ""}
                )
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
          onItemsChange={(change) => {
            setItems(change.items)
          }}
          onSelectionChange={(change) => {
            setSelectedItems(change.selectedItems)
          }}
        >
          <ListContainer>
            {items.map((item, index) => (
              <ListItem
                key={item.id}
                id={item.id}
                draggable={true}
                acceptsChildren={true}
                selectable={true}
                selectionScope="item"
                hoverable={true}
                subItems={
                  item.children ? renderSubItems(item.children, 1) : undefined
                }
              >
                <Text
                  variant="body"
                  context="neutral"
                  contextModifiers="default"
                >
                  {item.id}
                </Text>
                {" "}
                <Text context="neutral" contextModifiers="secondary">
                  (Level 0)
                </Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const SelectionScope: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "The selection scope determines how elements are selected. With `withDescendants`, the entire branch is selected, and the `onSelectionChange` event of &lt;ListContext&gt; will return an array of all elements.",
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
        <ListContainer>
          {children.map((child) => (
            <ListItem
              key={child.id}
              id={child.id}
              nestingLevel={level}
              draggable={true}
              acceptsChildren={true}
              selectable={true}
              selectionScope="withDescendants"
              hoverable={true}
              subItems={
                child.children
                  ? renderSubItems(child.children, level + 1)
                  : undefined
              }
            >
              <Text variant="body" context="neutral" contextModifiers="default">
                {child.id}
              </Text>
              {" "}
              <Text context="neutral" contextModifiers="secondary">
                (Level {level})
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
          onItemsChange={(change) => {
            setItems(change.items)
          }}
          onSelectionChange={(change) => {
            setSelectedItems(change.selectedItems)
          }}
        >
          <ListContainer>
            {items.map((item, index) => (
              <ListItem
                key={item.id}
                id={item.id}
                draggable={true}
                acceptsChildren={true}
                selectable={true}
                selectionScope="withDescendants"
                hoverable={true}
                subItems={
                  item.children ? renderSubItems(item.children, 1) : undefined
                }
              >
                <Text
                  variant="body"
                  context="neutral"
                  contextModifiers="default"
                >
                  {item.id}
                </Text>
                {" "}
                <Text context="neutral" contextModifiers="secondary">
                  (Level 0)
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
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Some elements can be restricted from showing hover feedback. It's recommended to enable this for all interactive items to provide better UX",
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
        <ListContainer>
          {children.map((child) => (
            <ListItem
              key={child.id}
              id={child.id}
              nestingLevel={level}
              draggable={level > 1 ? false : true}
              acceptsChildren={true}
              selectable={level > 1 ? false : true}
              selectionScope="item"
              hoverable={level > 1 ? false : true}
              subItems={
                child.children
                  ? renderSubItems(child.children, level + 1)
                  : undefined
              }
            >
              <Text variant="body" context="neutral" contextModifiers="default">
                {child.id}
              </Text>
              {" "}
              <Text context="neutral" contextModifiers="secondary">
                 (Level {level}{" "}
                {level > 1
                  ? ", not draggable, not hoverable, not selectable"
                  : ""}
                )
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
          onItemsChange={(change) => {
            setItems(change.items)
          }}
          onSelectionChange={(change) => {
            setSelectedItems(change.selectedItems)
          }}
        >
          <ListContainer>
            {items.map((item, index) => (
              <ListItem
                key={item.id}
                id={item.id}
                draggable={true}
                acceptsChildren={true}
                selectable={true}
                selectionScope="item"
                hoverable={true}
                subItems={
                  item.children
                    ? renderSubItems(item.children, 1, [index])
                    : undefined
                }
              >
                <Text
                  variant="body"
                  context="neutral"
                  contextModifiers="default"
                >
                  {item.id}
                </Text>
                {" "}
                <Text context="neutral" contextModifiers="secondary">
                  (Level 0)
                </Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const CollapsableWithDragHandle: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Large trees can be collapsed by setting `showCollapseControl`. By default, the state is managed internally by the component, but you can also pass the state via the `collapsed` property.",
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
        <ListContainer>
          {children.map((child) => (
            <ListItem
              key={child.id}
              id={child.id}
              nestingLevel={level}
              draggable={level > 1 ? false : true}
              acceptsChildren={true}
              selectable={level > 1 ? false : true}
              selectionScope="item"
              hoverable={level > 1 ? false : true}
              showCollapseControl={true}
              subItems={
                child.children
                  ? renderSubItems(child.children, level + 1)
                  : undefined
              }
            >
              <Text variant="body" context="neutral" contextModifiers="default">
                {child.id}
              </Text>
              {" "}
              <Text context="neutral" contextModifiers="secondary">
                 (Level {level}
                {level > 1
                  ? ", not draggable, not hoverable, not selectable"
                  : ""}
                )
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
          onItemsChange={(change) => {
            setItems(change.items)
          }}
          onSelectionChange={(change) => {
            setSelectedItems(change.selectedItems)
          }}
        >
          <ListContainer>
            {items.map((item, index) => (
              <ListItem
                key={item.id}
                id={item.id}
                draggable={true}
                acceptsChildren={true}
                selectable={true}
                selectionScope="item"
                showCollapseControl={true}
                hoverable={true}
                subItems={
                  item.children
                    ? renderSubItems(item.children, 1, [index])
                    : undefined
                }
              >
                <Text
                  variant="body"
                  context="neutral"
                  contextModifiers="default"
                >
                  {item.id}
                </Text>
                {" "}
                <Text context="neutral" contextModifiers="secondary">
                  (Level 0)
                </Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const CollapsableWithDraggableContainer: Story = {
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
        <ListContainer>
          {children.map((child) => (
            <ListItem
              key={child.id}
              id={child.id}
              nestingLevel={level}
              draggable={level > 1 ? false : true}
              acceptsChildren={true}
              selectable={level > 1 ? false : true}
              selectionScope="item"
              hoverable={level > 1 ? false : true}
              showCollapseControl={true}
              dragHandle="container"
              subItems={
                child.children
                  ? renderSubItems(child.children, level + 1)
                  : undefined
              }
            >
              <Text variant="body" context="neutral" contextModifiers="default">
                {child.id}
              </Text>
              {" "}
              <Text context="neutral" contextModifiers="secondary">
                 (Level {level}
                {level > 1
                  ? ", not draggable, not hoverable, not selectable"
                  : ""}
                )
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
          onItemsChange={(change) => {
            setItems(change.items)
          }}
          onSelectionChange={(change) => {
            setSelectedItems(change.selectedItems)
          }}
        >
          <ListContainer>
            {items.map((item, index) => (
              <ListItem
                key={item.id}
                id={item.id}
                draggable={true}
                acceptsChildren={true}
                selectable={true}
                selectionScope="item"
                showCollapseControl={true}
                hoverable={true}
                dragHandle="container"
                subItems={
                  item.children
                    ? renderSubItems(item.children, 1, [index])
                    : undefined
                }
              >
                <Text
                  variant="body"
                  context="neutral"
                  contextModifiers="default"
                >
                  {item.id}
                </Text>
                {" "}
                <Text context="neutral" contextModifiers="secondary">
                  (Level 0)
                </Text>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}

export const Content: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Various content test.",
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
        <ListContainer>
          {children.map((child) => (
            <ListItem
              key={child.id}
              id={child.id}
              nestingLevel={level}
              draggable={true}
              acceptsChildren={true}
              selectable={true}
              selectionScope="withDescendants"
              hoverable={true}
              showCollapseControl={true}
              subItems={
                child.children
                  ? renderSubItems(child.children, level + 1)
                  : undefined
              }
            >
              <Input defaultValue={child.id} />
              <div
                style={{
                  paddingLeft: 16,
                  width: 400,
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <Checkbox label="Label" />
                <ButtonIcon ghost>
                  <Icon glyph="settings" variant="scaled" />
                </ButtonIcon>
                <ButtonIconToggle ghost>
                  <Icon glyph="link" variant="scaled" />
                </ButtonIconToggle>
              </div>
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
          onItemsChange={(change) => {
            setItems(change.items)
          }}
          onSelectionChange={(change) => {
            setSelectedItems(change.selectedItems)
          }}
        >
          <ListContainer>
            {items.map((item, index) => (
              <ListItem
                key={item.id}
                id={item.id}
                draggable={true}
                acceptsChildren={true}
                selectable={true}
                selectionScope="withDescendants"
                showCollapseControl={true}
                hoverable={true}
                subItems={
                  item.children
                    ? renderSubItems(item.children, 1, [index])
                    : undefined
                }
              >
                <Input defaultValue={item.id} ghost focusOnDoubleClick />
                <div
                  style={{
                    paddingLeft: 16,
                    width: 400,
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                  }}
                >
                  <Text context="neutral" contextModifiers="secondary">
                     Ghost + Double click focus
                  </Text>
                  <Button>Action</Button>
                  <ButtonIconToggle>
                    <Icon glyph="link" variant="scaled" />
                  </ButtonIconToggle>
                </div>
              </ListItem>
            ))}
          </ListContainer>
        </ListContext>
      </div>
    )
  },
}
