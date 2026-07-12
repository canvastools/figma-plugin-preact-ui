import { StoryObj } from '@storybook/preact-vite'

import { useRef } from 'preact/hooks'

import { Button, PopoverContainer, Section, Text } from '../../../index'

import { OverlayPositioner } from '../OverlayPositioner'

type Story = StoryObj<typeof OverlayPositioner>

export const OffsetStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<OverlayPositioner
  anchorRef={anchorRef}
  offsetX={8}
  offsetY={8}
  offsetEdge={16}
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

        <OverlayPositioner anchorRef={anchorRef} offsetY={8} offsetEdge={16}>
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
