import "./index.es17.css";
import { jsx as s } from "./index.es143.js";
import { Fragment as dt } from "preact";
import { useState as n, useRef as x, useImperativeHandle as pt, useEffect as B } from "preact/hooks";
import { Text as ft } from "./index.es47.js";
import { Tooltip as mt } from "./index.es50.js";
/* empty css            */
import { typedForwardRef as gt } from "./index.es145.js";
import { bem as z } from "./index.es62.js";
const ht = ({
  id: L,
  className: W,
  variant: p = "default",
  label: f,
  placeholder: m,
  type: $ = "text",
  value: a,
  defaultValue: q,
  ghost: A = !1,
  grouped: P,
  error: G = !1,
  disabled: F = !1,
  prefix: g,
  suffix: h,
  showSuffixOnHover: J = !1,
  focusOnDoubleClick: r = !1,
  minLength: Q = 0,
  maxLength: U,
  tooltip: k,
  autoFocus: M = !1,
  maxWidth: c,
  onValueChange: I,
  onBlur: y,
  onFocus: T,
  onKeyDown: _,
  ...V
}, X) => {
  const i = a !== void 0, [E, Y] = n(() => q ?? ""), [Z, H] = n(!1), [v, N] = n(!1), [C, S] = n(!1), [b, R] = n(!!(a ?? E ?? "")), [l, w] = n(!1), o = x(null), u = x(null), d = x(!1);
  pt(X, () => o.current, []), B(() => {
    if (!M) return;
    const t = window.setTimeout(() => {
      var e;
      (e = u.current) == null || e.focus();
    }, 25);
    return () => clearTimeout(t);
  }, [M]), B(() => {
    i && a !== void 0 && R(a.length > 0);
  }, [i, a]);
  const D = z("Input", void 0, {
    filled: b,
    ghost: A,
    disabled: F,
    variant: p,
    label: !!f,
    grouped: !!P,
    groupedPosition: P ?? void 0,
    prefix: !!g,
    suffix: !!h,
    suffixOnHover: !!J,
    focused: Z,
    // For double-click mode, apply keyboardFocus only when the wrapper
    // itself is focused via keyboard (Tab), not mouse.
    keyboardFocus: r && C && v,
    editing: l,
    doubleClick: r,
    error: G
  }), O = z("Input__display", void 0, {
    placeholder: !!(m && !b)
  }), tt = (t) => {
    t.stopPropagation();
    const e = t.currentTarget.value;
    i || Y(e), R(e.length > 0), I == null || I({
      event: t,
      value: e
    });
  }, et = (t) => {
    t.stopPropagation(), H(!1), R(t.currentTarget.value.length > 0), y == null || y({
      event: t,
      value: t.currentTarget.value
    }), r && o.current && l && setTimeout(() => {
      o.current && o.current.focus();
    }, 0);
  }, rt = (t) => {
    t.currentTarget === t.target && (S(!0), N(!d.current));
  }, st = (t) => {
    t.currentTarget === t.target && (S(!1), N(!1));
  }, at = (t) => {
    t.stopPropagation(), H(!0), T == null || T({
      event: t,
      value: t.currentTarget.value
    });
  }, ot = (t) => {
    t.stopPropagation(), _ == null || _({
      event: t,
      value: t.currentTarget.value
    }), (t.key === "Enter" || t.key === "Escape" || t.key === "Esc") && t.currentTarget.blur();
  }, nt = (t) => {
    t.stopPropagation();
  }, it = () => {
    d.current = !0;
  }, lt = (t) => {
    r && t.target === t.currentTarget && (t.key === " " || t.key === "Spacebar" || t.key === "Enter") && (t.preventDefault(), t.stopPropagation(), d.current = !1, w(!0));
  }, ct = () => {
    r && (d.current = !0, w(!0));
  };
  B(() => {
    r && l && setTimeout(() => {
      var t, e, K;
      (t = u.current) == null || t.focus(), (K = (e = u.current) == null ? void 0 : e.select) == null || K.call(e);
    }, 0);
  }, [r, l]);
  const j = !r || l, ut = i ? a ?? "" : E;
  return /* @__PURE__ */ s(dt, { children: [
    /* @__PURE__ */ s(
      "div",
      {
        id: L,
        className: [D, W].join(" ").trim(),
        "data-pui-interactive": j ? "true" : "false",
        ref: o,
        ...V,
        children: [
          f && /* @__PURE__ */ s(ft, { className: "Input__label", intentModifier: "secondary", size: p === "list" ? "medium" : "small", truncate: !0, children: f }),
          /* @__PURE__ */ s(
            "div",
            {
              className: "Input__container",
              onKeyDown: lt,
              onMouseDown: it,
              onFocus: rt,
              onBlur: st,
              onDblClick: ct,
              tabIndex: r ? 0 : void 0,
              style: {
                maxWidth: p === "default" ? void 0 : typeof c == "number" ? `${c}px` : c,
                flexShrink: c ? 0 : void 0
              },
              children: [
                g && /* @__PURE__ */ s("div", { className: "Input__prefix", children: g }),
                j ? /* @__PURE__ */ s(
                  "input",
                  {
                    className: "Input__input-native",
                    ref: (t) => {
                      u.current = t;
                    },
                    minLength: Q,
                    maxLength: U,
                    type: $,
                    disabled: F,
                    placeholder: m,
                    value: i ? a : E,
                    onChange: tt,
                    onClick: nt,
                    onBlur: (t) => {
                      et(t), r && (w(!1), N(!1));
                    },
                    onFocus: at,
                    onKeyDown: ot
                  }
                ) : /* @__PURE__ */ s("div", { className: O, children: ut || m }),
                h && /* @__PURE__ */ s("div", { className: "Input__suffix", children: h })
              ]
            }
          )
        ]
      }
    ),
    k && /* @__PURE__ */ s(mt, { anchorRef: o, children: k })
  ] });
}, xt = gt(ht);
export {
  xt as Input
};
