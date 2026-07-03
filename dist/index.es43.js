import "./index.es43.css";
import { jsx as l } from "./index.es203.js";
/* empty css            */
import { typedForwardRef as d } from "./index.es205.js";
import { bem as S } from "./index.es65.js";
const k = ({
  id: t,
  className: o,
  direction: r = "column",
  spacing: a,
  x: s = "start",
  y: m = "start",
  fullHeight: c = !1,
  fullWidth: e = !1,
  children: i,
  ...n
}, p) => {
  const f = S("Stack", void 0, {
    direction: r,
    spacing: String(a),
    x: s,
    y: m,
    fullHeight: c,
    fullWidth: e
  });
  return /* @__PURE__ */ l("div", { id: t, className: [f, o].join(" ").trim(), ref: p, ...n, children: i });
}, x = d(k);
export {
  x as Stack
};
