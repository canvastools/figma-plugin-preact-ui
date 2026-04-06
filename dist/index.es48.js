import "./index.es48.css";
import { jsx as a } from "./index.es143.js";
import { Fragment as ut } from "preact";
import { useState as g, useRef as I, useImperativeHandle as pt, useLayoutEffect as B, useEffect as D } from "preact/hooks";
import { Text as dt } from "./index.es47.js";
import { Tooltip as mt } from "./index.es50.js";
/* empty css            */
import { typedForwardRef as ft } from "./index.es145.js";
import { bem as xt } from "./index.es62.js";
const M = 24;
function F(d, i, n) {
  return Math.min(n, Math.max(i, Math.round(d)));
}
function L(d) {
  const i = getComputedStyle(d), n = parseFloat(i.minHeight), s = Number.isFinite(n) && n > 0 ? n : M, m = parseFloat(i.maxHeight), o = Number.isFinite(m) ? Math.max(s, m) : Number.MAX_SAFE_INTEGER;
  return { minPx: s, maxPx: o };
}
const ht = ({
  id: d,
  className: i,
  variant: n = "default",
  label: s,
  placeholder: m,
  value: o,
  defaultValue: G,
  error: U = !1,
  disabled: f = !1,
  minLength: X = 0,
  maxLength: O,
  tooltip: $,
  autoFocus: b = !1,
  maxWidth: x,
  minHeight: c,
  maxHeight: l,
  resize: r,
  onValueChange: P,
  onBlur: T,
  onFocus: v,
  onKeyDown: w,
  ...q
}, J) => {
  const h = o !== void 0, [k, Q] = g(() => G ?? ""), [V, H] = g(!1), [Z, E] = g(!!(o ?? k ?? "")), [K, S] = g(M), _ = I(null), u = I(null), N = I(null);
  pt(J, () => _.current, []);
  const Y = h ? o ?? "" : k, W = r !== "y";
  B(() => {
    if (r !== "y" || !u.current) return;
    const { minPx: t, maxPx: e } = L(u.current);
    S((p) => F(p, t, e));
  }, [r, c, l]), B(() => {
    const t = N.current, e = u.current;
    if (!t || !e) return;
    if (r === "y") {
      t.style.removeProperty("height");
      return;
    }
    t.style.height = "0px";
    const { minPx: p, maxPx: A } = L(e), R = F(t.scrollHeight, p, A);
    t.style.height = `${R}px`;
  }, [r, l, c, Y]), D(() => {
    if (!b) return;
    const t = window.setTimeout(() => {
      var e;
      (e = N.current) == null || e.focus();
    }, 25);
    return () => clearTimeout(t);
  }, [b]), D(() => {
    h && o !== void 0 && E(o.length > 0);
  }, [h, o]);
  const z = xt("TextArea", void 0, {
    filled: Z,
    disabled: f,
    variant: n,
    label: !!s,
    focused: V,
    error: U,
    resizeY: r === "y",
    autoGrow: W
  }), tt = (t) => {
    if (f || r !== "y" || !u.current) return;
    t.preventDefault(), t.stopPropagation();
    const e = u.current, p = t.currentTarget, A = t.clientY, R = e.getBoundingClientRect().height, { minPx: st, maxPx: ct } = L(e);
    p.setPointerCapture(t.pointerId);
    const j = (C) => {
      const lt = R + (C.clientY - A);
      S(F(lt, st, ct));
    }, y = (C) => {
      window.removeEventListener("pointermove", j), window.removeEventListener("pointerup", y), window.removeEventListener("pointercancel", y);
      try {
        p.releasePointerCapture(C.pointerId);
      } catch {
      }
    };
    window.addEventListener("pointermove", j), window.addEventListener("pointerup", y), window.addEventListener("pointercancel", y);
  }, et = (t) => {
    t.stopPropagation();
    const e = t.currentTarget.value;
    h || Q(e), E(e.length > 0), P == null || P({
      event: t,
      value: e
    });
  }, rt = (t) => {
    t.stopPropagation(), H(!1), E(t.currentTarget.value.length > 0), T == null || T({
      event: t,
      value: t.currentTarget.value
    });
  }, nt = (t) => {
    t.stopPropagation(), H(!0), v == null || v({
      event: t,
      value: t.currentTarget.value
    });
  }, ot = (t) => {
    t.stopPropagation(), w == null || w({
      event: t,
      value: t.currentTarget.value
    }), (t.key === "Escape" || t.key === "Esc") && t.currentTarget.blur();
  }, at = (t) => {
    t.stopPropagation();
  }, it = {
    maxWidth: n === "default" ? void 0 : typeof x == "number" ? `${x}px` : x,
    flexShrink: x ? 0 : void 0,
    minHeight: c !== void 0 ? typeof c == "number" ? `${c}px` : c : r === "y" ? `${M}px` : void 0,
    maxHeight: l !== void 0 ? typeof l == "number" ? `${l}px` : l : void 0,
    height: r === "y" ? `${K}px` : void 0
  };
  return /* @__PURE__ */ a(ut, { children: [
    /* @__PURE__ */ a(
      "div",
      {
        id: d,
        className: [z, i].join(" ").trim(),
        "data-pui-interactive": "true",
        ref: _,
        ...q,
        children: [
          s && /* @__PURE__ */ a(dt, { className: "TextArea__label", intentModifier: "secondary", size: n === "list" ? "medium" : "small", truncate: !0, children: s }),
          /* @__PURE__ */ a("div", { className: "TextArea__container", style: it, ref: u, children: [
            /* @__PURE__ */ a(
              "textarea",
              {
                className: "TextArea__textarea-native",
                rows: 1,
                ref: (t) => {
                  N.current = t;
                },
                minLength: X,
                maxLength: O,
                disabled: f,
                placeholder: m,
                value: Y,
                onChange: et,
                onClick: at,
                onBlur: rt,
                onFocus: nt,
                onKeyDown: ot
              }
            ),
            r === "y" && !f && /* @__PURE__ */ a("div", { className: "TextArea__resizeHandle", "data-pui-interactive": "true", onPointerDown: tt })
          ] })
        ]
      }
    ),
    $ && /* @__PURE__ */ a(mt, { anchorRef: _, children: $ })
  ] });
}, Nt = ft(ht);
export {
  Nt as TextArea
};
