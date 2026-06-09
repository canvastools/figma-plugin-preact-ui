import "./index.es48.css";
import { jsx as a } from "./index.es178.js";
import { Fragment as dt } from "preact";
import { useState as y, useRef as F, useImperativeHandle as mt, useLayoutEffect as D, useEffect as G } from "preact/hooks";
import { Text as ft } from "./index.es47.js";
import { Tooltip as xt } from "./index.es50.js";
/* empty css            */
import { typedForwardRef as ht } from "./index.es180.js";
import { bem as gt } from "./index.es63.js";
const M = 24;
function I(d, i, n) {
  return Math.min(n, Math.max(i, Math.round(d)));
}
function L(d) {
  const i = getComputedStyle(d), n = parseFloat(i.minHeight), s = Number.isFinite(n) && n > 0 ? n : M, m = parseFloat(i.maxHeight), o = Number.isFinite(m) ? Math.max(s, m) : Number.MAX_SAFE_INTEGER;
  return { minPx: s, maxPx: o };
}
const yt = ({
  id: d,
  className: i,
  variant: n = "default",
  label: s,
  placeholder: m,
  value: o,
  defaultValue: U,
  error: X = !1,
  disabled: f = !1,
  minLength: O = 0,
  maxLength: q,
  tooltip: $,
  autoFocus: k = !1,
  selectOnFocus: J = !1,
  maxWidth: x,
  minHeight: c,
  maxHeight: l,
  resize: r,
  onValueChange: T,
  onBlur: P,
  onFocus: v,
  onKeyDown: w,
  tabIndex: H,
  ...Q
}, V) => {
  const h = o !== void 0, [S, Z] = y(() => U ?? ""), [K, b] = y(!1), [W, E] = y(!!(o ?? S ?? "")), [z, Y] = y(M), _ = F(null), u = F(null), N = F(null);
  mt(V, () => _.current, []);
  const j = h ? o ?? "" : S, tt = r !== "y";
  D(() => {
    if (r !== "y" || !u.current) return;
    const { minPx: t, maxPx: e } = L(u.current);
    Y((p) => I(p, t, e));
  }, [r, c, l]), D(() => {
    const t = N.current, e = u.current;
    if (!t || !e) return;
    if (r === "y") {
      t.style.removeProperty("height");
      return;
    }
    t.style.height = "0px";
    const { minPx: p, maxPx: A } = L(e), R = I(t.scrollHeight, p, A);
    t.style.height = `${R}px`;
  }, [r, l, c, j]), G(() => {
    if (!k) return;
    const t = window.setTimeout(() => {
      var e;
      (e = N.current) == null || e.focus();
    }, 25);
    return () => clearTimeout(t);
  }, [k]), G(() => {
    h && o !== void 0 && E(o.length > 0);
  }, [h, o]);
  const et = gt("TextArea", void 0, {
    filled: W,
    disabled: f,
    variant: n,
    label: !!s,
    focused: K,
    error: X,
    resizeY: r === "y",
    autoGrow: tt
  }), rt = (t) => {
    if (f || r !== "y" || !u.current) return;
    t.preventDefault(), t.stopPropagation();
    const e = u.current, p = t.currentTarget, A = t.clientY, R = e.getBoundingClientRect().height, { minPx: lt, maxPx: ut } = L(e);
    p.setPointerCapture(t.pointerId);
    const B = (C) => {
      const pt = R + (C.clientY - A);
      Y(I(pt, lt, ut));
    }, g = (C) => {
      window.removeEventListener("pointermove", B), window.removeEventListener("pointerup", g), window.removeEventListener("pointercancel", g);
      try {
        p.releasePointerCapture(C.pointerId);
      } catch {
      }
    };
    window.addEventListener("pointermove", B), window.addEventListener("pointerup", g), window.addEventListener("pointercancel", g);
  }, nt = (t) => {
    t.stopPropagation();
    const e = t.currentTarget.value;
    h || Z(e), E(e.length > 0), T == null || T({
      event: t,
      value: e
    });
  }, ot = (t) => {
    t.stopPropagation(), b(!1), E(t.currentTarget.value.length > 0), P == null || P({
      event: t,
      value: t.currentTarget.value
    });
  }, at = (t) => {
    if (t.stopPropagation(), b(!0), J) {
      const e = t.currentTarget;
      setTimeout(() => e.select(), 0);
    }
    v == null || v({
      event: t,
      value: t.currentTarget.value
    });
  }, it = (t) => {
    t.stopPropagation(), w == null || w({
      event: t,
      value: t.currentTarget.value
    }), (t.key === "Escape" || t.key === "Esc") && t.currentTarget.blur();
  }, st = (t) => {
    t.stopPropagation();
  }, ct = {
    maxWidth: n === "default" ? void 0 : typeof x == "number" ? `${x}px` : x,
    flexShrink: x ? 0 : void 0,
    minHeight: c !== void 0 ? typeof c == "number" ? `${c}px` : c : r === "y" ? `${M}px` : void 0,
    maxHeight: l !== void 0 ? typeof l == "number" ? `${l}px` : l : void 0,
    height: r === "y" ? `${z}px` : void 0
  };
  return /* @__PURE__ */ a(dt, { children: [
    /* @__PURE__ */ a(
      "div",
      {
        id: d,
        className: [et, i].join(" ").trim(),
        "data-pui-interactive": "true",
        ref: _,
        ...Q,
        children: [
          s && /* @__PURE__ */ a(ft, { className: "TextArea__label", intentModifier: "secondary", size: n === "list" ? "medium" : "small", truncate: !0, children: s }),
          /* @__PURE__ */ a("div", { className: "TextArea__container", style: ct, ref: u, children: [
            /* @__PURE__ */ a(
              "textarea",
              {
                className: "TextArea__textarea-native",
                rows: 1,
                ref: (t) => {
                  N.current = t;
                },
                minLength: O,
                maxLength: q,
                disabled: f,
                ...H !== void 0 ? { tabIndex: H } : {},
                placeholder: m,
                value: j,
                onChange: nt,
                onClick: st,
                onBlur: ot,
                onFocus: at,
                onKeyDown: it
              }
            ),
            r === "y" && !f && /* @__PURE__ */ a("div", { className: "TextArea__resizeHandle", "data-pui-interactive": "true", onPointerDown: rt })
          ] })
        ]
      }
    ),
    $ && /* @__PURE__ */ a(xt, { anchorRef: _, children: $ })
  ] });
}, Rt = ht(yt);
export {
  Rt as TextArea
};
