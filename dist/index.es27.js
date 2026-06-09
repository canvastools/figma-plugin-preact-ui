import "./index.es27.css";
import { jsx as t } from "./index.es178.js";
import { cloneElement as q } from "preact";
import { useState as N, useRef as D, useEffect as F } from "preact/hooks";
import { Icon as G } from "./index.es16.js";
import { useMenuContextOptional as J } from "./index.es24.js";
import { Text as K } from "./index.es47.js";
/* empty css            */
import { typedForwardRef as Q } from "./index.es180.js";
import { uuid as U } from "./index.es204.js";
import { bem as V } from "./index.es63.js";
import { check as W } from "./index.es74.js";
const I = {
  intent: "brand",
  intentModifiers: "default"
}, X = () => () => {
}, Y = () => {
}, Z = () => {
}, $ = () => {
}, S = ({
  className: x,
  id: d,
  defaultSelected: g = !1,
  selected: r,
  focused: M = !1,
  disabled: n = !1,
  prefix: m,
  suffix: u,
  children: i,
  onSelectedChange: l,
  tabIndex: H,
  ...A
}, a) => {
  const [E, _] = N(g), P = J(), { registerItem: y, clearFocus: R, setHoveredItem: j, setFocusedItem: k } = P ?? {
    registerItem: X,
    clearFocus: Y,
    setHoveredItem: Z,
    setFocusedItem: $
  }, O = D(null), o = d ?? U();
  F(() => y({
    id: o,
    ref: O,
    disabled: n
  }), [n, o, y]);
  const v = r !== void 0 ? r : E, [w, h] = N(!1), s = w || M, z = V("MenuItemOption", void 0, {
    disabled: n,
    focused: M,
    prefix: !!m,
    suffix: !!u,
    selected: v
  }), B = (e) => {
    if (!n) {
      const c = !v;
      r === void 0 && _(c), e.stopPropagation(), l == null || l({ event: e, id: o, selected: c }), o && k(o);
    }
  };
  F(() => {
    r !== void 0 && _(r);
  }, [r]);
  const C = () => {
    n || (R(), o && j(o), h(!0));
  }, L = () => {
    n || h(!1);
  }, p = (e, c) => {
    if (Array.isArray(e))
      return e.map((f) => p(f, c));
    if (e && typeof e == "object" && "type" in e && typeof e.type != "string") {
      const f = e, T = f.props || {}, b = { ...c };
      return q(f, b, T.children);
    }
    return e;
  };
  return /* @__PURE__ */ t(
    "div",
    {
      id: d,
      className: [z, x].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: (e) => {
        typeof a == "function" ? a(e) : a && (a.current = e), O.current = e;
      },
      ...A,
      tabIndex: H ?? -1,
      onClick: B,
      onMouseEnter: C,
      onMouseLeave: L,
      children: /* @__PURE__ */ t("div", { className: "MenuItemOption__content", children: [
        /* @__PURE__ */ t("div", { className: "MenuItemOption__selection", children: v && /* @__PURE__ */ t(G, { glyph: W, size: 16, intent: s ? "brand" : "neutral-inverted-fixed", disabled: n }) }),
        /* @__PURE__ */ t("div", { className: "MenuItemOption__content-container", children: [
          m && /* @__PURE__ */ t("div", { className: "MenuItemAction__prefix", children: s ? p(m, {
            ...I
          }) : m }),
          i != null && i !== !1 && i !== !0 && /* @__PURE__ */ t("div", { className: "MenuItemOption__children", children: /* @__PURE__ */ t(K, { variant: "body", size: "medium", intent: s ? "brand" : "neutral-inverted-fixed", disabled: n, children: s ? p(i, {
            ...I
          }) : i }) }),
          u && /* @__PURE__ */ t("div", { className: "MenuItemOption__suffix", children: s ? p(u, {
            ...I
          }) : u })
        ] })
      ] })
    }
  );
}, pe = Q(S);
export {
  pe as MenuItemOption
};
