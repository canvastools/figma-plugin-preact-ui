import { StoryObj } from "@storybook/preact"

import { MenuItemAction } from "../../../index"

import { MenuContainer } from "../MenuContainer"

type Story = StoryObj<typeof MenuContainer>

export const SizeStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<MenuContainer>{children}</MenuContainer>

<MenuContainer
  width={200}
  height={300}
>
  {children}
</MenuContainer>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full sb-gap-40">
      <MenuContainer>
        <MenuItemAction>No width or height</MenuItemAction>
      </MenuContainer>

      <MenuContainer width={200}>
        <MenuItemAction>Width: 200</MenuItemAction>
      </MenuContainer>

      <MenuContainer height={300}>
        <MenuItemAction>Height: 300</MenuItemAction>
      </MenuContainer>

      <MenuContainer width={200} height={300}>
        <MenuItemAction>Width: 200, Height: 300</MenuItemAction>
      </MenuContainer>
    </div>
  ),
}
