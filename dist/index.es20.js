import { jsx as he } from "./index.es203.js";
import { createContext as me } from "preact";
import { useState as N, useRef as _, useMemo as oe, useCallback as O, useEffect as j, useContext as ge } from "preact/hooks";
const ie = me(void 0), Ie = [], P = (b, L) => {
  if (b.size !== L.size) return !1;
  for (const k of b)
    if (!L.has(k)) return !1;
  return !0;
}, we = (b) => typeof structuredClone == "function" ? structuredClone(b) : JSON.parse(JSON.stringify(b)), ve = () => {
  const b = ge(ie);
  if (!b) throw new Error("ListContext not found");
  return b;
}, Ee = (b) => {
  const {
    items: L,
    selectedItemIds: k = Ie,
    selectionMode: C,
    deselectOnClickOutside: J = !1,
    onItemsChange: T,
    onSelectionChange: h,
    onKeyDown: K,
    children: le
  } = b, V = L !== void 0, [ae, de] = N(L ?? []), [W, z] = N(new Set(k)), [Y, G] = N(/* @__PURE__ */ new Set()), R = _(/* @__PURE__ */ new Map()), H = _(/* @__PURE__ */ new Map()), Q = V && T !== void 0, E = h !== void 0, x = V ? L : ae, I = oe(
    () => E ? new Set(k) : W,
    [E, k, W]
  ), A = _(null), q = _(/* @__PURE__ */ new Set()), U = O((t) => {
    const s = [], n = (c) => {
      c.forEach((i) => {
        s.push(i.id), i.items && i.items.length && n(i.items);
      });
    };
    return n(t), s;
  }, []), B = O(
    (t) => {
      const s = [], n = (c) => {
        for (let i = 0; i < c.length; i++) {
          const w = c[i];
          if (w.id === t) {
            const f = (r) => {
              if (r)
                for (let e = 0; e < r.length; e++) {
                  const o = r[e];
                  s.push(o.id), f(o.items);
                }
            };
            return f(w.items), !0;
          }
          if (w.items && n(w.items)) return !0;
        }
        return !1;
      };
      return n(x), s;
    },
    [x]
  ), X = O(
    (t) => {
      const s = (n, c) => {
        var i, w, f;
        for (const r of n) {
          if (r.id === t)
            return c && ((i = c.items) == null ? void 0 : i.length) === 1 && ((w = R.current.get(c.id)) == null ? void 0 : w.selectionScope) === "withDescendants" ? c.id : t;
          if ((f = r.items) != null && f.length) {
            const e = s(r.items, r);
            if (e !== void 0) return e;
          }
        }
      };
      return s(x, null) ?? t;
    },
    [x]
  ), Z = O(
    (t) => {
      const s = new Set(t);
      E || z(s), h == null || h({ selectedItemIds: Array.from(s) });
    },
    [E, h]
  ), $ = O(
    (t, s) => {
      if (C === void 0) return;
      const n = X(t), c = R.current.get(n), i = (c == null ? void 0 : c.selectionScope) === "withDescendants", w = !!(s != null && s.additive), f = !!(s != null && s.range);
      if (C === "single") {
        let e;
        if (i) {
          const o = [n, ...B(n)];
          e = o.length > 0 && o.every((u) => I.has(u)) ? /* @__PURE__ */ new Set() : new Set(o);
        } else {
          const o = I.has(n);
          e = /* @__PURE__ */ new Set(), o || e.add(n);
        }
        if (P(e, I)) {
          A.current = n;
          return;
        }
        E || z(e), h == null || h({ selectedItemIds: Array.from(e) }), A.current = n;
        return;
      }
      if (f) {
        const e = U(x);
        let o = A.current || n, y = e.indexOf(o);
        const u = e.indexOf(n);
        if (y === -1 && (o = n, y = e.indexOf(o)), y === -1 || u === -1) return;
        const [m, l] = y <= u ? [y, u] : [u, y], S = e.slice(m, l + 1), d = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map(), M = (v, p) => {
          v.forEach((F) => {
            a.set(F.id, p), F.items && M(F.items, F.id);
          });
        };
        M(x, null);
        const D = (v) => {
          let p = v;
          for (; p; ) {
            if (g.has(p)) return !0;
            p = a.get(p) || null;
          }
          return !1;
        };
        if (S.forEach((v) => {
          const p = R.current.get(v);
          if ((p == null ? void 0 : p.selectable) === !1) {
            (p == null ? void 0 : p.selectionScope) === "withDescendants" && g.add(v);
            return;
          }
          D(v) || ((p == null ? void 0 : p.selectionScope) === "withDescendants" ? [v, ...B(v)].forEach((ue) => d.add(ue)) : d.add(v));
        }), P(d, I)) {
          A.current = n;
          return;
        }
        E || z(d), h == null || h({ selectedItemIds: Array.from(d) }), A.current = n;
        return;
      }
      if (w) {
        const e = new Set(I);
        if (i) {
          const o = [n, ...B(n)];
          o.length > 0 && o.every((u) => e.has(u)) ? o.forEach((u) => e.delete(u)) : o.forEach((u) => e.add(u));
        } else
          e.has(n) ? e.delete(n) : e.add(n);
        if (P(e, I)) {
          A.current = n;
          return;
        }
        E || z(e), h == null || h({ selectedItemIds: Array.from(e) }), A.current = n;
        return;
      }
      let r;
      if (i) {
        const e = [n, ...B(n)], o = new Set(e);
        r = o.size === I.size && e.every((u) => I.has(u)) ? /* @__PURE__ */ new Set() : o;
      } else
        r = I.size === 1 && I.has(n) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([n]);
      if (P(r, I)) {
        A.current = n;
        return;
      }
      E || z(r), h == null || h({ selectedItemIds: Array.from(r) }), A.current = n;
    },
    [
      C,
      I,
      E,
      h,
      x,
      U,
      B,
      X
    ]
  ), ee = O(
    (t, s, n) => {
      if (t.length === 0) return;
      const c = we(x), i = (() => {
        const m = /* @__PURE__ */ new Map(), l = (S, d) => {
          S.forEach((g, a) => {
            const M = [...d, a];
            m.set(g.id, M), g.items && g.items.length && l(g.items, M);
          });
        };
        return l(x, []), m;
      })();
      if (n && n.length > 0)
        for (const m of t) {
          const l = i.get(m);
          if (l && n.length >= l.length && l.every((d, g) => n[g] === d))
            return;
        }
      const w = (m, l) => {
        const S = [];
        for (let d = m.length - 1; d >= 0; d--)
          l.includes(m[d].id) && S.unshift(m.splice(d, 1)[0]);
        return m.forEach((d) => {
          if (d.items) {
            const g = w(d.items, l);
            S.push(...g);
          }
        }), S;
      }, f = (m, l, S, d) => {
        if (l.length === 0) {
          const D = Math.max(0, Math.min(S, m.length));
          m.splice(D, 0, ...d);
          return;
        }
        const g = Math.max(0, Math.min(l[0], Math.max(0, m.length - 1)));
        let a = m[g];
        if (l.length === 1) {
          if (!a) return;
          a.items || (a.items = []);
          const D = Math.max(0, Math.min(S, a.items.length));
          a.items.splice(D, 0, ...d);
          return;
        }
        for (let D = 1; D < l.length; D++) {
          if (!a) return;
          a.items || (a.items = []);
          const v = Math.max(0, Math.min(l[D], Math.max(0, a.items.length - 1)));
          a = a.items[v];
        }
        if (!a) return;
        a.items || (a.items = []);
        const M = Math.max(0, Math.min(S, a.items.length));
        a.items.splice(M, 0, ...d);
      }, r = w(c, t);
      if (r.length === 0) return;
      const e = n && n.length ? n : [];
      let o = 0;
      t.forEach((m) => {
        const l = i.get(m);
        if (!l || l.length === 0) return;
        const S = l.slice(0, l.length - 1), d = l[l.length - 1];
        S.length === e.length && S.every((a, M) => a === e[M]) && d < s && o++;
      });
      const y = Math.max(0, s - o), u = [...e];
      if (u.length > 0) {
        const m = u.slice(0, u.length - 1), l = u[u.length - 1];
        let S = 0;
        t.forEach((d) => {
          const g = i.get(d);
          if (!g || g.length === 0) return;
          const a = g.slice(0, g.length - 1), M = g[g.length - 1];
          a.length === m.length && a.every((v, p) => v === m[p]) && M < l && S++;
        }), u[u.length - 1] = Math.max(0, l - S);
      }
      f(c, u, y, r), Q || de(c), T == null || T({ items: c });
    },
    [x, T, Q]
  );
  j(() => {
    if (C === void 0 || !J) return;
    const t = (s) => {
      const n = s.target;
      if (n) {
        for (const c of q.current)
          if (c.contains(n)) return;
        if (I.size > 0) {
          const c = /* @__PURE__ */ new Set();
          E || z(c), h == null || h({ selectedItemIds: Array.from(c) });
        }
      }
    };
    return document.addEventListener("pointerdown", t), () => document.removeEventListener("pointerdown", t);
  }, [C, J, I, E, h]);
  const [te, ne] = N(null);
  j(() => {
    const t = document.createElement("div");
    return t.style.width = "20px", t.style.height = "20px", t.style.opacity = "0", t.style.position = "absolute", t.style.top = "-1000px", t.style.pointerEvents = "none", document.body.appendChild(t), ne(t), () => {
      document.body.removeChild(t), ne(null);
    };
  }, []);
  const se = O((t) => t ? (q.current.add(t), () => {
    q.current.delete(t);
  }) : () => {
  }, []), re = O(
    (t, s) => (R.current.set(t, s), () => {
      R.current.delete(t);
    }),
    []
  ), ce = O((t) => H.current.get(t) || null, []);
  j(() => {
    const t = /* @__PURE__ */ new Map(), s = (n, c) => {
      n.forEach((i, w) => {
        const f = [...c, w];
        t.set(i.id, f), i.items && i.items.length && s(i.items, f);
      });
    };
    s(x, []), H.current = t;
  }, [x]), j(() => {
    E && z((t) => {
      const s = new Set(k);
      return P(t, s) ? t : s;
    });
  }, [k, E]), j(() => {
    const t = I;
    if (t.size === 0) {
      G(/* @__PURE__ */ new Set());
      return;
    }
    const s = /* @__PURE__ */ new Map(), n = (f, r) => {
      f.forEach((e) => {
        s.set(e.id, r), e.items && e.items.length && n(e.items, e.id);
      });
    };
    n(x, null);
    const c = /* @__PURE__ */ new Map(), i = (f) => {
      if (c.has(f))
        return c.get(f);
      const r = [f, ...B(f)], e = r.length > 0 && r.every((o) => t.has(o));
      return c.set(f, e), e;
    }, w = /* @__PURE__ */ new Set();
    R.current.forEach((f, r) => {
      f.selectionScope === "individual" && t.has(r) && w.add(r);
    }), R.current.forEach((f, r) => {
      if (f.selectionScope !== "withDescendants" || !t.has(r) || !i(r)) return;
      let e = s.get(r) ?? null;
      for (; e; ) {
        const o = R.current.get(e);
        if ((o == null ? void 0 : o.selectionScope) === "withDescendants" && t.has(e) && i(e))
          return;
        e = s.get(e) ?? null;
      }
      w.add(r);
    }), G(w);
  }, [B, x, I]);
  const fe = oe(
    () => ({
      items: x,
      selectedItemIds: I,
      selectionOriginIds: Y,
      deselectOnClickOutside: J,
      setSelection: Z,
      toggleSelect: $,
      reorderItems: ee,
      selectionMode: C,
      registerRootElement: se,
      registerItem: re,
      getPathForId: ce,
      dragImage: te,
      onKeyDown: K
    }),
    [
      x,
      I,
      Y,
      J,
      Z,
      $,
      ee,
      C,
      se,
      re,
      ce,
      te,
      K
    ]
  );
  return /* @__PURE__ */ he(ie.Provider, { value: fe, children: le });
};
export {
  Ee as ListContext,
  ve as useListContext
};
