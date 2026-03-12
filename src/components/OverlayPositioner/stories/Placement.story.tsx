import { StoryObj } from '@storybook/preact'

import { useRef } from 'preact/hooks'

import { Button, PopoverContainer, Section, Text } from '../../../index'

import { OverlayPositioner } from '../OverlayPositioner'

type Story = StoryObj<typeof OverlayPositioner>

export const PlacementStory: Story = {
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
  placement="bottom"
  placementFallback={["top", "right", "left"]}
>
  {children}
</OverlayPositioner>
`,
      },
    },
  },
  render: () => {
    const anchorRefTop = useRef<HTMLButtonElement | null>(null)
    const anchorRefTopLeft = useRef<HTMLButtonElement | null>(null)
    const anchorRefTopRight = useRef<HTMLButtonElement | null>(null)

    const anchorRefBottom = useRef<HTMLButtonElement | null>(null)
    const anchorRefBottomLeft = useRef<HTMLButtonElement | null>(null)
    const anchorRefBottomRight = useRef<HTMLButtonElement | null>(null)

    const anchorRefLeft = useRef<HTMLButtonElement | null>(null)
    const anchorRefLeftTop = useRef<HTMLButtonElement | null>(null)
    const anchorRefLeftBottom = useRef<HTMLButtonElement | null>(null)

    const anchorRefRight = useRef<HTMLButtonElement | null>(null)
    const anchorRefRightTop = useRef<HTMLButtonElement | null>(null)
    const anchorRefRightBottom = useRef<HTMLButtonElement | null>(null)

    const Content = () => (
      <PopoverContainer width={200}>
        <Section>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa
            aperiam eos animi.
          </Text>
        </Section>
      </PopoverContainer>
    )

    return (
      <div className="sb-column sb-width-full sb-gap-16">
        <div className="sb-row sb-width-full sb-gap-16">
          <Button ref={anchorRefTopLeft}>Top Left</Button>

          <OverlayPositioner anchorRef={anchorRefTopLeft} placement="top-left">
            <Content />
          </OverlayPositioner>

          <Button ref={anchorRefTop}>Top</Button>

          <OverlayPositioner anchorRef={anchorRefTop} placement="top">
            <Content />
          </OverlayPositioner>

          <Button ref={anchorRefTopRight}>Top Right</Button>

          <OverlayPositioner anchorRef={anchorRefTopRight} placement="top-right">
            <Content />
          </OverlayPositioner>
        </div>

        <div className="sb-row sb-width-full sb-gap-16">
          <Button ref={anchorRefBottomLeft}>Bottom Left</Button>

          <OverlayPositioner anchorRef={anchorRefBottomLeft} placement="bottom-left">
            <Content />
          </OverlayPositioner>

          <Button ref={anchorRefBottom}>Bottom</Button>

          <OverlayPositioner anchorRef={anchorRefBottom} placement="bottom">
            <Content />
          </OverlayPositioner>

          <Button ref={anchorRefBottomRight}>Bottom Right</Button>

          <OverlayPositioner anchorRef={anchorRefBottomRight} placement="bottom-right">
            <Content />
          </OverlayPositioner>
        </div>

        <div className="sb-row sb-width-full sb-gap-16">
          <Button ref={anchorRefLeftTop}>Left Top</Button>

          <OverlayPositioner anchorRef={anchorRefLeftTop} placement="left-top">
            <Content />
          </OverlayPositioner>

          <Button ref={anchorRefLeft}>Left</Button>

          <OverlayPositioner anchorRef={anchorRefLeft} placement="left">
            <Content />
          </OverlayPositioner>

          <Button ref={anchorRefLeftBottom}>Left Bottom</Button>

          <OverlayPositioner anchorRef={anchorRefLeftBottom} placement="left-bottom">
            <Content />
          </OverlayPositioner>
        </div>

        <div className="sb-row sb-width-full sb-gap-16">
          <Button ref={anchorRefRightTop}>Right Top</Button>

          <OverlayPositioner anchorRef={anchorRefRightTop} placement="right-top">
            <Content />
          </OverlayPositioner>

          <Button ref={anchorRefRight}>Right</Button>

          <OverlayPositioner anchorRef={anchorRefRight} placement="right">
            <Content />
          </OverlayPositioner>

          <Button ref={anchorRefRightBottom}>Right Bottom</Button>

          <OverlayPositioner anchorRef={anchorRefRightBottom} placement="right-bottom">
            <Content />
          </OverlayPositioner>
        </div>
      </div>
    )
  },
}
