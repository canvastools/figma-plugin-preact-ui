import { Avatar } from "../Avatar"

export const FillStory = {
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
  fillBackground="var(--pui-color-brand-bg-default)"
  fillText="#ffff00"
>
  A
</Avatar>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <Avatar
        fillBackground="var(--pui-color-brand-bg-default)"
        fillText="#ffff00"
      >
        A
      </Avatar>
    </div>
  ),
}
