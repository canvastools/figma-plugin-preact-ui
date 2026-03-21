import { Meta, StoryObj } from '@storybook/preact'
import { useRef, useState } from 'preact/hooks'

import {
  Avatar,
  Badge,
  Bar,
  Button,
  ButtonIcon,
  Checkbox,
  ColorPicker,
  ColorSwatch,
  Divider,
  Icon,
  Input,
  ListContainer,
  ListContext,
  ListItem,
  Menu,
  Popover,
  ScrollContainer,
  ScrollContext,
  Section,
  SegmentedControl,
  Select,
  Spacing,
  Spinner,
  Stack,
  Tab,
  TabContext,
  TabList,
  TabPanel,
  Text,
  TooltipContext,
  useScrollContext,
  WindowResizer,
  settings,
  viewGrid,
  viewList,
} from '../index'

import type { ListItemData, Color } from '../index'

const meta: Meta = {
  title: 'Overview/Figma Plugin UI',
  tags: ['!dev'],
  parameters: {
    docs: {
      description: {
        component: `
**An unofficial loose interpretation** of [Figma's UI3 design language](https://www.figma.com/community/file/1486123838948777078/ui3-figmas-ui-kit), adapted for plugin interfaces (Preact/React-compatible):

- Providing components and states relevant to plugin development.
- Optimizing the system for practical, real-world plugin workflows.
- Maintaining visual alignment with the current look & feel of Figma’s interface.

This project is an independent initiative and is not affiliated with or endorsed by [Figma](https://figma.com).

---

- [Getting started](https://github.com/canvastools/figma-plugin-preact-ui/blob/main/README.md)
- [Changelog](https://github.com/canvastools/figma-plugin-preact-ui/blob/main/CHANGELOG.md)
- [License](https://github.com/canvastools/figma-plugin-preact-ui/blob/main/LICENSE.md)`,
      },
      canvas: {
        sourceState: 'none',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

type SampleTodoItem = { content: string } & ListItemData

const sampleItemsPlain: SampleTodoItem[] = [
  {
    id: '1',
    content: 'Explode UI3 Figma library',
  },
  {
    id: '2',
    content: 'Design components',
  },
  {
    id: '3',
    content: 'Setup environment',
  },
  { id: '4', content: 'Develop a library' },
  { id: '5', content: 'Test components' },
  { id: '6', content: 'Publish to NPM' },
  { id: '7', content: 'Share to the community' },
  { id: '8', content: 'And enjoy!' },
]

export const _1: Story = {
  globals: {
    background: 'secondary',
  },
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
  },
  render: () => {
    const [items, setItems] = useState(sampleItemsPlain)
    const [selectedItemIds, setSelectedItemIds] = useState<string[]>([])
    const anchorRefMenu = useRef<HTMLButtonElement | null>(null)

    const TopBar = () => {
      const { isAtTop } = useScrollContext()

      return (
        <Bar showDividerBottom={!isAtTop}>
          <Section>
            <Stack direction="row" spacing="400">
              <TabList>
                <Tab id="tab-1">Home</Tab>
                <Tab id="tab-2">Templates</Tab>
              </TabList>

              <Stack direction="row" spacing="200">
                <ButtonIcon ghost ref={anchorRefMenu}>
                  <Icon glyph={settings} />
                </ButtonIcon>

                <Menu
                  triggerRef={anchorRefMenu}
                  items={[
                    {
                      type: 'action',
                      id: 'action-1',
                      children: 'Settings',
                      closeOnClick: true,
                    },
                    {
                      type: 'action',
                      id: 'action-2',
                      children: 'Help',
                      closeOnClick: true,
                    },
                    {
                      type: 'divider',
                    },
                    {
                      type: 'action',
                      id: 'action-3',
                      children: 'Logout',
                      intentModifier: 'danger',
                      closeOnClick: true,
                    },
                  ]}
                />

                <Avatar>M</Avatar>
              </Stack>
            </Stack>
          </Section>
        </Bar>
      )
    }

    const BottomBar = () => {
      const [openColorPicker, setOpenColorPicker] = useState(false)
      const { isAtBottom } = useScrollContext()
      const anchorRef = useRef<HTMLDivElement | null>(null)
      const [color, setColor] = useState<Color>({
        r: 255,
        g: 0,
        b: 0,
        a: 1,
      })

      return (
        <Bar showDividerTop={!isAtBottom}>
          <Section>
            <Stack direction="row" spacing="200">
              <Input
                placeholder="Type a new to-do"
                prefix={
                  <div style={{ padding: '0 8px 0 4px' }} ref={anchorRef} onClick={() => setOpenColorPicker(true)}>
                    <ColorSwatch size="small" color={color} />
                  </div>
                }
              />
              <Button intent="brand">Add</Button>
              <Popover
                anchorRef={anchorRef}
                popoverHeaderProps={{
                  children: 'Color Picker',
                }}
                placement="over"
                open={openColorPicker}
                onClose={() => setOpenColorPicker(false)}
              >
                <Section>
                  <Spacing size="100" />
                  <ColorPicker color={color} onColorChange={(args) => setColor(args.color)} />
                  <Spacing size="100" />
                </Section>
              </Popover>
            </Stack>
          </Section>
        </Bar>
      )
    }

    return (
      <div className="sb-plugin-window sb-plugin-window-height-480 sb-plugin-window-width-380 sb-plugin-window-center">
        <TooltipContext>
          <ScrollContext>
            <TabContext defaultActiveId="tab-1">
              <TopBar />

              <TabPanel tabId="tab-1" fullHeight>
                <ScrollContainer>
                  <Section variant="stacked">
                    <Stack direction="row" spacing="200" y="center">
                      <Text variant="heading">This is demo</Text>
                      <Badge intentModifier="success">New!</Badge>
                    </Stack>
                    <Spacing size="100" />
                    <Text>
                      A preview of what the plugin interface might look like when it is put together using the components from
                      this library. The goal is to give you a sense of how the different pieces fit, behave, and feel when
                      combined into a working layout, rather than showing each component in isolation. It demonstrates the
                      intended look and consistency of the interface once assembled into a real plugin environment.
                    </Text>
                  </Section>

                  <Divider />

                  <Section padding={{ right: '200' }}>
                    <Stack direction="row" spacing="200">
                      <Text variant="heading" size="small" fullWidth>
                        To-do list
                      </Text>

                      <Stack direction="row" spacing="200">
                        <Select
                          options={[
                            { label: 'Incomplete', value: 'incomplete' },
                            { label: 'Completed', value: 'completed' },
                          ]}
                          value={'incomplete'}
                        />
                        <SegmentedControl
                          options={[
                            {
                              label: 'List',
                              value: 'list',
                              icon: { glyph: viewList },
                            },
                            {
                              label: 'Grid',
                              value: 'grid',
                              icon: { glyph: viewGrid },
                            },
                          ]}
                          defaultValue={'list'}
                        />
                      </Stack>
                    </Stack>
                  </Section>

                  <ListContext
                    items={items}
                    selectedItemIds={selectedItemIds}
                    selectionMode="multi"
                    onItemsChange={(change) => {
                      setItems(change.items as SampleTodoItem[])
                    }}
                    onSelectionChange={(change) => {
                      setSelectedItemIds(change.selectedItemIds)
                    }}
                  >
                    <ListContainer>
                      {items.map((item) => {
                        return (
                          <ListItem key={item.id} nestingLevel={0} id={item.id} draggable={true} selectable={true}>
                            <Stack direction="row" spacing="200">
                              <Checkbox />
                              <Text>{item.content}</Text>
                            </Stack>
                          </ListItem>
                        )
                      })}
                    </ListContainer>
                  </ListContext>
                </ScrollContainer>

                <BottomBar />
              </TabPanel>

              <TabPanel tabId="tab-2" fullHeight>
                <Stack fullHeight y="center" x="center" spacing="200">
                  <Spinner />
                  <Text intentModifier="secondary">Don’t wait, it’s a demo.</Text>
                </Stack>
              </TabPanel>
            </TabContext>
          </ScrollContext>
        </TooltipContext>
        <WindowResizer minWidth={380} minHeight={480} maxWidth={800} maxHeight={600} onResize={() => {}} />
      </div>
    )
  },
}
