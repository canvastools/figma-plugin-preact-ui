import "./index.es28.css";
import { jsx as at } from "./index.es143.js";
import { createPortal as st } from "preact/compat";
import { useRef as J, useState as j, useMemo as Y, useLayoutEffect as ct, useEffect as H } from "preact/hooks";
/* empty css            */
import { typedForwardRef as lt } from "./index.es145.js";
import { bem as ut } from "./index.es62.js";
const mt = (v, b, t, a, s, B, N, p, u, o, c) => {
  const $ = [B];
  if (N && Array.isArray(N))
    for (const M of N) $.push(M);
  const U = (M, n) => M >= o && n >= o && M + a <= v - o && n + s <= b - o, m = (M, n, r) => Math.max(n, Math.min(r, Math.round(M))), y = (M) => {
    switch (M) {
      case "over": {
        const n = Math.max(o, Math.min(v - a - o, Math.round(t.left + p))), r = Math.max(o, Math.min(b - s - o, Math.round(t.top + u)));
        return {
          coords: { left: n, top: r },
          arrow: { left: 0, top: 0, side: "top" }
        };
      }
      case "top": {
        const n = Math.max(
          o,
          Math.min(v - a - o, Math.round(t.left + t.width / 2 - a / 2 + p))
        ), r = t.top - s - u, l = m(t.left + t.width / 2 - n, c, a - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: l, top: s, side: "top" }
        };
      }
      case "top-left": {
        const n = Math.max(o, Math.min(v - a - o, Math.round(t.left + p))), r = t.top - s - u, l = m(t.left - n + t.width / 2, c, a - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: l, top: s, side: "top" }
        };
      }
      case "top-right": {
        const n = Math.max(o, Math.min(v - a - o, Math.round(t.right - a - p))), r = t.top - s - u, l = m(t.left - n + t.width / 2, c, a - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: l, top: s, side: "top" }
        };
      }
      case "bottom": {
        const n = Math.max(
          o,
          Math.min(v - a - o, Math.round(t.left + t.width / 2 - a / 2 + p))
        ), r = t.bottom + u, l = m(t.left - n + t.width / 2, c, a - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: l, top: 0, side: "bottom" }
        };
      }
      case "bottom-left": {
        const n = Math.max(o, Math.min(v - a - o, Math.round(t.left + p))), r = t.bottom + u, l = m(t.left - n + t.width / 2, c, a - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: l, top: 0, side: "bottom" }
        };
      }
      case "bottom-right": {
        const n = Math.max(o, Math.min(v - a - o, Math.round(t.right - a - p))), r = t.bottom + u, l = m(t.left - n + t.width / 2, c, a - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: l, top: 0, side: "bottom" }
        };
      }
      case "left": {
        const n = t.left - a - p, r = Math.max(
          o,
          Math.min(b - s - o, Math.round(t.top + t.height / 2 - s / 2 + u))
        ), l = m(t.top - r + t.height / 2, c, s - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: a, top: l, side: "left" }
        };
      }
      case "left-top": {
        const n = t.left - a - p, r = Math.max(o, Math.min(b - s - o, Math.round(t.top + u))), l = m(t.top - r + t.height / 2, c, s - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: a, top: l, side: "left" }
        };
      }
      case "left-bottom": {
        const n = t.left - a - p, r = Math.max(o, Math.min(b - s - o, Math.round(t.bottom - s - u))), l = m(t.top - r + t.height / 2, c, s - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: a, top: l, side: "left" }
        };
      }
      case "right": {
        const n = t.right + p, r = Math.max(
          o,
          Math.min(b - s - o, Math.round(t.top + t.height / 2 - s / 2 + u))
        ), l = m(t.top - r + t.height / 2, c, s - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: 0, top: l, side: "right" }
        };
      }
      case "right-top": {
        const n = t.right + p, r = Math.max(o, Math.min(b - s - o, Math.round(t.top + u))), l = m(t.top - r + t.height / 2, c / 2, s - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: 0, top: l, side: "right" }
        };
      }
      case "right-bottom": {
        const n = t.right + p, r = Math.max(o, Math.min(b - s - o, Math.round(t.bottom - s - u))), l = m(t.top - r + t.height / 2, c, s - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: 0, top: l, side: "right" }
        };
      }
      default: {
        const n = Math.max(o, Math.min(v - a - o, Math.round(t.left + t.width / 2 - a / 2))), r = t.bottom + u, l = m(t.left - n + t.width / 2, c, a - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: l, top: s, side: "bottom" }
        };
      }
    }
  };
  for (const M of $) {
    const n = y(M);
    if (!N || U(n.coords.left, n.coords.top)) {
      const r = Math.max(o, Math.min(v - a - o, Math.round(n.coords.left))), l = Math.max(o, Math.min(b - s - o, Math.round(n.coords.top)));
      return { coords: { left: r, top: l }, arrow: n.arrow, placement: M };
    }
  }
  const k = y($[0]);
  return {
    coords: {
      left: Math.max(o, Math.min(v - a - o, Math.round(k.coords.left))),
      top: Math.max(o, Math.min(b - s - o, Math.round(k.coords.top)))
    },
    arrow: k.arrow,
    placement: $[0]
  };
}, pt = ({
  id: v,
  className: b,
  anchorRef: t,
  placement: a = "bottom",
  placementFallback: s,
  offsetX: B = 0,
  offsetY: N = 0,
  offsetEdge: p = 0,
  trigger: u = "click",
  draggable: o = !1,
  open: c,
  defaultOpen: $ = !1,
  closeOnClickOutside: U = !0,
  onOpen: m,
  onClose: y,
  children: k
}, M) => {
  const n = J(null), [r, l] = j({ top: 0, left: 0 }), [K, Q] = j(!1), [D, g] = j(null), [A, V] = j(null), [E, W] = j($), f = typeof c == "boolean", L = f ? c : E, [z, S] = j(a), I = J(null), Z = Y(
    () => s && Array.isArray(s) ? s : void 0,
    [s]
  ), O = Y(
    () => () => {
      var T;
      const i = window.innerWidth, d = window.innerHeight, e = t.current;
      if (!e) return;
      const w = e.getBoundingClientRect(), h = (T = n.current) == null ? void 0 : T.getBoundingClientRect(), x = Math.round((h == null ? void 0 : h.width) || 0), R = Math.round((h == null ? void 0 : h.height) || 0);
      if (!x || !R) {
        I.current != null && cancelAnimationFrame(I.current), I.current = requestAnimationFrame(() => {
          I.current = null, O();
        });
        return;
      }
      const P = mt(i, d, w, x, R, a, Z, B, N, p, 8);
      l(P.coords), g(P.arrow), S(P.placement), Q(!0);
    },
    [t, a, B, N, p, Z]
  );
  ct(() => {
    L && (Q(!1), O());
  }, [L, O]), H(() => {
    L || V(null);
  }, [L]), H(() => {
    if (!L) return;
    const i = () => O();
    window.addEventListener("resize", i), window.addEventListener("scroll", i, !0);
    const d = n.current;
    let e = null;
    if (d)
      try {
        e = new ResizeObserver(() => O()), e.observe(d);
      } catch {
      }
    return () => {
      window.removeEventListener("resize", i), window.removeEventListener("scroll", i, !0), e && e.disconnect(), I.current != null && (cancelAnimationFrame(I.current), I.current = null);
    };
  }, [L, O]);
  const q = J(!1);
  H(() => {
    if (L && !q.current)
      q.current = !0, m == null || m();
    else if (!L && q.current) {
      if (q.current = !1, f) return;
      y == null || y();
    }
  }, [f, L, y, m]), H(() => {
    if (!L || !U) return;
    const i = (d) => {
      var F;
      const e = d.target, w = n.current, h = t.current;
      if (!w || !e || !h) return;
      const x = document.activeElement;
      if (x && x !== e) {
        const G = x.contains(e) || x === e, it = x.tagName === "INPUT" || x.tagName === "TEXTAREA" || x.isContentEditable;
        !G && it && x.blur();
      }
      const R = w.contains(e), P = h.contains(e);
      if (R || P || (F = e.closest) != null && F.call(e, "[data-overlay-keep-open]")) return;
      const T = e != null && e.closest ? e.closest(".OverlayPositioner") : null;
      T && !T.contains(h) || (f ? y == null || y() : W(!1));
    };
    return window.addEventListener("mousedown", i, !0), () => window.removeEventListener("mousedown", i, !0);
  }, [L, U, t, f, y]), H(() => {
    if (f) return;
    const i = t.current;
    if (i) {
      if (u === "click") {
        const d = (e) => {
          e.preventDefault(), W((w) => !w);
        };
        return i.addEventListener("click", d), () => i.removeEventListener("click", d);
      }
      if (u === "hover") {
        const d = () => {
          W(!0);
        }, e = () => {
          W(!1);
        };
        return i.addEventListener("mouseenter", d), i.addEventListener("mouseleave", e), () => {
          i.removeEventListener("mouseenter", d), i.removeEventListener("mouseleave", e);
        };
      }
    }
  }, [f, u, t]);
  const C = (A ? A.top : r.top) || 0, tt = (A ? A.left : r.left) || 0, _ = {
    top: `${C}px`,
    left: `${tt}px`,
    visibility: K ? "visible" : "hidden",
    pointerEvents: K ? void 0 : "none"
  };
  D && (_["--overlay-arrow-left"] = `${D.left}px`, _["--overlay-arrow-top"] = `${D.top}px`);
  const X = typeof window < "u" ? Math.max(window.innerHeight - C - p, 100) : void 0;
  X != null && (_["--overlay-available-height"] = `${X}px`);
  const nt = ut("OverlayPositioner", void 0, {
    placement: z
  });
  if (!L) return null;
  const ot = (i) => {
    if (!i) return !1;
    const d = n.current;
    let e = i;
    const w = [
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
    if (i.closest && i.closest(w))
      return !0;
    for (; e && d && e !== d; ) {
      const h = e.getAttribute && e.getAttribute("tabindex");
      if (h != null && h !== "" && !Number.isNaN(Number(h)) && Number(h) >= 0)
        return !0;
      e = e.parentElement;
    }
    return !1;
  }, rt = (i) => {
    if (!o || i.button !== 0) return;
    const d = i.target;
    if (ot(d)) return;
    i.preventDefault();
    const e = A ? A.left : r.left, w = A ? A.top : r.top, h = i.clientX, x = i.clientY, R = (T) => {
      const F = T.clientX - h, G = T.clientY - x;
      V({ left: e + F, top: w + G });
    }, P = () => {
      window.removeEventListener("mousemove", R), window.removeEventListener("mouseup", P);
    };
    window.addEventListener("mousemove", R), window.addEventListener("mouseup", P);
  }, et = /* @__PURE__ */ at(
    "div",
    {
      id: v,
      className: [nt, b].join(" ").trim(),
      ref: (i) => {
        n.current = i, typeof M == "function" ? M(i) : M && (M.current = i);
      },
      style: _,
      "data-arrow-side": D == null ? void 0 : D.side,
      onMouseDown: (i) => rt(i),
      children: k
    }
  );
  return st(et, document.body);
}, Lt = lt(pt);
export {
  Lt as OverlayPositioner
};
