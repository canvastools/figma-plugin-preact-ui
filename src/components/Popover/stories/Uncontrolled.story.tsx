import { StoryObj } from '@storybook/preact-vite'

import { useRef } from 'preact/hooks'

import { Button, Section, Text } from '../../../index'

import { Popover } from '../Popover'

type Story = StoryObj<typeof Popover>

export const UncontrolledStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
const triggerRef = useRef(null)

<Button ref={triggerRef}>{children}</Button>

<Popover
  triggerRef={triggerRef}
  popoverHeaderProps={{
    children: "Uncontrolled Popover",
  }}
>
  {children}
</Popover>
`,
      },
    },
  },
  render: () => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full sb-gap-16">
        <Button ref={triggerRef}>Open Menu</Button>
        <Popover
          triggerRef={triggerRef}
          popoverHeaderProps={{
            children: 'Uncontrolled Popover',
          }}
        >
          <Section>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          </Section>
        </Popover>
      </div>
    )
  },
}
