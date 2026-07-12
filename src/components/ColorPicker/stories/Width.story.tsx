import { StoryObj } from '@storybook/preact-vite'

import { ColorPicker } from '../ColorPicker'

type Story = StoryObj<typeof ColorPicker>

export const WidthStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<ColorPicker width={207}/>

<ColorPicker fullWidth/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-row sb-width-full sb-gap-40">
      <ColorPicker width={300} />
      <ColorPicker fullWidth />
    </div>
  ),
}
