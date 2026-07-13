import { StoryObj } from '@storybook/preact-vite'

import { TabContext, Section, Tab } from '../../../index'

import { TabList } from '../TabList'

type Story = StoryObj<typeof TabList>

export const HorizontalScrollStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<TabContext defaultActiveId="tab-1">
  <TabList>
    <Tab id="tab-1">{children}</Tab>
    <Tab id="tab-2">{children}</Tab>
    ...
  </TabList>
</TabContext>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <TabContext defaultActiveId="tab-1">
        <Section>
          <TabList>
            <Tab id="tab-1">First Tab</Tab>
            <Tab id="tab-2">Second Tab</Tab>
            <Tab id="tab-3">Third Tab</Tab>
            <Tab id="tab-4">Fourth Tab</Tab>
            <Tab id="tab-5">Fifth Tab</Tab>
            <Tab id="tab-6">Sixth Tab</Tab>
            <Tab id="tab-7">Seventh Tab</Tab>
            <Tab id="tab-8">Eighth Tab</Tab>
            <Tab id="tab-9">Ninth Tab</Tab>
            <Tab id="tab-10">Tenth Tab</Tab>
            <Tab id="tab-11">Eleventh Tab</Tab>
            <Tab id="tab-12">Twelfth Tab</Tab>
            <Tab id="tab-13">Thirteenth Tab</Tab>
            <Tab id="tab-14">Fourteenth Tab</Tab>
            <Tab id="tab-15">Fifteenth Tab</Tab>
          </TabList>
        </Section>
      </TabContext>
    </div>
  ),
}
