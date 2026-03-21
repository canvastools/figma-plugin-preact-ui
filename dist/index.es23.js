import "./index.es23.css";
import { jsx as r } from "./index.es129.js";
import { useContext as I, useRef as h, useState as v, useCallback as u, useEffect as m } from "preact/hooks";
import { Icon as g } from "./index.es16.js";
import { RawMenuContext as F } from "./index.es24.js";
/* empty css            */
import { typedForwardRef as k } from "./index.es131.js";
import { bem as D } from "./index.es62.js";
import { chevronUp as A } from "./index.es73.js";
import { chevronDown as U } from "./index.es70.js";
const j = 6, q = ({ id: _, className: M, width: S, height: R, children: w, ...T }, z) => {
  const a = I(F), E = (a == null ? void 0 : a.keyboardInteraction) ?? !1, s = h(null), l = h(null), [b, p] = v(!1), [y, d] = v(!1), t = u(() => {
    const e = s.current;
    if (!e) {
      p(!1), d(!1);
      return;
    }
    p(e.scrollTop > 1), d(e.scrollTop + e.clientHeight < e.scrollHeight - 1);
  }, []);
  m(() => {
    const e = s.current;
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
  const c = u(() => {
    l.current != null && (cancelAnimationFrame(l.current), l.current = null);
  }, []), f = u(
    (e) => {
      c();
      const n = () => {
        const o = s.current;
        if (!o) return;
        o.scrollTop += j * e, t(), (e > 0 ? o.scrollTop + o.clientHeight < o.scrollHeight - 1 : o.scrollTop > 1) ? l.current = requestAnimationFrame(n) : l.current = null;
      };
      l.current = requestAnimationFrame(n);
    },
    [c, t]
  );
  m(() => {
    const e = s.current;
    if (!e) return;
    const n = (o) => {
      const i = o.target;
      if (!i || !e.contains(i)) return;
      const x = e.getBoundingClientRect(), C = i.getBoundingClientRect(), H = C.top - x.top + e.scrollTop + C.height / 2 - e.clientHeight / 2, N = e.scrollHeight - e.clientHeight;
      e.scrollTop = Math.max(0, Math.min(N, H)), t();
    };
    return e.addEventListener("focusin", n), () => e.removeEventListener("focusin", n);
  }, [t]), m(() => () => c(), [c]);
  const L = D("MenuContainer", void 0, {
    "keyboard-interaction": E
  });
  return /* @__PURE__ */ r(
    "div",
    {
      id: _,
      className: [L, M].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: z,
      ...T,
      style: {
        width: S,
        height: R
      },
      children: [
        /* @__PURE__ */ r("div", { className: "MenuContainer__scroll-area", ref: s, onScroll: t, children: w }),
        b && /* @__PURE__ */ r(
          "div",
          {
            className: "MenuContainer__scroll-zone MenuContainer__scroll-zone_top",
            onMouseEnter: () => f(-1),
            onMouseLeave: c,
            children: /* @__PURE__ */ r("div", { className: "MenuContainer__scroll-zone-inner", children: /* @__PURE__ */ r(g, { glyph: A, intent: "neutral-inverted-fixed" }) })
          }
        ),
        y && /* @__PURE__ */ r(
          "div",
          {
            className: "MenuContainer__scroll-zone MenuContainer__scroll-zone_bottom",
            onMouseEnter: () => f(1),
            onMouseLeave: c,
            children: /* @__PURE__ */ r("div", { className: "MenuContainer__scroll-zone-inner", children: /* @__PURE__ */ r(g, { glyph: U, intent: "neutral-inverted-fixed" }) })
          }
        )
      ]
    }
  );
}, Y = k(q);
export {
  Y as MenuContainer
};
