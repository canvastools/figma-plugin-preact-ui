import "./index.es50.css";
import { jsx as d } from "./index.es143.js";
import { useState as N, useRef as S, useEffect as f } from "preact/hooks";
import { OverlayPositioner as g } from "./index.es28.js";
import { TooltipContainer as F } from "./index.es51.js";
import { useTooltipContext as R } from "./index.es52.js";
/* empty css            */
import { typedForwardRef as _ } from "./index.es145.js";
import { bem as k } from "./index.es62.js";
const q = ({
  id: p,
  className: E,
  triggerRef: c,
  anchorRef: a,
  width: h,
  height: L,
  showArrow: w = !0,
  placement: T = "bottom",
  placementFallback: x = ["top", "left", "right"],
  offsetX: P = 0,
  offsetY: b = 8,
  offsetEdge: j = 8,
  onOpen: o,
  onClose: n,
  children: y,
  ...A
}, D) => {
  const r = R(), [i, s] = N(!1), m = S(!1);
  f(() => {
    i && !m.current ? (m.current = !0, o == null || o()) : !i && m.current && (m.current = !1, n == null || n());
  }, [i, o, n]), f(() => {
    const e = c ?? a;
    if (!(e != null && e.current) || !r) return;
    const t = e.current, u = () => {
      r.registerHoverStart(e, s);
    }, v = () => {
      r.registerHoverEnd(e, s);
    }, l = () => {
      r.registerPointerDown(e, s);
    };
    return t.addEventListener("mouseenter", u), t.addEventListener("mouseleave", v), t.addEventListener("pointerdown", l), () => {
      t.removeEventListener("mouseenter", u), t.removeEventListener("mouseleave", v), t.removeEventListener("pointerdown", l);
    };
  }, [c, a, r]);
  const H = k("Tooltip", void 0, void 0);
  return /* @__PURE__ */ d(
    g,
    {
      anchorRef: a ?? c,
      open: i,
      placement: T,
      placementFallback: x,
      offsetX: P,
      offsetY: b,
      offsetEdge: j,
      trigger: "hover",
      onClose: () => s(!1),
      children: /* @__PURE__ */ d("div", { id: p, className: [H, E].join(" ").trim(), "data-pui-interactive": "true", ...A, ref: D, children: /* @__PURE__ */ d(F, { width: h, height: L, showArrow: w, children: y }) })
    }
  );
}, V = _(q);
export {
  V as Tooltip
};
