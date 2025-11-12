import{u as e,A as i}from"./hooks.module-Dxk9uxGs.js";import{T as n}from"./Tooltip-Dv-sYeCb.js";import{T as t}from"./Text-C438qO9S.js";import{S as o}from"./Stack-CNzGXmi4.js";import{O as r}from"./OverlayPositioner-BuTO9s3R.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";const z={title:"Components/Tooltip",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"A wrapper component that creates a tooltip-like container. Used inside &lt;OverlayPositioner/&gt; component."}}},argTypes:{className:{control:{type:"text"}},width:{control:{type:"number"},defaultValue:{summary:"auto"},table:{type:{summary:"number | 'auto'"}}},height:{control:{type:"number"},defaultValue:{summary:"auto"},table:{type:{summary:"number | 'auto'"}}},children:{control:{disable:!0},table:{type:{summary:"JSX.Element"}}}}},l={tags:["!autodocs"],args:{className:"",width:300,height:100},parameters:{viewport:{defaultViewport:"large"}},render:a=>e("div",{className:"sb-column sb-width-full",children:e(n,{...a,children:e(t,{intent:"neutral-inverted-fixed",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi id nam tenetur adipisci?"})})})},c={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(o,{spacing:400,children:[e(n,{width:200,height:100,children:e(t,{intent:"neutral-inverted-fixed",children:"Fixed Size Tooltip 200x100"})}),e(n,{width:"auto",height:"auto",children:e(t,{intent:"neutral-inverted-fixed",children:"Auto Size Tooltip"})})]})})},d={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"},docs:{description:{story:"Interactive displaying of the tooltip (including the arrow pointing to the anchor) managed by the &lt;OverlayPositioner/&gt; component."}}},render:()=>{const a=i(null),s=i(null),p=i(null),h=i(null),m=i(null),u=i(null),f=i(null),g=i(null),T=i(null),v=i(null),R=i(null),x=i(null);return e("div",{className:"sb-column sb-width-full",children:e(o,{direction:"row",spacing:400,children:[e(o,{spacing:200,children:[e(t,{ref:s,children:"Top Left"}),e(r,{anchorRef:s,placement:"top-left",arrow:!0,trigger:"hover",paddingY:8,children:e(n,{width:200,children:e(t,{intent:"neutral-inverted-fixed",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})}),e(t,{ref:a,children:"Top"}),e(r,{anchorRef:a,placement:"top",arrow:!0,trigger:"hover",paddingY:8,children:e(n,{width:200,children:e(t,{intent:"neutral-inverted-fixed",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})}),e(t,{ref:p,children:"Top Right"}),e(r,{anchorRef:p,placement:"top-right",arrow:!0,trigger:"hover",paddingY:8,children:e(n,{width:200,children:e(t,{intent:"neutral-inverted-fixed",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})})]}),e(o,{spacing:200,children:[e(t,{ref:m,children:"Bottom Left"}),e(r,{anchorRef:m,placement:"bottom-left",arrow:!0,trigger:"hover",paddingY:8,children:e(n,{width:200,children:e(t,{intent:"neutral-inverted-fixed",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})}),e(t,{ref:h,children:"Bottom"}),e(r,{anchorRef:h,placement:"bottom",arrow:!0,trigger:"hover",paddingY:8,children:e(n,{width:200,children:e(t,{intent:"neutral-inverted-fixed",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})}),e(t,{ref:u,children:"Bottom Right"}),e(r,{anchorRef:u,placement:"bottom-right",arrow:!0,trigger:"hover",paddingY:8,children:e(n,{width:200,children:e(t,{intent:"neutral-inverted-fixed",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})})]}),e(o,{spacing:200,children:[e(t,{ref:g,children:"Left Top"}),e(r,{anchorRef:g,placement:"left-top",arrow:!0,trigger:"hover",paddingX:12,paddingY:-4,children:e(n,{width:200,children:e(t,{intent:"neutral-inverted-fixed",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})}),e(t,{ref:f,children:"Left"}),e(r,{anchorRef:f,placement:"left",arrow:!0,trigger:"hover",paddingX:12,children:e(n,{width:200,children:e(t,{intent:"neutral-inverted-fixed",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})}),e(t,{ref:T,children:"Left Bottom"}),e(r,{anchorRef:T,placement:"left-bottom",arrow:!0,trigger:"hover",paddingX:12,paddingY:-4,children:e(n,{width:200,children:e(t,{intent:"neutral-inverted-fixed",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})})]}),e(o,{spacing:200,children:[e(t,{ref:R,children:"Right Top"}),e(r,{anchorRef:R,placement:"right-top",arrow:!0,trigger:"hover",paddingX:12,paddingY:-4,children:e(n,{width:200,children:e(t,{intent:"neutral-inverted-fixed",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})}),e(t,{ref:v,children:"Right"}),e(r,{anchorRef:v,placement:"right",arrow:!0,trigger:"hover",paddingX:12,children:e(n,{width:200,children:e(t,{intent:"neutral-inverted-fixed",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})}),e(t,{ref:x,children:"Right Bottom"}),e(r,{anchorRef:x,placement:"right-bottom",arrow:!0,trigger:"hover",paddingX:12,paddingY:-4,children:e(n,{width:200,children:e(t,{intent:"neutral-inverted-fixed",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})})]})]})})}};var w,L,y;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    width: 300,
    height: 100
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => {
    return <div className="sb-column sb-width-full">
        <Tooltip {...args}>
          <Text intent="neutral-inverted-fixed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae
            autem dolorum quibusdam necessitatibus natus, ipsa aperiam eos animi
            id nam tenetur adipisci?
          </Text>
        </Tooltip>
      </div>;
  }
}`,...(y=(L=l.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var b,B,O;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    return <div className="sb-column sb-width-full">
        <Stack spacing={400}>
          <Tooltip width={200} height={100}>
            <Text intent="neutral-inverted-fixed">
              Fixed Size Tooltip 200x100
            </Text>
          </Tooltip>
          <Tooltip width="auto" height="auto">
            <Text intent="neutral-inverted-fixed">Auto Size Tooltip</Text>
          </Tooltip>
        </Stack>
      </div>;
  }
}`,...(O=(B=c.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var P,S,E;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    },
    docs: {
      description: {
        story: "Interactive displaying of the tooltip (including the arrow pointing to the anchor) managed by the &lt;OverlayPositioner/&gt; component."
      }
    }
  },
  render: () => {
    const anchorRefTop = useRef<HTMLDivElement | null>(null);
    const anchorRefTopLeft = useRef<HTMLDivElement | null>(null);
    const anchorRefTopEnd = useRef<HTMLDivElement | null>(null);
    const anchorRefBottom = useRef<HTMLDivElement | null>(null);
    const anchorRefBottomLeft = useRef<HTMLDivElement | null>(null);
    const anchorRefBottomEnd = useRef<HTMLDivElement | null>(null);
    const anchorRefLeft = useRef<HTMLDivElement | null>(null);
    const anchorRefLeftTop = useRef<HTMLDivElement | null>(null);
    const anchorRefLeftBottom = useRef<HTMLDivElement | null>(null);
    const anchorRefRight = useRef<HTMLDivElement | null>(null);
    const anchorRefRightTop = useRef<HTMLDivElement | null>(null);
    const anchorRefRightBottom = useRef<HTMLDivElement | null>(null);
    return <div className="sb-column sb-width-full">
        <Stack direction="row" spacing={400}>
          <Stack spacing={200}>
            <Text ref={anchorRefTopLeft}>Top Left</Text>
            <OverlayPositioner anchorRef={anchorRefTopLeft} placement="top-left" arrow={true} trigger="hover" paddingY={8}>
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>

            <Text ref={anchorRefTop}>Top</Text>
            <OverlayPositioner anchorRef={anchorRefTop} placement="top" arrow={true} trigger="hover" paddingY={8}>
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>

            <Text ref={anchorRefTopEnd}>Top Right</Text>
            <OverlayPositioner anchorRef={anchorRefTopEnd} placement="top-right" arrow={true} trigger="hover" paddingY={8}>
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>
          </Stack>

          <Stack spacing={200}>
            <Text ref={anchorRefBottomLeft}>Bottom Left</Text>
            <OverlayPositioner anchorRef={anchorRefBottomLeft} placement="bottom-left" arrow={true} trigger="hover" paddingY={8}>
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>

            <Text ref={anchorRefBottom}>Bottom</Text>
            <OverlayPositioner anchorRef={anchorRefBottom} placement="bottom" arrow={true} trigger="hover" paddingY={8}>
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>

            <Text ref={anchorRefBottomEnd}>Bottom Right</Text>
            <OverlayPositioner anchorRef={anchorRefBottomEnd} placement="bottom-right" arrow={true} trigger="hover" paddingY={8}>
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>
          </Stack>

          <Stack spacing={200}>
            <Text ref={anchorRefLeftTop}>Left Top</Text>
            <OverlayPositioner anchorRef={anchorRefLeftTop} placement="left-top" arrow={true} trigger="hover" paddingX={12} paddingY={-4}>
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>

            <Text ref={anchorRefLeft}>Left</Text>
            <OverlayPositioner anchorRef={anchorRefLeft} placement="left" arrow={true} trigger="hover" paddingX={12}>
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>

            <Text ref={anchorRefLeftBottom}>Left Bottom</Text>
            <OverlayPositioner anchorRef={anchorRefLeftBottom} placement="left-bottom" arrow={true} trigger="hover" paddingX={12} paddingY={-4}>
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>
          </Stack>

          <Stack spacing={200}>
            <Text ref={anchorRefRightTop}>Right Top</Text>
            <OverlayPositioner anchorRef={anchorRefRightTop} placement="right-top" arrow={true} trigger="hover" paddingX={12} paddingY={-4}>
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>

            <Text ref={anchorRefRight}>Right</Text>
            <OverlayPositioner anchorRef={anchorRefRight} placement="right" arrow={true} trigger="hover" paddingX={12}>
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>

            <Text ref={anchorRefRightBottom}>Right Bottom</Text>
            <OverlayPositioner anchorRef={anchorRefRightBottom} placement="right-bottom" arrow={true} trigger="hover" paddingX={12} paddingY={-4}>
              <Tooltip width={200}>
                <Text intent="neutral-inverted-fixed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Tooltip>
            </OverlayPositioner>
          </Stack>
        </Stack>
      </div>;
  }
}`,...(E=(S=d.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const q=["Demo","Size","Placement"];export{l as Demo,d as Placement,c as Size,q as __namedExportsOrder,z as default};
