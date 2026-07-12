import { StoryObj } from '@storybook/preact-vite'

import { Section, TabList, Tab, Text, TabPanel } from '../../../index'

import { TabContext } from '../TabContext'

type Story = StoryObj<typeof Tab>

export const UncontrolledStory: Story = {
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
    <Tab id="tab-1">First Tab</Tab>
    <Tab id="tab-2">Second Tab</Tab>
    <Tab id="tab-3">Third Tab</Tab>
  </TabList>

  <TabPanel tabId="tab-1">Tab 1 Panel</TabPanel>
  <TabPanel tabId="tab-2">Tab 2 Panel</TabPanel>
  <TabPanel tabId="tab-3">Tab 3 Panel</TabPanel>

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
