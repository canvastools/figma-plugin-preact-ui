import { StoryObj } from '@storybook/preact'

import { useState, useRef, useEffect } from 'preact/hooks'

import { Text, ScrollContainer, Stack } from '../../../index'

import { ScrollContext, useScrollContext } from '../ScrollContext'

type Story = StoryObj<typeof ScrollContainer>

export const SpyScrollStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `

const ScrollContent = () => {
  const sectionRef1 = useRef<HTMLDivElement | null>(null)
  const sectionRef2 = useRef<HTMLDivElement | null>(null)
  const sectionRef3 = useRef<HTMLDivElement | null>(null)

  const { registerSpyTarget } = useScrollContext()

  useEffect(() => {
    registerSpyTarget("section-1", sectionRef1.current)
    registerSpyTarget("section-2", sectionRef2.current)
    registerSpyTarget("section-3", sectionRef3.current)
  }, [registerSpyTarget])

  return (
    <div>
      <div id="section-1" ref={sectionRef1}>Section 1</div>
      <div id="section-2" ref={sectionRef2}>Section 2</div>
      <div id="section-3" ref={sectionRef3}>Section 3</div>
    </div>
  )
}

const Target = () => {
  const { spyActiveId } = useScrollContext()
  return <Text>Current spy target: {spyActiveId}</Text>
}

const SpyScroll = () => {
  return (
    <div>
      <ScrollContext>
        <Target />
        <ScrollContainer>
          <ScrollContent />
        </ScrollContainer>
      </ScrollContext>
    </div>
  )
}
`,
      },
    },
  },
  render: () => {
    const Content = () => {
      const { registerSpyTarget } = useScrollContext()

      const sectionRef1 = useRef<HTMLDivElement | null>(null)
      const sectionRef2 = useRef<HTMLDivElement | null>(null)
      const sectionRef3 = useRef<HTMLDivElement | null>(null)
      const sectionRef4 = useRef<HTMLDivElement | null>(null)

      useEffect(() => {
        registerSpyTarget('section-1', sectionRef1.current)
        registerSpyTarget('section-2', sectionRef2.current)
        registerSpyTarget('section-3', sectionRef3.current)
        registerSpyTarget('section-4', sectionRef4.current)
      }, [registerSpyTarget])

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

    const Target = () => {
      const [currentSpyTarget, setCurrentSpyTarget] = useState<string | null>(null)

      const { spyActiveId } = useScrollContext()

      useEffect(() => {
        setCurrentSpyTarget(spyActiveId)
      }, [spyActiveId])

      return <Text>Current spy target: {currentSpyTarget}</Text>
    }

    return (
      <div className="sb-column sb-width-full sb-height-300 sb-gap-16">
        <ScrollContext>
          <Target />
          <ScrollContainer>
            <Content />
          </ScrollContainer>
        </ScrollContext>
      </div>
    )
  },
}
