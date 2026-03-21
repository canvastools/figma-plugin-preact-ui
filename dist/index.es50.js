import "./index.es50.css";
import { jsx as u } from "./index.es129.js";
import { useState as S, useRef as F, useEffect as f } from "preact/hooks";
import { OverlayPositioner as P } from "./index.es28.js";
import { TooltipContainer as R } from "./index.es51.js";
import { useTooltipContext as _ } from "./index.es52.js";
/* empty css            */
import { typedForwardRef as g } from "./index.es131.js";
import { bem as k } from "./index.es62.js";
const q = ({
  id: d,
  className: p,
  triggerRef: m,
  anchorRef: c,
  width: h,
  height: E,
  showArrow: L = !0,
  placement: T = "bottom",
  placementFallback: x = ["top", "left", "right"],
  offsetX: b = 0,
  offsetY: j = 8,
  offsetEdge: w = 8,
  onOpen: t,
  onClose: r,
  children: y,
  ...A
}, H) => {
  const o = _(), [s, a] = S(!1), i = F(!1);
  f(() => {
    s && !i.current ? (i.current = !0, t == null || t()) : !s && i.current && (i.current = !1, r == null || r());
  }, [s, t, r]), f(() => {
    const e = m ?? c;
    if (!(e != null && e.current) || !o) return;
    const n = e.current, l = () => {
      o.registerHoverStart(e, a);
    }, v = () => {
      o.registerHoverEnd(e, a);
    };
    return n.addEventListener("mouseenter", l), n.addEventListener("mouseleave", v), () => {
      n.removeEventListener("mouseenter", l), n.removeEventListener("mouseleave", v);
    };
  }, [m, c, o]);
  const N = k("Tooltip", void 0, void 0);
  return /* @__PURE__ */ u(
    P,
    {
      anchorRef: c ?? m,
      open: s,
      placement: T,
      placementFallback: x,
      offsetX: b,
      offsetY: j,
      offsetEdge: w,
      trigger: "hover",
      onClose: () => a(!1),
      children: /* @__PURE__ */ u("div", { id: d, className: [N, p].join(" ").trim(), "data-pui-interactive": "true", ...A, ref: H, children: /* @__PURE__ */ u(R, { width: h, height: E, showArrow: L, children: y }) })
    }
  );
}, U = g(q);
export {
  U as Tooltip
};
