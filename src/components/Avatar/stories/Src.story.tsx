import { StoryObj } from '@storybook/preact-vite'

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
        code: `
<Avatar src="https://thispersondoesnotexist.com/random-person.jpeg">{children}</Avatar>
`,
      },
    },
  },
  render: () => (
    <div className="sb-row sb-width-full sb-gap-16">
      <Avatar src="https://thispersondoesnotexist.com/random-person.jpeg">A</Avatar>
      <Avatar>A</Avatar>
    </div>
  ),
}
