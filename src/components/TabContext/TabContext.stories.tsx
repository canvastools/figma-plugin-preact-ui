import type { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { ControlledStory } from "./stories/Controlled.story"
import { UncontrolledStory } from "./stories/Uncontrolled.story"

import { TabPanel, TabList, Tab, Text, Section } from "../../index"

import { TabContext } from "./TabContext"

const meta: Meta<typeof TabContext> = {
  title: "Components/TabContext",
  component: TabContext,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A context provider that manages states, focus, and keyboard navigation of Tab-related components.",
      },
    },
  },
  argTypes: {
    defaultActiveId: {
      control: { type: "text" },
      description: "Active tab ID for uncontrolled state.",
    },
    activeId: {
      control: { disable: true },
      description: "Active tab ID for controlled state.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    children: {
      control: { disable: true },
      description: "<strong>*</strong>",
      table: {
        type: {
          summary: "preact.ComponentChildren",
        },
      },
    },
    onTabChange: {
      table: {
        type: {
          summary: "(args) => void",
          detail: `
args: {
  id: string
}
`,
        },
      },
    },
    useTabContext: {
      description: "Hook to access the context.",
      table: {
        type: {
          summary: "Props",
          detail: `
{
  activeId: string
  onTabChange: (id: string) => void
  setActiveTab: (id: string) => void
  registerTab: (id: string, ref: HTMLButtonElement | null) => void
  setFocusedTab: (id: string | undefined) => void
}
`,
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
    defaultActiveId: "tab-1",
    onTabChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<TabContext defaultActiveId="tab-1" {...args}>

  <TabList>
    <Tab id="tab-1">Tab 1</Tab>
    <Tab id="tab-2">Tab 2</Tab>
    <Tab id="tab-3">Tab 3</Tab>
  </TabList>

  <TabPanel tabId="tab-1">Tab 1 Panel</TabPanel>
  <TabPanel tabId="tab-2">Tab 2 Panel</TabPanel>
  <TabPanel tabId="tab-3">Tab 3 Panel</TabPanel>
  
</TabContext>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <TabContext {...args} defaultActiveId="tab-1">
        <Section>
          <TabList>
            <Tab id="tab-1">Tab 1</Tab>
            <Tab id="tab-2">Tab 2</Tab>
            <Tab id="tab-3">Tab 3</Tab>
          </TabList>
        </Section>
        <Section>
          <TabPanel tabId="tab-1">
            <Text>Tab 1 Panel</Text>
          </TabPanel>
          <TabPanel tabId="tab-2">
            <Text>Tab 2 Panel</Text>
          </TabPanel>
          <TabPanel tabId="tab-3">
            <Text>Tab 3 Panel</Text>
          </TabPanel>
        </Section>
      </TabContext>
    </div>
  ),
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
