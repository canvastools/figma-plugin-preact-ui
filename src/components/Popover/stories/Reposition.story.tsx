import { StoryObj } from '@storybook/preact'

import { useRef, useState } from 'preact/hooks'

import { Button, ScrollContainer, Section, Stack, Text } from '../../../index'

import { Popover } from '../Popover'

type Story = StoryObj<typeof Popover>

export const RepositionStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'small',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
const triggerRef = useRef(null)
const [open, setOpen] = useState(false)
const [expanded, setExpanded] = useState(false)

<Button ref={triggerRef} onClick={() => setOpen(!open)}>
  Open Popover
</Button>

<Popover
  triggerRef={triggerRef}
  open={open}
  constrainHeight
  popoverHeaderProps={{ children: 'Dynamic height' }}
  autoReposition={true}
>
  <ScrollContainer>
    {/* autoReposition adjusts position when content height changes */}
  </ScrollContainer>
</Popover>
`,
      },
    },
  },
  render: () => {
    const triggerRef = useRef<HTMLButtonElement | null>(null)
    const [open, setOpen] = useState(false)
    const [expanded, setExpanded] = useState(false)

    return (
      <div className="sb-column sb-width-full sb-gap-16" style={{ paddingTop: 280 }}>
        <Text>Expanded: {expanded ? 'true' : 'false'}</Text>
        <Button ref={triggerRef} onClick={() => setOpen(!open)}>
          Open Popover
        </Button>
        <Popover
          triggerRef={triggerRef}
          open={open}
          onClose={() => setOpen(false)}
          constrainHeight
          popoverHeaderProps={{
            children: 'Dynamic height',
          }}
          autoReposition={true}
        >
          <ScrollContainer>
            <Section>
              <Stack direction="column" spacing={400}>
                <Text>{expanded ? 'Expanded content' : 'Collapsed content'}</Text>
                {expanded &&
                  Array.from({ length: 12 }, (_, index) => (
                    <Text key={index}>Line {index + 1}: Lorem ipsum dolor sit amet.</Text>
                  ))}
                <Button onClick={() => setExpanded((value) => !value)}>Toggle content height</Button>
              </Stack>
            </Section>
          </ScrollContainer>
        </Popover>
      </div>
    )
  },
}
