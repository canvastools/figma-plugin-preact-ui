import{d as T,u as e}from"./hooks.module-BOklADZz.js";import"./compat.module-C06LZZ-F.js";import{C as x,c as D}from"./utils-DVNmoe3Z.js";import{S as C}from"./Stack-0j0r-CnM.js";import{T as u}from"./Text-DWXnbeUo.js";import{C as h}from"./Checkbox-CuWMMrjY.js";import{S as j}from"./Spacing-BXS5zCwM.js";import{S}from"./preact.module-BEcQExD3.js";import{B as v}from"./ButtonIcon-D68A8Iw5.js";import{I as y}from"./Icon-CUZDBV4V.js";import{c as B}from"./copy-DtO80RIp.js";import{C as N}from"./ColorSwatch-lJB0rTNz.js";import{d as O}from"./color-C4wFq2U9.js";import"./typedForwardRef-IM0ZXC4v.js";import"./check-CJonqv9k.js";import"./mixed-bv5LC3_3.js";import"./TooltipContext-AO-nQ0Om.js";import"./TooltipContainer-CxrP3vc5.js";const L={class:"figma-light",prefix:"--pui-color",variables:{neutral:{bg:{default:"#FFFFFF","default-hover":"#0000000D","default-pressed":"#0000001C","default-selected":"#0D99FF1F","default-selected-hover":"#0D99FF40","default-selected-pressed":"#0D99FF1F",secondary:"#F5F5F5","secondary-hover":"#0000001C","secondary-pressed":"#0000000A","secondary-selected":"#0D99FF0F",tertiary:"#E6E6E6","brand-hover":"#0D99FF1F","brand-pressed":"#0D99FF40","danger-hover":"#F2482214","danger-pressed":"#F2482229",disabled:"#F5F5F5"},text:{default:"#000000E6","default-selected":"#007BE5",secondary:"#00000085",brand:"#007BE5",danger:"#DC3412",warning:"#B86200",success:"#009951",component:"#8638e5","component-secondary":"#C5B2DC",slot:"#FF24BD","slot-secondary":"#E5AED4",disabled:"#0000004D",placeholder:"#00000080"},icon:{default:"#000000E6","default-selected":"#007BE5",secondary:"#00000085",tertiary:"#00000033",brand:"#007BE5",danger:"#DC3412",warning:"#B86200",success:"#009951",component:"#8638e5","component-secondary":"#C5B2DC",slot:"#FF24BD","slot-secondary":"#E5AED4",disabled:"#0000004D"},border:{default:"#0000001C","default-hover":"#00000014","default-selected":"#0D99FF","default-selected-contrast":"#0D99FF6B",secondary:"#00000033",brand:"#0D99FF40","brand-hover":"#0D99FF85","brand-selected":"#0D99FF",danger:"#F248224D","danger-error":"#F24822",warning:"#F2A42780",success:"#12E3745C",component:"#8638e5",slot:"#FF24BD",disabled:"#0000001C","drop-position":"#1A1A1A","drop-position-restricted":"#F24822",swatch:"#0000001F"}},"neutral-fixed":{bg:{swatch:"#FFFFFF"}},"neutral-inverted":{bg:{default:"#2C2C2C","default-hover":"#5C5C5C","default-pressed":"#808080",disabled:"#D9D9D9"},text:{default:"#FFFFFF",disabled:"#FFFFFF"},icon:{default:"#FFFFFF",disabled:"#FFFFFF"}},"neutral-inverted-fixed":{bg:{default:"#1E1E1E","default-hover":"#5C5C5C","default-pressed":"#808080",secondary:"#383838","secondary-hover":"#FFFFFF1F",disabled:"#1E1E1E"},text:{default:"#FFFFFF",secondary:"#BBBBBB",danger:"#FCA397",disabled:"#808080"},icon:{default:"#FFFFFF",secondary:"#BBBBBB",disabled:"#808080"},border:{default:"#383838"}},brand:{bg:{default:"#0D99FF","default-hover":"#198DFB","default-pressed":"#0768CF",secondary:"#0768CF",disabled:"#D9D9D9"},text:{default:"#FFFFFF",secondary:"#A8DAFF",disabled:"#FFFFFF"},icon:{default:"#FFFFFF",secondary:"#A8DAFF",disabled:"#FFFFFF"},border:{default:"#007BE5"}},danger:{bg:{default:"#F24822","default-hover":"#DC3412","default-pressed":"#BD2915",secondary:"#FFE2E0",disabled:"#D9D9D9"},text:{default:"#FFFFFF",disabled:"#FFFFFF"},icon:{default:"#FFFFFF",disabled:"#FFFFFF"},border:{default:"#DC3412"}},warning:{bg:{default:"#FFCD29",disabled:"#D9D9D9"},text:{default:"#000000",disabled:"#FFFFFF"},icon:{default:"#000000",disabled:"#FFFFFF"},border:{}},success:{bg:{default:"#14AE5C","default-hover":"#009951","default-pressed":"#008043",disabled:"#D9D9D9"},text:{default:"#FFFFFF",disabled:"#FFFFFF"},icon:{default:"#FFFFFF",disabled:"#FFFFFF"},border:{default:"#009951"}},system:{bg:{scrollbar:"#D4D4D4",resizer:"#A8A8A8"},border:{focused:"#0D99FF"}},shadow:{"popover-hard":"#0000002E","popover-soft":"#0000001F","popover-glare":"#FFFFFF","tooltip-hard":"#0000001C","tooltip-soft":"#0000001F","tooltip-glare":"#ffffff0A","menu-hard":"#0000002E","menu-soft":"#0000001F","menu-glare":"#ffffff0A"}}},I={class:"figma-dark",prefix:"--pui-color",variables:{neutral:{bg:{default:"#2C2C2C","default-hover":"#FFFFFF0F","default-pressed":"#FFFFFF1F","default-selected":"#85A5FF5C","default-selected-hover":"#91B4FF5C","default-selected-pressed":"#85A5FF5C",secondary:"#383838","secondary-hover":"#FFFFFF1F","secondary-pressed":"#FFFFFF0F","secondary-selected":"#6385FF42",tertiary:"#444444","brand-hover":"#85A5FF5C","brand-pressed":"#6385FF42","danger-hover":"#AD3C1366","danger-pressed":"#9E4A29CC",disabled:"#2C2C2C"},text:{default:"#FFFFFF","default-selected":"#7CC4F8",secondary:"#FFFFFFB3",brand:"#7CC4F8",danger:"#FCA397",warning:"#F7D15F",success:"#79D297",component:"#D1A8FF","component-secondary":"#6B5884",slot:"#F08DD1","slot-secondary":"#9B4A81",disabled:"#FFFFFF66",placeholder:"#FFFFFF8C"},icon:{default:"#FFFFFF","default-selected":"#7CC4F8",secondary:"#FFFFFFB3",tertiary:"#FFFFFF59",brand:"#7CC4F8",danger:"#FCA397",warning:"#F7D15F",success:"#79D297",component:"#D1A8FF","component-secondary":"#6B5884",slot:"#F08DD1","slot-secondary":"#9B4A81",disabled:"#FFFFFF66"},border:{default:"#FFFFFF1F","default-hover":"#FFFFFF14","default-selected":"#0C8CE9","default-selected-contrast":"#7CC4F86B",secondary:"#FFFFFF59",brand:"#7CC4F866","brand-hover":"#7CC4F866","brand-selected":"#7CC4F8",danger:"#F2482285","danger-error":"#D4583B",warning:"#F2822780",success:"#09ED743D",component:"#8638e5",slot:"#FF24BD",disabled:"#FFFFFF1F","drop-position":"#FFFFFF","drop-position-restricted":"#D4583B",swatch:"#FFFFFF1F"}},"neutral-fixed":{bg:{swatch:"#FFFFFF"}},"neutral-inverted":{bg:{default:"#FFFFFF","default-hover":"#D9D9D9","default-pressed":"#BFBFBF",disabled:"#757575"},text:{default:"#1A1A1A",disabled:"#2C2C2C"},icon:{default:"#1A1A1A",disabled:"#2C2C2C"}},"neutral-inverted-fixed":{bg:{default:"#1E1E1E","default-hover":"#5C5C5C","default-pressed":"#808080",secondary:"#383838","secondary-hover":"#FFFFFF1F",disabled:"#1E1E1E"},text:{default:"#FFFFFF",secondary:"#BBBBBB",danger:"#FCA397",disabled:"#808080"},icon:{default:"#FFFFFF",secondary:"#BBBBBB",disabled:"#808080"},border:{default:"#383838"}},brand:{bg:{default:"#0C8CE9","default-hover":"#0A6CC2","default-pressed":"#105CAD",secondary:"#105CAD",disabled:"#757575"},text:{default:"#FFFFFF",secondary:"#A8D6F7",disabled:"#2C2C2C"},icon:{default:"#FFFFFF",secondary:"#A8D6F7",disabled:"#2C2C2C"},border:{default:"#7CC4F8"}},danger:{bg:{default:"#E03E1A","default-hover":"#C4381C","default-pressed":"#963323",secondary:"#7C2622",disabled:"#757575"},text:{default:"#FFFFFF",disabled:"#2C2C2C"},icon:{default:"#FFFFFF",disabled:"#2C2C2C"},border:{default:"#A55440"}},warning:{bg:{default:"#F3C11B",disabled:"#757575"},text:{default:"#000000",disabled:"#2C2C2C"},icon:{default:"#000000",disabled:"#2C2C2C"},border:{}},success:{bg:{default:"#198F51","default-hover":"#078348","default-pressed":"#0A5C35",disabled:"#757575"},text:{default:"#FFFFFF",disabled:"#2C2C2C"},icon:{default:"#FFFFFF",disabled:"#2C2C2C"},border:{default:"#078348"}},system:{bg:{scrollbar:"#686868",resizer:"#A3A3A3"},border:{focused:"#0C8CE9"}},shadow:{"popover-hard":"#0000008A","popover-soft":"#00000052","popover-glare":"#ffffff0A","tooltip-hard":"#0000008A","tooltip-soft":"#00000052","tooltip-glare":"#ffffff0A","menu-hard":"#0000008A","menu-soft":"#00000052","menu-glare":"#ffffff0A"}}},z={class:"figjam",prefix:"--pui-color",variables:{neutral:{bg:{default:"#FFFFFF","default-hover":"#0000000D","default-pressed":"#0000001C","default-selected":"#7C2BDA1F","default-selected-hover":"#7C2BDA40","default-selected-pressed":"#7C2BDA1F",secondary:"#F5F5F5","secondary-hover":"#0000001C","secondary-pressed":"#0000000A","secondary-selected":"#7C2BDA0F",tertiary:"#E6E6E6","brand-hover":"#7C2BDA1F","brand-pressed":"#7C2BDA40","danger-hover":"#F2482214","danger-pressed":"#F2482229",disabled:"#F5F5F5"},text:{default:"#000000E6","default-selected":"#8638e5",secondary:"#00000085",brand:"#8638e5",danger:"#DC3412",warning:"#B86200",success:"#009951",component:"#8638e5","component-secondary":"#C5B2DC",slot:"#FF24BD","slot-secondary":"#E5AED4",disabled:"#0000004D",placeholder:"#00000080"},icon:{default:"#000000E6","default-selected":"#8638e5",secondary:"#00000085",tertiary:"#00000033",brand:"#8638e5",danger:"#DC3412",warning:"#B86200",success:"#009951",component:"#8638e5","component-secondary":"#C5B2DC",slot:"#FF24BD","slot-secondary":"#E5AED4",disabled:"#0000004D"},border:{default:"#0000001C","default-hover":"#00000014","default-selected":"#7C2BDA","default-selected-contrast":"#7C2BDA6B",secondary:"#00000033",brand:"#7C2BDA40","brand-hover":"#7C2BDA85","brand-selected":"#7C2BDA",danger:"#F248224D","danger-error":"#F24822",warning:"#F2A42780",success:"#12E3745C",component:"#8638e5",slot:"#FF24BD",disabled:"#0000001C","drop-position":"#1A1A1A","drop-position-restricted":"#F24822",swatch:"#0000001F"}},"neutral-fixed":{bg:{swatch:"#FFFFFF"}},"neutral-inverted":{bg:{default:"#2C2C2C","default-hover":"#5C5C5C","default-pressed":"#808080",disabled:"#D9D9D9"},text:{default:"#FFFFFF",disabled:"#FFFFFF"},icon:{default:"#FFFFFF",disabled:"#FFFFFF"}},"neutral-inverted-fixed":{bg:{default:"#1E1E1E","default-hover":"#5C5C5C","default-pressed":"#808080",secondary:"#383838","secondary-hover":"#FFFFFF1F",disabled:"#1E1E1E"},text:{default:"#FFFFFF",secondary:"#BBBBBB",danger:"#FCA397",disabled:"#808080"},icon:{default:"#FFFFFF",secondary:"#BBBBBB",disabled:"#808080"},border:{default:"#383838"}},brand:{bg:{default:"#9747ff","default-hover":"#8638e5","default-pressed":"#7C2BDA",secondary:"#7C2BDA",disabled:"#D9D9D9"},text:{default:"#FFFFFF",secondary:"#DABDFF",disabled:"#FFFFFF"},icon:{default:"#FFFFFF",secondary:"#DABDFF",disabled:"#FFFFFF"},border:{default:"#7C2BDA"}},danger:{bg:{default:"#F24822","default-hover":"#DC3412","default-pressed":"#BD2915",secondary:"#FFE2E0",disabled:"#D9D9D9"},text:{default:"#FFFFFF",disabled:"#FFFFFF"},icon:{default:"#FFFFFF",disabled:"#FFFFFF"},border:{default:"#DC3412"}},warning:{bg:{default:"#FFCD29",disabled:"#D9D9D9"},text:{default:"#000000",disabled:"#FFFFFF"},icon:{default:"#000000",disabled:"#FFFFFF"},border:{}},success:{bg:{default:"#14AE5C","default-hover":"#009951","default-pressed":"#008043",disabled:"#D9D9D9"},text:{default:"#FFFFFF",disabled:"#FFFFFF"},icon:{default:"#FFFFFF",disabled:"#FFFFFF"},border:{default:"#009951"}},system:{bg:{scrollbar:"#D4D4D4",resizer:"#A8A8A8"},border:{focused:"#7C2BDA"}},shadow:{"popover-hard":"#0000002E","popover-soft":"#0000001F","popover-glare":"#FFFFFF","tooltip-hard":"#0000001C","tooltip-soft":"#0000001F","tooltip-glare":"#ffffff0A","menu-hard":"#0000002E","menu-soft":"#0000001F","menu-glare":"#ffffff0A"}}},de={title:"Variables/Colors",parameters:{docs:{source:{language:"tsx",code:`
// CSS

.element {
  color: var(--pui-color-neutral-text-default);
}

// JS

import { figmaLight } from 'figma-plugin-preact-ui' // or figmaDark, figjamLight

const style = {
  color: figmaLight.variables.neutral.text.default,
}

function App() {
  return (
    <div class="app" {...style}>
      Hello world!
    </div>
  )
}`}}}};function w(r,F=[]){const t={};for(const[i,d]of Object.entries(r)){const f=[...F,i];typeof d=="string"?t[f.join("-")]=d:typeof d=="object"&&d!==null&&Object.assign(t,w(d,f))}return t}function G(r,F){const t={},i=new Set(Object.entries(r.intents).filter(([,n])=>n).map(([n])=>n)),d=new Set(Object.entries(r.elements).filter(([,n])=>n).map(([n])=>n));for(const[n,b]of Object.entries(F)){const m=w(b.variables);for(const[a,s]of Object.entries(m)){const o=a.split("-"),l=o.findIndex(_=>_ in r.elements),p=l>0?o.slice(0,l).join("-"):o[0],c=l>0?o[l]:void 0;i.has(p)&&(c&&c in r.elements&&!d.has(c)||(t[a]||(t[a]={}),t[a][n]=s))}}const f=Object.keys(F);for(const n of Object.keys(t))for(const b of f)b in t[n]||(t[n][b]=void 0);return t}const $={figmaLight:L,figmaDark:I,figjamLight:z},M=r=>{const F=G(r,$),t=Object.keys(F),i=Object.keys(r.intents).filter(a=>r.intents[a]),d=Object.keys(r.elements).filter(a=>r.elements[a]),f=x.filter(a=>r.themes[a.key]).map(a=>a.key),n=a=>{const s=a.split("-"),o=s.findIndex(c=>c in r.elements),l=o>0?s.slice(0,o).join("-"):s[0],p=o>0?s[o]:void 0;return{intent:l,element:p}},b=a=>e("tr",{className:"sb-variables-table__row-border",children:[e("td",{className:"sb-variables-table__cell",children:e("div",{className:"sb-variables-table__flex",children:[e(v,{onClick:()=>D(`--pui-color-${a}`),children:e(y,{glyph:B})}),e("div",{className:"sb-variables-table__name",children:e(u,{strong:!0,wrap:!1,children:["--pui-color-",a]})})]})}),f.map(s=>e("td",{className:"sb-variables-table__cell",children:F[a][s]?e("div",{className:"sb-variables-table__flex--gap",children:[e(v,{onClick:()=>D(F[a][s]),children:e(y,{glyph:B})}),e(N,{disabled:!0,fill:O(F[a][s])}),e("div",{className:"sb-variables-table__name",children:e(u,{strong:!0,wrap:!1,children:F[a][s]})})]}):null},s))]},`token-${a}`),m=[];for(const a of i){const s=t.filter(l=>n(l).intent===a);if(s.length===0)continue;m.push(e("tr",{className:"sb-variables-table__row-intent",children:e("td",{colSpan:1+f.length,className:"sb-variables-table__cell--compact",children:e(u,{strong:!0,children:a})})},`intent-divider-${a}`));const o=new Set(s);for(const l of d){const p=s.filter(c=>n(c).element===l);p.length!==0&&(m.push(e("tr",{className:"sb-variables-table__row-border",children:e("td",{colSpan:1+f.length,className:"sb-variables-table__cell--compact",children:e(u,{children:l})})},`element-divider-${a}-${l}`)),p.forEach(c=>{m.push(b(c)),o.delete(c)}))}Array.from(o).sort().forEach(l=>m.push(b(l)))}return m},g={tags:["!dev"],parameters:{docs:{description:{story:"Color themes are controlled by the `.figma-light` or `.figma-dark` classes provided by Figma in the plugin window.<br/> For FigJam, use the `.figjam` class on the plugin root (see `dist/themes.css`)."}}},render:()=>{const[r,F]=T({intents:{neutral:!0,"neutral-inverted":!0,"neutral-inverted-fixed":!0,brand:!0,danger:!0,warning:!0,success:!0,system:!0,shadow:!0},elements:{bg:!0,text:!0,icon:!0,border:!0},themes:{figmaLight:!0,figmaDark:!0,figjamLight:!0}});return e(S,{children:[e(C,{spacing:1e3,direction:"row",children:[e(C,{spacing:200,direction:"column",children:[e(u,{strong:!0,children:"Intents"}),Object.entries(r.intents).map(([t,i])=>e(h,{checked:i,label:t,onCheckedChange:d=>F({...r,intents:{...r.intents,[t]:d.checked}})},t))]}),e(C,{spacing:200,direction:"column",children:[e(u,{strong:!0,children:"Elements"}),Object.entries(r.elements).map(([t,i])=>e(h,{checked:i,label:t,onCheckedChange:d=>F({...r,elements:{...r.elements,[t]:d.checked}})},t))]}),e(C,{spacing:200,direction:"column",children:[e(u,{strong:!0,children:"Themes"}),Object.entries(r.themes).map(([t,i])=>e(h,{checked:i,label:t,onCheckedChange:d=>F({...r,themes:{...r.themes,[t]:d.checked}})},t))]})]}),e(j,{size:400}),e("div",{className:"sb-column sb-gap-16 sb-variables-table-wrap",children:e("table",{className:"sb-variables-table",children:[e("tr",{className:"sb-variables-table__row-border",children:[e("td",{className:"sb-variables-table__cell",children:e(u,{strong:!0,children:"Token name"})}),x.filter(t=>r.themes[t.key]).map(t=>e("td",{className:"sb-variables-table__cell",children:e(u,{strong:!0,children:t.label})},t.key))]}),M(r)]})})]})}};var A,E,k;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    docs: {
      description: {
        story: 'Color themes are controlled by the \`.figma-light\` or \`.figma-dark\` classes provided by Figma in the plugin window.<br/> For FigJam, use the \`.figjam\` class on the plugin root (see \`dist/themes.css\`).'
      }
    }
  },
  render: () => {
    const [groups, setGroups] = useState({
      intents: {
        neutral: true,
        'neutral-inverted': true,
        'neutral-inverted-fixed': true,
        brand: true,
        danger: true,
        warning: true,
        success: true,
        system: true,
        shadow: true
      },
      elements: {
        bg: true,
        text: true,
        icon: true,
        border: true
      },
      themes: {
        figmaLight: true,
        figmaDark: true,
        figjamLight: true
      }
    });
    return <Fragment>
        <Stack spacing={1000} direction="row">
          <Stack spacing={200} direction="column">
            <Text strong>Intents</Text>
            {Object.entries(groups.intents).map(([intent, value]) => <Checkbox key={intent} checked={value} label={intent} onCheckedChange={args => setGroups({
            ...groups,
            intents: {
              ...groups.intents,
              [intent]: args.checked
            }
          })} />)}
          </Stack>
          <Stack spacing={200} direction="column">
            <Text strong>Elements</Text>
            {Object.entries(groups.elements).map(([element, value]) => <Checkbox key={element} checked={value} label={element} onCheckedChange={args => setGroups({
            ...groups,
            elements: {
              ...groups.elements,
              [element]: args.checked
            }
          })} />)}
          </Stack>
          <Stack spacing={200} direction="column">
            <Text strong>Themes</Text>
            {Object.entries(groups.themes).map(([theme, value]) => <Checkbox key={theme} checked={value} label={theme} onCheckedChange={args => setGroups({
            ...groups,
            themes: {
              ...groups.themes,
              [theme]: args.checked
            }
          })} />)}
          </Stack>
        </Stack>
        <SpacingComponent size={400} />
        <div className="sb-column sb-gap-16 sb-variables-table-wrap">
          <table className="sb-variables-table">
            <tr className="sb-variables-table__row-border">
              <td className="sb-variables-table__cell">
                <Text strong>Token name</Text>
              </td>
              {COLOR_DOC_THEMES.filter(t => groups.themes[t.key]).map(t => <td key={t.key} className="sb-variables-table__cell">
                  <Text strong>{t.label}</Text>
                </td>)}
            </tr>
            {colorTokensList(groups)}
          </table>
        </div>
      </Fragment>;
  }
}`,...(k=(E=g.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};const ne=["Colors"];export{g as Colors,ne as __namedExportsOrder,de as default};
