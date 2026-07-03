import "./index.es5.css";
import { jsx as o } from "./index.es203.js";
import { Fragment as T } from "preact";
import { useRef as x } from "preact/hooks";
import { Text as D } from "./index.es49.js";
import { Tooltip as j } from "./index.es52.js";
/* empty css            */
import { typedForwardRef as E } from "./index.es205.js";
import { bem as F } from "./index.es65.js";
const K = ({
  id: B,
  className: y,
  intent: i = "neutral",
  intentModifier: c = "default",
  ghost: _ = !1,
  size: h = "medium",
  grouped: f,
  disabled: r = !1,
  fullWidth: v = !1,
  prefix: a,
  suffix: m,
  children: e,
  tooltip: u,
  tabIndex: l,
  onClick: s,
  ...N
}, n) => {
  const p = typeof e == "string" || typeof e == "number", g = F("Button", void 0, {
    intent: `${i}-${c}`,
    ghost: _,
    size: h,
    grouped: !!f,
    groupedPosition: f ?? void 0,
    disabled: r,
    fullWidth: v,
    prefix: !!a,
    suffix: !!m,
    tooltip: !!u,
    customChildren: !p
  }), w = (t) => {
    if (r) {
      t.preventDefault();
      return;
    }
    t.stopPropagation(), s == null || s({ event: t });
  }, R = (t) => {
    (t.key === "Escape" || t.key === "Esc") && t.currentTarget.blur();
  }, d = x(null);
  return /* @__PURE__ */ o(T, { children: [
    /* @__PURE__ */ o(
      "button",
      {
        id: B,
        className: [g, y].join(" ").trim(),
        "data-pui-interactive": "true",
        ref: (t) => {
          typeof n == "function" ? n(t) : n && (n.current = t), d.current = t;
        },
        disabled: r,
        ...l !== void 0 ? { tabIndex: l } : {},
        onClick: w,
        onKeyDown: R,
        ...N,
        children: /* @__PURE__ */ o("div", { className: "Button__content", children: [
          a && /* @__PURE__ */ o("div", { className: "Button__prefix", children: a }),
          e != null && e !== !1 && e !== !0 && /* @__PURE__ */ o("div", { className: "Button__children", children: p ? /* @__PURE__ */ o(D, { variant: "body", size: "medium", intent: i, intentModifier: c, disabled: r, truncate: !0, children: e }) : e }),
          m && /* @__PURE__ */ o("div", { className: "Button__suffix", children: m })
        ] })
      }
    ),
    u && /* @__PURE__ */ o(j, { anchorRef: d, children: u })
  ] });
}, G = E(K);
export {
  G as Button
};
