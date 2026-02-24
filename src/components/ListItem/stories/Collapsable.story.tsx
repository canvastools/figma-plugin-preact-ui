import { StoryObj } from '@storybook/preact'

import { useState } from 'preact/hooks'

import { ListContainer, Text, Stack, Spacing, ListContext, Icon, instance, frame, type ListItemData } from '../../../index'

import { ListItem } from '../ListItem'

type Story = StoryObj<typeof ListItem>

export const CollapsableStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<ListItem variant="default">
  {children}
</ListItem>

<ListItem variant="layer">
  {children}
</ListItem>
`,
      },
    },
  },
  render: () => {
    const itemsSample = [
      {
        id: 'Frame 0',
        items: [
          {
            id: 'Frame 0-0',
            items: [{ id: 'Frame 0-0-0' }, { id: 'Frame 0-0-1' }],
          },
          {
            id: 'Frame 0-1',
            items: [{ id: 'Frame 0-1-0' }],
          },
        ],
      },
      { id: 'Frame 1' },
      {
        id: 'Frame 2',
        items: [
          {
            id: 'Frame 2-0',
            items: [{ id: 'Frame 2-0-0' }, { id: 'Frame 2-0-1' }, { id: 'Frame 2-0-2' }],
          },
        ],
      },
    ] as ListItemData[]

    const [items_default, setItems_default] = useState(itemsSample)
    const [selectedItemIds_default, setSelectedItemIds_default] = useState<string[]>([])

    const [items_layer, setItems_layer] = useState(itemsSample)
    const [selectedItemIds_layer, setSelectedItemIds_layer] = useState<string[]>([])

    const renderItems = (items: ListItemData[], level: number, variant: 'default' | 'layer') => {
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
              selectionScope={variant === 'layer' ? 'withDescendants' : 'individual'}
              hoverable={true}
              items={item.items ? renderItems(item.items, level + 1, variant) : undefined}
              collapsable={true}
            >
              <Stack direction="row" y="center">
                {variant === 'layer' && <Spacing direction="row" size={200} />}
                <Stack direction="row" spacing={200} y="center">
                  {item.id === 'Frame 2' && <Icon glyph={instance} size={16} intentModifier="component" />}
                  {item.id.startsWith('Frame 2-') && <Icon glyph={frame} size={16} intentModifier="component" />}
                  <Text wrap={false} intentModifier={item.id.startsWith('Frame 2') ? 'component' : 'default'}>
                    {item.id}
                  </Text>
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
      <div className="sb-row sb-width-full sb-gap-40">
        <ListContext
          items={items_default}
          selectedItemIds={selectedItemIds_default}
          selectionMode="multi"
          onItemsChange={(args) => {
            setItems_default(args.items)
          }}
          onSelectionChange={(args) => {
            setSelectedItemIds_default(args.selectedItemIds)
          }}
        >
          {renderItems(items_default, 0, 'default')}
        </ListContext>

        <ListContext
          items={items_layer}
          selectedItemIds={selectedItemIds_layer}
          selectionMode="multi"
          onItemsChange={(args) => setItems_layer(args.items)}
          onSelectionChange={(args) => setSelectedItemIds_layer(args.selectedItemIds)}
        >
          {renderItems(items_layer, 0, 'layer')}
        </ListContext>
      </div>
    )
  },
}
