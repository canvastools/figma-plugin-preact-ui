import { getUserLocale as o } from "./index.es194.js";
const c = /* @__PURE__ */ new Map();
function l(e) {
  return function(a, r) {
    const t = a || o();
    c.has(t) || c.set(t, /* @__PURE__ */ new Map());
    const n = c.get(t);
    return n.has(e) || n.set(e, new Intl.DateTimeFormat(t || void 0, e).format), n.get(e)(r);
  };
}
const m = /* @__PURE__ */ new Map();
function h(e) {
  return (f, a) => {
    const r = f || o();
    m.has(r) || m.set(r, /* @__PURE__ */ new Map());
    const t = m.get(r);
    return t.has(e) || t.set(e, new Intl.NumberFormat(r || void 0, e).format), t.get(e)(a);
  };
}
export {
  l as getFormatter,
  h as getNumberFormatter
};
