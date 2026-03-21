import { Meta, StoryObj } from '@storybook/preact'

import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
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
      options: ['small', 'medium'],
      defaultValue: 'medium',
    },
  },
}

export default meta

type Story = StoryObj<typeof Spinner>

export const Demo: Story = {
  args: {
    id: undefined,
    className: '',
    size: 'medium',
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<Spinner {...args} />
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Spinner {...args} />
    </div>
  ),
}
