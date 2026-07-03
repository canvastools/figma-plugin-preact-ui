import "./index.es50.css";
import { jsx as i } from "./index.es203.js";
import { Fragment as mt } from "preact";
import { useState as y, useRef as T, useEffect as M, useImperativeHandle as ft, useLayoutEffect as U } from "preact/hooks";
import { Tooltip as xt } from "./index.es52.js";
import { Text as vt } from "./index.es49.js";
/* empty css            */
import { typedForwardRef as ht } from "./index.es205.js";
import { bem as wt } from "./index.es65.js";
const H = 24;
function $(d, s, n) {
  return Math.min(n, Math.max(s, Math.round(d)));
}
function k(d) {
  const s = getComputedStyle(d), n = parseFloat(s.minHeight), a = Number.isFinite(n) && n > 0 ? n : H, f = parseFloat(s.maxHeight), o = Number.isFinite(f) ? Math.max(a, f) : Number.MAX_SAFE_INTEGER;
  return { minPx: a, maxPx: o };
}
const yt = ({
  id: d,
  className: s,
  variant: n = "default",
  label: a,
  placeholder: f,
  value: o,
  defaultValue: X,
  error: O = !1,
  disabled: x = !1,
  minLength: q = 0,
  maxLength: J,
  tooltip: S,
  autoFocus: b = !1,
  selectOnFocus: Q = !1,
  maxWidth: v,
  minHeight: c,
  maxHeight: u,
  resize: r,
  onValueChange: P,
  onBlur: g,
  onFocus: E,
  onKeyDown: _,
  tabIndex: Y,
  ...V
}, Z) => {
  const h = o !== void 0, [j, K] = y(() => X ?? ""), [W, B] = y(!1), [z, N] = y(!!(o ?? j ?? "")), [tt, D] = y(H), L = T(null), l = T(null), R = T(null), w = T(null);
  M(() => () => {
    const t = w.current;
    t && (window.removeEventListener("pointermove", t.move), window.removeEventListener("pointerup", t.up), window.removeEventListener("pointercancel", t.up), w.current = null);
  }, []), ft(Z, () => L.current, []);
  const G = h ? o ?? "" : j, et = r !== "y";
  U(() => {
    if (r !== "y" || !l.current) return;
    const { minPx: t, maxPx: e } = k(l.current);
    D((p) => $(p, t, e));
  }, [r, c, u]), U(() => {
    const t = R.current, e = l.current;
    if (!t || !e) return;
    if (r === "y") {
      t.style.removeProperty("height");
      return;
    }
    t.style.height = "0px";
    const { minPx: p, maxPx: A } = k(e), I = $(t.scrollHeight, p, A);
    t.style.height = `${I}px`;
  }, [r, u, c, G]), M(() => {
    if (!b) return;
    const t = window.setTimeout(() => {
      var e;
      (e = R.current) == null || e.focus();
    }, 25);
    return () => clearTimeout(t);
  }, [b]), M(() => {
    h && o !== void 0 && N(o.length > 0);
  }, [h, o]);
  const rt = wt("TextArea", void 0, {
    filled: z,
    disabled: x,
    variant: n,
    label: !!a,
    focused: W,
    error: O,
    resizeY: r === "y",
    autoGrow: et
  }), nt = (t) => {
    if (x || r !== "y" || !l.current) return;
    t.preventDefault(), t.stopPropagation();
    const e = l.current, p = t.currentTarget, A = t.clientY, I = e.getBoundingClientRect().height, { minPx: lt, maxPx: pt } = k(e);
    p.setPointerCapture(t.pointerId);
    const C = (F) => {
      const dt = I + (F.clientY - A);
      D($(dt, lt, pt));
    }, m = (F) => {
      window.removeEventListener("pointermove", C), window.removeEventListener("pointerup", m), window.removeEventListener("pointercancel", m), w.current = null;
      try {
        p.releasePointerCapture(F.pointerId);
      } catch {
      }
    };
    w.current = { move: C, up: m }, window.addEventListener("pointermove", C), window.addEventListener("pointerup", m), window.addEventListener("pointercancel", m);
  }, ot = (t) => {
    t.stopPropagation();
    const e = t.currentTarget.value;
    h || K(e), N(e.length > 0), P == null || P({
      event: t,
      value: e
    });
  }, it = (t) => {
    t.stopPropagation(), B(!1), N(t.currentTarget.value.length > 0), g == null || g({
      event: t,
      value: t.currentTarget.value
    });
  }, st = (t) => {
    if (t.stopPropagation(), B(!0), Q) {
      const e = t.currentTarget;
      setTimeout(() => e.select(), 0);
    }
    E == null || E({
      event: t,
      value: t.currentTarget.value
    });
  }, at = (t) => {
    t.stopPropagation(), _ == null || _({
      event: t,
      value: t.currentTarget.value
    }), (t.key === "Escape" || t.key === "Esc") && t.currentTarget.blur();
  }, ct = (t) => {
    t.stopPropagation();
  }, ut = {
    maxWidth: n === "default" ? void 0 : typeof v == "number" ? `${v}px` : v,
    flexShrink: v ? 0 : void 0,
    minHeight: c !== void 0 ? typeof c == "number" ? `${c}px` : c : r === "y" ? `${H}px` : void 0,
    maxHeight: u !== void 0 ? typeof u == "number" ? `${u}px` : u : void 0,
    height: r === "y" ? `${tt}px` : void 0
  };
  return /* @__PURE__ */ i(mt, { children: [
    /* @__PURE__ */ i(
      "div",
      {
        id: d,
        className: [rt, s].join(" ").trim(),
        "data-pui-interactive": "true",
        ref: L,
        ...V,
        children: [
          a && /* @__PURE__ */ i(vt, { className: "TextArea__label", intentModifier: "secondary", size: n === "list" ? "medium" : "small", truncate: !0, children: a }),
          /* @__PURE__ */ i("div", { className: "TextArea__container", style: ut, ref: l, children: [
            /* @__PURE__ */ i(
              "textarea",
              {
                className: "TextArea__textarea-native",
                rows: 1,
                ref: (t) => {
                  R.current = t;
                },
                minLength: q,
                maxLength: J,
                disabled: x,
                ...Y !== void 0 ? { tabIndex: Y } : {},
                placeholder: f,
                value: G,
                onInput: ot,
                onClick: ct,
                onBlur: it,
                onFocus: st,
                onKeyDown: at
              }
            ),
            r === "y" && !x && /* @__PURE__ */ i("div", { className: "TextArea__resizeHandle", "data-pui-interactive": "true", onPointerDown: nt })
          ] })
        ]
      }
    ),
    S && /* @__PURE__ */ i(xt, { anchorRef: L, children: S })
  ] });
}, At = ht(yt);
export {
  At as TextArea
};
