import type { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"
import { useState } from "preact/hooks"

import { TabContext } from "../TabContext/TabContext"
import { TabPanel } from "./TabPanel"
import type { TabPanelProps } from "./TabPanel.types"
import { TabList } from "../TabList/TabList"
import { Tab } from "../Tab/Tab"

const meta: Meta<typeof TabPanel> = {
  title: "Components/TabPanel",
  component: TabPanel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A wrapper component that displays tab's content. Always used within &lt;TabContext/&gt;.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "string" },
    },
    value: {
      table: {
        type: {
          summary: "string",
        },
      },
      description: "Value of the tab panel for any mode.",
    },
    children: {
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
      control: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<TabPanelProps>

export const Demo: Story = {
  render: (args) => (
    <TabContext defaultValue="tab-1">
      <TabList>
        <Tab {...args} value="tab-1">
          Tab 1
        </Tab>
        <Tab {...args} value="tab-2">
          Tab 2
        </Tab>
        <Tab {...args} value="tab-3">
          Tab 3
        </Tab>
      </TabList>
      <br />
      <TabPanel value="tab-1">Tab 1 Content</TabPanel>
      <TabPanel value="tab-2">Tab 2 Content</TabPanel>
      <TabPanel value="tab-3">Tab 3 Content</TabPanel>
    </TabContext>
  ),
}
