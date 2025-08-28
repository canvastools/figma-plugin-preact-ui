import type { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"
import { useState } from "preact/hooks"

import { TabContext } from "./TabContext"
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
          summary: "JSX.Element",
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
          summary: "(args: {value: string}) => void",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof TabContext>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    onChange: fn(),
  },
  render: (args: any) => (
    <TabContext defaultValue="tab-1" onChange={args.onChange}>
      <TabList>
        <Tab value="tab-1">Tab 1</Tab>
        <Tab value="tab-2">Tab 2</Tab>
        <Tab value="tab-3">Tab 3</Tab>
      </TabList>
      <br />
      <TabPanel value="tab-1">Tab 1 Panel</TabPanel>
      <TabPanel value="tab-2">Tab 2 Panel</TabPanel>
      <TabPanel value="tab-3">Tab 3 Panel</TabPanel>
    </TabContext>
  ),
}

export const Uncontrolled: Story = {
  render: () => {
    return (
      <TabContext defaultValue="tab-1">
        <TabList>
          <Tab value="tab-1">First Tab</Tab>
          <Tab value="tab-2">Second Tab</Tab>
          <Tab value="tab-3">Third Tab</Tab>
        </TabList>
        <br />
        <TabPanel value="tab-1">Tab 1 Panel</TabPanel>
        <TabPanel value="tab-2">Tab 2 Panel</TabPanel>
        <TabPanel value="tab-3">Tab 3 Panel</TabPanel>
      </TabContext>
    )
  },
}

export const Controlled: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("tab-2")

    return (
      <TabContext
        value={activeTab}
        onChange={(args) => {
          setActiveTab(args.value)
        }}
      >
        <TabList>
          <Tab value="tab-1">First Tab</Tab>
          <Tab value="tab-2">Second Tab</Tab>
          <Tab value="tab-3">Third Tab</Tab>
        </TabList>
        <br />
        <TabPanel value="tab-1">Tab 1 Panel</TabPanel>
        <TabPanel value="tab-2">Tab 2 Panel</TabPanel>
        <TabPanel value="tab-3">Tab 3 Panel</TabPanel>
      </TabContext>
    )
  },
}
