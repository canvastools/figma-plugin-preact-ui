import { Meta, StoryObj } from "@storybook/preact"
import { useRef, useState } from "preact/hooks"

import { Popover } from "./Popover"

import { Stack } from "../Stack/Stack"
import { Text } from "../Text/Text"
import { Section } from "../Section/Section"
import { Button } from "../Button/Button"
import { OverlayPositioner } from "../OverlayPositioner/OverlayPositioner"

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A wrapper component that creates a popover-like container. Usually used inside &lt;OverlayPositioner/&gt; component.",
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
        <Section>
          <Popover {...args}>
            <Section>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam
                eos animi id nam tenetur adipisci? Amet nisi doloremque
                asperiores quisquam, repudiandae similique magnam aspernatur
                esse dignissimos molestiae.
              </Text>
            </Section>
          </Popover>
        </Section>
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
        <Section>
          <Stack spacing={400}>
            <Popover width={300} height={200}>
              <Section>
                <Text>Fixed Size Popover</Text>
              </Section>
            </Popover>
            <Popover width="auto" height="auto">
              <Section>
                <Text>Auto Size Popover</Text>
              </Section>
            </Popover>
          </Stack>
        </Section>
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
          "Interactive displaying of the popover managed by the &lt;OverlayPositioner/&gt; component.",
      },
    },
  },
  render: () => {
    const PopoverExample = () => {
      const anchorRefX = useRef<HTMLButtonElement | null>(null)
      const anchorRefY = useRef<HTMLButtonElement | null>(null)

      return (
        <Section>
          <Stack spacing={200}>
            <Button ref={anchorRefX as any}>Popover X</Button>
            <OverlayPositioner anchorRef={anchorRefX} placement="x" offsetX={8}>
              <Popover width={300}>
                <Section>
                  <Text variant="heading">Popover with X placement</Text>
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
            <Button ref={anchorRefY as any}>Popover Y</Button>
            <OverlayPositioner anchorRef={anchorRefY} placement="y" offsetY={8}>
              <Popover width={300}>
                <Section>
                  <Text variant="heading">Popover with Y placement</Text>
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
        </Section>
      )
    }

    return (
      <div
        className="sb-column sb-width-full sb-height-300"
        style={{ justifyContent: "space-between" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <PopoverExample />
          <PopoverExample />
          <PopoverExample />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <PopoverExample />
          <PopoverExample />
          <PopoverExample />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <PopoverExample />
          <PopoverExample />
          <PopoverExample />
        </div>
      </div>
    )
  },
}
