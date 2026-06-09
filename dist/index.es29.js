import "./index.es29.css";
import { jsx as e } from "./index.es178.js";
import { useState as S, useEffect as w, useRef as N } from "preact/hooks";
import { OverlayPositioner as _ } from "./index.es28.js";
import { PopoverContainer as q } from "./index.es30.js";
import { PopoverContext as z, usePopoverContext as A } from "./index.es31.js";
import { PopoverHeader as D } from "./index.es32.js";
/* empty css            */
import { typedForwardRef as G } from "./index.es180.js";
import { bem as J } from "./index.es63.js";
const K = ({
  popoverHeaderProps: o,
  draggable: d,
  width: h,
  height: v,
  constrainHeight: r = !1,
  placement: c,
  placementFallback: p,
  offsetX: P,
  offsetY: b,
  offsetEdge: x,
  showArrow: R,
  tabIndex: y,
  autoReposition: C = !1,
  children: j
}) => {
  const { triggerRef: f, anchorRef: k, open: i, setOpen: n } = A(), l = N(null), m = () => {
    var t;
    n == null || n(!1), (t = f == null ? void 0 : f.current) == null || t.focus();
  };
  return w(() => {
    var t;
    i && ((t = l.current) == null || t.focus());
  }, [i]), /* @__PURE__ */ e(
    _,
    {
      anchorRef: k,
      open: i,
      draggable: d,
      placement: c,
      placementFallback: p ?? [],
      offsetX: P,
      offsetY: b,
      offsetEdge: x,
      autoReposition: C,
      constrainHeight: r,
      onClose: m,
      closeOnClickOutside: !0,
      children: /* @__PURE__ */ e(
        q,
        {
          ref: l,
          width: h,
          height: v,
          showArrow: R,
          constrainHeight: r,
          tabIndex: y,
          children: [
            /* @__PURE__ */ e(D, { onClose: m, children: o == null ? void 0 : o.children }),
            j
          ]
        }
      )
    }
  );
}, L = ({
  id: o,
  className: d,
  triggerRef: h,
  anchorRef: v,
  defaultOpen: r = !1,
  open: c,
  popoverHeaderProps: p,
  draggable: P = !0,
  width: b,
  height: x,
  constrainHeight: R = !1,
  placement: y = "bottom-left",
  placementFallback: C = ["bottom-right", "top-left", "top-right"],
  offsetX: j = 0,
  offsetY: f = 8,
  offsetEdge: k = 16,
  showArrow: i = !1,
  tabIndex: n,
  autoReposition: l = !1,
  children: m,
  onOpen: t,
  onClose: a,
  ...B
}, E) => {
  const I = J("Popover", void 0, void 0), [s, F] = S(c ?? r);
  w(() => {
    F(c ?? r);
  }, [c, r]);
  const u = N(!1);
  return w(() => {
    s && !u.current ? (u.current = !0, t == null || t()) : !s && u.current && (u.current = !1, a == null || a());
  }, [s, t, a]), /* @__PURE__ */ e(z, { triggerRef: h, anchorRef: v, open: s, setOpen: F, children: s && /* @__PURE__ */ e("div", { id: o, className: [I, d].join(" ").trim(), ref: E, ...B, children: /* @__PURE__ */ e(
    K,
    {
      popoverHeaderProps: p,
      draggable: P,
      width: b,
      height: x,
      constrainHeight: R,
      placement: y,
      placementFallback: C,
      offsetX: j,
      offsetY: f,
      offsetEdge: k,
      showArrow: i,
      tabIndex: n,
      autoReposition: l,
      children: m
    }
  ) }) });
}, $ = G(L);
export {
  $ as Popover
};
