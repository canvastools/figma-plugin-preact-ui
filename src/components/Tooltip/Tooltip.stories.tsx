import { Meta, StoryObj } from "@storybook/preact"
import { useRef } from "preact/hooks"

import { Tooltip } from "./Tooltip"

import { Stack, Text, OverlayPositioner } from "../../index"

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A wrapper component that creates a tooltip-like container. Used inside &lt;OverlayPositioner/&gt; component.",
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
type Story = StoryObj<typeof Tooltip>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    width: 300,
    height: 100,
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    return (
      <div className="sb-column sb-width-full">
        <Tooltip {...args}>
          <Text intent="neutral-inverted-fixed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae
            autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi
            id nam tenetur adipisci?
          </Text>
        </Tooltip>
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
          <Tooltip width={200} height={100}>
            <Text intent="neutral-inverted-fixed">
              Fixed Size Tooltip 200x100
            </Text>
          </Tooltip>
          <Tooltip width="auto" height="auto">
            <Text intent="neutral-inverted-fixed">Auto Size Tooltip</Text>
          </Tooltip>
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
    const anchorRefTop = useRef<HTMLDivElement | null>(null)
    const anchorRefTopLeft = useRef<HTMLDivElement | null>(null)
    const anchorRefTopEnd = useRef<HTMLDivElement | null>(null)

    const anchorRefBottom = useRef<HTMLDivElement | null>(null)
    const anchorRefBottomLeft = useRef<HTMLDivElement | null>(null)
    const anchorRefBottomEnd = useRef<HTMLDivElement | null>(null)

    const anchorRefLeft = useRef<HTMLDivElement | null>(null)
    const anchorRefLeftTop = useRef<HTMLDivElement | null>(null)
    const anchorRefLeftBottom = useRef<HTMLDivElement | null>(null)

    const anchorRefRight = useRef<HTMLDivElement | null>(null)
    const anchorRefRightTop = useRef<HTMLDivElement | null>(null)
    const anchorRefRightBottom = useRef<HTMLDivElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Stack direction="row" spacing={400}>
          <Stack spacing={200}>
            <Text ref={anchorRefTopLeft}>Top Left</Text>
            <OverlayPositioner
              anchorRef={anchorRefTopLeft}
              placement="top-left"
              arrow={true}
              trigger="hover"
              paddingY={8}
            >
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>

            <Text ref={anchorRefTop}>Top</Text>
            <OverlayPositioner
              anchorRef={anchorRefTop}
              placement="top"
              arrow={true}
              trigger="hover"
              paddingY={8}
            >
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>

            <Text ref={anchorRefTopEnd}>Top Right</Text>
            <OverlayPositioner
              anchorRef={anchorRefTopEnd}
              placement="top-right"
              arrow={true}
              trigger="hover"
              paddingY={8}
            >
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>
          </Stack>

          <Stack spacing={200}>
            <Text ref={anchorRefBottomLeft}>Bottom Left</Text>
            <OverlayPositioner
              anchorRef={anchorRefBottomLeft}
              placement="bottom-left"
              arrow={true}
              trigger="hover"
              paddingY={8}
            >
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>

            <Text ref={anchorRefBottom}>Bottom</Text>
            <OverlayPositioner
              anchorRef={anchorRefBottom}
              placement="bottom"
              arrow={true}
              trigger="hover"
              paddingY={8}
            >
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>

            <Text ref={anchorRefBottomEnd}>Bottom Right</Text>
            <OverlayPositioner
              anchorRef={anchorRefBottomEnd}
              placement="bottom-right"
              arrow={true}
              trigger="hover"
              paddingY={8}
            >
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>
          </Stack>

          <Stack spacing={200}>
            <Text ref={anchorRefLeftTop}>Left Top</Text>
            <OverlayPositioner
              anchorRef={anchorRefLeftTop}
              placement="left-top"
              arrow={true}
              trigger="hover"
              paddingX={12}
              paddingY={-4}
            >
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>

            <Text ref={anchorRefLeft}>Left</Text>
            <OverlayPositioner
              anchorRef={anchorRefLeft}
              placement="left"
              arrow={true}
              trigger="hover"
              paddingX={12}
            >
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>

            <Text ref={anchorRefLeftBottom}>Left Bottom</Text>
            <OverlayPositioner
              anchorRef={anchorRefLeftBottom}
              placement="left-bottom"
              arrow={true}
              trigger="hover"
              paddingX={12}
              paddingY={-4}
            >
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>
          </Stack>

          <Stack spacing={200}>
            <Text ref={anchorRefRightTop}>Right Top</Text>
            <OverlayPositioner
              anchorRef={anchorRefRightTop}
              placement="right-top"
              arrow={true}
              trigger="hover"
              paddingX={12}
              paddingY={-4}
            >
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>

            <Text ref={anchorRefRight}>Right</Text>
            <OverlayPositioner
              anchorRef={anchorRefRight}
              placement="right"
              arrow={true}
              trigger="hover"
              paddingX={12}
            >
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>

            <Text ref={anchorRefRightBottom}>Right Bottom</Text>
            <OverlayPositioner
              anchorRef={anchorRefRightBottom}
              placement="right-bottom"
              arrow={true}
              trigger="hover"
              paddingX={12}
              paddingY={-4}
            >
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>
          </Stack>
        </Stack>
      </div>
    )
  },
}
