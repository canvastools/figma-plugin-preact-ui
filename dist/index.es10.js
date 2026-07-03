import "./index.es10.css";
import { jsx as i } from "./index.es203.js";
import { useState as P, useRef as F, useEffect as w, useMemo as X } from "preact/hooks";
import { Input as R } from "./index.es17.js";
import { Text as re } from "./index.es49.js";
import { Select as Z } from "./index.es40.js";
import { ControlGroup as te } from "./index.es12.js";
import { useNumericInput as M } from "./index.es57.js";
import { useStringInput as ne } from "./index.es58.js";
import { HexColorPicker as me, HexAlphaColorPicker as de, RgbaColorPicker as pe, RgbColorPicker as ge } from "./index.es212.js";
/* empty css            */
import { typedForwardRef as fe } from "./index.es205.js";
import { roundAlpha as K, clamp as B, colorToHex as k, hexToColor as J, colorToHexAlpha as he, hexAlphaToColor as xe, colorToRgba as W, rgbaToColor as d } from "./index.es64.js";
import { bem as be } from "./index.es65.js";
import { Fragment as Q } from "preact";
const l = {
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
}, Ve = [
  { value: "rgba", label: "RGB" },
  { value: "hex", label: "Hex" },
  { value: "hexAlpha", label: "Hex alpha" }
], ee = (n, o) => o ? n : n.map((b) => b === "hexAlpha" ? "hex" : b).filter((b, f, S) => S.indexOf(b) === f), Y = (n, o) => o.includes(n) ? n : n === "hexAlpha" && o.includes("hex") ? "hex" : o[0], ae = (n) => n.toUpperCase().replace(/[^0-9A-F]/g, "0").padEnd(6, "0").slice(0, 6), ve = ({
  color: n,
  setColor: o,
  type: b,
  setType: f,
  options: S,
  selectRef: y,
  showOpacity: V = !0
}) => {
  const e = W(n), h = M({
    value: e.r.toString(),
    required: !0,
    min: l.r.min,
    max: l.r.max,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: !0
  }), x = M({
    value: e.g.toString(),
    required: !0,
    min: l.g.min,
    max: l.g.max,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: !0
  }), C = M({
    value: e.b.toString(),
    required: !0,
    min: l.b.min,
    max: l.b.max,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: !0
  }), s = M({
    value: Math.round(e.a * 100).toString(),
    required: !0,
    min: 0,
    max: 100,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: !0
  }), [g, u] = P(e.r.toString()), [O, m] = P(e.g.toString()), [L, _] = P(e.b.toString()), [H, p] = P(Math.round(e.a * 100).toString());
  return w(() => {
    const a = W(n);
    u(a.r.toString()), m(a.g.toString()), _(a.b.toString()), p(Math.round(a.a * 100).toString());
  }, [n]), /* @__PURE__ */ i(Q, { children: [
    /* @__PURE__ */ i("div", { style: { width: "52px" }, children: /* @__PURE__ */ i(
      Z,
      {
        ref: y,
        options: S,
        value: b,
        onValueChange: (a) => f(a.value),
        tooltip: "Color mode",
        menuContainerProps: { width: 120 },
        fullWidth: !0
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "ColorPicker__controlsValues", children: /* @__PURE__ */ i(te, { groupFocus: !0, fullWidth: !0, children: [
      /* @__PURE__ */ i(
        R,
        {
          className: "ColorPicker__inputCompact",
          tooltip: "Red",
          selectOnFocus: !0,
          value: g,
          onValueChange: (a) => u(a.value),
          onBlur: (a) => {
            const r = h.parse(a.value);
            if (r.error === "required" || r.error === "invalid_number" || r.error === "not_integer") {
              o(d({ r: l.r.min, g: e.g, b: e.b, a: e.a })), u(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "less_than_min") {
              o(d({ r: l.r.min, g: e.g, b: e.b, a: e.a })), u(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "greater_than_max") {
              o(d({ r: l.r.max, g: e.g, b: e.b, a: e.a })), u(String(r.formattedValue ?? "0"));
              return;
            }
            o(d({ r: r.normalizedValue ?? 0, g: e.g, b: e.b, a: e.a })), u(String(r.formattedValue ?? "0"));
          },
          onKeyDown: (a) => h.handleKeyDown(a, (r) => {
            u(String(r));
          })
        }
      ),
      /* @__PURE__ */ i(
        R,
        {
          className: "ColorPicker__inputCompact",
          tooltip: "Green",
          selectOnFocus: !0,
          value: O,
          onValueChange: (a) => m(a.value),
          onBlur: (a) => {
            const r = x.parse(a.value);
            if (r.error === "required" || r.error === "invalid_number" || r.error === "not_integer") {
              o(d({ r: e.r, g: l.g.min, b: e.b, a: e.a })), m(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "less_than_min") {
              o(d({ r: e.r, g: l.g.min, b: e.b, a: e.a })), m(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "greater_than_max") {
              o(d({ r: e.r, g: l.g.max, b: e.b, a: e.a })), m(String(r.formattedValue ?? "0"));
              return;
            }
            o(d({ r: e.r, g: r.normalizedValue ?? 0, b: e.b, a: e.a })), m(String(r.formattedValue ?? "0"));
          },
          onKeyDown: (a) => x.handleKeyDown(a, (r) => {
            m(String(r));
          })
        }
      ),
      /* @__PURE__ */ i(
        R,
        {
          className: "ColorPicker__inputCompact",
          tooltip: "Blue",
          selectOnFocus: !0,
          value: L,
          onValueChange: (a) => _(a.value),
          onBlur: (a) => {
            const r = C.parse(a.value);
            if (r.error === "required" || r.error === "invalid_number" || r.error === "not_integer") {
              o(d({ r: e.r, g: e.g, b: l.b.min, a: e.a })), _(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "less_than_min") {
              o(d({ r: e.r, g: e.g, b: l.b.min, a: e.a })), _(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "greater_than_max") {
              o(d({ r: e.r, g: e.g, b: l.b.max, a: e.a })), _(String(r.formattedValue ?? "0"));
              return;
            }
            o(d({ r: e.r, g: e.g, b: r.normalizedValue ?? 0, a: e.a })), _(String(r.formattedValue ?? "0"));
          },
          onKeyDown: (a) => C.handleKeyDown(a, (r) => {
            _(String(r));
          })
        }
      ),
      V && /* @__PURE__ */ i(
        R,
        {
          className: "ColorPicker__controlOpacity",
          tooltip: "Opacity",
          selectOnFocus: !0,
          value: H,
          suffix: /* @__PURE__ */ i(re, { intentModifier: "secondary", children: /* @__PURE__ */ i("div", { className: "ColorPicker__controlOpacityContainer", children: "%" }) }),
          onValueChange: (a) => p(a.value),
          onBlur: (a) => {
            const r = s.parse(a.value);
            if (r.error === "required" || r.error === "invalid_number" || r.error === "not_integer") {
              o(d({ r: e.r, g: e.g, b: e.b, a: l.a.min })), p(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "less_than_min") {
              o(d({ r: e.r, g: e.g, b: e.b, a: l.a.min })), p(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "greater_than_max") {
              o(d({ r: e.r, g: e.g, b: e.b, a: l.a.max })), p(String(r.formattedValue ?? "0"));
              return;
            }
            const q = r.normalizedValue ?? 0, z = K(B(q / 100, l.a.min, l.a.max));
            o(d({ r: e.r, g: e.g, b: e.b, a: z })), p(String(r.formattedValue ?? "0"));
          },
          onKeyDown: (a) => s.handleKeyDown(a, (r) => {
            if (p(String(r)), typeof r != "number") return;
            const q = K(B(r / 100, l.a.min, l.a.max));
            o(d({ r: e.r, g: e.g, b: e.b, a: q }));
          })
        }
      )
    ] }) })
  ] });
}, _e = ({
  color: n,
  setColor: o,
  type: b,
  setType: f,
  options: S,
  selectRef: y
}) => {
  const [V, e] = P(k(n).slice(1));
  w(() => {
    e(k(n).slice(1));
  }, [n]);
  const h = ne({
    value: k(n).slice(1),
    required: !0,
    minLength: 6,
    maxLength: 6,
    allowedCharacters: "0123456789abcdefABCDEF",
    trim: !0,
    format: ae,
    normalizeOnError: !0
  });
  return /* @__PURE__ */ i(Q, { children: [
    /* @__PURE__ */ i("div", { style: { width: "52px" }, children: /* @__PURE__ */ i(
      Z,
      {
        ref: y,
        options: S,
        value: b,
        onValueChange: (x) => f(x.value),
        tooltip: "Color mode",
        menuContainerProps: { width: 120 },
        fullWidth: !0
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "ColorPicker__controlsValues", children: /* @__PURE__ */ i(
      R,
      {
        tooltip: "Hex value",
        selectOnFocus: !0,
        value: V.toUpperCase(),
        onValueChange: (x) => e(x.value),
        onBlur: (x) => {
          const C = h.parse(x.value), s = J(C.formattedValue, n.a);
          s && o({ ...n, ...s }), e(C.formattedValue);
        }
      }
    ) })
  ] });
}, Se = ({
  color: n,
  setColor: o,
  type: b,
  setType: f,
  options: S,
  selectRef: y
}) => {
  const [V, e] = P(k(n).slice(1));
  w(() => {
    e(k(n).slice(1));
  }, [n]);
  const h = ne({
    value: k(n).slice(1),
    required: !0,
    minLength: 6,
    maxLength: 6,
    allowedCharacters: "0123456789abcdefABCDEF",
    trim: !0,
    format: ae,
    normalizeOnError: !0
  }), x = M({
    // Work in 0–100% space for the UI, map back to 0–1 alpha in handlers
    value: Math.round(n.a * 100).toString(),
    required: !0,
    min: 0,
    max: 100,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: !0
  }), [C, s] = P(Math.round(n.a * 100).toString());
  return w(() => {
    s(Math.round(n.a * 100).toString());
  }, [n.a]), /* @__PURE__ */ i(Q, { children: [
    /* @__PURE__ */ i("div", { style: { width: "52px" }, children: /* @__PURE__ */ i(
      Z,
      {
        ref: y,
        options: S,
        value: b,
        onValueChange: (g) => f(g.value),
        tooltip: "Color mode",
        menuContainerProps: { width: 120 },
        fullWidth: !0
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "ColorPicker__controlsValues", children: /* @__PURE__ */ i(te, { groupFocus: !0, fullWidth: !0, children: [
      /* @__PURE__ */ i(
        R,
        {
          tooltip: "Hex value",
          selectOnFocus: !0,
          value: V.toUpperCase(),
          onValueChange: (g) => e(g.value),
          onBlur: (g) => {
            const u = h.parse(g.value), O = J(u.formattedValue, n.a);
            O && o({ ...n, ...O }), e(u.formattedValue);
          }
        }
      ),
      /* @__PURE__ */ i(
        R,
        {
          tooltip: "Opacity",
          selectOnFocus: !0,
          className: "ColorPicker__controlOpacity",
          value: C,
          suffix: /* @__PURE__ */ i(re, { intentModifier: "secondary", children: /* @__PURE__ */ i("div", { className: "ColorPicker__controlOpacityContainer", children: "%" }) }),
          onValueChange: (g) => {
            s(g.value);
          },
          onBlur: (g) => {
            const u = x.parse(g.value);
            if (u.error === "required" || u.error === "invalid_number" || u.error === "not_integer") {
              o({ ...n, a: E.a.min }), s(String(u.formattedValue));
              return;
            }
            if (u.error === "less_than_min") {
              o({ ...n, a: E.a.min }), s(String(u.formattedValue));
              return;
            }
            if (u.error === "greater_than_max") {
              o({ ...n, a: E.a.max }), s(String(u.formattedValue));
              return;
            }
            const O = u.normalizedValue ?? 0, m = K(B(O / 100, E.a.min, E.a.max));
            o({ ...n, a: m }), s(String(u.formattedValue));
          },
          onKeyDown: (g) => x.handleKeyDown(g, (u) => {
            if (s(String(u)), typeof u != "number") return;
            const O = K(B(u / 100, E.a.min, E.a.max));
            o({ ...n, a: O });
          })
        }
      )
    ] }) })
  ] });
}, ye = ({
  id: n,
  className: o,
  defaultType: b = "hex",
  type: f,
  defaultColor: S,
  types: y,
  color: V,
  showControls: e = !0,
  alpha: h = !0,
  width: x = 207,
  fullWidth: C = !1,
  onTypeChange: s,
  onColorChange: g,
  ...u
}, O) => {
  const [m, L] = P(() => V || S || { r: 1, g: 0, b: 0, a: 1 }), _ = F(null);
  w(() => {
    if (V) {
      const t = {
        ...V,
        a: K(B(V.a, 0, 1))
      };
      L(t), _.current = t;
    }
  }, [V]);
  const H = X(
    () => y && y.length ? y : ["hex", "hexAlpha", "rgba"],
    [y]
  ), p = X(() => ee(H, h), [H, h]), [a, r] = P(
    () => Y(b, ee(H, h))
  );
  w(() => {
    f && r(f);
  }, [f]);
  const q = X(() => p && p.length ? p.join("|") : "", [p]), z = F(p);
  z.current = p, w(() => {
    if (f || z.current.includes(a)) return;
    const t = Y(a, z.current);
    t !== a && (r(t), s == null || s({ type: t }));
  }, [a, q, f, s]);
  const v = Y(a, p), U = (t) => {
    t !== a && (r(t), s == null || s({ type: t }));
  }, I = F(null), G = F(!1), T = F(null), D = F(null), oe = (t, c) => t.r === c.r && t.g === c.g && t.b === c.b && t.a === c.a, ie = () => {
    const t = T.current;
    if (T.current = null, D.current = null, !t) return;
    const c = {
      ...t,
      a: K(B(t.a, 0, 1))
    }, N = _.current;
    N !== null && oe(c, N) || (_.current = c, L(c), g == null || g({
      color: c,
      hex: k(c),
      opacity: c.a
    }));
  }, A = (t) => {
    T.current = t, D.current == null && (D.current = window.requestAnimationFrame(ie));
  };
  w(() => () => {
    D.current != null && (cancelAnimationFrame(D.current), D.current = null), T.current = null;
  }, []);
  const ue = be("ColorPicker", void 0, {
    type: v,
    controls: e,
    fullWidth: !!C
  }), le = (t) => {
    t.key && (G.current = !0);
  }, se = () => {
    G.current = !1;
  };
  w(() => {
    !e || !I.current || G.current && (I.current.focus(), G.current = !1);
  }, [v, e]);
  const $ = Ve.filter((t) => p.includes(t.value)), j = !p.includes("hex") && p.includes("hexAlpha") ? $.map((t) => t.value === "hexAlpha" ? { ...t, label: "Hex" } : t) : $, ce = (t) => {
    const c = t.key;
    if (c === "Escape" || c === "Esc") {
      t.stopPropagation(), t.preventDefault();
      const N = t.target;
      N && typeof N.blur == "function" && N.blur();
    }
  };
  return /* @__PURE__ */ i(
    "div",
    {
      id: n,
      className: [ue, o].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: O,
      onKeyDownCapture: le,
      onMouseDownCapture: se,
      onKeyDown: ce,
      ...u,
      style: {
        width: C ? void 0 : x
      },
      children: [
        v === "hex" && /* @__PURE__ */ i(
          me,
          {
            color: k(m),
            onChange: (t) => {
              const c = J(t, m.a);
              c && A(c);
            }
          }
        ),
        v === "hexAlpha" && /* @__PURE__ */ i(
          de,
          {
            color: he(m),
            onChange: (t) => {
              const c = xe(t);
              c && A(c);
            }
          }
        ),
        v === "rgba" && h && /* @__PURE__ */ i(
          pe,
          {
            color: W(m),
            onChange: (t) => {
              A(d(t));
            }
          }
        ),
        v === "rgba" && !h && /* @__PURE__ */ i(
          ge,
          {
            color: W(m),
            onChange: (t) => {
              A(d({ ...t, a: m.a }));
            }
          }
        ),
        e && /* @__PURE__ */ i("div", { className: "ColorPicker__controls", children: [
          v === "hex" && /* @__PURE__ */ i(
            _e,
            {
              color: m,
              setColor: (t) => A(t),
              type: v,
              setType: U,
              options: j,
              selectRef: I
            }
          ),
          v === "hexAlpha" && /* @__PURE__ */ i(
            Se,
            {
              color: m,
              setColor: A,
              type: v,
              setType: U,
              options: j,
              selectRef: I
            }
          ),
          v === "rgba" && /* @__PURE__ */ i(
            ve,
            {
              color: m,
              setColor: A,
              type: v,
              setType: U,
              options: j,
              selectRef: I,
              showOpacity: h
            }
          )
        ] })
      ]
    }
  );
}, qe = fe(ye);
export {
  qe as ColorPicker
};
