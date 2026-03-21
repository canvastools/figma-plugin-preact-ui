import "./index.es11.css";
import { jsx as t } from "./index.es129.js";
import { useRef as g } from "preact/hooks";
import { Tooltip as b } from "./index.es50.js";
/* empty css            */
import { typedForwardRef as x } from "./index.es131.js";
import { bem as R } from "./index.es62.js";
import { colorToHex as u, colorToHexAlpha as T } from "./index.es61.js";
import { Fragment as j } from "preact";
const h = (a) => a ? a.a < 1 : !1, k = ({
  id: a,
  className: p,
  size: d = "medium",
  color: o,
  disabled: e = !1,
  selected: w = !1,
  selection: _ = "default",
  tooltip: m,
  children: l,
  onClick: n,
  ...y
}, s) => {
  const f = g(null), C = R("ColorSwatch", void 0, {
    selection: _,
    value: !!o,
    size: d,
    disabled: e,
    selected: w
  }), S = (r) => {
    e || (r.key === "Escape" || r.key === "Esc") && r.currentTarget.blur();
  }, { onClick: c, onKeyDown: i, ...N } = y;
  return /* @__PURE__ */ t(
    "button",
    {
      id: a,
      className: [C, p].join(" ").trim(),
      "data-pui-interactive": "true",
      ref: (r) => {
        typeof s == "function" ? s(r) : s && (s.current = r), f.current = r;
      },
      ...N,
      disabled: e,
      onClick: (r) => {
        c == null || c(r), !e && (n == null || n({ event: r, color: o }));
      },
      onKeyDown: (r) => {
        S(r), i == null || i(r);
      },
      children: [
        /* @__PURE__ */ t("div", { className: "ColorSwatch__container", children: [
          o && h(o) && /* @__PURE__ */ t(j, { children: [
            /* @__PURE__ */ t("div", { className: "ColorSwatch__fill", style: { backgroundColor: u(o) } }),
            /* @__PURE__ */ t("div", { className: "ColorSwatch__fill", style: { backgroundColor: T(o) } })
          ] }),
          o && !h(o) && /* @__PURE__ */ t("div", { className: "ColorSwatch__fill", style: { backgroundColor: u(o) } }),
          l && /* @__PURE__ */ t("div", { className: "ColorSwatch__children", children: l })
        ] }),
        m && /* @__PURE__ */ t(b, { anchorRef: f, children: m })
      ]
    }
  );
}, z = x(k);
export {
  z as ColorSwatch
};
