import "./index.es17.css";
import { jsx as o } from "./index.es178.js";
import { Fragment as yt } from "preact";
import { useState as l, useRef as M, useImperativeHandle as It, useEffect as x } from "preact/hooks";
import { Text as _t } from "./index.es47.js";
import { Tooltip as Et } from "./index.es50.js";
/* empty css            */
import { typedForwardRef as Pt } from "./index.es180.js";
import { bem as $ } from "./index.es63.js";
const wt = ({
  id: q,
  className: A,
  variant: f = "default",
  label: m,
  placeholder: g,
  type: C = "text",
  value: s,
  defaultValue: D,
  ghost: G = !1,
  grouped: k,
  error: J = !1,
  disabled: u = !1,
  prefix: h,
  suffix: T,
  showSuffixOnHover: Q = !1,
  focusOnDoubleClick: r = !1,
  focusOnPrefix: y = !1,
  minLength: U = 0,
  maxLength: V,
  tooltip: H,
  autoFocus: S = !1,
  selectOnFocus: X = !1,
  maxWidth: d,
  onValueChange: I,
  onBlur: _,
  onFocus: E,
  onKeyDown: P,
  tabIndex: w,
  ...Y
}, Z) => {
  const c = s !== void 0, [N, b] = l(() => D ?? ""), [O, j] = l(!1), [tt, R] = l(!1), [et, v] = l(!1), [K, B] = l(!!(s ?? N ?? "")), [a, F] = l(!1), n = M(null), i = M(null), p = M(!1);
  It(Z, () => n.current, []), x(() => {
    if (!S) return;
    const t = window.setTimeout(() => {
      var e;
      (e = i.current) == null || e.focus();
    }, 25);
    return () => clearTimeout(t);
  }, [S]), x(() => {
    c && s !== void 0 && B(s.length > 0);
  }, [c, s]);
  const rt = $("Input", void 0, {
    filled: K,
    ghost: G,
    disabled: u,
    variant: f,
    label: !!m,
    grouped: !!k,
    groupedPosition: k ?? void 0,
    prefix: !!h,
    suffix: !!T,
    suffixOnHover: !!Q,
    focused: O,
    // For double-click mode, apply keyboardFocus only when the wrapper
    // itself is focused via keyboard (Tab), not mouse.
    keyboardFocus: r && et && tt,
    editing: a,
    doubleClick: r,
    error: J
  }), ot = $("Input__display", void 0, {
    placeholder: !!(g && !K)
  }), st = (t) => {
    t.stopPropagation();
    const e = t.currentTarget.value;
    c || b(e), B(e.length > 0), I == null || I({
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
    t.currentTarget === t.target && (v(!0), R(!p.current));
  }, it = (t) => {
    t.currentTarget === t.target && (v(!1), R(!1));
  }, lt = (t) => {
    if (t.stopPropagation(), j(!0), X) {
      const e = t.currentTarget;
      setTimeout(() => e.select(), 0);
    }
    E == null || E({
      event: t,
      value: t.currentTarget.value
    });
  }, ct = (t) => {
    t.stopPropagation(), P == null || P({
      event: t,
      value: t.currentTarget.value
    }), (t.key === "Enter" || t.key === "Escape" || t.key === "Esc") && t.currentTarget.blur();
  }, ut = (t) => {
    t.stopPropagation();
  }, dt = () => {
    p.current = !0;
  }, pt = (t) => {
    r && t.target === t.currentTarget && (t.key === " " || t.key === "Spacebar" || t.key === "Enter") && (t.preventDefault(), t.stopPropagation(), p.current = !1, F(!0));
  }, z = () => {
    p.current = !0, a ? setTimeout(() => {
      var t;
      return (t = i.current) == null ? void 0 : t.focus();
    }, 0) : F(!0);
  }, ft = () => {
    r && z();
  }, mt = (t) => {
    var e;
    u || (t.preventDefault(), (e = i.current) == null || e.focus());
  }, gt = (t) => {
    u || (t.preventDefault(), t.stopPropagation(), z());
  }, ht = (t) => {
    t.stopPropagation();
  };
  x(() => {
    r && a && setTimeout(() => {
      var t, e, W;
      (t = i.current) == null || t.focus(), (W = (e = i.current) == null ? void 0 : e.select) == null || W.call(e);
    }, 0);
  }, [r, a]);
  const L = !r || a, Tt = c ? s ?? "" : N;
  return /* @__PURE__ */ o(yt, { children: [
    /* @__PURE__ */ o(
      "div",
      {
        id: q,
        className: [rt, A].join(" ").trim(),
        "data-pui-interactive": L ? "true" : "false",
        ref: n,
        ...Y,
        children: [
          m && /* @__PURE__ */ o(_t, { className: "Input__label", intentModifier: "secondary", size: f === "list" ? "medium" : "small", truncate: !0, children: m }),
          /* @__PURE__ */ o(
            "div",
            {
              className: "Input__container",
              onKeyDown: pt,
              onMouseDown: dt,
              onFocus: nt,
              onBlur: it,
              onDblClick: ft,
              tabIndex: r ? w ?? 0 : void 0,
              style: {
                maxWidth: f === "default" ? void 0 : typeof d == "number" ? `${d}px` : d,
                flexShrink: d ? 0 : void 0
              },
              children: [
                h && /* @__PURE__ */ o(
                  "div",
                  {
                    className: "Input__prefix",
                    onMouseDownCapture: y && !r ? mt : void 0,
                    onDblClickCapture: y && r ? gt : !y && r ? ht : void 0,
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
                    minLength: U,
                    maxLength: V,
                    type: C,
                    disabled: u,
                    ...w !== void 0 && !r ? { tabIndex: w } : {},
                    placeholder: g,
                    value: c ? s : N,
                    onChange: st,
                    onClick: ut,
                    onBlur: (t) => {
                      at(t), r && (F(!1), R(!1));
                    },
                    onFocus: lt,
                    onKeyDown: ct
                  }
                ) : /* @__PURE__ */ o("div", { className: ot, children: Tt || g }),
                T && /* @__PURE__ */ o("div", { className: "Input__suffix", children: T })
              ]
            }
          )
        ]
      }
    ),
    H && /* @__PURE__ */ o(Et, { anchorRef: n, children: H })
  ] });
}, St = Pt(wt);
export {
  St as Input
};
