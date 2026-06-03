import{d as T,u as e}from"./hooks.module-6Sbq__eq.js";import"./compat.module-CHmB9zKI.js";import{C as x,c as D}from"./utils-FIplQQ3L.js";import{S as g}from"./Stack-FIJoWfyG.js";import{T as u}from"./Text-BbQ_b1VF.js";import{C}from"./Checkbox-Dka_1EET.js";import{S as j}from"./Spacing-BJUHNIx5.js";import{S}from"./preact.module-gH5CyEHP.js";import{B as v}from"./ButtonIcon-CpncnrOt.js";import{I as y}from"./Icon-DqIclgYW.js";import{c as A}from"./copy-C1I75Csv.js";import{C as N}from"./ColorSwatch-B49yK6Pv.js";import{d as O}from"./color-C4wFq2U9.js";import"./typedForwardRef-CtFJgl6m.js";import"./check-BeUN7pdY.js";import"./mixed-siTn7IpN.js";import"./TooltipContext-e3IspsuS.js";import"./TooltipContainer-CJCq4A9v.js";const L={class:"figma-light",prefix:"--pui-color",variables:{neutral:{bg:{default:"#FFFFFF","default-hover":"#0000000D","default-pressed":"#0000001C","default-selected":"#0D99FF1F","default-selected-hover":"#0D99FF40","default-selected-pressed":"#0D99FF1F",secondary:"#F5F5F5","secondary-hover":"#0000001C","secondary-pressed":"#0000000A","secondary-selected":"#0D99FF0F",tertiary:"#E6E6E6","brand-hover":"#0D99FF1F","brand-pressed":"#0D99FF40","danger-hover":"#F2482214","danger-pressed":"#F2482229",disabled:"#F5F5F5"},text:{default:"#000000E6","default-selected":"#007BE5",secondary:"#00000085",brand:"#007BE5",danger:"#DC3412",warning:"#B86200",success:"#009951",component:"#8638e5",disabled:"#0000004D",placeholder:"#00000080"},icon:{default:"#000000E6","default-selected":"#007BE5",secondary:"#00000085",tertiary:"#00000033",brand:"#007BE5",danger:"#DC3412",warning:"#B86200",success:"#009951",component:"#8638e5",disabled:"#0000004D"},border:{default:"#0000001C","default-hover":"#00000014","default-selected":"#0D99FF","default-selected-contrast":"#0D99FF6B",secondary:"#00000033",brand:"#0D99FF40","brand-hover":"#0D99FF85","brand-selected":"#0D99FF",danger:"#F248224D","danger-error":"#F24822",warning:"#F2A42780",success:"#12E3745C",disabled:"#0000001C","drop-position":"#1A1A1A","drop-position-restricted":"#F24822",swatch:"#0000001F"}},"neutral-fixed":{bg:{swatch:"#FFFFFF"}},"neutral-inverted":{bg:{default:"#2C2C2C","default-hover":"#5C5C5C","default-pressed":"#808080",disabled:"#D9D9D9"},text:{default:"#FFFFFF",disabled:"#FFFFFF"},icon:{default:"#FFFFFF",disabled:"#FFFFFF"}},"neutral-inverted-fixed":{bg:{default:"#1E1E1E","default-hover":"#5C5C5C","default-pressed":"#808080",secondary:"#383838","secondary-hover":"#FFFFFF1F",disabled:"#1E1E1E"},text:{default:"#FFFFFF",secondary:"#BBBBBB",danger:"#FCA397",disabled:"#808080"},icon:{default:"#FFFFFF",secondary:"#BBBBBB",disabled:"#808080"},border:{default:"#383838"}},brand:{bg:{default:"#0D99FF","default-hover":"#198DFB","default-pressed":"#0768CF",disabled:"#D9D9D9"},text:{default:"#FFFFFF",secondary:"#A8DAFF",disabled:"#FFFFFF"},icon:{default:"#FFFFFF",secondary:"#A8DAFF",disabled:"#FFFFFF"},border:{default:"#007BE5"}},danger:{bg:{default:"#F24822","default-hover":"#DC3412","default-pressed":"#BD2915",secondary:"#FFE2E0",disabled:"#D9D9D9"},text:{default:"#FFFFFF",disabled:"#FFFFFF"},icon:{default:"#FFFFFF",disabled:"#FFFFFF"},border:{default:"#DC3412"}},warning:{bg:{default:"#FFCD29",disabled:"#D9D9D9"},text:{default:"#000000",disabled:"#FFFFFF"},icon:{default:"#000000",disabled:"#FFFFFF"},border:{}},success:{bg:{default:"#14AE5C","default-hover":"#009951","default-pressed":"#008043",disabled:"#D9D9D9"},text:{default:"#FFFFFF",disabled:"#FFFFFF"},icon:{default:"#FFFFFF",disabled:"#FFFFFF"},border:{default:"#009951"}},system:{bg:{scrollbar:"#D4D4D4",resizer:"#A8A8A8"},border:{focused:"#0D99FF"}},shadow:{"popover-hard":"#0000002E","popover-soft":"#0000001F","popover-glare":"#FFFFFF","tooltip-hard":"#0000001C","tooltip-soft":"#0000001F","tooltip-glare":"#ffffff0A","menu-hard":"#0000002E","menu-soft":"#0000001F","menu-glare":"#ffffff0A"}}},I={class:"figma-dark",prefix:"--pui-color",variables:{neutral:{bg:{default:"#2C2C2C","default-hover":"#FFFFFF0F","default-pressed":"#FFFFFF1F","default-selected":"#85A5FF5C","default-selected-hover":"#91B4FF5C","default-selected-pressed":"#85A5FF5C",secondary:"#383838","secondary-hover":"#FFFFFF1F","secondary-pressed":"#FFFFFF0F","secondary-selected":"#6385FF42",tertiary:"#444444","brand-hover":"#85A5FF5C","brand-pressed":"#6385FF42","danger-hover":"#AD3C1366","danger-pressed":"#9E4A29CC",disabled:"#2C2C2C"},text:{default:"#FFFFFF","default-selected":"#7CC4F8",secondary:"#FFFFFFB3",brand:"#7CC4F8",danger:"#FCA397",warning:"#F7D15F",success:"#79D297",component:"#D1A8FF",disabled:"#FFFFFF66",placeholder:"#FFFFFF8C"},icon:{default:"#FFFFFF","default-selected":"#7CC4F8",secondary:"#FFFFFFB3",tertiary:"#FFFFFF59",brand:"#7CC4F8",danger:"#FCA397",warning:"#F7D15F",success:"#79D297",component:"#D1A8FF",disabled:"#FFFFFF66"},border:{default:"#FFFFFF1F","default-hover":"#FFFFFF14","default-selected":"#0C8CE9","default-selected-contrast":"#7CC4F86B",secondary:"#FFFFFF59",brand:"#7CC4F866","brand-hover":"#7CC4F866","brand-selected":"#7CC4F8",danger:"#F2482285","danger-error":"#D4583B",warning:"#F2822780",success:"#09ED743D",disabled:"#FFFFFF1F","drop-position":"#FFFFFF","drop-position-restricted":"#D4583B",swatch:"#FFFFFF1F"}},"neutral-fixed":{bg:{swatch:"#FFFFFF"}},"neutral-inverted":{bg:{default:"#FFFFFF","default-hover":"#D9D9D9","default-pressed":"#BFBFBF",disabled:"#757575"},text:{default:"#1A1A1A",disabled:"#2C2C2C"},icon:{default:"#1A1A1A",disabled:"#2C2C2C"}},"neutral-inverted-fixed":{bg:{default:"#1E1E1E","default-hover":"#5C5C5C","default-pressed":"#808080",secondary:"#383838","secondary-hover":"#FFFFFF1F",disabled:"#1E1E1E"},text:{default:"#FFFFFF",secondary:"#BBBBBB",danger:"#FCA397",disabled:"#808080"},icon:{default:"#FFFFFF",secondary:"#BBBBBB",disabled:"#808080"},border:{default:"#383838"}},brand:{bg:{default:"#0C8CE9","default-hover":"#0A6CC2","default-pressed":"#105CAD",disabled:"#757575"},text:{default:"#FFFFFF",secondary:"#A8D6F7",disabled:"#2C2C2C"},icon:{default:"#FFFFFF",secondary:"#A8D6F7",disabled:"#2C2C2C"},border:{default:"#7CC4F8"}},danger:{bg:{default:"#E03E1A","default-hover":"#C4381C","default-pressed":"#963323",secondary:"#7C2622",disabled:"#757575"},text:{default:"#FFFFFF",disabled:"#2C2C2C"},icon:{default:"#FFFFFF",disabled:"#2C2C2C"},border:{default:"#A55440"}},warning:{bg:{default:"#F3C11B",disabled:"#757575"},text:{default:"#000000",disabled:"#2C2C2C"},icon:{default:"#000000",disabled:"#2C2C2C"},border:{}},success:{bg:{default:"#198F51","default-hover":"#078348","default-pressed":"#0A5C35",disabled:"#757575"},text:{default:"#FFFFFF",disabled:"#2C2C2C"},icon:{default:"#FFFFFF",disabled:"#2C2C2C"},border:{default:"#078348"}},system:{bg:{scrollbar:"#686868",resizer:"#A3A3A3"},border:{focused:"#0C8CE9"}},shadow:{"popover-hard":"#0000008A","popover-soft":"#00000052","popover-glare":"#ffffff0A","tooltip-hard":"#0000008A","tooltip-soft":"#00000052","tooltip-glare":"#ffffff0A","menu-hard":"#0000008A","menu-soft":"#00000052","menu-glare":"#ffffff0A"}}},z={class:"figjam",prefix:"--pui-color",variables:{neutral:{bg:{default:"#FFFFFF","default-hover":"#0000000D","default-pressed":"#0000001C","default-selected":"#7C2BDA1F","default-selected-hover":"#7C2BDA40","default-selected-pressed":"#7C2BDA1F",secondary:"#F5F5F5","secondary-hover":"#0000001C","secondary-pressed":"#0000000A","secondary-selected":"#7C2BDA0F",tertiary:"#E6E6E6","brand-hover":"#7C2BDA1F","brand-pressed":"#7C2BDA40","danger-hover":"#F2482214","danger-pressed":"#F2482229",disabled:"#F5F5F5"},text:{default:"#000000E6","default-selected":"#8638e5",secondary:"#00000085",brand:"#8638e5",danger:"#DC3412",warning:"#B86200",success:"#009951",component:"#8638e5",disabled:"#0000004D",placeholder:"#00000080"},icon:{default:"#000000E6","default-selected":"#8638e5",secondary:"#00000085",tertiary:"#00000033",brand:"#8638e5",danger:"#DC3412",warning:"#B86200",success:"#009951",component:"#8638e5",disabled:"#0000004D"},border:{default:"#0000001C","default-hover":"#00000014","default-selected":"#7C2BDA","default-selected-contrast":"#7C2BDA6B",secondary:"#00000033",brand:"#7C2BDA40","brand-hover":"#7C2BDA85","brand-selected":"#7C2BDA",danger:"#F248224D","danger-error":"#F24822",warning:"#F2A42780",success:"#12E3745C",disabled:"#0000001C","drop-position":"#1A1A1A","drop-position-restricted":"#F24822",swatch:"#0000001F"}},"neutral-fixed":{bg:{swatch:"#FFFFFF"}},"neutral-inverted":{bg:{default:"#2C2C2C","default-hover":"#5C5C5C","default-pressed":"#808080",disabled:"#D9D9D9"},text:{default:"#FFFFFF",disabled:"#FFFFFF"},icon:{default:"#FFFFFF",disabled:"#FFFFFF"}},"neutral-inverted-fixed":{bg:{default:"#1E1E1E","default-hover":"#5C5C5C","default-pressed":"#808080",secondary:"#383838","secondary-hover":"#FFFFFF1F",disabled:"#1E1E1E"},text:{default:"#FFFFFF",secondary:"#BBBBBB",danger:"#FCA397",disabled:"#808080"},icon:{default:"#FFFFFF",secondary:"#BBBBBB",disabled:"#808080"},border:{default:"#383838"}},brand:{bg:{default:"#9747ff","default-hover":"#8638e5","default-pressed":"#7C2BDA",disabled:"#D9D9D9"},text:{default:"#FFFFFF",secondary:"#DABDFF",disabled:"#FFFFFF"},icon:{default:"#FFFFFF",secondary:"#DABDFF",disabled:"#FFFFFF"},border:{default:"#7C2BDA"}},danger:{bg:{default:"#F24822","default-hover":"#DC3412","default-pressed":"#BD2915",secondary:"#FFE2E0",disabled:"#D9D9D9"},text:{default:"#FFFFFF",disabled:"#FFFFFF"},icon:{default:"#FFFFFF",disabled:"#FFFFFF"},border:{default:"#DC3412"}},warning:{bg:{default:"#FFCD29",disabled:"#D9D9D9"},text:{default:"#000000",disabled:"#FFFFFF"},icon:{default:"#000000",disabled:"#FFFFFF"},border:{}},success:{bg:{default:"#14AE5C","default-hover":"#009951","default-pressed":"#008043",disabled:"#D9D9D9"},text:{default:"#FFFFFF",disabled:"#FFFFFF"},icon:{default:"#FFFFFF",disabled:"#FFFFFF"},border:{default:"#009951"}},system:{bg:{scrollbar:"#D4D4D4",resizer:"#A8A8A8"},border:{focused:"#7C2BDA"}},shadow:{"popover-hard":"#0000002E","popover-soft":"#0000001F","popover-glare":"#FFFFFF","tooltip-hard":"#0000001C","tooltip-soft":"#0000001F","tooltip-glare":"#ffffff0A","menu-hard":"#0000002E","menu-soft":"#0000001F","menu-glare":"#ffffff0A"}}},de={title:"Variables/Colors",parameters:{docs:{source:{language:"tsx",code:`
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
}`}}}};function w(r,n=[]){const t={};for(const[i,d]of Object.entries(r)){const f=[...n,i];typeof d=="string"?t[f.join("-")]=d:typeof d=="object"&&d!==null&&Object.assign(t,w(d,f))}return t}function G(r,n){const t={},i=new Set(Object.entries(r.intents).filter(([,F])=>F).map(([F])=>F)),d=new Set(Object.entries(r.elements).filter(([,F])=>F).map(([F])=>F));for(const[F,b]of Object.entries(n)){const m=w(b.variables);for(const[a,s]of Object.entries(m)){const o=a.split("-"),l=o.findIndex(_=>_ in r.elements),p=l>0?o.slice(0,l).join("-"):o[0],c=l>0?o[l]:void 0;i.has(p)&&(c&&c in r.elements&&!d.has(c)||(t[a]||(t[a]={}),t[a][F]=s))}}const f=Object.keys(n);for(const F of Object.keys(t))for(const b of f)b in t[F]||(t[F][b]=void 0);return t}const $={figmaLight:L,figmaDark:I,figjamLight:z},M=r=>{const n=G(r,$),t=Object.keys(n),i=Object.keys(r.intents).filter(a=>r.intents[a]),d=Object.keys(r.elements).filter(a=>r.elements[a]),f=x.filter(a=>r.themes[a.key]).map(a=>a.key),F=a=>{const s=a.split("-"),o=s.findIndex(c=>c in r.elements),l=o>0?s.slice(0,o).join("-"):s[0],p=o>0?s[o]:void 0;return{intent:l,element:p}},b=a=>e("tr",{className:"sb-variables-table__row-border",children:[e("td",{className:"sb-variables-table__cell",children:e("div",{className:"sb-variables-table__flex",children:[e(v,{onClick:()=>D(`--pui-color-${a}`),children:e(y,{glyph:A})}),e("div",{className:"sb-variables-table__name",children:e(u,{strong:!0,wrap:!1,children:["--pui-color-",a]})})]})}),f.map(s=>e("td",{className:"sb-variables-table__cell",children:n[a][s]?e("div",{className:"sb-variables-table__flex--gap",children:[e(v,{onClick:()=>D(n[a][s]),children:e(y,{glyph:A})}),e(N,{disabled:!0,fill:O(n[a][s])}),e("div",{className:"sb-variables-table__name",children:e(u,{strong:!0,wrap:!1,children:n[a][s]})})]}):null},s))]},`token-${a}`),m=[];for(const a of i){const s=t.filter(l=>F(l).intent===a);if(s.length===0)continue;m.push(e("tr",{className:"sb-variables-table__row-intent",children:e("td",{colSpan:1+f.length,className:"sb-variables-table__cell--compact",children:e(u,{strong:!0,children:a})})},`intent-divider-${a}`));const o=new Set(s);for(const l of d){const p=s.filter(c=>F(c).element===l);p.length!==0&&(m.push(e("tr",{className:"sb-variables-table__row-border",children:e("td",{colSpan:1+f.length,className:"sb-variables-table__cell--compact",children:e(u,{children:l})})},`element-divider-${a}-${l}`)),p.forEach(c=>{m.push(b(c)),o.delete(c)}))}Array.from(o).sort().forEach(l=>m.push(b(l)))}return m},h={tags:["!dev"],parameters:{docs:{description:{story:"Color themes are controlled by the `.figma-light` or `.figma-dark` classes provided by Figma in the plugin window.<br/> For FigJam, use the `.figjam` class on the plugin root (see `dist/themes.css`)."}}},render:()=>{const[r,n]=T({intents:{neutral:!0,"neutral-inverted":!0,"neutral-inverted-fixed":!0,brand:!0,danger:!0,warning:!0,success:!0,system:!0,shadow:!0},elements:{bg:!0,text:!0,icon:!0,border:!0},themes:{figmaLight:!0,figmaDark:!0,figjamLight:!0}});return e(S,{children:[e(g,{spacing:1e3,direction:"row",children:[e(g,{spacing:200,direction:"column",children:[e(u,{strong:!0,children:"Intents"}),Object.entries(r.intents).map(([t,i])=>e(C,{checked:i,label:t,onCheckedChange:d=>n({...r,intents:{...r.intents,[t]:d.checked}})},t))]}),e(g,{spacing:200,direction:"column",children:[e(u,{strong:!0,children:"Elements"}),Object.entries(r.elements).map(([t,i])=>e(C,{checked:i,label:t,onCheckedChange:d=>n({...r,elements:{...r.elements,[t]:d.checked}})},t))]}),e(g,{spacing:200,direction:"column",children:[e(u,{strong:!0,children:"Themes"}),Object.entries(r.themes).map(([t,i])=>e(C,{checked:i,label:t,onCheckedChange:d=>n({...r,themes:{...r.themes,[t]:d.checked}})},t))]})]}),e(j,{size:400}),e("div",{className:"sb-column sb-gap-16 sb-variables-table-wrap",children:e("table",{className:"sb-variables-table",children:[e("tr",{className:"sb-variables-table__row-border",children:[e("td",{className:"sb-variables-table__cell",children:e(u,{strong:!0,children:"Token name"})}),x.filter(t=>r.themes[t.key]).map(t=>e("td",{className:"sb-variables-table__cell",children:e(u,{strong:!0,children:t.label})},t.key))]}),M(r)]})})]})}};var B,k,E;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(E=(k=h.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const Fe=["Colors"];export{h as Colors,Fe as __namedExportsOrder,de as default};
