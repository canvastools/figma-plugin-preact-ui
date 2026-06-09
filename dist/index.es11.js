import "./index.es11.css";
import { jsx as s } from "./index.es178.js";
import { useRef as v } from "preact/hooks";
import { Tooltip as R } from "./index.es50.js";
/* empty css            */
import { typedForwardRef as j } from "./index.es180.js";
import { bem as k } from "./index.es63.js";
import { colorToHex as F, colorToHexAlpha as f } from "./index.es62.js";
const H = (r) => "gradientStops" in r, I = (r) => r.a < 1, P = (r, e = !1) => {
  const { r: c, g: o, b: n, a } = r.color;
  return `rgba(${Math.round(c * 255)}, ${Math.round(o * 255)}, ${Math.round(n * 255)}, ${e ? 1 : a}) ${r.position * 100}%`;
}, D = (r, e = !1) => {
  const c = r.gradientStops.map((a) => P(a, e)).join(", "), [o, n] = r.gradientHandlePositions;
  switch (r.type) {
    case "gradient-linear":
      return `linear-gradient(${Math.atan2(n.y - o.y, n.x - o.x) * (180 / Math.PI) + 90}deg, ${c})`;
    case "gradient-radial":
      return `radial-gradient(circle at ${o.x * 100}% ${o.y * 100}%, ${c})`;
    case "gradient-angular":
      return `conic-gradient(from ${Math.atan2(n.y - o.y, n.x - o.x) * (180 / Math.PI) + 90}deg at ${o.x * 100}% ${o.y * 100}%, ${c})`;
  }
}, S = (r, e = !0) => H(r) ? [{ background: D(r) }] : e && I(r) ? [{ backgroundColor: F(r) }, { backgroundColor: f(r) }] : [{ backgroundColor: f(r) }], E = ({
  id: r,
  className: e,
  size: c = "medium",
  fill: o,
  alpha: n = !0,
  disabled: a = !1,
  selected: $ = !1,
  selection: w = "default",
  tooltip: h,
  children: g,
  tabIndex: x,
  onClick: u,
  ...C
}, i) => {
  const p = v(null), y = Array.isArray(o), _ = y ? o.length > 0 : o !== void 0, b = k("ColorSwatch", void 0, {
    selection: w,
    value: _,
    size: c,
    disabled: a,
    selected: $
  }), M = (t) => {
    a || (t.key === "Escape" || t.key === "Esc") && t.currentTarget.blur();
  }, {
    onClick: d,
    onKeyDown: m,
    ...N
  } = C;
  return /* @__PURE__ */ s(
    "button",
    {
      id: r,
      className: [b, e].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: (t) => {
        typeof i == "function" ? i(t) : i && (i.current = t), p.current = t;
      },
      ...N,
      "aria-disabled": a || void 0,
      tabIndex: a ? -1 : x,
      onClick: (t) => {
        a || (d == null || d(t), u == null || u({ event: t, fill: o }));
      },
      onKeyDown: (t) => {
        M(t), m == null || m(t);
      },
      children: [
        /* @__PURE__ */ s("div", { className: "ColorSwatch__container", children: [
          y ? o.map((t, l) => /* @__PURE__ */ s("div", { className: "ColorSwatch__layer", children: S(t, n).map((A, T) => /* @__PURE__ */ s("div", { className: "ColorSwatch__fill", style: A }, T)) }, l)) : o && S(o, n).map((t, l) => /* @__PURE__ */ s("div", { className: "ColorSwatch__fill", style: t }, l)),
          g && /* @__PURE__ */ s("div", { className: "ColorSwatch__children", children: g })
        ] }),
        h && /* @__PURE__ */ s(R, { anchorRef: p, children: h })
      ]
    }
  );
}, Q = j(E);
export {
  Q as ColorSwatch
};
