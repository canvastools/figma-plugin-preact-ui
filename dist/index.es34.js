import { jsx as N } from "./index.es178.js";
import { createContext as Q } from "preact";
import { useContext as P, useState as m, useRef as a, useEffect as S } from "preact/hooks";
const H = Q(void 0), $ = () => {
  const f = P(H);
  if (!f) throw new Error("ScrollContext not found");
  return f;
}, C = () => P(H), tt = ({
  defaultPositionY: f = 0,
  positionY: c,
  onScroll: p,
  spyThreshold: v = 0,
  onSpyTargetChange: i,
  children: Y
}) => {
  const [j, B] = m(f), [q, O] = m(f === 0), [F, g] = m(!1), [K, x] = m(!1), [b, y] = m(null), z = a(null), D = a(v), I = a(null), R = a([]), h = a(null), o = a(null), L = c !== void 0 ? c : j, E = (t) => {
    x(t.scrollHeight - t.clientHeight > 0);
  }, T = () => {
    const t = I.current;
    if (!t) return;
    const e = R.current;
    if (!e.length) {
      b !== null && (y(null), i == null || i({ id: null }));
      return;
    }
    const n = t.getBoundingClientRect(), s = D.current ?? 0;
    let r = null, l = -1 / 0;
    for (const { id: u, element: M } of e) {
      if (!M) continue;
      const w = M.getBoundingClientRect().top - n.top - s;
      w <= 0 && w > l && (l = w, r = u);
    }
    r !== b && (y(r), i == null || i({ id: r ?? null }));
  }, d = () => {
    h.current == null && (h.current = requestAnimationFrame(() => {
      h.current = null;
      try {
        T();
      } catch {
      }
    }));
  }, U = (t) => {
    var r;
    if ((r = o.current) == null || r.call(o), o.current = null, I.current = t, !t) {
      x(!1);
      return;
    }
    E(t);
    const e = () => E(t), n = new ResizeObserver(e), s = new MutationObserver(e);
    n.observe(t), s.observe(t, { childList: !0, subtree: !0, characterData: !0 }), o.current = () => {
      n.disconnect(), s.disconnect();
    }, d();
  }, V = (t, e) => {
    const n = R.current, s = n.findIndex((r) => r.id === t);
    if (!e) {
      s !== -1 && (n.splice(s, 1), d());
      return;
    }
    s === -1 ? n.push({ id: t, element: e }) : n[s].element = e, d();
  }, k = (t) => {
    const e = t.currentTarget || t.target;
    if (!e) return;
    const n = e.scrollHeight - e.clientHeight;
    z.current = n;
    const s = n > 0;
    let r = !1, l = !1, u;
    s ? (r = e.scrollTop <= 0, l = e.scrollTop >= n, u = r ? 0 : l ? n : e.scrollTop) : u = 0, O(s ? r : !0), g(s ? l : !0), x(s), c === void 0 && B(u), p == null || p({ positionY: u }), R.current.length && I.current && d();
  }, A = (t) => {
    B(t);
    const e = z.current, n = typeof e == "number" && e > 0;
    O(n ? t === 0 : !0), g(n ? t >= e : !0), x(n);
  }, G = () => {
    A(0);
  };
  S(() => {
    c !== void 0 && A(c);
  }, [c]), S(() => {
    D.current = v, d();
  }, [v]), S(() => () => {
    var t;
    return (t = o.current) == null ? void 0 : t.call(o);
  }, []);
  const J = {
    positionY: L,
    isAtTop: q,
    isAtBottom: F,
    hasScroll: K,
    onScroll: k,
    setPositionY: A,
    resetPositionY: G,
    spyActiveId: b,
    registerSpyTarget: V,
    registerScrollRoot: U
  };
  return /* @__PURE__ */ N(H.Provider, { value: J, children: Y });
};
export {
  tt as ScrollContext,
  $ as useScrollContext,
  C as useScrollContextOptional
};
