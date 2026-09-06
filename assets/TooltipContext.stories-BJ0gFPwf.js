import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{v as t,w as n}from"./compat.module-gcU-nFZT.js";import{n as r,t as i}from"./jsxRuntime.module-CNTwvFFH.js";import{i as a,n as o,r as s,t as c}from"./Tooltip-DsjGtgh5.js";import{n as l,t as u}from"./Text-Cr-51GRl.js";import{n as d,t as f}from"./Button-DTA_GS6N.js";import{n as p,t as m}from"./ButtonIcon-CpTDZvwn.js";import{n as h,t as g}from"./ButtonIconToggle-B55c-Wca.js";import{n as _,t as v}from"./link-DAdg43gf.js";import{n as y,t as b}from"./Input-CyseSWne.js";import{n as x,t as S}from"./Select-TE3ZUDMN.js";import{n as C,t as w}from"./ColorSwatch-HXK5SF5m.js";import{n as T,t as E}from"./SegmentedControl-DqFdzUOP.js";import{n as D,t as O}from"./Stack-CRI7JcwR.js";var k,A,j;function M(){return(M=e((()=>{n(),d(),D(),o(),y(),l(),T(),v(),x(),p(),h(),C(),a(),i(),k={title:`Components/TooltipContext`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`A context provider that manages visibility of multiple tooltips.`}}},argTypes:{children:{control:{disable:!0},description:`<strong>*</strong>`,table:{type:{summary:`preact.ComponentChildren`}}},useTooltipContext:{description:`Hook to access the context.`,table:{type:{summary:`Props`,detail:`
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
`}}}}},A={parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
const triggerRef = useRef(null)

<TooltipContext>
  <Text ref={triggerRef}>{children}</Text>
  
  <Tooltip triggerRef={triggerRef}>Tooltip 1</Tooltip>

  <Button tooltip="Tooltip 2">{children}</Button>
</TooltipContext>
        `}}},render:()=>{let e=t(null);return r(`div`,{className:`sb-column sb-width-300`,children:r(s,{children:r(O,{spacing:400,children:[r(u,{ref:e,children:`Hover to see Tooltip 1`}),r(c,{anchorRef:e,children:`Text Tooltip 1`}),r(f,{tooltip:`Button Tooltip`,children:`Hover to see Tooltip`}),r(m,{icon:{glyph:_,size:24},tooltip:`ButtonIcon Tooltip`}),r(g,{icon:{glyph:_,size:24},tooltip:`ButtonIcon Tooltip`}),r(w,{tooltip:`ColorSwatch Tooltip`}),r(b,{tooltip:`Input Tooltip`,placeholder:`Placeholder`}),r(E,{defaultValue:`list`,options:[{value:`list`,label:`List`,icon:{glyph:_,size:24}},{value:`grid`,label:`Grid`,icon:{glyph:_,size:24}}]}),r(S,{options:[{value:`list`,label:`List`},{value:`grid`,label:`Grid`}],defaultValue:`list`,placeholder:`Select an option`,tooltip:`Select Tooltip`})]})})})}},j=[`Demo`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}}})))()}M();export{A as Demo,j as __namedExportsOrder,k as default};