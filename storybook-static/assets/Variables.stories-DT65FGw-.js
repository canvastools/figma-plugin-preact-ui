import{u as e}from"./hooks.module-Dxk9uxGs.js";import{T as r}from"./Text-Dvytwbdg.js";import{I as f}from"./Icon-C8lq2hDK.js";import{B as l}from"./ButtonIcon-DcWQ0H1k.js";import{s as y}from"./spacing-DUhwfx1q.js";import"./preact.module-DKQ80Dzn.js";import"./typedForwardRef-cP-mn0Xe.js";import"./compat.module-c0s5p6eE.js";const m={class:"figma-light",prefix:"--pui-color",variables:{neutral:{bg:{default:"#ffffff","default-interactive":"#ffffff","default-interactive-hover":"#f5f5f5","default-interactive-pressed":"#e5e5e5","default-interactive-selected":"#e5f4ff","default-interactive-selected-hover":"#bde3ff","default-interactive-selected-pressed":"#e5f4ff",secondary:"#f5f5f5","secondary-interactive":"#f5f5f5","secondary-interactive-selected":"#f2f9ff","brand-interactive":"#ffffff","brand-interactive-hover":"#e5f4ff","brand-interactive-pressed":"#bde3ff","danger-interactive":"#ffffff","danger-interactive-hover":"#fff0f0","danger-interactive-pressed":"#ffe2e0"},text:{default:"#1a1a1a","default-interactive":"#1a1a1a","default-interactive-selected":"#007be5",secondary:"#7d7d7d","secondary-interactive":"#ababab",brand:"#007be5","brand-interactive":"#007be5",danger:"#dc3412","danger-interactive":"#dc3412",warning:"#b86200",success:"#009951"},icon:{default:"#1a1a1a","default-interactive":"#1a1a1a","default-interactive-selected":"#007be5",secondary:"#7d7d7d",tertiary:"#cccccc",brand:"#007be5","brand-interactive":"#007be5",danger:"#dc3412","danger-interactive":"#dc3412",warning:"#b86200",success:"#009951"},border:{default:"#e5e5e5","default-interactive":"#e5e5e5","default-interactive-selected":"#0d99ff","default-interactive-selected-error":"#f24822",secondary:"#cccccc",brand:"#80CAFF","brand-interactive":"#80CAFF",danger:"#ffc7c2","danger-interactive":"#ffc7c2",warning:"#fcd19c",success:"#aff4c6","drop-position":"#1a1a1a","drop-position-restricted":"#f24822"}},"neutral-inverted":{bg:{default:"#2c2c2c","default-interactive":"#2c2c2c","default-interactive-hover":"#5c5c5c","default-interactive-pressed":"#808080"},text:{default:"#ffffff","default-interactive":"#ffffff"},icon:{default:"#ffffff","default-interactive":"#ffffff"}},brand:{bg:{default:"#0d99ff","default-interactive":"#0d99ff","default-interactive-hover":"#007be5","default-interactive-pressed":"#0768cf"},text:{default:"#ffffff","default-interactive":"#ffffff"},icon:{default:"#ffffff","default-interactive":"#ffffff"},border:{"default-interactive":"#007be5"}},danger:{bg:{default:"#f24822","default-interactive":"#f24822","default-interactive-hover":"#dc3412","default-interactive-pressed":"#bd2915"},text:{default:"#ffffff","default-interactive":"#ffffff"},icon:{default:"#ffffff","default-interactive":"#ffffff"},border:{"default-interactive":"#dc3412"}},warning:{bg:{default:"#ffcd29"},text:{default:"#000000"},icon:{default:"#000000"},border:{}},success:{bg:{default:"#14ae5c","default-interactive":"#14ae5c","default-interactive-hover":"#009951","default-interactive-pressed":"#008043"},text:{default:"#ffffff","default-interactive":"#ffffff"},icon:{default:"#ffffff","default-interactive":"#ffffff"},border:{"default-interactive":"#009951"}},disabled:{bg:{default:"#e6e6e6",secondary:"#ffffff"},text:{default:"#b3b3b3",secondary:"#ababab"},icon:{default:"#b3b3b3",secondary:"#ababab"},border:{secondary:"#e5e5e5"}},system:{bg:{scrollbar:"#D4D4D4",resizer:"#D4D4D4"},border:{focus:"#0d99ff"}}}},C={class:"figma-dark",prefix:"--pui-color",variables:{neutral:{bg:{default:"#2C2C2C","default-interactive":"#2C2C2C","default-interactive-hover":"#383838","default-interactive-pressed":"#444444","default-interactive-selected":"#4A5878","default-interactive-selected-hover":"#394360","default-interactive-selected-pressed":"#4A5878",secondary:"#383838","secondary-interactive":"#383838","secondary-interactive-selected":"#394360","brand-interactive":"#2C2C2C","brand-interactive-hover":"#394360","brand-interactive-pressed":"#4A5878","danger-interactive":"#2C2C2C","danger-interactive-hover":"#60332A","danger-interactive-pressed":"#864537"},text:{default:"#ffffff","default-interactive":"#ffffff","default-interactive-selected":"#7CC4F8",secondary:"#C0C0C0","secondary-interactive":"#808080",brand:"#7CC4F8","brand-interactive":"#7CC4F8",danger:"#FCA397","danger-interactive":"#FCA397",warning:"#F7D15F",success:"#79D297"},icon:{default:"#ffffff","default-interactive":"#ffffff","default-interactive-selected":"#7CC4F8",secondary:"#C0C0C0",tertiary:"#767676",brand:"#7CC4F8","brand-interactive":"#7CC4F8",danger:"#FCA397","danger-interactive":"#FCA397",warning:"#F7D15F",success:"#79D297"},border:{default:"#444444","default-interactive":"#444444","default-interactive-selected":"#0C8CE9","default-interactive-selected-error":"#D4583B",secondary:"#767676",brand:"#536383","brand-interactive":"#536383",danger:"#963323","danger-interactive":"#963323",warning:"#925711",success:"#0A5C35","drop-position":"#ffffff","drop-position-restricted":"#D4583B"}},"neutral-inverted":{bg:{default:"#ffffff","default-interactive":"#ffffff","default-interactive-hover":"#e5e5e5","default-interactive-pressed":"#D9D9D9"},text:{default:"#1a1a1a","default-interactive":"#1a1a1a"},icon:{default:"#1a1a1a","default-interactive":"#1a1a1a"}},brand:{bg:{default:"#0C8CE9","default-interactive":"#0C8CE9","default-interactive-hover":"#0A6DC2","default-interactive-pressed":"#105CAD"},text:{default:"#ffffff","default-interactive":"#ffffff"},icon:{default:"#ffffff","default-interactive":"#ffffff"},border:{"default-interactive":"#7CC4F8"}},danger:{bg:{default:"#E03E1A","default-interactive":"#E03E1A","default-interactive-hover":"#C4381C","default-interactive-pressed":"#963323"},text:{default:"#ffffff","default-interactive":"#ffffff"},icon:{default:"#ffffff","default-interactive":"#ffffff"},border:{"default-interactive":"#A55440"}},warning:{bg:{default:"#F3C11B"},text:{default:"#000000"},icon:{default:"#000000"},border:{}},success:{bg:{default:"#198F51","default-interactive":"#198F51","default-interactive-hover":"#078348","default-interactive-pressed":"#0A5C35"},text:{default:"#ffffff","default-interactive":"#ffffff"},icon:{default:"#ffffff","default-interactive":"#ffffff"},border:{"default-interactive":"#078348"}},disabled:{bg:{default:"#757575",secondary:"#2C2C2C"},text:{default:"#2C2C2C",secondary:"#808080"},icon:{default:"#2C2C2C",secondary:"#808080"},border:{secondary:"#444444"}},system:{bg:{scrollbar:"#686868",resizer:"#686868"},border:{focus:"#0C8CE9"}}}},x={variables:{small:"2px",medium:"5px",large:"13px",full:"100%"}},N={title:"Overview/Variables",tags:["!dev"],parameters:{docs:{description:{component:"Preview of all CSS variables used in the library.<br/> It is controlled by the `.figma-light` or `.figma-dark` classes provided by Figma in the plugin window."}}}},T={figmaLight:"figma-light",figmaDark:"figma-dark"},c=a=>{if(navigator.clipboard&&navigator.clipboard.writeText)return navigator.clipboard.writeText(a)};function b(a,t=[]){const i={};for(const[d,n]of Object.entries(a)){const s=[...t,d];typeof n=="string"?i[s.join("-")]=n:typeof n=="object"&&n!==null&&Object.assign(i,b(n,s))}return i}function w(a){const t={};for(const[d,n]of Object.entries(a)){const s=b(n.variables);for(const[u,h]of Object.entries(s))t[u]||(t[u]={}),t[u][d]=h}const i=Object.keys(a);for(const d of Object.keys(t))for(const n of i)n in t[d]||(t[d][n]=void 0);return t}const k=()=>{const a=w({figmaLight:m,figmaDark:C});return Object.keys(a).map(t=>e("tr",{style:{borderBottom:"1px solid var(--pui-color-neutral-border-default)"},children:[e("td",{style:{padding:16},children:e("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[e(l,{onClick:()=>c(`--pui-color-${t}`),children:e(f,{glyph:"copy",variant:"scaled"})}),e("div",{style:{width:"100%",paddingLeft:16},children:e(r,{strong:!0,children:["--pui-color-",t]})})]})}),Object.keys(a[t]).map(i=>e("td",{style:{padding:16},children:a[t][i]?e("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[e(l,{onClick:()=>c(a[t][i]),children:e(f,{glyph:"copy",variant:"scaled"})}),e("div",{className:T[i],style:{flex:"0 0 auto",marginLeft:16,width:24,height:24,borderRadius:5,backgroundColor:`var(--pui-color-${t})`,boxShadow:`inset 0 0 0 1px ${i==="figmaLight"?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)"}`}}),e("div",{style:{width:"100%",paddingLeft:16},children:e(r,{strong:!0,children:a[t][i]})})]}):null}))]}))},F=()=>{const a={};for(const[t,i]of Object.entries(y.variables))a[t]=i;return Object.keys(a).map(t=>e("tr",{style:{borderBottom:"1px solid var(--pui-color-neutral-border-default)"},children:[e("td",{style:{padding:16},children:e("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[e(l,{onClick:()=>c(`--pui-spacing-${t}`),children:e(f,{glyph:"copy",variant:"scaled"})}),e("div",{style:{width:"100%",paddingLeft:16},children:e(r,{strong:!0,children:["--pui-spacing-",t]})})]})}),e("td",{style:{padding:16},children:e("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[e(l,{onClick:()=>c(a[t]),children:e(f,{glyph:"copy",variant:"scaled"})}),e("div",{style:{width:"100%",paddingLeft:16},children:e(r,{strong:!0,children:a[t]})})]})})]}))},D=()=>{const a={};for(const[t,i]of Object.entries(x.variables))a[t]=i;return Object.keys(a).map(t=>e("tr",{style:{borderBottom:"1px solid var(--pui-color-neutral-border-default)"},children:[e("td",{style:{padding:16},children:e("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[e(l,{onClick:()=>c(`--pui-spacing-${t}`),children:e(f,{glyph:"copy",variant:"scaled"})}),e("div",{style:{width:"100%",paddingLeft:16},children:e(r,{strong:!0,children:["--pui-spacing-",t]})})]})}),e("td",{style:{padding:16},children:e("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[e(l,{onClick:()=>c(a[t]),children:e(f,{glyph:"copy",variant:"scaled"})}),e("div",{style:{width:"100%",paddingLeft:16},children:e(r,{strong:!0,children:a[t]})})]})})]}))},o={tags:["!dev"],parameters:{viewport:{defaultViewport:"large"}},render:()=>e("div",{className:"sb-column sb-gap-16",children:[e(r,{variant:"heading",size:"large",children:"Colors"}),e("table",{style:{borderCollapse:"collapse",marginBottom:24},children:[e("tr",{style:{borderBottom:"1px solid var(--pui-color-neutral-border-default)"},children:[e("td",{style:{padding:16},children:e(r,{strong:!0,children:"Token name"})}),e("td",{style:{padding:16},children:e(r,{strong:!0,children:"Figma Light"})}),e("td",{style:{padding:16},children:e(r,{strong:!0,children:"Figma Dark"})})]}),k()]}),e(r,{variant:"heading",size:"large",children:"Spacing"}),e("table",{style:{borderCollapse:"collapse",marginBottom:24},children:[e("tr",{style:{borderBottom:"1px solid var(--pui-color-neutral-border-default)"},children:[e("td",{style:{padding:16},children:e(r,{strong:!0,children:"Token name"})}),e("td",{style:{padding:16},children:e(r,{strong:!0,children:"Value"})})]}),F()]}),e(r,{variant:"heading",size:"large",children:"Radius"}),e("table",{style:{borderCollapse:"collapse",marginBottom:24},children:[e("tr",{style:{borderBottom:"1px solid var(--pui-color-neutral-border-default)"},children:[e("td",{style:{padding:16},children:e(r,{strong:!0,children:"Token name"})}),e("td",{style:{padding:16},children:e(r,{strong:!0,children:"Value"})})]}),D()]})]})};var v,g,p;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const V=["_1"];export{o as _1,V as __namedExportsOrder,N as default};
