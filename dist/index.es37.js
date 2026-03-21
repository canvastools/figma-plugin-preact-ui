import "./index.es37.css";
import { jsx as f } from "./index.es129.js";
import { Fragment as z } from "preact";
import { useState as B, useEffect as E, useRef as p, useMemo as G } from "preact/hooks";
/* empty css            */
import { Icon as U } from "./index.es16.js";
import { Text as q } from "./index.es47.js";
import { Tooltip as H } from "./index.es50.js";
import { typedForwardRef as J } from "./index.es131.js";
import { bem as K } from "./index.es62.js";
const O = ({
  id: k,
  className: R,
  options: c = [],
  value: m,
  defaultValue: S,
  disabled: u = !1,
  fullWidth: T = !1,
  onValueChange: y,
  ...C
}, L) => {
  const [M, b] = B(S), g = m !== void 0, v = g ? m : M;
  E(() => {
    g && b(m);
  }, [g, m]);
  const N = K("SegmentedControl", void 0, {
    fullWidth: T
  }), i = p([]);
  i.current = c.map((t, e) => i.current[e] || null);
  const x = p([]);
  x.current = c.map(
    (t, e) => x.current[e] || { current: null }
  );
  const h = p(null), w = G(() => c.findIndex((t) => t.value === v), [c, v]), D = (t) => {
    const e = Math.max(0, Math.min(c.length - 1, t)), n = i.current[e];
    n && n.focus();
  }, A = (t, e) => {
    g || b(e), y == null || y({ event: t, value: e });
  };
  E(() => {
    const t = (n) => {
      n.key === "Tab" && (h.current = n.shiftKey ? "backward" : "forward");
    }, e = (n) => {
      const a = n.target;
      if (!a || i.current.findIndex((l) => l === a) === -1) return;
      const r = h.current;
      if (!r) return;
      const s = r === "backward" ? c.length - 1 : 0;
      if (s < 0) return;
      const o = i.current[s];
      o && o !== a && o.focus(), h.current = null;
    };
    return window.addEventListener("keydown", t), window.addEventListener("focusin", e), () => {
      window.removeEventListener("keydown", t), window.removeEventListener("focusin", e);
    };
  }, [c.length]);
  const P = (t) => {
    if (u) return;
    const e = t, n = e.key, a = n === "ArrowLeft" || n === "ArrowRight" || n === "ArrowUp" || n === "ArrowDown", d = n === "Tab";
    if (a || d) {
      const r = e.target, s = r ? i.current.findIndex((I) => I === r) : -1, o = s >= 0 ? s : w >= 0 ? w : 0;
      if (d) {
        h.current = null;
        const I = c.length - 1;
        if (!e.shiftKey && o === I || e.shiftKey && o === 0)
          return;
        e.stopPropagation(), e.preventDefault();
        const _ = e.shiftKey ? -1 : 1, j = o + _;
        D(j);
        return;
      }
      e.stopPropagation(), e.preventDefault();
      const F = (o + (n === "ArrowRight" || n === "ArrowDown" ? 1 : -1) + c.length) % c.length;
      D(F);
      return;
    }
    if (n === "Enter" || n === " " || n === "Spacebar") {
      e.stopPropagation(), e.preventDefault();
      const r = e.target, s = r ? i.current.findIndex((l) => l === r) : -1, o = s >= 0 ? s : w >= 0 ? w : -1;
      if (o >= 0) {
        const l = c[o];
        l && A(e, l.value);
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
      id: k,
      className: [N, R].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: L,
      ...C,
      onKeyDown: P,
      children: c.map((t, e) => {
        const n = t.value === v, a = x.current[e], d = K("SegmentedControl", "item", {
          selected: n,
          disabled: u,
          icon: !!t.icon
        });
        return /* @__PURE__ */ f(z, { children: [
          /* @__PURE__ */ f(
            "button",
            {
              className: d,
              ref: (r) => {
                i.current[e] = r, a.current = r;
              },
              tabIndex: n ? 0 : -1,
              onClick: (r) => A(r, t.value),
              disabled: u,
              children: [
                t.icon && /* @__PURE__ */ f(
                  U,
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
                !t.icon && /* @__PURE__ */ f(q, { intent: "neutral", intentModifier: n ? "default" : "secondary", disabled: u, children: t.label })
              ]
            },
            t.value
          ),
          t.icon && /* @__PURE__ */ f(H, { anchorRef: a, children: t.label })
        ] }, t.value);
      })
    }
  );
}, ne = J(O);
export {
  ne as SegmentedControl
};
