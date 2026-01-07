import { StoryObj } from "@storybook/preact"

import { link } from "../../../index"

import { ButtonIcon } from "../ButtonIcon"

type Story = StoryObj<typeof ButtonIcon>

export const IconStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      description: {
        story:
          "The `icon` prop is a shortcut for the displaying the icon (glyph) as a child. There is no need to import the <a href='/docs/components-icon--docs'>`<Icon/>`</a> component separately.",
      },
      source: {
        language: "tsx",
        code: `
import { link } from "figma-plugin-preact-ui"

<ButtonIcon icon={{ glyph: link }} />
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-420 sb-gap-16">
      <ButtonIcon icon={{ glyph: link }} />
    </div>
  ),
}
