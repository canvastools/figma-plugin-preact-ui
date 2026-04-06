import{A as a,u as e}from"./hooks.module-CGIakYml.js";import{T as s,a as p}from"./TooltipContext-DGdoB1MK.js";import{T as c}from"./Text-9aeIDhQ2.js";import"./preact.module-C06nO-nz.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./TooltipContainer-BVa1RtHA.js";const x={title:"Components/Tooltip",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"A facade component that provides a simplified API for tooltips."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},triggerRef:{control:{disable:!0},description:"Ref to the trigger element.",table:{type:{summary:"preact.RefObject"}}},children:{control:{control:"text"},description:"<strong>*</strong>",table:{type:{summary:"JSX.Element"}}},"...TooltipContainerProps":{control:{disable:!0},table:{type:{summary:"Pick<TooltipContainerProps>",detail:`
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
          `}}}}},t={args:{id:void 0,className:"",children:"Tooltip content"},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const triggerRef = useRef(null)

<TooltipContext>
  <Text ref={triggerRef}>Hover to see Tooltip</Text>
  
  <Tooltip
    triggerRef={triggerRef}
    {...args}
  >
    {children}
  </Tooltip>
</TooltipContext>
`}}},render:l=>{const o=a(null);return e("div",{className:"sb-column sb-width-300 sb-container",children:e(p,{children:[e(c,{ref:o,children:"Hover to see Tooltip."}),e(s,{triggerRef:o,...l})]})})}};var r,n,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
const triggerRef = useRef(null)

<TooltipContext>
  <Text ref={triggerRef}>Hover to see Tooltip</Text>
  
  <Tooltip
    triggerRef={triggerRef}
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
    const triggerRef = useRef<HTMLDivElement | null>(null);
    return <div className="sb-column sb-width-300 sb-container">
        <TooltipContext>
          <Text ref={triggerRef}>Hover to see Tooltip.</Text>
          {/* @ts-expect-error Storybook spread */}
          <Tooltip triggerRef={triggerRef} {...args} />
        </TooltipContext>
      </div>;
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const R=["Demo"];export{t as Demo,R as __namedExportsOrder,x as default};
