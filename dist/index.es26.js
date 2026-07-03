import "./index.es26.css";
import { jsx as r } from "./index.es203.js";
import { Fragment as D, cloneElement as O } from "preact";
import { useRef as y, useEffect as T, useState as b } from "preact/hooks";
import { Text as q } from "./index.es49.js";
import { useMenuContextOptional as G } from "./index.es24.js";
/* empty css            */
import { typedForwardRef as J } from "./index.es205.js";
import { uuid as K } from "./index.es229.js";
import { bem as Q } from "./index.es65.js";
const d = {
  intent: "brand",
  intentModifier: "default"
}, U = () => () => {
}, V = () => {
}, W = () => {
}, X = () => {
}, Y = ({
  className: _,
  id: I,
  intentModifier: f = "default",
  disabled: t = !1,
  focused: v = !1,
  prefix: i,
  suffix: c,
  children: o,
  paddingLikeOption: F = !1,
  onClick: l,
  tabIndex: N,
  ...x
}, u) => {
  const H = G(), { registerItem: g, clearFocus: R, setHoveredItem: E, setFocusedItem: P } = H ?? {
    registerItem: U,
    clearFocus: V,
    setHoveredItem: W,
    setFocusedItem: X
  }, M = y(null), p = y(null);
  p.current === null && (p.current = K());
  const n = I ?? p.current;
  T(() => g({
    id: n,
    ref: M,
    disabled: t
  }), [t, n, g]);
  const [j, A] = b(!1), s = j || v, S = Q("MenuItemAction", void 0, {
    intentModifier: f,
    disabled: t,
    focused: v,
    prefix: !!i,
    suffix: !!c,
    paddingLikeOption: F
  }), B = (e) => {
    if (t) {
      e.preventDefault();
      return;
    }
    e.stopPropagation(), l == null || l({ event: e, id: n }), n && P(n);
  }, C = () => {
    t || (R(), n && E(n), A(!0));
  }, L = () => {
    t || A(!1);
  }, a = (e, h) => {
    if (Array.isArray(e))
      return e.map((m) => a(m, h));
    if (e && typeof e == "object" && "type" in e && typeof e.type != "string") {
      const m = e, w = m.props || {}, z = { ...h };
      return O(m, z, w.children);
    }
    return e;
  };
  return /* @__PURE__ */ r(D, { children: /* @__PURE__ */ r(
    "div",
    {
      id: I,
      className: [S, _].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: (e) => {
        typeof u == "function" ? u(e) : u && (u.current = e), M.current = e;
      },
      ...x,
      tabIndex: N ?? -1,
      onClick: B,
      onMouseEnter: C,
      onMouseLeave: L,
      children: /* @__PURE__ */ r("div", { className: "MenuItemAction__content", children: [
        i && /* @__PURE__ */ r("div", { className: "MenuItemAction__prefix", children: s ? a(i, {
          ...d
        }) : i }),
        o != null && o !== !1 && o !== !0 && /* @__PURE__ */ r("div", { className: "MenuItemAction__children", children: /* @__PURE__ */ r(
          q,
          {
            variant: "body",
            size: "medium",
            intent: s ? f === "danger" ? "danger" : "brand" : "neutral-inverted-fixed",
            intentModifier: s ? "default" : f,
            disabled: t,
            children: s ? a(o, {
              ...d
            }) : o
          }
        ) }),
        c && /* @__PURE__ */ r("div", { className: "MenuItemAction__suffix", children: s ? a(c, {
          ...d
        }) : c })
      ] })
    }
  ) });
}, ie = J(Y);
export {
  ie as MenuItemAction
};
