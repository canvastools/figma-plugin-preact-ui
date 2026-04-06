import "./index.es29.css";
import { jsx as r } from "./index.es143.js";
import { useState as B, useEffect as C, useRef as k } from "preact/hooks";
import { OverlayPositioner as E } from "./index.es28.js";
import { PopoverContainer as I } from "./index.es30.js";
import { PopoverContext as S, usePopoverContext as _ } from "./index.es31.js";
import { PopoverHeader as g } from "./index.es32.js";
/* empty css            */
import { typedForwardRef as q } from "./index.es145.js";
import { bem as z } from "./index.es62.js";
const A = ({
  popoverHeaderProps: e,
  draggable: h,
  width: d,
  height: v,
  placement: o,
  placementFallback: c,
  offsetX: p,
  offsetY: P,
  offsetEdge: b,
  showArrow: x,
  children: R
}) => {
  const { triggerRef: i, anchorRef: y, open: n, setOpen: s } = _(), m = k(null), l = () => {
    var t;
    s == null || s(!1), (t = i == null ? void 0 : i.current) == null || t.focus();
  };
  return C(() => {
    var t;
    n && ((t = m.current) == null || t.focus());
  }, [n]), /* @__PURE__ */ r(
    E,
    {
      anchorRef: y,
      open: n,
      draggable: h,
      placement: o,
      placementFallback: c ?? [],
      offsetX: p,
      offsetY: P,
      offsetEdge: b,
      onClose: l,
      closeOnClickOutside: !0,
      children: /* @__PURE__ */ r(I, { ref: m, width: d, height: v, showArrow: x, children: [
        /* @__PURE__ */ r(g, { onClose: l, children: e == null ? void 0 : e.children }),
        R
      ] })
    }
  );
}, D = ({
  id: e,
  className: h,
  triggerRef: d,
  anchorRef: v,
  defaultOpen: o = !1,
  open: c,
  popoverHeaderProps: p,
  draggable: P = !0,
  width: b,
  height: x,
  placement: R = "bottom-left",
  placementFallback: i = ["bottom-right", "top-left", "top-right"],
  offsetX: y = 0,
  offsetY: n = 8,
  offsetEdge: s = 16,
  showArrow: m = !1,
  children: l,
  onOpen: t,
  onClose: u,
  ...w
}, F) => {
  const N = z("Popover", void 0, void 0), [f, j] = B(c ?? o);
  C(() => {
    j(c ?? o);
  }, [c, o]);
  const a = k(!1);
  return C(() => {
    f && !a.current ? (a.current = !0, t == null || t()) : !f && a.current && (a.current = !1, u == null || u());
  }, [f, t, u]), /* @__PURE__ */ r(S, { triggerRef: d, anchorRef: v, open: f, setOpen: j, children: f && /* @__PURE__ */ r("div", { id: e, className: [N, h].join(" ").trim(), ref: F, ...w, children: /* @__PURE__ */ r(
    A,
    {
      popoverHeaderProps: p,
      draggable: P,
      width: b,
      height: x,
      placement: R,
      placementFallback: i,
      offsetX: y,
      offsetY: n,
      offsetEdge: s,
      showArrow: m,
      children: l
    }
  ) }) });
}, W = q(D);
export {
  W as Popover
};
