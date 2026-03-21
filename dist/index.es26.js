import "./index.es26.css";
import { jsx as o } from "./index.es129.js";
import { Fragment as L, cloneElement as w } from "preact";
import { useRef as z, useEffect as D, useState as O } from "preact/hooks";
import { useMenuContextOptional as T } from "./index.es24.js";
import { Text as b } from "./index.es47.js";
/* empty css            */
import { typedForwardRef as q } from "./index.es131.js";
import { uuid as G } from "./index.es155.js";
import { bem as J } from "./index.es62.js";
const p = {
  intent: "brand",
  intentModifiers: "default"
}, K = () => () => {
}, Q = () => {
}, U = () => {
}, V = () => {
}, W = ({
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
  ..._
}, a) => {
  const F = T(), { registerItem: I, clearFocus: N, setHoveredItem: x, setFocusedItem: H } = F ?? {
    registerItem: K,
    clearFocus: Q,
    setHoveredItem: U,
    setFocusedItem: V
  }, M = z(null), n = d ?? G();
  D(() => I({
    id: n,
    ref: M,
    disabled: t
  }), [t, n, I]);
  const [E, g] = O(!1), s = E || v, P = J("MenuItemAction", void 0, {
    intentModifier: f,
    disabled: t,
    focused: v,
    prefix: !!i,
    suffix: !!c,
    paddingLikeOption: y
  }), R = (e) => {
    if (t) {
      e.preventDefault();
      return;
    }
    e.stopPropagation(), l == null || l({ event: e, id: n }), n && H(n);
  }, j = () => {
    t || (N(), n && x(n), g(!0));
  }, S = () => {
    t || g(!1);
  }, m = (e, A) => {
    if (Array.isArray(e))
      return e.map((u) => m(u, A));
    if (e && typeof e == "object" && "type" in e && typeof e.type != "string") {
      const u = e, B = u.props || {}, C = { ...A };
      return w(u, C, B.children);
    }
    return e;
  };
  return /* @__PURE__ */ o(L, { children: /* @__PURE__ */ o(
    "div",
    {
      id: d,
      className: [P, h].join(" ").trim(),
      "data-pui-interactive": "true",
      tabIndex: -1,
      ref: (e) => {
        typeof a == "function" ? a(e) : a && (a.current = e), M.current = e;
      },
      ..._,
      onClick: R,
      onMouseEnter: j,
      onMouseLeave: S,
      children: /* @__PURE__ */ o("div", { className: "MenuItemAction__content", children: [
        i && /* @__PURE__ */ o("div", { className: "MenuItemAction__prefix", children: s ? m(i, {
          ...p
        }) : i }),
        r != null && r !== !1 && r !== !0 && /* @__PURE__ */ o("div", { className: "MenuItemAction__children", children: /* @__PURE__ */ o(
          b,
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
}, re = q(W);
export {
  re as MenuItemAction
};
