import { StoryObj } from "@storybook/preact"

import { TabContext, Section, TabList, Icon, link } from "../../../index"

import { Tab } from "../Tab"

type Story = StoryObj<typeof Tab>

export const PrefixStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Tab prefix={
    <Icon 
      glyph={link}
      variant="scaled"
    />
  }
>
  {children}
</Tab>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <TabContext defaultValue="tab-1">
        <Section>
          <TabList>
            <Tab
              variant="default"
              value="tab-1"
              prefix={<Icon glyph={link} variant="scaled" />}
            >
              First Tab
            </Tab>
            <Tab
              variant="default"
              value="tab-2"
              prefix={<Icon glyph={link} variant="scaled" />}
            >
              Second Tab
            </Tab>
          </TabList>
        </Section>
      </TabContext>

      <TabContext value="tab-1">
        <Section>
          <TabList>
            <Tab
              variant="single"
              value="tab-1"
              prefix={<Icon glyph={link} variant="scaled" />}
            >
              Single
            </Tab>
          </TabList>
        </Section>
      </TabContext>
    </div>
  ),
}
