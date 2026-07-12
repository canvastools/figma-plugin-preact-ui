import { StoryObj } from '@storybook/preact-vite'

import { Switch } from '../Switch'

type Story = StoryObj<typeof Switch>

export const UncontrolledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Switch defaultChecked={false} />
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-16">
      <Switch defaultChecked={false} />
      <Switch defaultChecked={true} />
    </div>
  ),
}
