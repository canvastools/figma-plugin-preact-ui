import "./index.es10.css";
import { jsx as i } from "./index.es178.js";
import { useState as w, useRef as z, useEffect as P, useMemo as X } from "preact/hooks";
import { ControlGroup as ee } from "./index.es12.js";
import { Input as D } from "./index.es17.js";
import { Select as Y } from "./index.es38.js";
import { Text as re } from "./index.es47.js";
import { useNumericInput as I } from "./index.es55.js";
import { useStringInput as te } from "./index.es56.js";
import { HexColorPicker as ce, HexAlphaColorPicker as me, RgbaColorPicker as de, RgbColorPicker as ge } from "./index.es187.js";
/* empty css            */
import { typedForwardRef as pe } from "./index.es180.js";
import { roundAlpha as K, clamp as B, colorToHex as k, hexToColor as Z, colorToHexAlpha as fe, hexAlphaToColor as he, colorToRgba as U, rgbaToColor as g } from "./index.es62.js";
import { bem as xe } from "./index.es63.js";
import { Fragment as J } from "preact";
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
}, be = [
  { value: "rgba", label: "RGB" },
  { value: "hex", label: "Hex" },
  { value: "hexAlpha", label: "Hex alpha" }
], $ = (n, o) => o ? n : n.map((h) => h === "hexAlpha" ? "hex" : h).filter((h, f, S) => S.indexOf(h) === f), W = (n, o) => o.includes(n) ? n : n === "hexAlpha" && o.includes("hex") ? "hex" : o[0], ne = (n) => n.toUpperCase().replace(/[^0-9A-F]/g, "0").padEnd(6, "0").slice(0, 6), Ve = ({
  color: n,
  setColor: o,
  type: h,
  setType: f,
  options: S,
  selectRef: y,
  showOpacity: v = !0
}) => {
  const e = U(n), b = I({
    value: e.r.toString(),
    required: !0,
    min: u.r.min,
    max: u.r.max,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: !0
  }), V = I({
    value: e.g.toString(),
    required: !0,
    min: u.g.min,
    max: u.g.max,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: !0
  }), C = I({
    value: e.b.toString(),
    required: !0,
    min: u.b.min,
    max: u.b.max,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: !0
  }), s = I({
    value: Math.round(e.a * 100).toString(),
    required: !0,
    min: 0,
    max: 100,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: !0
  }), [p, l] = w(e.r.toString()), [O, d] = w(e.g.toString()), [M, _] = w(e.b.toString()), [F, c] = w(Math.round(e.a * 100).toString());
  return P(() => {
    const a = U(n);
    l(a.r.toString()), d(a.g.toString()), _(a.b.toString()), c(Math.round(a.a * 100).toString());
  }, [n]), /* @__PURE__ */ i(J, { children: [
    /* @__PURE__ */ i("div", { style: { minWidth: "52px" }, children: /* @__PURE__ */ i(
      Y,
      {
        ref: y,
        options: S,
        value: h,
        onValueChange: (a) => f(a.value),
        tooltip: "Color mode",
        menuContainerProps: { width: 120 }
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "ColorPicker__controlsValues", children: /* @__PURE__ */ i(ee, { groupFocus: !0, fullWidth: !0, children: [
      /* @__PURE__ */ i(
        D,
        {
          className: "ColorPicker__inputCompact",
          tooltip: "Red",
          value: p,
          onValueChange: (a) => l(a.value),
          onBlur: (a) => {
            const r = b.parse(a.value);
            if (r.error === "required" || r.error === "invalid_number" || r.error === "not_integer") {
              o(g({ r: u.r.min, g: e.g, b: e.b, a: e.a })), l(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "less_than_min") {
              o(g({ r: u.r.min, g: e.g, b: e.b, a: e.a })), l(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "greater_than_max") {
              o(g({ r: u.r.max, g: e.g, b: e.b, a: e.a })), l(String(r.formattedValue ?? "0"));
              return;
            }
            o(g({ r: r.normalizedValue ?? 0, g: e.g, b: e.b, a: e.a })), l(String(r.formattedValue ?? "0"));
          },
          onKeyDown: (a) => b.handleKeyDown(a, (r) => {
            l(String(r));
          })
        }
      ),
      /* @__PURE__ */ i(
        D,
        {
          className: "ColorPicker__inputCompact",
          tooltip: "Green",
          selectOnFocus: !0,
          value: O,
          onValueChange: (a) => d(a.value),
          onBlur: (a) => {
            const r = V.parse(a.value);
            if (r.error === "required" || r.error === "invalid_number" || r.error === "not_integer") {
              o(g({ r: e.r, g: u.g.min, b: e.b, a: e.a })), d(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "less_than_min") {
              o(g({ r: e.r, g: u.g.min, b: e.b, a: e.a })), d(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "greater_than_max") {
              o(g({ r: e.r, g: u.g.max, b: e.b, a: e.a })), d(String(r.formattedValue ?? "0"));
              return;
            }
            o(g({ r: e.r, g: r.normalizedValue ?? 0, b: e.b, a: e.a })), d(String(r.formattedValue ?? "0"));
          },
          onKeyDown: (a) => V.handleKeyDown(a, (r) => {
            d(String(r));
          })
        }
      ),
      /* @__PURE__ */ i(
        D,
        {
          className: "ColorPicker__inputCompact",
          tooltip: "Blue",
          selectOnFocus: !0,
          value: M,
          onValueChange: (a) => _(a.value),
          onBlur: (a) => {
            const r = C.parse(a.value);
            if (r.error === "required" || r.error === "invalid_number" || r.error === "not_integer") {
              o(g({ r: e.r, g: e.g, b: u.b.min, a: e.a })), _(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "less_than_min") {
              o(g({ r: e.r, g: e.g, b: u.b.min, a: e.a })), _(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "greater_than_max") {
              o(g({ r: e.r, g: e.g, b: u.b.max, a: e.a })), _(String(r.formattedValue ?? "0"));
              return;
            }
            o(g({ r: e.r, g: e.g, b: r.normalizedValue ?? 0, a: e.a })), _(String(r.formattedValue ?? "0"));
          },
          onKeyDown: (a) => C.handleKeyDown(a, (r) => {
            _(String(r));
          })
        }
      ),
      v && /* @__PURE__ */ i(
        D,
        {
          className: "ColorPicker__controlOpacity",
          tooltip: "Opacity",
          selectOnFocus: !0,
          value: F,
          suffix: /* @__PURE__ */ i(re, { intentModifier: "secondary", children: /* @__PURE__ */ i("div", { className: "ColorPicker__controlOpacityContainer", children: "%" }) }),
          onValueChange: (a) => c(a.value),
          onBlur: (a) => {
            const r = s.parse(a.value);
            if (r.error === "required" || r.error === "invalid_number" || r.error === "not_integer") {
              o(g({ r: e.r, g: e.g, b: e.b, a: u.a.min })), c(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "less_than_min") {
              o(g({ r: e.r, g: e.g, b: e.b, a: u.a.min })), c(String(r.formattedValue ?? "0"));
              return;
            }
            if (r.error === "greater_than_max") {
              o(g({ r: e.r, g: e.g, b: e.b, a: u.a.max })), c(String(r.formattedValue ?? "0"));
              return;
            }
            const H = r.normalizedValue ?? 0, x = K(B(H / 100, u.a.min, u.a.max));
            o(g({ r: e.r, g: e.g, b: e.b, a: x })), c(String(r.formattedValue ?? "0"));
          },
          onKeyDown: (a) => s.handleKeyDown(a, (r) => {
            if (c(String(r)), typeof r != "number") return;
            const H = K(B(r / 100, u.a.min, u.a.max));
            o(g({ r: e.r, g: e.g, b: e.b, a: H }));
          })
        }
      )
    ] }) })
  ] });
}, ve = ({
  color: n,
  setColor: o,
  type: h,
  setType: f,
  options: S,
  selectRef: y
}) => {
  const [v, e] = w(k(n).slice(1));
  P(() => {
    e(k(n).slice(1));
  }, [n]);
  const b = te({
    value: k(n).slice(1),
    required: !0,
    minLength: 6,
    maxLength: 6,
    allowedCharacters: "0123456789abcdefABCDEF",
    trim: !0,
    format: ne,
    normalizeOnError: !0
  });
  return /* @__PURE__ */ i(J, { children: [
    /* @__PURE__ */ i("div", { style: { minWidth: "52px" }, children: /* @__PURE__ */ i(
      Y,
      {
        ref: y,
        options: S,
        value: h,
        onValueChange: (V) => f(V.value),
        tooltip: "Color mode",
        menuContainerProps: { width: 120 }
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "ColorPicker__controlsValues", children: /* @__PURE__ */ i(
      D,
      {
        tooltip: "Hex value",
        selectOnFocus: !0,
        value: v.toUpperCase(),
        onValueChange: (V) => e(V.value),
        onBlur: (V) => {
          const C = b.parse(V.value), s = Z(C.formattedValue, n.a);
          s && o({ ...n, ...s }), e(C.formattedValue);
        }
      }
    ) })
  ] });
}, _e = ({
  color: n,
  setColor: o,
  type: h,
  setType: f,
  options: S,
  selectRef: y
}) => {
  const [v, e] = w(k(n).slice(1));
  P(() => {
    e(k(n).slice(1));
  }, [n]);
  const b = te({
    value: k(n).slice(1),
    required: !0,
    minLength: 6,
    maxLength: 6,
    allowedCharacters: "0123456789abcdefABCDEF",
    trim: !0,
    format: ne,
    normalizeOnError: !0
  }), V = I({
    // Work in 0–100% space for the UI, map back to 0–1 alpha in handlers
    value: Math.round(n.a * 100).toString(),
    required: !0,
    min: 0,
    max: 100,
    precision: 0,
    step: 1,
    stepLarge: 10,
    normalizeOnError: !0
  }), [C, s] = w(Math.round(n.a * 100).toString());
  return P(() => {
    s(Math.round(n.a * 100).toString());
  }, [n.a]), /* @__PURE__ */ i(J, { children: [
    /* @__PURE__ */ i("div", { style: { minWidth: "52px" }, children: /* @__PURE__ */ i(
      Y,
      {
        ref: y,
        options: S,
        value: h,
        onValueChange: (p) => f(p.value),
        tooltip: "Color mode",
        menuContainerProps: { width: 120 }
      }
    ) }),
    /* @__PURE__ */ i("div", { className: "ColorPicker__controlsValues", children: /* @__PURE__ */ i(ee, { groupFocus: !0, fullWidth: !0, children: [
      /* @__PURE__ */ i(
        D,
        {
          tooltip: "Hex value",
          selectOnFocus: !0,
          value: v.toUpperCase(),
          onValueChange: (p) => e(p.value),
          onBlur: (p) => {
            const l = b.parse(p.value), O = Z(l.formattedValue, n.a);
            O && o({ ...n, ...O }), e(l.formattedValue);
          }
        }
      ),
      /* @__PURE__ */ i(
        D,
        {
          tooltip: "Opacity",
          selectOnFocus: !0,
          className: "ColorPicker__controlOpacity",
          value: C,
          suffix: /* @__PURE__ */ i(re, { intentModifier: "secondary", children: /* @__PURE__ */ i("div", { className: "ColorPicker__controlOpacityContainer", children: "%" }) }),
          onValueChange: (p) => {
            s(p.value);
          },
          onBlur: (p) => {
            const l = V.parse(p.value);
            if (l.error === "required" || l.error === "invalid_number" || l.error === "not_integer") {
              o({ ...n, a: E.a.min }), s(String(l.formattedValue));
              return;
            }
            if (l.error === "less_than_min") {
              o({ ...n, a: E.a.min }), s(String(l.formattedValue));
              return;
            }
            if (l.error === "greater_than_max") {
              o({ ...n, a: E.a.max }), s(String(l.formattedValue));
              return;
            }
            const O = l.normalizedValue ?? 0, d = K(B(O / 100, E.a.min, E.a.max));
            o({ ...n, a: d }), s(String(l.formattedValue));
          },
          onKeyDown: (p) => V.handleKeyDown(p, (l) => {
            if (s(String(l)), typeof l != "number") return;
            const O = K(B(l / 100, E.a.min, E.a.max));
            o({ ...n, a: O });
          })
        }
      )
    ] }) })
  ] });
}, Se = ({
  id: n,
  className: o,
  defaultType: h = "hex",
  type: f,
  defaultColor: S,
  types: y,
  color: v,
  showControls: e = !0,
  alpha: b = !0,
  width: V = 207,
  fullWidth: C = !1,
  onTypeChange: s,
  onColorChange: p,
  ...l
}, O) => {
  const [d, M] = w(() => v || S || { r: 1, g: 0, b: 0, a: 1 }), _ = z(null);
  P(() => {
    if (v) {
      const t = {
        ...v,
        a: K(B(v.a, 0, 1))
      };
      M(t), _.current = t;
    }
  }, [v]);
  const F = X(
    () => y && y.length ? y : ["hex", "hexAlpha", "rgba"],
    [y]
  ), c = X(
    () => $(F, b),
    [F, b]
  ), [a, r] = w(
    () => W(h, $(F, b))
  );
  P(() => {
    f && r(f);
  }, [f]);
  const H = X(() => c && c.length ? c.join("|") : "", [c]);
  P(() => {
    if (f)
      return;
    const t = W(h, c);
    r(t);
  }, [h, H, c, f]), P(() => {
    if (f || c.includes(a)) return;
    const t = W(a, c);
    t !== a && (r(t), s == null || s({ type: t }));
  }, [a, c, f, s]);
  const x = W(a, c), T = (t) => {
    t !== a && (r(t), s == null || s({ type: t }));
  }, q = z(null), L = z(!1), G = z(null), R = z(null), ae = (t, m) => t.r === m.r && t.g === m.g && t.b === m.b && t.a === m.a, oe = () => {
    const t = G.current;
    if (G.current = null, R.current = null, !t) return;
    const m = {
      ...t,
      a: K(B(t.a, 0, 1))
    }, N = _.current;
    N !== null && ae(m, N) || (_.current = m, M(m), p == null || p({
      color: m,
      hex: k(m),
      opacity: m.a
    }));
  }, A = (t) => {
    G.current = t, R.current == null && (R.current = window.requestAnimationFrame(oe));
  };
  P(() => () => {
    R.current != null && (cancelAnimationFrame(R.current), R.current = null), G.current = null;
  }, []);
  const ie = xe("ColorPicker", void 0, {
    type: x,
    controls: e,
    fullWidth: !!C
  }), le = (t) => {
    t.key && (L.current = !0);
  }, ue = () => {
    L.current = !1;
  };
  P(() => {
    !e || !q.current || L.current && (q.current.focus(), L.current = !1);
  }, [x, e]);
  const Q = be.filter((t) => c.includes(t.value)), j = !c.includes("hex") && c.includes("hexAlpha") ? Q.map((t) => t.value === "hexAlpha" ? { ...t, label: "Hex" } : t) : Q, se = (t) => {
    const m = t.key;
    if (m === "Escape" || m === "Esc") {
      t.stopPropagation(), t.preventDefault();
      const N = t.target;
      N && typeof N.blur == "function" && N.blur();
    }
  };
  return /* @__PURE__ */ i(
    "div",
    {
      id: n,
      className: [ie, o].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: O,
      onKeyDownCapture: le,
      onMouseDownCapture: ue,
      onKeyDown: se,
      ...l,
      style: {
        width: C ? void 0 : V
      },
      children: [
        x === "hex" && /* @__PURE__ */ i(
          ce,
          {
            color: k(d),
            onChange: (t) => {
              const m = Z(t, d.a);
              m && A(m);
            }
          }
        ),
        x === "hexAlpha" && /* @__PURE__ */ i(
          me,
          {
            color: fe(d),
            onChange: (t) => {
              const m = he(t);
              m && A(m);
            }
          }
        ),
        x === "rgba" && b && /* @__PURE__ */ i(
          de,
          {
            color: U(d),
            onChange: (t) => {
              A(g(t));
            }
          }
        ),
        x === "rgba" && !b && /* @__PURE__ */ i(
          ge,
          {
            color: U(d),
            onChange: (t) => {
              A(g({ ...t, a: d.a }));
            }
          }
        ),
        e && /* @__PURE__ */ i("div", { className: "ColorPicker__controls", children: [
          x === "hex" && /* @__PURE__ */ i(
            ve,
            {
              color: d,
              setColor: (t) => A(t),
              type: x,
              setType: T,
              options: j,
              selectRef: q
            }
          ),
          x === "hexAlpha" && /* @__PURE__ */ i(
            _e,
            {
              color: d,
              setColor: A,
              type: x,
              setType: T,
              options: j,
              selectRef: q
            }
          ),
          x === "rgba" && /* @__PURE__ */ i(
            Ve,
            {
              color: d,
              setColor: A,
              type: x,
              setType: T,
              options: j,
              selectRef: q,
              showOpacity: b
            }
          )
        ] })
      ]
    }
  );
}, He = pe(Se);
export {
  He as ColorPicker
};
