import type { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"
import { useState } from "preact/hooks"

import { Tab } from "./Tab"
import { TabContext } from "../TabContext/TabContext"
import { TabList } from "../TabList/TabList"
import { TabPanel } from "../TabPanel/TabPanel"
import { Badge } from "../Badge/Badge"
import { Icon } from "../Icon/Icon"

const meta: Meta<typeof Tab> = {
  title: "Components/Tab",
  component: Tab,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Always used within &lt;TabContext&gt;, optionally in combination with &lt;TabList&gt; and &lt;TabPanel&gt;",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    value: {
      control: { disable: true },
      table: {
        type: {
          summary: "string",
        },
      },
      description: "Value of the tab panel for any mode.",
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "single"],
      defaultValue: "default",
    },
    prefix: {
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
      description: "Element inserted before children.",
      control: { disable: true },
    },
    suffix: {
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
      description: "Element inserted after children.",
      control: { disable: true },
    },
    children: {
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
      control: { disable: true },
      description: "Usually a text content.",
    },
    onClick: {
      action: "clicked",
      description:
        "Callback function that is called when the tab is clicked. Returns its value.",
      table: {
        type: {
          summary: "(args: {event: MouseEvent; value: string}) => void",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tab>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    value: "tab-1",
    variant: "default",
    onClick: fn(),
  },
  render: (args: any) => {
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
            <Tab {...args} value="tab-3">
              Tab 3
            </Tab>
          </TabList>
          <br />
          <TabPanel value="tab-1">Tab 1 Panel</TabPanel>
          <TabPanel value="tab-2">Tab 2 Panel</TabPanel>
          <TabPanel value="tab-3">Tab 3 Panel</TabPanel>
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

export const Prefix: Story = {
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
          onChange={(args) => {
            setActiveTab(args.value)
          }}
        >
          <TabList>
            <Tab
              variant="default"
              value="tab-1"
              prefix={
                <Icon
                  glyph="settings"
                  variant="scaled"
                  context="neutral"
                  contextModifiers="default"
                  interactive
                />
              }
            >
              First Tab
            </Tab>
            <Tab
              variant="default"
              value="tab-2"
              prefix={
                <Icon
                  glyph="search"
                  variant="scaled"
                  context="neutral"
                  contextModifiers="default"
                  interactive
                />
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
              prefix={
                <Icon
                  glyph="settings"
                  variant="scaled"
                  context="neutral"
                  contextModifiers="default"
                />
              }
            >
              Single
            </Tab>
          </TabList>
        </TabContext>
      </div>
    )
  },
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
          onChange={(args) => {
            setActiveTab(args.value)
          }}
        >
          <TabList>
            <Tab
              variant="default"
              value="tab-1"
              suffix={
                <div style={{ paddingLeft: "var(--pui-spacing-100)" }}>
                  <Badge
                    context={activeTab === "tab-1" ? "neutral" : "brand"}
                    contextModifiers="default"
                  >
                    1
                  </Badge>
                </div>
              }
            >
              First Tab
            </Tab>
            <Tab
              variant="default"
              value="tab-2"
              suffix={
                <div style={{ paddingLeft: "var(--pui-spacing-100)" }}>
                  <Badge
                    context={activeTab === "tab-2" ? "neutral" : "brand"}
                    contextModifiers="default"
                  >
                    2
                  </Badge>
                </div>
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
              suffix={
                <div style={{ paddingLeft: "var(--pui-spacing-100)" }}>
                  <Badge context="neutral" contextModifiers="default">
                    1
                  </Badge>
                </div>
              }
            >
              Single
            </Tab>
          </TabList>
        </TabContext>
      </div>
    )
  },
}
