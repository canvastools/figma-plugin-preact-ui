import { jsx as z } from "./index.es129.js";
import { createContext as C } from "preact";
import { useContext as j, useState as p, useRef as a, useEffect as Y } from "preact/hooks";
const w = C(void 0), Q = () => {
  const u = j(w);
  if (!u) throw new Error("ScrollContext not found");
  return u;
}, W = () => j(w), X = ({
  defaultPositionY: u = 0,
  positionY: r,
  onScroll: d,
  spyThreshold: m = 0,
  onSpyTargetChange: c,
  children: q
}) => {
  const [D, B] = p(u), [F, S] = p(u === 0), [K, h] = p(!1), [x, y] = p(null), E = a(null), H = a(m), R = a(null), I = a([]), v = a(null), M = r !== void 0 ? r : D, O = () => {
    const e = R.current;
    if (!e) return;
    const t = I.current;
    if (!t.length) {
      x !== null && (y(null), c == null || c({ id: null }));
      return;
    }
    const n = e.getBoundingClientRect(), o = H.current ?? 0;
    let s = null, l = -1 / 0;
    for (const { id: i, element: P } of t) {
      if (!P) continue;
      const b = P.getBoundingClientRect().top - n.top - o;
      b <= 0 && b > l && (l = b, s = i);
    }
    s !== x && (y(s), c == null || c({ id: s ?? null }));
  }, f = () => {
    v.current == null && (v.current = requestAnimationFrame(() => {
      v.current = null;
      try {
        O();
      } catch {
      }
    }));
  }, T = (e) => {
    R.current = e, e && f();
  }, U = (e, t) => {
    const n = I.current, o = n.findIndex((s) => s.id === e);
    if (!t) {
      o !== -1 && (n.splice(o, 1), f());
      return;
    }
    o === -1 ? n.push({ id: e, element: t }) : n[o].element = t, f();
  }, V = (e) => {
    const t = e.currentTarget || e.target;
    if (!t) return;
    const n = t.scrollHeight - t.clientHeight;
    E.current = n;
    const o = n > 0;
    let s = !1, l = !1, i;
    o ? (s = t.scrollTop <= 0, l = t.scrollTop >= n, i = s ? 0 : l ? n : t.scrollTop) : i = 0, S(o ? s : !0), h(o ? l : !0), r === void 0 && B(i), d == null || d({ positionY: i }), I.current.length && R.current && f();
  }, A = (e) => {
    B(e);
    const t = E.current, n = typeof t == "number" && t > 0;
    S(n ? e === 0 : !0), h(n ? e >= t : !0);
  }, g = () => {
    A(0);
  };
  Y(() => {
    r !== void 0 && A(r);
  }, [r]), Y(() => {
    H.current = m, f();
  }, [m]);
  const k = {
    positionY: M,
    isAtTop: F,
    isAtBottom: K,
    onScroll: V,
    setPositionY: A,
    resetPositionY: g,
    spyActiveId: x,
    registerSpyTarget: U,
    registerScrollRoot: T
  };
  return /* @__PURE__ */ z(w.Provider, { value: k, children: q });
};
export {
  X as ScrollContext,
  Q as useScrollContext,
  W as useScrollContextOptional
};
