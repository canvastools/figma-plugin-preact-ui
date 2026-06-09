import { StoryObj } from '@storybook/preact'

import { ColorSwatch } from '../ColorSwatch'
import { Stack, Text } from '../../../index'

type Story = StoryObj<typeof ColorSwatch>

export const AlphaStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<ColorSwatch fill={{ r: 255, g: 0, b: 0, a: 1 }} alpha={false}/>
<ColorSwatch fill={{ r: 255, g: 0, b: 0, a: 0.5 }} alpha={false}/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-16">
      <Text>Alpha: true</Text>
      <Stack direction="row" spacing="200">
        <ColorSwatch fill={{ r: 255, g: 0, b: 0, a: 1 }} alpha={true} />
        <ColorSwatch fill={{ r: 255, g: 0, b: 0, a: 0.5 }} alpha={true} />
        <ColorSwatch fill={{ r: 255, g: 0, b: 0, a: 0 }} alpha={true} />
      </Stack>
      <Text>Alpha: false</Text>
      <Stack direction="row" spacing="200">
        <ColorSwatch fill={{ r: 255, g: 0, b: 0, a: 1 }} alpha={false} />
        <ColorSwatch fill={{ r: 255, g: 0, b: 0, a: 0.5 }} alpha={false} />
        <ColorSwatch fill={{ r: 255, g: 0, b: 0, a: 0 }} alpha={false} />
      </Stack>
    </div>
  ),
}
