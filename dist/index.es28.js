import "./index.es28.css";
import { jsx as ht } from "./index.es178.js";
import { createPortal as Mt } from "preact/compat";
import { useRef as Z, useState as B, useMemo as vt, useCallback as rt, useLayoutEffect as bt, useEffect as U } from "preact/hooks";
/* empty css            */
import { typedForwardRef as xt } from "./index.es180.js";
import { bem as Lt } from "./index.es63.js";
const yt = (x, L, t, i, c, W, T, M, h, o, l) => {
  const $ = [W];
  if (T && Array.isArray(T))
    for (const p of T) $.push(p);
  const _ = (p, n) => p >= o && n >= o && p + i <= x - o && n + c <= L - o, v = (p, n, r) => Math.max(n, Math.min(r, Math.round(p))), F = (p) => {
    switch (p) {
      case "over": {
        const n = Math.max(o, Math.min(x - i - o, Math.round(t.left + M))), r = Math.max(o, Math.min(L - c - o, Math.round(t.top + h)));
        return {
          coords: { left: n, top: r },
          arrow: { left: 0, top: 0, side: "top" }
        };
      }
      case "top": {
        const n = Math.max(
          o,
          Math.min(x - i - o, Math.round(t.left + t.width / 2 - i / 2 + M))
        ), r = t.top - c - h, a = v(t.left + t.width / 2 - n, l, i - l);
        return {
          coords: { left: n, top: r },
          arrow: { left: a, top: c, side: "top" }
        };
      }
      case "top-left": {
        const n = Math.max(o, Math.min(x - i - o, Math.round(t.left + M))), r = t.top - c - h, a = v(t.left - n + t.width / 2, l, i - l);
        return {
          coords: { left: n, top: r },
          arrow: { left: a, top: c, side: "top" }
        };
      }
      case "top-right": {
        const n = Math.max(o, Math.min(x - i - o, Math.round(t.right - i - M))), r = t.top - c - h, a = v(t.left - n + t.width / 2, l, i - l);
        return {
          coords: { left: n, top: r },
          arrow: { left: a, top: c, side: "top" }
        };
      }
      case "bottom": {
        const n = Math.max(
          o,
          Math.min(x - i - o, Math.round(t.left + t.width / 2 - i / 2 + M))
        ), r = t.bottom + h, a = v(t.left - n + t.width / 2, l, i - l);
        return {
          coords: { left: n, top: r },
          arrow: { left: a, top: 0, side: "bottom" }
        };
      }
      case "bottom-left": {
        const n = Math.max(o, Math.min(x - i - o, Math.round(t.left + M))), r = t.bottom + h, a = v(t.left - n + t.width / 2, l, i - l);
        return {
          coords: { left: n, top: r },
          arrow: { left: a, top: 0, side: "bottom" }
        };
      }
      case "bottom-right": {
        const n = Math.max(o, Math.min(x - i - o, Math.round(t.right - i - M))), r = t.bottom + h, a = v(t.left - n + t.width / 2, l, i - l);
        return {
          coords: { left: n, top: r },
          arrow: { left: a, top: 0, side: "bottom" }
        };
      }
      case "left": {
        const n = t.left - i - M, r = Math.max(
          o,
          Math.min(L - c - o, Math.round(t.top + t.height / 2 - c / 2 + h))
        ), a = v(t.top - r + t.height / 2, l, c - l);
        return {
          coords: { left: n, top: r },
          arrow: { left: i, top: a, side: "left" }
        };
      }
      case "left-top": {
        const n = t.left - i - M, r = Math.max(o, Math.min(L - c - o, Math.round(t.top + h))), a = v(t.top - r + t.height / 2, l, c - l);
        return {
          coords: { left: n, top: r },
          arrow: { left: i, top: a, side: "left" }
        };
      }
      case "left-bottom": {
        const n = t.left - i - M, r = Math.max(o, Math.min(L - c - o, Math.round(t.bottom - c - h))), a = v(t.top - r + t.height / 2, l, c - l);
        return {
          coords: { left: n, top: r },
          arrow: { left: i, top: a, side: "left" }
        };
      }
      case "right": {
        const n = t.right + M, r = Math.max(
          o,
          Math.min(L - c - o, Math.round(t.top + t.height / 2 - c / 2 + h))
        ), a = v(t.top - r + t.height / 2, l, c - l);
        return {
          coords: { left: n, top: r },
          arrow: { left: 0, top: a, side: "right" }
        };
      }
      case "right-top": {
        const n = t.right + M, r = Math.max(o, Math.min(L - c - o, Math.round(t.top + h))), a = v(t.top - r + t.height / 2, l / 2, c - l);
        return {
          coords: { left: n, top: r },
          arrow: { left: 0, top: a, side: "right" }
        };
      }
      case "right-bottom": {
        const n = t.right + M, r = Math.max(o, Math.min(L - c - o, Math.round(t.bottom - c - h))), a = v(t.top - r + t.height / 2, l, c - l);
        return {
          coords: { left: n, top: r },
          arrow: { left: 0, top: a, side: "right" }
        };
      }
      default: {
        const n = Math.max(o, Math.min(x - i - o, Math.round(t.left + t.width / 2 - i / 2))), r = t.bottom + h, a = v(t.left - n + t.width / 2, l, i - l);
        return {
          coords: { left: n, top: r },
          arrow: { left: a, top: c, side: "bottom" }
        };
      }
    }
  };
  for (const p of $) {
    const n = F(p);
    if (!T || _(n.coords.left, n.coords.top)) {
      const r = Math.max(o, Math.min(x - i - o, Math.round(n.coords.left))), a = Math.max(o, Math.min(L - c - o, Math.round(n.coords.top)));
      return { coords: { left: r, top: a }, arrow: n.arrow, placement: p };
    }
  }
  const w = F($[0]);
  return {
    coords: {
      left: Math.max(o, Math.min(x - i - o, Math.round(w.coords.left))),
      top: Math.max(o, Math.min(L - c - o, Math.round(w.coords.top)))
    },
    arrow: w.arrow,
    placement: $[0]
  };
}, ft = ({
  id: x,
  className: L,
  anchorRef: t,
  placement: i = "bottom",
  placementFallback: c,
  offsetX: W = 0,
  offsetY: T = 0,
  offsetEdge: M = 0,
  trigger: h = "click",
  draggable: o = !1,
  open: l,
  defaultOpen: $ = !1,
  closeOnClickOutside: _ = !0,
  autoReposition: v = !1,
  constrainHeight: F = !1,
  onOpen: w,
  onClose: p,
  children: n
}, r) => {
  const a = Z(null), [G, et] = B({ top: 0, left: 0 }), [X, Y] = B(!1), [k, it] = B(null), [A, C] = B(null), [at, J] = B($), N = typeof l == "boolean", y = N ? l : at, [st, ct] = B(i), R = Z(null), K = Z(!1), E = vt(
    () => c && Array.isArray(c) ? c : void 0,
    [c]
  ), D = rt(() => {
    const e = window.innerWidth, d = window.innerHeight, s = t.current;
    if (!s) return;
    const b = s.getBoundingClientRect(), m = a.current, u = m == null ? void 0 : m.getBoundingClientRect(), I = Math.round((u == null ? void 0 : u.width) || 0);
    let P = Math.round((u == null ? void 0 : u.height) || 0);
    if (!I || !P) {
      R.current != null && cancelAnimationFrame(R.current), R.current = requestAnimationFrame(() => {
        R.current = null, D();
      });
      return;
    }
    if (F && m) {
      const O = (j, nt) => {
        let q = j.scrollHeight - j.clientHeight;
        if (q < 0 && (q = 0), nt >= 6) return q;
        for (let g = 0; g < j.children.length; g++) {
          const ot = O(j.children[g], nt + 1);
          ot > q && (q = ot);
        }
        return q;
      }, H = O(m, 0);
      H > 1 && (P += H);
    }
    const f = yt(e, d, b, I, P, i, E, W, T, M, 8);
    et(f.coords), it(f.arrow), ct(f.placement), Y(!0);
  }, [t, i, W, T, M, E, F]), z = rt(() => {
    C(null), D();
  }, [D]);
  bt(() => {
    y && (Y(!1), D());
  }, [y, D]), U(() => {
    y || C(null);
  }, [y]), U(() => {
    if (!y) return;
    const e = () => D();
    window.addEventListener("resize", e), window.addEventListener("scroll", e, !0);
    let d = null;
    const s = () => {
      K.current || d == null && (d = requestAnimationFrame(() => {
        d = null, K.current || z();
      }));
    }, b = a.current;
    let m = null, u = null;
    if (v && b) {
      try {
        m = new ResizeObserver(s), m.observe(b);
      } catch {
      }
      try {
        u = new MutationObserver(s), u.observe(b, { childList: !0, subtree: !0, characterData: !0 });
      } catch {
      }
    }
    return () => {
      window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0), m && m.disconnect(), u && u.disconnect(), d != null && cancelAnimationFrame(d), R.current != null && (cancelAnimationFrame(R.current), R.current = null);
    };
  }, [y, D, v, z]);
  const Q = Z(!1);
  U(() => {
    if (y && !Q.current)
      Q.current = !0, w == null || w();
    else if (!y && Q.current) {
      if (Q.current = !1, N) return;
      p == null || p();
    }
  }, [N, y, p, w]), U(() => {
    if (!y || !_) return;
    const e = (d) => {
      var O;
      const s = d.target, b = a.current, m = t.current;
      if (!b || !s || !m) return;
      const u = document.activeElement;
      if (u && u !== s) {
        const H = u.contains(s) || u === s, j = u.tagName === "INPUT" || u.tagName === "TEXTAREA" || u.isContentEditable;
        !H && j && u.blur();
      }
      const I = b.contains(s), P = m.contains(s);
      if (I || P || (O = s.closest) != null && O.call(s, "[data-overlay-keep-open]")) return;
      const f = s != null && s.closest ? s.closest(".OverlayPositioner") : null;
      f && !f.contains(m) || (N ? p == null || p() : J(!1));
    };
    return window.addEventListener("mousedown", e, !0), () => window.removeEventListener("mousedown", e, !0);
  }, [y, _, t, N, p]), U(() => {
    if (N) return;
    const e = t.current;
    if (e) {
      if (h === "click") {
        const d = (s) => {
          s.preventDefault(), J((b) => !b);
        };
        return e.addEventListener("click", d), () => e.removeEventListener("click", d);
      }
      if (h === "hover") {
        const d = () => {
          J(!0);
        }, s = () => {
          J(!1);
        };
        return e.addEventListener("mouseenter", d), e.addEventListener("mouseleave", s), () => {
          e.removeEventListener("mouseenter", d), e.removeEventListener("mouseleave", s);
        };
      }
    }
  }, [N, h, t]);
  const S = (A ? A.top : G.top) || 0, lt = (A ? A.left : G.left) || 0, V = {
    top: `${S}px`,
    left: `${lt}px`,
    visibility: X ? "visible" : "hidden",
    pointerEvents: X ? void 0 : "none"
  };
  k && (V["--overlay-arrow-left"] = `${k.left}px`, V["--overlay-arrow-top"] = `${k.top}px`);
  const tt = typeof window < "u" ? Math.max(window.innerHeight - S - M, 100) : void 0;
  tt != null && (V["--overlay-available-height"] = `${tt}px`);
  const ut = Lt("OverlayPositioner", void 0, {
    placement: st
  });
  if (!y) return null;
  const mt = (e) => {
    if (!e) return !1;
    const d = a.current;
    let s = e;
    const b = [
      "button",
      "input",
      "select",
      "textarea",
      "a[href]",
      "canvas",
      "video",
      "audio",
      "[data-pui-interactive='true']"
    ].join(",");
    if (e.closest && e.closest(b))
      return !0;
    for (; s && d && s !== d; ) {
      const m = s.getAttribute && s.getAttribute("tabindex");
      if (m != null && m !== "" && !Number.isNaN(Number(m)) && Number(m) >= 0)
        return !0;
      s = s.parentElement;
    }
    return !1;
  }, pt = (e) => {
    if (!o || e.button !== 0) return;
    const d = e.target;
    if (mt(d)) return;
    e.preventDefault(), K.current = !0;
    const s = A ? A.left : G.left, b = A ? A.top : G.top, m = e.clientX, u = e.clientY, I = (f) => {
      const O = f.clientX - m, H = f.clientY - u;
      C({ left: s + O, top: b + H });
    }, P = () => {
      K.current = !1, window.removeEventListener("mousemove", I), window.removeEventListener("mouseup", P);
    };
    window.addEventListener("mousemove", I), window.addEventListener("mouseup", P);
  }, dt = /* @__PURE__ */ ht(
    "div",
    {
      id: x,
      className: [ut, L].join(" ").trim(),
      ref: (e) => {
        a.current = e, typeof r == "function" ? r(e) : r && (r.current = e);
      },
      style: V,
      "data-arrow-side": k == null ? void 0 : k.side,
      onMouseDown: (e) => pt(e),
      children: n
    }
  );
  return Mt(dt, document.body);
}, Dt = xt(ft);
export {
  Dt as OverlayPositioner
};
