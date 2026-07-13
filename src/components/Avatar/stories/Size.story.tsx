import { StoryObj } from '@storybook/preact-vite'

import { Avatar } from '../Avatar'

type Story = StoryObj<typeof Avatar>

export const SizeStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Avatar size="small">{children}</Avatar>

<Avatar size="medium">{children}</Avatar>

<Avatar size="large">{children}</Avatar>
  `,
      },
    },
  },
  render: () => (
    <div className="sb-row sb-width-full sb-gap-40">
      <div className="sb-column sb-gap-16">
        <div className="sb-row sb-gap-16">
          <Avatar src="https://thispersondoesnotexist.com/random-person.jpeg" size="small">
            A
          </Avatar>
          <Avatar size="small">A</Avatar>
        </div>

        <div className="sb-row sb-gap-16">
          <Avatar src="https://thispersondoesnotexist.com/random-person.jpeg" size="medium">
            A
          </Avatar>
          <Avatar size="medium">A</Avatar>
        </div>

        <div className="sb-row sb-gap-16">
          <Avatar src="https://thispersondoesnotexist.com/random-person.jpeg" size="large">
            A
          </Avatar>
          <Avatar size="large">A</Avatar>
        </div>
      </div>

      <div className="sb-column sb-gap-16">
        <div className="sb-row sb-gap-16">
          <Avatar src="https://thispersondoesnotexist.com/random-person.jpeg" size="small" variant="square">
            A
          </Avatar>
          <Avatar size="small" variant="square">
            A
          </Avatar>
        </div>

        <div className="sb-row sb-gap-16">
          <Avatar src="https://thispersondoesnotexist.com/random-person.jpeg" size="medium" variant="square">
            A
          </Avatar>
          <Avatar size="medium" variant="square">
            A
          </Avatar>
        </div>

        <div className="sb-row sb-gap-16">
          <Avatar src="https://thispersondoesnotexist.com/random-person.jpeg" size="large" variant="square">
            A
          </Avatar>
          <Avatar size="large" variant="square">
            A
          </Avatar>
        </div>
      </div>
    </div>
  ),
}
