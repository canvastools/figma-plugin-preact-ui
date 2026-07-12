import { StoryObj } from '@storybook/preact-vite'

import { ColorSwatch } from '../ColorSwatch'

type Story = StoryObj<typeof ColorSwatch>

export const DisabledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      description: {
        story: 'Disabled swatch stops receiving hover and focus events.',
      },
      source: {
        code: `
<ColorSwatch disabled/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-16">
      <ColorSwatch disabled />
    </div>
  ),
}
