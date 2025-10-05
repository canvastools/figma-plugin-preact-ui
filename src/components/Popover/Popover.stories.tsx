import { Meta, StoryObj } from "@storybook/preact"
import { useRef } from "preact/hooks"

import { Popover } from "./Popover"

import { Stack } from "../../index"
import { Text } from "../../index"
import { Section } from "../../index"
import { Button } from "../../index"
import { OverlayPositioner } from "../../index"

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A wrapper component that creates a popover-like container. Used inside &lt;OverlayPositioner/&gt; component.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    width: {
      control: { type: "number" },
      defaultValue: { summary: "auto" },
      table: {
        type: {
          summary: "number | 'auto'",
        },
      },
    },
    height: {
      control: { type: "number" },
      defaultValue: { summary: "auto" },
      table: {
        type: {
          summary: "number | 'auto'",
        },
      },
    },
    children: {
      control: { disable: true },
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Popover>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    width: 300,
    height: 300,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    return (
      <div className="sb-column sb-width-full">
        <Popover {...args}>
          <Section>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae
              autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos
              animi id nam tenetur adipisci? Amet nisi doloremque asperiores
              quisquam, repudiandae similique magnam aspernatur esse dignissimos
              molestiae.
            </Text>
          </Section>
        </Popover>
      </div>
    )
  },
}

export const Size: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    return (
      <div className="sb-column sb-width-full">
        <Stack spacing={400}>
          <Popover width={300} height={200}>
            <Section>
              <Text>Fixed Size Popover 300x200</Text>
            </Section>
          </Popover>
          <Popover width="auto" height="auto">
            <Section>
              <Text>Auto Size Popover</Text>
            </Section>
          </Popover>
        </Stack>
      </div>
    )
  },
}

export const Placement: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      description: {
        story:
          "Interactive displaying of the tooltip (including the arrow pointing to the anchor) managed by the &lt;OverlayPositioner/&gt; component.",
      },
    },
  },
  render: () => {
    const anchorRefTop = useRef<HTMLButtonElement | null>(null)
    const anchorRefTopLeft = useRef<HTMLButtonElement | null>(null)
    const anchorRefTopEnd = useRef<HTMLButtonElement | null>(null)

    const anchorRefBottom = useRef<HTMLButtonElement | null>(null)
    const anchorRefBottomLeft = useRef<HTMLButtonElement | null>(null)
    const anchorRefBottomEnd = useRef<HTMLButtonElement | null>(null)

    const anchorRefLeft = useRef<HTMLButtonElement | null>(null)
    const anchorRefLeftTop = useRef<HTMLButtonElement | null>(null)
    const anchorRefLeftBottom = useRef<HTMLButtonElement | null>(null)

    const anchorRefRight = useRef<HTMLButtonElement | null>(null)
    const anchorRefRightTop = useRef<HTMLButtonElement | null>(null)
    const anchorRefRightBottom = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Stack direction="row" spacing={400}>
          <Stack spacing={200}>
            <Button ref={anchorRefTopLeft}>Top Left</Button>
            <OverlayPositioner
              anchorRef={anchorRefTopLeft}
              placement="top-left"
              paddingY={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefTop}>Top</Button>
            <OverlayPositioner
              anchorRef={anchorRefTop}
              placement="top"
              paddingY={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefTopEnd}>Top Right</Button>
            <OverlayPositioner
              anchorRef={anchorRefTopEnd}
              placement="top-right"
              paddingY={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>
          </Stack>

          <Stack spacing={200}>
            <Button ref={anchorRefBottomLeft}>Bottom Left</Button>
            <OverlayPositioner
              anchorRef={anchorRefBottomLeft}
              placement="bottom-left"
              paddingY={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefBottom}>Bottom</Button>
            <OverlayPositioner
              anchorRef={anchorRefBottom}
              placement="bottom"
              paddingY={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefBottomEnd}>Bottom Right</Button>
            <OverlayPositioner
              anchorRef={anchorRefBottomEnd}
              placement="bottom-right"
              paddingY={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>
          </Stack>

          <Stack spacing={200}>
            <Button ref={anchorRefLeftTop}>Left Top</Button>
            <OverlayPositioner
              anchorRef={anchorRefLeftTop}
              placement="left-top"
              paddingX={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>
            <Button ref={anchorRefLeft}>Left</Button>
            <OverlayPositioner
              anchorRef={anchorRefLeft}
              placement="left"
              paddingX={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>
            <Button ref={anchorRefLeftBottom}>Left Bottom</Button>
            <OverlayPositioner
              anchorRef={anchorRefLeftBottom}
              placement="left-bottom"
              paddingX={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>
          </Stack>

          <Stack spacing={200}>
            <Button ref={anchorRefRightTop}>Right Top</Button>
            <OverlayPositioner
              anchorRef={anchorRefRightTop}
              placement="right-top"
              paddingX={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefRight}>Right</Button>
            <OverlayPositioner
              anchorRef={anchorRefRight}
              placement="right"
              paddingX={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>

            <Button ref={anchorRefRightBottom}>Right Bottom</Button>
            <OverlayPositioner
              anchorRef={anchorRefRightBottom}
              placement="right-bottom"
              paddingX={8}
            >
              <Popover width={300}>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    quae autem dolorum quibusdam necessitatibus natus, ipsa
                    aperiam eos animi id nam tenetur adipisci? Amet nisi
                    doloremque asperiores quisquam, repudiandae similique magnam
                    aspernatur esse dignissimos molestiae.
                  </Text>
                </Section>
              </Popover>
            </OverlayPositioner>
          </Stack>
        </Stack>
      </div>
    )
  },
}
