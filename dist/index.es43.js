import "./index.es43.css";
import { jsx as t } from "./index.es129.js";
import { toChildArray as R, cloneElement as j } from "preact";
import { useRef as x } from "preact/hooks";
import { Icon as I } from "./index.es16.js";
import { useTabContext as A } from "./index.es44.js";
import { Text as B } from "./index.es47.js";
/* empty css            */
import { typedForwardRef as M } from "./index.es131.js";
import { bem as w } from "./index.es62.js";
const z = ({ id: a, className: b, variant: _ = "default", prefix: r, suffix: s, children: i, onClick: l, ...p }, c) => {
  const { activeId: o, onTabChange: T, registerTab: v } = A(), y = x(null), N = (e) => {
    if (y.current = e, v(a, e), typeof c == "function")
      c(e);
    else if (c) {
      const n = c;
      n.current = e;
    }
  }, h = w("Tab", void 0, {
    variant: _,
    selected: a === o,
    prefix: !!r,
    suffix: !!s
  }), g = (e) => {
    e.stopPropagation(), T(a), l == null || l({ event: e, id: a });
  }, f = (e, n) => R(e).map((m) => {
    if (typeof m == "object" && m !== null) {
      const d = m;
      if (d.type === I)
        return j(d, {
          intentModifier: n ? "default" : "secondary"
        });
    }
    return m;
  }), u = ({ fake: e = !1, selected: n = !1 }) => /* @__PURE__ */ t("div", { className: "Tab__content", children: [
    r && /* @__PURE__ */ t("div", { className: "Tab__prefix", children: r && f(r, n) }),
    i != null && i !== !1 && i !== !0 && /* @__PURE__ */ t("div", { className: "Tab__children", children: /* @__PURE__ */ t(
      B,
      {
        variant: "body",
        size: "medium",
        strong: e || a === o,
        intent: "neutral",
        intentModifier: n ? "default" : "secondary",
        children: i
      }
    ) }),
    s && /* @__PURE__ */ t("div", { className: "Tab__suffix", children: s && f(s, n) })
  ] });
  return /* @__PURE__ */ t(
    "button",
    {
      id: a,
      className: [h, b].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: N,
      tabIndex: a === o ? 0 : -1,
      ...p,
      onClick: g,
      children: [
        /* @__PURE__ */ t("div", { className: "Tab__container Tab__container_fake", children: /* @__PURE__ */ t(u, { fake: !0, selected: a === o }) }),
        /* @__PURE__ */ t("div", { className: "Tab__container Tab__container_real", children: /* @__PURE__ */ t(u, { selected: a === o }) })
      ]
    }
  );
}, H = M(z);
export {
  H as Tab
};
