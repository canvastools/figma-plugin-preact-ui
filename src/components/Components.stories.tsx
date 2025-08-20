import { Meta, StoryObj } from "@storybook/preact"
import { useState } from "preact/hooks"

import { Avatar } from "./Avatar/Avatar"
import { Badge } from "./Badge/Badge"
import { Button } from "./Button/Button"
import { ButtonIcon } from "./ButtonIcon/ButtonIcon"
import { Checkbox } from "./Checkbox/Checkbox"
import { Icon } from "./Icon/Icon"
import { Spinner } from "./Spinner/Spinner"
import { Tab } from "./Tab/Tab"
import { TabContext } from "./TabContext/TabContext"
import { TabList } from "./TabList/TabList"
import { Text } from "./Text/Text"

const meta: Meta = {
  title: "Overview/Components",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        component:
          "A single canvas to preview all components in their default state.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const _1: Story = {
  tags: ["!autodocs"],
  render: () => <div className="sb-row sb-gap-16">Test</div>,
}

export const _Avatar: Story = {
  render: () => (
    <div className="sb-row sb-gap-16">
      <div className="sb-column sb-gap-16">
        <div className="sb-row sb-gap-16">
          <Avatar imageSrc="https://thispersondoesnotexist.com/" size="small">
            A
          </Avatar>
          <Avatar size="small">A</Avatar>
        </div>
        <div className="sb-row sb-gap-16">
          <Avatar imageSrc="https://thispersondoesnotexist.com/" size="default">
            A
          </Avatar>
          <Avatar size="default">A</Avatar>
        </div>
        <div className="sb-row sb-gap-16">
          <Avatar imageSrc="https://thispersondoesnotexist.com/" size="large">
            A
          </Avatar>
          <Avatar size="large">A</Avatar>
        </div>
      </div>
      <div className="sb-column sb-gap-16">
        <div className="sb-row sb-gap-16">
          <Avatar
            imageSrc="https://thispersondoesnotexist.com/"
            size="small"
            shape="square"
          >
            A
          </Avatar>
          <Avatar size="small" shape="square">
            A
          </Avatar>
        </div>
        <div className="sb-row sb-gap-16">
          <Avatar
            imageSrc="https://thispersondoesnotexist.com/"
            size="default"
            shape="square"
          >
            A
          </Avatar>
          <Avatar size="default" shape="square">
            A
          </Avatar>
        </div>
        <div className="sb-row sb-gap-16">
          <Avatar
            imageSrc="https://thispersondoesnotexist.com/"
            size="large"
            shape="square"
          >
            A
          </Avatar>
          <Avatar size="large" shape="square">
            A
          </Avatar>
        </div>
      </div>
    </div>
  ),
}

export const _Badge: Story = {
  render: () => (
    <div className="sb-row sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Badge variant="default">Default</Badge>
        <Badge variant="brand">Brand</Badge>
        <Badge variant="brand-secondary">Brand Secondary</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="danger-secondary">Danger Secondary</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="warning-secondary">Warning Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="success-secondary">Success Secondary</Badge>
        <Badge variant="disabled">Disabled</Badge>
        <Badge variant="disabled-secondary">Disabled Secondary</Badge>
        <Badge variant="count">Count</Badge>
      </div>
      <div className="sb-column sb-gap-16">
        <Badge prefix={<Icon glyph="help" size={16} />} variant="default">
          Default
        </Badge>
        <Badge prefix={<Icon glyph="help" size={16} />} variant="brand">
          Brand
        </Badge>
        <Badge
          prefix={<Icon glyph="help" size={16} />}
          variant="brand-secondary"
        >
          Brand Secondary
        </Badge>
        <Badge prefix={<Icon glyph="help" size={16} />} variant="danger">
          Danger
        </Badge>
        <Badge
          prefix={<Icon glyph="help" size={16} />}
          variant="danger-secondary"
        >
          Danger Secondary
        </Badge>
        <Badge prefix={<Icon glyph="help" size={16} />} variant="warning">
          Warning
        </Badge>
        <Badge
          prefix={<Icon glyph="help" size={16} />}
          variant="warning-secondary"
        >
          Warning Secondary
        </Badge>
        <Badge prefix={<Icon glyph="help" size={16} />} variant="success">
          Success
        </Badge>
        <Badge
          prefix={<Icon glyph="help" size={16} />}
          variant="success-secondary"
        >
          Success Secondary
        </Badge>
        <Badge prefix={<Icon glyph="help" size={16} />} variant="disabled">
          Disabled
        </Badge>
        <Badge
          prefix={<Icon glyph="help" size={16} />}
          variant="disabled-secondary"
        >
          Disabled Secondary
        </Badge>
        <Badge prefix={<Icon glyph="help" size={16} />} variant="count">
          Count
        </Badge>
      </div>
    </div>
  ),
}

