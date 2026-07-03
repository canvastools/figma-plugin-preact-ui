import "./index.es40.css";
import { jsx as t } from "./index.es203.js";
import { Fragment as k, cloneElement as L } from "preact";
import { useState as E, useRef as Q, useMemo as $, useEffect as U } from "preact/hooks";
/* empty css            */
import { MenuContext as W, useMenuContext as X } from "./index.es24.js";
import { MenuContainer as Y } from "./index.es23.js";
import { MenuItemOption as Z } from "./index.es28.js";
import { MenuDivider as V } from "./index.es25.js";
import { OverlayPositioner as C } from "./index.es29.js";
import { Icon as ee } from "./index.es16.js";
import { Tooltip as re } from "./index.es52.js";
import { typedForwardRef as te } from "./index.es205.js";
import { bem as ne } from "./index.es65.js";
import { chevronDown as ie } from "./index.es86.js";
const se = ({
  id: v,
  className: h,
  options: f,
  placeholder: s,
  defaultValue: l,
  value: n,
  grouped: c,
  ghost: r = !1,
  error: u = !1,
  disabled: a = !1,
  fullWidth: P = !1,
  tabIndex: T,
  prefix: y,
  menuContainerProps: F,
  tooltip: I,
  onBlur: M,
  onFocus: O,
  onValueChange: b,
  ...j
}, d) => {
  var g;
  const [K, R] = E(!1), [w, _] = E(!1), [m, x] = E(n !== void 0 ? n : l), p = Q(null), D = !!(n ?? m ?? "").length, A = $(() => {
    const e = f ?? [];
    return Array.isArray(e) && e.length > 0 && Array.isArray(e[0]) ? e : [e];
  }, [f]), S = $(
    () => A.reduce((e, i) => e.concat(i), []),
    [A]
  );
  U(() => {
    n !== void 0 && x(n);
  }, [n]);
  const q = (e) => {
    a || (R(!0), O == null || O({ event: e, value: n ?? m }));
  }, z = (e) => {
    a || (R(!1), M == null || M({ event: e, value: n ?? m }));
  }, B = (e) => {
    (e.key === "Escape" || e.key === "Esc") && !w && e.currentTarget.blur();
  }, G = (e) => {
    const i = e.currentTarget;
    let o = e.target;
    for (; o && o !== i; ) {
      const N = o.getAttribute("data-pui-interactive");
      if (N === "true") {
        e.stopPropagation();
        return;
      }
      if (N === "false")
        return;
      o = o.parentElement;
    }
  }, H = ne("Select", void 0, {
    filled: D,
    grouped: !!c,
    groupedPosition: c ?? void 0,
    prefix: !!y,
    ghost: r,
    fullWidth: P,
    error: u,
    disabled: a,
    focused: K,
    open: w
  }), J = (e) => {
    if (p.current = e, !!d)
      if (typeof d == "function")
        d(e);
      else {
        const i = d;
        i.current = e;
      }
  };
  return /* @__PURE__ */ t(k, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        id: v,
        className: [H, h].join(" ").trim(),
        "data-pui-interactive": "true",
        ref: J,
        ...j,
        tabIndex: T ?? (a ? -1 : 0),
        onFocus: q,
        onBlur: z,
        onKeyDown: B,
        children: [
          y && /* @__PURE__ */ t("div", { className: "Select__prefix", onMouseDown: G, children: y }),
          /* @__PURE__ */ t("div", { className: "Select__content", children: D ? (g = S.find((e) => e.value === m)) == null ? void 0 : g.label : s }),
          /* @__PURE__ */ t("div", { className: "Select__suffix", children: /* @__PURE__ */ t(ee, { glyph: ie, size: 16, intent: "neutral", disabled: a }) })
        ]
      }
    ),
    /* @__PURE__ */ t(
      W,
      {
        triggerRef: p,
        open: w,
        setOpen: (e) => {
          a || _(e);
        },
        children: /* @__PURE__ */ t(
          oe,
          {
            menuContainerProps: F,
            groups: A,
            selectedValue: m,
            onSelectedChange: ({ event: e, value: i }) => {
              i !== void 0 && x(i), b == null || b({ event: e, value: i }), _(!1), e && e.detail === 0 && requestAnimationFrame(() => {
                var o;
                (o = p.current) == null || o.focus();
              });
            }
          }
        )
      }
    ),
    I && /* @__PURE__ */ t(re, { anchorRef: p, children: I })
  ] });
}, oe = ({ menuContainerProps: v, groups: h, selectedValue: f, onSelectedChange: s }) => {
  const l = X();
  return /* @__PURE__ */ t(
    C,
    {
      anchorRef: l.anchorRef,
      placement: "over",
      offsetEdge: 16,
      open: l.open,
      closeOnClickOutside: !0,
      onClose: () => l.setOpen(!1),
      children: /* @__PURE__ */ t(Y, { ...v, children: h.map((n, c) => /* @__PURE__ */ t(k, { children: [
        c > 0 ? /* @__PURE__ */ t(V, { variant: "inset" }) : null,
        n.map((r) => r.children && typeof r.children != "string" ? L(r.children, {
          key: `${c}-${r.value}`,
          id: r.value,
          label: r.label,
          value: r.value,
          disabled: r.disabled,
          focused: l.focusedItemId === r.value,
          selected: r.value === f,
          onSelectedChange: ({ event: u }) => s == null ? void 0 : s({ event: u, value: r.value })
        }) : /* @__PURE__ */ t(
          Z,
          {
            disabled: r.disabled,
            id: r.value,
            focused: l.focusedItemId === r.value,
            selected: r.value === f,
            onSelectedChange: ({ event: u }) => s == null ? void 0 : s({ event: u, value: r.value }),
            children: r.label
          },
          `${c}-${r.value}`
        ))
      ] }, `group-${c}`)) })
    }
  );
}, we = te(se);
export {
  we as Select
};
