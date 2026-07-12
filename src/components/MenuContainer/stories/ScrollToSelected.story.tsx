import { StoryObj } from '@storybook/preact-vite'

import { useRef, useState } from 'preact/hooks'

import { Button, Menu, MenuItemData } from '../../../index'

type Story = StoryObj<typeof Menu>

export const ScrollToSelectedStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
const triggerRef = useRef(null)
const [selected, setSelected] = useState("option-80")

const items = Array.from({ length: 100 }, (_, i) => {
  const id = \`option-\${i + 1}\`
  return {
    type: "option",
    id,
    selected: selected === id,
    children: \`Option \${i + 1}\`,
    onSelectedChange: ({ selected }) => setSelected(selected ? id : null),
  }
})

// On open, the selected option (#80) is scrolled into view automatically.
<Button ref={triggerRef}>Open Menu</Button>
<Menu triggerRef={triggerRef} items={items} height={300} />
`,
      },
    },
  },
  render: () => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)
    const [selected, setSelected] = useState<string | null>('option-80')

    const items: MenuItemData[] = Array.from({ length: 100 }, (_, i) => {
      const id = `option-${i + 1}`
      return {
        type: 'option' as const,
        id,
        selected: selected === id,
        children: `Option ${i + 1}`,
        onSelectedChange: ({ selected }) => setSelected(selected ? id : null),
      }
    })

    return (
      <div className="sb-column sb-width-full sb-gap-16">
        <Button ref={triggerRef}>Open Menu (selected #80)</Button>
        <Menu triggerRef={triggerRef} items={items} height={300} />
      </div>
    )
  },
}
