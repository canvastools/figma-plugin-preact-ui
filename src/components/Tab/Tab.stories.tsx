import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"
import { useState } from "preact/hooks"

import { Tab } from "./Tab"
import type { TabProps } from "./Tab.types"

import { TabContext } from "../TabContext/TabContext"
import { TabList } from "../TabList/TabList"
import { TabPanel } from "../TabPanel/TabPanel"

const meta: Meta<TabProps> = {
  title: "Components/Navigation/Tab",
  component: Tab,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    value: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "single"],
    },
    children: {
      control: { type: "text" },
    },
    onClick: {
      action: "clicked",
    },
  },
}
export default meta
type Story = StoryObj<TabProps>

export const Demo: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Always used within &lt;TabContext/&gt;, optionally in combination with &lt;TabList&gt; and &lt;TabPanel&gt;",
      },
    },
  },
  args: {
    className: "",
    variant: "default",
    onClick: fn(),
  },
  render: (args) => {
    if (args.variant === "default") {
      const [activeTab, setActiveTab] = useState("tab-1")

      return (
        <TabContext value={activeTab} onChange={setActiveTab}>
          <TabList>
            <Tab {...args} value="tab-1" children="Tab 1" />
            <Tab {...args} value="tab-2" children="Tab 2" />
          </TabList>
          <br />
          <TabPanel value="tab-1" children="Tab 1 Content" />
          <TabPanel value="tab-2" children="Tab 2 Content" />
        </TabContext>
      )
    }

    return (
      <TabContext value={"tab-1"}>
        <TabList>
          <Tab {...args} value="tab-1" children="Tab 1" />
        </TabList>
        <br />
        <TabPanel value="tab-1" children="Tab 1 Content" />
      </TabContext>
    )
  },
}

export const Variant: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "The 'single' variant can essentially act as a heading in cases where tabs may replace the heading.",
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-gap-16">
      <TabContext value={"tab-1"}>
        <TabList>
          <Tab variant="default" value="tab-1" children="Tab 1" />
          <Tab variant="default" value="tab-2" children="Tab 2" />
        </TabList>
      </TabContext>
      <TabContext value={"tab-1"}>
        <TabList>
          <Tab variant="single" value="tab-1" children="Single" />
        </TabList>
      </TabContext>
    </div>
  ),
}
