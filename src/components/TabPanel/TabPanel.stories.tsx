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
    className: {
      control: { type: "text" },
    },
    value: {
      control: { disable: true },
      description: "<strong>*</strong>Value associated with the tab panel.",
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
<TabContext defaultValue="tab-1">
  <TabList>
    <Tab value="tab-1">Tab 1</Tab>
    <Tab value="tab-2">Tab 2</Tab>
    <Tab value="tab-3">Tab 3</Tab>
  </TabList>
  <TabPanel value="tab-1" {...args}>{children}</TabPanel>
  <TabPanel value="tab-2" {...args}>{children}</TabPanel>
  <TabPanel value="tab-3" {...args}>{children}</TabPanel>
</TabContext>
`,
      },
    },
  },
  args: {
    className: "sb-container",
    fullHeight: false,
  },
  render: (args) => (
    <div className="sb-column sb-width-full sb-height-300">
      <TabContext defaultValue="tab-1">
        <Section>
          <TabList>
            <Tab value="tab-1">Tab 1</Tab>
            <Tab value="tab-2">Tab 2</Tab>
            <Tab value="tab-3">Tab 3</Tab>
          </TabList>
        </Section>
        <TabPanel {...args} value="tab-1">
          <Text>Tab 1 Panel</Text>
        </TabPanel>
        <TabPanel {...args} value="tab-2">
          <Text>Tab 2 Panel</Text>
        </TabPanel>
        <TabPanel {...args} value="tab-3">
          <Text>Tab 3 Panel</Text>
        </TabPanel>
      </TabContext>
    </div>
  ),
}
