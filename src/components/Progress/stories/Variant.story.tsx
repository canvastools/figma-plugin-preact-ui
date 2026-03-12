import { StoryObj } from '@storybook/preact'

import { Progress } from '../Progress'

type Story = StoryObj<typeof Progress>

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
<Progress variant="indeterminate" />

<Progress 
  variant="determinate"
  value={30}
/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-16">
      <Progress variant="indeterminate" />
      <Progress variant="determinate" value={30} />
    </div>
  ),
}
