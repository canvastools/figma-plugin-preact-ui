import "./index.es22.css";
import { jsx as e } from "./index.es203.js";
import { cloneElement as K } from "preact";
import { useState as S } from "preact/hooks";
import { MenuContext as j, useMenuContext as m } from "./index.es24.js";
import { MenuContainer as F } from "./index.es23.js";
import { MenuItemAction as N } from "./index.es26.js";
import { MenuItemOption as R } from "./index.es28.js";
import { MenuItemGroup as w } from "./index.es27.js";
import { MenuDivider as A } from "./index.es25.js";
import { OverlayPositioner as B } from "./index.es29.js";
/* empty css            */
import { typedForwardRef as D } from "./index.es205.js";
import { bem as E } from "./index.es65.js";
const G = ({ items: f, width: a, height: u, placement: h, placementFallback: C, offsetX: y, offsetY: k, offsetEdge: p }) => {
  const { anchorRef: M, open: g, focusedItemId: i, setOpen: I } = m(), l = () => {
    I(!1);
  }, O = (n, o) => {
    if (n.type === "group") {
      const { type: c, ...r } = n;
      return /* @__PURE__ */ e(w, { ...r }, o);
    }
    if (n.type === "action") {
      const { type: c, ...r } = n, t = (s) => {
        var d;
        (d = n.onClick) == null || d.call(n, s), n.closeOnClick && l();
      };
      return /* @__PURE__ */ e(
        N,
        {
          ...r,
          id: n.id,
          onClick: t,
          focused: n.id ? i === n.id : !1
        },
        n.id ?? o
      );
    }
    if (n.type === "option") {
      const { type: c, ...r } = n, t = (s) => {
        var d;
        (d = n.onSelectedChange) == null || d.call(n, s), n.closeOnClick && l();
      };
      return /* @__PURE__ */ e(
        R,
        {
          ...r,
          id: n.id,
          onSelectedChange: t,
          focused: n.id ? i === n.id : !1
        },
        n.id ?? o
      );
    }
    if (n.type === "custom") {
      const c = (r) => {
        var t;
        (t = n.onClick) == null || t.call(n, r), n.closeOnClick && l();
      };
      return n.children && typeof n.children != "string" ? K(n.children, {
        key: n.id ?? o,
        id: n.id,
        disabled: n.disabled,
        focused: n.id ? i === n.id : !1,
        onClick: c
      }) : null;
    }
    if (n.type === "divider") {
      const { type: c, ...r } = n;
      return /* @__PURE__ */ e(A, { ...r }, o);
    }
    return null;
  };
  return /* @__PURE__ */ e(
    B,
    {
      anchorRef: M,
      open: g,
      placement: h,
      placementFallback: C ?? [],
      offsetX: y,
      offsetY: k,
      offsetEdge: p,
      onClose: l,
      closeOnClickOutside: !0,
      children: /* @__PURE__ */ e(F, { width: a, height: u, children: f.map((n, o) => O(n, o)) })
    }
  );
}, P = ({
  id: f,
  className: a,
  items: u,
  triggerRef: h,
  anchorRef: C,
  width: y,
  height: k,
  open: p,
  defaultOpen: M = !1,
  placement: g = "bottom-left",
  placementFallback: i = ["bottom-right", "top-left", "top-right"],
  offsetX: I = 0,
  offsetY: l = 4,
  offsetEdge: O = 16,
  onOpen: n,
  onClose: o,
  ...c
}, r) => {
  const t = E("Menu", void 0, void 0), s = p !== void 0, [d, _] = S(M), v = s ? p : d;
  return /* @__PURE__ */ e(j, { triggerRef: h, anchorRef: C, open: v, setOpen: (b) => {
    b !== v && (s || _(b), b ? n == null || n() : o == null || o());
  }, children: v && /* @__PURE__ */ e("div", { id: f, className: [t, a].join(" ").trim(), ref: r, ...c, children: /* @__PURE__ */ e(
    G,
    {
      items: u,
      width: y,
      height: k,
      placement: g,
      placementFallback: i,
      offsetX: I,
      offsetY: l,
      offsetEdge: O
    }
  ) }) });
}, x = D(P);
export {
  x as Menu
};
