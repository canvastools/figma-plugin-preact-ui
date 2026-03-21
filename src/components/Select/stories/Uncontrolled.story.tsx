import { StoryObj } from '@storybook/preact'

import { Select } from '../Select'
import { SelectOptionData } from '../Select.types'

type Story = StoryObj<typeof Select>

export const UncontrolledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
const options = [
  { 
    value: "option-1",
    label: "Option one"
  },
  { 
    value: "option-2",
    label: "Option two"
  },
  {
    value: "option-3",
    label: "Option three"
  },
]

<Select
  defaultValue="option-1"
  options={options}
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
      <div className="sb-column sb-width-300">
        <Select options={options} defaultValue="option-1" />
      </div>
    )
  },
}
