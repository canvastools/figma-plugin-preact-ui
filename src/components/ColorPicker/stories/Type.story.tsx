import { StoryObj } from '@storybook/preact-vite'

import { ColorPicker } from '../ColorPicker'

type Story = StoryObj<typeof ColorPicker>

export const TypeStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<ColorPicker defaultType="hex"/>

<ColorPicker defaultType="hexAlpha"/>

<ColorPicker defaultType="rgba"/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-row sb-width-full sb-gap-40">
      <ColorPicker defaultType="hex" />
      <ColorPicker defaultType="hexAlpha" />
      <ColorPicker defaultType="rgba" />
    </div>
  ),
}
