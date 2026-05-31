import { Meta, StoryObj } from '@storybook/preact'
import { fn } from '@storybook/test'

import { PopoverHeader } from './PopoverHeader'

import { PopoverContainer, Text, Section } from '../../index'

const meta: Meta<typeof PopoverHeader> = {
  title: 'Components/PopoverHeader',
  component: PopoverHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "A header for the popover component. Used inside <a href='/docs/components-popovercontainer--docs'>`<PopoverContainer/>`</a> component.",
      },
    },
  },
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
    children: {
      control: { type: 'text' },
      description: '<strong>*</strong>',
      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
    },
    tabIndex: {
      control: { type: 'number' },
      description: 'Tab order of the popover header wrapper. Omit when it should not be in the tab sequence.',
      table: {
        type: { summary: 'number' },
      },
    },
    onClose: {
      table: {
        type: {
          summary: '() => void',
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof PopoverHeader>

export const Demo: Story = {
  args: {
    id: undefined,
    className: '',
    children: 'Header',
    onClose: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<PopoverContainer>
  <PopoverHeader {...args}>{children}</PopoverHeader>
</PopoverContainer>
`,
      },
    },
  },
  render: (args) => {
    return (
      <div className="sb-column sb-width-300">
        <PopoverContainer>
          {/* @ts-expect-error Storybook spread */}
          <PopoverHeader {...args}>{args.children}</PopoverHeader>
          <Section>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus,
              ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique
              magnam aspernatur esse dignissimos molestiae.
            </Text>
          </Section>
        </PopoverContainer>
      </div>
    )
  },
}
