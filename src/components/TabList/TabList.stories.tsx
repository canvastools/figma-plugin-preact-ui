import type { Meta, StoryObj } from "@storybook/preact"

import { TabList } from "./TabList"

import { TabContext, TabPanel, Tab, Section, Text } from "../../index"

const meta: Meta<typeof TabList> = {
  title: "Components/TabList",
  component: TabList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A wrapper component for aligning a list of &lt;Tab&gt; components.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    children: {
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
      control: { disable: true },
      description: "Usually &lt;Tab&gt; components.",
    },
  },
}

export default meta
type Story = StoryObj<typeof TabList>

export const Demo: Story = {
  tags: ["!autodocs"],
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  args: {
    className: "sb-container-inset",
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <TabContext defaultValue="tab-1">
        <Section>
          <TabList {...args}>
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

export const HorizontalScroll: Story = {
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
              <Tab value="tab-4">Fourth Tab</Tab>
              <Tab value="tab-5">Fifth Tab</Tab>
              <Tab value="tab-6">Sixth Tab</Tab>
              <Tab value="tab-7">Seventh Tab</Tab>
              <Tab value="tab-8">Eighth Tab</Tab>
              <Tab value="tab-9">Ninth Tab</Tab>
              <Tab value="tab-10">Tenth Tab</Tab>
              <Tab value="tab-11">Eleventh Tab</Tab>
              <Tab value="tab-12">Twelfth Tab</Tab>
              <Tab value="tab-13">Thirteenth Tab</Tab>
              <Tab value="tab-14">Fourteenth Tab</Tab>
              <Tab value="tab-15">Fifteenth Tab</Tab>
            </TabList>
          </Section>
        </TabContext>
      </div>
    )
  },
}
