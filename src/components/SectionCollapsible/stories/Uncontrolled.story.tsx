import { StoryObj } from '@storybook/preact'

import { Text } from '../../../index'

import { SectionCollapsible } from '../SectionCollapsible'

type Story = StoryObj<typeof SectionCollapsible>

export const UncontrolledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<SectionCollapsible
  sectionProps={{
    children: 'Section header',
  }}
>
  {children}
</SectionCollapsible>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <SectionCollapsible
        sectionProps={{
          variant: 'default',
          children: <Text strong>Click to toggle</Text>,
        }}
      >
        <Text>Uncontrolled collapsible content</Text>
      </SectionCollapsible>
    </div>
  ),
}
