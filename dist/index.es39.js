import "./index.es39.css";
import { jsx as d } from "./index.es203.js";
import { Fragment as G } from "preact";
import { useState as B, useEffect as k, useRef as b, useMemo as U } from "preact/hooks";
/* empty css            */
import { Tooltip as q } from "./index.es52.js";
import { Text as H } from "./index.es49.js";
import { Icon as J } from "./index.es16.js";
import { typedForwardRef as O } from "./index.es205.js";
import { bem as R } from "./index.es65.js";
const Q = ({
  id: L,
  className: S,
  options: c = [],
  value: w,
  defaultValue: T,
  disabled: f = !1,
  fullWidth: C = !1,
  onValueChange: v,
  tabIndex: D,
  ...M
}, P) => {
  const [N, E] = B(T), g = w !== void 0, y = g ? w : N;
  k(() => {
    g && E(w);
  }, [g, w]);
  const F = R("SegmentedControl", void 0, {
    fullWidth: C
  }), a = b([]);
  a.current = c.map((t, e) => a.current[e] || null);
  const x = b([]);
  x.current = c.map(
    (t, e) => x.current[e] || { current: null }
  );
  const m = b(null), h = U(() => c.findIndex((t) => t.value === y), [c, y]), A = (t) => {
    const e = Math.max(0, Math.min(c.length - 1, t)), n = a.current[e];
    n && n.focus();
  }, K = (t, e) => {
    g || E(e), v == null || v({ event: t, value: e });
  };
  k(() => {
    const t = (i) => {
      i.key === "Tab" && (m.current = i.shiftKey ? "backward" : "forward");
    }, e = () => {
      m.current = null;
    }, n = (i) => {
      const l = i.target;
      if (!l || a.current.findIndex((p) => p === l) === -1) return;
      const u = m.current;
      if (!u) return;
      const o = u === "backward" ? c.length - 1 : 0;
      if (o < 0) return;
      const s = a.current[o];
      s && s !== l && s.focus(), m.current = null;
    };
    return window.addEventListener("keydown", t), window.addEventListener("pointerdown", e, !0), window.addEventListener("focusin", n), () => {
      window.removeEventListener("keydown", t), window.removeEventListener("pointerdown", e, !0), window.removeEventListener("focusin", n);
    };
  }, [c.length]);
  const _ = (t) => {
    if (f) return;
    const e = t, n = e.key, i = n === "ArrowLeft" || n === "ArrowRight" || n === "ArrowUp" || n === "ArrowDown", l = n === "Tab";
    if (i || l) {
      const r = e.target, u = r ? a.current.findIndex((I) => I === r) : -1, o = u >= 0 ? u : h >= 0 ? h : 0;
      if (l) {
        m.current = null;
        const I = c.length - 1;
        if (!e.shiftKey && o === I || e.shiftKey && o === 0)
          return;
        e.stopPropagation(), e.preventDefault();
        const j = e.shiftKey ? -1 : 1, z = o + j;
        A(z);
        return;
      }
      e.stopPropagation(), e.preventDefault();
      const p = (o + (n === "ArrowRight" || n === "ArrowDown" ? 1 : -1) + c.length) % c.length;
      A(p);
      return;
    }
    if (n === "Enter" || n === " " || n === "Spacebar") {
      e.stopPropagation(), e.preventDefault();
      const r = e.target, u = r ? a.current.findIndex((s) => s === r) : -1, o = u >= 0 ? u : h >= 0 ? h : -1;
      if (o >= 0) {
        const s = c[o];
        s && K(e, s.value);
      }
      return;
    }
    if (n === "Escape" || n === "Esc") {
      e.stopPropagation(), e.preventDefault();
      const r = e.target;
      r && typeof r.blur == "function" && r.blur();
    }
  };
  return /* @__PURE__ */ d(
    "div",
    {
      id: L,
      className: [F, S].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: P,
      ...M,
      onKeyDown: _,
      children: c.map((t, e) => {
        const n = t.value === y, i = x.current[e], l = R("SegmentedControl", "item", {
          selected: n,
          disabled: f,
          icon: !!t.icon
        });
        return /* @__PURE__ */ d(G, { children: [
          /* @__PURE__ */ d(
            "button",
            {
              className: l,
              ref: (r) => {
                a.current[e] = r, i.current = r;
              },
              tabIndex: D !== void 0 ? n ? D : -1 : n ? 0 : -1,
              onClick: (r) => K(r, t.value),
              disabled: f,
              children: [
                t.icon && /* @__PURE__ */ d(
                  J,
                  {
                    glyph: typeof t.icon.glyph == "function" ? t.icon.glyph : void 0,
                    intent: "neutral",
                    intentModifier: n ? "default" : "secondary",
                    variant: t.icon.variant,
                    size: t.icon.size,
                    disabled: f,
                    children: typeof t.icon.glyph != "function" ? t.icon.glyph : void 0
                  }
                ),
                !t.icon && /* @__PURE__ */ d(H, { intent: "neutral", intentModifier: n ? "default" : "secondary", disabled: f, children: t.label })
              ]
            },
            t.value
          ),
          t.icon && /* @__PURE__ */ d(q, { anchorRef: i, children: t.label })
        ] }, t.value);
      })
    }
  );
}, re = O(Q);
export {
  re as SegmentedControl
};
