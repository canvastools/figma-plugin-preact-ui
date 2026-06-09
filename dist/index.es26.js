import "./index.es26.css";
import { jsx as o } from "./index.es178.js";
import { Fragment as w, cloneElement as z } from "preact";
import { useRef as D, useEffect as O, useState as T } from "preact/hooks";
import { useMenuContextOptional as b } from "./index.es24.js";
import { Text as q } from "./index.es47.js";
/* empty css            */
import { typedForwardRef as G } from "./index.es180.js";
import { uuid as J } from "./index.es204.js";
import { bem as K } from "./index.es63.js";
const p = {
  intent: "brand",
  intentModifiers: "default"
}, Q = () => () => {
}, U = () => {
}, V = () => {
}, W = () => {
}, X = ({
  className: h,
  id: d,
  intentModifier: f = "default",
  disabled: t = !1,
  focused: v = !1,
  prefix: i,
  suffix: c,
  children: r,
  paddingLikeOption: y = !1,
  onClick: l,
  tabIndex: _,
  ...F
}, a) => {
  const N = b(), { registerItem: I, clearFocus: x, setHoveredItem: H, setFocusedItem: E } = N ?? {
    registerItem: Q,
    clearFocus: U,
    setHoveredItem: V,
    setFocusedItem: W
  }, M = D(null), n = d ?? J();
  O(() => I({
    id: n,
    ref: M,
    disabled: t
  }), [t, n, I]);
  const [P, g] = T(!1), s = P || v, R = K("MenuItemAction", void 0, {
    intentModifier: f,
    disabled: t,
    focused: v,
    prefix: !!i,
    suffix: !!c,
    paddingLikeOption: y
  }), j = (e) => {
    if (t) {
      e.preventDefault();
      return;
    }
    e.stopPropagation(), l == null || l({ event: e, id: n }), n && E(n);
  }, S = () => {
    t || (x(), n && H(n), g(!0));
  }, B = () => {
    t || g(!1);
  }, m = (e, A) => {
    if (Array.isArray(e))
      return e.map((u) => m(u, A));
    if (e && typeof e == "object" && "type" in e && typeof e.type != "string") {
      const u = e, C = u.props || {}, L = { ...A };
      return z(u, L, C.children);
    }
    return e;
  };
  return /* @__PURE__ */ o(w, { children: /* @__PURE__ */ o(
    "div",
    {
      id: d,
      className: [R, h].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: (e) => {
        typeof a == "function" ? a(e) : a && (a.current = e), M.current = e;
      },
      ...F,
      tabIndex: _ ?? -1,
      onClick: j,
      onMouseEnter: S,
      onMouseLeave: B,
      children: /* @__PURE__ */ o("div", { className: "MenuItemAction__content", children: [
        i && /* @__PURE__ */ o("div", { className: "MenuItemAction__prefix", children: s ? m(i, {
          ...p
        }) : i }),
        r != null && r !== !1 && r !== !0 && /* @__PURE__ */ o("div", { className: "MenuItemAction__children", children: /* @__PURE__ */ o(
          q,
          {
            variant: "body",
            size: "medium",
            intent: s ? f === "danger" ? "danger" : "brand" : "neutral-inverted-fixed",
            intentModifier: s ? "default" : f,
            disabled: t,
            children: s ? m(r, {
              ...p
            }) : r
          }
        ) }),
        c && /* @__PURE__ */ o("div", { className: "MenuItemAction__suffix", children: s ? m(c, {
          ...p
        }) : c })
      ] })
    }
  ) });
}, se = G(X);
export {
  se as MenuItemAction
};
