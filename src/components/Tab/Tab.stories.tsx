import type { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"
import { useState } from "preact/hooks"

import { Tab } from "./Tab"

import { TabContext } from "../../index"
import { TabList } from "../../index"
import { TabPanel } from "../../index"
import { Badge } from "../../index"
import { Icon } from "../../index"
import { Section } from "../../index"
import { Text } from "../../index"
import { glyphs } from "../../index"

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
      description: "Value of the tab.",
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "single"],
      defaultValue: { summary: "default" },
    },
    prefix: {
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
      description: "Element inserted before children.",
      control: { disable: true },
    },
    suffix: {
      table: {
        type: {
          summary: "JSX.Element",
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
      description: "Callback when the tab is clicked. Returns its value.",
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
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    // @ts-expect-error: Storybook types hack
    if (args.variant === "default") {
      return (
        <div className="sb-column sb-width-full">
          <TabContext defaultValue="tab-1">
            <Section>
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
            </Section>
            <Section>
              <TabPanel value="tab-1">
                <Text>Tab 1 Panel</Text>
              </TabPanel>
              <TabPanel value="tab-2">
                <Text>Tab 2 Panel</Text>
              </TabPanel>
              <TabPanel value="tab-3">
                <Text>Tab 3 Panel</Text>
              </TabPanel>
            </Section>
          </TabContext>
        </div>
      )
    } else {
      return (
        <div className="sb-column sb-width-full">
          <TabContext value="tab-1">
            <Section>
              <TabList>
                <Tab {...args} value="tab-1" variant="single">
                  Single
                </Tab>
              </TabList>
            </Section>
          </TabContext>
        </div>
      )
    }
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
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <TabContext defaultValue="tab-1">
        <Section>
          <TabList>
            <Tab variant="default" value="tab-1">
              First Tab
            </Tab>
            <Tab variant="default" value="tab-2">
              Second Tab
            </Tab>
          </TabList>
        </Section>
      </TabContext>
      <TabContext value="tab-1">
        <Section>
          <TabList>
            <Tab variant="single" value="tab-1">
              Single
            </Tab>
          </TabList>
        </Section>
      </TabContext>
    </div>
  ),
}

export const Prefix: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const [activeTab, setActiveTab] = useState("tab-1")

    return (
      <div className="sb-column sb-width-full">
        <TabContext
          value={activeTab}
          onChange={(args) => {
            setActiveTab(args.value)
          }}
        >
          <Section>
            <TabList>
              <Tab
                variant="default"
                value="tab-1"
                prefix={
                  <Icon
                    glyph={glyphs.settings}
                    variant="scaled"
                    intent="neutral"
                    intentModifiers="default"
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
                    glyph={glyphs.search}
                    variant="scaled"
                    intent="neutral"
                    intentModifiers="default"
                    interactive
                  />
                }
              >
                Second Tab
              </Tab>
            </TabList>
          </Section>
        </TabContext>

        <TabContext defaultValue="tab-1">
          <Section>
            <TabList>
              <Tab
                variant="single"
                value="tab-1"
                prefix={
                  <Icon
                    glyph={glyphs.settings}
                    variant="scaled"
                    intent="neutral"
                    intentModifiers="default"
                  />
                }
              >
                Single
              </Tab>
            </TabList>
          </Section>
        </TabContext>
      </div>
    )
  },
}

export const Suffix: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const [activeTab, setActiveTab] = useState("tab-1")

    return (
      <div className="sb-column sb-width-full">
        <TabContext
          value={activeTab}
          onChange={(args) => {
            setActiveTab(args.value)
          }}
        >
          <Section>
            <TabList>
              <Tab
                variant="default"
                value="tab-1"
                suffix={
                  <div style={{ paddingLeft: "var(--pui-spacing-100)" }}>
                    <Badge
                      intent={activeTab === "tab-1" ? "neutral" : "brand"}
                      intentModifiers="default"
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
                      intent={activeTab === "tab-2" ? "neutral" : "brand"}
                      intentModifiers="default"
                    >
                      2
                    </Badge>
                  </div>
                }
              >
                Second Tab
              </Tab>
            </TabList>
          </Section>
        </TabContext>

        <TabContext defaultValue="tab-1">
          <Section>
            <TabList>
              <Tab
                variant="single"
                value="tab-1"
                suffix={
                  <div style={{ paddingLeft: "var(--pui-spacing-100)" }}>
                    <Badge intent="neutral" intentModifiers="default">
                      1
                    </Badge>
                  </div>
                }
              >
                Single
              </Tab>
            </TabList>
          </Section>
        </TabContext>
      </div>
    )
  },
}
