import "./index.es11.css";
import { jsx as s } from "./index.es143.js";
import { useRef as C } from "preact/hooks";
import { Tooltip as b } from "./index.es50.js";
/* empty css            */
import { typedForwardRef as M } from "./index.es145.js";
import { bem as _ } from "./index.es62.js";
import { colorToHex as h, colorToHexAlpha as T } from "./index.es61.js";
const N = (r) => "gradientStops" in r, R = (r) => r.a < 1, j = (r, c = !1) => {
  const { r: n, g: o, b: a, a: e } = r.color;
  return `rgba(${Math.round(n * 255)}, ${Math.round(o * 255)}, ${Math.round(a * 255)}, ${c ? 1 : e}) ${r.position * 100}%`;
}, k = (r, c = !1) => {
  const n = r.gradientStops.map((e) => j(e, c)).join(", "), [o, a] = r.gradientHandlePositions;
  switch (r.type) {
    case "gradient-linear":
      return `linear-gradient(${Math.atan2(a.y - o.y, a.x - o.x) * (180 / Math.PI) + 90}deg, ${n})`;
    case "gradient-radial":
      return `radial-gradient(circle at ${o.x * 100}% ${o.y * 100}%, ${n})`;
    case "gradient-angular":
      return `conic-gradient(from ${Math.atan2(a.y - o.y, a.x - o.x) * (180 / Math.PI) + 90}deg at ${o.x * 100}% ${o.y * 100}%, ${n})`;
  }
}, A = (r) => N(r) ? [{ background: k(r) }] : R(r) ? [{ backgroundColor: h(r) }, { backgroundColor: T(r) }] : [{ backgroundColor: h(r) }], H = ({
  id: r,
  className: c,
  size: n = "medium",
  fill: o,
  disabled: a = !1,
  selected: e = !1,
  selection: f = "default",
  tooltip: l,
  children: g,
  onClick: u,
  ...y
}, i) => {
  const p = C(null), $ = _("ColorSwatch", void 0, {
    selection: f,
    value: !!o,
    size: n,
    disabled: a,
    selected: e
  }), S = (t) => {
    a || (t.key === "Escape" || t.key === "Esc") && t.currentTarget.blur();
  }, {
    onClick: d,
    onKeyDown: m,
    ...w
  } = y;
  return /* @__PURE__ */ s(
    "button",
    {
      id: r,
      className: [$, c].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: (t) => {
        typeof i == "function" ? i(t) : i && (i.current = t), p.current = t;
      },
      ...w,
      disabled: a,
      onClick: (t) => {
        d == null || d(t), !a && (u == null || u({ event: t, fill: o }));
      },
      onKeyDown: (t) => {
        S(t), m == null || m(t);
      },
      children: [
        /* @__PURE__ */ s("div", { className: "ColorSwatch__container", children: [
          o && A(o).map((t, x) => /* @__PURE__ */ s("div", { className: "ColorSwatch__fill", style: t }, x)),
          g && /* @__PURE__ */ s("div", { className: "ColorSwatch__children", children: g })
        ] }),
        l && /* @__PURE__ */ s(b, { anchorRef: p, children: l })
      ]
    }
  );
}, q = M(H);
export {
  q as ColorSwatch
};
