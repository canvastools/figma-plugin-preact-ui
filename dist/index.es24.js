import { jsx as Z } from "./index.es129.js";
import { createContext as g } from "preact";
import { useContext as G, useRef as W, useState as S, useCallback as b, useEffect as N } from "preact/hooks";
const p = g(void 0), te = () => {
  const l = G(p);
  if (!l) throw new Error("MenuContext not found");
  return l;
}, re = () => G(p), ne = ({ triggerRef: l, anchorRef: V, open: c, setOpen: d, children: X }) => {
  const A = W([]), k = W(!1), M = W({
    query: "",
    lastTime: 0
  }), [v, x] = S(null), [P, z] = S(null), [F, y] = S(!1), [C, D] = S(!1), [q, T] = S(null), $ = b((r) => (A.current.push(r), () => {
    A.current = A.current.filter((e) => e.id !== r.id);
  }), []), E = b(() => A.current.filter((e) => !e.disabled && e.ref.current).slice().sort((e, t) => {
    const n = e.ref.current, u = t.ref.current;
    if (!n || !u || n === u) return 0;
    const m = n.compareDocumentPosition(u);
    return m & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : m & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  }), []), U = b(
    (r) => {
      var u;
      const e = E();
      if (!e.length) return;
      const t = r ?? ((u = e[0]) == null ? void 0 : u.id), n = e.find((m) => m.id === t);
      n && n.ref.current && (n.ref.current.focus({ preventScroll: !0 }), x(t ?? null), T(t ?? null));
    },
    [E]
  ), j = b(() => {
    C || x(null);
  }, [C]), Q = b(
    (r) => {
      C || (z(r), r !== null && y(!1));
    },
    [C]
  ), K = b(
    (r) => {
      const e = E();
      if (!e.length) return;
      const t = e.findIndex((m) => m.id === v);
      let n;
      t === -1 ? n = r === "next" ? 0 : e.length - 1 : r === "next" ? n = (t + 1) % e.length : n = (t - 1 + e.length) % e.length;
      const u = e[n];
      u != null && u.ref.current && (u.ref.current.focus({ preventScroll: !0 }), x(u.id), T(u.id));
    },
    [v, E]
  );
  N(() => {
    if (!(l != null && l.current)) return;
    const r = l.current, e = (t) => {
      var u;
      const { key: n } = t;
      if (n === "Escape" || n === "Esc") {
        if (!c) return;
        t.preventDefault(), d == null || d(!1), r.focus();
        return;
      }
      if (n === "Enter" || n === " ") {
        if (t.preventDefault(), !c)
          k.current = !0, d == null || d(!0);
        else {
          const m = A.current.filter((a) => !a.disabled);
          if (!m.length) return;
          (u = (m.find((a) => a.id === v) ?? m[0]).ref.current) == null || u.click();
        }
        return;
      }
      if (n === "ArrowDown") {
        t.preventDefault(), c ? K("next") : (k.current = !0, d == null || d(!0));
        return;
      }
      n === "ArrowUp" && c && (t.preventDefault(), K("prev"));
    };
    return r.addEventListener("keydown", e), () => {
      r.removeEventListener("keydown", e);
    };
  }, [l, c, d, v, K]), N(() => {
    if (!(l != null && l.current)) return;
    const r = l.current, e = (t) => {
      t.preventDefault(), k.current = !1, d == null || d(!c);
    };
    return r.addEventListener("mousedown", e), () => {
      r.removeEventListener("mousedown", e);
    };
  }, [l, c, d]), N(() => {
    if (!c) {
      x(null), z(null), y(!1), D(!1), T(null), M.current = { query: "", lastTime: 0 };
      return;
    }
    k.current && (k.current = !1, requestAnimationFrame(() => {
      U(void 0);
    }));
  }, [U, c]);
  const Y = V ?? l;
  N(() => {
    if (!c) return;
    const r = (e) => {
      const { key: t, shiftKey: n, metaKey: u, ctrlKey: m, altKey: _ } = e, a = e.target;
      if (!(u || m || _)) {
        if (t === "Enter" || t === " ") {
          if (a && (a.tagName === "INPUT" || a.tagName === "TEXTAREA" || a.isContentEditable))
            return;
          e.preventDefault(), e.stopPropagation();
          const s = E();
          if (!s.length) return;
          let o;
          !F && P && (o = s.find((w) => w.id === P)), !o && v && (o = s.find((w) => w.id === v)), o || (o = s[0]), o != null && o.ref.current && (o.ref.current.click(), o.ref.current.focus({ preventScroll: !0 }), x(o.id), T(o.id), y(!0), D(!0));
          return;
        }
        if (t === "Tab") {
          e.preventDefault(), e.stopPropagation(), K(n ? "prev" : "next"), y(!0), D(!0);
          return;
        }
        if (t === "ArrowDown" || t === "ArrowUp") {
          if (a && (a.tagName === "INPUT" || a.tagName === "TEXTAREA" || a.isContentEditable))
            return;
          e.preventDefault(), e.stopPropagation();
          const s = E();
          if (!s.length) return;
          const o = s.length;
          if (!v) {
            if (!F && P) {
              const f = s.findIndex((I) => I.id === P);
              if (f !== -1) {
                const I = t === "ArrowDown" ? (f + 1) % o : (f - 1 + o) % o, i = s[I];
                i != null && i.ref.current && (i.ref.current.focus({ preventScroll: !0 }), x(i.id), T(i.id), y(!0), D(!0));
                return;
              }
            }
            if (q) {
              const f = s.findIndex((I) => I.id === q);
              if (f !== -1) {
                const I = t === "ArrowDown" ? (f + 1) % o : (f - 1 + o) % o, i = s[I];
                i != null && i.ref.current && (i.ref.current.focus({ preventScroll: !0 }), x(i.id), T(i.id), y(!0), D(!0));
                return;
              }
            }
            U(void 0), y(!0), D(!0);
            return;
          }
          const w = s.findIndex((f) => f.id === v), L = w === -1 ? 0 : w, H = t === "ArrowDown" ? (L + 1) % o : (L - 1 + o) % o, h = s[H];
          h != null && h.ref.current && (h.ref.current.focus({ preventScroll: !0 }), x(h.id), T(h.id), y(!0), D(!0));
        }
      }
    };
    return window.addEventListener("keydown", r, !0), () => {
      window.removeEventListener("keydown", r, !0);
    };
  }, [
    U,
    v,
    E,
    F,
    P,
    q,
    K,
    c
  ]), N(() => {
    if (!c) return;
    const r = () => {
      C && D(!1);
    };
    return window.addEventListener("pointermove", r), () => {
      window.removeEventListener("pointermove", r);
    };
  }, [c, C]), N(() => {
    if (!c) return;
    const r = 500, e = (t) => {
      const { key: n, metaKey: u, ctrlKey: m, altKey: _ } = t;
      if (u || m || _ || n === " " || n.length !== 1) return;
      const a = n.toLowerCase();
      if (!/^[\w !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]$/.test(a)) return;
      t.preventDefault();
      const s = Date.now(), { lastTime: o } = M.current;
      let { query: w } = M.current;
      s - o > r && (w = ""), w += a, M.current = { query: w, lastTime: s };
      const L = E();
      if (!L.length) return;
      const H = w.toLowerCase(), h = (I) => {
        const i = I.ref.current;
        return i ? (i.textContent || i.innerText || "").trim().toLowerCase() : "";
      }, f = L.find((I) => h(I).startsWith(H)) || // Fallback to "contains" match
      L.find((I) => h(I).includes(H));
      f != null && f.ref.current && (f.ref.current.focus({ preventScroll: !0 }), x(f.id), T(f.id));
    };
    return window.addEventListener("keydown", e), () => {
      window.removeEventListener("keydown", e);
    };
  }, [E, c]);
  const B = b((r) => {
    x(r);
  }, []), J = {
    triggerRef: l,
    anchorRef: Y,
    open: c !== void 0 ? c : !1,
    setOpen: d !== void 0 ? d : () => {
    },
    registerItem: $,
    focusedItemId: v,
    setFocusedItem: B,
    clearFocus: j,
    setHoveredItem: Q,
    keyboardInteraction: F
  };
  return /* @__PURE__ */ Z(p.Provider, { value: J, children: X });
};
export {
  ne as MenuContext,
  p as RawMenuContext,
  te as useMenuContext,
  re as useMenuContextOptional
};
