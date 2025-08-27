import type { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"
import { useState } from "preact/hooks"

import { TabContext } from "../TabContext/TabContext"
import { TabPanel } from "../TabPanel/TabPanel"
import { TabList } from "./TabList"
import { Tab } from "../Tab/Tab"

const meta: Meta<typeof TabList> = {
  title: "Components/TabList",
  component: TabList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A wrapper component for &lt;Tab&gt; components.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "string" },
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
  args: {
    className: "",
  },
  render: (args) => (
    <TabContext defaultValue="tab-1">
      <TabList {...args}>
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

export const HorizontalScroll: Story = {
  tags: ["!dev"],
  render: () => {
    return (
      <TabContext defaultValue="tab-1">
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
        <br />
        <TabPanel value="tab-1">Tab 1 Panel</TabPanel>
        <TabPanel value="tab-2">Tab 2 Panel</TabPanel>
        <TabPanel value="tab-3">Tab 3 Panel</TabPanel>
        <TabPanel value="tab-4">Tab 4 Panel</TabPanel>
        <TabPanel value="tab-5">Tab 5 Panel</TabPanel>
        <TabPanel value="tab-6">Tab 6 Panel</TabPanel>
        <TabPanel value="tab-7">Tab 7 Panel</TabPanel>
        <TabPanel value="tab-8">Tab 8 Panel</TabPanel>
        <TabPanel value="tab-9">Tab 9 Panel</TabPanel>
        <TabPanel value="tab-10">Tab 10 Panel</TabPanel>
        <TabPanel value="tab-11">Tab 11 Panel</TabPanel>
        <TabPanel value="tab-12">Tab 12 Panel</TabPanel>
        <TabPanel value="tab-13">Tab 13 Panel</TabPanel>
        <TabPanel value="tab-14">Tab 14 Panel</TabPanel>
        <TabPanel value="tab-15">Tab 15 Panel</TabPanel>
      </TabContext>
    )
  },
}
