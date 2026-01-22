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
    id: {
      control: { disable: true },
      description: "<strong>*</strong>",
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
  id: string
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
<TabContext defaultActiveId="tab-1">
  <TabList>
    <Tab id="tab-1" {...args}>{children}</Tab>
    <Tab id="tab-2" {...args}>{children}</Tab>
    <Tab id="tab-3" {...args}>{children}</Tab>
  </TabList>
  <TabPanel tabId="tab-1">Tab 1 Panel</TabPanel>
  <TabPanel tabId="tab-2">Tab 2 Panel</TabPanel>
  <TabPanel tabId="tab-3">Tab 3 Panel</TabPanel>
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
          <TabContext defaultActiveId="tab-1">
            <Section>
              <TabList>
                <Tab {...args} id="tab-1">
                  Tab 1
                </Tab>
                <Tab {...args} id="tab-2">
                  Tab 2
                </Tab>
                <Tab {...args} id="tab-3">
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
          <TabContext defaultActiveId="tab-1">
            <Section>
              <TabList>
                <Tab {...args} id="tab-1" variant="single">
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
