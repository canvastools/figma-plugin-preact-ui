import { StoryObj } from '@storybook/preact-vite'

import { Avatar } from '../Avatar'

type Story = StoryObj<typeof Avatar>

export const ColorStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Avatar 
  backgroundColor="var(--pui-color-brand-bg-default)"
  textColor="#ffff00"
>
  {children}
</Avatar>

<Avatar 
  backgroundColor="rgb(0, 255, 0, 0.5)"
  textColor="rgb(0, 0, 0)"
>
  {children}
</Avatar>

`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Avatar backgroundColor="var(--pui-color-brand-bg-default)" textColor="#ffff00">
        A
      </Avatar>
    </div>
  ),
}
