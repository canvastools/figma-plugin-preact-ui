import{A as i,u as e}from"./hooks.module-6Sbq__eq.js";import{T as s,a as c}from"./TooltipContext-e3IspsuS.js";import{T as p}from"./Text-BbQ_b1VF.js";import"./preact.module-gH5CyEHP.js";import"./typedForwardRef-CtFJgl6m.js";import"./compat.module-CHmB9zKI.js";import"./TooltipContainer-CJCq4A9v.js";const b={title:"Components/Tooltip",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"A facade component that provides a simplified API for tooltips."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},children:{control:{control:"text"},description:"<strong>*</strong>",table:{type:{summary:"JSX.Element"}}},"...TooltipContainerProps":{control:{disable:!0},table:{type:{summary:"Pick<TooltipContainerProps>",detail:`
{
  width: number
  height: number
  showArrow: boolean
}
          `}}},"...OverlayPositionerProps":{control:{disable:!0},table:{type:{summary:"Pick<OverlayPositionerProps>",detail:`
{
  anchorRef: RefObject | null
  placement: OverlayPositionerPlacement
  placementFallback: OverlayPositionerPlacement[]
  offsetX: number
  offsetY: number
  offsetEdge: number
  onOpen: () => void
  onClose: () => void
}
          `}}}}},o={args:{id:void 0,className:"",children:"Tooltip content"},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const anchorRef = useRef(null)

<TooltipContext>
  <Text ref={anchorRef}>Hover to see Tooltip</Text>
  
  <Tooltip
    anchorRef={anchorRef}
    {...args}
  >
    {children}
  </Tooltip>
</TooltipContext>
`}}},render:l=>{const t=i(null);return e("div",{className:"sb-column sb-width-300 sb-container",children:e(c,{children:[e(p,{ref:t,children:"Hover to see Tooltip."}),e(s,{anchorRef:t,...l})]})})}};var n,r,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: '',
    children: 'Tooltip content'
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
        language: 'tsx',
        code: \`
const anchorRef = useRef(null)

<TooltipContext>
  <Text ref={anchorRef}>Hover to see Tooltip</Text>
  
  <Tooltip
    anchorRef={anchorRef}
    {...args}
  >
    {children}
  </Tooltip>
</TooltipContext>
\`
      }
    }
  },
  render: args => {
    const anchorRef = useRef<HTMLDivElement | null>(null);
    return <div className="sb-column sb-width-300 sb-container">
        <TooltipContext>
          <Text ref={anchorRef}>Hover to see Tooltip.</Text>
          {/* @ts-expect-error Storybook spread */}
          <Tooltip anchorRef={anchorRef} {...args} />
        </TooltipContext>
      </div>;
  }
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const g=["Demo"];export{o as Demo,g as __namedExportsOrder,b as default};
