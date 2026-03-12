import type { Meta, StoryObj } from '@storybook/preact'
import { fn } from '@storybook/test'

import { useRef, useEffect } from 'preact/hooks'

import { UncontrolledStory } from './stories/Uncontrolled.story'
import { ControlledStory } from './stories/Controlled.story'
import { SpyScrollStory } from './stories/SpyScroll.story'

import { ScrollContainer, Text, Stack } from '../../index'

import { ScrollContext, useScrollContext } from './ScrollContext'

const meta: Meta<typeof ScrollContext> = {
  title: 'Layout/ScrollContext',
  component: ScrollContext,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "A context provider that manages scroll states. Always used with <a href='/docs/layout-scrollcontainer--docs'>`<ScrollContainer/>`</a> component.",
      },
    },
  },
  argTypes: {
    defaultPositionY: {
      control: { type: 'number' },
      defaultValue: { summary: 0 },
      description: 'Scroll position for uncontrolled state.',
    },
    positionY: {
      control: { disable: true },
      description: 'Scroll position for controlled state.',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    children: {
      control: { disable: true },
      description: '<strong>*</strong>',
      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
    },
    spyThreshold: {
      control: { type: 'number' },
      defaultValue: { summary: 0 },
      description: 'Distance in pixels from the top of the scroll container at which a spy target is considered crossed.',
    },
    onScroll: {
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args: {
  positionY: number
}
`,
        },
      },
    },
    onSpyTargetChange: {
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args: {
  id: string | null // id of the last section that crossed the threshold
}
`,
        },
      },
    },
    useScrollContext: {
      description: 'Hook to access the context.',
      table: {
        type: {
          summary: 'Props',
          detail: `
{
  positionY: number
  isAtTop: boolean
  isAtBottom: boolean
  onScroll: (event: Event) => void
  setPositionY: (positionY: number) => void // set the scroll position
  resetPositionY: () => void // reset the scroll position to the top
  spyActiveId: string | null // id of the last section that crossed the threshold
  registerSpyTarget: (id: string, ref: HTMLElement | null) => void // register scroll spy targets
  registerScrollRoot: (ref: HTMLElement | null) => void // register the scroll root element
}`,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof ScrollContext>

export const Demo: Story = {
  tags: ['!autodocs'],
  args: {
    defaultPositionY: 0,
    spyThreshold: 0,
    onScroll: fn(),
    onSpyTargetChange: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<ScrollContext {...args}>
  <ScrollContainer>{children}</ScrollContainer>
</ScrollContext>
`,
      },
    },
  },
  render: (args) => {
    const sectionRef1 = useRef<HTMLDivElement | null>(null)
    const sectionRef2 = useRef<HTMLDivElement | null>(null)
    const sectionRef3 = useRef<HTMLDivElement | null>(null)
    const sectionRef4 = useRef<HTMLDivElement | null>(null)

    const Content = () => {
      const { registerSpyTarget } = useScrollContext()

      useEffect(() => {
        registerSpyTarget('section-1', sectionRef1.current)
        registerSpyTarget('section-2', sectionRef2.current)
        registerSpyTarget('section-3', sectionRef3.current)
        registerSpyTarget('section-4', sectionRef4.current)
      }, [])

      return (
        <Stack spacing={400}>
          <Text id="section-1" variant="heading" ref={sectionRef1}>
            Section 1
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </Text>
          <Text id="section-2" variant="heading" ref={sectionRef2}>
            Section 2
          </Text>
          <Text>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <Text id="section-3" variant="heading" ref={sectionRef3}>
            Section 3
          </Text>
          <Text>
            Lorem ipsum dolorsit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Text>
          <Text id="section-4" variant="heading" ref={sectionRef4}>
            Section 4
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </Text>
        </Stack>
      )
    }

    return (
      <div className="sb-column sb-width-full sb-height-300">
        <ScrollContext {...args}>
          <ScrollContainer>
            <Content />
          </ScrollContainer>
        </ScrollContext>
      </div>
    )
  },
}

export const Uncontrolled = UncontrolledStory
export const Controlled = ControlledStory
export const SpyScroll = SpyScrollStory
