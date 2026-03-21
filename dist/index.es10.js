import "./index.es10.css";
import { jsx as a } from "./index.es129.js";
import { useState as w, useRef as I, useEffect as C, useMemo as Y } from "preact/hooks";
import { ControlGroup as Z } from "./index.es12.js";
import { Input as A } from "./index.es17.js";
import { Select as U } from "./index.es38.js";
import { Text as J } from "./index.es47.js";
import { useNumericInput as M } from "./index.es54.js";
import { useStringInput as Q } from "./index.es55.js";
import { HexColorPicker as ie, HexAlphaColorPicker as le, RgbaColorPicker as ue } from "./index.es138.js";
/* empty css            */
import { typedForwardRef as se } from "./index.es131.js";
import { roundAlpha as B, clamp as H, colorToHex as k, hexToColor as W, colorToHexAlpha as ce, hexAlphaToColor as me, colorToRgba as G, rgbaToColor as d } from "./index.es61.js";
import { bem as de } from "./index.es62.js";
import { Fragment as j } from "preact";
const u = {
  r: {
    min: 0,
    max: 255
  },
  g: {
    min: 0,
    max: 255
  },
  b: {
    min: 0,
    max: 255
  },
  a: {
    min: 0,
    max: 1
  }
}, E = {
  a: {
    min: 0,
    max: 1
  }
}, pe = [
  { value: "rgba", label: "RGB" },
  { value: "hex", label: "Hex" },
  { value: "hexAlpha", label: "Hex alpha" }
], $ = (o) => o.toUpperCase().replace(/[^0-9A-F]/g, "0").padEnd(6, "0").slice(0, 6), ge = ({
  color: o,
  setColor: i,
  type: V,
  setType: b,
  options: P,
  selectRef: S
}) => {
  const e = G(o), g = M({
    value: e.r.toString(),
    required: !0,
    min: u.r.min,
    max: u.r.max,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: !0
  }), O = M({
    value: e.g.toString(),
    required: !0,
    min: u.g.min,
    max: u.g.max,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: !0
  }), h = M({
    value: e.b.toString(),
    required: !0,
    min: u.b.min,
    max: u.b.max,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: !0
  }), v = M({
    value: Math.round(e.a * 100).toString(),
    required: !0,
    min: 0,
    max: 100,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: !0
  }), [p, s] = w(e.r.toString()), [c, l] = w(e.g.toString()), [D, _] = w(e.b.toString()), [x, y] = w(Math.round(e.a * 100).toString());
  return C(() => {
    const t = G(o);
    s(t.r.toString()), l(t.g.toString()), _(t.b.toString()), y(Math.round(t.a * 100).toString());
  }, [o]), /* @__PURE__ */ a(j, { children: [
    /* @__PURE__ */ a("div", { style: { minWidth: "52px" }, children: /* @__PURE__ */ a(
      U,
      {
        ref: S,
        options: P,
        value: V,
        onValueChange: (t) => b(t.value),
        tooltip: "Color mode",
        menuContainerProps: { width: 120 }
      }
    ) }),
    /* @__PURE__ */ a("div", { className: "ColorPicker__controlsValues", children: /* @__PURE__ */ a(Z, { groupFocus: !0, children: [
      /* @__PURE__ */ a(
        A,
        {
          className: "ColorPicker__inputCompact",
          tooltip: "Red",
          value: p,
          onValueChange: (t) => s(t.value),
          onBlur: (t) => {
            const r = g.parse(t.value);
            if (r.error === "required" || r.error === "invalid_number" || r.error === "not_integer") {
              i(d({ r: u.r.min, g: e.g, b: e.b, a: e.a })), s(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "less_than_min") {
              i(d({ r: u.r.min, g: e.g, b: e.b, a: e.a })), s(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "greater_than_max") {
              i(d({ r: u.r.max, g: e.g, b: e.b, a: e.a })), s(String(r.formattedValue ?? "0"));
              return;
            }
            i(d({ r: r.normalizedValue ?? 0, g: e.g, b: e.b, a: e.a })), s(String(r.formattedValue ?? "0"));
          },
          onKeyDown: (t) => g.handleKeyDown(t, (r) => {
            s(String(r));
          })
        }
      ),
      /* @__PURE__ */ a(
        A,
        {
          className: "ColorPicker__inputCompact",
          tooltip: "Green",
          value: c,
          onValueChange: (t) => l(t.value),
          onBlur: (t) => {
            const r = O.parse(t.value);
            if (r.error === "required" || r.error === "invalid_number" || r.error === "not_integer") {
              i(d({ r: e.r, g: u.g.min, b: e.b, a: e.a })), l(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "less_than_min") {
              i(d({ r: e.r, g: u.g.min, b: e.b, a: e.a })), l(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "greater_than_max") {
              i(d({ r: e.r, g: u.g.max, b: e.b, a: e.a })), l(String(r.formattedValue ?? "0"));
              return;
            }
            i(d({ r: e.r, g: r.normalizedValue ?? 0, b: e.b, a: e.a })), l(String(r.formattedValue ?? "0"));
          },
          onKeyDown: (t) => O.handleKeyDown(t, (r) => {
            l(String(r));
          })
        }
      ),
      /* @__PURE__ */ a(
        A,
        {
          className: "ColorPicker__inputCompact",
          tooltip: "Blue",
          value: D,
          onValueChange: (t) => _(t.value),
          onBlur: (t) => {
            const r = h.parse(t.value);
            if (r.error === "required" || r.error === "invalid_number" || r.error === "not_integer") {
              i(d({ r: e.r, g: e.g, b: u.b.min, a: e.a })), _(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "less_than_min") {
              i(d({ r: e.r, g: e.g, b: u.b.min, a: e.a })), _(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "greater_than_max") {
              i(d({ r: e.r, g: e.g, b: u.b.max, a: e.a })), _(String(r.formattedValue ?? "0"));
              return;
            }
            i(d({ r: e.r, g: e.g, b: r.normalizedValue ?? 0, a: e.a })), _(String(r.formattedValue ?? "0"));
          },
          onKeyDown: (t) => h.handleKeyDown(t, (r) => {
            _(String(r));
          })
        }
      ),
      /* @__PURE__ */ a(
        A,
        {
          className: "ColorPicker__controlOpacity",
          tooltip: "Opacity",
          value: x,
          suffix: /* @__PURE__ */ a(J, { intentModifier: "secondary", children: /* @__PURE__ */ a("div", { className: "ColorPicker__controlOpacityContainer", children: "%" }) }),
          onValueChange: (t) => y(t.value),
          onBlur: (t) => {
            const r = v.parse(t.value);
            if (r.error === "required" || r.error === "invalid_number" || r.error === "not_integer") {
              i(d({ r: e.r, g: e.g, b: e.b, a: u.a.min })), y(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "less_than_min") {
              i(d({ r: e.r, g: e.g, b: e.b, a: u.a.min })), y(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "greater_than_max") {
              i(d({ r: e.r, g: e.g, b: e.b, a: u.a.max })), y(String(r.formattedValue ?? "0"));
              return;
            }
            const f = r.normalizedValue ?? 0, q = B(H(f / 100, u.a.min, u.a.max));
            i(d({ r: e.r, g: e.g, b: e.b, a: q })), y(String(r.formattedValue ?? "0"));
          },
          onKeyDown: (t) => v.handleKeyDown(t, (r) => {
            if (y(String(r)), typeof r != "number") return;
            const f = B(H(r / 100, u.a.min, u.a.max));
            i(d({ r: e.r, g: e.g, b: e.b, a: f }));
          })
        }
      )
    ] }) })
  ] });
}, fe = ({
  color: o,
  setColor: i,
  type: V,
  setType: b,
  options: P,
  selectRef: S
}) => {
  const [e, g] = w(k(o).slice(1));
  C(() => {
    g(k(o).slice(1));
  }, [o]);
  const O = Q({
    value: k(o).slice(1),
    required: !0,
    minLength: 6,
    maxLength: 6,
    allowedCharacters: "0123456789abcdefABCDEF",
    trim: !0,
    format: $,
    normalizeOnError: !0
  });
  return /* @__PURE__ */ a(j, { children: [
    /* @__PURE__ */ a("div", { style: { minWidth: "52px" }, children: /* @__PURE__ */ a(
      U,
      {
        ref: S,
        options: P,
        value: V,
        onValueChange: (h) => b(h.value),
        tooltip: "Color mode",
        menuContainerProps: { width: 120 }
      }
    ) }),
    /* @__PURE__ */ a("div", { className: "ColorPicker__controlsValues", children: /* @__PURE__ */ a(
      A,
      {
        tooltip: "Hex value",
        value: e.toUpperCase(),
        onValueChange: (h) => g(h.value),
        onBlur: (h) => {
          const v = O.parse(h.value), p = W(v.formattedValue, o.a);
          p && i({ ...o, ...p }), g(v.formattedValue);
        }
      }
    ) })
  ] });
}, he = ({
  color: o,
  setColor: i,
  type: V,
  setType: b,
  options: P,
  selectRef: S
}) => {
  const [e, g] = w(k(o).slice(1));
  C(() => {
    g(k(o).slice(1));
  }, [o]);
  const O = Q({
    value: k(o).slice(1),
    required: !0,
    minLength: 6,
    maxLength: 6,
    allowedCharacters: "0123456789abcdefABCDEF",
    trim: !0,
    format: $,
    normalizeOnError: !0
  }), h = M({
    // Work in 0–100% space for the UI, map back to 0–1 alpha in handlers
    value: Math.round(o.a * 100).toString(),
    required: !0,
    min: 0,
    max: 100,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: !0
  }), [v, p] = w(Math.round(o.a * 100).toString());
  return C(() => {
    p(Math.round(o.a * 100).toString());
  }, [o.a]), /* @__PURE__ */ a(j, { children: [
    /* @__PURE__ */ a("div", { style: { minWidth: "52px" }, children: /* @__PURE__ */ a(
      U,
      {
        ref: S,
        options: P,
        value: V,
        onValueChange: (s) => b(s.value),
        tooltip: "Color mode",
        menuContainerProps: { width: 120 }
      }
    ) }),
    /* @__PURE__ */ a("div", { className: "ColorPicker__controlsValues", children: /* @__PURE__ */ a(Z, { groupFocus: !0, children: [
      /* @__PURE__ */ a(
        A,
        {
          tooltip: "Hex value",
          value: e.toUpperCase(),
          onValueChange: (s) => g(s.value),
          onBlur: (s) => {
            const c = O.parse(s.value), l = W(c.formattedValue, o.a);
            l && i({ ...o, ...l }), g(c.formattedValue);
          }
        }
      ),
      /* @__PURE__ */ a(
        A,
        {
          tooltip: "Opacity",
          className: "ColorPicker__controlOpacity",
          value: v,
          suffix: /* @__PURE__ */ a(J, { intentModifier: "secondary", children: /* @__PURE__ */ a("div", { className: "ColorPicker__controlOpacityContainer", children: "%" }) }),
          onValueChange: (s) => {
            p(s.value);
          },
          onBlur: (s) => {
            const c = h.parse(s.value);
            if (c.error === "required" || c.error === "invalid_number" || c.error === "not_integer") {
              i({ ...o, a: E.a.min }), p(String(c.formattedValue));
              return;
            }
            if (c.error === "less_than_min") {
              i({ ...o, a: E.a.min }), p(String(c.formattedValue));
              return;
            }
            if (c.error === "greater_than_max") {
              i({ ...o, a: E.a.max }), p(String(c.formattedValue));
              return;
            }
            const l = c.normalizedValue ?? 0, D = B(H(l / 100, E.a.min, E.a.max));
            i({ ...o, a: D }), p(String(c.formattedValue));
          },
          onKeyDown: (s) => h.handleKeyDown(s, (c) => {
            if (p(String(c)), typeof c != "number") return;
            const l = B(H(c / 100, E.a.min, E.a.max));
            i({ ...o, a: l });
          })
        }
      )
    ] }) })
  ] });
}, xe = ({
  id: o,
  className: i,
  defaultType: V = "hex",
  type: b,
  defaultColor: P,
  types: S,
  color: e,
  showControls: g = !0,
  width: O = 207,
  fullWidth: h = !1,
  onTypeChange: v,
  onColorChange: p,
  ...s
}, c) => {
  const [l, D] = w(() => e || P || { r: 1, g: 0, b: 0, a: 1 }), _ = I(null);
  C(() => {
    if (e) {
      const n = {
        ...e,
        a: B(H(e.a, 0, 1))
      };
      D(n), _.current = n;
    }
  }, [e]);
  const x = Y(
    () => S && S.length ? S : ["hex", "hexAlpha", "rgba"],
    [S]
  ), [y, t] = w(
    () => x.includes(V) ? V : x[0]
  );
  C(() => {
    b && t(b);
  }, [b]);
  const r = Y(() => x && x.length ? x.join("|") : "", [x]);
  C(() => {
    if (b)
      return;
    const n = x.includes(V) ? V : x[0];
    t(n);
  }, [V, r, x, b]);
  const f = y, q = (n) => {
    n !== y && (t(n), v == null || v({ type: n }));
  }, z = I(null), L = I(!1), F = I(null), R = I(null), ee = (n, m) => n.r === m.r && n.g === m.g && n.b === m.b && n.a === m.a, re = () => {
    const n = F.current;
    if (F.current = null, R.current = null, !n) return;
    const m = {
      ...n,
      a: B(H(n.a, 0, 1))
    }, N = _.current;
    N !== null && ee(m, N) || (_.current = m, D(m), p == null || p({
      color: m,
      hex: k(m),
      opacity: m.a
    }));
  }, K = (n) => {
    F.current = n, R.current == null && (R.current = window.requestAnimationFrame(re));
  };
  C(() => () => {
    R.current != null && (cancelAnimationFrame(R.current), R.current = null), F.current = null;
  }, []);
  const ne = de("ColorPicker", void 0, {
    type: f,
    controls: g,
    fullWidth: !!h
  }), te = (n) => {
    n.key && (L.current = !0);
  }, ae = () => {
    L.current = !1;
  };
  C(() => {
    !g || !z.current || L.current && (z.current.focus(), L.current = !1);
  }, [f, g]);
  const X = pe.filter((n) => x.includes(n.value)), T = !x.includes("hex") && x.includes("hexAlpha") ? X.map((n) => n.value === "hexAlpha" ? { ...n, label: "Hex" } : n) : X, oe = (n) => {
    const m = n.key;
    if (m === "Escape" || m === "Esc") {
      n.stopPropagation(), n.preventDefault();
      const N = n.target;
      N && typeof N.blur == "function" && N.blur();
    }
  };
  return /* @__PURE__ */ a(
    "div",
    {
      id: o,
      className: [ne, i].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: c,
      onKeyDownCapture: te,
      onMouseDownCapture: ae,
      onKeyDown: oe,
      ...s,
      style: {
        width: h ? void 0 : O
      },
      children: [
        f === "hex" && /* @__PURE__ */ a(
          ie,
          {
            color: k(l),
            onChange: (n) => {
              const m = W(n, l.a);
              m && K(m);
            }
          }
        ),
        f === "hexAlpha" && /* @__PURE__ */ a(
          le,
          {
            color: ce(l),
            onChange: (n) => {
              const m = me(n);
              m && K(m);
            }
          }
        ),
        f === "rgba" && /* @__PURE__ */ a(
          ue,
          {
            color: G(l),
            onChange: (n) => {
              K(d(n));
            }
          }
        ),
        g && /* @__PURE__ */ a("div", { className: "ColorPicker__controls", children: [
          f === "hex" && /* @__PURE__ */ a(
            fe,
            {
              color: l,
              setColor: (n) => K(n),
              type: f,
              setType: q,
              options: T,
              selectRef: z
            }
          ),
          f === "hexAlpha" && /* @__PURE__ */ a(
            he,
            {
              color: l,
              setColor: K,
              type: f,
              setType: q,
              options: T,
              selectRef: z
            }
          ),
          f === "rgba" && /* @__PURE__ */ a(
            ge,
            {
              color: l,
              setColor: K,
              type: f,
              setType: q,
              options: T,
              selectRef: z
            }
          )
        ] })
      ]
    }
  );
}, Re = se(xe);
export {
  Re as ColorPicker
};
