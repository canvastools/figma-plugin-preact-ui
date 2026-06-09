import "./index.es9.css";
import { jsx as s } from "./index.es178.js";
/* empty css            */
import { typedForwardRef as d } from "./index.es180.js";
import { bem as p } from "./index.es63.js";
const a = ({ id: o, className: r, variant: e = "inline", children: m, ...t }, i) => {
  const n = p("Code", void 0, { variant: e });
  return /* @__PURE__ */ s("div", { id: o, className: [n, r].join(" ").trim(), ref: i, ...t, children: m });
}, j = d(a);
export {
  j as Code
};
