import{d as H,y as re,A as ae,T as oe,u as e}from"./hooks.module-Dxk9uxGs.js";import{f as se}from"./index-BWINGljf.js";import{t as le,b as D}from"./typedForwardRef-Bwgl65_g.js";import{I as ie}from"./Icon-Btq4UltS.js";import{O as de}from"./OverlayPositioner-BuTO9s3R.js";import{T as ce}from"./Tooltip-Dv-sYeCb.js";import{T as y}from"./Text-C438qO9S.js";import{v as ue,a as me}from"./viewList-Dft0lama.js";import{S as C}from"./Stack-CNzGXmi4.js";const pe=({className:r,options:a,value:l,defaultValue:J,disabled:g=!1,fullWidth:Q=!1,onChange:V,...X},Z)=>{const[$,N]=H(J),h=l!==void 0,S=h?l:$;re(()=>{h&&N(l)},[h,l]);const ee=D("SegmentedControl",void 0,{fullWidth:Q}),b=ae([]);b.current=a.map((t,n)=>b.current[n]||null);const O=oe(()=>a.findIndex(t=>t.value===S),[a,S]),te=t=>{const n=Math.max(0,Math.min(a.length-1,t)),o=b.current[n];o&&o.focus()},W=(t,n)=>{h||N(n),V==null||V({event:t,value:n})},ne=t=>{const n=t,o=n.key;if(o!=="ArrowLeft"&&o!=="ArrowRight")return;n.stopPropagation(),n.preventDefault();const w=o==="ArrowRight"?1:-1,d=((O>=0?O:0)+w+a.length)%a.length,k=a[d];k&&(W(n,k.value),te(d))};return e("div",{className:[ee,r,"no-drag"].join(" ").trim(),ref:Z,onKeyDown:ne,...X,children:a.map((t,n)=>{const o=t.value===S,w={current:null},x=D("SegmentedControl","item",{selected:o,disabled:g,icon:!!t.icon});return e("button",{className:x,ref:d=>{b.current[n]=d,w.current=d},tabIndex:o?0:-1,onClick:d=>W(d,t.value),disabled:g,children:[t.icon&&e(ie,{glyph:typeof t.icon=="function"?t.icon:void 0,intent:"neutral",intentModifiers:o?"default":"secondary",variant:"default",size:24,interactive:!0,disabled:g,children:typeof t.icon!="function"?t.icon:void 0}),t.icon&&e(de,{anchorRef:w,placement:"bottom",trigger:"hover",paddingY:8,visibilityDelay:1e3,arrow:!0,children:e(ce,{children:e(y,{intent:"neutral-inverted-fixed",children:t.title})})}),!t.icon&&e(y,{intent:"neutral",intentModifiers:o?"default":"secondary",interactive:!0,disabled:g,children:t.title})]},t.value)})})},s=le(pe),fe={title:"Components/SegmentedControl",component:s,tags:["autodocs"],argTypes:{className:{control:{type:"text"}},options:{control:{disable:!0},table:{type:{summary:"SegmentedControlOption[]"}},description:`Array of items to manage. 
      <pre>interface SegmentedControlOption {
  value: string
  title: string
  icon?: Glyph | preact.ComponentChildren
}</pre>
      `},value:{control:{disable:!0},description:"Value for the controlled mode.",table:{type:{summary:"string"}}},defaultValue:{control:{disable:!0},description:"Default value for the uncontrolled mode.",table:{type:{summary:"string"}}},disabled:{control:{type:"boolean"},defaultValue:{summary:!1}},fullWidth:{control:{type:"boolean"},defaultValue:{summary:!1}},onChange:{action:"onChange",description:"Callback when the value is changed.",table:{type:{summary:"(args: { event: MouseEvent | KeyboardEvent, value: string }) => void"}}}}},i=[{value:"list",title:"List view",icon:ue},{value:"grid",title:"Grid view",icon:me}],c={tags:["!autodocs"],args:{className:"",defaultValue:"list",disabled:!1,fullWidth:!1,onChange:se()},parameters:{viewport:{defaultViewport:"large"}},render:r=>e("div",{className:"sb-column",children:e(s,{options:i.map(a=>({...a,icon:void 0})),...r})})},u={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(s,{options:i,defaultValue:"list"})})},m={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(s,{options:i.map(r=>({...r,icon:void 0})),defaultValue:"list"})})},p={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>{const[r,a]=H("list");return e("div",{className:"sb-column sb-width-300",children:e(C,{spacing:400,fullWidth:!0,children:[e(y,{children:["Value: ",r]}),e(s,{value:r,options:i.map(l=>({...l,icon:void 0})),onChange:l=>a(l.value)})]})})}},f={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-full",children:e(C,{spacing:400,fullWidth:!0,children:[e(s,{options:i,defaultValue:"list",fullWidth:!0}),e(s,{options:i.map(r=>({...r,icon:void 0})),defaultValue:"list",fullWidth:!0})]})})},v={parameters:{controls:{disable:!0},viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-width-300",children:e(C,{spacing:400,children:[e(s,{options:i,defaultValue:"list",disabled:!0}),e(s,{options:i.map(r=>({...r,icon:void 0})),defaultValue:"list",disabled:!0})]})})};var I,T,_;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    className: "",
    defaultValue: "list",
    disabled: false,
    fullWidth: false,
    onChange: fn()
  },
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: args => <div className="sb-column">
      <SegmentedControl options={sampleOptions.map(option => ({
      ...option,
      icon: undefined
    }))} {...args} />
    </div>
}`,...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var A,M,R;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-300">
      <SegmentedControl options={sampleOptions} defaultValue="list" />
    </div>
}`,...(R=(M=u.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var j,E,F;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-300">
      <SegmentedControl options={sampleOptions.map(option => ({
      ...option,
      icon: undefined
    }))} defaultValue="list" />
    </div>
}`,...(F=(E=m.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var G,K,L;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => {
    const [value, setValue] = useState("list");
    return <div className="sb-column sb-width-300">
        <Stack spacing={400} fullWidth>
          <Text>Value: {value}</Text>
          <SegmentedControl value={value} options={sampleOptions.map(option => ({
          ...option,
          icon: undefined
        }))} onChange={e => setValue(e.value)} />
        </Stack>
      </div>;
  }
}`,...(L=(K=p.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var P,z,U;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-full">
      <Stack spacing={400} fullWidth>
        <SegmentedControl options={sampleOptions} defaultValue="list" fullWidth />
        <SegmentedControl options={sampleOptions.map(option => ({
        ...option,
        icon: undefined
      }))} defaultValue="list" fullWidth />
      </Stack>
    </div>
}`,...(U=(z=f.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var B,Y,q;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-width-300">
      <Stack spacing={400}>
        <SegmentedControl options={sampleOptions} defaultValue="list" disabled />
        <SegmentedControl options={sampleOptions.map(option => ({
        ...option,
        icon: undefined
      }))} defaultValue="list" disabled />
      </Stack>
    </div>
}`,...(q=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};const ve=["Demo","WithIcons","Uncontrolled","Controlled","FullWidth","Disabled"],Oe=Object.freeze(Object.defineProperty({__proto__:null,Controlled:p,Demo:c,Disabled:v,FullWidth:f,Uncontrolled:m,WithIcons:u,__namedExportsOrder:ve,default:fe},Symbol.toStringTag,{value:"Module"}));export{c as D,s as S,Oe as a};
