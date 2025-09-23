import { Meta, StoryObj } from "@storybook/preact"
import { fn } from "@storybook/test"
import { useRef, useState } from "preact/hooks"

import { Popover } from "./Popover"

import { Spacing } from "../Spacing/Spacing"
import { Stack } from "../Stack/Stack"
import { Bar } from "../Bar/Bar"
import { Button } from "../Button/Button"
import { Text } from "../Text/Text"
import { Section } from "../Section/Section"
import { ScrollContext } from "../ScrollContext/ScrollContext"
import { ScrollContainer } from "../ScrollContainer/ScrollContainer"
import { ListContext } from "../ListContext/ListContext"
import { ListContainer } from "../ListContainer/ListContainer"
import { ListItem } from "../ListItem/ListItem"
import type { ListItemData } from "../ListContext/ListContext.types"

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    open: {
      control: { disable: true },
    },
    anchor: {
      control: { disable: true },
      description: "Element's ref the popover should anchor to.",
    },
    position: {
      control: { type: "radio" },
      options: ["auto", "left", "right"],
      defaultValue: { summary: "auto" },
    },
    width: {
      control: { type: "number" },
      defaultValue: { summary: 200 },
    },
    height: {
      control: { type: "number" },
      description: "Takes the height of the content if not specified.",
    },
    offsetX: {
      control: { type: "number" },
      defaultValue: { summary: 8 },
      description: "Horizontal gap between popover and anchor when anchored.",
    },
    offsetY: {
      control: { type: "number" },
      defaultValue: { summary: 0 },
      description: "Vertical gap between popover and anchor when anchored.",
    },
    children: {
      control: { disable: true },
      table: {
        type: {
          summary: "JSX.Element",
        },
      },
    },
    onClose: {
      action: "closed",
      description:
        "Callback function that is called when the popover is closed.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    onOpen: {
      action: "opened",
      description:
        "Callback function that is called when the popover is opened.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Popover>

export const Demo: Story = {
  tags: ["!autodocs"],
  args: {
    className: "",
    position: "auto",
    width: 200,
    height: 200,
    children: <Text>Popover content</Text>,
    onClose: fn(),
    onOpen: fn(),
  },
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  render: (args) => {
    const [open, setOpen] = useState(false)
    const anchorRef = useRef<HTMLButtonElement | null>(null)

    return (
      <div className="sb-column sb-width-full">
        <Button ref={anchorRef as any} onClick={() => setOpen((v) => !v)}>
          Show Popover
        </Button>
        <Popover
          // @ts-ignore-next-line
          position={args.position}
          // @ts-ignore-next-line
          width={args.width}
          // @ts-ignore-next-line
          height={args.height}
          open={open}
          anchor={anchorRef.current}
          // @ts-ignore-next-line
          onOpen={args.onOpen}
          onClose={() => {
            setOpen(false)
            // @ts-ignore-next-line
            args.onClose()
          }}
        >
          <Section>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae
              autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos
              animi id nam tenetur adipisci? Amet nisi doloremque asperiores
              quisquam, repudiandae similique magnam aspernatur esse dignissimos
              molestiae.
            </Text>
          </Section>
        </Popover>
      </div>
    )
  },
}

const PopoverExample = () => {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLButtonElement | null>(null)

  return (
    <div>
      <Button ref={anchorRef as any} onClick={() => setOpen((v) => !v)}>
        Show Popover
      </Button>
      <Popover
        open={open}
        anchor={anchorRef.current}
        onClose={() => setOpen(false)}
      >
        <Section>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae
            autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi
            id nam tenetur adipisci? Amet nisi doloremque asperiores quisquam,
            repudiandae similique magnam aspernatur esse dignissimos molestiae.
          </Text>
        </Section>
      </Popover>
    </div>
  )
}

export const Position: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => (
    <div
      className="sb-column sb-width-full"
      style={{ minHeight: "300px", maxHeight: "100%" }}
    >
      <ScrollContext>
        <ScrollContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "space-between",
              minHeight: "600px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <PopoverExample />
              <PopoverExample />
              <PopoverExample />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <PopoverExample />
              <PopoverExample />
              <PopoverExample />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <PopoverExample />
              <PopoverExample />
              <PopoverExample />
            </div>
          </div>
        </ScrollContainer>
      </ScrollContext>
    </div>
  ),
}

const sampleItems = [
  {
    id: "Frame 1",
    children: [
      {
        id: "Frame 11",
        children: [{ id: "Frame 111" }, { id: "Frame 112" }],
      },
      {
        id: "Frame 12",
        children: [{ id: "Frame 121" }],
      },
    ],
  },
  { id: "Frame 2" },
  {
    id: "Frame 3",
    children: [
      {
        id: "Frame 31",
        children: [
          { id: "Frame 311" },
          { id: "Frame 312" },
          { id: "Frame 313" },
        ],
      },
    ],
  },
] as ListItemData[]

