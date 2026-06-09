import "./index.es50.css";
import { jsx as p } from "./index.es178.js";
import { useState as B, useRef as w, useMemo as G, useCallback as d, useEffect as x } from "preact/hooks";
import { OverlayPositioner as J } from "./index.es28.js";
import { TooltipContainer as K } from "./index.es51.js";
import { useTooltipContext as Q } from "./index.es52.js";
import { TOOLTIP_DEFAULT_SHOW_DELAY as V, TOOLTIP_DEFAULT_HIDE_DELAY as X } from "./index.es53.js";
/* empty css            */
import { typedForwardRef as Z } from "./index.es180.js";
import { bem as $ } from "./index.es63.js";
const ee = (o) => (o == null ? void 0 : o.showDelay) ?? V, re = (o) => (o == null ? void 0 : o.hideDelay) ?? X, te = ({
  id: o,
  className: O,
  anchorRef: s,
  width: S,
  height: b,
  showArrow: C = !0,
  placement: F = "bottom",
  placementFallback: I = ["top", "left", "right"],
  offsetX: g = 0,
  offsetY: j = 8,
  offsetEdge: N = 8,
  trigger: f = "hover",
  showDelay: D,
  hideDelay: k,
  onOpen: v,
  onClose: T,
  children: U,
  ...Y
}, M) => {
  const n = Q(), [l, i] = B(!1), E = w(!1), H = w(!1), u = w(null), m = w(null);
  H.current = l;
  const r = G(
    () => ({
      showDelay: D,
      hideDelay: k
    }),
    [D, k]
  ), c = d(() => {
    u.current != null && (clearTimeout(u.current), u.current = null);
  }, []), a = d(() => {
    m.current != null && (clearTimeout(m.current), m.current = null);
  }, []), _ = d(
    (t) => {
      const e = ee(r);
      if (c(), e === 0) {
        t(!0);
        return;
      }
      u.current = window.setTimeout(() => {
        u.current = null, t(!0);
      }, e);
    },
    [c, r]
  ), L = d(
    (t) => {
      const e = re(r);
      if (a(), e === 0) {
        t(!1);
        return;
      }
      m.current = window.setTimeout(() => {
        m.current = null, t(!1);
      }, e);
    },
    [a, r]
  ), W = d(() => {
    if (n) {
      n.registerHoverEnd(s, i, r);
      return;
    }
    c(), L(i);
  }, [s, c, n, L, r]);
  x(() => {
    l && !E.current ? (E.current = !0, v == null || v()) : !l && E.current && (E.current = !1, T == null || T());
  }, [l, v, T]), x(() => {
    const t = s;
    if (!(t != null && t.current)) return;
    const e = t.current, h = t;
    if (f === "click") {
      const R = (z) => {
        if (z.preventDefault(), n) {
          n.registerClick(h, i, r);
          return;
        }
        if (a(), c(), H.current) {
          L(i);
          return;
        }
        _(i);
      };
      return e.addEventListener("click", R), () => {
        e.removeEventListener("click", R), c(), a();
      };
    }
    if (!n) return;
    const y = () => {
      n.registerHoverStart(h, i, r);
    }, A = () => {
      n.registerHoverEnd(h, i, r);
    }, P = () => {
      n.registerPointerDown(h, i, r);
    };
    return e.addEventListener("mouseenter", y), e.addEventListener("mouseleave", A), e.addEventListener("pointerdown", P), () => {
      e.removeEventListener("mouseenter", y), e.removeEventListener("mouseleave", A), e.removeEventListener("pointerdown", P);
    };
  }, [s, a, c, n, L, _, r, f]);
  const q = $("Tooltip", void 0, void 0);
  return /* @__PURE__ */ p(
    J,
    {
      anchorRef: s,
      open: l,
      placement: F,
      placementFallback: I,
      offsetX: g,
      offsetY: j,
      offsetEdge: N,
      closeOnClickOutside: f === "click",
      trigger: "hover",
      onClose: f === "click" ? W : () => i(!1),
      children: /* @__PURE__ */ p("div", { id: o, className: [q, O].join(" ").trim(), "data-pui-interactive": "true", ...Y, ref: M, children: /* @__PURE__ */ p(K, { width: S, height: b, showArrow: C, children: U }) })
    }
  );
}, fe = Z(te);
export {
  fe as Tooltip
};
