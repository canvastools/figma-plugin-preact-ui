import "./index.es30.css";
import { jsx as t } from "./index.es203.js";
import { useState as E, useRef as I, useEffect as S } from "preact/hooks";
import { OverlayPositioner as _ } from "./index.es29.js";
import { PopoverContainer as q } from "./index.es31.js";
import { PopoverHeader as z } from "./index.es33.js";
import { PopoverContext as A, usePopoverContext as D } from "./index.es32.js";
/* empty css            */
import { typedForwardRef as G } from "./index.es205.js";
import { bem as J } from "./index.es65.js";
const K = ({
  popoverHeaderProps: o,
  draggable: m,
  width: a,
  height: u,
  constrainHeight: l = !1,
  placement: s,
  placementFallback: d,
  offsetX: h,
  offsetY: p,
  offsetEdge: v,
  showArrow: C,
  tabIndex: P,
  autoReposition: b = !1,
  children: O
}) => {
  const { triggerRef: r, anchorRef: y, open: n, setOpen: i } = D(), c = I(null), f = () => {
    var e;
    i == null || i(!1), (e = r == null ? void 0 : r.current) == null || e.focus();
  };
  return S(() => {
    var e;
    n && ((e = c.current) == null || e.focus());
  }, [n]), /* @__PURE__ */ t(
    _,
    {
      anchorRef: y,
      open: n,
      draggable: m,
      placement: s,
      placementFallback: d ?? [],
      offsetX: h,
      offsetY: p,
      offsetEdge: v,
      autoReposition: b,
      constrainHeight: l,
      onClose: f,
      closeOnClickOutside: !0,
      children: /* @__PURE__ */ t(
        q,
        {
          ref: c,
          width: a,
          height: u,
          showArrow: C,
          constrainHeight: l,
          tabIndex: P,
          children: [
            /* @__PURE__ */ t(z, { onClose: f, children: o == null ? void 0 : o.children }),
            O
          ]
        }
      )
    }
  );
}, L = ({
  id: o,
  className: m,
  triggerRef: a,
  anchorRef: u,
  defaultOpen: l = !1,
  open: s,
  popoverHeaderProps: d,
  draggable: h = !0,
  width: p,
  height: v,
  constrainHeight: C = !1,
  placement: P = "bottom-left",
  placementFallback: b = ["bottom-right", "top-left", "top-right"],
  offsetX: O = 0,
  offsetY: r = 8,
  offsetEdge: y = 16,
  showArrow: n = !1,
  tabIndex: i,
  autoReposition: c = !1,
  children: f,
  onOpen: e,
  onClose: R,
  ...F
}, N) => {
  const g = J("Popover", void 0, void 0), x = s !== void 0, [w, B] = E(l), j = x ? s : w;
  return /* @__PURE__ */ t(A, { triggerRef: a, anchorRef: u, open: j, setOpen: (k) => {
    k !== j && (x || B(k), k ? e == null || e() : R == null || R());
  }, children: j && /* @__PURE__ */ t("div", { id: o, className: [g, m].join(" ").trim(), ref: N, ...F, children: /* @__PURE__ */ t(
    K,
    {
      popoverHeaderProps: d,
      draggable: h,
      width: p,
      height: v,
      constrainHeight: C,
      placement: P,
      placementFallback: b,
      offsetX: O,
      offsetY: r,
      offsetEdge: y,
      showArrow: n,
      tabIndex: i,
      autoReposition: c,
      children: f
    }
  ) }) });
}, H = G(L);
export {
  H as Popover
};
