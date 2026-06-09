import{A as m,u as e}from"./hooks.module-CGIakYml.js";import{T as l,a as u}from"./TooltipContext-C-9LO0ZZ.js";import{T as h}from"./Text-9aeIDhQ2.js";import"./preact.module-C06nO-nz.js";import"./typedForwardRef-BtG8EZfd.js";import"./compat.module-DSB5hssq.js";import"./TooltipContainer-BVa1RtHA.js";const v={title:"Components/Tooltip",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"A facade component that provides a simplified API for tooltips."}}},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}}},className:{control:{type:"text"}},children:{control:{control:"text"},description:"<strong>*</strong>",table:{type:{summary:"JSX.Element"}}},trigger:{control:{type:"inline-radio"},options:["hover","click"],table:{defaultValue:{summary:"hover"}}},"...TooltipContainerProps":{control:{disable:!0},table:{type:{summary:"Pick<TooltipContainerProps>",detail:`
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
          `}}},"...TooltipTimingOptions":{control:{disable:!0},table:{type:{summary:"TooltipTimingOptions",detail:`
{
  showDelay?: number
  hideDelay?: number
}
          `}}}}},t={args:{id:void 0,className:"",children:"Tooltip content"},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
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
`}}},render:n=>{const o=m(null);return e("div",{className:"sb-column sb-width-300 sb-container",children:e(u,{children:[e(h,{ref:o,children:"Hover to see Tooltip."}),e(l,{anchorRef:o,...n})]})})}},r={args:{trigger:"click",showDelay:0,hideDelay:0,children:"Click tooltip content"},parameters:{viewport:{defaultViewport:"large"},docs:{source:{language:"tsx",code:`
const anchorRef = useRef(null)

<TooltipContext>
  <Text ref={anchorRef}>Click to see Tooltip</Text>

  <Tooltip
    anchorRef={anchorRef}
    trigger="click"
    showDelay={0}
    hideDelay={0}
    {...args}
  >
    {children}
  </Tooltip>
</TooltipContext>
`}}},render:n=>{const o=m(null);return e("div",{className:"sb-column sb-width-300 sb-container",children:e(u,{children:[e(h,{ref:o,children:"Click to see Tooltip."}),e(l,{anchorRef:o,...n})]})})}};var a,i,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    trigger: 'click',
    showDelay: 0,
    hideDelay: 0,
    children: 'Click tooltip content'
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
  <Text ref={anchorRef}>Click to see Tooltip</Text>

  <Tooltip
    anchorRef={anchorRef}
    trigger="click"
    showDelay={0}
    hideDelay={0}
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
          <Text ref={anchorRef}>Click to see Tooltip.</Text>
          {/* @ts-expect-error Storybook spread */}
          <Tooltip anchorRef={anchorRef} {...args} />
        </TooltipContext>
      </div>;
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const C=["Demo","Click"];export{r as Click,t as Demo,C as __namedExportsOrder,v as default};
