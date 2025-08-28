import type { Meta, StoryObj } from "@storybook/preact"

import { TabContext } from "../TabContext/TabContext"
import { TabPanel } from "./TabPanel"
import { TabList } from "../TabList/TabList"
import { Tab } from "../Tab/Tab"
import { FullWidth } from "components/Button/Button.stories"

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
    fullHeight: {
      control: { type: "boolean" },
      description:
        "Set the height to 100% to occupy the entire height in flex containers.",
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
    fullHeight: false,
  },
  render: (args) => (
    <div
      className="sb-column sb-gap-16 sb-container"
      style={{ width: 300, height: 300 }}
    >
      <TabContext defaultValue="tab-1">
        <TabList>
          <Tab value="tab-1">Tab 1</Tab>
          <Tab value="tab-2">Tab 2</Tab>
          <Tab value="tab-3">Tab 3</Tab>
        </TabList>
        <TabPanel {...args} value="tab-1">
          <div style={{ backgroundColor: "yellow", height: "100%" }}>
            Tab 1 Panel
          </div>
        </TabPanel>
        <TabPanel {...args} value="tab-2">
          <div style={{ backgroundColor: "yellow", height: "100%" }}>
            Tab 2 Panel
          </div>
        </TabPanel>
        <TabPanel {...args} value="tab-3">
          <div style={{ backgroundColor: "yellow", height: "100%" }}>
            Tab 3 Panel
          </div>
        </TabPanel>
      </TabContext>
    </div>
  ),
}
