import { StoryObj } from "@storybook/preact"

import { useState } from "preact/hooks"

import {
  ListContainer,
  Stack,
  Spacing,
  ListContext,
  Input,
  Select,
  ButtonIcon,
  ButtonIconToggle,
  Switch,
  Checkbox,
  SegmentedControl,
  link,
  type ListItemData,
} from "../../../index"

import { ListItem } from "../ListItem"

type Story = StoryObj<typeof ListItem>

export const ContentStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      description: {
        story:
          "Items can contain any content. `data-pui-interactive='true'` attribute can be applied to custom elements inside the list item to stop propagation of click events.",
      },
      source: {
        language: "tsx",
        code: `
<ListItem>
  <input type="text" data-pui-interactive="true"/>
</ListItem>
`,
      },
    },
  },
  render: () => {
    const ItemContent = ({
      label,
      variant,
    }: {
      label: string
      variant: "default" | "layer"
    }) => {
      if (variant === "default") {
        return [
          <Input value={label} />,
          <Select
            placeholder="Select an option"
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
            ]}
          />,
          <ButtonIcon icon={{ glyph: link, variant: "scaled" }} />,
          <Switch />,
          <Checkbox defaultChecked />,
          <SegmentedControl
            defaultValue="option1"
            options={[
              {
                label: "Option 1",
                value: "option1",
                icon: { glyph: link, variant: "scaled", size: 24 },
              },
              {
                label: "Option 2",
                value: "option2",
                icon: { glyph: link, variant: "scaled", size: 24 },
              },
            ]}
          />,
        ]
      }

      if (variant === "layer") {
        return [
          <Input value={label} ghost={true} focusOnDoubleClick={true} />,
          <ButtonIconToggle ghost icon={{ glyph: link, variant: "scaled" }} />,
        ]
      }
    }

    const itemsSample: ListItemData[] = [
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
    ]

    const [items_default, setItems_default] =
      useState<ListItemData[]>(itemsSample)
    const [selectedItems_default, setSelectedItems_default] = useState<
      string[]
    >([])

    const [items_layer, setItems_layer] = useState<ListItemData[]>(itemsSample)
    const [selectedItems_layer, setSelectedItems_layer] = useState<string[]>([])

    const renderItems = (
      items: ListItemData[],
      level: number,
      variant: "default" | "layer"
    ) => {
      return (
        <ListContainer>
          {items.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              nestingLevel={level}
              selectable={true}
              variant={variant}
              draggable={true}
              acceptsChildren={true}
              selectionScope={
                variant === "layer" ? "withDescendants" : "individual"
              }
              collapsable={true}
              hoverable={true}
              items={
                item.items
                  ? renderItems(item.items, level + 1, variant)
                  : undefined
              }
            >
              <Stack direction="row" y="center" fullWidth>
                <Stack direction="row" spacing={200} y="center" fullWidth>
                  <ItemContent label={item.id} variant={variant} />
                </Stack>
              </Stack>
            </ListItem>
          ))}
        </ListContainer>
      )
    }

    return (
      <div className="sb-row sb-width-full sb-gap-40">
        <ListContext
          items={items_default}
          selectedItemIds={selectedItems_default}
          selectionMode="multi"
          onItemsChange={(args) => setItems_default(args.items)}
          onSelectionChange={(args) =>
            setSelectedItems_default(args.selectedItemIds)
          }
        >
          {renderItems(items_default, 0, "default")}
        </ListContext>

        <ListContext
          items={items_layer}
          selectedItemIds={selectedItems_layer}
          selectionMode="multi"
          onItemsChange={(args) => {
            setItems_layer(args.items)
          }}
          onSelectionChange={(args) => {
            setSelectedItems_layer(args.selectedItemIds)
          }}
        >
          {renderItems(items_layer, 0, "layer")}
        </ListContext>
      </div>
    )
  },
}
