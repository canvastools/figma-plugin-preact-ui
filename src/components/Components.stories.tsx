import { Meta, StoryObj } from "@storybook/preact"
import { useRef, useState } from "preact/hooks"

import {
  settings as settingsGlyph,
  close as closeGlyph,
  viewList as viewListGlyph,
  viewGrid as viewGridGlyph,
} from "../index"

import {
  Avatar,
  Badge,
  Bar,
  Button,
  ButtonIcon,
  Checkbox,
  Divider,
  Icon,
  Input,
  ColorPicker,
  ColorSwatch,
  ListContainer,
  ListContext,
  ListItem,
  MenuContainer,
  MenuContext,
  MenuDivider,
  MenuItemAction,
  MenuItemOption,
  Select,
  ScrollContainer,
  ScrollContext,
  OverlayPositioner,
  Section,
  SegmentedControl,
  Spacing,
  Spinner,
  Stack,
  Popover,
  Tab,
  TabContext,
  TabList,
  TabPanel,
  Text,
  WindowResizer,
  colorToHexAlpha,
} from "../"

import type { ListItemData, Color } from "../"

import { useScrollContext } from "../"

const meta: Meta = {
  title: "Overview/Components",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        component: `
**An unofficial implementation** of Figma's UI3 design language, adapted for plugin interfaces.

The [original design library](https://www.figma.com/community/file/1486123838948777078/ui3-figmas-ui-kit) was published in Figma Community by Figma.

This project is not affiliated with or endorsed by Figma.

## About the library

This is **not a pixel-perfect port** of the official UI3 file.

The goal was not to reproduce every detail, but rather to:

- Provide components and states relevant to plugin development.
- Stay close in look & feel to Figma’s current interface.
- Optimise for practical use: easier, cleaner, and more consistent to work with.

Some patterns or unused states were intentionally left out.
          
[👉 Getting started](https://github.com/canvastools/figma-plugin-preact-ui/blob/main/README.md)`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

type sampleItemsPlainType = { content: string } & ListItemData

const sampleItemsPlain: sampleItemsPlainType[] = [
  {
    id: "1",
    content: "Explode UI3 Figma library",
  },
  {
    id: "2",
    content: "Design components",
  },
  {
    id: "3",
    content: "Setup environment",
  },
  { id: "4", content: "Develop a library" },
  { id: "5", content: "Test components" },
  { id: "6", content: "Publish to NPM" },
  { id: "7", content: "Share to the community" },
  { id: "8", content: "And enjoy!" },
]

export const _1: Story = {
  globals: {
    background: "secondary",
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const [items, setItems] = useState(sampleItemsPlain)
    const [selectedItems, setSelectedItems] = useState<string[]>([])
    const anchorRefMenu = useRef<HTMLButtonElement | null>(null)
    const [openMenu, setOpenMenu] = useState(false)

    const TopBar = () => {
      const { isAtTop } = useScrollContext()

      return (
        <Bar borderBottom={!isAtTop}>
          <Section>
            <Stack direction="row" spacing="400">
              <TabList>
                <Tab value="tab-1">Home</Tab>
                <Tab value="tab-2">Templates</Tab>
              </TabList>

              <Stack direction="row" spacing="200">
                <ButtonIcon
                  ghost
                  ref={anchorRefMenu}
                  onClick={() => setOpenMenu(true)}
                >
                  <Icon glyph={settingsGlyph} variant="scaled" />
                </ButtonIcon>

                <MenuContext
                  triggerRef={anchorRefMenu}
                  open={openMenu}
                  setOpen={setOpenMenu}
                >
                  <OverlayPositioner
                    anchorRef={anchorRefMenu}
                    placement="over"
                    open={openMenu}
                    onClose={() => setOpenMenu(false)}
                  >
                    <MenuContainer>
                      <MenuItemAction onClick={() => setOpenMenu(false)}>
                        Settings
                      </MenuItemAction>
                      <MenuItemAction onClick={() => setOpenMenu(false)}>
                        Help
                      </MenuItemAction>
                      <MenuItemAction onClick={() => setOpenMenu(false)}>
                        Logout
                      </MenuItemAction>
                      <MenuDivider />
                      <MenuItemOption
                        defaultSelected
                        onChange={() => setOpenMenu(false)}
                      >
                        Light mode
                      </MenuItemOption>
                      <MenuItemOption onChange={() => setOpenMenu(false)}>
                        Dark mode
                      </MenuItemOption>
                    </MenuContainer>
                  </OverlayPositioner>
                </MenuContext>
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
        <Bar borderTop={!isAtBottom}>
          <Section>
            <Stack direction="row" spacing="200">
              <Input
                placeholder="Type a new to-do"
                prefix={
                  <div
                    style={{ padding: "0 8px 0 4px" }}
                    ref={anchorRef}
                    onClick={() => setOpenColorPicker(true)}
                  >
                    <ColorSwatch size="small" hex={colorToHexAlpha(color)} />
                  </div>
                }
              />
              <Button intent="brand">Add</Button>
              <OverlayPositioner
                anchorRef={anchorRef}
                placement="over"
                open={openColorPicker}
                onClose={() => setOpenColorPicker(false)}
              >
                <Popover>
                  <Bar borderBottom>
                    <Section padding={{ right: "200" }}>
                      <Stack direction="row" spacing="200" y="center">
                        <Text fullWidth strong>
                          Color Picker
                        </Text>
                        <ButtonIcon
                          ghost
                          onClick={() => setOpenColorPicker(false)}
                        >
                          <Icon glyph={closeGlyph} />
                        </ButtonIcon>
                      </Stack>
                    </Section>
                  </Bar>
                  <Section>
                    <Spacing size="100" />
                    <ColorPicker
                      value={color}
                      onChange={(color) => setColor(color.rgba)}
                    />
                    <Spacing size="100" />
                  </Section>
                </Popover>
              </OverlayPositioner>
            </Stack>
          </Section>
        </Bar>
      )
    }

    return (
      <div className="sb-plugin-window sb-plugin-window-height-480 sb-plugin-window-width-380 sb-plugin-window-center">
        <ScrollContext>
          <TabContext defaultValue="tab-1">
            <TopBar />

            <TabPanel value="tab-1" fullHeight>
              <ScrollContainer>
                <Section variant="stacked">
                  <Stack direction="row" spacing="200" y="center">
                    <Text variant="heading">This is demo</Text>
                    <Badge intentModifiers="success">New!</Badge>
                  </Stack>
                  <Spacing size="100" />
                  <Text>
                    A preview of what the plugin interface might look like when
                    it is put together using the components from this library.
                    The goal is to give you a sense of how the different pieces
                    fit, behave, and feel when combined into a working layout,
                    rather than showing each component in isolation. It
                    demonstrates the intended look and consistency of the
                    interface once assembled into a real plugin environment.
                  </Text>
                </Section>
                <Divider />
                <Section padding={{ right: "200" }}>
                  <Stack direction="row" spacing="200">
                    <Text variant="heading" size="small" fullWidth>
                      To-do list
                    </Text>
                    <Stack direction="row" spacing="200">
                      <Select
                        options={[
                          { label: "Incomplete", value: "incomplete" },
                          { label: "Completed", value: "completed" },
                        ]}
                        value={"incomplete"}
                      />
                      <SegmentedControl
                        options={[
                          {
                            title: "List",
                            value: "list",
                            icon: viewListGlyph,
                          },
                          {
                            title: "Grid",
                            value: "grid",
                            icon: viewGridGlyph,
                          },
                        ]}
                        defaultValue={"list"}
                      />
                    </Stack>
                  </Stack>
                </Section>
                <ListContext
                  items={items}
                  selectedItems={selectedItems}
                  selectionMode="multi"
                  onItemsChange={(change) => {
                    setItems(change.items as sampleItemsPlainType[])
                  }}
                  onSelectionChange={(change) => {
                    setSelectedItems(change.selectedItems)
                  }}
                >
                  <ListContainer>
                    {items.map((item) => {
                      return (
                        <ListItem
                          id={item.id}
                          draggable={true}
                          selectable={true}
                        >
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

            <TabPanel value="tab-2" fullHeight>
              <Stack fullHeight y="center" x="center" spacing="200">
                <Spinner />
                <Text intentModifiers="secondary">
                  This tab will never load. It's a demo.
                </Text>
              </Stack>
            </TabPanel>
          </TabContext>
        </ScrollContext>
        <WindowResizer
          minWidth={380}
          minHeight={480}
          maxWidth={800}
          maxHeight={600}
          onResize={() => {}}
        />
      </div>
    )
  },
}
