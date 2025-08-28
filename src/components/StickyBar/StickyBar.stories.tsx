import { Meta, StoryObj } from "@storybook/preact"

import { StickyBar } from "./StickyBar"

import { Text } from "../Text/Text"

const meta: Meta<typeof StickyBar> = {
  title: "Components/StickyBar",
  component: StickyBar,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    position: {
      control: { type: "radio" },
      options: ["top", "bottom"],
      defaultValue: { summary: "top" },
      description:
        "“For the `top` case, the parent container must have the `overflow` property set. For the `bottom` case, the parent container must have `position: relative`.",
    },
    children: {
      control: { type: "text" },
      table: {
        type: {
          summary: "string | number | JSX.Element",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof StickyBar>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    position: "top",
    children: "StickyBar",
  },
  render: (args) => (
    <div
      className="sb-column sb-container"
      style={{
        width: 300,
        height: 300,
        overflowY: "scroll",
        position: "relative",
      }}
    >
      {
        // @ts-expect-error: Storybook types hack
        args.position == "top" ? (
          <StickyBar position="top">
            <Text>
              {
                // @ts-expect-error: Storybook types hack
                args.children
              }
            </Text>
          </StickyBar>
        ) : null
      }
      <Text
        context="neutral"
        contextModifiers="default"
        variant="body"
        size="medium"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      {
        // @ts-expect-error: Storybook types hack
        args.position == "bottom" ? (
          <StickyBar position="bottom">
            <Text>
              {
                // @ts-expect-error: Storybook types hack
                args.children
              }
            </Text>
          </StickyBar>
        ) : null
      }
    </div>
  ),
}

export const Position: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "In the case of bottom positioning, it should also be located at the end of the target container.",
      },
    },
  },
  render: () => (
    <div class="sb-row sb-gap-16">
      <div
        className="sb-column sb-container"
        style={{
          width: 300,
          height: 300,
          overflowY: "scroll",
          position: "relative",
        }}
      >
        <StickyBar position="top">
          <Text>Top</Text>
        </StickyBar>
        <Text
          context="neutral"
          contextModifiers="default"
          variant="body"
          size="medium"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </div>
      <div
        className="sb-column sb-container"
        style={{
          width: 300,
          height: 300,
          overflowY: "scroll",
          position: "relative",
        }}
      >
        <Text
          context="neutral"
          contextModifiers="default"
          variant="body"
          size="medium"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <StickyBar position="bottom">
          <Text>Bottom</Text>
        </StickyBar>
      </div>
    </div>
  ),
}
