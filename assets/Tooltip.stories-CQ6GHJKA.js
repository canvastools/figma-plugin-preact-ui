import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{v as t,w as n}from"./compat.module-gcU-nFZT.js";import{n as r,t as i}from"./jsxRuntime.module-CNTwvFFH.js";import{i as a,n as o,r as s,t as c}from"./Tooltip-DsjGtgh5.js";import{n as l,t as u}from"./Text-Cr-51GRl.js";var d,f,p,m;function h(){return(h=e((()=>{n(),l(),a(),o(),i(),d={title:`Components/Tooltip`,component:c,tags:[`autodocs`],parameters:{docs:{description:{component:`A facade component that provides a simplified API for tooltips.`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},children:{control:{control:`text`},description:`<strong>*</strong>`,table:{type:{summary:`JSX.Element`}}},trigger:{control:{type:`inline-radio`},options:[`hover`,`click`],table:{defaultValue:{summary:`hover`}}},"...TooltipContainerProps":{control:{disable:!0},table:{type:{summary:`Pick<TooltipContainerProps>`,detail:`
{
  width: number
  maxWidth: number
  height: number
  showArrow: boolean
}
          `}}},"...OverlayPositionerProps":{control:{disable:!0},table:{type:{summary:`Pick<OverlayPositionerProps>`,detail:`
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
          `}}},"...TooltipTimingOptions":{control:{disable:!0},table:{type:{summary:`TooltipTimingOptions`,detail:`
{
  showDelay?: number
  hideDelay?: number
}
          `}}}}},f={args:{id:void 0,className:``,trigger:`hover`,children:`Tooltip content`},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:e=>{let n=t(null);return r(`div`,{className:`sb-column sb-width-300 sb-container`,children:r(s,{children:[r(u,{ref:n,children:`Hover to see Tooltip.`}),r(c,{anchorRef:n,...e})]})})}},p={args:{trigger:`click`,showDelay:0,hideDelay:0,children:`Click tooltip content`},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:e=>{let n=t(null);return r(`div`,{className:`sb-column sb-width-300 sb-container`,children:r(s,{children:[r(u,{ref:n,children:`Click to see Tooltip.`}),r(c,{anchorRef:n,...e})]})})}},m=[`Demo`,`Click`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: undefined,
    className: '',
    trigger: 'hover',
    children: 'Tooltip content'
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    },
    docs: {
      source: {
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as Click,f as Demo,m as __namedExportsOrder,d as default};