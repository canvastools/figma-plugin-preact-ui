import type { Meta, StoryObj } from "@storybook/preact"

import { TabPanel } from "./TabPanel"

import { TabContext, TabList, Tab, Section, Text } from "../../index"

const meta: Meta<typeof TabPanel> = {
  title: "Components/TabPanel",
  component: TabPanel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The component is always used within <a href='/docs/components-tabcontext--docs'>`<TabContext/>`</a>.",
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
    tabId: {
      control: { disable: true },
      description: "<strong>*</strong>",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    fullHeight: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
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

type Story = StoryObj<typeof TabPanel>

export const Demo: Story = {
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<TabContext defaultActiveId="tab-1">
  <TabList>
    <Tab id="tab-1">Tab 1</Tab>
    <Tab id="tab-2">Tab 2</Tab>
    <Tab id="tab-3">Tab 3</Tab>
  </TabList>
    <TabPanel tabId="tab-1" {...args}>{children}</TabPanel>
  <TabPanel tabId="tab-2" {...args}>{children}</TabPanel>
  <TabPanel tabId="tab-3" {...args}>{children}</TabPanel>
</TabContext>
`,
      },
    },
  },
  args: {
    id: undefined,
    className: "sb-container",
    fullHeight: false,
  },
  render: (args) => (
    <div className="sb-column sb-width-full sb-height-300">
      <TabContext defaultActiveId="tab-1">
        <Section>
          <TabList>
            <Tab id="tab-1">Tab 1</Tab>
            <Tab id="tab-2">Tab 2</Tab>
            <Tab id="tab-3">Tab 3</Tab>
          </TabList>
        </Section>
        <Section>
          <TabPanel {...args} tabId="tab-1">
            <Text>Tab 1 Panel</Text>
          </TabPanel>
          <TabPanel {...args} tabId="tab-2">
            <Text>Tab 2 Panel</Text>
          </TabPanel>
          <TabPanel {...args} tabId="tab-3">
            <Text>Tab 3 Panel</Text>
          </TabPanel>
        </Section>
      </TabContext>
    </div>
  ),
}
