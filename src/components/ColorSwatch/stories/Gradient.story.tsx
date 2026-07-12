import { StoryObj } from '@storybook/preact-vite'

import { ColorSwatch } from '../ColorSwatch'
import type { GradientPaint } from '../ColorSwatch.types'

type Story = StoryObj<typeof ColorSwatch>

const linear: GradientPaint = {
  type: 'gradient-linear',
  gradientHandlePositions: [
    { x: 0, y: 0.5 },
    { x: 1, y: 0.5 },
    { x: 0, y: 0 },
  ],
  gradientStops: [
    { position: 0, color: { r: 1, g: 0.4, b: 0.4, a: 1 } },
    { position: 1, color: { r: 1, g: 0.7, b: 0.4, a: 1 } },
  ],
}

const radial: GradientPaint = {
  type: 'gradient-radial',
  gradientHandlePositions: [
    { x: 0.5, y: 0.5 },
    { x: 0.5, y: 1 },
    { x: 1, y: 0.5 },
  ],
  gradientStops: [
    { position: 0, color: { r: 0.4, g: 0.6, b: 1, a: 1 } },
    { position: 1, color: { r: 0.2, g: 0.2, b: 0.6, a: 0.2 } },
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

export const GradientStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<ColorSwatch fill={{ type: 'gradient-linear', ... }} />
<ColorSwatch fill={{ type: 'gradient-radial', ... }} />
<ColorSwatch fill={{ type: 'gradient-angular', ... }} />
<ColorSwatch fill={{ type: 'gradient-diamond', ... }} />
`,
      },
    },
  },
  render: () => (
    <div className="sb-row sb-width-full sb-gap-16">
      <ColorSwatch fill={linear} size="large" />
      <ColorSwatch fill={radial} size="large" />
      <ColorSwatch fill={angular} size="large" />
    </div>
  ),
}
