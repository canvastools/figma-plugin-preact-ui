import { Meta, StoryObj } from '@storybook/preact'
import { fn } from '@storybook/test'

import { SizeStory } from './stories/Size.story'
import { ColorStory } from './stories/Color.story'
import { AlphaStory } from './stories/Alpha.story'
import { DisabledStory } from './stories/Disabled.story'
import { SelectionStory } from './stories/Selection.story'
import { ChildrenStory } from './stories/Children.story'
import { GradientStory } from './stories/Gradient.story'
import { MultipleStory } from './stories/Multiple.story'

import { TooltipContext } from '../../index'

import { ColorSwatch } from './ColorSwatch'
import type { Color } from '../ColorPicker/ColorPicker.types'

const meta: Meta<typeof ColorSwatch> = {
  title: 'Components/ColorSwatch',
  component: ColorSwatch,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    className: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      defaultValue: { summary: 'medium' },
    },
    fill: {
      control: { type: 'object' },
      table: {
        type: {
          summary: 'Color | GradientPaint | Array<Color | GradientPaint>',
          detail: `
Color:{
  r: number
  g: number
  b: number
  a: number
}

GradientPaint:{
  type: 'gradient-linear' | 'gradient-radial' | 'gradient-angular'
  gradientHandlePositions: [Vector, Vector, Vector]
  gradientStops: ColorStop[]
}

ColorStop: {
  color: Color
  position: number
}

Vector: {
  x: number
  y: number
}
`,
        },
      },
    },
    alpha: {
      control: { type: 'boolean' },
      description: 'When true, transparent solid colors are split into opaque + alpha halves to preview transparency.',
      defaultValue: { summary: true },
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    selected: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    selection: {
      control: { type: 'radio' },
      options: ['default', 'rainbow'],
      description: 'Selection border style.',
      defaultValue: { summary: 'default' },
    },
    tooltip: {
      control: { type: 'text' },
      description: 'Tooltip content.',
      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
    },
    children: {
      control: { disable: true },
      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
    },
    onClick: {
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args: { 
  event: MouseEvent
  fill: Color | GradientPaint | Array<Color | GradientPaint> | undefined
}
          `,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof ColorSwatch>

export const Demo: Story = {
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    size: 'medium',
    fill: { r: 1, g: 0, b: 0, a: 1 } as Color,
    alpha: true,
    disabled: false,
    selected: false,
    selection: 'default',
    tooltip: 'ColorSwatch tooltip',
    onClick: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<ColorSwatch {...args} />

// Use TooltipContext to make tooltips work

<TooltipContext>
  <ColorSwatch {...args}/>
</TooltipContext>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <TooltipContext>
        <ColorSwatch {...args} />
      </TooltipContext>
    </div>
  ),
}

export const Size = SizeStory
export const _Color = ColorStory
export const Alpha = AlphaStory
export const Disabled = DisabledStory
export const Selection = SelectionStory
export const Children = ChildrenStory
export const Gradient = GradientStory
export const Multiple = MultipleStory
