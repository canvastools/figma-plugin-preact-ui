import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{S as t,j as n,p as r,w as i}from"./compat.module-BiyPQZFw.js";import{n as a,t as o}from"./jsxRuntime.module-XYsEgyrh.js";import{S as s}from"./utils-DKF8LkKs.js";import{t as c}from"./Text-Dx8we2OT.js";import{c as l,o as u,t as d,u as f}from"./themes-OugspNdM.js";import{$t as p,At as m,Gn as h,Tn as g,Un as _,g as v,m as y,t as b}from"./src-fsSRAyCS.js";import{i as x,r as S,t as C}from"./utils-DK_PT5XO.js";function w(e,t=[]){let n={};for(let[r,i]of Object.entries(e)){let e=[...t,r];typeof i==`string`?n[e.join(`-`)]=i:typeof i==`object`&&i&&Object.assign(n,w(i,e))}return n}function T(e,t){let n={},r=new Set(Object.entries(e.intents).filter(([,e])=>e).map(([e])=>e)),i=new Set(Object.entries(e.elements).filter(([,e])=>e).map(([e])=>e));for(let[a,o]of Object.entries(t)){let t=w(o.variables);for(let[o,s]of Object.entries(t)){let t=o.split(`-`),c=t.findIndex(t=>t in e.elements),l=c>0?t.slice(0,c).join(`-`):t[0],u=c>0?t[c]:void 0;r.has(l)&&(u&&u in e.elements&&!i.has(u)||(n[o]||(n[o]={}),n[o][a]=s))}}let a=Object.keys(t);for(let e of Object.keys(n))for(let t of a)t in n[e]||(n[e][t]=void 0);return n}var E,D,O,k,A;e((()=>{r(),i(),d(),b(),x(),o(),E={title:`Variables/Colors`,parameters:{docs:{source:{code:`
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
}`}}}},D={figmaLight:f,figmaDark:l,figjamLight:u},O=e=>{let t=T(e,D),n=Object.keys(t),r=Object.keys(e.intents).filter(t=>e.intents[t]),i=Object.keys(e.elements).filter(t=>e.elements[t]),o=C.filter(t=>e.themes[t.key]).map(e=>e.key),l=t=>{let n=t.split(`-`),r=n.findIndex(t=>t in e.elements);return{intent:r>0?n.slice(0,r).join(`-`):n[0],element:r>0?n[r]:void 0}},u=e=>a(`tr`,{className:`sb-variables-table__row-border`,children:[a(`td`,{className:`sb-variables-table__cell`,children:a(`div`,{className:`sb-variables-table__flex`,children:[a(_,{onClick:()=>S(`--pui-color-${e}`),children:a(h,{glyph:g})}),a(`div`,{className:`sb-variables-table__name`,children:a(c,{strong:!0,wrap:!1,children:[`--pui-color-`,e]})})]})}),o.map(n=>a(`td`,{className:`sb-variables-table__cell`,children:t[e][n]?a(`div`,{className:`sb-variables-table__flex--gap`,children:[a(_,{onClick:()=>S(t[e][n]),children:a(h,{glyph:g})}),a(m,{disabled:!0,fill:s(t[e][n])}),a(`div`,{className:`sb-variables-table__name`,children:a(c,{strong:!0,wrap:!1,children:t[e][n]})})]}):null},n))]},`token-${e}`),d=[];for(let e of r){let t=n.filter(t=>l(t).intent===e);if(t.length===0)continue;d.push(a(`tr`,{className:`sb-variables-table__row-intent`,children:a(`td`,{colSpan:1+o.length,className:`sb-variables-table__cell--compact`,children:a(c,{strong:!0,children:e})})},`intent-divider-${e}`));let r=new Set(t);for(let n of i){let i=t.filter(e=>l(e).element===n);i.length!==0&&(d.push(a(`tr`,{className:`sb-variables-table__row-border`,children:a(`td`,{colSpan:1+o.length,className:`sb-variables-table__cell--compact`,children:a(c,{children:n})})},`element-divider-${e}-${n}`)),i.forEach(e=>{d.push(u(e)),r.delete(e)}))}Array.from(r).sort().forEach(e=>d.push(u(e)))}return d},k={tags:[`!dev`],globals:{background:`primary`},parameters:{docs:{description:{story:"Color themes are controlled by the `.figma-light` or `.figma-dark` classes provided by Figma in the plugin window.<br/> For FigJam, use the `.figjam` class on the plugin root (see `dist/themes.css`)."}}},render:()=>{let[e,r]=t({intents:{neutral:!0,"neutral-inverted":!0,"neutral-fixed":!0,"neutral-inverted-fixed":!0,brand:!0,danger:!0,warning:!0,success:!0,system:!0,shadow:!0},elements:{bg:!0,text:!0,icon:!0,border:!0},themes:{figmaLight:!0,figmaDark:!0,figjamLight:!0}});return a(n,{children:[a(y,{spacing:1e3,direction:`row`,children:[a(y,{spacing:200,direction:`column`,children:[a(c,{strong:!0,children:`Intents`}),Object.entries(e.intents).map(([t,n])=>a(p,{checked:n,label:t,onCheckedChange:n=>r({...e,intents:{...e.intents,[t]:n.checked}})},t))]}),a(y,{spacing:200,direction:`column`,children:[a(c,{strong:!0,children:`Elements`}),Object.entries(e.elements).map(([t,n])=>a(p,{checked:n,label:t,onCheckedChange:n=>r({...e,elements:{...e.elements,[t]:n.checked}})},t))]}),a(y,{spacing:200,direction:`column`,children:[a(c,{strong:!0,children:`Themes`}),Object.entries(e.themes).map(([t,n])=>a(p,{checked:n,label:t,onCheckedChange:n=>r({...e,themes:{...e.themes,[t]:n.checked}})},t))]})]}),a(v,{size:400}),a(`div`,{className:`sb-column sb-gap-16 sb-variables-table-wrap`,children:a(`table`,{className:`sb-variables-table`,children:[a(`tr`,{className:`sb-variables-table__row-border`,children:[a(`td`,{className:`sb-variables-table__cell`,children:a(c,{strong:!0,children:`Token name`})}),C.filter(t=>e.themes[t.key]).map(e=>a(`td`,{className:`sb-variables-table__cell`,children:a(c,{strong:!0,children:e.label})},e.key))]}),O(e)]})})]})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  globals: {
    background: 'primary'
  },
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
        'neutral-fixed': true,
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
}`,...k.parameters?.docs?.source}}},A=[`Colors`]}))();export{k as Colors,A as __namedExportsOrder,E as default};