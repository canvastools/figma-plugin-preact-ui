import { Badge } from "../Badge"
import { Stack } from "../../../index"

export const IntentStory = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
    docs: {
      source: {
        language: "tsx",
        code: `
<Badge intent="neutral">Content</Badge>

<Badge 
  intent="neutral"
  intentModifiers="secondary"
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
          <Badge intent="neutral">Neutral</Badge>
          <Badge intent="neutral" intentModifiers="secondary">
            Neutral Secondary
          </Badge>
        </Stack>

        <Stack direction="row" spacing={400}>
          <Badge intent="brand">Brand</Badge>
          <Badge intent="neutral" intentModifiers="brand">
            Neutral Brand
          </Badge>
        </Stack>

        <Stack direction="row" spacing={400}>
          <Badge intent="danger">Danger</Badge>
          <Badge intent="neutral" intentModifiers="danger">
            Neutral Danger
          </Badge>
        </Stack>

        <Stack direction="row" spacing={400}>
          <Badge intent="warning">Warning</Badge>
          <Badge intent="neutral" intentModifiers="warning">
            Neutral Warning
          </Badge>
        </Stack>

        <Stack direction="row" spacing={400}>
          <Badge intent="success">Success</Badge>
          <Badge intent="neutral" intentModifiers="success">
            Neutral Success
          </Badge>
        </Stack>

        <Stack direction="row" spacing={400}>
          <Badge intent="neutral-inverted">Neutral Inverted</Badge>
        </Stack>
      </Stack>
    </div>
  ),
}
