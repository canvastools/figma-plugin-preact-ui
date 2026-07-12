import { Meta, StoryObj } from '@storybook/preact-vite'

import { Code } from './Code'

const meta: Meta<typeof Code> = {
  title: 'Components/Code',
  component: Code,
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
      options: ['inline', 'block'],
      table: { defaultValue: { summary: 'inline' } },
    },
    children: {
      control: { type: 'text' },
      description: '<strong>*</strong>',
    },
  },
}

export default meta

type Story = StoryObj<typeof Code>

export const Demo: Story = {
  args: {
    id: undefined,
    className: '',
    variant: 'inline',
    children: 'Hello, world!',
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Code {...args}>{children}</Code>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Code {...args}>{args.children}</Code>
    </div>
  ),
}
