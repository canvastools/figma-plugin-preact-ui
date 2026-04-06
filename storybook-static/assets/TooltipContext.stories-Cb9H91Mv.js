import{A as a,u as o}from"./hooks.module-CGIakYml.js";import{a as n,T as s}from"./TooltipContext-DGdoB1MK.js";import{S as c}from"./Stack-k8IcfDhK.js";import{T as d}from"./Text-9aeIDhQ2.js";import{B as u}from"./Button-CSRvb6V4.js";import{B as m}from"./ButtonIcon-CqEEORZE.js";import{l as t}from"./link-BEZi4mus.js";import{B as g}from"./ButtonIconToggle-B7gf95Jw.js";import{C as T}from"./ColorSwatch-CP6m2SiW.js";import{I as f}from"./Input-hxQZZgGI.js";import{S as h}from"./SegmentedControl-CkiSsOjA.js";import{S as v}from"./Select-DepaEqt7.js";import"./preact.module-C06nO-nz.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./TooltipContainer-BVa1RtHA.js";import"./Icon-DYEerEJN.js";import"./color-C4wFq2U9.js";import"./chevronDown-B_bnQDqi.js";import"./MenuContainer-CQv3OEJS.js";import"./chevronUp-CBO9Bw6D.js";import"./MenuDivider-C1ivzsh3.js";import"./MenuItemOption-C3LdcWT7.js";import"./check-B5N23nL_.js";const q={title:"Components/TooltipContext",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"A context provider that manages visibility of multiple tooltips."}}},argTypes:{children:{control:{disable:!0},description:"<strong>*</strong>",table:{type:{summary:"preact.ComponentChildren"}}},useTooltipContext:{description:"Hook to access the context.",table:{type:{summary:"Props",detail:`
{
  registerHoverStart: (
    ref: preact.RefObject,
    setOpen: (open: boolean) => void
  ) => void
  registerHoverEnd: (
    ref: preact.RefObject,
    setOpen: (open: boolean) => void
  ) => void
  registerPointerDown: (
    ref: preact.RefObject,
    setOpen: (open: boolean) => void
  ) => void
}
`}}}}},e={parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const triggerRef = useRef(null)

<TooltipContext>
  <Text ref={triggerRef}>{children}</Text>
  
  <Tooltip triggerRef={triggerRef}>Tooltip 1</Tooltip>

  <Button tooltip="Tooltip 2">{children}</Button>
</TooltipContext>
        `}}},render:()=>{const i=a(null);return o("div",{className:"sb-column sb-width-300",children:o(n,{children:o(c,{spacing:400,children:[o(d,{ref:i,children:"Hover to see Tooltip 1"}),o(s,{anchorRef:i,children:"Text Tooltip 1"}),o(u,{tooltip:"Button Tooltip",children:"Hover to see Tooltip"}),o(m,{icon:{glyph:t,size:24},tooltip:"ButtonIcon Tooltip"}),o(g,{icon:{glyph:t,size:24},tooltip:"ButtonIcon Tooltip"}),o(T,{tooltip:"ColorSwatch Tooltip"}),o(f,{tooltip:"Input Tooltip",placeholder:"Placeholder"}),o(h,{defaultValue:"list",options:[{value:"list",label:"List",icon:{glyph:t,size:24}},{value:"grid",label:"Grid",icon:{glyph:t,size:24}}]}),o(v,{options:[{value:"list",label:"List"},{value:"grid",label:"Grid"}],defaultValue:"list",placeholder:"Select an option",tooltip:"Select Tooltip"})]})})})}};var l,r,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
