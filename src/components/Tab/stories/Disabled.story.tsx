import { StoryObj } from '@storybook/preact-vite'

import { TabContext, Section, TabList } from '../../../index'

import { Tab } from '../Tab'

type Story = StoryObj<typeof Tab>

export const DisabledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Tab variant="default" disabled>{children}</Tab>

<Tab variant="single" disabled>{children}</Tab>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <TabContext defaultActiveId="tab-1">
        <Section>
          <TabList>
            <Tab variant="default" id="tab-1" disabled>
              First Tab
            </Tab>
            <Tab variant="default" id="tab-2" disabled>
              Second Tab
            </Tab>
          </TabList>
        </Section>
      </TabContext>

      <TabContext defaultActiveId="tab-1">
        <Section>
          <TabList>
            <Tab variant="single" id="tab-1" disabled>
              Single
            </Tab>
          </TabList>
        </Section>
      </TabContext>
    </div>
  ),
}
