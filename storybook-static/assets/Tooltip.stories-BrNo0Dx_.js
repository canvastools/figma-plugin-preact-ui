import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{v as t,w as n}from"./compat.module-BiyPQZFw.js";import{n as r,t as i}from"./jsxRuntime.module-XYsEgyrh.js";import{t as a}from"./Text-Dx8we2OT.js";import{Xn as o,Yn as s,Zn as c,t as l}from"./src-fsSRAyCS.js";var u,d,f,p;e((()=>{n(),l(),o(),i(),u={title:`Components/Tooltip`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`A facade component that provides a simplified API for tooltips.`}}},argTypes:{id:{control:{type:`text`},table:{type:{summary:`string`}}},className:{control:{type:`text`}},children:{control:{control:`text`},description:`<strong>*</strong>`,table:{type:{summary:`JSX.Element`}}},trigger:{control:{type:`inline-radio`},options:[`hover`,`click`],table:{defaultValue:{summary:`hover`}}},"...TooltipContainerProps":{control:{disable:!0},table:{type:{summary:`Pick<TooltipContainerProps>`,detail:`
{
  width: number
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
          `}}}}},d={args:{id:void 0,className:``,trigger:`hover`,children:`Tooltip content`},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:e=>{let n=t(null);return r(`div`,{className:`sb-column sb-width-300 sb-container`,children:r(c,{children:[r(a,{ref:n,children:`Hover to see Tooltip.`}),r(s,{anchorRef:n,...e})]})})}},f={args:{trigger:`click`,showDelay:0,hideDelay:0,children:`Click tooltip content`},parameters:{viewport:{defaultViewport:`large`},docs:{source:{code:`
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
`}}},render:e=>{let n=t(null);return r(`div`,{className:`sb-column sb-width-300 sb-container`,children:r(c,{children:[r(a,{ref:n,children:`Click to see Tooltip.`}),r(s,{anchorRef:n,...e})]})})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Demo`,`Click`]}))();export{f as Click,d as Demo,p as __namedExportsOrder,u as default};