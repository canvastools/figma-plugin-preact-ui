import { StoryObj } from "@storybook/preact"

import { TabContext, Section, Tab } from "../../../index"

import { TabList } from "../TabList"

type Story = StoryObj<typeof TabList>

export const HorizontalScrollStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<TabContext defaultValue="tab-1">
  <TabList>
    <Tab value="tab-1">{children}</Tab>
    <Tab value="tab-2">{children}</Tab>
    ...
  </TabList>
</TabContext>
`,
      },
    },
  },
  render: () => (
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
  ),
}
