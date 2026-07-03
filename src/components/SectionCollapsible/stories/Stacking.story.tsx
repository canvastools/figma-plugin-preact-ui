import { StoryObj } from '@storybook/preact'

import { Text, Divider, Section } from '../../../index'

import { SectionCollapsible } from '../SectionCollapsible'

type Story = StoryObj<typeof SectionCollapsible>

export const StackingStory: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        language: 'tsx',
        code: `
<SectionCollapsible
  sectionProps={{
    variant: 'default',
    children: <Text strong>Section header</Text>,
  }}
>
  <Section padding={{ top: '0' }}>
    <Text>{children}</Text>
  </Section>
</SectionCollapsible>

<Divider />

<SectionCollapsible
  sectionProps={{
    variant: 'default',
    children: <Text strong>Section header</Text>,
  }}
>
  <Section padding={{ top: '0' }}>
    <Text>{children}</Text>
  </Section>
</SectionCollapsible>
`,
      },
    },
  },
  render: () => (
    <div className="sb-column sb-width-full">
      <SectionCollapsible
        sectionProps={{
          variant: 'default',
          children: <Text strong>Click to toggle</Text>,
        }}
      >
        <Section padding={{ top: '0' }}>
          <Text>Uncontrolled collapsible content</Text>
        </Section>
      </SectionCollapsible>
      <Divider />
      <SectionCollapsible
        sectionProps={{
          variant: 'default',
          children: <Text strong>Click to toggle</Text>,
        }}
      >
        <Section padding={{ top: '0' }}>
          <Text>Uncontrolled collapsible content</Text>
        </Section>
      </SectionCollapsible>
      <Divider />
      <SectionCollapsible
        sectionProps={{
          variant: 'default',
          children: <Text strong>Click to toggle</Text>,
        }}
      >
        <Section padding={{ top: '0' }}>
          <Text>Uncontrolled collapsible content</Text>
        </Section>
      </SectionCollapsible>
      <Divider />
      <SectionCollapsible
        sectionProps={{
          variant: 'default',
          children: <Text strong>Click to toggle</Text>,
        }}
      >
        <Section padding={{ top: '0' }}>
          <Text>Uncontrolled collapsible content</Text>
        </Section>
      </SectionCollapsible>
    </div>
  ),
}
