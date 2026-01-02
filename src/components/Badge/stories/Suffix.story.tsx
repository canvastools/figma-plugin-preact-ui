import { StoryObj } from "@storybook/preact"

import { Badge } from "../Badge"
import { Icon, Stack, help } from "../../../index"

type Story = StoryObj<typeof Badge>

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
<Badge
  intent="neutral"
  suffix={
    <Icon
      glyph={help}
      size={16}
      intent="neutral"
    />
  }
>
  {children}
</Badge>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Stack spacing={400}>
        <Stack direction="row" spacing={400}>
          <Badge
            intent="neutral"
            suffix={<Icon glyph={help} size={16} intent="neutral" />}
          >
            Neutral
          </Badge>
          <Badge
            intent="neutral"
            intentModifiers="secondary"
            suffix={
              <Icon
                glyph={help}
                size={16}
                intent="neutral"
                intentModifiers="secondary"
              />
            }
          >
            Neutral Secondary
          </Badge>
        </Stack>

        <Stack direction="row" spacing={400}>
          <Badge
            intent="brand"
            suffix={<Icon glyph={help} size={16} intent="brand" />}
          >
            Brand
          </Badge>
          <Badge
            intent="neutral"
            intentModifiers="brand"
            suffix={
              <Icon
                glyph={help}
                size={16}
                intent="neutral"
                intentModifiers="brand"
              />
            }
          >
            Neutral Brand
          </Badge>
        </Stack>

        <Stack direction="row" spacing={400}>
          <Badge
            intent="danger"
            suffix={<Icon glyph={help} size={16} intent="danger" />}
          >
            Danger
          </Badge>
          <Badge
            intent="neutral"
            intentModifiers="danger"
            suffix={
              <Icon
                glyph={help}
                size={16}
                intent="neutral"
                intentModifiers="danger"
              />
            }
          >
            Neutral Danger
          </Badge>
        </Stack>

        <Stack direction="row" spacing={400}>
          <Badge
            intent="warning"
            suffix={<Icon glyph={help} size={16} intent="warning" />}
          >
            Warning
          </Badge>
          <Badge
            intent="neutral"
            intentModifiers="warning"
            suffix={
              <Icon
                glyph={help}
                size={16}
                intent="neutral"
                intentModifiers="warning"
              />
            }
          >
            Neutral Warning
          </Badge>
        </Stack>

        <Stack direction="row" spacing={400}>
          <Badge
            intent="success"
            suffix={<Icon glyph={help} size={16} intent="success" />}
          >
            Success
          </Badge>
          <Badge
            intent="neutral"
            intentModifiers="success"
            suffix={
              <Icon
                glyph={help}
                size={16}
                intent="neutral"
                intentModifiers="success"
              />
            }
          >
            Neutral Success
          </Badge>
        </Stack>

        <Stack direction="row" spacing={400}>
          <Badge
            intent="neutral-inverted"
            suffix={<Icon glyph={help} size={16} intent="neutral-inverted" />}
          >
            Neutral Inverted
          </Badge>
        </Stack>
      </Stack>
    </div>
  ),
}
