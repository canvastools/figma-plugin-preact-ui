import { StoryObj } from '@storybook/preact-vite'

import { Avatar } from '../Avatar'

type Story = StoryObj<typeof Avatar>

export const VariantStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Avatar variant="circle">{children}</Avatar>

<Avatar variant="square">{children}</Avatar>
  `,
      },
    },
  },
  render: () => (
    <div className="sb-row sb-width-full sb-gap-40">
      <div className="sb-row sb-gap-16">
        <Avatar src="https://thispersondoesnotexist.com/random-person.jpeg" variant="circle">
          A
        </Avatar>
        <Avatar variant="circle">A</Avatar>
      </div>
      <div className="sb-row sb-gap-16">
        <Avatar src="https://thispersondoesnotexist.com/random-person.jpeg" variant="square">
          A
        </Avatar>
        <Avatar variant="square">A</Avatar>
      </div>
    </div>
  ),
}
