import "./index.es17.css";
import { jsx as o } from "./index.es203.js";
import { Fragment as Tt } from "preact";
import { useState as l, useRef as M, useImperativeHandle as yt, useEffect as x } from "preact/hooks";
import { Tooltip as _t } from "./index.es52.js";
import { Text as Et } from "./index.es49.js";
/* empty css            */
import { typedForwardRef as Pt } from "./index.es205.js";
import { bem as $ } from "./index.es65.js";
const wt = ({
  id: q,
  className: A,
  variant: f = "default",
  label: m,
  placeholder: g,
  type: D = "text",
  value: s,
  defaultValue: G,
  ghost: J = !1,
  grouped: k,
  error: Q = !1,
  disabled: c = !1,
  prefix: h,
  suffix: I,
  showSuffixOnHover: U = !1,
  focusOnDoubleClick: r = !1,
  focusOnPrefix: T = !1,
  minLength: V = 0,
  maxLength: X,
  tooltip: H,
  autoFocus: S = !1,
  selectOnFocus: Y = !1,
  maxWidth: p,
  onValueChange: y,
  onBlur: _,
  onFocus: E,
  onKeyDown: P,
  tabIndex: w,
  ...Z
}, C) => {
  const u = s !== void 0, [N, b] = l(() => G ?? ""), [O, j] = l(!1), [tt, R] = l(!1), [et, v] = l(!1), [K, B] = l(!!(s ?? N ?? "")), [a, F] = l(!1), n = M(null), i = M(null), d = M(!1);
  yt(C, () => n.current, []), x(() => {
    if (!S) return;
    const t = window.setTimeout(() => {
      var e;
      (e = i.current) == null || e.focus();
    }, 25);
    return () => clearTimeout(t);
  }, [S]), x(() => {
    u && s !== void 0 && B(s.length > 0);
  }, [u, s]);
  const rt = $("Input", void 0, {
    filled: K,
    ghost: J,
    disabled: c,
    variant: f,
    label: !!m,
    grouped: !!k,
    groupedPosition: k ?? void 0,
    prefix: !!h,
    suffix: !!I,
    suffixOnHover: !!U,
    focused: O,
    // For double-click mode, apply keyboardFocus only when the wrapper
    // itself is focused via keyboard (Tab), not mouse.
    keyboardFocus: r && et && tt,
    editing: a,
    doubleClick: r,
    error: Q
  }), ot = $("Input__display", void 0, {
    placeholder: !!(g && !K)
  }), st = (t) => {
    t.stopPropagation();
    const e = t.currentTarget.value;
    u || b(e), B(e.length > 0), y == null || y({
      event: t,
      value: e
    });
  }, at = (t) => {
    t.stopPropagation(), j(!1), B(t.currentTarget.value.length > 0), _ == null || _({
      event: t,
      value: t.currentTarget.value
    }), r && n.current && a && setTimeout(() => {
      n.current && n.current.focus();
    }, 0);
  }, nt = (t) => {
    t.currentTarget === t.target && (v(!0), R(!d.current));
  }, it = (t) => {
    t.currentTarget === t.target && (v(!1), R(!1));
  }, lt = (t) => {
    if (t.stopPropagation(), j(!0), Y) {
      const e = t.currentTarget;
      setTimeout(() => e.select(), 0);
    }
    E == null || E({
      event: t,
      value: t.currentTarget.value
    });
  }, ut = (t) => {
    t.stopPropagation(), P == null || P({
      event: t,
      value: t.currentTarget.value
    }), (t.key === "Enter" || t.key === "Escape" || t.key === "Esc") && t.currentTarget.blur();
  }, ct = (t) => {
    t.stopPropagation();
  }, pt = () => {
    d.current = !0;
  }, dt = (t) => {
    r && t.target === t.currentTarget && (t.key === " " || t.key === "Spacebar" || t.key === "Enter") && (t.preventDefault(), t.stopPropagation(), d.current = !1, F(!0));
  }, z = () => {
    d.current = !0, a ? setTimeout(() => {
      var t;
      return (t = i.current) == null ? void 0 : t.focus();
    }, 0) : F(!0);
  }, ft = () => {
    r && z();
  }, mt = (t) => {
    var e;
    c || (t.preventDefault(), (e = i.current) == null || e.focus());
  }, gt = (t) => {
    c || (t.preventDefault(), t.stopPropagation(), z());
  }, ht = (t) => {
    t.stopPropagation();
  };
  x(() => {
    r && a && setTimeout(() => {
      var t, e, W;
      (t = i.current) == null || t.focus(), (W = (e = i.current) == null ? void 0 : e.select) == null || W.call(e);
    }, 0);
  }, [r, a]);
  const L = !r || a, It = u ? s ?? "" : N;
  return /* @__PURE__ */ o(Tt, { children: [
    /* @__PURE__ */ o(
      "div",
      {
        id: q,
        className: [rt, A].join(" ").trim(),
        "data-pui-interactive": L ? "true" : "false",
        ref: n,
        ...Z,
        children: [
          m && /* @__PURE__ */ o(Et, { className: "Input__label", intentModifier: "secondary", size: f === "list" ? "medium" : "small", truncate: !0, children: m }),
          /* @__PURE__ */ o(
            "div",
            {
              className: "Input__container",
              onKeyDown: dt,
              onMouseDown: pt,
              onFocus: nt,
              onBlur: it,
              onDblClick: ft,
              tabIndex: r ? w ?? 0 : void 0,
              style: {
                maxWidth: f === "default" ? void 0 : typeof p == "number" ? `${p}px` : p,
                flexShrink: p ? 0 : void 0
              },
              children: [
                h && /* @__PURE__ */ o(
                  "div",
                  {
                    className: "Input__prefix",
                    onMouseDownCapture: T && !r ? mt : void 0,
                    onDblClickCapture: T && r ? gt : !T && r ? ht : void 0,
                    children: h
                  }
                ),
                L ? /* @__PURE__ */ o(
                  "input",
                  {
                    className: "Input__input-native",
                    ref: (t) => {
                      i.current = t;
                    },
                    minLength: V,
                    maxLength: X,
                    type: D,
                    disabled: c,
                    ...w !== void 0 && !r ? { tabIndex: w } : {},
                    placeholder: g,
                    value: u ? s : N,
                    onInput: st,
                    onClick: ct,
                    onBlur: (t) => {
                      at(t), r && (F(!1), R(!1));
                    },
                    onFocus: lt,
                    onKeyDown: ut
                  }
                ) : /* @__PURE__ */ o("div", { className: ot, children: It || g }),
                I && /* @__PURE__ */ o("div", { className: "Input__suffix", children: I })
              ]
            }
          )
        ]
      }
    ),
    H && /* @__PURE__ */ o(_t, { anchorRef: n, children: H })
  ] });
}, St = Pt(wt);
export {
  St as Input
};
