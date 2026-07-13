import { StoryObj } from '@storybook/preact-vite'

import { Text } from '../../../index'

import { Section } from '../Section'

type Story = StoryObj<typeof Section>

export const PaddingStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<Section padding={{ top: 400 }}>
  {children}
</Section>
`,
      },
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-full">
        <Section className="sb-container" padding={{ top: 400 }}>
          <Text>Padding Top: 400</Text>
        </Section>
      </div>
    )
  },
}
