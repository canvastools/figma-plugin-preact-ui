import "./index.es37.css";
import { jsx as f } from "./index.es178.js";
import { Fragment as B } from "preact";
import { useState as G, useEffect as K, useRef as I, useMemo as U } from "preact/hooks";
/* empty css            */
import { Icon as q } from "./index.es16.js";
import { Text as H } from "./index.es47.js";
import { Tooltip as J } from "./index.es50.js";
import { typedForwardRef as O } from "./index.es180.js";
import { bem as k } from "./index.es63.js";
const Q = ({
  id: R,
  className: S,
  options: c = [],
  value: m,
  defaultValue: T,
  disabled: u = !1,
  fullWidth: C = !1,
  onValueChange: v,
  tabIndex: b,
  ...L
}, M) => {
  const [N, D] = G(T), g = m !== void 0, y = g ? m : N;
  K(() => {
    g && D(m);
  }, [g, m]);
  const P = k("SegmentedControl", void 0, {
    fullWidth: C
  }), i = I([]);
  i.current = c.map((t, e) => i.current[e] || null);
  const x = I([]);
  x.current = c.map(
    (t, e) => x.current[e] || { current: null }
  );
  const h = I(null), w = U(() => c.findIndex((t) => t.value === y), [c, y]), A = (t) => {
    const e = Math.max(0, Math.min(c.length - 1, t)), n = i.current[e];
    n && n.focus();
  }, E = (t, e) => {
    g || D(e), v == null || v({ event: t, value: e });
  };
  K(() => {
    const t = (n) => {
      n.key === "Tab" && (h.current = n.shiftKey ? "backward" : "forward");
    }, e = (n) => {
      const s = n.target;
      if (!s || i.current.findIndex((l) => l === s) === -1) return;
      const r = h.current;
      if (!r) return;
      const a = r === "backward" ? c.length - 1 : 0;
      if (a < 0) return;
      const o = i.current[a];
      o && o !== s && o.focus(), h.current = null;
    };
    return window.addEventListener("keydown", t), window.addEventListener("focusin", e), () => {
      window.removeEventListener("keydown", t), window.removeEventListener("focusin", e);
    };
  }, [c.length]);
  const F = (t) => {
    if (u) return;
    const e = t, n = e.key, s = n === "ArrowLeft" || n === "ArrowRight" || n === "ArrowUp" || n === "ArrowDown", d = n === "Tab";
    if (s || d) {
      const r = e.target, a = r ? i.current.findIndex((p) => p === r) : -1, o = a >= 0 ? a : w >= 0 ? w : 0;
      if (d) {
        h.current = null;
        const p = c.length - 1;
        if (!e.shiftKey && o === p || e.shiftKey && o === 0)
          return;
        e.stopPropagation(), e.preventDefault();
        const j = e.shiftKey ? -1 : 1, z = o + j;
        A(z);
        return;
      }
      e.stopPropagation(), e.preventDefault();
      const _ = (o + (n === "ArrowRight" || n === "ArrowDown" ? 1 : -1) + c.length) % c.length;
      A(_);
      return;
    }
    if (n === "Enter" || n === " " || n === "Spacebar") {
      e.stopPropagation(), e.preventDefault();
      const r = e.target, a = r ? i.current.findIndex((l) => l === r) : -1, o = a >= 0 ? a : w >= 0 ? w : -1;
      if (o >= 0) {
        const l = c[o];
        l && E(e, l.value);
      }
      return;
    }
    if (n === "Escape" || n === "Esc") {
      e.stopPropagation(), e.preventDefault();
      const r = e.target;
      r && typeof r.blur == "function" && r.blur();
    }
  };
  return /* @__PURE__ */ f(
    "div",
    {
      id: R,
      className: [P, S].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: M,
      ...L,
      onKeyDown: F,
      children: c.map((t, e) => {
        const n = t.value === y, s = x.current[e], d = k("SegmentedControl", "item", {
          selected: n,
          disabled: u,
          icon: !!t.icon
        });
        return /* @__PURE__ */ f(B, { children: [
          /* @__PURE__ */ f(
            "button",
            {
              className: d,
              ref: (r) => {
                i.current[e] = r, s.current = r;
              },
              tabIndex: b !== void 0 ? n ? b : -1 : n ? 0 : -1,
              onClick: (r) => E(r, t.value),
              disabled: u,
              children: [
                t.icon && /* @__PURE__ */ f(
                  q,
                  {
                    glyph: typeof t.icon.glyph == "function" ? t.icon.glyph : void 0,
                    intent: "neutral",
                    intentModifier: n ? "default" : "secondary",
                    variant: t.icon.variant,
                    size: t.icon.size,
                    disabled: u,
                    children: typeof t.icon.glyph != "function" ? t.icon.glyph : void 0
                  }
                ),
                !t.icon && /* @__PURE__ */ f(H, { intent: "neutral", intentModifier: n ? "default" : "secondary", disabled: u, children: t.label })
              ]
            },
            t.value
          ),
          t.icon && /* @__PURE__ */ f(J, { anchorRef: s, children: t.label })
        ] }, t.value);
      })
    }
  );
}, re = O(Q);
export {
  re as SegmentedControl
};
