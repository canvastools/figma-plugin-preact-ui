import { Meta, StoryObj } from '@storybook/preact'

import { ControlledStory } from './stories/Controlled.story'
import { VariantStory } from './stories/Variant.story'

import { Progress } from './Progress'

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
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
    variant: {
      control: { type: 'radio' },
      options: ['indeterminate', 'determinate'],
      defaultValue: { summary: 'indeterminate' },
    },
    delay: {
      control: { type: 'number' },
      defaultValue: { summary: 0 },
      description:
        'Delay in milliseconds before the progress bar becomes visible. This helps prevent flicker when content loads quickly.',
    },
    value: {
      control: { type: 'number' },
      defaultValue: { summary: 0 },
      description: 'Value of the progress bar for `determinate` variant.',
    },
  },
}

export default meta

type Story = StoryObj<typeof Progress>

export const Demo: Story = {
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    variant: 'indeterminate',
    delay: 0,
    value: 30,
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<Progress {...args} />
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Progress {...args} />
    </div>
  ),
}

export const Controlled = ControlledStory
export const Variant = VariantStory
