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
    id: {
      control: { type: "text" },
      table: {
        type: {
          summary: "string",
        },
      },
    },
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
<TabContext defaultActiveId="tab-1">

  <TabList {...args}>
    <Tab id="tab-1">Tab 1</Tab>
    <Tab id="tab-2">Tab 2</Tab>
    <Tab id="tab-3">Tab 3</Tab>
  </TabList>

  <TabPanel tabId="tab-1">Tab 1 Panel</TabPanel>
  <TabPanel tabId="tab-2">Tab 2 Panel</TabPanel>
  <TabPanel tabId="tab-3">Tab 3 Panel</TabPanel>

</TabContext>
`,
      },
    },
  },
  args: {
    id: undefined,
    className: "sb-container-inset",
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <TabContext defaultActiveId="tab-1">
        <Section>
          <TabList {...args}>
            <Tab id="tab-1">Tab 1</Tab>
            <Tab id="tab-2">Tab 2</Tab>
            <Tab id="tab-3">Tab 3</Tab>
          </TabList>
        </Section>
      </TabContext>
    </div>
  ),
}

export const HorizontalScroll = HorizontalScrollStory
