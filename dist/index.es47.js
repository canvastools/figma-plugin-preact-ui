import "./index.es47.css";
import { jsx as f } from "./index.es129.js";
/* empty css            */
import { typedForwardRef as T } from "./index.es131.js";
import { bem as A } from "./index.es62.js";
const b = (e) => {
  const s = [], r = /\[([^\]]+)\]\(([^)]+)\)/g;
  let t = 0, n = r.exec(e), l = 0;
  for (; n; ) {
    const [a, i, o] = n;
    n.index > t && s.push(e.slice(t, n.index)), s.push(
      /* @__PURE__ */ f("a", { className: "Text__link", href: o, children: i }, `Text-link-${l}`)
    ), l += 1, t = n.index + a.length, n = r.exec(e);
  }
  return t < e.length && s.push(e.slice(t)), s.length > 0 ? s : e;
}, w = (e) => {
  const s = (r) => typeof r == "string" ? b(r) : r;
  if (Array.isArray(e)) {
    const r = [];
    return e.forEach((t) => {
      const n = s(t);
      Array.isArray(n) ? r.push(...n) : r.push(n);
    }), r;
  }
  return s(e);
}, N = ({
  id: e,
  className: s,
  intent: r = "neutral",
  intentModifier: t = "default",
  variant: n = "body",
  size: l = "medium",
  strong: a = !1,
  align: i = "left",
  disabled: o = !1,
  selected: d = !1,
  wrap: u = !0,
  textColor: c,
  truncate: m = !1,
  inline: p = !1,
  fullWidth: h = !1,
  children: y,
  ...k
}, x) => {
  const g = A("Text", void 0, {
    ...!c && {
      intent: `${r}-${t}`,
      disabled: o,
      selected: d
    },
    variant: n,
    size: l,
    strong: a,
    align: i,
    inline: p,
    fullWidth: h,
    wrap: u,
    truncated: m
  });
  return /* @__PURE__ */ f(
    "div",
    {
      id: e,
      className: [g, s].join(" ").trim(),
      ref: x,
      ...k,
      style: {
        ...c ? { color: c } : {}
      },
      children: w(y)
    }
  );
}, I = T(N);
export {
  I as Text
};
