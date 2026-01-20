import { StoryObj } from "@storybook/preact"

import { TabContext, Section, TabList } from "../../../index"

import { Tab } from "../Tab"

type Story = StoryObj<typeof Tab>

export const VariantStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Tab variant="default">{children}</Tab>

<Tab variant="single">{children}</Tab>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <TabContext defaultValue="tab-1">
        <Section>
          <TabList>
            <Tab variant="default" value="tab-1">
              First Tab
            </Tab>
            <Tab variant="default" value="tab-2">
              Second Tab
            </Tab>
          </TabList>
        </Section>
      </TabContext>

      <TabContext value="tab-1">
        <Section>
          <TabList>
            <Tab variant="single" value="tab-1">
              Single
            </Tab>
          </TabList>
        </Section>
      </TabContext>
    </div>
  ),
}
