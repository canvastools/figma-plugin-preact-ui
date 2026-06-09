import "./index.es38.css";
import { jsx as t } from "./index.es178.js";
import { Fragment as $, cloneElement as H } from "preact";
import { useState as A, useRef as J, useMemo as N, useEffect as L } from "preact/hooks";
/* empty css            */
import { Icon as Q } from "./index.es16.js";
import { MenuContainer as U } from "./index.es23.js";
import { MenuContext as W, useMenuContext as X } from "./index.es24.js";
import { MenuDivider as Y } from "./index.es25.js";
import { MenuItemOption as Z } from "./index.es27.js";
import { OverlayPositioner as V } from "./index.es28.js";
import { Tooltip as C } from "./index.es50.js";
import { typedForwardRef as ee } from "./index.es180.js";
import { bem as re } from "./index.es63.js";
import { chevronDown as te } from "./index.es79.js";
const ne = ({
  id: d,
  className: p,
  options: f,
  placeholder: s,
  defaultValue: l,
  value: o,
  grouped: a,
  error: r = !1,
  disabled: n = !1,
  tabIndex: k,
  prefix: v,
  menuContainerProps: P,
  tooltip: E,
  onBlur: h,
  onFocus: y,
  onValueChange: M,
  ...T
}, u) => {
  var D;
  const [F, I] = A(!1), [O, R] = A(!1), [b, _] = A(o !== void 0 ? o : l), m = J(null), x = !!(o ?? b ?? "").length, w = N(() => {
    const e = f ?? [];
    return Array.isArray(e) && e.length > 0 && Array.isArray(e[0]) ? e : [e];
  }, [f]), j = N(
    () => w.reduce((e, i) => e.concat(i), []),
    [w]
  );
  L(() => {
    o !== void 0 && _(o);
  }, [o]);
  const K = () => {
    n || (I(!0), y == null || y());
  }, S = () => {
    n || (I(!1), h == null || h());
  }, q = (e) => {
    (e.key === "Escape" || e.key === "Esc") && !O && e.currentTarget.blur();
  }, z = (e) => {
    const i = e.currentTarget;
    let c = e.target;
    for (; c && c !== i; ) {
      const g = c.getAttribute("data-pui-interactive");
      if (g === "true") {
        e.stopPropagation();
        return;
      }
      if (g === "false")
        return;
      c = c.parentElement;
    }
  }, B = re("Select", void 0, {
    filled: x,
    grouped: !!a,
    groupedPosition: a ?? void 0,
    prefix: !!v,
    error: r,
    disabled: n,
    focused: F,
    open: O
  }), G = (e) => {
    if (m.current = e, !!u)
      if (typeof u == "function")
        u(e);
      else {
        const i = u;
        i.current = e;
      }
  };
  return /* @__PURE__ */ t($, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        id: d,
        className: [B, p].join(" ").trim(),
        "data-pui-interactive": "true",
        ref: G,
        ...T,
        tabIndex: k ?? (n ? -1 : 0),
        onFocus: K,
        onBlur: S,
        onKeyDown: q,
        children: [
          v && /* @__PURE__ */ t("div", { className: "Select__prefix", onMouseDown: z, children: v }),
          /* @__PURE__ */ t("div", { className: "Select__content", children: x ? (D = j.find((e) => e.value === b)) == null ? void 0 : D.label : s }),
          /* @__PURE__ */ t("div", { className: "Select__suffix", children: /* @__PURE__ */ t(Q, { glyph: te, size: 16, intent: "neutral", disabled: n }) })
        ]
      }
    ),
    /* @__PURE__ */ t(
      W,
      {
        triggerRef: m,
        open: O,
        setOpen: (e) => {
          n || R(e);
        },
        children: /* @__PURE__ */ t(
          ie,
          {
            menuContainerProps: P,
            groups: w,
            selectedValue: b,
            onSelectedChange: ({ event: e, value: i }) => {
              i !== void 0 && _(i), M == null || M({ event: e, value: i }), R(!1), e && e.detail === 0 && requestAnimationFrame(() => {
                var c;
                (c = m.current) == null || c.focus();
              });
            }
          }
        )
      }
    ),
    E && /* @__PURE__ */ t(C, { anchorRef: m, children: E })
  ] });
}, ie = ({ menuContainerProps: d, groups: p, selectedValue: f, onSelectedChange: s }) => {
  const l = X();
  return /* @__PURE__ */ t(
    V,
    {
      anchorRef: l.anchorRef,
      placement: "over",
      offsetEdge: 16,
      open: l.open,
      closeOnClickOutside: !0,
      onClose: () => l.setOpen(!1),
      children: /* @__PURE__ */ t(U, { ...d, children: p.map((o, a) => /* @__PURE__ */ t($, { children: [
        a > 0 ? /* @__PURE__ */ t(Y, { variant: "inset" }) : null,
        o.map((r) => r.children && typeof r.children != "string" ? H(r.children, {
          key: `${a}-${r.value}`,
          id: r.value,
          label: r.label,
          value: r.value,
          disabled: r.disabled,
          focused: l.focusedItemId === r.value,
          selected: r.value === f,
          onSelectedChange: ({ event: n }) => s == null ? void 0 : s({ event: n, value: r.value })
        }) : /* @__PURE__ */ t(
          Z,
          {
            disabled: r.disabled,
            id: r.value,
            focused: l.focusedItemId === r.value,
            selected: r.value === f,
            onSelectedChange: ({ event: n }) => s == null ? void 0 : s({ event: n, value: r.value }),
            children: r.label
          },
          `${a}-${r.value}`
        ))
      ] }, `group-${a}`)) })
    }
  );
}, Oe = ee(ne);
export {
  Oe as Select
};
