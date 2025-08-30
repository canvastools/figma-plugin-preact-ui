import type { Meta, StoryObj } from "@storybook/preact"

import { TabContext } from "../TabContext/TabContext"
import { TabPanel } from "./TabPanel"
import { TabList } from "../TabList/TabList"
import { Tab } from "../Tab/Tab"

import { Section } from "../Section/Section"
import { Text } from "../Text/Text"

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
      control: { type: "text" },
    },
    value: {
      table: {
        type: {
          summary: "string",
        },
      },
      description: "Value of the tab panel for controlled/uncontrolled mode.",
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
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  args: {
    className: "sb-container",
    fullHeight: false,
  },
  render: (args) => (
    <div className="sb-column sb-width-full sb-height-300">
      <TabContext defaultValue="tab-1">
        <Section>
          <TabList>
            <Tab value="tab-1">Tab 1</Tab>
            <Tab value="tab-2">Tab 2</Tab>
            <Tab value="tab-3">Tab 3</Tab>
          </TabList>
        </Section>
        <Section fullHeight>
          <TabPanel {...args} value="tab-1">
            <Text>Tab 1 Panel</Text>
          </TabPanel>
          <TabPanel {...args} value="tab-2">
            <Text>Tab 2 Panel</Text>
          </TabPanel>
          <TabPanel {...args} value="tab-3">
            <Text>Tab 3 Panel</Text>
          </TabPanel>
        </Section>
      </TabContext>
    </div>
  ),
}
