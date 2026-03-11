import { StoryObj } from '@storybook/preact'

import { useRef } from 'preact/hooks'

import { Button, Menu, MenuItemData } from '../../../index'

type Story = StoryObj<typeof Menu>

export const ManyItemsStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
const triggerRef = useRef(null)

const items = Array.from({ length: 100 }, (_, i) => ({
  type: "action",
  id: \`action-\${i + 1}\`,
  children: \`Action \${i + 1}\`,
  closeOnClick: true,
  onClick: () => console.log(\`action-\${i + 1} clicked\`),
}))

<Button ref={triggerRef}>Open Menu</Button>
<Menu triggerRef={triggerRef} items={items} />
`,
      },
    },
  },
  render: () => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)

    const items: MenuItemData[] = Array.from({ length: 100 }, (_, i) => ({
      type: 'action' as const,
      id: `action-${i + 1}`,
      children: `Action ${i + 1}`,
      closeOnClick: true,
      onClick: () => console.log(`action-${i + 1} clicked`),
    }))

    return (
      <div className="sb-column sb-width-full sb-gap-16">
        <Button ref={triggerRef}>Open Menu (100 items)</Button>
        <Menu triggerRef={triggerRef} items={items} />
      </div>
    )
  },
}
