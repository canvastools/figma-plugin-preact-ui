import { StoryObj } from '@storybook/preact-vite'

import { link } from '../glyphs'

import { Icon } from '../Icon'

type Story = StoryObj<typeof Icon>

export const VariantStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Icon
  glyph={link}
  variant="default"
/>

<Icon
  glyph={link}
  variant="upscaled"
/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-row sb-width-full sb-gap-16">
      <Icon glyph={link} variant="default" className="sb-container" />
      <Icon glyph={link} variant="upscaled" className="sb-container" />
    </div>
  ),
}
