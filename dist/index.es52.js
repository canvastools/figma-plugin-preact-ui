import "./index.es52.css";
import { jsx as p } from "./index.es203.js";
import { useState as O, useRef as k, useMemo as W, useEffect as T } from "preact/hooks";
import { OverlayPositioner as _ } from "./index.es29.js";
import { TooltipContainer as z } from "./index.es53.js";
import { useTooltipContext as B } from "./index.es54.js";
/* empty css            */
import { typedForwardRef as G } from "./index.es205.js";
import { useRefElement as I } from "./index.es233.js";
import { bem as J } from "./index.es65.js";
const K = ({
  id: g,
  className: R,
  anchorRef: i,
  width: x,
  height: C,
  showArrow: b = !0,
  placement: H = "bottom",
  placementFallback: P = ["top", "left", "right"],
  offsetX: j = 0,
  offsetY: A = 8,
  offsetEdge: D = 8,
  trigger: n = "hover",
  showDelay: d,
  hideDelay: v,
  onOpen: s,
  onClose: c,
  children: N,
  ...S
}, q) => {
  const e = B(), [l, r] = O(!1), m = k(!1), f = k(!1), o = W(
    () => ({
      showDelay: d,
      hideDelay: v
    }),
    [d, v]
  ), y = () => {
    e == null || e.registerHoverEnd(i, r, o);
  };
  T(() => {
    l && !m.current ? (m.current = !0, s == null || s()) : !l && m.current && (m.current = !1, c == null || c());
  }, [l, s, c]);
  const u = I(i);
  T(() => {
    if (!u) return;
    if (!e) {
      f.current || (f.current = !0, console.warn(
        "[figma-plugin-preact-ui] Tooltip requires a <TooltipContext> provider. Wrap your app (or plugin root) in <TooltipContext> — tooltips will not be shown otherwise."
      ));
      return;
    }
    const t = u, a = i;
    if (n === "click") {
      const L = (M) => {
        M.preventDefault(), e.registerClick(a, r, o);
      };
      return t.addEventListener("click", L), () => {
        t.removeEventListener("click", L);
      };
    }
    const E = () => {
      e.registerHoverStart(a, r, o);
    }, h = () => {
      e.registerHoverEnd(a, r, o);
    }, w = () => {
      e.registerPointerDown(a, r, o);
    };
    return t.addEventListener("mouseenter", E), t.addEventListener("mouseleave", h), t.addEventListener("pointerdown", w), () => {
      t.removeEventListener("mouseenter", E), t.removeEventListener("mouseleave", h), t.removeEventListener("pointerdown", w);
    };
  }, [u, i, e, o, n]);
  const F = J("Tooltip", void 0, void 0);
  return /* @__PURE__ */ p(
    _,
    {
      anchorRef: i,
      open: l,
      placement: H,
      placementFallback: P,
      offsetX: j,
      offsetY: A,
      offsetEdge: D,
      closeOnClickOutside: n === "click",
      trigger: "hover",
      onClose: n === "click" ? y : () => r(!1),
      children: /* @__PURE__ */ p("div", { id: g, className: [F, R].join(" ").trim(), "data-pui-interactive": "true", ...S, ref: q, children: /* @__PURE__ */ p(z, { width: x, height: C, showArrow: b, children: N }) })
    }
  );
}, oe = G(K);
export {
  oe as Tooltip
};
