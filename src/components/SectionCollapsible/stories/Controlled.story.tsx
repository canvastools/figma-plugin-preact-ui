import { StoryObj } from '@storybook/preact-vite'

import { useState } from 'preact/hooks'

import { Text } from '../../../index'

import { SectionCollapsible } from '../SectionCollapsible'

type Story = StoryObj<typeof SectionCollapsible>

export const ControlledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
const [collapsed, setCollapsed] = useState(false)

<SectionCollapsible
  collapsed={collapsed}
  onCollapsedChange={({ collapsed }) => setCollapsed(collapsed)}
  sectionProps={{ children: 'Section header' }}
>
  {children}
</SectionCollapsible>
`,
      },
    },
  },
  render: () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
      <div className="sb-column sb-width-full">
        <SectionCollapsible
          collapsed={collapsed}
          onCollapsedChange={({ collapsed: nextCollapsed }) => setCollapsed(nextCollapsed)}
          sectionProps={{
            variant: 'default',
            children: <Text strong>{collapsed ? 'Click to expand' : 'Click to collapse'}</Text>,
          }}
        >
          <Text>Controlled collapsible content</Text>
        </SectionCollapsible>
      </div>
    )
  },
}
