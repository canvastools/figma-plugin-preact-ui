import "./index.es36.css";
import { jsx as M } from "./index.es203.js";
import { useState as d, useRef as i, useCallback as C, useEffect as p } from "preact/hooks";
/* empty css            */
import { useScrollContextOptional as nt } from "./index.es35.js";
import { typedForwardRef as rt } from "./index.es205.js";
import { bem as E } from "./index.es65.js";
const T = 12, ct = ({ id: Y, className: B, children: D, ...I }, b) => {
  const r = nt(), [_, N] = d(void 0), [z, F] = d(!0), [O, U] = d(!1), H = r && typeof r.positionY == "number" ? r.positionY : _, q = r ? r.isAtTop : z, P = r ? r.isAtBottom : O, $ = (r == null ? void 0 : r.registerScrollRoot) ?? (() => {
  }), j = i(null), m = i(null), f = i(null), [S, W] = d({ top: 0, height: 24 }), [K, L] = d(!1), [G, J] = d(!1), A = i(0), w = i(!1), x = i(""), R = i(null), y = i(!1), g = i(null), Q = E("ScrollContainer", void 0, void 0), c = C(() => {
    const t = m.current, o = f.current;
    if (!t || !o) return;
    const e = Math.max(0, t.scrollHeight - t.clientHeight), n = e > 0, s = n ? t.clientHeight / t.scrollHeight : 1, l = o.clientHeight - T * 2, u = Math.max(24, Math.round(l * s)), h = l - u, v = n ? Math.round(h * t.scrollTop / e) : 0;
    W({ top: v, height: u }), J(n);
  }, []), a = C(() => {
    R.current == null && (R.current = requestAnimationFrame(() => {
      R.current = null, c();
    }));
  }, [c]);
  p(() => {
    const t = m.current;
    if (!(!t || typeof H != "number"))
      try {
        const o = Math.max(0, t.scrollHeight - t.clientHeight), e = Math.max(0, Math.min(H, o));
        t.scrollTop !== e && (t.scrollTop = e), a();
      } catch {
      }
  }, [H, a]), p(() => {
    a();
  }, [q, P, a]), p(() => {
    const t = m.current;
    if (!t) return;
    const o = () => {
      if (y.current) {
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
      if (y.current) {
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
  const V = (t) => {
    if (r)
      r.onScroll(t);
    else {
      const e = t.currentTarget || t.target;
      if (e) {
        const n = e.scrollHeight - e.clientHeight, s = n > 0;
        let l = !1, u = !1, h;
        s ? (l = e.scrollTop <= 0, u = e.scrollTop >= n, h = l ? 0 : u ? n : e.scrollTop) : h = 0, F(s ? l : !0), U(s ? u : !0), N(h);
      }
    }
    const o = m.current;
    if (o) {
      const e = Math.max(0, o.scrollHeight - o.clientHeight);
      y.current = e > 0 && Math.abs(e - o.scrollTop) <= 1;
    }
    a();
  }, X = (t) => {
    if (t.button !== 0) return;
    const o = f.current;
    if (!o) return;
    t.preventDefault(), L(!0), w.current = !0, c();
    const e = t.clientY;
    A.current = e - (o.getBoundingClientRect().top + T + S.top), x.current = document.body.style.userSelect, document.body.style.userSelect = "none";
    const n = (l) => Z(l), s = () => tt();
    g.current = { move: n, up: s }, window.addEventListener("mousemove", n), window.addEventListener("mouseup", s);
  }, Z = (t) => {
    if (!w.current) return;
    const o = m.current, e = f.current;
    if (!o || !e) return;
    const n = Math.max(0, o.scrollHeight - o.clientHeight);
    if (n <= 0) return;
    const s = e.getBoundingClientRect(), l = t.clientY - s.top - T - A.current, u = e.clientHeight - T * 2, h = S.height, v = u - h;
    if (v <= 0) return;
    t.preventDefault();
    const ot = Math.max(0, Math.min(v, l)), k = Math.round(ot * n / v);
    o.scrollTop !== k && (o.scrollTop = k, a());
  }, tt = () => {
    const t = g.current;
    t && (window.removeEventListener("mousemove", t.move), window.removeEventListener("mouseup", t.up), g.current = null), L(!1), w.current = !1, document.body.style.userSelect = x.current;
  };
  p(() => () => {
    const t = g.current;
    t && (window.removeEventListener("mousemove", t.move), window.removeEventListener("mouseup", t.up), g.current = null), w.current = !1, document.body.style.userSelect = x.current;
  }, []);
  const et = E("ScrollContainer", "track", {
    noScroll: !G,
    dragging: K
  });
  return /* @__PURE__ */ M(
    "div",
    {
      id: Y,
      className: [Q, B].join(" ").trim(),
      ref: (t) => {
        j.current = t, typeof b == "function" ? b(t) : b && (b.current = t);
      },
      ...I,
      children: [
        /* @__PURE__ */ M(
          "div",
          {
            className: "ScrollContainer__content",
            ref: (t) => {
              m.current = t, $(t);
            },
            onScroll: (t) => V(t),
            children: D
          }
        ),
        /* @__PURE__ */ M("div", { className: et, ref: f, "data-pui-interactive": "true", children: /* @__PURE__ */ M(
          "div",
          {
            className: "ScrollContainer__thumb",
            style: {
              height: `${S.height}px`,
              top: `${T}px`,
              transform: `translateY(${S.top}px)`
            },
            "data-pui-interactive": "true",
            onMouseDown: (t) => X(t)
          }
        ) })
      ]
    }
  );
}, ht = rt(ct);
export {
  ht as ScrollContainer
};
