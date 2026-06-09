import "./index.es22.css";
import { jsx as s } from "./index.es178.js";
import { cloneElement as _ } from "preact";
import { useState as D, useEffect as K, useRef as F } from "preact/hooks";
import { MenuContainer as R } from "./index.es23.js";
import { MenuContext as S, useMenuContext as j } from "./index.es24.js";
import { MenuDivider as m } from "./index.es25.js";
import { MenuItemAction as L } from "./index.es26.js";
import { MenuItemOption as N } from "./index.es27.js";
import { OverlayPositioner as x } from "./index.es28.js";
/* empty css            */
import { typedForwardRef as A } from "./index.es180.js";
import { bem as B } from "./index.es63.js";
const P = ({
  items: k,
  width: v,
  height: M,
  placement: C,
  placementFallback: I,
  offsetX: w,
  offsetY: b,
  offsetEdge: a,
  onOpen: c,
  onClose: t
}) => {
  const { triggerRef: i, anchorRef: E, open: d, focusedItemId: p, setOpen: h } = j(), l = F(!1);
  K(() => {
    d && !l.current ? (l.current = !0, c == null || c()) : !d && l.current && (l.current = !1);
  }, [d, c]);
  const f = () => {
    h(!1), t == null || t();
  };
  K(() => {
    if (!d) return;
    const n = (r) => {
      var o;
      const { key: e } = r;
      (e === "Escape" || e === "Esc") && (r.preventDefault(), h(!1), t == null || t(), (o = i == null ? void 0 : i.current) == null || o.focus());
    };
    return window.addEventListener("keydown", n), () => {
      window.removeEventListener("keydown", n);
    };
  }, [d, h, t, i]);
  const O = (n, r) => {
    if (n.type === "action") {
      const { type: e, ...o } = n, u = (g) => {
        var y;
        (y = n.onClick) == null || y.call(n, g), n.closeOnClick && f();
      };
      return /* @__PURE__ */ s(
        L,
        {
          ...o,
          id: n.id,
          onClick: u,
          focused: n.id ? p === n.id : !1
        },
        n.id ?? r
      );
    }
    if (n.type === "option") {
      const { type: e, ...o } = n, u = (g) => {
        var y;
        (y = n.onSelectedChange) == null || y.call(n, g), n.closeOnClick && f();
      };
      return /* @__PURE__ */ s(
        N,
        {
          ...o,
          id: n.id,
          onSelectedChange: u,
          focused: n.id ? p === n.id : !1
        },
        n.id ?? r
      );
    }
    if (n.type === "custom") {
      const e = (o) => {
        var u;
        (u = n.onClick) == null || u.call(n, o), n.closeOnClick && f();
      };
      return n.children && typeof n.children != "string" ? _(n.children, {
        key: n.id ?? r,
        id: n.id,
        disabled: n.disabled,
        focused: n.id ? p === n.id : !1,
        onClick: e
      }) : null;
    }
    if (n.type === "divider") {
      const { type: e, ...o } = n;
      return /* @__PURE__ */ s(m, { ...o }, r);
    }
    return null;
  };
  return /* @__PURE__ */ s(
    x,
    {
      anchorRef: E,
      open: d,
      placement: C,
      placementFallback: I ?? [],
      offsetX: w,
      offsetY: b,
      offsetEdge: a,
      onClose: f,
      closeOnClickOutside: !0,
      children: /* @__PURE__ */ s(R, { width: v, height: M, children: k.map((n, r) => O(n, r)) })
    }
  );
}, q = ({
  id: k,
  className: v,
  items: M,
  triggerRef: C,
  anchorRef: I,
  width: w,
  height: b,
  open: a,
  defaultOpen: c = !1,
  placement: t = "bottom-left",
  placementFallback: i = ["bottom-right", "top-left", "top-right"],
  offsetX: E = 0,
  offsetY: d = 4,
  offsetEdge: p = 16,
  onOpen: h,
  onClose: l,
  ...f
}, O) => {
  const n = B("Menu", void 0, void 0), [r, e] = D(a ?? c);
  return K(() => {
    e(a ?? c);
  }, [a, c]), /* @__PURE__ */ s(S, { triggerRef: C, anchorRef: I, open: r, setOpen: e, children: r && /* @__PURE__ */ s("div", { id: k, className: [n, v].join(" ").trim(), ref: O, ...f, children: /* @__PURE__ */ s(
    P,
    {
      items: M,
      width: w,
      height: b,
      placement: t,
      placementFallback: i,
      offsetX: E,
      offsetY: d,
      offsetEdge: p,
      onOpen: h,
      onClose: l
    }
  ) }) });
}, $ = A(q);
export {
  $ as Menu
};
