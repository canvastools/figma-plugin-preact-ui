import "./index.es28.css";
import { jsx as it } from "./index.es129.js";
import { createPortal as at } from "preact/compat";
import { useRef as J, useState as j, useMemo as g, useLayoutEffect as st, useEffect as k } from "preact/hooks";
/* empty css            */
import { typedForwardRef as ct } from "./index.es131.js";
import { bem as lt } from "./index.es62.js";
const ut = (v, b, t, i, a, B, N, p, u, o, c) => {
  const $ = [B];
  if (N && Array.isArray(N))
    for (const M of N) $.push(M);
  const U = (M, n) => M >= o && n >= o && M + i <= v - o && n + a <= b - o, m = (M, n, r) => Math.max(n, Math.min(r, Math.round(M))), y = (M) => {
    switch (M) {
      case "over": {
        const n = Math.max(o, Math.min(v - i - o, Math.round(t.left + p))), r = Math.max(o, Math.min(b - a - o, Math.round(t.top + u)));
        return {
          coords: { left: n, top: r },
          arrow: { left: 0, top: 0, side: "top" }
        };
      }
      case "top": {
        const n = Math.max(
          o,
          Math.min(v - i - o, Math.round(t.left + t.width / 2 - i / 2 + p))
        ), r = t.top - a - u, l = m(t.left + t.width / 2 - n, c, i - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: l, top: a, side: "top" }
        };
      }
      case "top-left": {
        const n = Math.max(o, Math.min(v - i - o, Math.round(t.left + p))), r = t.top - a - u, l = m(t.left - n + t.width / 2, c, i - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: l, top: a, side: "top" }
        };
      }
      case "top-right": {
        const n = Math.max(o, Math.min(v - i - o, Math.round(t.right - i - p))), r = t.top - a - u, l = m(t.left - n + t.width / 2, c, i - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: l, top: a, side: "top" }
        };
      }
      case "bottom": {
        const n = Math.max(
          o,
          Math.min(v - i - o, Math.round(t.left + t.width / 2 - i / 2 + p))
        ), r = t.bottom + u, l = m(t.left - n + t.width / 2, c, i - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: l, top: 0, side: "bottom" }
        };
      }
      case "bottom-left": {
        const n = Math.max(o, Math.min(v - i - o, Math.round(t.left + p))), r = t.bottom + u, l = m(t.left - n + t.width / 2, c, i - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: l, top: 0, side: "bottom" }
        };
      }
      case "bottom-right": {
        const n = Math.max(o, Math.min(v - i - o, Math.round(t.right - i - p))), r = t.bottom + u, l = m(t.left - n + t.width / 2, c, i - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: l, top: 0, side: "bottom" }
        };
      }
      case "left": {
        const n = t.left - i - p, r = Math.max(
          o,
          Math.min(b - a - o, Math.round(t.top + t.height / 2 - a / 2 + u))
        ), l = m(t.top - r + t.height / 2, c, a - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: i, top: l, side: "left" }
        };
      }
      case "left-top": {
        const n = t.left - i - p, r = Math.max(o, Math.min(b - a - o, Math.round(t.top + u))), l = m(t.top - r + t.height / 2, c, a - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: i, top: l, side: "left" }
        };
      }
      case "left-bottom": {
        const n = t.left - i - p, r = Math.max(o, Math.min(b - a - o, Math.round(t.bottom - a - u))), l = m(t.top - r + t.height / 2, c, a - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: i, top: l, side: "left" }
        };
      }
      case "right": {
        const n = t.right + p, r = Math.max(
          o,
          Math.min(b - a - o, Math.round(t.top + t.height / 2 - a / 2 + u))
        ), l = m(t.top - r + t.height / 2, c, a - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: 0, top: l, side: "right" }
        };
      }
      case "right-top": {
        const n = t.right + p, r = Math.max(o, Math.min(b - a - o, Math.round(t.top + u))), l = m(t.top - r + t.height / 2, c / 2, a - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: 0, top: l, side: "right" }
        };
      }
      case "right-bottom": {
        const n = t.right + p, r = Math.max(o, Math.min(b - a - o, Math.round(t.bottom - a - u))), l = m(t.top - r + t.height / 2, c, a - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: 0, top: l, side: "right" }
        };
      }
      default: {
        const n = Math.max(o, Math.min(v - i - o, Math.round(t.left + t.width / 2 - i / 2))), r = t.bottom + u, l = m(t.left - n + t.width / 2, c, i - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: l, top: a, side: "bottom" }
        };
      }
    }
  };
  for (const M of $) {
    const n = y(M);
    if (!N || U(n.coords.left, n.coords.top)) {
      const r = Math.max(o, Math.min(v - i - o, Math.round(n.coords.left))), l = Math.max(o, Math.min(b - a - o, Math.round(n.coords.top)));
      return { coords: { left: r, top: l }, arrow: n.arrow, placement: M };
    }
  }
  const H = y($[0]);
  return {
    coords: {
      left: Math.max(o, Math.min(v - i - o, Math.round(H.coords.left))),
      top: Math.max(o, Math.min(b - a - o, Math.round(H.coords.top)))
    },
    arrow: H.arrow,
    placement: $[0]
  };
}, mt = ({
  id: v,
  className: b,
  anchorRef: t,
  placement: i = "bottom",
  placementFallback: a,
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
  children: H
}, M) => {
  const n = J(null), [r, l] = j({ top: 0, left: 0 }), [K, Q] = j(!1), [D, Y] = j(null), [A, V] = j(null), [E, W] = j($), f = typeof c == "boolean", L = f ? c : E, [z, S] = j(i), I = J(null), Z = g(
    () => a && Array.isArray(a) ? a : void 0,
    [a]
  ), O = g(
    () => () => {
      var T;
      const e = window.innerWidth, d = window.innerHeight, s = t.current;
      if (!s) return;
      const w = s.getBoundingClientRect(), h = (T = n.current) == null ? void 0 : T.getBoundingClientRect(), x = Math.round((h == null ? void 0 : h.width) || 0), R = Math.round((h == null ? void 0 : h.height) || 0);
      if (!x || !R) {
        I.current != null && cancelAnimationFrame(I.current), I.current = requestAnimationFrame(() => {
          I.current = null, O();
        });
        return;
      }
      const P = ut(e, d, w, x, R, i, Z, B, N, p, 8);
      l(P.coords), Y(P.arrow), S(P.placement), Q(!0);
    },
    [t, i, B, N, p, Z]
  );
  st(() => {
    L && (Q(!1), O());
  }, [L, O]), k(() => {
    L || V(null);
  }, [L]), k(() => {
    if (!L) return;
    const e = () => O();
    window.addEventListener("resize", e), window.addEventListener("scroll", e, !0);
    const d = n.current;
    let s = null;
    if (d)
      try {
        s = new ResizeObserver(() => O()), s.observe(d);
      } catch {
      }
    return () => {
      window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0), s && s.disconnect(), I.current != null && (cancelAnimationFrame(I.current), I.current = null);
    };
  }, [L, O]);
  const q = J(!1);
  k(() => {
    if (L && !q.current)
      q.current = !0, m == null || m();
    else if (!L && q.current) {
      if (q.current = !1, f) return;
      y == null || y();
    }
  }, [f, L, y, m]), k(() => {
    if (!L || !U) return;
    const e = (d) => {
      const s = d.target, w = n.current, h = t.current;
      if (!w || !s || !h) return;
      const x = document.activeElement;
      if (x && x !== s) {
        const F = x.contains(s) || x === s, G = x.tagName === "INPUT" || x.tagName === "TEXTAREA" || x.isContentEditable;
        !F && G && x.blur();
      }
      const R = w.contains(s), P = h.contains(s);
      if (R || P) return;
      const T = s != null && s.closest ? s.closest(".OverlayPositioner") : null;
      T && !T.contains(h) || (f ? y == null || y() : W(!1));
    };
    return window.addEventListener("mousedown", e, !0), () => window.removeEventListener("mousedown", e, !0);
  }, [L, U, t, f, y]), k(() => {
    if (f) return;
    const e = t.current;
    if (e) {
      if (u === "click") {
        const d = (s) => {
          s.preventDefault(), W((w) => !w);
        };
        return e.addEventListener("click", d), () => e.removeEventListener("click", d);
      }
      if (u === "hover") {
        const d = () => {
          W(!0);
        }, s = () => {
          W(!1);
        };
        return e.addEventListener("mouseenter", d), e.addEventListener("mouseleave", s), () => {
          e.removeEventListener("mouseenter", d), e.removeEventListener("mouseleave", s);
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
  const nt = lt("OverlayPositioner", void 0, {
    placement: z
  });
  if (!L) return null;
  const ot = (e) => {
    if (!e) return !1;
    const d = n.current;
    let s = e;
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
    if (e.closest && e.closest(w))
      return !0;
    for (; s && d && s !== d; ) {
      const h = s.getAttribute && s.getAttribute("tabindex");
      if (h != null && h !== "" && !Number.isNaN(Number(h)) && Number(h) >= 0)
        return !0;
      s = s.parentElement;
    }
    return !1;
  }, rt = (e) => {
    if (!o || e.button !== 0) return;
    const d = e.target;
    if (ot(d)) return;
    e.preventDefault();
    const s = A ? A.left : r.left, w = A ? A.top : r.top, h = e.clientX, x = e.clientY, R = (T) => {
      const F = T.clientX - h, G = T.clientY - x;
      V({ left: s + F, top: w + G });
    }, P = () => {
      window.removeEventListener("mousemove", R), window.removeEventListener("mouseup", P);
    };
    window.addEventListener("mousemove", R), window.addEventListener("mouseup", P);
  }, et = /* @__PURE__ */ it(
    "div",
    {
      id: v,
      className: [nt, b].join(" ").trim(),
      ref: (e) => {
        n.current = e, typeof M == "function" ? M(e) : M && (M.current = e);
      },
      style: _,
      "data-arrow-side": D == null ? void 0 : D.side,
      onMouseDown: (e) => rt(e),
      children: H
    }
  );
  return at(et, document.body);
}, bt = ct(mt);
export {
  bt as OverlayPositioner
};
