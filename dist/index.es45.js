import "./index.es45.css";
import { jsx as o } from "./index.es129.js";
/* empty css            */
import { typedForwardRef as n } from "./index.es131.js";
import { bem as p } from "./index.es62.js";
const f = ({ id: s, className: a, variant: m = "default", children: t, ...r }, i) => {
  const e = p("TabList", void 0, {
    variant: m
  });
  return /* @__PURE__ */ o("div", { id: s, className: [e, a].join(" ").trim(), ref: i, ...r, children: t != null && t !== !1 && t !== !0 && /* @__PURE__ */ o("div", { className: "TabList__children", children: t }) });
}, u = n(f);
export {
  u as TabList
};
