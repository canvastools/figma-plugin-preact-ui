import { jsx as A } from "./index.es129.js";
import { createContext as C } from "preact";
import { useState as P, useEffect as g, useRef as b, useContext as j } from "preact/hooks";
const p = C(void 0), V = () => {
  const a = j(p);
  if (!a) throw new Error("TabContext not found");
  return a;
}, q = ({ defaultActiveId: a = "", activeId: c, onTabChange: x, children: E }) => {
  const [I, y] = P(a), T = c !== void 0 ? c : I, k = (n) => {
    c === void 0 && y(n), x == null || x({ id: n });
  };
  g(() => {
    c !== void 0 && y(c);
  }, [c]);
  const f = b([]), w = b(null), K = (n, e) => {
    const r = f.current, t = r.findIndex((o) => o.id === n);
    if (!e) {
      t !== -1 && r.splice(t, 1);
      return;
    }
    t === -1 ? r.push({ id: n, ref: e }) : r[t].ref = e;
  }, D = (n) => {
    var o;
    const e = f.current;
    if (!e.length) return;
    const r = n ?? ((o = e[0]) == null ? void 0 : o.id);
    if (!r) return;
    const t = e.find((u) => u.id === r) ?? e[0];
    t != null && t.ref && t.ref.focus();
  }, R = (n) => {
    const e = f.current;
    if (!e.length) return;
    const r = document.activeElement;
    let t = r ? e.findIndex((d) => d.ref === r) : -1;
    t === -1 && (t = 0);
    const u = (t + (n === "next" ? 1 : -1) + e.length) % e.length, s = e[u];
    s != null && s.ref && s.ref.focus();
  }, v = (n) => {
    const e = n.key;
    if (e === "ArrowLeft" || e === "ArrowRight" || e === "ArrowUp" || e === "ArrowDown" || e === "Tab") {
      const t = document.activeElement, o = f.current;
      if (!(t ? o.some((i) => i.ref === t) : !1)) return;
      const s = t ? o.findIndex((i) => i.ref === t) : -1;
      if (e === "Tab") {
        const i = o.length - 1;
        if (!n.shiftKey && s === i || n.shiftKey && s === 0)
          return;
        n.stopPropagation(), n.preventDefault(), w.current = null;
        const m = n.shiftKey ? -1 : 1, L = s + m, l = o[L];
        l != null && l.ref && l.ref.focus();
        return;
      }
      n.stopPropagation(), n.preventDefault(), R(e === "ArrowRight" || e === "ArrowDown" ? "next" : "prev");
      return;
    }
    if (e === "Escape" || e === "Esc") {
      const t = document.activeElement, o = f.current;
      if (!(t ? o.some((s) => s.ref === t) : !1)) return;
      t && typeof t.blur == "function" && t.blur();
    }
  }, F = {
    activeId: T,
    onTabChange: k,
    setActiveTab: y,
    registerTab: K,
    setFocusedTab: D
  }, h = b(v);
  return h.current = v, g(() => {
    const n = (e) => {
      h.current(e);
    };
    return window.addEventListener("keydown", n), () => {
      window.removeEventListener("keydown", n);
    };
  }, []), g(() => {
    const n = (r) => {
      r.key === "Tab" && (w.current = r.shiftKey ? "backward" : "forward");
    }, e = (r) => {
      const t = r.target;
      if (!t) return;
      const o = f.current;
      if (o.findIndex((m) => m.ref === t) === -1) return;
      const s = w.current;
      if (!s) return;
      const d = s === "backward" ? o.length - 1 : 0;
      if (d < 0) return;
      const i = o[d];
      i != null && i.ref && i.ref !== t && i.ref.focus(), w.current = null;
    };
    return window.addEventListener("keydown", n), window.addEventListener("focusin", e), () => {
      window.removeEventListener("keydown", n), window.removeEventListener("focusin", e);
    };
  }, []), /* @__PURE__ */ A(p.Provider, { value: F, children: E });
};
export {
  q as TabContext,
  V as useTabContext
};
