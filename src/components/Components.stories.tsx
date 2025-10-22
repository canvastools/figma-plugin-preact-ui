import { Meta, StoryObj } from "@storybook/preact"
import { useRef, useState } from "preact/hooks"

import {
  settings as settingsGlyph,
  close as closeGlyph,
  viewList as viewListGlyph,
  viewGrid as viewGridGlyph,
} from "../index"

import { Shape as AvatarShape } from "./Avatar/Avatar.stories"
import { Prefix as BadgePrefix } from "./Badge/Badge.stories"
import { StickySimulation as StickyBarPosition } from "./Bar/Bar.stories"
import { Prefix as ButtonPrefix } from "./Button/Button.stories"
import { Intent as ButtonIconIntent } from "./ButtonIcon/ButtonIcon.stories"
import { Intent as ButtonIconToggleIntent } from "./ButtonIconToggle/ButtonIconToggle.stories"
import { Intent as CheckboxIntent } from "./Checkbox/Checkbox.stories"
import { Demo as ColorPickerDemo } from "./ColorPicker/ColorPicker.stories"
import { Variant as DividerVariant } from "./Divider/Divider.stories"
import { Glyphs as IconGlyphs } from "./Icon/Icon.stories"
import { Prefix as InputPrefix } from "./Input/Input.stories"
import { Demo as MenuDemo } from "./MenuContainer/MenuContainer.stories"
import { Suffix as MenuItemSuffix } from "./MenuItem/MenuItem.stories"
import { Suffix as MenuItemOptionSuffix } from "./MenuItemOption/MenuItemOption.stories"
import { Size as PopoverSize } from "./Popover/Popover.stories"
import { Demo as ScrollContextDemo } from "./ScrollContext/ScrollContext.stories"
import { Stacked as SectionStacked } from "./Section/Section.stories"
import { Demo as SegmentedControlDemo } from "./SegmentedControl/SegmentedControl.stories"
import { Uncontrolled as SelectDemo } from "./Select/Select.stories"
import { Demo as SpacerDemo } from "./Spacing/Spacing.stories"
import { Demo as SpinnerDemo } from "./Spinner/Spinner.stories"
import { Demo as StackDemo } from "./Stack/Stack.stories"
import { Demo as TabDemo } from "./Tab/Tab.stories"
import { Size as TextSize } from "./Text/Text.stories"
import { Arrow as TooltipDemo } from "./OverlayPositioner/OverlayPositioner.stories"
import { Demo as WindowResizerDemo } from "./WindowResizer/WindowResizer.stories"

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
  MenuDivider,
  MenuItem,
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
        component:
          "Getting started: https://github.com/canvastools/figma-plugin-preact-ui/blob/main/README.md",
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
  tags: ["!autodocs"],
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

                <OverlayPositioner
                  anchorRef={anchorRefMenu}
                  placement="over"
                  open={openMenu}
                  onClose={() => setOpenMenu(false)}
                >
                  <MenuContainer>
                    <MenuItem onClick={() => setOpenMenu(false)}>
                      Settings
                    </MenuItem>
                    <MenuItem onClick={() => setOpenMenu(false)}>Help</MenuItem>
                    <MenuItem onClick={() => setOpenMenu(false)}>
                      Logout
                    </MenuItem>
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

export const _Avatar = AvatarShape
export const _Badge = BadgePrefix
export const _Bar = StickyBarPosition
export const _Button = ButtonPrefix
export const _ButtonIcon = ButtonIconIntent
export const _ButtonIconToggle = ButtonIconToggleIntent
export const _Checkbox = CheckboxIntent
ColorPickerDemo.tags = []
export const _ColorPicker = ColorPickerDemo
export const _Divider = DividerVariant
export const _Icon = IconGlyphs
export const _Input = InputPrefix
MenuDemo.tags = []
export const _Menu = MenuDemo
export const _MenuItem = MenuItemSuffix
export const _MenuItemOption = MenuItemOptionSuffix
export const _Popover = PopoverSize
export const _ScrollContext = ScrollContextDemo
export const _Section = SectionStacked
SegmentedControlDemo.tags = []
export const _SegmentedControl = SegmentedControlDemo
export const _Select = SelectDemo
export const _Spacing = SpacerDemo
export const _Spinner = SpinnerDemo
export const _Stack = StackDemo
TabDemo.tags = []
export const _Tab = TabDemo
export const _Text = TextSize
export const _Tooltip = TooltipDemo
export const _WindowResizer = WindowResizerDemo
