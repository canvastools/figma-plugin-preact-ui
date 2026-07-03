import "./index.es45.css";
import { jsx as t } from "./index.es203.js";
import { Fragment as j, toChildArray as B, cloneElement as C } from "preact";
import { useRef as w } from "preact/hooks";
import { useTabContext as A } from "./index.es46.js";
import { Text as F } from "./index.es49.js";
import { Icon as M } from "./index.es16.js";
import { Tooltip as z } from "./index.es52.js";
/* empty css            */
import { typedForwardRef as E } from "./index.es205.js";
import { bem as P } from "./index.es65.js";
const V = ({ id: n, className: T, variant: y = "default", prefix: s, suffix: i, children: o, tooltip: l, tabIndex: v, onClick: f, ...N }, m) => {
  const u = typeof o == "string" || typeof o == "number", { activeId: r, onTabChange: h, registerTab: g } = A(), d = w(null), R = (e) => {
    if (d.current = e, g(n, e), typeof m == "function")
      m(e);
    else if (m) {
      const a = m;
      a.current = e;
    }
  }, x = P("Tab", void 0, {
    variant: y,
    selected: n === r,
    prefix: !!s,
    suffix: !!i,
    tooltip: !!l,
    customChildren: !u
  }), I = (e) => {
    e.stopPropagation(), h(n), f == null || f({ event: e, id: n });
  }, b = (e, a) => B(e).map((c) => {
    if (typeof c == "object" && c !== null) {
      const _ = c;
      if (_.type === M)
        return C(_, {
          intentModifier: a ? "default" : "secondary"
        });
    }
    return c;
  }), p = ({ fake: e = !1, selected: a = !1 }) => /* @__PURE__ */ t("div", { className: "Tab__content", children: [
    s && /* @__PURE__ */ t("div", { className: "Tab__prefix", children: s && b(s, a) }),
    o != null && o !== !1 && o !== !0 && /* @__PURE__ */ t("div", { className: "Tab__children", children: u ? /* @__PURE__ */ t(
      F,
      {
        variant: "body",
        size: "medium",
        strong: e || n === r,
        intent: "neutral",
        intentModifier: a ? "default" : "secondary",
        children: o
      }
    ) : o }),
    i && /* @__PURE__ */ t("div", { className: "Tab__suffix", children: i && b(i, a) })
  ] });
  return /* @__PURE__ */ t(j, { children: [
    /* @__PURE__ */ t(
      "button",
      {
        id: n,
        className: [x, T].join(" ").trim(),
        "data-pui-interactive": "true",
        ref: R,
        ...N,
        tabIndex: v ?? (n === r ? 0 : -1),
        onClick: I,
        children: [
          /* @__PURE__ */ t("div", { className: "Tab__container Tab__container_fake", children: p({ fake: !0, selected: n === r }) }),
          /* @__PURE__ */ t("div", { className: "Tab__container Tab__container_real", children: p({ selected: n === r }) })
        ]
      }
    ),
    l && /* @__PURE__ */ t(z, { anchorRef: d, children: l })
  ] });
}, S = E(V);
export {
  S as Tab
};
