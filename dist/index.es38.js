import "./index.es38.css";
import { jsx as t } from "./index.es143.js";
import { Fragment as x, cloneElement as z } from "preact";
import { useState as M, useRef as B, useMemo as w, useEffect as q } from "preact/hooks";
/* empty css            */
import { Icon as G } from "./index.es16.js";
import { MenuContainer as H } from "./index.es23.js";
import { MenuContext as J, useMenuContext as L } from "./index.es24.js";
import { MenuDivider as Q } from "./index.es25.js";
import { MenuItemOption as U } from "./index.es27.js";
import { OverlayPositioner as W } from "./index.es28.js";
import { Tooltip as X } from "./index.es50.js";
import { typedForwardRef as Y } from "./index.es145.js";
import { bem as Z } from "./index.es62.js";
import { chevronDown as V } from "./index.es77.js";
const C = ({
  id: u,
  className: m,
  options: a,
  placeholder: i,
  defaultValue: c,
  value: s,
  grouped: l,
  error: r = !1,
  disabled: n = !1,
  prefix: d,
  menuContainerProps: A,
  tooltip: R,
  onBlur: v,
  onFocus: p,
  onValueChange: h,
  ...D
}, f) => {
  var k;
  const [T, _] = M(!1), [b, E] = M(!1), [y, N] = M(s !== void 0 ? s : c), O = B(null), $ = !!(s ?? y ?? "").length, I = w(() => {
    const e = a ?? [];
    return Array.isArray(e) && e.length > 0 && Array.isArray(e[0]) ? e : [e];
  }, [a]), j = w(
    () => I.reduce((e, o) => e.concat(o), []),
    [I]
  );
  q(() => {
    s !== void 0 && N(s);
  }, [s]);
  const F = () => {
    n || (_(!0), p == null || p());
  }, K = () => {
    n || (_(!1), v == null || v());
  }, P = (e) => {
    (e.key === "Escape" || e.key === "Esc") && e.currentTarget.blur();
  }, S = Z("Select", void 0, {
    filled: $,
    grouped: !!l,
    groupedPosition: l ?? void 0,
    prefix: !!d,
    error: r,
    disabled: n,
    focused: T,
    open: b
  }), g = (e) => {
    if (O.current = e, !!f)
      if (typeof f == "function")
        f(e);
      else {
        const o = f;
        o.current = e;
      }
  };
  return /* @__PURE__ */ t(x, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        id: u,
        className: [S, m].join(" ").trim(),
        "data-pui-interactive": "true",
        ref: g,
        tabIndex: n ? -1 : 0,
        ...D,
        onFocus: F,
        onBlur: K,
        onKeyDown: P,
        children: [
          d && /* @__PURE__ */ t("div", { className: "Select__prefix", children: d }),
          /* @__PURE__ */ t("div", { className: "Select__content", children: $ ? (k = j.find((e) => e.value === y)) == null ? void 0 : k.label : i }),
          /* @__PURE__ */ t("div", { className: "Select__suffix", children: /* @__PURE__ */ t(G, { glyph: V, size: 16, intent: "neutral", disabled: n }) })
        ]
      }
    ),
    /* @__PURE__ */ t(
      J,
      {
        triggerRef: O,
        open: b,
        setOpen: (e) => {
          n || E(e);
        },
        children: /* @__PURE__ */ t(
          ee,
          {
            menuContainerProps: A,
            groups: I,
            selectedValue: y,
            onSelectedChange: ({ event: e, value: o }) => {
              o !== void 0 && N(o), h == null || h({ event: e, value: o }), E(!1);
            }
          }
        )
      }
    ),
    R && /* @__PURE__ */ t(X, { anchorRef: O, children: R })
  ] });
}, ee = ({ menuContainerProps: u, groups: m, selectedValue: a, onSelectedChange: i }) => {
  const c = L();
  return /* @__PURE__ */ t(
    W,
    {
      anchorRef: c.anchorRef,
      placement: "over",
      offsetEdge: 16,
      open: c.open,
      closeOnClickOutside: !0,
      onClose: () => c.setOpen(!1),
      children: /* @__PURE__ */ t(H, { ...u, children: m.map((s, l) => /* @__PURE__ */ t(x, { children: [
        l > 0 ? /* @__PURE__ */ t(Q, { variant: "inset" }) : null,
        s.map((r) => r.children && typeof r.children != "string" ? z(r.children, {
          key: `${l}-${r.value}`,
          id: r.value,
          label: r.label,
          value: r.value,
          disabled: r.disabled,
          focused: c.focusedItemId === r.value,
          selected: r.value === a,
          onSelectedChange: ({ event: n }) => i == null ? void 0 : i({ event: n, value: r.value })
        }) : /* @__PURE__ */ t(
          U,
          {
            disabled: r.disabled,
            id: r.value,
            focused: c.focusedItemId === r.value,
            selected: r.value === a,
            onSelectedChange: ({ event: n }) => i == null ? void 0 : i({ event: n, value: r.value }),
            children: r.label
          },
          `${l}-${r.value}`
        ))
      ] }, `group-${l}`)) })
    }
  );
}, pe = Y(C);
export {
  pe as Select
};
