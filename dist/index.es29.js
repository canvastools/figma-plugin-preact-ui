import "./index.es29.css";
import { jsx as Mt } from "./index.es203.js";
import { createPortal as vt } from "preact/compat";
import { useRef as F, useState as U, useEffect as _, useMemo as wt, useCallback as X, useLayoutEffect as xt } from "preact/hooks";
/* empty css            */
import { typedForwardRef as ft } from "./index.es205.js";
import { useRefElement as bt } from "./index.es233.js";
import { bem as Lt } from "./index.es65.js";
const g = (M, x) => {
  let t = M.scrollHeight - M.clientHeight;
  if (t < 0 && (t = 0), x >= 6) return t;
  for (let i = 0; i < M.children.length; i++) {
    const l = g(M.children[i], x + 1);
    l > t && (t = l);
  }
  return t;
}, yt = (M, x, t, i, l, J, I, h, v, o, c, y = l) => {
  const O = [J];
  if (I && Array.isArray(I))
    for (const b of I) O.push(b);
  const K = (b, n) => b >= o && n >= o && b + i <= M - o && n + l <= x - o, w = (b, n, r) => Math.max(n, Math.min(r, Math.round(b))), $ = (b) => {
    switch (b) {
      case "over": {
        const n = Math.max(o, Math.min(M - i - o, Math.round(t.left + h))), r = Math.max(o, Math.min(x - l - o, Math.round(t.top + v)));
        return {
          coords: { left: n, top: r },
          arrow: { left: 0, top: 0, side: "top" }
        };
      }
      case "top": {
        const n = Math.max(
          o,
          Math.min(M - i - o, Math.round(t.left + t.width / 2 - i / 2 + h))
        ), r = t.top - l - v, s = w(t.left + t.width / 2 - n, c, i - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: s, top: y, side: "top" }
        };
      }
      case "top-left": {
        const n = Math.max(o, Math.min(M - i - o, Math.round(t.left + h))), r = t.top - l - v, s = w(t.left - n + t.width / 2, c, i - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: s, top: y, side: "top" }
        };
      }
      case "top-right": {
        const n = Math.max(o, Math.min(M - i - o, Math.round(t.right - i - h))), r = t.top - l - v, s = w(t.left - n + t.width / 2, c, i - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: s, top: y, side: "top" }
        };
      }
      case "bottom": {
        const n = Math.max(
          o,
          Math.min(M - i - o, Math.round(t.left + t.width / 2 - i / 2 + h))
        ), r = t.bottom + v, s = w(t.left - n + t.width / 2, c, i - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: s, top: 0, side: "bottom" }
        };
      }
      case "bottom-left": {
        const n = Math.max(o, Math.min(M - i - o, Math.round(t.left + h))), r = t.bottom + v, s = w(t.left - n + t.width / 2, c, i - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: s, top: 0, side: "bottom" }
        };
      }
      case "bottom-right": {
        const n = Math.max(o, Math.min(M - i - o, Math.round(t.right - i - h))), r = t.bottom + v, s = w(t.left - n + t.width / 2, c, i - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: s, top: 0, side: "bottom" }
        };
      }
      case "left": {
        const n = t.left - i - h, r = Math.max(
          o,
          Math.min(x - l - o, Math.round(t.top + t.height / 2 - l / 2 + v))
        ), s = w(t.top - r + t.height / 2, c, y - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: i, top: s, side: "left" }
        };
      }
      case "left-top": {
        const n = t.left - i - h, r = Math.max(o, Math.min(x - l - o, Math.round(t.top + v))), s = w(t.top - r + t.height / 2, c, y - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: i, top: s, side: "left" }
        };
      }
      case "left-bottom": {
        const n = t.left - i - h, r = Math.max(o, Math.min(x - l - o, Math.round(t.bottom - l - v))), s = w(t.top - r + t.height / 2, c, y - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: i, top: s, side: "left" }
        };
      }
      case "right": {
        const n = t.right + h, r = Math.max(
          o,
          Math.min(x - l - o, Math.round(t.top + t.height / 2 - l / 2 + v))
        ), s = w(t.top - r + t.height / 2, c, y - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: 0, top: s, side: "right" }
        };
      }
      case "right-top": {
        const n = t.right + h, r = Math.max(o, Math.min(x - l - o, Math.round(t.top + v))), s = w(t.top - r + t.height / 2, c, y - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: 0, top: s, side: "right" }
        };
      }
      case "right-bottom": {
        const n = t.right + h, r = Math.max(o, Math.min(x - l - o, Math.round(t.bottom - l - v))), s = w(t.top - r + t.height / 2, c, y - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: 0, top: s, side: "right" }
        };
      }
      default: {
        const n = Math.max(o, Math.min(M - i - o, Math.round(t.left + t.width / 2 - i / 2))), r = t.bottom + v, s = w(t.left - n + t.width / 2, c, i - c);
        return {
          coords: { left: n, top: r },
          arrow: { left: s, top: y, side: "bottom" }
        };
      }
    }
  };
  for (const b of O) {
    const n = $(b);
    if (!I || K(n.coords.left, n.coords.top)) {
      const r = Math.max(o, Math.min(M - i - o, Math.round(n.coords.left))), s = Math.max(o, Math.min(x - l - o, Math.round(n.coords.top)));
      return { coords: { left: r, top: s }, arrow: n.arrow, placement: b };
    }
  }
  const A = $(O[0]);
  return {
    coords: {
      left: Math.max(o, Math.min(M - i - o, Math.round(A.coords.left))),
      top: Math.max(o, Math.min(x - l - o, Math.round(A.coords.top)))
    },
    arrow: A.arrow,
    placement: O[0]
  };
}, At = ({
  id: M,
  className: x,
  anchorRef: t,
  placement: i = "bottom",
  placementFallback: l,
  offsetX: J = 0,
  offsetY: I = 0,
  offsetEdge: h = 0,
  trigger: v = "click",
  draggable: o = !1,
  open: c,
  defaultOpen: y = !1,
  closeOnClickOutside: O = !0,
  autoReposition: K = !1,
  constrainHeight: w = !1,
  onOpen: $,
  onClose: A,
  children: b
}, n) => {
  const r = F(null), [s, et] = U({ top: 0, left: 0 }), [Y, E] = U(!1), [B, it] = U(null), [T, Q] = U(null), [at, V] = U(y), k = typeof c == "boolean", P = k ? c : at, [st, ct] = U(i), j = F(null), G = F(!1), Z = F(null);
  _(() => () => {
    const e = Z.current;
    e && (window.removeEventListener("mousemove", e.move), window.removeEventListener("mouseup", e.up), Z.current = null), G.current = !1;
  }, []);
  const z = wt(
    () => l && Array.isArray(l) ? l : void 0,
    [l]
  ), W = X(() => {
    const e = window.innerWidth, p = window.innerHeight, a = t.current;
    if (!a) return;
    const f = a.getBoundingClientRect(), m = r.current, u = m == null ? void 0 : m.getBoundingClientRect(), d = Math.round((u == null ? void 0 : u.width) || 0);
    let L = Math.round((u == null ? void 0 : u.height) || 0);
    if (!d || !L) {
      j.current != null && cancelAnimationFrame(j.current), j.current = requestAnimationFrame(() => {
        j.current = null, W();
      });
      return;
    }
    const R = L;
    if (w && m) {
      const q = g(m, 0);
      q > 1 && (L += q);
    }
    const D = yt(
      e,
      p,
      f,
      d,
      L,
      i,
      z,
      J,
      I,
      h,
      8,
      R
    );
    et(D.coords), it(D.arrow), ct(D.placement), E(!0);
  }, [t, i, J, I, h, z, w]), S = X(() => {
    const e = r.current;
    if (!e) return;
    const p = window.innerWidth, a = window.innerHeight, f = e.getBoundingClientRect(), m = Math.round(f.width);
    let u = Math.round(f.height);
    if (!(!m || !u)) {
      if (w) {
        const d = g(e, 0);
        d > 1 && (u += d);
      }
      Q((d) => {
        if (!d) return d;
        const L = Math.max(h, Math.min(p - m - h, Math.round(d.left))), R = Math.max(h, Math.min(a - u - h, Math.round(d.top)));
        return L === d.left && R === d.top ? d : { left: L, top: R };
      });
    }
  }, [w, h]), tt = F(null);
  tt.current = T;
  const nt = X(() => {
    if (tt.current) {
      S();
      return;
    }
    Q(null), W();
  }, [S, W]);
  xt(() => {
    P && (E(!1), W());
  }, [P, W]), _(() => {
    P || Q(null);
  }, [P]), _(() => {
    if (!P) return;
    let e = null;
    const p = () => {
      G.current || e == null && (e = requestAnimationFrame(() => {
        e = null, G.current || nt();
      }));
    }, a = () => p();
    window.addEventListener("resize", a), window.addEventListener("scroll", a, !0);
    const f = r.current;
    let m = null, u = null;
    if (K && f) {
      try {
        m = new ResizeObserver(p), m.observe(f);
      } catch {
      }
      try {
        u = new MutationObserver(p), u.observe(f, { childList: !0, subtree: !0, characterData: !0 });
      } catch {
      }
    }
    return () => {
      window.removeEventListener("resize", a), window.removeEventListener("scroll", a, !0), m && m.disconnect(), u && u.disconnect(), e != null && cancelAnimationFrame(e), j.current != null && (cancelAnimationFrame(j.current), j.current = null);
    };
  }, [P, W, K, nt]);
  const C = F(!1);
  _(() => {
    if (P && !C.current)
      C.current = !0, $ == null || $();
    else if (!P && C.current) {
      if (C.current = !1, k) return;
      A == null || A();
    }
  }, [k, P, A, $]), _(() => {
    if (!P || !O) return;
    const e = (p) => {
      var D;
      const a = p.target, f = r.current, m = t.current;
      if (!f || !a || !m) return;
      const u = document.activeElement;
      if (u && u !== a) {
        const q = u.contains(a) || u === a, dt = u.tagName === "INPUT" || u.tagName === "TEXTAREA" || u.isContentEditable;
        !q && dt && u.blur();
      }
      const d = f.contains(a), L = m.contains(a);
      if (d || L || (D = a.closest) != null && D.call(a, "[data-overlay-keep-open]")) return;
      const R = a != null && a.closest ? a.closest(".OverlayPositioner") : null;
      R && !R.contains(m) || (k ? A == null || A() : V(!1));
    };
    return window.addEventListener("mousedown", e, !0), () => window.removeEventListener("mousedown", e, !0);
  }, [P, O, t, k, A]);
  const N = bt(t);
  _(() => {
    if (!k && N) {
      if (v === "click") {
        const e = (p) => {
          p.preventDefault(), V((a) => !a);
        };
        return N.addEventListener("click", e), () => N.removeEventListener("click", e);
      }
      if (v === "hover") {
        const e = () => {
          V(!0);
        }, p = () => {
          V(!1);
        };
        return N.addEventListener("mouseenter", e), N.addEventListener("mouseleave", p), () => {
          N.removeEventListener("mouseenter", e), N.removeEventListener("mouseleave", p);
        };
      }
    }
  }, [k, v, N]);
  const ot = (T ? T.top : s.top) || 0, lt = (T ? T.left : s.left) || 0, H = {
    top: `${ot}px`,
    left: `${lt}px`,
    visibility: Y ? "visible" : "hidden",
    pointerEvents: Y ? void 0 : "none"
  };
  B && (H["--overlay-arrow-left"] = `${B.left}px`, H["--overlay-arrow-top"] = `${B.top}px`);
  const rt = typeof window < "u" ? Math.max(window.innerHeight - ot - h, 100) : void 0;
  rt != null && (H["--overlay-available-height"] = `${rt}px`);
  const ut = Lt("OverlayPositioner", void 0, {
    placement: st
  });
  if (!P) return null;
  const mt = (e) => {
    if (!e) return !1;
    const p = r.current;
    let a = e;
    const f = [
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
    if (e.closest && e.closest(f))
      return !0;
    for (; a && p && a !== p; ) {
      const m = a.getAttribute && a.getAttribute("tabindex");
      if (m != null && m !== "" && !Number.isNaN(Number(m)) && Number(m) >= 0)
        return !0;
      a = a.parentElement;
    }
    return !1;
  }, ht = (e) => {
    if (!o || e.button !== 0) return;
    const p = e.target;
    if (mt(p)) return;
    e.preventDefault(), G.current = !0;
    const a = T ? T.left : s.left, f = T ? T.top : s.top, m = e.clientX, u = e.clientY, d = (R) => {
      const D = R.clientX - m, q = R.clientY - u;
      Q({ left: a + D, top: f + q });
    }, L = () => {
      G.current = !1, window.removeEventListener("mousemove", d), window.removeEventListener("mouseup", L), Z.current = null;
    };
    Z.current = { move: d, up: L }, window.addEventListener("mousemove", d), window.addEventListener("mouseup", L);
  }, pt = /* @__PURE__ */ Mt(
    "div",
    {
      id: M,
      className: [ut, x].join(" ").trim(),
      ref: (e) => {
        r.current = e, typeof n == "function" ? n(e) : n && (n.current = e);
      },
      style: H,
      "data-arrow-side": B == null ? void 0 : B.side,
      onMouseDown: (e) => ht(e),
      children: b
    }
  );
  return vt(pt, document.body);
}, $t = ft(At);
export {
  $t as OverlayPositioner
};
