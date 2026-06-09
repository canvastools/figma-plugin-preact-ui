import "./index.es4.css";
import { jsx as d } from "./index.es178.js";
/* empty css            */
import { typedForwardRef as p } from "./index.es180.js";
import { bem as n } from "./index.es63.js";
const f = ({ id: o, className: r, showDividerTop: t = !1, showDividerBottom: m = !1, children: e, ...i }, a) => {
  const s = n("Bar", void 0, {
    dividerTop: t,
    dividerBottom: m
  });
  return /* @__PURE__ */ d("div", { id: o, className: [s, r].join(" ").trim(), ref: a, ...i, children: e });
}, j = p(f);
export {
  j as Bar
};
