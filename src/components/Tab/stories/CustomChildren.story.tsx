import { StoryObj } from '@storybook/preact'

import { TabContext, Section, TabList, Icon, home, info } from '../../../index'

import { Tab } from '../Tab'

type Story = StoryObj<typeof Tab>

export const CustomChildrenStory: Story = {
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
		<Tab id="tab-1">
			<Icon glyph={home} />
		</Tab>
		<Tab id="tab-2">
			<Icon glyph={info} />
		</Tab>
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
            <Tab variant="default" id="tab-1">
              <Icon glyph={home} />
            </Tab>
            <Tab variant="default" id="tab-2">
              <Icon glyph={info} />
            </Tab>
          </TabList>
        </Section>
      </TabContext>
    </div>
  ),
}
