import "./index.es23.css";
import { jsx as o } from "./index.es143.js";
import { useContext as k, useRef as d, useState as w, useCallback as p, useEffect as f } from "preact/hooks";
import { Icon as _ } from "./index.es16.js";
import { RawMenuContext as U } from "./index.es24.js";
/* empty css            */
import { typedForwardRef as A } from "./index.es145.js";
import { bem as P } from "./index.es62.js";
import { chevronUp as j } from "./index.es80.js";
import { chevronDown as q } from "./index.es77.js";
const B = 6, O = ({ id: M, className: S, width: E, height: L, children: R, ...T }, z) => {
  const s = k(U), b = (s == null ? void 0 : s.keyboardInteraction) ?? !1, i = d(null), c = d(null), a = d(!1), [y, v] = w(!1), [x, h] = w(!1), t = p(() => {
    const e = i.current;
    if (!e) {
      v(!1), h(!1);
      return;
    }
    v(e.scrollTop > 1), h(e.scrollTop + e.clientHeight < e.scrollHeight - 1);
  }, []);
  f(() => {
    const e = i.current;
    if (!e) return;
    t();
    let n = null;
    try {
      n = new ResizeObserver(t), n.observe(e);
    } catch {
    }
    return window.addEventListener("resize", t), () => {
      n == null || n.disconnect(), window.removeEventListener("resize", t);
    };
  }, [t]);
  const l = p(() => {
    c.current != null && (cancelAnimationFrame(c.current), c.current = null);
  }, []), C = p(
    (e) => {
      l();
      const n = () => {
        const r = i.current;
        if (!r) return;
        r.scrollTop += B * e, t(), (e > 0 ? r.scrollTop + r.clientHeight < r.scrollHeight - 1 : r.scrollTop > 1) ? c.current = requestAnimationFrame(n) : c.current = null;
      };
      c.current = requestAnimationFrame(n);
    },
    [l, t]
  );
  f(() => {
    const e = i.current;
    if (!e) return;
    const n = () => {
      a.current = !0;
    }, r = () => {
      a.current = !1;
    }, u = (N) => {
      if (a.current) return;
      const m = N.target;
      if (!m || !e.contains(m)) return;
      const D = e.getBoundingClientRect(), g = m.getBoundingClientRect(), I = g.top - D.top + e.scrollTop + g.height / 2 - e.clientHeight / 2, F = e.scrollHeight - e.clientHeight;
      e.scrollTop = Math.max(0, Math.min(F, I)), t();
    };
    return e.addEventListener("pointerdown", n, !0), window.addEventListener("pointerup", r, !0), e.addEventListener("focusin", u), () => {
      e.removeEventListener("pointerdown", n, !0), window.removeEventListener("pointerup", r, !0), e.removeEventListener("focusin", u);
    };
  }, [t]), f(() => () => l(), [l]);
  const H = P("MenuContainer", void 0, {
    "keyboard-interaction": b
  });
  return /* @__PURE__ */ o(
    "div",
    {
      id: M,
      className: [H, S].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: z,
      ...T,
      style: {
        width: E,
        height: L
      },
      children: [
        /* @__PURE__ */ o("div", { className: "MenuContainer__scroll-area", ref: i, onScroll: t, children: R }),
        y && /* @__PURE__ */ o(
          "div",
          {
            className: "MenuContainer__scroll-zone MenuContainer__scroll-zone_top",
            onMouseEnter: () => C(-1),
            onMouseLeave: l,
            children: /* @__PURE__ */ o("div", { className: "MenuContainer__scroll-zone-inner", children: /* @__PURE__ */ o(_, { glyph: j, intent: "neutral-inverted-fixed" }) })
          }
        ),
        x && /* @__PURE__ */ o(
          "div",
          {
            className: "MenuContainer__scroll-zone MenuContainer__scroll-zone_bottom",
            onMouseEnter: () => C(1),
            onMouseLeave: l,
            children: /* @__PURE__ */ o("div", { className: "MenuContainer__scroll-zone-inner", children: /* @__PURE__ */ o(_, { glyph: q, intent: "neutral-inverted-fixed" }) })
          }
        )
      ]
    }
  );
}, ee = A(O);
export {
  ee as MenuContainer
};
