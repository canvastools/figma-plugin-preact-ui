import { Meta, StoryObj } from '@storybook/preact'

import { spacing } from '../../themes'

import { Spacing } from './Spacing'

import { Avatar, Stack } from '../../index'

const meta: Meta<typeof Spacing> = {
  title: 'Layout/Spacing',
  component: Spacing,
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
    direction: {
      control: {
        type: 'radio',
      },
      options: ['row', 'column'],
      defaultValue: { summary: 'column' },
    },
    size: {
      control: {
        type: 'radio',
      },
      description: '<strong>*</strong>',
      options: [undefined, ...Object.keys(spacing.variables).map(Number)],
    },
  },
}

export default meta

type Story = StoryObj<typeof Spacing>

export const Demo: Story = {
  args: {
    id: undefined,
    className: 'sb-container',
    direction: 'column',
    size: 400,
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<Spacing
  size={400}
  {...args}
/>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      {/* @ts-expect-error Storybook spread */}
      <Stack direction={args.direction}>
        <Avatar>A</Avatar>
        {/* @ts-expect-error Storybook spread */}
        <Spacing size={args.size} {...args} />

        <Avatar>B</Avatar>
        {/* @ts-expect-error Storybook spread */}
        <Spacing size={args.size} {...args} />

        <Avatar>C</Avatar>
        {/* @ts-expect-error Storybook spread */}
        <Spacing size={args.size} {...args} />
      </Stack>
    </div>
  ),
}
