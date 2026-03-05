import { StoryObj } from '@storybook/preact'

import { Input, Icon, link } from '../../../index'

import { ButtonIcon } from '../ButtonIcon'

type Story = StoryObj<typeof ButtonIcon>

export const TranslucentStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      description: {
        story: "A special variant used inside <a href='/docs/components-input--docs'>`<Input/>`</a>.",
      },
      source: {
        language: 'tsx',
        code: `
<Input
  placeholder="Placeholder"
  suffix={
    <ButtonIcon translucent>
      <Icon 
        glyph={link}
      />
    </ButtonIcon>
  }
/>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-300 sb-gap-16">
      <Input
        placeholder="Placeholder"
        suffix={
          <ButtonIcon translucent>
            <Icon glyph={link} />
          </ButtonIcon>
        }
      />
    </div>
  ),
}
