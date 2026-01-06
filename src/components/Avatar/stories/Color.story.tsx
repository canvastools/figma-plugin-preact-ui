import { StoryObj } from "@storybook/preact"

import { Avatar } from "../Avatar"

type Story = StoryObj<typeof Avatar>

export const ColorStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Avatar 
  colorBackground="var(--pui-color-brand-bg-default)"
  colorText="#ffff00"
>
  {children}
</Avatar>

<Avatar 
  colorBackground="rgb(0, 255, 0, 0.5)"
  colorText="rgb(0, 0, 0)"
>
  {children}
</Avatar>

`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Avatar
        colorBackground="var(--pui-color-brand-bg-default)"
        colorText="#ffff00"
      >
        A
      </Avatar>
    </div>
  ),
}
