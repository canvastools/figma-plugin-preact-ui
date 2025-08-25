import type { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"
import { useState } from "preact/hooks"

import { TabContext } from "./TabContext"
import type { TabContextProps } from "./TabContext.types"
import { TabPanel } from "../TabPanel/TabPanel"
import { TabList } from "../TabList/TabList"
import { Tab } from "../Tab/Tab"

const meta: Meta<typeof TabContext> = {
  title: "Components/TabContext",
  component: TabContext,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A wrapper component that manages tab states.",
      },
    },
  },
  argTypes: {
    defaultValue: {
      table: {
        type: {
          summary: "string",
        },
      },
      control: { disable: true },
      description: "Initial value for uncontrolled mode.",
    },
    value: {
      table: {
        type: {
          summary: "string",
        },
      },
      control: { disable: true },
      description: "Value for controlled mode.",
    },
    children: {
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
      control: { disable: true },
      description: "Usually &lt;Tab&gt; and &lt;TabPanel&gt; components.",
    },
    onChange: {
      action: "changed",
      description:
        "Callback function that is called when the tab is changed. Returns the new value.",
      table: {
        type: {
          summary: "([string]) => void",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<TabContextProps>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    onChange: fn(),
  },
  render: (args) => (
    <TabContext defaultValue="tab-1" onChange={args.onChange}>
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

export const Uncontrolled: Story = {
  tags: ["!dev"],
  render: () => {
    return (
      <TabContext defaultValue="tab-1">
        <TabList>
          <Tab value="tab-1">First Tab</Tab>
          <Tab value="tab-2">Second Tab</Tab>
          <Tab value="tab-3">Third Tab</Tab>
        </TabList>
        <br />
        <TabPanel value="tab-1">Tab 1 Content</TabPanel>
        <TabPanel value="tab-2">Tab 2 Content</TabPanel>
        <TabPanel value="tab-3">Tab 3 Content</TabPanel>
      </TabContext>
    )
  },
}

export const Controlled: Story = {
  tags: ["!dev"],
  render: () => {
    const [activeTab, setActiveTab] = useState("tab-2")

    return (
      <TabContext
        value={activeTab}
        onChange={(value) => {
          setActiveTab(value)
        }}
      >
        <TabList>
          <Tab value="tab-1">First Tab</Tab>
          <Tab value="tab-2">Second Tab</Tab>
          <Tab value="tab-3">Third Tab</Tab>
        </TabList>
        <br />
        <TabPanel value="tab-1">Tab 1 Content</TabPanel>
        <TabPanel value="tab-2">Tab 2 Content</TabPanel>
        <TabPanel value="tab-3">Tab 3 Content</TabPanel>
      </TabContext>
    )
  },
}
