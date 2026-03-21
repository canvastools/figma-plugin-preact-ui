import { StoryObj } from '@storybook/preact'

import { TabContext, Section, Tab, Stack } from '../../../index'

import { TabList } from '../TabList'

type Story = StoryObj<typeof TabList>

export const VariantStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<TabContext defaultActiveId="tab-1">
  <TabList>
    <Tab id="tab-1">{children}</Tab>
    <Tab id="tab-2">{children}</Tab>
    ...
  </TabList>

  <TabList variant="list">
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
      <Section>
        <Stack direction="row" spacing="400">
          <TabContext defaultActiveId="tab-1">
            <TabList>
              <Tab id="tab-1">First Tab</Tab>
              <Tab id="tab-2">Second Tab</Tab>
              <Tab id="tab-3">Third Tab</Tab>
              <Tab id="tab-4">Fourth Tab</Tab>
              <Tab id="tab-5">Fifth Tab</Tab>
            </TabList>
          </TabContext>

          <TabContext defaultActiveId="tab-1">
            <TabList variant="list">
              <Tab id="tab-1">First Tab</Tab>
              <Tab id="tab-2">Second Tab</Tab>
              <Tab id="tab-3">Third Tab</Tab>
              <Tab id="tab-4">Fourth Tab</Tab>
              <Tab id="tab-5">Fifth Tab</Tab>
            </TabList>
          </TabContext>
        </Stack>
      </Section>
    </div>
  ),
}
