import { StoryObj } from '@storybook/preact-vite'

import { Select } from '../Select'
import { SelectOptionData } from '../Select.types'

type Story = StoryObj<typeof Select>

export const DisabledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Select disabled />
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
        <Select options={options} placeholder="Placeholder" disabled />
        <Select options={options} defaultValue="option-1" disabled />
      </div>
    )
  },
}
