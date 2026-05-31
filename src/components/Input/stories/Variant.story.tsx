import { StoryObj } from '@storybook/preact'

import { Input } from '../Input'

type Story = StoryObj<typeof Input>

export const VariantStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      description: {
        story: 'If there is no label, the component will be displayed in the default variant.',
      },
      source: {
        language: 'tsx',
        code: `
<Input variant="default" />

<Input variant="list" />
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-40">
      <Input defaultValue="Hello World!" label="Label" variant="default" tabIndex={0} />
      <Input defaultValue="Hello World!" label="Label" variant="list" tabIndex={0} />
    </div>
  ),
}
