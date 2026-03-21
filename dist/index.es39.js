import "./index.es39.css";
import { jsx as s } from "./index.es129.js";
/* empty css            */
import { typedForwardRef as a } from "./index.es131.js";
import { bem as c } from "./index.es62.js";
const e = ({ id: o, className: r, size: i, direction: m = "column", ...t }, n) => {
  const p = c("Spacing", void 0, {
    size: String(i),
    direction: m
  });
  return /* @__PURE__ */ s("div", { id: o, className: [p, r].join(" ").trim(), ref: n, ...t });
}, l = a(e);
export {
  l as Spacing
};
