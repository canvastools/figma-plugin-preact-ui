import { jsx as R } from "./index.es203.js";
import { createContext as g } from "preact";
import { useContext as B, useRef as z, useState as F, useCallback as b, useEffect as A, useMemo as O } from "preact/hooks";
const X = g(void 0), ne = () => {
  const c = B(X);
  if (!c) throw new Error("MenuContext not found");
  return c;
}, oe = () => B(X), ue = ({ triggerRef: c, anchorRef: J, open: i, setOpen: u, children: Z }) => {
  const L = z([]), P = z(!1), U = z({
    query: "",
    lastTime: 0
  }), [w, E] = F(null), [k, G] = F(null), [K, y] = F(!1), [N, T] = F(!1), [W, D] = F(null), V = b((r) => (L.current.push(r), () => {
    L.current = L.current.filter((e) => e.id !== r.id);
  }), []), x = b(() => L.current.filter((e) => !e.disabled && e.ref.current).slice().sort((e, t) => {
    const n = e.ref.current, s = t.ref.current;
    if (!n || !s || n === s) return 0;
    const m = n.compareDocumentPosition(s);
    return m & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : m & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  }), []), _ = b(
    (r) => {
      var s;
      const e = x();
      if (!e.length) return;
      const t = r ?? ((s = e[0]) == null ? void 0 : s.id), n = e.find((m) => m.id === t);
      n && n.ref.current && (n.ref.current.focus({ preventScroll: !0 }), E(t ?? null), D(t ?? null));
    },
    [x]
  ), $ = b(() => {
    N || E(null);
  }, [N]), j = b(
    (r) => {
      N || (G(r), r !== null && y(!1));
    },
    [N]
  ), M = b(
    (r) => {
      const e = x();
      if (!e.length) return;
      const t = e.findIndex((m) => m.id === w);
      let n;
      t === -1 ? n = r === "next" ? 0 : e.length - 1 : r === "next" ? n = (t + 1) % e.length : n = (t - 1 + e.length) % e.length;
      const s = e[n];
      s != null && s.ref.current && (s.ref.current.focus({ preventScroll: !0 }), E(s.id), D(s.id));
    },
    [w, x]
  );
  A(() => {
    if (!(c != null && c.current)) return;
    const r = c.current, e = (t) => {
      var s;
      const { key: n } = t;
      if (n === "Escape" || n === "Esc") {
        if (!i) return;
        t.preventDefault(), u == null || u(!1), r.focus();
        return;
      }
      if (n === "Enter" || n === " ") {
        if (t.preventDefault(), !i)
          P.current = !0, u == null || u(!0);
        else {
          const m = L.current.filter((d) => !d.disabled);
          if (!m.length) return;
          (s = (m.find((d) => d.id === w) ?? m[0]).ref.current) == null || s.click();
        }
        return;
      }
      if (n === "ArrowDown") {
        t.preventDefault(), i ? M("next") : (P.current = !0, u == null || u(!0));
        return;
      }
      n === "ArrowUp" && i && (t.preventDefault(), M("prev"));
    };
    return r.addEventListener("keydown", e), () => {
      r.removeEventListener("keydown", e);
    };
  }, [c, i, u, w, M]), A(() => {
    if (!(c != null && c.current)) return;
    const r = c.current, e = (t) => {
      t.preventDefault(), P.current = !1, u == null || u(!i);
    };
    return r.addEventListener("mousedown", e), () => {
      r.removeEventListener("mousedown", e);
    };
  }, [c, i, u]), A(() => {
    if (!i) {
      E(null), G(null), y(!1), T(!1), D(null), U.current = { query: "", lastTime: 0 };
      return;
    }
    P.current && (P.current = !1, requestAnimationFrame(() => {
      _(void 0);
    }));
  }, [_, i]);
  const Q = J ?? c;
  A(() => {
    if (!i) return;
    const r = (e) => {
      var S;
      const { key: t, shiftKey: n, metaKey: s, ctrlKey: m, altKey: H } = e, d = e.target;
      if (t === "Escape" || t === "Esc") {
        e.preventDefault(), e.stopPropagation(), u == null || u(!1), (S = c == null ? void 0 : c.current) == null || S.focus();
        return;
      }
      if (!(s || m || H)) {
        if (t === "Enter" || t === " ") {
          if (d && (d.tagName === "INPUT" || d.tagName === "TEXTAREA" || d.isContentEditable))
            return;
          e.preventDefault(), e.stopPropagation();
          const l = x();
          if (!l.length) return;
          let o;
          !K && k && (o = l.find((v) => v.id === k)), !o && w && (o = l.find((v) => v.id === w)), o || (o = l[0]), o != null && o.ref.current && (o.ref.current.click(), o.ref.current.focus({ preventScroll: !0 }), E(o.id), D(o.id), y(!0), T(!0));
          return;
        }
        if (t === "Tab") {
          e.preventDefault(), e.stopPropagation(), M(n ? "prev" : "next"), y(!0), T(!0);
          return;
        }
        if (t === "ArrowDown" || t === "ArrowUp") {
          if (d && (d.tagName === "INPUT" || d.tagName === "TEXTAREA" || d.isContentEditable))
            return;
          e.preventDefault(), e.stopPropagation();
          const l = x();
          if (!l.length) return;
          const o = l.length;
          if (!w) {
            if (!K && k) {
              const f = l.findIndex((I) => I.id === k);
              if (f !== -1) {
                const I = t === "ArrowDown" ? (f + 1) % o : (f - 1 + o) % o, a = l[I];
                a != null && a.ref.current && (a.ref.current.focus({ preventScroll: !0 }), E(a.id), D(a.id), y(!0), T(!0));
                return;
              }
            }
            if (W) {
              const f = l.findIndex((I) => I.id === W);
              if (f !== -1) {
                const I = t === "ArrowDown" ? (f + 1) % o : (f - 1 + o) % o, a = l[I];
                a != null && a.ref.current && (a.ref.current.focus({ preventScroll: !0 }), E(a.id), D(a.id), y(!0), T(!0));
                return;
              }
            }
            _(void 0), y(!0), T(!0);
            return;
          }
          const v = l.findIndex((f) => f.id === w), C = v === -1 ? 0 : v, q = t === "ArrowDown" ? (C + 1) % o : (C - 1 + o) % o, h = l[q];
          h != null && h.ref.current && (h.ref.current.focus({ preventScroll: !0 }), E(h.id), D(h.id), y(!0), T(!0));
        }
      }
    };
    return window.addEventListener("keydown", r, !0), () => {
      window.removeEventListener("keydown", r, !0);
    };
  }, [
    _,
    w,
    x,
    K,
    k,
    W,
    M,
    i,
    u,
    c
  ]), A(() => {
    if (!i) return;
    const r = () => {
      N && T(!1);
    };
    return window.addEventListener("pointermove", r), () => {
      window.removeEventListener("pointermove", r);
    };
  }, [i, N]), A(() => {
    if (!i) return;
    const r = 500, e = (t) => {
      const { key: n, metaKey: s, ctrlKey: m, altKey: H } = t, d = t.target;
      if (d && (d.tagName === "INPUT" || d.tagName === "TEXTAREA" || d.isContentEditable) || s || m || H || n === " " || n.length !== 1) return;
      const S = n.toLowerCase();
      if (!/^[\w !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]$/.test(S)) return;
      t.preventDefault();
      const l = Date.now(), { lastTime: o } = U.current;
      let { query: v } = U.current;
      l - o > r && (v = ""), v += S, U.current = { query: v, lastTime: l };
      const C = x();
      if (!C.length) return;
      const q = v.toLowerCase(), h = (I) => {
        const a = I.ref.current;
        return a ? (a.textContent || a.innerText || "").trim().toLowerCase() : "";
      }, f = C.find((I) => h(I).startsWith(q)) || // Fallback to "contains" match
      C.find((I) => h(I).includes(q));
      f != null && f.ref.current && (f.ref.current.focus({ preventScroll: !0 }), E(f.id), D(f.id));
    };
    return window.addEventListener("keydown", e), () => {
      window.removeEventListener("keydown", e);
    };
  }, [x, i]);
  const Y = b((r) => {
    E(r);
  }, []), p = O(
    () => ({
      triggerRef: c,
      anchorRef: Q,
      open: i !== void 0 ? i : !1,
      setOpen: u !== void 0 ? u : () => {
      },
      registerItem: V,
      focusedItemId: w,
      setFocusedItem: Y,
      clearFocus: $,
      setHoveredItem: j,
      keyboardInteraction: K
    }),
    [
      c,
      Q,
      i,
      u,
      V,
      w,
      Y,
      $,
      j,
      K
    ]
  );
  return /* @__PURE__ */ R(X.Provider, { value: p, children: Z });
};
export {
  ue as MenuContext,
  X as RawMenuContext,
  ne as useMenuContext,
  oe as useMenuContextOptional
};
