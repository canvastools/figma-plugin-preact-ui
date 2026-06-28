import{A as s,u as o}from"./hooks.module-BOklADZz.js";import{a as n,T as a}from"./TooltipContext-AO-nQ0Om.js";import{S as c}from"./Stack-0j0r-CnM.js";import{T as m}from"./Text-DWXnbeUo.js";import{B as d}from"./Button-DZuIc4LK.js";import{B as u}from"./ButtonIcon-D68A8Iw5.js";import{l as t}from"./link-D0beuj1-.js";import{B as g}from"./ButtonIconToggle-CxBaeP2K.js";import{C as T}from"./ColorSwatch-lJB0rTNz.js";import{I as f}from"./Input-CF6ZxpZY.js";import{S as h}from"./SegmentedControl-BZzR4c4w.js";import{S as v}from"./Select-CYLHhZhR.js";import"./preact.module-BEcQExD3.js";import"./typedForwardRef-IM0ZXC4v.js";import"./compat.module-C06LZZ-F.js";import"./TooltipContainer-CxrP3vc5.js";import"./Icon-CUZDBV4V.js";import"./color-C4wFq2U9.js";import"./chevronDown-CZFzKRGi.js";import"./MenuContainer-7RiBAaMv.js";import"./chevronUp-Cq7Nn1oc.js";import"./MenuDivider-DCMEePNQ.js";import"./MenuItemOption-DsKPVta5.js";import"./check-CJonqv9k.js";const q={title:"Components/TooltipContext",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"A context provider that manages visibility of multiple tooltips."}}},argTypes:{children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},useTooltipContext:{description:"Hook to access the context.",table:{type:{summary:"Props",detail:`
{
  registerHoverStart: (
    ref: preact.RefObject,
    setOpen: (open: boolean) => void
    options?: TooltipTimingOptions
  ) => void
  registerHoverEnd: (
    ref: preact.RefObject,
    setOpen: (open: boolean) => void
    options?: TooltipTimingOptions
  ) => void
  registerPointerDown: (
    ref: preact.RefObject,
    setOpen: (open: boolean) => void,
    options?: TooltipTimingOptions
  ) => void
  registerClick: (
    ref: preact.RefObject,
    setOpen: (open: boolean) => void,
    options?: TooltipTimingOptions
  ) => void
}

// Types

type TooltipTimingOptions = {
  showDelay?: number
  hideDelay?: number
}
`}}}}},e={parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const triggerRef = useRef(null)

<TooltipContext>
  <Text ref={triggerRef}>{children}</Text>
  
  <Tooltip triggerRef={triggerRef}>Tooltip 1</Tooltip>

  <Button tooltip="Tooltip 2">{children}</Button>
</TooltipContext>
        `}}},render:()=>{const i=s(null);return o("div",{className:"sb-column sb-width-300",children:o(n,{children:o(c,{spacing:400,children:[o(m,{ref:i,children:"Hover to see Tooltip 1"}),o(a,{anchorRef:i,children:"Text Tooltip 1"}),o(d,{tooltip:"Button Tooltip",children:"Hover to see Tooltip"}),o(u,{icon:{glyph:t,size:24},tooltip:"ButtonIcon Tooltip"}),o(g,{icon:{glyph:t,size:24},tooltip:"ButtonIcon Tooltip"}),o(T,{tooltip:"ColorSwatch Tooltip"}),o(f,{tooltip:"Input Tooltip",placeholder:"Placeholder"}),o(h,{defaultValue:"list",options:[{value:"list",label:"List",icon:{glyph:t,size:24}},{value:"grid",label:"Grid",icon:{glyph:t,size:24}}]}),o(v,{options:[{value:"list",label:"List"},{value:"grid",label:"Grid"}],defaultValue:"list",placeholder:"Select an option",tooltip:"Select Tooltip"})]})})})}};var l,r,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
const triggerRef = useRef(null)

<TooltipContext>
  <Text ref={triggerRef}>{children}</Text>
  
  <Tooltip triggerRef={triggerRef}>Tooltip 1</Tooltip>

  <Button tooltip="Tooltip 2">{children}</Button>
</TooltipContext>
        \`
      }
    }
  },
  render: () => {
    const triggerRef = useRef<HTMLDivElement | null>(null);
    return <div className="sb-column sb-width-300">
        <TooltipContext>
          <Stack spacing={400}>
            <Text ref={triggerRef}>Hover to see Tooltip 1</Text>
            <Tooltip anchorRef={triggerRef}>Text Tooltip 1</Tooltip>

            <Button tooltip="Button Tooltip">Hover to see Tooltip</Button>

            <ButtonIcon icon={{
            glyph: link,
            size: 24
          }} tooltip="ButtonIcon Tooltip" />

            <ButtonIconToggle icon={{
            glyph: link,
            size: 24
          }} tooltip="ButtonIcon Tooltip" />

            <ColorSwatch tooltip="ColorSwatch Tooltip" />

            <Input tooltip="Input Tooltip" placeholder="Placeholder" />

            <SegmentedControl defaultValue="list" options={[{
            value: 'list',
            label: 'List',
            icon: {
              glyph: link,
              size: 24
            }
          }, {
            value: 'grid',
            label: 'Grid',
            icon: {
              glyph: link,
              size: 24
            }
          }]} />

            <Select options={[{
            value: 'list',
            label: 'List'
          }, {
            value: 'grid',
            label: 'Grid'
          }]} defaultValue="list" placeholder="Select an option" tooltip="Select Tooltip" />
          </Stack>
        </TooltipContext>
      </div>;
  }
}`,...(p=(r=e.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const F=["Demo"];export{e as Demo,F as __namedExportsOrder,q as default};
