import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{v as t,w as n}from"./compat.module-BbhDrffC.js";import{n as r,t as i}from"./jsxRuntime.module-B_u_rUE0.js";import{t as a}from"./Text-Bf8YN4P6.js";import{At as o,Bt as s,Gn as c,Jn as l,Ln as u,Un as d,Zt as f,fn as p,m,qn as h,t as g,v as _,zn as v}from"./src-Ch66eTMx.js";var y,b,x;e((()=>{n(),g(),l(),i(),y={title:`Components/TooltipContext`,component:h,tags:[`autodocs`],parameters:{docs:{description:{component:`A context provider that manages visibility of multiple tooltips.`}}},argTypes:{children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},useTooltipContext:{description:`Hook to access the context.`,table:{type:{summary:`Props`,detail:`
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
`}}}}},b={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
const triggerRef = useRef(null)

<TooltipContext>
  <Text ref={triggerRef}>{children}</Text>
  
  <Tooltip triggerRef={triggerRef}>Tooltip 1</Tooltip>

  <Button tooltip="Tooltip 2">{children}</Button>
</TooltipContext>
        `}}},render:()=>{let e=t(null);return r(`div`,{className:`sb-column sb-width-300`,children:r(h,{children:r(m,{spacing:400,children:[r(a,{ref:e,children:`Hover to see Tooltip 1`}),r(c,{anchorRef:e,children:`Text Tooltip 1`}),r(d,{tooltip:`Button Tooltip`,children:`Hover to see Tooltip`}),r(v,{icon:{glyph:p,size:24},tooltip:`ButtonIcon Tooltip`}),r(u,{icon:{glyph:p,size:24},tooltip:`ButtonIcon Tooltip`}),r(o,{tooltip:`ColorSwatch Tooltip`}),r(f,{tooltip:`Input Tooltip`,placeholder:`Placeholder`}),r(_,{defaultValue:`list`,options:[{value:`list`,label:`List`,icon:{glyph:p,size:24}},{value:`grid`,label:`Grid`,icon:{glyph:p,size:24}}]}),r(s,{options:[{value:`list`,label:`List`},{value:`grid`,label:`Grid`}],defaultValue:`list`,placeholder:`Select an option`,tooltip:`Select Tooltip`})]})})})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
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
}`,...b.parameters?.docs?.source}}},x=[`Demo`]}))();export{b as Demo,x as __namedExportsOrder,y as default};