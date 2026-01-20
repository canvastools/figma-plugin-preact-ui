import { Meta, StoryObj } from "@storybook/preact"

import { StickyStory } from "./stories/Sticky.story"

import { Text, Section } from "../../index"

import { Bar } from "./Bar"

const meta: Meta<typeof Bar> = {
  title: "Layout/Bar",
  component: Bar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A wrapper component for fixed panels with top/bottom dividers.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    showDividerTop: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    showDividerBottom: {
      control: { type: "boolean" },
      defaultValue: { summary: false },
    },
    children: {
      control: { type: "text" },
      description: "<strong>*</strong>",
      table: {
        type: {
          summary: "preact.ComponentChildren",
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Bar>

export const Demo = {
  tags: ["!autodocs"],
  args: {
    className: "",
    showDividerTop: false,
    showDividerBottom: false,
    children: "Bar content",
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Bar {...args}>
  <Section>
    <Text>{children}</Text>
  </Section>
</Bar>
`,
      },
    },
  },
  render: (args) => (
    <div className="sb-column sb-width-full">
      <Bar {...args}>
        <Section>
          {/* @ts-ignore-next-line */}
          <Text>{args.children}</Text>
        </Section>
      </Bar>
    </div>
  ),
}

export const Sticky = StickyStory
