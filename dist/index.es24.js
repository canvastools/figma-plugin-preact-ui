import { jsx as R } from "./index.es178.js";
import { createContext as g } from "preact";
import { useContext as X, useRef as z, useState as M, useCallback as b, useEffect as L } from "preact/hooks";
const G = g(void 0), re = () => {
  const s = X(G);
  if (!s) throw new Error("MenuContext not found");
  return s;
}, ne = () => X(G), oe = ({ triggerRef: s, anchorRef: $, open: i, setOpen: u, children: j }) => {
  const N = z([]), A = z(!1), F = z({
    query: "",
    lastTime: 0
  }), [v, E] = M(null), [k, V] = M(null), [U, y] = M(!1), [C, D] = M(!1), [W, T] = M(null), p = b((r) => (N.current.push(r), () => {
    N.current = N.current.filter((e) => e.id !== r.id);
  }), []), h = b(() => N.current.filter((e) => !e.disabled && e.ref.current).slice().sort((e, t) => {
    const o = e.ref.current, c = t.ref.current;
    if (!o || !c || o === c) return 0;
    const a = o.compareDocumentPosition(c);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  }), []), _ = b(
    (r) => {
      var c;
      const e = h();
      if (!e.length) return;
      const t = r ?? ((c = e[0]) == null ? void 0 : c.id), o = e.find((a) => a.id === t);
      o && o.ref.current && (o.ref.current.focus({ preventScroll: !0 }), E(t ?? null), T(t ?? null));
    },
    [h]
  ), Q = b(() => {
    C || E(null);
  }, [C]), Y = b(
    (r) => {
      C || (V(r), r !== null && y(!1));
    },
    [C]
  ), P = b(
    (r) => {
      const e = h();
      if (!e.length) return;
      const t = e.findIndex((a) => a.id === v);
      let o;
      t === -1 ? o = r === "next" ? 0 : e.length - 1 : r === "next" ? o = (t + 1) % e.length : o = (t - 1 + e.length) % e.length;
      const c = e[o];
      c != null && c.ref.current && (c.ref.current.focus({ preventScroll: !0 }), E(c.id), T(c.id));
    },
    [v, h]
  );
  L(() => {
    if (!(s != null && s.current)) return;
    const r = s.current, e = (t) => {
      var c;
      const { key: o } = t;
      if (o === "Escape" || o === "Esc") {
        if (!i) return;
        t.preventDefault(), u == null || u(!1), r.focus();
        return;
      }
      if (o === "Enter" || o === " ") {
        if (t.preventDefault(), !i)
          A.current = !0, u == null || u(!0);
        else {
          const a = N.current.filter((l) => !l.disabled);
          if (!a.length) return;
          (c = (a.find((l) => l.id === v) ?? a[0]).ref.current) == null || c.click();
        }
        return;
      }
      if (o === "ArrowDown") {
        t.preventDefault(), i ? P("next") : (A.current = !0, u == null || u(!0));
        return;
      }
      o === "ArrowUp" && i && (t.preventDefault(), P("prev"));
    };
    return r.addEventListener("keydown", e), () => {
      r.removeEventListener("keydown", e);
    };
  }, [s, i, u, v, P]), L(() => {
    if (!(s != null && s.current)) return;
    const r = s.current, e = (t) => {
      t.preventDefault(), A.current = !1, u == null || u(!i);
    };
    return r.addEventListener("mousedown", e), () => {
      r.removeEventListener("mousedown", e);
    };
  }, [s, i, u]), L(() => {
    if (!i) {
      E(null), V(null), y(!1), D(!1), T(null), F.current = { query: "", lastTime: 0 };
      return;
    }
    A.current && (A.current = !1, requestAnimationFrame(() => {
      _(void 0);
    }));
  }, [_, i]);
  const B = $ ?? s;
  L(() => {
    if (!i) return;
    const r = (e) => {
      var K;
      const { key: t, shiftKey: o, metaKey: c, ctrlKey: a, altKey: H } = e, l = e.target;
      if (t === "Escape" || t === "Esc") {
        e.preventDefault(), e.stopPropagation(), u == null || u(!1), (K = s == null ? void 0 : s.current) == null || K.focus();
        return;
      }
      if (!(c || a || H)) {
        if (t === "Enter" || t === " ") {
          if (l && (l.tagName === "INPUT" || l.tagName === "TEXTAREA" || l.isContentEditable))
            return;
          e.preventDefault(), e.stopPropagation();
          const d = h();
          if (!d.length) return;
          let n;
          !U && k && (n = d.find((x) => x.id === k)), !n && v && (n = d.find((x) => x.id === v)), n || (n = d[0]), n != null && n.ref.current && (n.ref.current.click(), n.ref.current.focus({ preventScroll: !0 }), E(n.id), T(n.id), y(!0), D(!0));
          return;
        }
        if (t === "Tab") {
          e.preventDefault(), e.stopPropagation(), P(o ? "prev" : "next"), y(!0), D(!0);
          return;
        }
        if (t === "ArrowDown" || t === "ArrowUp") {
          if (l && (l.tagName === "INPUT" || l.tagName === "TEXTAREA" || l.isContentEditable))
            return;
          e.preventDefault(), e.stopPropagation();
          const d = h();
          if (!d.length) return;
          const n = d.length;
          if (!v) {
            if (!U && k) {
              const f = d.findIndex((w) => w.id === k);
              if (f !== -1) {
                const w = t === "ArrowDown" ? (f + 1) % n : (f - 1 + n) % n, I = d[w];
                I != null && I.ref.current && (I.ref.current.focus({ preventScroll: !0 }), E(I.id), T(I.id), y(!0), D(!0));
                return;
              }
            }
            if (W) {
              const f = d.findIndex((w) => w.id === W);
              if (f !== -1) {
                const w = t === "ArrowDown" ? (f + 1) % n : (f - 1 + n) % n, I = d[w];
                I != null && I.ref.current && (I.ref.current.focus({ preventScroll: !0 }), E(I.id), T(I.id), y(!0), D(!0));
                return;
              }
            }
            _(void 0), y(!0), D(!0);
            return;
          }
          const x = d.findIndex((f) => f.id === v), S = x === -1 ? 0 : x, q = t === "ArrowDown" ? (S + 1) % n : (S - 1 + n) % n, m = d[q];
          m != null && m.ref.current && (m.ref.current.focus({ preventScroll: !0 }), E(m.id), T(m.id), y(!0), D(!0));
        }
      }
    };
    return window.addEventListener("keydown", r, !0), () => {
      window.removeEventListener("keydown", r, !0);
    };
  }, [
    _,
    v,
    h,
    U,
    k,
    W,
    P,
    i,
    u,
    s
  ]), L(() => {
    if (!i) return;
    const r = () => {
      C && D(!1);
    };
    return window.addEventListener("pointermove", r), () => {
      window.removeEventListener("pointermove", r);
    };
  }, [i, C]), L(() => {
    if (!i) return;
    const r = 500, e = (t) => {
      const { key: o, metaKey: c, ctrlKey: a, altKey: H } = t;
      if (c || a || H || o === " " || o.length !== 1) return;
      const l = o.toLowerCase();
      if (!/^[\w !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]$/.test(l)) return;
      t.preventDefault();
      const K = Date.now(), { lastTime: d } = F.current;
      let { query: n } = F.current;
      K - d > r && (n = ""), n += l, F.current = { query: n, lastTime: K };
      const x = h();
      if (!x.length) return;
      const S = n.toLowerCase(), q = (f) => {
        const w = f.ref.current;
        return w ? (w.textContent || w.innerText || "").trim().toLowerCase() : "";
      }, m = x.find((f) => q(f).startsWith(S)) || // Fallback to "contains" match
      x.find((f) => q(f).includes(S));
      m != null && m.ref.current && (m.ref.current.focus({ preventScroll: !0 }), E(m.id), T(m.id));
    };
    return window.addEventListener("keydown", e), () => {
      window.removeEventListener("keydown", e);
    };
  }, [h, i]);
  const J = b((r) => {
    E(r);
  }, []), Z = {
    triggerRef: s,
    anchorRef: B,
    open: i !== void 0 ? i : !1,
    setOpen: u !== void 0 ? u : () => {
    },
    registerItem: p,
    focusedItemId: v,
    setFocusedItem: J,
    clearFocus: Q,
    setHoveredItem: Y,
    keyboardInteraction: U
  };
  return /* @__PURE__ */ R(G.Provider, { value: Z, children: j });
};
export {
  oe as MenuContext,
  G as RawMenuContext,
  re as useMenuContext,
  ne as useMenuContextOptional
};
