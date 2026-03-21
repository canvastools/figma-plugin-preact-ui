import { StoryObj } from '@storybook/preact'

import { useRef } from 'preact/hooks'

import { Button, PopoverContainer, Section, Text } from '../../../index'

import { OverlayPositioner } from '../OverlayPositioner'

type Story = StoryObj<typeof OverlayPositioner>

export const DraggableStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<OverlayPositioner
  anchorRef={anchorRef}
  draggable={true}
>
  {children}
</OverlayPositioner>
`,
      },
    },
  },
  render: () => {
    const anchorRef = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full sb-gap-16">
        <Button ref={anchorRef}>Show Overlay</Button>

        <OverlayPositioner anchorRef={anchorRef} draggable={true}>
          <PopoverContainer width={300}>
            <Section>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus,
                ipsa aperiam eos animi id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam, repudiandae similique
                magnam aspernatur esse dignissimos molestiae.
              </Text>
            </Section>
          </PopoverContainer>
        </OverlayPositioner>
      </div>
    )
  },
}
