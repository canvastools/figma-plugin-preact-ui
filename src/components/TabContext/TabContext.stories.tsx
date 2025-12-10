import type { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"
import { useState } from "preact/hooks"

import { TabContext } from "./TabContext"

import { TabPanel } from "../../index"
import { TabList } from "../../index"
import { Tab } from "../../index"
import { Text } from "../../index"
import { Section } from "../../index"
import { Button } from "../../index"
import { Stack } from "../../index"

const meta: Meta<typeof TabContext> = {
  title: "Components/TabContext",
  component: TabContext,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A context provider that manages tab states.",
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
      defaultValue: { summary: "" },
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
      description: "Callback when the tab is changed. Returns the new value.",
      table: {
        type: {
          summary: "(args: {value: string}) => void",
        },
      },
    },
    useTabContext: {
      table: {
        type: {
          summary: `Hook`,
        },
      },
      description: `Use this hook inside a child component to access the context. <br/>
        <pre>
        interface TabContextValue {
          value: string
          onChange: (value: string) => void
          setValue: (value: string) => void
        }
        </pre>
        `,
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
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full sb-container">
      <TabContext {...args} defaultValue="tab-1">
        <Section>
          <TabList>
            <Tab value="tab-1">Tab 1</Tab>
            <Tab value="tab-2">Tab 2</Tab>
            <Tab value="tab-3">Tab 3</Tab>
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
  ),
}

export const Uncontrolled: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-full">
        <TabContext defaultValue="tab-1">
          <Section>
            <TabList>
              <Tab value="tab-1">First Tab</Tab>
              <Tab value="tab-2">Second Tab</Tab>
              <Tab value="tab-3">Third Tab</Tab>
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
  },
}

export const Controlled: Story = {
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
        <Section>
          <Stack direction="row" spacing={400} y="center">
            <Text>Active Tab: {activeTab}</Text>
            <Button onClick={() => setActiveTab("tab-1")}>
              Set to First Tab
            </Button>
            <Button onClick={() => setActiveTab("tab-2")}>
              Set to Second Tab
            </Button>
            <Button onClick={() => setActiveTab("tab-3")}>
              Set to Third Tab
            </Button>
          </Stack>
        </Section>
        <TabContext
          value={activeTab}
          onChange={(args) => {
            setActiveTab(args.value)
          }}
        >
          <Section>
            <TabList>
              <Tab value="tab-1">First Tab</Tab>
              <Tab value="tab-2">Second Tab</Tab>
              <Tab value="tab-3">Third Tab</Tab>
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
  },
}
