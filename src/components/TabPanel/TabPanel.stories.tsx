import type { Meta, StoryObj } from "@storybook/preact"

import { TabContext } from "../TabContext/TabContext"
import { TabPanel } from "./TabPanel"
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
          summary: "JSX.Element",
        },
      },
      control: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof TabPanel>

export const Demo: Story = {
  args: {
    className: "",
  },
  render: (args) => (
    <TabContext defaultValue="tab-1">
      <TabList>
        <Tab value="tab-1">Tab 1</Tab>
        <Tab value="tab-2">Tab 2</Tab>
        <Tab value="tab-3">Tab 3</Tab>
      </TabList>
      <br />
      <TabPanel {...args} value="tab-1">
        Tab 1 Content
      </TabPanel>
      <TabPanel {...args} value="tab-2">
        Tab 2 Content
      </TabPanel>
      <TabPanel {...args} value="tab-3">
        Tab 3 Content
      </TabPanel>
    </TabContext>
  ),
}
