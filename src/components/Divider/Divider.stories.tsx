import { Meta, StoryObj } from '@storybook/preact-vite'

import { Divider } from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
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
      options: ['full', 'inset'],
      table: { defaultValue: { summary: 'full' } },
    },
  },
}

export default meta

type Story = StoryObj<typeof Divider>

export const Demo: Story = {
  args: {
    id: undefined,
    className: '',
    variant: 'full',
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Divider {...args} />
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Divider {...args} />
    </div>
  ),
}
