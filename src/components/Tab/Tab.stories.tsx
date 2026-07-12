import type { Meta, StoryObj } from '@storybook/preact-vite'
import { fn } from 'storybook/test'

import { VariantStory } from './stories/Variant.story'
import { PrefixStory } from './stories/Prefix.story'
import { SuffixStory } from './stories/Suffix.story'
import { CustomChildrenStory } from './stories/CustomChildren.story'

import { TabContext, TabList, Section, TooltipContext } from '../../index'

import { Tab } from './Tab'

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "The component is always used within <a href='/docs/components-tabcontext--docs'>`<TabContext/>`</a>, and optionally in combination with <a href='/docs/components-tablist--docs'>`<TabList/>`</a>.",
      },
    },
  },
  argTypes: {
    id: {
      control: { disable: true },
      description: '<strong>*</strong>',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    className: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['default', 'single'],
      table: { defaultValue: { summary: 'default' } },
    },
    prefix: {
      control: { disable: true },
      description: 'Element displayed before children.',
      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
    },
    suffix: {
      control: { disable: true },
      description: 'Element displayed after children.',
      table: {
        type: {
          summary: 'preact.ComponentChildren',
        },
      },
    },
    tooltip: {
      control: { type: 'text' },
      description: 'Tooltip content.',
      table: {
        type: {
          summary: 'preact.ComponentChildren',
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
    tabIndex: {
      control: { type: 'number' },
      description: 'Tab order of the tab button. Omit for roving tabindex (active: 0, inactive: -1).',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      table: {
        type: {
          summary: '(args) => void',
          detail: `
args: {
  event: MouseEvent
  id: string
}
`,
        },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Tab>

export const Demo: Story = {
  args: {
    className: '',
    variant: 'default',
    tooltip: 'Tab tooltip',
    onClick: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: 'large',
    },
    docs: {
      source: {
        code: `
<TabContext defaultActiveId="tab-1">

  <TabList>
    <Tab id="tab-1" {...args}>{children}</Tab>
    <Tab id="tab-2" {...args}>{children}</Tab>
    <Tab id="tab-3" {...args}>{children}</Tab>
  </TabList>

  <TabPanel tabId="tab-1">Tab 1 Panel</TabPanel>
  <TabPanel tabId="tab-2">Tab 2 Panel</TabPanel>
  <TabPanel tabId="tab-3">Tab 3 Panel</TabPanel>
  
</TabContext>

// Use TooltipContext to make tooltips work

<TooltipContext>
  <TabContext defaultActiveId="tab-1">
    ...
  </TabContext>
</TooltipContext>
        `,
      },
    },
  },
  render: (args) => {
    if (args.variant === 'default') {
      return (
        <div className="sb-column sb-width-full">
          <TooltipContext>
            <TabContext defaultActiveId="tab-1">
              <Section>
                <TabList>
                  <Tab {...args} id="tab-1">
                    Tab 1
                  </Tab>
                  <Tab {...args} id="tab-2">
                    Tab 2
                  </Tab>
                  <Tab {...args} id="tab-3">
                    Tab 3
                  </Tab>
                </TabList>
              </Section>
            </TabContext>
          </TooltipContext>
        </div>
      )
    } else {
      return (
        <div className="sb-column sb-width-full">
          <TooltipContext>
            <TabContext defaultActiveId="tab-1">
              <Section>
                <TabList>
                  <Tab {...args} id="tab-1" variant="single">
                    Single
                  </Tab>
                </TabList>
              </Section>
            </TabContext>
          </TooltipContext>
        </div>
      )
    }
  },
}

export const Variant = VariantStory
export const Prefix = PrefixStory
export const Suffix = SuffixStory
export const CustomChildren = CustomChildrenStory
