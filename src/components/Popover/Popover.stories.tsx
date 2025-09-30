import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"
import { useRef, useState } from "preact/hooks"

import { Popover } from "./Popover"

import { OverlayPositioner } from "../OverlayPositioner/OverlayPositioner"
import { Spacing } from "../Spacing/Spacing"
import { Stack } from "../Stack/Stack"
import { Bar } from "../Bar/Bar"
import { Button } from "../Button/Button"
import { Text } from "../Text/Text"
import { Section } from "../Section/Section"
import { ScrollContext } from "../ScrollContext/ScrollContext"
import { ScrollContainer } from "../ScrollContainer/ScrollContainer"
import { ListContext } from "../ListContext/ListContext"
import { ListContainer } from "../ListContainer/ListContainer"
import { ListItem } from "../ListItem/ListItem"
import type { ListItemData } from "../ListContext/ListContext.types"

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
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
    const [open, setOpen] = useState(false)
    const anchorRef = useRef<HTMLButtonElement | null>(null)

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
              <Text>Fixed Size Popover</Text>
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
