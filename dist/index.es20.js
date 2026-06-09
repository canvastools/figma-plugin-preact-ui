import { jsx as he } from "./index.es178.js";
import { createContext as me } from "preact";
import { useState as N, useRef as T, useMemo as ge, useCallback as A, useEffect as j, useContext as Ie } from "preact/hooks";
const _ = me(void 0), xe = () => {
  const P = Ie(_);
  if (!P) throw new Error("ListContext not found");
  return P;
}, ve = (P) => {
  const {
    items: V,
    selectedItemIds: B = [],
    selectionMode: z,
    deselectOnClickOutside: q = !1,
    onItemsChange: L,
    onSelectionChange: h,
    onKeyDown: $,
    children: ee
  } = P, G = V !== void 0, [te, ne] = N(V ?? []), [H, R] = N(new Set(B)), [se, Q] = N(/* @__PURE__ */ new Set()), O = T(/* @__PURE__ */ new Map()), J = T(/* @__PURE__ */ new Map()), U = G && L !== void 0, y = h !== void 0, v = G ? V : te, p = ge(
    () => y ? new Set(B) : H,
    [y, B, H]
  ), D = T(null), K = T(/* @__PURE__ */ new Set()), X = A((e) => {
    const s = [], t = (o) => {
      o.forEach((i) => {
        s.push(i.id), i.items && i.items.length && t(i.items);
      });
    };
    return t(e), s;
  }, []), k = A(
    (e) => {
      const s = [], t = (o) => {
        for (let i = 0; i < o.length; i++) {
          const g = o[i];
          if (g.id === e) {
            const f = (a) => {
              if (a)
                for (let c = 0; c < a.length; c++) {
                  const n = a[c];
                  s.push(n.id), f(n.items);
                }
            };
            return f(g.items), !0;
          }
          if (g.items && t(g.items)) return !0;
        }
        return !1;
      };
      return t(v), s;
    },
    [v]
  ), Y = A(
    (e) => {
      const s = (t, o) => {
        var i, g, f;
        for (const a of t) {
          if (a.id === e)
            return o && ((i = o.items) == null ? void 0 : i.length) === 1 && ((g = O.current.get(o.id)) == null ? void 0 : g.selectionScope) === "withDescendants" ? o.id : e;
          if ((f = a.items) != null && f.length) {
            const c = s(a.items, a);
            if (c !== void 0) return c;
          }
        }
      };
      return s(v, null) ?? e;
    },
    [v]
  ), re = A(
    (e) => {
      const s = new Set(e);
      y || R(s), h == null || h({ selectedItemIds: Array.from(s) });
    },
    [y, h]
  ), ce = A(
    (e, s) => {
      if (z === void 0) return;
      const t = Y(e), o = O.current.get(t), i = (o == null ? void 0 : o.selectionScope) === "withDescendants", g = (n, m) => {
        if (n.size !== m.size) return !1;
        for (const w of n)
          if (!m.has(w)) return !1;
        return !0;
      }, f = !!(s != null && s.additive), a = !!(s != null && s.range);
      if (z === "single") {
        let n;
        if (i) {
          const m = [t, ...k(t)];
          n = m.length > 0 && m.every((r) => p.has(r)) ? /* @__PURE__ */ new Set() : new Set(m);
        } else {
          const m = p.has(t);
          n = /* @__PURE__ */ new Set(), m || n.add(t);
        }
        if (g(n, p)) {
          D.current = t;
          return;
        }
        y || R(n), h == null || h({ selectedItemIds: Array.from(n) }), D.current = t;
        return;
      }
      if (a) {
        const n = X(v);
        let m = D.current || t, w = n.indexOf(m);
        const r = n.indexOf(t);
        if (w === -1 && (m = t, w = n.indexOf(m)), w === -1 || r === -1) return;
        const [l, S] = w <= r ? [w, r] : [r, w], I = n.slice(l, S + 1), u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Map(), b = (E, x) => {
          E.forEach((F) => {
            M.set(F.id, x), F.items && b(F.items, F.id);
          });
        };
        b(v, null);
        const C = (E) => {
          let x = E;
          for (; x; ) {
            if (d.has(x)) return !0;
            x = M.get(x) || null;
          }
          return !1;
        };
        if (I.forEach((E) => {
          const x = O.current.get(E);
          if ((x == null ? void 0 : x.selectable) === !1) {
            (x == null ? void 0 : x.selectionScope) === "withDescendants" && d.add(E);
            return;
          }
          C(E) || ((x == null ? void 0 : x.selectionScope) === "withDescendants" ? [E, ...k(E)].forEach((ue) => u.add(ue)) : u.add(E));
        }), g(u, p)) {
          D.current = t;
          return;
        }
        y || R(u), h == null || h({ selectedItemIds: Array.from(u) }), D.current = t;
        return;
      }
      if (f) {
        const n = new Set(p);
        if (i) {
          const m = [t, ...k(t)];
          m.length > 0 && m.every((r) => n.has(r)) ? m.forEach((r) => n.delete(r)) : m.forEach((r) => n.add(r));
        } else
          n.has(t) ? n.delete(t) : n.add(t);
        if (g(n, p)) {
          D.current = t;
          return;
        }
        y || R(n), h == null || h({ selectedItemIds: Array.from(n) }), D.current = t;
        return;
      }
      let c;
      if (i) {
        const n = [t, ...k(t)], m = new Set(n);
        c = m.size === p.size && n.every((r) => p.has(r)) ? /* @__PURE__ */ new Set() : m;
      } else
        c = p.size === 1 && p.has(t) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([t]);
      if (g(c, p)) {
        D.current = t;
        return;
      }
      y || R(c), h == null || h({ selectedItemIds: Array.from(c) }), D.current = t;
    },
    [
      z,
      p,
      y,
      h,
      v,
      X,
      k,
      Y
    ]
  ), oe = A(
    (e, s, t) => {
      if (e.length === 0) return;
      const o = JSON.parse(JSON.stringify(v)), i = (() => {
        const r = /* @__PURE__ */ new Map(), l = (S, I) => {
          S.forEach((u, d) => {
            const M = [...I, d];
            r.set(u.id, M), u.items && u.items.length && l(u.items, M);
          });
        };
        return l(v, []), r;
      })();
      if (t && t.length > 0)
        for (const r of e) {
          const l = i.get(r);
          if (l && t.length >= l.length && l.every((I, u) => t[u] === I))
            return;
        }
      const g = (r, l) => {
        const S = [];
        for (let I = r.length - 1; I >= 0; I--)
          l.includes(r[I].id) && S.unshift(r.splice(I, 1)[0]);
        return r.forEach((I) => {
          if (I.items) {
            const u = g(I.items, l);
            S.push(...u);
          }
        }), S;
      }, f = (r, l, S, I) => {
        if (l.length === 0) {
          const b = Math.max(0, Math.min(S, r.length));
          r.splice(b, 0, ...I);
          return;
        }
        const u = Math.max(0, Math.min(l[0], Math.max(0, r.length - 1)));
        let d = r[u];
        if (l.length === 1) {
          if (!d) return;
          d.items || (d.items = []);
          const b = Math.max(0, Math.min(S, d.items.length));
          d.items.splice(b, 0, ...I);
          return;
        }
        for (let b = 1; b < l.length; b++) {
          if (!d) return;
          d.items || (d.items = []);
          const C = Math.max(0, Math.min(l[b], Math.max(0, d.items.length - 1)));
          d = d.items[C];
        }
        if (!d) return;
        d.items || (d.items = []);
        const M = Math.max(0, Math.min(S, d.items.length));
        d.items.splice(M, 0, ...I);
      }, a = g(o, e);
      if (a.length === 0) return;
      const c = t && t.length ? t : [];
      let n = 0;
      e.forEach((r) => {
        const l = i.get(r);
        if (!l || l.length === 0) return;
        const S = l.slice(0, l.length - 1), I = l[l.length - 1];
        S.length === c.length && S.every((d, M) => d === c[M]) && I < s && n++;
      });
      const m = Math.max(0, s - n), w = [...c];
      if (w.length > 0) {
        const r = w.slice(0, w.length - 1), l = w[w.length - 1];
        let S = 0;
        e.forEach((I) => {
          const u = i.get(I);
          if (!u || u.length === 0) return;
          const d = u.slice(0, u.length - 1), M = u[u.length - 1];
          d.length === r.length && d.every((C, E) => C === r[E]) && M < l && S++;
        }), w[w.length - 1] = Math.max(0, l - S);
      }
      f(o, w, m, a), U || ne(o), L == null || L({ items: o });
    },
    [v, L, U]
  );
  j(() => {
    if (z === void 0 || !q) return;
    const e = (s) => {
      const t = s.target;
      if (t) {
        for (const o of K.current)
          if (o.contains(t)) return;
        if (p.size > 0) {
          const o = /* @__PURE__ */ new Set();
          y || R(o), h == null || h({ selectedItemIds: Array.from(o) });
        }
      }
    };
    return document.addEventListener("pointerdown", e), () => document.removeEventListener("pointerdown", e);
  }, [z, q, p, y, h]);
  const W = T(null), [, Z] = N(0);
  j(() => {
    const e = document.createElement("div");
    return e.style.width = "20px", e.style.height = "20px", e.style.opacity = "0", e.style.position = "absolute", e.style.top = "-1000px", e.style.pointerEvents = "none", document.body.appendChild(e), W.current = e, Z((s) => s + 1), () => {
      document.body.removeChild(e), W.current = null, Z((s) => s + 1);
    };
  }, []);
  const ie = A((e) => e ? (K.current.add(e), () => {
    K.current.delete(e);
  }) : () => {
  }, []), le = A(
    (e, s) => (O.current.set(e, s), () => {
      O.current.delete(e);
    }),
    []
  ), ae = A((e) => J.current.get(e) || null, []), de = A((e, s) => (J.current.set(e, s), () => {
    J.current.delete(e);
  }), []);
  j(() => {
    const e = /* @__PURE__ */ new Map(), s = (t, o) => {
      t.forEach((i, g) => {
        const f = [...o, g];
        e.set(i.id, f), i.items && i.items.length && s(i.items, f);
      });
    };
    s(v, []), J.current = e;
  }, [v]), j(() => {
    if (y) {
      const e = new Set(B);
      R(e);
    }
  }, [B, y]), j(() => {
    const e = p;
    if (e.size === 0) {
      Q(/* @__PURE__ */ new Set());
      return;
    }
    const s = /* @__PURE__ */ new Map(), t = (f, a) => {
      f.forEach((c) => {
        s.set(c.id, a), c.items && c.items.length && t(c.items, c.id);
      });
    };
    t(v, null);
    const o = /* @__PURE__ */ new Map(), i = (f) => {
      if (o.has(f))
        return o.get(f);
      const a = [f, ...k(f)], c = a.length > 0 && a.every((n) => e.has(n));
      return o.set(f, c), c;
    }, g = /* @__PURE__ */ new Set();
    O.current.forEach((f, a) => {
      f.selectionScope === "individual" && e.has(a) && g.add(a);
    }), O.current.forEach((f, a) => {
      if (f.selectionScope !== "withDescendants" || !e.has(a) || !i(a)) return;
      let c = s.get(a) ?? null;
      for (; c; ) {
        const n = O.current.get(c);
        if ((n == null ? void 0 : n.selectionScope) === "withDescendants" && e.has(c) && i(c))
          return;
        c = s.get(c) ?? null;
      }
      g.add(a);
    }), Q(g);
  }, [k, v, p]);
  const fe = {
    items: v,
    selectedItemIds: p,
    selectionOriginIds: se,
    deselectOnClickOutside: q,
    setSelection: re,
    toggleSelect: ce,
    reorderItems: oe,
    selectionMode: z,
    registerRootElement: ie,
    registerItem: le,
    getPathForId: ae,
    registerItemPath: de,
    dragImage: W.current,
    onKeyDown: $
  };
  return /* @__PURE__ */ he(_.Provider, { value: fe, children: ee });
};
export {
  ve as ListContext,
  xe as useListContext
};
