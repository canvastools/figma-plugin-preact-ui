import { StoryObj } from '@storybook/preact-vite'

import { SegmentedControl } from '../SegmentedControl'
import { SegmentedControlOptionData } from '../SegmentedControl.types'

type Story = StoryObj<typeof SegmentedControl>

export const UncontrolledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
const options = [
  {
    value: "list",
    label: "List view",
  },
  {
    value: "grid",
    label: "Grid view",
  },
]

<SegmentedControl
  defaultValue="list"
  options={options}
/>
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
        <SegmentedControl options={options} defaultValue="list" />
      </div>
    )
  },
}
