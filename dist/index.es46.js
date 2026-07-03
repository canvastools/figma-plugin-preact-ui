import { jsx as C } from "./index.es203.js";
import { createContext as P } from "preact";
import { useState as G, useCallback as b, useEffect as g, useRef as p, useMemo as j, useContext as M } from "preact/hooks";
const K = P(void 0), q = () => {
  const l = M(K);
  if (!l) throw new Error("TabContext not found");
  return l;
}, z = ({ defaultActiveId: l = "", activeId: f, onTabChange: x, children: L }) => {
  const [R, m] = G(l), E = f !== void 0 ? f : R, h = b(
    (n) => {
      f === void 0 && m(n), x == null || x({ id: n });
    },
    [f, x]
  );
  g(() => {
    f !== void 0 && m(f);
  }, [f]);
  const d = p([]), a = p(null), I = b((n, e) => {
    const o = d.current, t = o.findIndex((r) => r.id === n);
    if (!e) {
      t !== -1 && o.splice(t, 1);
      return;
    }
    t === -1 ? o.push({ id: n, ref: e }) : o[t].ref = e;
  }, []), T = b((n) => {
    var r;
    const e = d.current;
    if (!e.length) return;
    const o = n ?? ((r = e[0]) == null ? void 0 : r.id);
    if (!o) return;
    const t = e.find((i) => i.id === o) ?? e[0];
    t != null && t.ref && t.ref.focus();
  }, []), F = (n) => {
    const e = d.current;
    if (!e.length) return;
    const o = document.activeElement;
    let t = o ? e.findIndex((w) => w.ref === o) : -1;
    t === -1 && (t = 0);
    const i = (t + (n === "next" ? 1 : -1) + e.length) % e.length, s = e[i];
    s != null && s.ref && s.ref.focus();
  }, k = (n) => {
    const e = n.key;
    if (e === "ArrowLeft" || e === "ArrowRight" || e === "ArrowUp" || e === "ArrowDown" || e === "Tab") {
      const t = document.activeElement, r = d.current;
      if (!(t ? r.some((c) => c.ref === t) : !1)) return;
      const s = t ? r.findIndex((c) => c.ref === t) : -1;
      if (e === "Tab") {
        const c = r.length - 1;
        if (!n.shiftKey && s === c || n.shiftKey && s === 0)
          return;
        n.stopPropagation(), n.preventDefault(), a.current = null;
        const u = n.shiftKey ? -1 : 1, v = s + u, y = r[v];
        y != null && y.ref && y.ref.focus();
        return;
      }
      n.stopPropagation(), n.preventDefault(), F(e === "ArrowRight" || e === "ArrowDown" ? "next" : "prev");
      return;
    }
    if (e === "Escape" || e === "Esc") {
      const t = document.activeElement, r = d.current;
      if (!(t ? r.some((s) => s.ref === t) : !1)) return;
      t && typeof t.blur == "function" && t.blur();
    }
  }, A = j(
    () => ({
      activeId: E,
      onTabChange: h,
      setActiveTab: m,
      registerTab: I,
      setFocusedTab: T
    }),
    [E, h, I, T]
  ), D = p(k);
  return D.current = k, g(() => {
    const n = (e) => {
      D.current(e);
    };
    return window.addEventListener("keydown", n), () => {
      window.removeEventListener("keydown", n);
    };
  }, []), g(() => {
    const n = (t) => {
      t.key === "Tab" && (a.current = t.shiftKey ? "backward" : "forward");
    }, e = () => {
      a.current = null;
    }, o = (t) => {
      const r = t.target;
      if (!r) return;
      const i = d.current;
      if (i.findIndex((v) => v.ref === r) === -1) return;
      const w = a.current;
      if (!w) return;
      const c = w === "backward" ? i.length - 1 : 0;
      if (c < 0) return;
      const u = i[c];
      u != null && u.ref && u.ref !== r && u.ref.focus(), a.current = null;
    };
    return window.addEventListener("keydown", n), window.addEventListener("pointerdown", e, !0), window.addEventListener("focusin", o), () => {
      window.removeEventListener("keydown", n), window.removeEventListener("pointerdown", e, !0), window.removeEventListener("focusin", o);
    };
  }, []), /* @__PURE__ */ C(K.Provider, { value: A, children: L });
};
export {
  z as TabContext,
  q as useTabContext
};
