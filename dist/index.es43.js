import "./index.es43.css";
import { jsx as e } from "./index.es178.js";
import { Fragment as j, toChildArray as B, cloneElement as C } from "preact";
import { useRef as w } from "preact/hooks";
import { Icon as A } from "./index.es16.js";
import { useTabContext as F } from "./index.es44.js";
import { Text as M } from "./index.es47.js";
import { Tooltip as z } from "./index.es50.js";
/* empty css            */
import { typedForwardRef as E } from "./index.es180.js";
import { bem as P } from "./index.es63.js";
const V = ({ id: o, className: T, variant: y = "default", prefix: s, suffix: i, children: a, tooltip: l, tabIndex: v, onClick: f, ...N }, m) => {
  const u = typeof a == "string" || typeof a == "number", { activeId: r, onTabChange: h, registerTab: g } = F(), d = w(null), R = (t) => {
    if (d.current = t, g(o, t), typeof m == "function")
      m(t);
    else if (m) {
      const n = m;
      n.current = t;
    }
  }, x = P("Tab", void 0, {
    variant: y,
    selected: o === r,
    prefix: !!s,
    suffix: !!i,
    tooltip: !!l,
    customChildren: !u
  }), I = (t) => {
    t.stopPropagation(), h(o), f == null || f({ event: t, id: o });
  }, b = (t, n) => B(t).map((c) => {
    if (typeof c == "object" && c !== null) {
      const _ = c;
      if (_.type === A)
        return C(_, {
          intentModifier: n ? "default" : "secondary"
        });
    }
    return c;
  }), p = ({ fake: t = !1, selected: n = !1 }) => /* @__PURE__ */ e("div", { className: "Tab__content", children: [
    s && /* @__PURE__ */ e("div", { className: "Tab__prefix", children: s && b(s, n) }),
    a != null && a !== !1 && a !== !0 && /* @__PURE__ */ e("div", { className: "Tab__children", children: u ? /* @__PURE__ */ e(
      M,
      {
        variant: "body",
        size: "medium",
        strong: t || o === r,
        intent: "neutral",
        intentModifier: n ? "default" : "secondary",
        children: a
      }
    ) : a }),
    i && /* @__PURE__ */ e("div", { className: "Tab__suffix", children: i && b(i, n) })
  ] });
  return /* @__PURE__ */ e(j, { children: [
    /* @__PURE__ */ e(
      "button",
      {
        id: o,
        className: [x, T].join(" ").trim(),
        "data-pui-interactive": "true",
        ref: R,
        ...N,
        tabIndex: v ?? (o === r ? 0 : -1),
        onClick: I,
        children: [
          /* @__PURE__ */ e("div", { className: "Tab__container Tab__container_fake", children: /* @__PURE__ */ e(p, { fake: !0, selected: o === r }) }),
          /* @__PURE__ */ e("div", { className: "Tab__container Tab__container_real", children: /* @__PURE__ */ e(p, { selected: o === r }) })
        ]
      }
    ),
    l && /* @__PURE__ */ e(z, { anchorRef: d, children: l })
  ] });
}, S = E(V);
export {
  S as Tab
};
