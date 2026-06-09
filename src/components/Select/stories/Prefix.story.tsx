import { StoryObj } from '@storybook/preact'

import { Icon, ButtonIcon, search, link } from '../../../index'

import { Select } from '../Select'
import { SelectOptionData } from '../Select.types'

type Story = StoryObj<typeof Select>

export const PrefixStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<Select
  prefix={
    <Icon 
      glyph={search}
      intentModifier="secondary"
    />
  }
/>
`,
      },
    },
  },
  render: () => {
    const options: SelectOptionData[] = [
      { value: 'option-1', label: 'Option one' },
      { value: 'option-2', label: 'Option two' },
      { value: 'option-3', label: 'Option three' },
    ]

    return (
      <div className="sb-column sb-width-300 sb-gap-16">
        <Select options={options} defaultValue="option-1" prefix={<Icon glyph={search} intentModifier="secondary" />} />
        <Select options={options} defaultValue="option-1" prefix={<ButtonIcon translucent icon={{ glyph: link }} />} />
      </div>
    )
  },
}
