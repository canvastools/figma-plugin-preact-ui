import "./index.es6.css";
import { jsx as n } from "./index.es203.js";
import { toChildArray as E, cloneElement as _, Fragment as d } from "preact";
import { useRef as z } from "preact/hooks";
import { Icon as g } from "./index.es16.js";
import { Tooltip as F } from "./index.es52.js";
/* empty css            */
import { typedForwardRef as K } from "./index.es205.js";
import { bem as P } from "./index.es65.js";
const T = ({
  id: h,
  className: B,
  intent: p = "neutral",
  intentModifier: s = "default",
  ghost: v = !1,
  size: I = "medium",
  grouped: i,
  translucent: N = !1,
  disabled: r = !1,
  selected: a = !1,
  tooltip: m,
  children: u,
  icon: t,
  tabIndex: c,
  onClick: f,
  ...R
}, e) => {
  const j = P("ButtonIcon", void 0, {
    intent: `${p}-${s}`,
    ghost: v,
    size: I,
    grouped: !!i,
    groupedPosition: i ?? void 0,
    translucent: N,
    disabled: r,
    selected: a,
    tooltip: !!m
  }), w = (o) => {
    if (r) {
      o.preventDefault();
      return;
    }
    o.stopPropagation(), f == null || f({ event: o });
  }, D = (o) => {
    (o.key === "Escape" || o.key === "Esc") && o.currentTarget.blur();
  }, l = z(null);
  return /* @__PURE__ */ n(d, { children: [
    /* @__PURE__ */ n(
      "button",
      {
        id: h,
        className: [j, B].join(" ").trim(),
        "data-pui-interactive": "true",
        ref: (o) => {
          typeof e == "function" ? e(o) : e && (e.current = o), l.current = o;
        },
        disabled: r,
        ...c !== void 0 ? { tabIndex: c } : {},
        onClick: w,
        onKeyDown: D,
        ...R,
        children: (u || t) && /* @__PURE__ */ n("div", { className: "ButtonIcon__children", children: [
          t && /* @__PURE__ */ n(
            g,
            {
              glyph: t.glyph,
              intent: p,
              intentModifier: s,
              variant: t.variant,
              size: t.size,
              selected: a,
              disabled: r
            }
          ),
          u && !t && E(u).map((o) => {
            if (typeof o == "object" && o !== null) {
              const y = o;
              if (y.type === g)
                return _(y, {
                  disabled: r,
                  selected: a
                });
            }
            return o;
          })
        ] })
      }
    ),
    m && /* @__PURE__ */ n(F, { anchorRef: l, children: m })
  ] });
}, G = K(T);
export {
  G as ButtonIcon
};
