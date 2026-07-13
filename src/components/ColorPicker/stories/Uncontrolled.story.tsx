import { StoryObj } from '@storybook/preact-vite'

import { ColorPicker } from '../ColorPicker'

type Story = StoryObj<typeof ColorPicker>

export const UncontrolledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<ColorPicker 
  defaultColor={{ r: 1, g: 0, b: 0, a: 1 }}
  defaultType="hex"
/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-16">
      <ColorPicker defaultColor={{ r: 1, g: 0, b: 0, a: 1 }} defaultType="hex" />
    </div>
  ),
}
