import type { Meta, StoryObj } from "@storybook/preact"

import { HorizontalScrollStory } from "./stories/HorizontalScroll.story"

import { TabContext, TabPanel, Tab, Section, Text } from "../../index"

import { TabList } from "./TabList"

const meta: Meta<typeof TabList> = {
  title: "Components/TabList",
  component: TabList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A wrapper component for aligning a list of <a href='/docs/components-tab--docs'>`<Tab/>`</a> components.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    children: {
      control: { disable: true },
      description: "<strong>*</strong>",
      table: {
        type: {
          summary: "preact.ComponentChildren",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof TabList>

export const Demo: Story = {
  tags: ["!autodocs"],
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<TabContext defaultValue="tab-1">
  <TabList {...args}>
    <Tab value="tab-1">Tab 1</Tab>
    <Tab value="tab-2">Tab 2</Tab>
    <Tab value="tab-3">Tab 3</Tab>
  </TabList>
  <TabPanel value="tab-1">Tab 1 Panel</TabPanel>
  <TabPanel value="tab-2">Tab 2 Panel</TabPanel>
  <TabPanel value="tab-3">Tab 3 Panel</TabPanel>
</TabContext>
`,
      },
    },
  },
  args: {
    className: "sb-container-inset",
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <TabContext defaultValue="tab-1">
        <Section>
          <TabList {...args}>
            <Tab value="tab-1">Tab 1</Tab>
            <Tab value="tab-2">Tab 2</Tab>
            <Tab value="tab-3">Tab 3</Tab>
          </TabList>
        </Section>
      </TabContext>
    </div>
  ),
}

export const HorizontalScroll = HorizontalScrollStory
