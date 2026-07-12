import { StoryObj } from '@storybook/preact-vite'

import { ColorSwatch } from '../ColorSwatch'
import type { GradientPaint } from '../ColorSwatch.types'
import type { Color } from '../../ColorPicker/ColorPicker.types'

import { Stack, Text } from '../../../index'

type Story = StoryObj<typeof ColorSwatch>

const linear: GradientPaint = {
  type: 'gradient-linear',
  gradientHandlePositions: [
    { x: 1, y: 1 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ],
  gradientStops: [
    { position: 0, color: { r: 1, g: 0.4, b: 0.4, a: 1 } },
    { position: 1, color: { r: 1, g: 0.7, b: 0.4, a: 1 } },
  ],
}

const radialTransparent: GradientPaint = {
  type: 'gradient-radial',
  gradientHandlePositions: [
    { x: 0.3, y: 0.3 },
    { x: 0.3, y: 1 },
    { x: 1, y: 0.3 },
  ],
  gradientStops: [
    { position: 0, color: { r: 1, g: 1, b: 1, a: 1 } },
    { position: 1, color: { r: 1, g: 1, b: 1, a: 0 } },
  ],
}

const angular: GradientPaint = {
  type: 'gradient-angular',
  gradientHandlePositions: [
    { x: 0.5, y: 0.5 },
    { x: 1, y: 0.5 },
    { x: 0.5, y: 1 },
  ],
  gradientStops: [
    { position: 0, color: { r: 1, g: 0.4, b: 0.4, a: 1 } },
    { position: 0.5, color: { r: 0.4, g: 1, b: 0.4, a: 1 } },
    { position: 1, color: { r: 0.4, g: 0.4, b: 1, a: 1 } },
  ],
}

const blue: Color = { r: 0.2, g: 0.4, b: 1, a: 1 }
const yellow: Color = { r: 1, g: 1, b: 0, a: 0.8 }
const magentaTransparent: Color = { r: 1, g: 0.2, b: 0.6, a: 0.8 }
const redTransparent: Color = { r: 1, g: 0, b: 0, a: 0.4 }

export const MultipleStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<ColorSwatch
  fill={[
    { r: 0.2, g: 0.4, b: 1, a: 1 },
    { r: 1, g: 0.2, b: 0.6, a: 0.5 },
  ]}
/>

<ColorSwatch
  fill={[
    { type: 'gradient-linear', ... },
    { type: 'gradient-radial', ... },
  ]}
/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-16">
      <Text>Alpha: true</Text>
      <Stack direction="row" spacing="200">
        <ColorSwatch fill={[blue, magentaTransparent]} size="large" selection="rainbow" />
        <ColorSwatch fill={[yellow, redTransparent]} size="large" selection="rainbow" />
        <ColorSwatch fill={[linear, radialTransparent]} size="large" selection="rainbow" />
        <ColorSwatch fill={[angular, redTransparent]} size="large" selection="rainbow" />
      </Stack>
      <Text>Alpha: false</Text>
      <Stack direction="row" spacing="200">
        <ColorSwatch fill={[blue, magentaTransparent]} size="large" alpha={false} />
        <ColorSwatch fill={[yellow, redTransparent]} size="large" alpha={false} />
        <ColorSwatch fill={[linear, radialTransparent]} size="large" alpha={false} />
        <ColorSwatch fill={[angular, redTransparent]} size="large" alpha={false} />
      </Stack>
    </div>
  ),
}
