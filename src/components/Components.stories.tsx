import { Meta, StoryObj } from "@storybook/preact"
import { useState } from "preact/hooks"

import { Shape as AvatarShape } from "./Avatar/Avatar.stories"
import { Prefix as BadgePrefix } from "./Badge/Badge.stories"
import { Prefix as ButtonPrefix } from "./Button/Button.stories"
import { Context as ButtonIconContext } from "./ButtonIcon/ButtonIcon.stories"
import { Context as ButtonIconToggleContext } from "./ButtonIconToggle/ButtonIconToggle.stories"
import { Checked as CheckboxChecked } from "./Checkbox/Checkbox.stories"
import { Variant as DividerVariant } from "./Divider/Divider.stories"
import { Glyphs as IconGlyphs } from "./Icon/Icon.stories"
import { Prefix as InputPrefix } from "./Input/Input.stories"
import { Demo as ListItemDemo } from "./ListItem/ListItem.stories"
import { Demo as SectionDemo } from "./Section/Section.stories"
import { Demo as SpinnerDemo } from "./Spinner/Spinner.stories"
import { Position as StickyBarPosition } from "./StickyBar/StickyBar.stories"
import { Demo as TabDemo } from "./Tab/Tab.stories"
import { Size as TextSize } from "./Text/Text.stories"

import {
  Avatar,
  Badge,
  Button,
  Input,
  ButtonIcon,
  Checkbox,
  Tab,
  TabContext,
  TabList,
  TabPanel,
  Icon,
  Text,
  Section,
  Divider,
  Spinner,
  ListContext,
  ListContainer,
  ListItem,
  StickyBar,
  type ListItemData,
} from "../"

const meta: Meta = {
  title: "Overview/Components",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        component: `Getting started: https://github.com/canvastools/figma-plugin-preact-ui/blob/main/README.md<br/><br/>
        Preview all components ans some of their variants 👇`,
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
    content: "Design components",
  },
  { id: "2", content: "Develop a library" },
  { id: "3", content: "Share to the community!" },
]

export const _1: Story = {
  tags: ["!autodocs"],
  render: () => {
    const [items, setItems] = useState(sampleItemsPlain)
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    return (
      <div
        style={{
          border: "1px solid rgba(0,0,0,0.1",
          maxWidth: 380,
          height: 480,
          position: "relative",
          display: "flex",
          flexFlow: "column nowrap",
        }}
      >
        <TabContext defaultValue="tab-1">
          <StickyBar>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--pui-spacing-400)",
              }}
            >
              <TabList>
                <Tab value="tab-1">Home</Tab>
                <Tab value="tab-2">Templates</Tab>
              </TabList>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--pui-spacing-200)",
                }}
              >
                <ButtonIcon ghost>
                  <Icon glyph="help" variant="scaled" />
                </ButtonIcon>
                <Avatar imageSrc="https://thispersondoesnotexist.com/">
                  A
                </Avatar>
              </div>
            </div>
          </StickyBar>

          <TabPanel value="tab-1" fullHeight>
            <div style={{ flex: 1 }}>
              <Section>
                <div
                  style={{
                    display: "flex",
                    flexFlow: "column nowrap",
                    gap: "var(--pui-spacing-100)",
                    paddingTop: "var(--pui-spacing-200)",
                  }}
                >
                  <Badge context="brand">New!</Badge>
                  <Text variant="heading">This is demo</Text>
                  <Text>
                    This is a preview of what the plugin interface might look
                    like when assembled using components from the library.
                  </Text>
                </div>
              </Section>
              <Divider />
              <Section>
                <Text variant="heading" size="small">
                  To-do list
                </Text>
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
                      <ListItem id={item.id} draggable={true} selectable={true}>
                        <div
                          style={{
                            display: "flex",
                            gap: "var(--pui-spacing-100)",
                          }}
                        >
                          <Checkbox />
                          <Text
                            variant="body"
                            context="neutral"
                            contextModifiers="default"
                          >
                            {item.content}
                          </Text>
                        </div>
                      </ListItem>
                    )
                  })}
                </ListContainer>
              </ListContext>
            </div>
            <StickyBar position="bottom">
              <div
                style={{
                  display: "flex",
                  flexFlow: "row nowrap",
                  gap: "var(--pui-spacing-200)",
                }}
              >
                <Input placeholder="Type a new to-do" />
                <Button context="brand">Add</Button>
              </div>
            </StickyBar>
          </TabPanel>

          <TabPanel value="tab-2">
            <div
              style={{
                display: "flex",
                flexFlow: "column nowrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "var(--pui-spacing-200)",
                paddingTop: 168,
              }}
            >
              <Spinner />
              <Text context="neutral" contextModifiers="secondary">
                This tab will never load. It's a demo.
              </Text>
            </div>
          </TabPanel>
        </TabContext>
      </div>
    )
  },
}

export const _Avatar = AvatarShape
export const _Badge = BadgePrefix
export const _Button = ButtonPrefix
export const _ButtonIcon = ButtonIconContext
export const _ButtonIconToggle = ButtonIconToggleContext
export const _Checkbox = CheckboxChecked
export const _Divider = DividerVariant
export const _Icon = IconGlyphs
export const _Input = InputPrefix

ListItemDemo.tags = []
export const _List = ListItemDemo

export const _Section = SectionDemo
export const _Spinner = SpinnerDemo
export const _StickyBar = StickyBarPosition

TabDemo.tags = []
export const _Tab = TabDemo

export const _Text = TextSize
