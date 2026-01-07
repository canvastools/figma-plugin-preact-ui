import { StoryObj } from "@storybook/preact"

import {
  Text,
  Section,
  ScrollContext,
  ScrollContainer,
  useScrollContext,
} from "../../../index"

import { Bar } from "../Bar"

type Story = StoryObj<typeof Bar>

export const StickyStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      description: {
        story:
          "By combining the scroll-related components with <a href='/docs/components-bar--docs'>`<Bar/>`</a>, you can simulate sticky elements.<br/>The visibility of the dividers is managed using the values from <a href='/docs/layout-scrollcontext--docs'>`<ScrollContext/>`</a>.",
      },
      source: {
        language: "tsx",
        code: `
const { isAtTop, isAtBottom } = useScrollContext()

<ScrollContext>

  <Bar showDividerBottom={!isAtTop}>
    <Section>
      <Text>Top Bar</Text>
    </Section>
  </Bar>

  <ScrollContainer>
    <Section>
      <Text
        intent="neutral"
        intentModifiers="default"
        variant="body"
        size="medium"
      >
        {children}
      </Text>
    </Section>
  </ScrollContainer>

  <Bar showDividerTop={!isAtBottom}>
    <Section>
      <Text>Bottom Bar</Text>
    </Section>
  </Bar>

</ScrollContext>

`,
      },
    },
  },
  render: () => {
    const TopBar = () => {
      const { isAtTop } = useScrollContext()

      return (
        <Bar showDividerBottom={!isAtTop}>
          <Section>
            <Text variant="heading" size="small">
              Top Bar
            </Text>
          </Section>
        </Bar>
      )
    }

    const BottomBar = () => {
      const { isAtBottom } = useScrollContext()

      return (
        <Bar showDividerTop={!isAtBottom}>
          <Section>
            <Text variant="heading" size="small">
              Bottom Bar
            </Text>
          </Section>
        </Bar>
      )
    }

    return (
      <div className="sb-column sb-width-full sb-height-300">
        <ScrollContext>
          <TopBar />
          <ScrollContainer>
            <Section>
              <Text
                intent="neutral"
                intentModifiers="default"
                variant="body"
                size="medium"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </Text>
            </Section>
          </ScrollContainer>
          <BottomBar />
        </ScrollContext>
      </div>
    )
  },
}
