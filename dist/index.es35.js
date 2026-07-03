import { jsx as W } from "./index.es203.js";
import { createContext as X } from "preact";
import { useContext as G, useState as x, useRef as i, useCallback as l, useEffect as B, useMemo as Z } from "preact/hooks";
const O = X(void 0), et = () => {
  const p = G(O);
  if (!p) throw new Error("ScrollContext not found");
  return p;
}, nt = () => G(O), st = ({
  defaultPositionY: p = 0,
  positionY: u,
  onScroll: v,
  spyThreshold: R = 0,
  onSpyTargetChange: a,
  children: J
}) => {
  const [N, g] = x(p), [y, M] = x(p === 0), [z, D] = x(!1), [E, b] = x(!1), [I, j] = x(null), k = i(null), q = i(R), A = i(null), h = i([]), w = i(null), c = i(null), F = u !== void 0 ? u : N, S = l((t) => {
    b(t.scrollHeight - t.clientHeight > 0);
  }, []), K = () => {
    const t = A.current;
    if (!t) return;
    const e = h.current;
    if (!e.length) {
      I !== null && (j(null), a == null || a({ id: null }));
      return;
    }
    const n = t.getBoundingClientRect(), s = q.current ?? 0;
    let r = null, d = -1 / 0;
    for (const { id: m, element: Y } of e) {
      if (!Y) continue;
      const H = Y.getBoundingClientRect().top - n.top - s;
      H <= 0 && H > d && (d = H, r = m);
    }
    r !== I && (j(r), a == null || a({ id: r ?? null }));
  }, L = i(K);
  L.current = K;
  const o = l(() => {
    w.current == null && (w.current = requestAnimationFrame(() => {
      w.current = null;
      try {
        L.current();
      } catch {
      }
    }));
  }, []), P = l((t) => {
    var r;
    if ((r = c.current) == null || r.call(c), c.current = null, A.current = t, !t) {
      b(!1);
      return;
    }
    S(t);
    const e = () => S(t), n = new ResizeObserver(e), s = new MutationObserver(e);
    n.observe(t), s.observe(t, { childList: !0, subtree: !0, characterData: !0 }), c.current = () => {
      n.disconnect(), s.disconnect();
    }, o();
  }, [S, o]), T = l((t, e) => {
    const n = h.current, s = n.findIndex((r) => r.id === t);
    if (!e) {
      s !== -1 && (n.splice(s, 1), o());
      return;
    }
    s === -1 ? n.push({ id: t, element: e }) : n[s].element = e, o();
  }, [o]), U = l((t) => {
    const e = t.currentTarget || t.target;
    if (!e) return;
    const n = e.scrollHeight - e.clientHeight;
    k.current = n;
    const s = n > 0;
    let r = !1, d = !1, m;
    s ? (r = e.scrollTop <= 0, d = e.scrollTop >= n, m = r ? 0 : d ? n : e.scrollTop) : m = 0, M(s ? r : !0), D(s ? d : !0), b(s), u === void 0 && g(m), v == null || v({ positionY: m }), h.current.length && A.current && o();
  }, [u, v, o]), f = l((t) => {
    g(t);
    const e = k.current, n = typeof e == "number" && e > 0;
    M(n ? t === 0 : !0), D(n ? t >= e : !0), b(n);
  }, []), V = l(() => {
    f(0);
  }, [f]);
  B(() => {
    u !== void 0 && f(u);
  }, [u, f]), B(() => {
    q.current = R, o();
  }, [R]), B(() => () => {
    var t;
    return (t = c.current) == null ? void 0 : t.call(c);
  }, []);
  const Q = Z(
    () => ({
      positionY: F,
      isAtTop: y,
      isAtBottom: z,
      hasScroll: E,
      onScroll: U,
      setPositionY: f,
      resetPositionY: V,
      spyActiveId: I,
      registerSpyTarget: T,
      registerScrollRoot: P
    }),
    [
      F,
      y,
      z,
      E,
      U,
      f,
      V,
      I,
      T,
      P
    ]
  );
  return /* @__PURE__ */ W(O.Provider, { value: Q, children: J });
};
export {
  st as ScrollContext,
  et as useScrollContext,
  nt as useScrollContextOptional
};
