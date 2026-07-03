import "./index.es28.css";
import { jsx as t } from "./index.es203.js";
import { cloneElement as G } from "preact";
import { useState as F, useRef as g, useEffect as x } from "preact/hooks";
import { Text as J } from "./index.es49.js";
import { Icon as K } from "./index.es16.js";
import { useMenuContextOptional as Q } from "./index.es24.js";
/* empty css            */
import { typedForwardRef as U } from "./index.es205.js";
import { uuid as V } from "./index.es229.js";
import { bem as W } from "./index.es65.js";
import { check as X } from "./index.es80.js";
const I = {
  intent: "brand",
  intentModifier: "default"
}, Y = () => () => {
}, Z = () => {
}, $ = () => {
}, S = () => {
}, ee = ({
  className: H,
  id: M,
  defaultSelected: R = !1,
  selected: r,
  focused: _ = !1,
  disabled: n = !1,
  prefix: m,
  suffix: u,
  children: i,
  onSelectedChange: v,
  tabIndex: E,
  ...P
}, a) => {
  const [j, y] = F(R), k = Q(), { registerItem: O, clearFocus: A, setHoveredItem: w, setFocusedItem: z } = k ?? {
    registerItem: Y,
    clearFocus: Z,
    setHoveredItem: $,
    setFocusedItem: S
  }, h = g(null), d = g(null);
  d.current === null && (d.current = V());
  const o = M ?? d.current;
  x(() => O({
    id: o,
    ref: h,
    disabled: n
  }), [n, o, O]);
  const p = r !== void 0 ? r : j, [B, N] = F(!1), s = B || _, C = W("MenuItemOption", void 0, {
    disabled: n,
    focused: _,
    prefix: !!m,
    suffix: !!u,
    selected: p
  }), L = (e) => {
    if (!n) {
      const c = !p;
      r === void 0 && y(c), e.stopPropagation(), v == null || v({ event: e, id: o, selected: c }), o && z(o);
    }
  };
  x(() => {
    r !== void 0 && y(r);
  }, [r]);
  const T = () => {
    n || (A(), o && w(o), N(!0));
  }, b = () => {
    n || N(!1);
  }, f = (e, c) => {
    if (Array.isArray(e))
      return e.map((l) => f(l, c));
    if (e && typeof e == "object" && "type" in e && typeof e.type != "string") {
      const l = e, q = l.props || {}, D = { ...c };
      return G(l, D, q.children);
    }
    return e;
  };
  return /* @__PURE__ */ t(
    "div",
    {
      id: M,
      className: [C, H].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: (e) => {
        typeof a == "function" ? a(e) : a && (a.current = e), h.current = e;
      },
      ...P,
      "data-pui-selected": p ? "true" : void 0,
      tabIndex: E ?? -1,
      onClick: L,
      onMouseEnter: T,
      onMouseLeave: b,
      children: /* @__PURE__ */ t("div", { className: "MenuItemOption__content", children: [
        /* @__PURE__ */ t("div", { className: "MenuItemOption__selection", children: p && /* @__PURE__ */ t(K, { glyph: X, size: 16, intent: s ? "brand" : "neutral-inverted-fixed", disabled: n }) }),
        /* @__PURE__ */ t("div", { className: "MenuItemOption__content-container", children: [
          m && /* @__PURE__ */ t("div", { className: "MenuItemOption__prefix", children: s ? f(m, {
            ...I
          }) : m }),
          i != null && i !== !1 && i !== !0 && /* @__PURE__ */ t("div", { className: "MenuItemOption__children", children: /* @__PURE__ */ t(J, { variant: "body", size: "medium", intent: s ? "brand" : "neutral-inverted-fixed", disabled: n, children: s ? f(i, {
            ...I
          }) : i }) }),
          u && /* @__PURE__ */ t("div", { className: "MenuItemOption__suffix", children: s ? f(u, {
            ...I
          }) : u })
        ] })
      ] })
    }
  );
}, fe = U(ee);
export {
  fe as MenuItemOption
};
