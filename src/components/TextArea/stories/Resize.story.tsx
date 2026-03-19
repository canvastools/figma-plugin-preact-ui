import { StoryObj } from '@storybook/preact'

import { TextArea } from '../TextArea'

type Story = StoryObj<typeof TextArea>

export const ResizeStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      description: {
        story: 'Hover the field to show the corner handle. Drag vertically to resize.',
      },
      source: {
        language: 'tsx',
        code: `
<TextArea
  resize="y"
  minHeight={72}
  maxHeight={136}
  label="Resizable"
  defaultValue="Hover the corner, then drag."
/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-40">
      <TextArea
        resize="y"
        minHeight={72}
        maxHeight={136}
        label="Resizable"
        defaultValue={'Hover the corner, then drag.\n\nHeight is clamped between minHeight and maxHeight.'}
      />
    </div>
  ),
}
