import { StoryObj } from '@storybook/preact-vite'

import { ColorSwatch } from '../ColorSwatch'

type Story = StoryObj<typeof ColorSwatch>

export const SizeStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<ColorSwatch size="small"/>

<ColorSwatch size="medium"/>

<ColorSwatch size="large"/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-row sb-width-full sb-gap-16">
      <ColorSwatch size="small" />
      <ColorSwatch size="medium" />
      <ColorSwatch size="large" />
    </div>
  ),
}
