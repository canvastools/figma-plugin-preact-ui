import{A as s,u as o}from"./hooks.module-DDuEt2mE.js";import{a as n,T as a}from"./Tooltip-2n7DDmmb.js";import{S as c}from"./Stack-Tj6YE1Ki.js";import{T as m}from"./Text-BooB5DEX.js";import{B as d}from"./Button-Cm2VRIk6.js";import{B as u}from"./ButtonIcon-CZSSh5qW.js";import{l as t}from"./link-DCFG2DBQ.js";import{B as g}from"./ButtonIconToggle-KEev3HKe.js";import{C as T}from"./ColorSwatch-X8rg2EoE.js";import{I as f}from"./Input-BwD4z5ht.js";import{S as h}from"./SegmentedControl-Ddp8sqsd.js";import{S as v}from"./Select-Bt9XFohq.js";import"./preact.module-D68vdB8i.js";import"./compat.module-AmaJGl25.js";import"./typedForwardRef-eUJP59ez.js";import"./TooltipContainer-BRY08nvC.js";import"./Icon-C_1AiDxm.js";import"./color-C4wFq2U9.js";import"./MenuContainer-ChtSSB35.js";import"./chevronUp-6vZHMELz.js";import"./chevronDown-Jm7aV4hF.js";import"./MenuItemOption-D_RuwYiC.js";import"./check-2iQ1PIKG.js";import"./MenuDivider-Bcl4nNAT.js";const q={title:"Components/TooltipContext",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"A context provider that manages visibility of multiple tooltips."}}},argTypes:{children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},useTooltipContext:{description:"Hook to access the context.",table:{type:{summary:"Props",detail:`
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
