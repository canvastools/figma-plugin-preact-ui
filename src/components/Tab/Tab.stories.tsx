import type { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"

import { VariantStory } from "./stories/Variant.story"
import { PrefixStory } from "./stories/Prefix.story"
import { SuffixStory } from "./stories/Suffix.story"

import { TabContext, TabList, Section } from "../../index"

import { Tab } from "./Tab"

const meta: Meta<typeof Tab> = {
  title: "Components/Tab",
  component: Tab,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The component is always used within <a href='/docs/components-tabcontext--docs'>`<TabContext/>`</a>, and optionally in combination with <a href='/docs/components-tablist--docs'>`<TabList/>`</a>.",
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
    },
    value: {
      control: { disable: true },
      description: "<strong>*</strong>Value associated with the tab.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "single"],
      defaultValue: { summary: "default" },
    },
    prefix: {
      control: { disable: true },
      description: "Element displayed before children.",
      table: {
        type: {
          summary: "preact.ComponentChildren",
        },
      },
    },
    suffix: {
      control: { disable: true },
      description: "Element displayed after children.",
      table: {
        type: {
          summary: "preact.ComponentChildren",
        },
      },
    },
    children: {
      control: { disable: true },
      description: "<strong>*</strong>",
      table: {
        type: {
          summary: "preact.ComponentChildren",
        },
      },
    },
    onClick: {
      table: {
        type: {
          summary: "(args) => void",
          detail: `
args: {
  event: MouseEvent
  value: string
}
`,
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tab>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    variant: "default",
    onClick: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<TabContext defaultValue="tab-1">
  <TabList>
    <Tab value="tab-1" {...args}>{children}</Tab>
    <Tab value="tab-2" {...args}>{children}</Tab>
    <Tab value="tab-3" {...args}>{children}</Tab>
  </TabList>
  <TabPanel value="tab-1">Tab 1 Panel</TabPanel>
  <TabPanel value="tab-2">Tab 2 Panel</TabPanel>
  <TabPanel value="tab-3">Tab 3 Panel</TabPanel>
</TabContext>
        `,
      },
    },
  },
  render: (args) => {
    // @ts-ignore-next-line
    if (args.variant === "default") {
      return (
        <div className="sb-column sb-width-full">
          <TabContext defaultValue="tab-1">
            <Section>
              <TabList>
                <Tab {...args} value="tab-1">
                  Tab 1
                </Tab>
                <Tab {...args} value="tab-2">
                  Tab 2
                </Tab>
                <Tab {...args} value="tab-3">
                  Tab 3
                </Tab>
              </TabList>
            </Section>
          </TabContext>
        </div>
      )
    } else {
      return (
        <div className="sb-column sb-width-full">
          <TabContext value="tab-1">
            <Section>
              <TabList>
                <Tab {...args} value="tab-1" variant="single">
                  Single
                </Tab>
              </TabList>
            </Section>
          </TabContext>
        </div>
      )
    }
  },
}

export const Variant = VariantStory
export const Prefix = PrefixStory
export const Suffix = SuffixStory
