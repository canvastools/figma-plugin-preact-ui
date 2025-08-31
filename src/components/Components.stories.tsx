import { Meta, StoryObj } from "@storybook/preact"
import { useState } from "preact/hooks"

import { Shape as AvatarShape } from "./Avatar/Avatar.stories"
import { Prefix as BadgePrefix } from "./Badge/Badge.stories"
import { StickySimulation as StickyBarPosition } from "./Bar/Bar.stories"
import { Prefix as ButtonPrefix } from "./Button/Button.stories"
import { Intent as ButtonIconIntent } from "./ButtonIcon/ButtonIcon.stories"
import { Intent as ButtonIconToggleIntent } from "./ButtonIconToggle/ButtonIconToggle.stories"
import { Checked as CheckboxChecked } from "./Checkbox/Checkbox.stories"
import { Variant as DividerVariant } from "./Divider/Divider.stories"
import { Glyphs as IconGlyphs } from "./Icon/Icon.stories"
import { Prefix as InputPrefix } from "./Input/Input.stories"
import { Demo as ScrollContextDemo } from "./ScrollContext/ScrollContext.stories"
import { Demo as SectionDemo } from "./Section/Section.stories"
import { Demo as SpacerDemo } from "./Spacing/Spacing.stories"
import { Demo as SpinnerDemo } from "./Spinner/Spinner.stories"
import { Demo as StackDemo } from "./Stack/Stack.stories"
import { Demo as TabDemo } from "./Tab/Tab.stories"
import { Size as TextSize } from "./Text/Text.stories"
import { Demo as WindowResizerDemo } from "./WindowResizer/WindowResizer.stories"

import {
  Avatar,
  Badge,
  Bar,
  Button,
  ButtonIcon,
  ButtonIconToggle,
  Checkbox,
  Divider,
  Icon,
  Input,
  ListContainer,
  ListContext,
  ListItem,
  ScrollContainer,
  ScrollContext,
  Section,
  Spacing,
  Spinner,
  Stack,
  Tab,
  TabContext,
  TabList,
  TabPanel,
  Text,
  WindowResizer,
} from "../"

import type { ListItemData } from "../"

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
    const [view, setView] = useState<"viewGrid" | "viewList">("viewList")

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
                <ButtonIcon ghost>
                  <Icon glyph="settings" variant="scaled" />
                </ButtonIcon>
                <Avatar>M</Avatar>
              </Stack>
            </Stack>
          </Section>
        </Bar>
      )
    }

    const BottomBar = () => {
      const { isAtBottom } = useScrollContext()

      return (
        <Bar borderTop={!isAtBottom}>
          <Section>
            <Stack direction="row" spacing="200">
              <Input placeholder="Type a new to-do" />
              <Button intent="brand">Add</Button>
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
                <Section padding={{ bottom: "400" }}>
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
                    <Stack direction="row" spacing="100">
                      <ButtonIconToggle
                        ghost
                        onChange={() => setView("viewList")}
                        selected={view === "viewList"}
                      >
                        <Icon glyph="viewList" />
                      </ButtonIconToggle>
                      <ButtonIconToggle
                        ghost
                        onChange={() => setView("viewGrid")}
                        selected={view === "viewGrid"}
                      >
                        <Icon glyph="viewGrid" />
                      </ButtonIconToggle>
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
export const _Checkbox = CheckboxChecked
export const _Divider = DividerVariant
export const _Icon = IconGlyphs
export const _Input = InputPrefix
export const _ScrollContext = ScrollContextDemo
export const _Section = SectionDemo
export const _Spacing = SpacerDemo
export const _Spinner = SpinnerDemo
export const _Stack = StackDemo
TabDemo.tags = []
export const _Tab = TabDemo
export const _Text = TextSize
export const _WindowResizer = WindowResizerDemo
