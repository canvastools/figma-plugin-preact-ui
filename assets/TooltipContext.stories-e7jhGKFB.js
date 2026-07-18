import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{v as t,w as n}from"./compat.module-BiyPQZFw.js";import{n as r,t as i}from"./jsxRuntime.module-XYsEgyrh.js";import{t as a}from"./Text-Dx8we2OT.js";import{At as o,Bt as s,Qn as c,Un as l,Vn as u,Yn as d,Zn as f,Zt as p,m,mn as h,qn as g,t as _,v}from"./src-BW54aR7x.js";var y,b,x;e((()=>{n(),_(),c(),i(),y={title:`Components/TooltipContext`,component:f,tags:[`autodocs`],parameters:{docs:{description:{component:`A context provider that manages visibility of multiple tooltips.`}}},argTypes:{children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},useTooltipContext:{description:`Hook to access the context.`,table:{type:{summary:`Props`,detail:`
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
        `}}},render:()=>{let e=t(null);return r(`div`,{className:`sb-column sb-width-300`,children:r(f,{children:r(m,{spacing:400,children:[r(a,{ref:e,children:`Hover to see Tooltip 1`}),r(d,{anchorRef:e,children:`Text Tooltip 1`}),r(g,{tooltip:`Button Tooltip`,children:`Hover to see Tooltip`}),r(l,{icon:{glyph:h,size:24},tooltip:`ButtonIcon Tooltip`}),r(u,{icon:{glyph:h,size:24},tooltip:`ButtonIcon Tooltip`}),r(o,{tooltip:`ColorSwatch Tooltip`}),r(p,{tooltip:`Input Tooltip`,placeholder:`Placeholder`}),r(v,{defaultValue:`list`,options:[{value:`list`,label:`List`,icon:{glyph:h,size:24}},{value:`grid`,label:`Grid`,icon:{glyph:h,size:24}}]}),r(s,{options:[{value:`list`,label:`List`},{value:`grid`,label:`Grid`}],defaultValue:`list`,placeholder:`Select an option`,tooltip:`Select Tooltip`})]})})})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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