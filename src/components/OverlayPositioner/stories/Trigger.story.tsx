import { StoryObj } from '@storybook/preact-vite'

import { useRef } from 'preact/hooks'

import { Button, PopoverContainer, Section, Text } from '../../../index'

import { OverlayPositioner } from '../OverlayPositioner'

type Story = StoryObj<typeof OverlayPositioner>

export const TriggerStory: Story = {
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
  trigger="click"
>
  {children}
</OverlayPositioner>

<OverlayPositioner
  anchorRef={anchorRef}
  trigger="hover"
>
  {children}
</OverlayPositioner>
`,
      },
    },
  },
  render: () => {
    const anchorRefClick = useRef<HTMLButtonElement | null>(null)
    const anchorRefHover = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full sb-gap-16">
        <Button ref={anchorRefClick}>Show on click</Button>
        <Button ref={anchorRefHover}>Show on hover</Button>

        <OverlayPositioner anchorRef={anchorRefClick}>
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

        <OverlayPositioner anchorRef={anchorRefHover} trigger="hover">
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
