import { StoryObj } from '@storybook/preact-vite'

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
        code: `
<Input variant="default" />

<Input variant="list" />
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-40">
      <Input defaultValue="Hello World!" label="Label" variant="default" />
      <Input defaultValue="Hello World!" label="Label" variant="list" />
    </div>
  ),
}
