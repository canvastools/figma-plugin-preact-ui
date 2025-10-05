import{u as e}from"./hooks.module-Dxk9uxGs.js";import{T as f}from"./Text-C438qO9S.js";import{B as n}from"./ButtonIcon-D0YC-jK7.js";import{I as l}from"./Icon-Btq4UltS.js";import{C as m}from"./ColorSwatch-mGfwUEyj.js";import{s as C}from"./spacing-DUhwfx1q.js";import{c}from"./copy-BfeOrRBT.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-Bwgl65_g.js";import"./compat.module-CA66vPNl.js";const B={class:"figma-light",prefix:"--pui-color",variables:{neutral:{bg:{default:"#ffffff","default-interactive":"#ffffff","default-interactive-hover":"#f5f5f5","default-interactive-pressed":"#e5e5e5","default-interactive-selected":"#e5f4ff","default-interactive-selected-hover":"#bde3ff","default-interactive-selected-pressed":"#e5f4ff",secondary:"#f5f5f5","secondary-interactive":"#f5f5f5","secondary-interactive-selected":"#f2f9ff","brand-interactive":"#ffffff","brand-interactive-hover":"#e5f4ff","brand-interactive-pressed":"#bde3ff","danger-interactive":"#ffffff","danger-interactive-hover":"#fff0f0","danger-interactive-pressed":"#ffe2e0",swatch:"#ffffff",disabled:"#ffffff"},text:{default:"#1a1a1a","default-interactive":"#1a1a1a","default-interactive-selected":"#007be5",secondary:"#7d7d7d","secondary-interactive":"#7d7d7d",placeholder:"#808080",brand:"#007be5","brand-interactive":"#007be5",danger:"#dc3412","danger-interactive":"#dc3412",warning:"#b86200",success:"#009951",disabled:"#b3b3b3"},icon:{default:"#1a1a1a","default-interactive":"#1a1a1a","default-interactive-selected":"#007be5",secondary:"#7d7d7d",tertiary:"#cccccc",brand:"#007be5","brand-interactive":"#007be5",danger:"#dc3412","danger-interactive":"#dc3412",warning:"#b86200",success:"#009951",disabled:"#b3b3b3"},border:{default:"#e5e5e5","default-interactive":"#e5e5e5","default-interactive-selected":"#0d99ff","default-interactive-selected-error":"#f24822",secondary:"#cccccc",brand:"#80CAFF","brand-interactive":"#80CAFF",danger:"#ffc7c2","danger-interactive":"#ffc7c2",warning:"#fcd19c",success:"#aff4c6","drop-position":"#1a1a1a","drop-position-restricted":"#f24822",swatch:"#0000001A",disabled:"#e5e5e5"}},"neutral-inverted":{bg:{default:"#2c2c2c","default-interactive":"#2c2c2c","default-interactive-hover":"#5c5c5c","default-interactive-pressed":"#808080",disabled:"#d9d9d9"},text:{default:"#ffffff","default-interactive":"#ffffff",disabled:"#ffffff"},icon:{default:"#ffffff","default-interactive":"#ffffff",disabled:"#ffffff"}},"neutral-inverted-fixed":{bg:{default:"#1E1E1E","default-interactive":"#1E1E1E","default-interactive-hover":"#5c5c5c","default-interactive-pressed":"#808080",disabled:"#1E1E1E"},text:{default:"#ffffff","default-interactive":"#ffffff",secondary:"#BBBBBB","secondary-interactive":"#BBBBBB",disabled:"#808080"},icon:{default:"#ffffff","default-interactive":"#ffffff",secondary:"#BBBBBB","secondary-interactive":"#BBBBBB",disabled:"#808080"},border:{default:"#383838"}},brand:{bg:{default:"#0d99ff","default-interactive":"#0d99ff","default-interactive-hover":"#007be5","default-interactive-pressed":"#0768cf",disabled:"#d9d9d9"},text:{default:"#ffffff","default-interactive":"#ffffff",disabled:"#ffffff"},icon:{default:"#ffffff","default-interactive":"#ffffff",disabled:"#ffffff"},border:{"default-interactive":"#007be5"}},danger:{bg:{default:"#f24822","default-interactive":"#f24822","default-interactive-hover":"#dc3412","default-interactive-pressed":"#bd2915",disabled:"#d9d9d9"},text:{default:"#ffffff","default-interactive":"#ffffff",disabled:"#ffffff"},icon:{default:"#ffffff","default-interactive":"#ffffff",disabled:"#ffffff"},border:{"default-interactive":"#dc3412"}},warning:{bg:{default:"#ffcd29"},text:{default:"#000000"},icon:{default:"#000000"},border:{}},success:{bg:{default:"#14ae5c","default-interactive":"#14ae5c","default-interactive-hover":"#009951","default-interactive-pressed":"#008043",disabled:"#d9d9d9"},text:{default:"#ffffff","default-interactive":"#ffffff",disabled:"#ffffff"},icon:{default:"#ffffff","default-interactive":"#ffffff",disabled:"#ffffff"},border:{"default-interactive":"#009951"}},system:{bg:{scrollbar:"#D4D4D4",resizer:"#A8A8A8"},border:{focus:"#0d99ff"}},shadow:{"popover-hard":"#0000003d","popover-soft":"#00000029","popover-glare":"#0000000a","tooltip-hard":"#0000001a","tooltip-soft":"#0000001f","tooltip-glare":"#ffffff14","menu-hard":"#0000008a","menu-soft":"#00000052","menu-glare":"#ffffff14"}}},x={class:"figma-dark",prefix:"--pui-color",variables:{neutral:{bg:{default:"#2C2C2C","default-interactive":"#2C2C2C","default-interactive-hover":"#383838","default-interactive-pressed":"#444444","default-interactive-selected":"#4A5878","default-interactive-selected-hover":"#394360","default-interactive-selected-pressed":"#4A5878",secondary:"#383838","secondary-interactive":"#383838","secondary-interactive-selected":"#394360","brand-interactive":"#2C2C2C","brand-interactive-hover":"#394360","brand-interactive-pressed":"#4A5878","danger-interactive":"#2C2C2C","danger-interactive-hover":"#60332A","danger-interactive-pressed":"#864537",swatch:"#ffffff",disabled:"#2C2C2C"},text:{default:"#ffffff","default-interactive":"#ffffff","default-interactive-selected":"#7CC4F8",secondary:"#C0C0C0","secondary-interactive":"#C0C0C0",placeholder:"#A0A0A0",brand:"#7CC4F8","brand-interactive":"#7CC4F8",danger:"#FCA397","danger-interactive":"#FCA397",warning:"#F7D15F",success:"#79D297",disabled:"#808080"},icon:{default:"#ffffff","default-interactive":"#ffffff","default-interactive-selected":"#7CC4F8",secondary:"#C0C0C0",tertiary:"#767676",brand:"#7CC4F8","brand-interactive":"#7CC4F8",danger:"#FCA397","danger-interactive":"#FCA397",warning:"#F7D15F",success:"#79D297",disabled:"#808080"},border:{default:"#444444","default-interactive":"#444444","default-interactive-selected":"#0C8CE9","default-interactive-selected-error":"#D4583B",secondary:"#767676",brand:"#536383","brand-interactive":"#536383",danger:"#963323","danger-interactive":"#963323",warning:"#925711",success:"#0A5C35","drop-position":"#ffffff","drop-position-restricted":"#D4583B",swatch:"#00000000",disabled:"#444444"}},"neutral-inverted":{bg:{default:"#ffffff","default-interactive":"#ffffff","default-interactive-hover":"#e5e5e5","default-interactive-pressed":"#D9D9D9",disabled:"#757575"},text:{default:"#1a1a1a","default-interactive":"#1a1a1a",disabled:"#2c2c2c"},icon:{default:"#1a1a1a","default-interactive":"#1a1a1a",disabled:"#2c2c2c"}},"neutral-inverted-fixed":{bg:{default:"#1E1E1E","default-interactive":"#1E1E1E","default-interactive-hover":"#5c5c5c","default-interactive-pressed":"#808080",disabled:"#1E1E1E"},text:{default:"#ffffff","default-interactive":"#ffffff",secondary:"#BBBBBB","secondary-interactive":"#BBBBBB",disabled:"#808080"},icon:{default:"#ffffff","default-interactive":"#ffffff",secondary:"#BBBBBB","secondary-interactive":"#BBBBBB",disabled:"#808080"},border:{default:"#383838"}},brand:{bg:{default:"#0C8CE9","default-interactive":"#0C8CE9","default-interactive-hover":"#0A6DC2","default-interactive-pressed":"#105CAD",disabled:"#757575"},text:{default:"#ffffff","default-interactive":"#ffffff",disabled:"#2c2c2c"},icon:{default:"#ffffff","default-interactive":"#ffffff",disabled:"#2c2c2c"},border:{"default-interactive":"#7CC4F8"}},danger:{bg:{default:"#E03E1A","default-interactive":"#E03E1A","default-interactive-hover":"#C4381C","default-interactive-pressed":"#963323",disabled:"#757575"},text:{default:"#ffffff","default-interactive":"#ffffff",disabled:"#2c2c2c"},icon:{default:"#ffffff","default-interactive":"#ffffff",disabled:"#2c2c2c"},border:{"default-interactive":"#A55440"}},warning:{bg:{default:"#F3C11B"},text:{default:"#000000"},icon:{default:"#000000"},border:{}},success:{bg:{default:"#198F51","default-interactive":"#198F51","default-interactive-hover":"#078348","default-interactive-pressed":"#0A5C35",disabled:"#757575"},text:{default:"#ffffff","default-interactive":"#ffffff",disabled:"#2c2c2c"},icon:{default:"#ffffff","default-interactive":"#ffffff",disabled:"#2c2c2c"},border:{"default-interactive":"#078348"}},system:{bg:{scrollbar:"#686868",resizer:"#A3A3A3"},border:{focus:"#0C8CE9"}},shadow:{"popover-hard":"#0000003d","popover-soft":"#0000008f","popover-glare":"#ffffff14","tooltip-hard":"#0000008a","tooltip-soft":"#00000052","tooltip-glare":"#ffffff14","menu-hard":"#0000008a","menu-soft":"#00000052","menu-glare":"#ffffff14"}}},T={variables:{small:"2px",medium:"5px",large:"13px",full:"100%"}},M={title:"Overview/Variables",tags:["!dev"],parameters:{docs:{description:{component:"Preview of all CSS variables used in the library.<br/> It is controlled by the `.figma-light` or `.figma-dark` classes provided by Figma in the plugin window."}}}},s=a=>{if(navigator.clipboard&&navigator.clipboard.writeText)return navigator.clipboard.writeText(a)};function h(a,t=[]){const r={};for(const[i,d]of Object.entries(a)){const o=[...t,i];typeof d=="string"?r[o.join("-")]=d:typeof d=="object"&&d!==null&&Object.assign(r,h(d,o))}return r}function w(a){const t={};for(const[i,d]of Object.entries(a)){const o=h(d.variables);for(const[v,y]of Object.entries(o))t[v]||(t[v]={}),t[v][i]=y}const r=Object.keys(a);for(const i of Object.keys(t))for(const d of r)d in t[i]||(t[i][d]=void 0);return t}const k=()=>{const a=w({figmaLight:B,figmaDark:x});return Object.keys(a).map(t=>e("tr",{style:{borderBottom:"1px solid var(--pui-color-neutral-border-default)"},children:[e("td",{style:{padding:16},children:e("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[e(n,{onClick:()=>s(`--pui-color-${t}`),children:e(l,{glyph:c,variant:"scaled"})}),e("div",{style:{width:"100%",paddingLeft:16},children:e(f,{strong:!0,children:["--pui-color-",t]})})]})}),Object.keys(a[t]).map(r=>e("td",{style:{padding:16},children:a[t][r]?e("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:16},children:[e(n,{onClick:()=>s(a[t][r]),children:e(l,{glyph:c,variant:"scaled"})}),e(m,{hex:a[t][r]}),e("div",{style:{width:"100%",paddingLeft:16},children:e(f,{strong:!0,children:a[t][r]})})]}):null}))]}))},A=()=>{const a={};for(const[t,r]of Object.entries(C.variables))a[t]=r;return Object.keys(a).map(t=>e("tr",{style:{borderBottom:"1px solid var(--pui-color-neutral-border-default)"},children:[e("td",{style:{padding:16},children:e("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[e(n,{onClick:()=>s(`--pui-spacing-${t}`),children:e(l,{glyph:c,variant:"scaled"})}),e("div",{style:{width:"100%",paddingLeft:16},children:e(f,{strong:!0,children:["--pui-spacing-",t]})})]})}),e("td",{style:{padding:16},children:e("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[e(n,{onClick:()=>s(a[t]),children:e(l,{glyph:c,variant:"scaled"})}),e("div",{style:{width:"100%",paddingLeft:16},children:e(f,{strong:!0,children:a[t]})})]})})]}))},E=()=>{const a={};for(const[t,r]of Object.entries(T.variables))a[t]=r;return Object.keys(a).map(t=>e("tr",{style:{borderBottom:"1px solid var(--pui-color-neutral-border-default)"},children:[e("td",{style:{padding:16},children:e("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[e(n,{onClick:()=>s(`--pui-spacing-${t}`),children:e(l,{glyph:c,variant:"scaled"})}),e("div",{style:{width:"100%",paddingLeft:16},children:e(f,{strong:!0,children:["--pui-spacing-",t]})})]})}),e("td",{style:{padding:16},children:e("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[e(n,{onClick:()=>s(a[t]),children:e(l,{glyph:c,variant:"scaled"})}),e("div",{style:{width:"100%",paddingLeft:16},children:e(f,{strong:!0,children:a[t]})})]})})]}))},u={tags:["!dev"],parameters:{viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-gap-16",children:[e(f,{variant:"heading",size:"large",children:"Colors"}),e("table",{style:{borderCollapse:"collapse",marginBottom:24},children:[e("tr",{style:{borderBottom:"1px solid var(--pui-color-neutral-border-default)"},children:[e("td",{style:{padding:16},children:e(f,{strong:!0,children:"Token name"})}),e("td",{style:{padding:16},children:e(f,{strong:!0,children:"Figma Light"})}),e("td",{style:{padding:16},children:e(f,{strong:!0,children:"Figma Dark"})})]}),k()]}),e(f,{variant:"heading",size:"large",children:"Spacing"}),e("table",{style:{borderCollapse:"collapse",marginBottom:24},children:[e("tr",{style:{borderBottom:"1px solid var(--pui-color-neutral-border-default)"},children:[e("td",{style:{padding:16},children:e(f,{strong:!0,children:"Token name"})}),e("td",{style:{padding:16},children:e(f,{strong:!0,children:"Value"})})]}),A()]}),e(f,{variant:"heading",size:"large",children:"Radius"}),e("table",{style:{borderCollapse:"collapse",marginBottom:24},children:[e("tr",{style:{borderBottom:"1px solid var(--pui-color-neutral-border-default)"},children:[e("td",{style:{padding:16},children:e(f,{strong:!0,children:"Token name"})}),e("td",{style:{padding:16},children:e(f,{strong:!0,children:"Value"})})]}),E()]})]})};var p,b,g;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    viewport: {
      defaultViewport: "large"
    }
  },
  render: () => <div className="sb-column sb-gap-16">
      <Text variant="heading" size="large">
        Colors
      </Text>
      <table style={{
      borderCollapse: "collapse",
      marginBottom: 24
    }}>
        <tr style={{
        borderBottom: "1px solid var(--pui-color-neutral-border-default)"
      }}>
          <td style={{
          padding: 16
        }}>
            <Text strong>Token name</Text>
          </td>
          <td style={{
          padding: 16
        }}>
            <Text strong>Figma Light</Text>
          </td>
          <td style={{
          padding: 16
        }}>
            <Text strong>Figma Dark</Text>
          </td>
        </tr>
        {colorTokensList()}
      </table>
      <Text variant="heading" size="large">
        Spacing
      </Text>
      <table style={{
      borderCollapse: "collapse",
      marginBottom: 24
    }}>
        <tr style={{
        borderBottom: "1px solid var(--pui-color-neutral-border-default)"
      }}>
          <td style={{
          padding: 16
        }}>
            <Text strong>Token name</Text>
          </td>
          <td style={{
          padding: 16
        }}>
            <Text strong>Value</Text>
          </td>
        </tr>
        {spacingTokensList()}
      </table>
      <Text variant="heading" size="large">
        Radius
      </Text>
      <table style={{
      borderCollapse: "collapse",
      marginBottom: 24
    }}>
        <tr style={{
        borderBottom: "1px solid var(--pui-color-neutral-border-default)"
      }}>
          <td style={{
          padding: 16
        }}>
            <Text strong>Token name</Text>
          </td>
          <td style={{
          padding: 16
        }}>
            <Text strong>Value</Text>
          </td>
        </tr>
        {radiusTokensList()}
      </table>
    </div>
}`,...(g=(b=u.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const _=["_1"];export{u as _1,_ as __namedExportsOrder,M as default};
