import { Meta, StoryObj } from '@storybook/preact'

import { GroupFocusStory } from './stories/GroupFocus.story'
import { CombinationsStory } from './stories/Combinations.story'
import { DisabledStory } from './stories/Disabled.story'

import { Input } from '../../index'

import { ControlGroup } from './ControlGroup'

const meta: Meta<typeof ControlGroup> = {
  title: 'Components/ControlGroup',
  component: ControlGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A wrapper component that groups multiple controls together and set `grouped` property on them.<br/>  Supported controls: <a href="/docs/components-button--docs">`<Button/>`</a>, <a href="/docs/components-buttonicon--docs">`<ButtonIcon/>`</a>, <a href="/docs/components-buttonicontoggle--docs">`<ButtonIconToggle/>`</a>, <a href="/docs/components-input--docs">`<Input/>`</a>, <a href="/docs/components-select--docs">`<Select/>`</a>',
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
    groupFocus: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    children: {
      control: { disable: true },
      description: '<strong>*</strong>',
      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof ControlGroup>

export const Demo: Story = {
  tags: ['!autodocs'],
  args: {
    id: undefined,
    className: '',
    groupFocus: false,
    disabled: false,
    fullWidth: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<ControlGroup {...args}>
  {children}
</ControlGroup>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <ControlGroup {...args}>
        {/* @ts-expect-error Storybook typing issue */}
        <Input placeholder="Input" disabled={args.disabled} />
        {/* @ts-expect-error Storybook typing issue */}
        <Input placeholder="Input" disabled={args.disabled} />
      </ControlGroup>
    </div>
  ),
}

export const GroupFocus = GroupFocusStory
export const Combinations = CombinationsStory
export const Disabled = DisabledStory
