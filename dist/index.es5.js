import "./index.es5.css";
import { jsx as t } from "./index.es143.js";
import { Fragment as R } from "preact";
import { useRef as w } from "preact/hooks";
import { Text as x } from "./index.es47.js";
import { Tooltip as D } from "./index.es50.js";
/* empty css            */
import { typedForwardRef as T } from "./index.es145.js";
import { bem as j } from "./index.es62.js";
const E = ({
  id: p,
  className: d,
  intent: u = "neutral",
  intentModifier: c = "default",
  ghost: B = !1,
  size: _ = "medium",
  grouped: l,
  disabled: e = !1,
  fullWidth: h = !1,
  prefix: a,
  suffix: m,
  children: r,
  tooltip: i,
  onClick: s,
  ...y
}, n) => {
  const N = j("Button", void 0, {
    intent: `${u}-${c}`,
    ghost: B,
    size: _,
    grouped: !!l,
    groupedPosition: l ?? void 0,
    disabled: e,
    fullWidth: h,
    prefix: !!a,
    suffix: !!m,
    tooltip: !!i
  }), v = (o) => {
    if (e) {
      o.preventDefault();
      return;
    }
    o.stopPropagation(), s == null || s({ event: o });
  }, g = (o) => {
    (o.key === "Escape" || o.key === "Esc") && o.currentTarget.blur();
  }, f = w(null);
  return /* @__PURE__ */ t(R, { children: [
    /* @__PURE__ */ t(
      "button",
      {
        id: p,
        className: [N, d].join(" ").trim(),
        "data-pui-interactive": "true",
        ref: (o) => {
          typeof n == "function" ? n(o) : n && (n.current = o), f.current = o;
        },
        disabled: e,
        onClick: v,
        onKeyDown: g,
        ...y,
        children: /* @__PURE__ */ t("div", { className: "Button__content", children: [
          a && /* @__PURE__ */ t("div", { className: "Button__prefix", children: a }),
          r != null && r !== !1 && r !== !0 && /* @__PURE__ */ t("div", { className: "Button__children", children: /* @__PURE__ */ t(x, { variant: "body", size: "medium", intent: u, intentModifier: c, disabled: e, children: r }) }),
          m && /* @__PURE__ */ t("div", { className: "Button__suffix", children: m })
        ] })
      }
    ),
    i && /* @__PURE__ */ t(D, { anchorRef: f, children: i })
  ] });
}, A = T(E);
export {
  A as Button
};
