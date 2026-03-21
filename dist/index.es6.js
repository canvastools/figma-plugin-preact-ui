import "./index.es6.css";
import { jsx as n } from "./index.es129.js";
import { toChildArray as D, cloneElement as E, Fragment as _ } from "preact";
import { useRef as d } from "preact/hooks";
import { Icon as y } from "./index.es16.js";
import { Tooltip as x } from "./index.es50.js";
/* empty css            */
import { typedForwardRef as z } from "./index.es131.js";
import { bem as F } from "./index.es62.js";
const K = ({
  id: g,
  className: h,
  intent: p = "neutral",
  intentModifier: s = "default",
  ghost: B = !1,
  size: I = "medium",
  grouped: i,
  translucent: N = !1,
  disabled: r = !1,
  selected: a = !1,
  tooltip: m,
  children: u,
  icon: t,
  onClick: f,
  ...R
}, e) => {
  const j = F("ButtonIcon", void 0, {
    intent: `${p}-${s}`,
    ghost: B,
    size: I,
    grouped: !!i,
    groupedPosition: i ?? void 0,
    translucent: N,
    disabled: r,
    selected: a,
    tooltip: !!m
  }), v = (o) => {
    if (r) {
      o.preventDefault();
      return;
    }
    o.stopPropagation(), f == null || f({ event: o });
  }, w = (o) => {
    (o.key === "Escape" || o.key === "Esc") && o.currentTarget.blur();
  }, c = d(null);
  return /* @__PURE__ */ n(_, { children: [
    /* @__PURE__ */ n(
      "button",
      {
        id: g,
        className: [j, h].join(" ").trim(),
        "data-pui-interactive": "true",
        ref: (o) => {
          typeof e == "function" ? e(o) : e && (e.current = o), c.current = o;
        },
        disabled: r,
        onClick: v,
        onKeyDown: w,
        ...R,
        children: (u || t) && /* @__PURE__ */ n("div", { className: "ButtonIcon__children", children: [
          t && /* @__PURE__ */ n(
            y,
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
          u && !t && D(u).map((o) => {
            if (typeof o == "object" && o !== null) {
              const l = o;
              if (l.type === y)
                return E(l, {
                  disabled: r,
                  selected: a
                });
            }
            return o;
          })
        ] })
      }
    ),
    m && /* @__PURE__ */ n(x, { anchorRef: c, children: m })
  ] });
}, C = z(K);
export {
  C as ButtonIcon
};
