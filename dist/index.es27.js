import "./index.es27.css";
import { jsx as t } from "./index.es143.js";
import { cloneElement as b } from "preact";
import { useState as N, useRef as q, useEffect as F } from "preact/hooks";
import { Icon as D } from "./index.es16.js";
import { useMenuContextOptional as G } from "./index.es24.js";
import { Text as J } from "./index.es47.js";
/* empty css            */
import { typedForwardRef as K } from "./index.es145.js";
import { uuid as Q } from "./index.es169.js";
import { bem as U } from "./index.es62.js";
import { check as V } from "./index.es72.js";
const I = {
  intent: "brand",
  intentModifiers: "default"
}, W = () => () => {
}, X = () => {
}, Y = () => {
}, Z = () => {
}, $ = ({
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
  ...H
}, a) => {
  const [A, _] = N(g), E = G(), { registerItem: y, clearFocus: P, setHoveredItem: R, setFocusedItem: j } = E ?? {
    registerItem: W,
    clearFocus: X,
    setHoveredItem: Y,
    setFocusedItem: Z
  }, O = q(null), o = d ?? Q();
  F(() => y({
    id: o,
    ref: O,
    disabled: n
  }), [n, o, y]);
  const v = r !== void 0 ? r : A, [k, h] = N(!1), s = k || M, w = U("MenuItemOption", void 0, {
    disabled: n,
    focused: M,
    prefix: !!m,
    suffix: !!u,
    selected: v
  }), z = (e) => {
    if (!n) {
      const c = !v;
      r === void 0 && _(c), e.stopPropagation(), l == null || l({ event: e, id: o, selected: c }), o && j(o);
    }
  };
  F(() => {
    r !== void 0 && _(r);
  }, [r]);
  const B = () => {
    n || (P(), o && R(o), h(!0));
  }, C = () => {
    n || h(!1);
  }, p = (e, c) => {
    if (Array.isArray(e))
      return e.map((f) => p(f, c));
    if (e && typeof e == "object" && "type" in e && typeof e.type != "string") {
      const f = e, L = f.props || {}, T = { ...c };
      return b(f, T, L.children);
    }
    return e;
  };
  return /* @__PURE__ */ t(
    "div",
    {
      id: d,
      className: [w, x].join(" ").trim(),
      "data-pui-interactive": "true",
      tabIndex: -1,
      ref: (e) => {
        typeof a == "function" ? a(e) : a && (a.current = e), O.current = e;
      },
      ...H,
      onClick: z,
      onMouseEnter: B,
      onMouseLeave: C,
      children: /* @__PURE__ */ t("div", { className: "MenuItemOption__content", children: [
        /* @__PURE__ */ t("div", { className: "MenuItemOption__selection", children: v && /* @__PURE__ */ t(D, { glyph: V, size: 16, intent: s ? "brand" : "neutral-inverted-fixed", disabled: n }) }),
        /* @__PURE__ */ t("div", { className: "MenuItemOption__content-container", children: [
          m && /* @__PURE__ */ t("div", { className: "MenuItemAction__prefix", children: s ? p(m, {
            ...I
          }) : m }),
          i != null && i !== !1 && i !== !0 && /* @__PURE__ */ t("div", { className: "MenuItemOption__children", children: /* @__PURE__ */ t(J, { variant: "body", size: "medium", intent: s ? "brand" : "neutral-inverted-fixed", disabled: n, children: s ? p(i, {
            ...I
          }) : i }) }),
          u && /* @__PURE__ */ t("div", { className: "MenuItemOption__suffix", children: s ? p(u, {
            ...I
          }) : u })
        ] })
      ] })
    }
  );
}, ae = K($);
export {
  ae as MenuItemOption
};
