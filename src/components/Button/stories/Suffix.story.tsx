import { StoryObj } from "@storybook/preact"

import { Button } from "../Button"
import { Stack, Icon, help } from "../../../index"

type Story = StoryObj<typeof Button>

export const SuffixStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Button 
  intent="neutral"
  suffix={
    <Icon 
      glyph={help}
      variant="scaled"
      intent="neutral"
      interactive
    />
  }
>
  {children}
</Button>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Stack direction="row" spacing={400}>
          <Button
            intent="neutral"
            intentModifiers="default"
            suffix={
              <Icon
                glyph={help}
                variant="scaled"
                intent="neutral"
                interactive
              />
            }
          >
            Neutral
          </Button>

          <Button
            intent="neutral"
            intentModifiers="default"
            ghost
            suffix={
              <Icon
                glyph={help}
                variant="scaled"
                intent="neutral"
                interactive
              />
            }
          >
            Neutral Ghost
          </Button>
        </Stack>

        <Stack direction="row" spacing={400}>
          <Button
            intent="brand"
            intentModifiers="default"
            suffix={
              <Icon glyph={help} variant="scaled" intent="brand" interactive />
            }
          >
            Brand
          </Button>
          <Button
            intent="neutral"
            intentModifiers="brand"
            suffix={
              <Icon
                glyph={help}
                variant="scaled"
                intent="neutral"
                intentModifiers="brand"
                interactive
              />
            }
          >
            Neutral Brand
          </Button>
          <Button
            intent="neutral"
            intentModifiers="brand"
            ghost
            suffix={
              <Icon
                glyph={help}
                variant="scaled"
                intent="neutral"
                intentModifiers="brand"
                interactive
              />
            }
          >
            Neutral Brand Ghost
          </Button>
        </Stack>

        <Stack direction="row" spacing={400}>
          <Button
            intent="danger"
            intentModifiers="default"
            suffix={
              <Icon glyph={help} variant="scaled" intent="danger" interactive />
            }
          >
            Danger
          </Button>
          <Button
            intent="neutral"
            intentModifiers="danger"
            suffix={
              <Icon
                glyph={help}
                variant="scaled"
                intent="neutral"
                intentModifiers="danger"
                interactive
              />
            }
          >
            Neutral Danger
          </Button>
          <Button
            intent="neutral"
            intentModifiers="danger"
            ghost
            suffix={
              <Icon
                glyph={help}
                variant="scaled"
                intent="neutral"
                intentModifiers="danger"
                interactive
              />
            }
          >
            Neutral Danger Ghost
          </Button>
        </Stack>

        <Stack direction="row" spacing={400}>
          <Button
            intent="success"
            intentModifiers="default"
            suffix={
              <Icon
                glyph={help}
                variant="scaled"
                intent="success"
                interactive
              />
            }
          >
            Success
          </Button>
        </Stack>

        <Stack direction="row" spacing={400}>
          <Button
            intent="neutral-inverted"
            intentModifiers="default"
            suffix={
              <Icon
                glyph={help}
                variant="scaled"
                intent="neutral-inverted"
                interactive
              />
            }
          >
            Neutral Inverted
          </Button>
        </Stack>
      </Stack>
    </div>
  ),
}
