import { StoryObj } from '@storybook/preact-vite'
import { Fragment } from 'preact'

import { useState } from 'preact/hooks'

import {
  ListContainer,
  Text,
  Stack,
  Spacing,
  ListContext,
  Icon,
  instance,
  frame,
  slot,
  type ListItemData,
} from '../../../index'

import { ListItem } from '../ListItem'

type Story = StoryObj<typeof ListItem>

type LayerItemData = ListItemData & {
  type: 'frame' | 'instance' | 'slot'
  intent: 'tertiary' | 'component-secondary' | 'slot-secondary'
  items?: LayerItemData[]
}

export const LayersStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      description: {
        story: 'The components allows to reproduce the left panel with layers from Figma.',
      },
      source: {
        code: `
const item = {
  id: 'Frame 0',
  type: 'frame',
  intent: 'tertiary',
  items: [
    {
      id: 'Frame 0-0',
      type: 'component',
      intent: 'component-secondary',
    }
  ]
}

<ListItem
  key={item.id}
  id={item.id}
  variant="layer"
  nestingLevel={item.level}
  selectable={true}
  draggable={true}
  acceptsChildren={true}
  selectionScope="withDescendants"
  hoverable={true}
  items={item.items}
  collapsable={true}
  collapseIconIntent={item.intent}
>
  {children}
</ListItem>
`,
      },
    },
  },
  render: () => {
    const itemsSample: LayerItemData[] = [
      {
        id: 'Frame 0',
        type: 'frame',
        intent: 'tertiary',
        items: [
          {
            id: 'Frame 0-0',
            type: 'frame',
            intent: 'tertiary',
          },
          {
            id: 'Frame 0-1',
            type: 'frame',
            intent: 'tertiary',
          },
        ],
      },
      {
        id: 'Frame 1',
        type: 'frame',
        intent: 'tertiary',
      },
      {
        id: 'Frame 2',
        type: 'instance',
        intent: 'component-secondary',
        items: [
          {
            id: 'Frame 2-0',
            type: 'frame',
            intent: 'component-secondary',
          },
          {
            id: 'Frame 2-1',
            type: 'slot',
            intent: 'slot-secondary',
          },
        ],
      },
    ]

    const [items, setItems] = useState(itemsSample)
    const [selectedItemIds, setSelectedItemIds] = useState<string[]>([])

    const renderItems = (items: LayerItemData[], level: number) => {
      return (
        <ListContainer>
          {items.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              nestingLevel={level}
              selectable={true}
              variant="layer"
              draggable={true}
              acceptsChildren={true}
              selectionScope="withDescendants"
              hoverable={true}
              items={item.items && item.items.length ? renderItems(item.items, level + 1) : undefined}
              collapsable={true}
              collapseIconIntent={item.intent}
            >
              <Stack direction="row" y="center">
                {item.type === 'frame' && (
                  <Icon
                    glyph={frame}
                    size={16}
                    intentModifier={selectedItemIds.includes(item.id) ? 'default' : 'tertiary'}
                    variant="downscaled"
                  />
                )}
                {item.type === 'instance' && (
                  <Icon
                    glyph={instance}
                    size={16}
                    intentModifier={selectedItemIds.includes(item.id) ? 'component' : 'component-secondary'}
                    variant="downscaled"
                  />
                )}
                {item.type === 'slot' && (
                  <Icon
                    glyph={slot}
                    size={16}
                    intentModifier={selectedItemIds.includes(item.id) ? 'slot' : 'slot-secondary'}
                    variant="downscaled"
                  />
                )}
                <Spacing direction="row" size={200} />
                {item.type == 'frame' && (
                  <Fragment>
                    <Text wrap={false}>{item.id}</Text>
                    <Text intentModifier="secondary" wrap={false}>
                      &nbsp;(Level {level})
                    </Text>
                  </Fragment>
                )}
                {item.type == 'instance' && (
                  <Fragment>
                    <Text wrap={false} intentModifier="component">
                      {item.id}
                    </Text>
                    <Text intentModifier="component" wrap={false}>
                      &nbsp;(Level {level})
                    </Text>
                  </Fragment>
                )}
                {item.type == 'slot' && (
                  <Fragment>
                    <Text wrap={false} intentModifier="slot">
                      {item.id}
                    </Text>
                    <Text intentModifier="slot" wrap={false}>
                      &nbsp;(Level {level})
                    </Text>
                  </Fragment>
                )}
              </Stack>
            </ListItem>
          ))}
        </ListContainer>
      )
    }

    return (
      <div className="sb-row sb-width-full sb-gap-40">
        <ListContext
          items={items}
          selectedItemIds={selectedItemIds}
          selectionMode="multi"
          onItemsChange={(args) => setItems(args.items as LayerItemData[])}
          onSelectionChange={(args) => setSelectedItemIds(args.selectedItemIds)}
        >
          {renderItems(items, 0)}
        </ListContext>
      </div>
    )
  },
}
