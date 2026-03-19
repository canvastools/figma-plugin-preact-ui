import { StoryObj } from '@storybook/preact'

import { TextArea } from '../TextArea'

type Story = StoryObj<typeof TextArea>

export const VariantStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      description: {
        story: 'Layout variants with optional label.',
      },
      source: {
        language: 'tsx',
        code: `
<TextArea variant="default" label="Label" />

<TextArea variant="list" label="Label" />
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-40">
      <TextArea defaultValue={'Line one\nLine two'} label="Label" variant="default" />
      <TextArea defaultValue={'Line one\nLine two'} label="Label" variant="list" />
    </div>
  ),
}
