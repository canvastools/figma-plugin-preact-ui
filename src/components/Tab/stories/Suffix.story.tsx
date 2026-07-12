import { StoryObj } from '@storybook/preact-vite'

import { TabContext, Section, TabList, Icon, link } from '../../../index'

import { Tab } from '../Tab'

type Story = StoryObj<typeof Tab>

export const SuffixStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Tab suffix={
    <Icon glyph={link} />
  }
>
  {children}
</Tab>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <TabContext defaultActiveId="tab-1">
        <Section>
          <TabList>
            <Tab variant="default" id="tab-1" suffix={<Icon glyph={link} />}>
              First Tab
            </Tab>
            <Tab variant="default" id="tab-2" suffix={<Icon glyph={link} />}>
              Second Tab
            </Tab>
          </TabList>
        </Section>
      </TabContext>

      <TabContext defaultActiveId="tab-1">
        <Section>
          <TabList>
            <Tab variant="single" id="tab-1" suffix={<Icon glyph={link} />}>
              Single
            </Tab>
          </TabList>
        </Section>
      </TabContext>
    </div>
  ),
}
