import "./index.es23.css";
import { jsx as c } from "./index.es203.js";
import { useContext as N, useRef as v, useState as _, useCallback as m, useEffect as d } from "preact/hooks";
import { Icon as M } from "./index.es16.js";
import { RawMenuContext as D } from "./index.es24.js";
/* empty css            */
import { typedForwardRef as I } from "./index.es205.js";
import { bem as q } from "./index.es65.js";
import { chevronUp as k } from "./index.es89.js";
import { chevronDown as U } from "./index.es86.js";
const O = 6, P = ({ id: S, className: E, width: L, height: R, children: T, ...y }, z) => {
  const p = N(D), F = (p == null ? void 0 : p.keyboardInteraction) ?? !1, i = v(null), l = v(null), f = v(!1), [b, h] = _(!1), [x, C] = _(!1), r = m(() => {
    const e = i.current;
    if (!e) {
      h(!1), C(!1);
      return;
    }
    h(e.scrollTop > 1), C(e.scrollTop + e.clientHeight < e.scrollHeight - 1);
  }, []);
  d(() => {
    const e = i.current;
    if (!e) return;
    r();
    let n = null;
    try {
      n = new ResizeObserver(r), n.observe(e);
    } catch {
    }
    return window.addEventListener("resize", r), () => {
      n == null || n.disconnect(), window.removeEventListener("resize", r);
    };
  }, [r]);
  const u = m(
    (e) => {
      const n = i.current;
      if (!n || !n.contains(e)) return;
      const t = n.getBoundingClientRect(), o = e.getBoundingClientRect(), a = o.top - t.top + n.scrollTop + o.height / 2 - n.clientHeight / 2, H = n.scrollHeight - n.clientHeight;
      n.scrollTop = Math.max(0, Math.min(H, a)), r();
    },
    [r]
  );
  d(() => {
    const e = i.current;
    if (!e) return;
    let n = 0, t = 0;
    return n = requestAnimationFrame(() => {
      t = requestAnimationFrame(() => {
        const o = e.querySelector('[data-pui-selected="true"]');
        o && u(o);
      });
    }), () => {
      cancelAnimationFrame(n), cancelAnimationFrame(t);
    };
  }, [u]);
  const s = m(() => {
    l.current != null && (cancelAnimationFrame(l.current), l.current = null);
  }, []), g = m(
    (e) => {
      s();
      const n = () => {
        const t = i.current;
        if (!t) return;
        t.scrollTop += O * e, r(), (e > 0 ? t.scrollTop + t.clientHeight < t.scrollHeight - 1 : t.scrollTop > 1) ? l.current = requestAnimationFrame(n) : l.current = null;
      };
      l.current = requestAnimationFrame(n);
    },
    [s, r]
  );
  d(() => {
    const e = i.current;
    if (!e) return;
    const n = () => {
      f.current = !0;
    }, t = () => {
      f.current = !1;
    }, o = (w) => {
      if (f.current) return;
      const a = w.target;
      !a || !e.contains(a) || u(a);
    };
    return e.addEventListener("pointerdown", n, !0), window.addEventListener("pointerup", t, !0), e.addEventListener("focusin", o), () => {
      e.removeEventListener("pointerdown", n, !0), window.removeEventListener("pointerup", t, !0), e.removeEventListener("focusin", o);
    };
  }, [u]), d(() => () => s(), [s]);
  const A = q("MenuContainer", void 0, {
    "keyboard-interaction": F
  });
  return /* @__PURE__ */ c(
    "div",
    {
      id: S,
      className: [A, E].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: z,
      ...y,
      style: {
        width: L,
        height: R
      },
      children: [
        /* @__PURE__ */ c("div", { className: "MenuContainer__scroll-area", ref: i, onScroll: r, children: T }),
        b && /* @__PURE__ */ c(
          "div",
          {
            className: "MenuContainer__scroll-zone MenuContainer__scroll-zone_top",
            onMouseEnter: () => g(-1),
            onMouseLeave: s,
            children: /* @__PURE__ */ c("div", { className: "MenuContainer__scroll-zone-inner", children: /* @__PURE__ */ c(M, { glyph: k, intent: "neutral-inverted-fixed" }) })
          }
        ),
        x && /* @__PURE__ */ c(
          "div",
          {
            className: "MenuContainer__scroll-zone MenuContainer__scroll-zone_bottom",
            onMouseEnter: () => g(1),
            onMouseLeave: s,
            children: /* @__PURE__ */ c("div", { className: "MenuContainer__scroll-zone-inner", children: /* @__PURE__ */ c(M, { glyph: U, intent: "neutral-inverted-fixed" }) })
          }
        )
      ]
    }
  );
}, Y = I(P);
export {
  Y as MenuContainer
};