export const _Button: Story = {
  render: () => (
    <div className="sb-row sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Button variant="brand" size="default">
          Brand Default
        </Button>
        <Button variant="default" size="large">
          Secondary Large
        </Button>
        <Button variant="destructive" size="default">
          Destructive Default
        </Button>
        <Button variant="destructive-secondary" size="default">
          Destructive Secondary Default
        </Button>
        <Button variant="success" size="default">
          Success Default
        </Button>
        <Button variant="link" size="default">
          Link Default
        </Button>
        <Button variant="link-destructive" size="default">
          Link Destructive Default
        </Button>
        <Button variant="ghost" size="default">
          Ghost Default
        </Button>
      </div>

      <div className="sb-column sb-gap-16">
        <Button
          variant="brand"
          size="default"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Brand Default
        </Button>
        <Button
          variant="default"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Secondary Large
        </Button>
        <Button
          variant="destructive"
          size="default"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Destructive Default
        </Button>
        <Button
          variant="destructive-secondary"
          size="default"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Destructive Secondary Default
        </Button>
        <Button
          variant="success"
          size="default"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Success Default
        </Button>
        <Button
          variant="link"
          size="default"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Link Default
        </Button>
        <Button
          variant="link-destructive"
          size="default"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Link Destructive Default
        </Button>
        <Button
          variant="ghost"
          size="default"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Ghost Default
        </Button>
      </div>

      <div className="sb-column sb-gap-16">
        <Button variant="brand" size="large">
          Brand Large
        </Button>
        <Button variant="default" size="default">
          Secondary Default
        </Button>
        <Button variant="destructive" size="large">
          Destructive Large
        </Button>
        <Button variant="destructive-secondary" size="large">
          Destructive Secondary Large
        </Button>
        <Button variant="success" size="large">
          Success Large
        </Button>
        <Button variant="link" size="large">
          Link Large
        </Button>
        <Button variant="link-destructive" size="large">
          Link Destructive Large
        </Button>
        <Button variant="ghost" size="large">
          Ghost Large
        </Button>
      </div>

      <div className="sb-column sb-gap-16">
        <Button
          variant="brand"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Brand Large
        </Button>
        <Button
          variant="default"
          size="default"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Secondary Default
        </Button>
        <Button
          variant="destructive"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Destructive Large
        </Button>
        <Button
          variant="destructive-secondary"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Destructive Secondary Large
        </Button>
        <Button
          variant="success"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Success Large
        </Button>
        <Button
          variant="link"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Link Large
        </Button>
        <Button
          variant="link-destructive"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Link Destructive Large
        </Button>
        <Button
          variant="ghost"
          size="large"
          prefix={<Icon glyph="help" variant="small" />}
        >
          Ghost Large
        </Button>
      </div>
    </div>
  ),
}

export const _ButtonIcon: Story = {
  render: () => (
    <div className="sb-row sb-gap-16">
      <div className="sb-column sb-gap-16">
        <ButtonIcon variant="default">
          <Icon glyph="help" />
        </ButtonIcon>
        <ButtonIcon variant="ghost">
          <Icon glyph="help" />
        </ButtonIcon>
      </div>
      <div className="sb-column sb-gap-16">
        <ButtonIcon variant="default" selected>
          <Icon glyph="help" />
        </ButtonIcon>
        <ButtonIcon variant="ghost" selected>
          <Icon glyph="help" />
        </ButtonIcon>
      </div>
    </div>
  ),
}

export const _Checkbox: Story = {
  render: () => (
    <div className="sb-row sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Checkbox checked={true} label="Checked True" />
        <Checkbox checked={false} label="Checked False" />
      </div>
      <div className="sb-column sb-gap-16">
        <Checkbox checked={true} mixed={true} label="Checkbox True Mixed" />
        <Checkbox checked={false} mixed={true} label="Checkbox False Mixed" />
      </div>
    </div>
  ),
}

export const _Icon: Story = {
  render: () => (
    <div className="sb-row sb-gap-16">
      <Icon glyph="help" size={24} />
      <Icon glyph="help" size={24} variant="small" />
      <Icon glyph="help" size={16} />
    </div>
  ),
}

export const _Spinner: Story = {
  render: () => (
    <div className="sb-row sb-gap-16">
      <Spinner />
    </div>
  ),
}

export const _Tab: Story = {
  render: () => (
    <div className="sb-row sb-gap-16">
      <div className="sb-column sb-gap-16">
        <TabContext value={"tab-1"}>
          <TabList>
            <Tab variant="default" value="tab-1" children="Tab 1" />
            <Tab variant="default" value="tab-2" children="Tab 2" />
          </TabList>
        </TabContext>
        <TabContext value={"tab-1"}>
          <TabList>
            <Tab variant="single" value="tab-1" children="Single" />
          </TabList>
        </TabContext>
      </div>
      <div className="sb-column sb-gap-16">
        <TabContext value={"tab-1"}>
          <TabList>
            <Tab
              variant="default"
              value="tab-1"
              children="Tab 1"
              suffix={<Badge variant="count">1</Badge>}
            />
            <Tab
              variant="default"
              value="tab-2"
              children="Tab 2"
              suffix={<Badge variant="count">2</Badge>}
            />
          </TabList>
        </TabContext>
        <TabContext value={"tab-1"}>
          <TabList>
            <Tab
              variant="single"
              value="tab-1"
              children="Single"
              suffix={<Badge variant="count">1</Badge>}
            />
          </TabList>
        </TabContext>
      </div>
    </div>
  ),
}

export const _Text: Story = {
  render: () => (
    <div className="sb-row sb-gap-16">
      <div className="sb-column sb-gap-16">
        <Text variant="heading" size="large">
          Heading Large
        </Text>
        <Text variant="body" size="large">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>

      <div className="sb-column sb-gap-16">
        <Text variant="heading" size="medium">
          Heading Medium
        </Text>
        <Text variant="body" size="medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>

      <div className="sb-column sb-gap-16">
        <Text variant="heading" size="small">
          Heading Small
        </Text>
        <Text variant="body" size="small">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </div>
    </div>
  ),
}
