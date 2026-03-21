import { StoryObj } from '@storybook/preact'

import { Switch } from '../Switch'

type Story = StoryObj<typeof Switch>

export const DisabledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<Switch disabled />
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-16">
      <Switch defaultChecked={false} disabled />
      <Switch defaultChecked={true} disabled />
    </div>
  ),
}
