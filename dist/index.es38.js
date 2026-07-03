import "./index.es38.css";
import { jsx as e } from "./index.es203.js";
import { useState as y, useEffect as g } from "preact/hooks";
import { Icon as x } from "./index.es16.js";
import { Section as N } from "./index.es37.js";
/* empty css            */
import { typedForwardRef as w } from "./index.es205.js";
import { bem as D } from "./index.es65.js";
import { chevronRight as k } from "./index.es88.js";
import { chevronDown as I } from "./index.es86.js";
const h = ({ id: m, className: p, collapsed: i, onCollapsedChange: l, sectionProps: f, children: n, tabIndex: d, ...u }, b) => {
  const s = i !== void 0, [S, a] = y(i ?? !0);
  g(() => {
    s && a(!!i);
  }, [i]);
  const r = s ? !!i : S, v = D("SectionCollapsible", void 0, {
    collapsed: r
  }), c = (o) => {
    const t = !r;
    s || a(t), l == null || l({ event: o, collapsed: t });
  }, C = (o) => {
    c(o);
  }, _ = (o) => {
    const { key: t } = o;
    (t === "Enter" || t === " " || t === "Spacebar") && (o.preventDefault(), o.stopPropagation(), c(o));
  };
  return /* @__PURE__ */ e("div", { id: m, className: [v, p].join(" ").trim(), ref: b, ...u, children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "SectionCollapsible__trigger",
        "data-pui-interactive": "true",
        role: "button",
        "aria-expanded": !r,
        tabIndex: d ?? 0,
        onClick: C,
        onKeyDown: _,
        children: [
          /* @__PURE__ */ e("div", { className: "SectionCollapsible__trigger-icon", children: /* @__PURE__ */ e(x, { glyph: r ? k : I, size: 16, intentModifier: "secondary" }) }),
          /* @__PURE__ */ e(N, { ...f })
        ]
      }
    ),
    !r && n != null && n !== !1 && n !== !0 && /* @__PURE__ */ e("div", { className: "SectionCollapsible__content", children: n })
  ] });
}, q = w(h);
export {
  q as SectionCollapsible
};
