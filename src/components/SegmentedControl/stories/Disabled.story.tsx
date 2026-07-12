import { StoryObj } from '@storybook/preact-vite'

import { SegmentedControl } from '../SegmentedControl'
import { SegmentedControlOptionData } from '../SegmentedControl.types'

type Story = StoryObj<typeof SegmentedControl>

export const DisabledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<SegmentedControl disabled />
`,
      },
    },
  },
  render: () => {
    const options: SegmentedControlOptionData[] = [
      {
        value: 'list',
        label: 'List view',
      },
      {
        value: 'grid',
        label: 'Grid view',
      },
    ]

    return (
      <div className="sb-column sb-width-300">
        <SegmentedControl options={options} defaultValue="list" disabled />
      </div>
    )
  },
}
