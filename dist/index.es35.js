import "./index.es35.css";
import { jsx as w } from "./index.es143.js";
import { useState as d, useRef as i, useCallback as k, useEffect as p } from "preact/hooks";
/* empty css            */
import { useScrollContextOptional as ot } from "./index.es34.js";
import { typedForwardRef as nt } from "./index.es145.js";
import { bem as C } from "./index.es62.js";
const rt = ({ id: Y, className: E, children: B, ...D }, b) => {
  const r = ot(), [I, N] = d(void 0), [_, z] = d(!0), [F, O] = d(!1), M = r && typeof r.positionY == "number" ? r.positionY : I, q = r ? r.isAtTop : _, P = r ? r.isAtBottom : F, U = (r == null ? void 0 : r.registerScrollRoot) ?? (() => {
  }), j = i(null), m = i(null), f = i(null), [T, W] = d({ top: 0, height: 24 }), [$, y] = d(!1), [G, J] = d(!1), L = i(0), S = i(!1), H = i(""), x = i(null), R = i(!1), g = i(null), K = C("ScrollContainer", void 0, void 0), c = k(() => {
    const t = m.current, o = f.current;
    if (!t || !o) return;
    const e = Math.max(0, t.scrollHeight - t.clientHeight), n = e > 0, s = n ? t.clientHeight / t.scrollHeight : 1, l = o.clientHeight - 8, u = Math.max(24, Math.round(l * s)), h = l - u, v = n ? Math.round(h * t.scrollTop / e) : 0;
    W({ top: v, height: u }), J(n);
  }, []), a = k(() => {
    x.current == null && (x.current = requestAnimationFrame(() => {
      x.current = null, c();
    }));
  }, [c]);
  p(() => {
    const t = m.current;
    if (!(!t || typeof M != "number"))
      try {
        const o = Math.max(0, t.scrollHeight - t.clientHeight), e = Math.max(0, Math.min(M, o));
        t.scrollTop !== e && (t.scrollTop = e), a();
      } catch {
      }
  }, [M, a]), p(() => {
    a();
  }, [q, P, a]), p(() => {
    const t = m.current;
    if (!t) return;
    const o = () => {
      if (R.current) {
        const n = Math.max(0, t.scrollHeight - t.clientHeight);
        t.scrollTop = n;
      }
      c();
    }, e = new ResizeObserver(o);
    return e.observe(t), f.current && e.observe(f.current), () => e.disconnect();
  }, [c]), p(() => {
    c();
    const t = requestAnimationFrame(() => c());
    return () => cancelAnimationFrame(t);
  }, [c]), p(() => {
    const t = m.current;
    if (!t) return;
    const o = new MutationObserver(() => {
      if (R.current) {
        const e = Math.max(0, t.scrollHeight - t.clientHeight);
        t.scrollTop = e;
      }
      a();
    });
    return o.observe(t, { childList: !0, subtree: !0, characterData: !0 }), () => o.disconnect();
  }, [a]), p(() => {
    const t = () => {
      requestAnimationFrame(() => c());
    };
    return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, [c]);
  const Q = (t) => {
    if (r)
      r.onScroll(t);
    else {
      const e = t.currentTarget || t.target;
      if (e) {
        const n = e.scrollHeight - e.clientHeight, s = n > 0;
        let l = !1, u = !1, h;
        s ? (l = e.scrollTop <= 0, u = e.scrollTop >= n, h = l ? 0 : u ? n : e.scrollTop) : h = 0, z(s ? l : !0), O(s ? u : !0), N(h);
      }
    }
    const o = m.current;
    if (o) {
      const e = Math.max(0, o.scrollHeight - o.clientHeight);
      R.current = e > 0 && Math.abs(e - o.scrollTop) <= 1;
    }
    a();
  }, V = (t) => {
    if (t.button !== 0) return;
    const o = f.current;
    if (!o) return;
    t.preventDefault(), y(!0), S.current = !0, c();
    const e = t.clientY;
    L.current = e - (o.getBoundingClientRect().top + T.top + 2), H.current = document.body.style.userSelect, document.body.style.userSelect = "none";
    const n = (l) => X(l), s = () => Z();
    g.current = { move: n, up: s }, window.addEventListener("mousemove", n), window.addEventListener("mouseup", s);
  }, X = (t) => {
    if (!S.current) return;
    const o = m.current, e = f.current;
    if (!o || !e) return;
    const n = Math.max(0, o.scrollHeight - o.clientHeight);
    if (n <= 0) return;
    const s = e.getBoundingClientRect(), l = t.clientY - s.top - 2 - L.current, u = e.clientHeight - 4, h = T.height, v = u - h;
    if (v <= 0) return;
    t.preventDefault();
    const et = Math.max(0, Math.min(v, l)), A = Math.round(et * n / v);
    o.scrollTop !== A && (o.scrollTop = A, a());
  }, Z = () => {
    const t = g.current;
    t && (window.removeEventListener("mousemove", t.move), window.removeEventListener("mouseup", t.up), g.current = null), y(!1), S.current = !1, document.body.style.userSelect = H.current;
  };
  p(() => () => {
    const t = g.current;
    t && (window.removeEventListener("mousemove", t.move), window.removeEventListener("mouseup", t.up), g.current = null), S.current = !1, document.body.style.userSelect = H.current;
  }, []);
  const tt = C("ScrollContainer", "track", {
    noScroll: !G,
    dragging: $
  });
  return /* @__PURE__ */ w(
    "div",
    {
      id: Y,
      className: [K, E].join(" ").trim(),
      ref: (t) => {
        j.current = t, typeof b == "function" ? b(t) : b && (b.current = t);
      },
      ...D,
      children: [
        /* @__PURE__ */ w(
          "div",
          {
            className: "ScrollContainer__content",
            ref: (t) => {
              m.current = t, U(t);
            },
            onScroll: (t) => Q(t),
            children: B
          }
        ),
        /* @__PURE__ */ w("div", { className: tt, ref: f, "data-pui-interactive": "true", children: /* @__PURE__ */ w(
          "div",
          {
            className: "ScrollContainer__thumb",
            style: {
              height: `${T.height}px`,
              transform: `translateY(${T.top}px)`
            },
            "data-pui-interactive": "true",
            onMouseDown: (t) => V(t)
          }
        ) })
      ]
    }
  );
}, mt = nt(rt);
export {
  mt as ScrollContainer
};
