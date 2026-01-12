import { StoryObj } from "@storybook/preact"

import { MenuContainer, MenuItemAction } from "../../../index"

import { MenuDivider } from "../MenuDivider"

type Story = StoryObj<typeof MenuDivider>

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
<MenuDivider variant="full" />

<MenuDivider variant="inset" />
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-40">
      <MenuContainer width={208}>
        <MenuItemAction>Full divider</MenuItemAction>
        <MenuDivider variant="full" />
        <MenuItemAction>Full divider</MenuItemAction>
      </MenuContainer>

      <MenuContainer width={208}>
        <MenuItemAction>Inset divider</MenuItemAction>
        <MenuDivider variant="inset" />
        <MenuItemAction>Inset divider</MenuItemAction>
      </MenuContainer>
    </div>
  ),
}
