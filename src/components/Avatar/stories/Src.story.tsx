import { StoryObj } from '@storybook/preact'

import { Avatar } from '../Avatar'

type Story = StoryObj<typeof Avatar>

export const SrcStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<Avatar src="https://thispersondoesnotexist.com/">{children}</Avatar>
`,
      },
    },
  },
  render: () => (
    <div className="sb-row sb-width-full sb-gap-16">
      <Avatar src="https://thispersondoesnotexist.com/">A</Avatar>
      <Avatar>A</Avatar>
    </div>
  ),
}
