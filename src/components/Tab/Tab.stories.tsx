import type { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"
import { useState } from "preact/hooks"

import { Tab } from "./Tab"
import type { TabProps } from "./Tab.types"
import { TabContext } from "../TabContext/TabContext"
import { TabList } from "../TabList/TabList"
import { TabPanel } from "../TabPanel/TabPanel"
import { Badge } from "../Badge/Badge"

const meta: Meta<typeof Tab> = {
  title: "Components/Tab",
  component: Tab,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Always used within &lt;TabContext/&gt;, optionally in combination with &lt;TabList&gt; and &lt;TabPanel&gt;",
      },
    },
  },
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
    prefix: {
      control: { type: "text" },
    },
    suffix: {
      control: { type: "text" },
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
  tags: ["!autodocs"],
  args: {
    className: "",
    value: "tab-1",
    variant: "default",
    onClick: fn(),
  },
  render: (args) => {
    if (args.variant === "default") {
      return (
        <TabContext defaultValue="tab-1">
          <TabList>
            <Tab {...args} value="tab-1">
              Tab 1
            </Tab>
            <Tab {...args} value="tab-2">
              Tab 2
            </Tab>
          </TabList>
          <br />
          <TabPanel value="tab-1">Tab 1 Content</TabPanel>
          <TabPanel value="tab-2">Tab 2 Content</TabPanel>
        </TabContext>
      )
    } else {
      return (
        <TabContext value="tab-1">
          <TabList>
            <Tab {...args} value="tab-1" variant="single">
              Tab 1
            </Tab>
          </TabList>
        </TabContext>
      )
    }
  },
}

export const Uncontrolled: Story = {
  tags: ["!dev"],
  render: () => {
    return (
      <TabContext defaultValue="tab-1">
        <TabList>
          <Tab value="tab-1">First Tab</Tab>
          <Tab value="tab-2">Second Tab</Tab>
        </TabList>
        <br />
        <TabPanel value="tab-1">Tab 1 Content</TabPanel>
        <TabPanel value="tab-2">Tab 2 Content</TabPanel>
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

export const Variant: Story = {
  tags: ["!dev"],
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
      <TabContext defaultValue="tab-1">
        <TabList>
          <Tab variant="default" value="tab-1">
            First Tab
          </Tab>
          <Tab variant="default" value="tab-2">
            Seconda Tab
          </Tab>
        </TabList>
      </TabContext>
      <TabContext value="tab-1">
        <TabList>
          <Tab variant="single" value="tab-1">
            Single
          </Tab>
        </TabList>
      </TabContext>
    </div>
  ),
}

export const Suffix: Story = {
  tags: ["!dev"],
  parameters: {
    controls: { disable: true },
  },
  render: (args) => {
    const [activeTab, setActiveTab] = useState("tab-1")

    return (
      <div className="sb-column sb-gap-16">
        <TabContext
          defaultValue="tab-1"
          onChange={(value) => {
            setActiveTab(value)
          }}
        >
          <TabList>
            <Tab
              variant="default"
              value="tab-1"
              suffix={
                <Badge
                  context={activeTab === "tab-1" ? "neutral-brand" : "brand"}
                >
                  1
                </Badge>
              }
            >
              First Tab
            </Tab>
            <Tab
              variant="default"
              value="tab-2"
              suffix={
                <Badge
                  context={activeTab === "tab-2" ? "neutral-brand" : "brand"}
                >
                  2
                </Badge>
              }
            >
              Second Tab
            </Tab>
          </TabList>
        </TabContext>
        <TabContext defaultValue="tab-1">
          <TabList>
            <Tab
              variant="single"
              value="tab-1"
              suffix={<Badge context="neutral-brand">1</Badge>}
            >
              Single
            </Tab>
          </TabList>
        </TabContext>
      </div>
    )
  },
}