export const Children: Story = {
  parameters: {
    controls: { disable: true },
    viewport: {
      defaultViewport: "large",
    },
  },
  render: () => {
    const [openScrollable, setOpenScrollable] = useState(false)
    const anchorRefScrollable = useRef<HTMLButtonElement | null>(null)

    const [openInteractive, setOpenInteractive] = useState(false)
    const anchorRefInteractive = useRef<HTMLButtonElement | null>(null)

    const [items, setItems] = useState(sampleItems)
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    const renderSubItems = (children, level: number) => {
      if (!children || children.length === 0) return null

      return (
        <ListContainer>
          {children.map((child) => (
            <ListItem
              key={child.id}
              id={child.id}
              nestingLevel={level}
              draggable={true}
              acceptsChildren={true}
              selectable={true}
              selectionScope="item"
              hoverable={true}
              subItems={
                child.children
                  ? renderSubItems(child.children, level + 1)
                  : undefined
              }
            >
              <Stack direction="row" spacing={200}>
                <Text>{child.id}</Text>
                <Text intentModifiers="secondary">(Level {level})</Text>
              </Stack>
            </ListItem>
          ))}
        </ListContainer>
      )
    }

    return (
      <div className="sb-column">
        <Stack spacing={400}>
          <Button
            ref={anchorRefScrollable as any}
            onClick={() => setOpenScrollable((v) => !v)}
          >
            Show Popover with Scrollable Content
          </Button>

          <Popover
            open={openScrollable}
            anchor={anchorRefScrollable.current}
            onClose={() => setOpenScrollable(false)}
            width={300}
            height={300}
          >
            <Bar borderBottom={true}>
              <Section>
                <Text>Popover content</Text>
              </Section>
            </Bar>
            <ScrollContext>
              <ScrollContainer>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse omnis quam, nisi nostrum dolor nobis ex nulla voluptas
                    voluptate, quae ea harum aliquam distinctio provident natus
                    veritatis corporis tempore incidunt quaerat repellat sunt
                    aspernatur. Culpa nam sint assumenda facere eius
                    reprehenderit obcaecati ut. Maxime officiis harum
                    consectetur soluta! At explicabo fugiat perferendis
                    consequuntur, beatae provident soluta sunt inventore, nisi
                    obcaecati ipsam modi porro molestiae molestias in quas
                    commodi exercitationem natus eligendi nam aspernatur est
                    nulla minus consectetur? Nostrum natus iure placeat
                    aspernatur explicabo ullam est in, fugit alias ipsam vel
                    laborum aliquid mollitia optio necessitatibus fuga ex
                    possimus? Earum, accusantium cumque animi, facere labore
                    dignissimos maiores deserunt omnis asperiores ducimus sit
                    nihil quas tempore temporibus incidunt atque maxime fugiat
                    voluptatem reprehenderit exercitationem? Eveniet officiis
                    recusandae repudiandae aperiam veritatis ex at, accusamus
                    corrupti, sit quaerat assumenda esse adipisci hic nesciunt
                    numquam natus distinctio magni quas exercitationem nulla
                    dolor eius suscipit dolore. Similique vero veritatis velit
                    amet ducimus qui quidem voluptatem nisi iusto blanditiis
                    ipsum temporibus doloribus sed est consequuntur beatae
                    quaerat, neque voluptatibus illo vel dolorum quod fugiat
                    officia repudiandae! Reiciendis, beatae sit cumque ullam
                    alias earum qui dolores. Autem praesentium consectetur eos
                    totam aspernatur explicabo, repudiandae neque ea quaerat
                    accusamus doloribus temporibus nostrum perspiciatis! Aperiam
                    accusamus quidem repellendus perspiciatis officia tempore
                    commodi mollitia excepturi laudantium magnam doloribus odit,
                    quisquam soluta aliquid beatae architecto voluptatum tenetur
                    ratione maiores quis doloremque ipsum ut aspernatur
                    cupiditate! Libero laborum ducimus, ut labore nesciunt
                    aspernatur suscipit provident esse iusto nam, minima ullam
                    recusandae ipsum, nemo blanditiis nulla vel? Cupiditate
                    inventore, quae ratione, numquam ipsum quod minima,
                    distinctio incidunt alias neque natus officiis nam sit eius.
                    Ab, aut nemo. Quis reiciendis aliquam exercitationem
                    numquam. Illo natus quae ad dolorum quod, labore, voluptates
                    velit autem sed eos necessitatibus adipisci dicta? Rem quis
                    porro, officiis fugiat similique vero.
                  </Text>
                </Section>
              </ScrollContainer>
            </ScrollContext>
          </Popover>

          <Button
            ref={anchorRefInteractive as any}
            onClick={() => setOpenInteractive((v) => !v)}
          >
            Show Popover with Interactive Content
          </Button>

          <Popover
            open={openInteractive}
            anchor={anchorRefInteractive.current}
            onClose={() => setOpenInteractive(false)}
            width={300}
            height={300}
          >
            <Bar borderBottom={true}>
              <Section>
                <Text>Popover content</Text>
              </Section>
            </Bar>
            <ScrollContext>
              <ScrollContainer>
                <Section>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse omnis quam, nisi nostrum dolor nobis ex nulla voluptas
                    voluptate, quae ea harum aliquam distinctio provident natus
                    veritatis corporis tempore incidunt quaerat repellat sunt
                    aspernatur.
                  </Text>
                </Section>
                <ListContext
                  items={items}
                  selectedItems={selectedItems}
                  selectionMode="multi"
                  onItemsChange={(change) => {
                    setItems(change.items)
                  }}
                  onSelectionChange={(change) => {
                    setSelectedItems(change.selectedItems)
                  }}
                >
                  <ListContainer>
                    {items.map((item) => (
                      <ListItem
                        key={item.id}
                        id={item.id}
                        draggable={true}
                        acceptsChildren={true}
                        selectable={true}
                        selectionScope="item"
                        hoverable={true}
                        subItems={
                          item.children
                            ? renderSubItems(item.children, 1)
                            : undefined
                        }
                      >
                        <Stack direction="row" spacing={200}>
                          <Text>{item.id}</Text>
                          <Text intentModifiers="secondary">(Level 0)</Text>
                        </Stack>
                      </ListItem>
                    ))}
                  </ListContainer>
                </ListContext>
                <Spacing size={200} />
              </ScrollContainer>
            </ScrollContext>
          </Popover>
        </Stack>
      </div>
    )
  },
}
